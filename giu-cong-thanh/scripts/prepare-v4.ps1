$ErrorActionPreference='Stop';Add-Type -AssemblyName System.Drawing
$project=Split-Path $PSScriptRoot -Parent;$world=Split-Path $project -Parent;$out=Join-Path $project 'public/assets/v4';New-Item -ItemType Directory -Path $out -Force|Out-Null
$old=Get-Content (Join-Path $project 'public/catalog-v3.json') -Raw|ConvertFrom-Json;$actors=@($old.actors);$props=@($old.props);$effects=@($old.effects)
$hunt='monster/craftpix-net-789196-free-top-down-hunt-animals-pixel-sprite-pack/PNG/Without_shadow'
$field='monster/craftpix-net-255707-free-field-enemies-pixel-art-for-tower-defense'
$defs=@(
 @('raven',"$hunt/Black_grouse",32,@('Black_grouse_Flight','Black_grouse_Flight','Black_grouse_Flight','Black_grouse_Death')),
 @('wasp',"$field/4",48,@('D_Walk','D_Walk','D_Walk','D_Death')),
 @('boar',"$hunt/Boar",32,@('Boar_Idle','Boar_Run','Boar_Attack','Boar_Death')),
 @('vampire','monster/craftpix-net-208004-free-vampire-4-direction-pixel-character-sprite-pack/PNG/Vampires1/Without_shadow',64,@('Vampires1_Idle_without_shadow','Vampires1_Run_without_shadow','Vampires1_Attack_without_shadow','Vampires1_Death_without_shadow')),
 @('orc-chief','monster/craftpix-net-363992-free-top-down-orc-game-character-pixel-art/PNG/Orc1/Without_shadow',64,@('orc1_idle_without_shadow','orc1_run_without_shadow','orc1_attack_without_shadow','orc1_death_without_shadow')),
 @('goblin',"$field/2",48,@('D_Walk','D_Walk','D_Attack','D_Death')),
 @('stone-beast',"$field/3",48,@('D_Walk','D_Walk','D_Attack','D_Death'))
)
foreach($n in @(2,3)){
 $defs+=,@("vampire-$n","monster/craftpix-net-208004-free-vampire-4-direction-pixel-character-sprite-pack/PNG/Vampires$n/Without_shadow",64,@("Vampires${n}_Idle_without_shadow","Vampires${n}_Run_without_shadow","Vampires${n}_Attack_without_shadow","Vampires${n}_Death_without_shadow"))
 $defs+=,@("orc-chief-$n","monster/craftpix-net-363992-free-top-down-orc-game-character-pixel-art/PNG/Orc$n/Without_shadow",64,@("orc${n}_idle_without_shadow","orc${n}_run_without_shadow","orc${n}_attack_without_shadow","orc${n}_death_without_shadow"))
}
foreach($n in @(1,2,3)){$defs+=,@("wild-slime-$n","monster/craftpix-net-788364-free-slime-mobs-pixel-art-top-down-sprite-pack/PNG/Slime$n/Without_shadow",64,@("Slime${n}_Idle_without_shadow","Slime${n}_Run_without_shadow","Slime${n}_Attack_without_shadow","Slime${n}_Death_without_shadow"))}
foreach($animal in @('Fox','Deer','Hare')){$defs+=,@($animal.ToLower(),"$hunt/$animal",32,@("${animal}_Idle","${animal}_Run","${animal}_Idle","${animal}_Death"))}
foreach($n in @(2,4,5,7,8)){$walk=if($n -eq 5){'Run'}else{'Walk'};$defs+=,@("soldier-$n","craftpix-net-749505-free-medieval-fortress-top-down-pixel-minigame-kit/Characters/Character_$n",32,@('Idle',$walk,'Attack_1','Dead'))}
foreach($def in $defs){
 $id=$def[0];$size=[int]$def[2];$dir=Join-Path $out $id;New-Item -ItemType Directory -Path $dir -Force|Out-Null;$actions=@{};$j=0
 foreach($action in @('idle','walk','attack','dead')){
  $src=Join-Path $world "$($def[1])/$($def[3][$j]).png";$j++;$img=[System.Drawing.Bitmap]::new($src);$rows=[int]($img.Height/$size);$row=$img.Clone([System.Drawing.Rectangle]::new(0,0,$img.Width,$img.Height),[System.Drawing.Imaging.PixelFormat]::Format32bppArgb);$row.Save((Join-Path $dir "$action.png"),[System.Drawing.Imaging.ImageFormat]::Png);$actions[$action]=@{url="/assets/v4/$id/$action.png";frames=[int]($img.Width/$size);rows=$rows}
  if($action -eq 'idle'){$minX=$size;$minY=$size;$maxX=0;$maxY=0;for($y=0;$y -lt $size;$y++){for($x=0;$x -lt $size;$x++){if($row.GetPixel($x,$y).A -gt 30){$minX=[Math]::Min($minX,$x);$maxX=[Math]::Max($maxX,$x);$minY=[Math]::Min($minY,$y);$maxY=[Math]::Max($maxY,$y)}}}}
  $row.Dispose();$img.Dispose()
 }
 $actors+=@{id=$id;group=if($id -like 'soldier-*'){'soldiers'}elseif($id -in @('fox','deer','hare')){'ambient'}else{'monster'};frame=$size;originX=($minX+$maxX)/2/$size;originY=$maxY/$size;bodyHeight=$maxY-$minY+1;directions=$rows;actions=$actions}
}
$bushes=Get-ChildItem (Join-Path $world 'map/craftpix-net-699134-free-bush-assets-pixel-art-pack/PNG') -Recurse -Filter '*.png'
foreach($f in $bushes){$id='new-'+$f.BaseName.ToLower();Copy-Item -LiteralPath $f.FullName -Destination (Join-Path $out "$id.png") -Force;$img=[System.Drawing.Image]::FromFile($f.FullName);$props+=@{id=$id;group='bushes';width=$img.Width;height=$img.Height;url="/assets/v4/$id.png"};$img.Dispose()}
# New top-down lightning: 8 rectangular 80x160 frames, packed into square effect cells.
foreach($variant in @(1,2,3,4)){
 $f=Join-Path $world "effect/craftpix-net-805745-free-magic-and-traps-top-down-pixel-art-asset/3 Lightning/$variant.png";$img=[System.Drawing.Bitmap]::new($f);$sheet=[System.Drawing.Bitmap]::new(128*8,128,[System.Drawing.Imaging.PixelFormat]::Format32bppArgb);$g=[System.Drawing.Graphics]::FromImage($sheet);$g.InterpolationMode=[System.Drawing.Drawing2D.InterpolationMode]::NearestNeighbor
 for($n=0;$n -lt 8;$n++){$g.DrawImage($img,[System.Drawing.Rectangle]::new($n*128+32,0,64,128),$n*80,0,80,160,[System.Drawing.GraphicsUnit]::Pixel)}
 $id="bolt-strike-$variant";$g.Dispose();$sheet.Save((Join-Path $out "$id.png"),[System.Drawing.Imaging.ImageFormat]::Png);$sheet.Dispose();$img.Dispose();$effects+=@{id=$id;url="/assets/v4/$id.png";frame=128;frames=8}
}
foreach($entry in @(@('ground-spikes','1 Spikes/1',32),@('enemy-explosion','4 Barrel/Boom1',48))){$id=$entry[0];$src=Join-Path $world "effect/craftpix-net-805745-free-magic-and-traps-top-down-pixel-art-asset/$($entry[1]).png";Copy-Item -LiteralPath $src -Destination (Join-Path $out "$id.png") -Force;$img=[System.Drawing.Image]::FromFile($src);$effects+=@{id=$id;url="/assets/v4/$id.png";frame=$entry[2];frames=[int]($img.Width/$entry[2])};$img.Dispose()}
$cloudRoot=Join-Path $world 'map/craftpix-net-801184-free-clouds-pixel-art-asset-pack/PNG'
$clouds=@(Get-ChildItem $cloudRoot -Recurse -Filter '*_1.png'|Where-Object{$_.FullName -match 'white|White'}|Select-Object -First 3)
if($clouds.Count -eq 0){$clouds=@(Get-ChildItem $cloudRoot -Recurse -Filter '*_1.png'|Select-Object -First 3)}
$j=0;foreach($cloud in $clouds){$j++;$id="cloud-$j";Copy-Item -LiteralPath $cloud.FullName -Destination (Join-Path $out "$id.png") -Force;$img=[System.Drawing.Image]::FromFile($cloud.FullName);$props+=@{id=$id;group='clouds';width=$img.Width;height=$img.Height;url="/assets/v4/$id.png"};$img.Dispose()}
@{actors=$actors;props=$props;effects=$effects;terrain=$old.terrain}|ConvertTo-Json -Depth 9|Set-Content (Join-Path $project 'public/catalog-v4.json') -Encoding utf8
Write-Output "V4: $($actors.Count) actors, $($props.Count) scenery assets, $($effects.Count) effects."

node (Join-Path $PSScriptRoot 'finalize-v4-art.mjs')

powershell -NoProfile -ExecutionPolicy Bypass -File (Join-Path $PSScriptRoot 'prepare-guardian.ps1')
if(Test-Path (Join-Path $project 'public/assets/empowered/warrior-3-fury.png')){node (Join-Path $PSScriptRoot 'register-empowered.mjs')}

if(Test-Path (Join-Path $project 'public/assets/v5/metrics.json')){node (Join-Path $PSScriptRoot 'register-v5.mjs')}

if(Test-Path (Join-Path $project 'public/assets/v7/boss-casts.json')){node (Join-Path $PSScriptRoot 'register-boss-casts.mjs')}
