$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing
$project = Split-Path $PSScriptRoot -Parent
$world = Split-Path $project -Parent
$out = Join-Path $project 'public/assets/v2'
New-Item -ItemType Directory -Path $out -Force | Out-Null
$actors = @()
foreach ($group in @('heroes','monster')) {
  $idleFiles = Get-ChildItem (Join-Path $world $group) -Recurse -Filter Idle.png | Where-Object { $_.FullName -notmatch '__MACOSX' -and -not ($group -eq 'monster' -and $_.FullName -match '589520') } | Sort-Object FullName
  foreach ($idle in $idleFiles) {
    $id = ($idle.Directory.Name.ToLower() -replace '[^a-z0-9]+','-').Trim('-')
    $dir = Join-Path $out $id
    New-Item -ItemType Directory -Path $dir -Force | Out-Null
    $image = [System.Drawing.Bitmap]::new($idle.FullName)
    $size = $image.Height
    $minX=$size; $minY=$size; $maxX=0; $maxY=0
    for ($y=0;$y -lt $size;$y++) { for ($x=0;$x -lt $size;$x++) { if ($image.GetPixel($x,$y).A -gt 30) {$minX=[Math]::Min($minX,$x);$maxX=[Math]::Max($maxX,$x);$minY=[Math]::Min($minY,$y);$maxY=[Math]::Max($maxY,$y)} } }
    $portrait=$image.Clone([System.Drawing.Rectangle]::new($minX,$minY,$maxX-$minX+1,$maxY-$minY+1),[System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $portrait.Save((Join-Path $dir 'portrait.png'),[System.Drawing.Imaging.ImageFormat]::Png);$portrait.Dispose();$image.Dispose()
    $actions=@{}
    $sources=@{idle=@('Idle.png');walk=@('Run.png','Walk.png');attack=@('Attack_1.png','Attack 1.png','Attack.png','Shot.png');hurt=@('Hurt.png','Hart.png');dead=@('Dead.png')}
    foreach ($action in $sources.Keys) {
      foreach ($name in $sources[$action]) { $src=Join-Path $idle.Directory.FullName $name; if(Test-Path -LiteralPath $src) {
        $img=[System.Drawing.Image]::FromFile($src)
        if($img.Height -ne $size){$img.Dispose();continue}
        $actions[$action]=@{url="/assets/v2/$id/$action.png";frames=[int]($img.Width/$size)};$img.Dispose()
        Copy-Item -LiteralPath $src -Destination (Join-Path $dir "$action.png") -Force
        break
      } }
    }
    $actors+=@{id=$id;group=$group;frame=$size;originX=($minX+$maxX)/2/$size;originY=$maxY/$size;bodyHeight=$maxY-$minY+1;actions=$actions;source=$idle.Directory.FullName}
  }
}
foreach($n in @(1,3,6,9)) {
  $src=Join-Path $world "craftpix-net-749505-free-medieval-fortress-top-down-pixel-minigame-kit/Characters/Character_$n"
  $id="soldier-$n";$dir=Join-Path $out $id;New-Item -ItemType Directory -Path $dir -Force | Out-Null
  $actions=@{}
  foreach($pair in @(@('idle','Idle.png'),@('walk','Walk.png'),@('attack','Attack_1.png'))) {
    $file=Join-Path $src $pair[1];if(!(Test-Path $file)){$file=Join-Path $src 'Shot.png'}
    $img=[System.Drawing.Image]::FromFile($file);$actions[$pair[0]]=@{url="/assets/v2/$id/$($pair[0]).png";frames=[int]($img.Width/32)};$img.Dispose();Copy-Item -LiteralPath $file -Destination (Join-Path $dir "$($pair[0]).png") -Force
  }
  $actors+=@{id=$id;group='soldiers';frame=32;originX=0.5;originY=0.8;bodyHeight=18;actions=$actions;source=$src}
}
$props=@()
$selections=@(
 @('trees','craftpix-net-385863-free-top-down-trees-pixel-art/PNG/Assets_separately/Trees',@('Tree1','Tree2','Autumn_tree1','Burned_tree1','Snow_tree1','Moss_tree1','Palm_tree1_1','Flower_tree1')),
 @('bushes','craftpix-net-141354-free-top-down-bushes-pixel-art/PNG/Assets',@('Bush_simple1_1','Autumn_bush1','Cactus1_1','Bush_blue_flowers1')),
 @('ruins','craftpix-net-934618-free-top-down-ruins-pixel-art/PNG/Assets',@('Blue-gray_ruins1','Blue-gray_ruins2','Brown_ruins1','Brown_ruins2','Brown-gray_ruins1')),
 @('crystals','craftpix-net-106469-top-down-crystals-pixel-art/PNG/Assets',@('Blue_crystal1','Green_crystal1','Violet_crystal1','Red_crystal1','Black_crystal1')),
 @('rocks','craftpix-net-974061-free-rocks-and-stones-top-down-pixel-art/PNG/Objects_separately',@('Rock1_1','Rock2_1','Rock3_1','Rock4_1','Rock5_1','Rock6_1','Rock7_1','Rock8_1'))
)
$propDir=Join-Path $out 'props';New-Item -ItemType Directory -Path $propDir -Force|Out-Null
foreach($selection in $selections){foreach($name in $selection[2]){
 $file=Join-Path $world "map/$($selection[1])/$name.png"
 if(!(Test-Path -LiteralPath $file)){throw "Missing map asset $file"}
 $id=$name.ToLower();$img=[System.Drawing.Image]::FromFile($file)
 $props+=@{id=$id;group=$selection[0];width=$img.Width;height=$img.Height;url="/assets/v2/props/$id.png";source=$file};$img.Dispose()
 Copy-Item -LiteralPath $file -Destination (Join-Path $propDir "$id.png") -Force
}}
$sourceMap=[System.Drawing.Bitmap]::new((Join-Path $world 'craftpix-net-749505-free-medieval-fortress-top-down-pixel-minigame-kit/Tiled/Tiled_map.png'))
$castle=$sourceMap.Clone([System.Drawing.Rectangle]::new(256,288,448,160),[System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$castle.Save((Join-Path $out 'castle.png'),[System.Drawing.Imaging.ImageFormat]::Png);$castle.Dispose();$sourceMap.Dispose()
@{actors=$actors;props=$props} | ConvertTo-Json -Depth 8 | Set-Content -LiteralPath (Join-Path $project 'public/catalog.json') -Encoding utf8
Write-Output "Prepared $($actors.Count) actors and $($props.Count) map props."
