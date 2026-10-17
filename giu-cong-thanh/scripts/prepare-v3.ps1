$ErrorActionPreference='Stop'
Add-Type -AssemblyName System.Drawing
$project=Split-Path $PSScriptRoot -Parent;$world=Split-Path $project -Parent
$out=Join-Path $project 'public/assets/v3';New-Item -ItemType Directory -Path $out -Force|Out-Null
$catalog=Get-Content (Join-Path $project 'public/catalog.json') -Raw|ConvertFrom-Json
$props=@($catalog.props)
$roots=@(
 @('forest','effect/craftpix-net-505052-free-forest-objects-top-down-pixel-art/PNG/Assets'),
 @('trees','map/craftpix-net-385863-free-top-down-trees-pixel-art/PNG/Assets_separately/Trees'),
 @('bushes','map/craftpix-net-141354-free-top-down-bushes-pixel-art/PNG/Assets'),
 @('ruins','map/craftpix-net-934618-free-top-down-ruins-pixel-art/PNG/Assets'),
 @('crystals','map/craftpix-net-106469-top-down-crystals-pixel-art/PNG/Assets'),
 @('rocks','map/craftpix-net-974061-free-rocks-and-stones-top-down-pixel-art/PNG/Objects_separately')
)
foreach($entry in $roots){foreach($file in (Get-ChildItem (Join-Path $world $entry[1]) -Filter '*.png'|Where-Object {$_.Name -notmatch 'shadow' -and ($_.Name -match '[123]\.png$' -or $_.Name -match '^(Ent_|Tree_idol_)')})){
 $id=$file.BaseName.ToLower() -replace '[^a-z0-9_-]','-';if($props.id -contains $id){continue}
 $img=[System.Drawing.Image]::FromFile($file.FullName);$props+=@{id=$id;group=$entry[0];width=$img.Width;height=$img.Height;url="/assets/v3/$id.png"};$img.Dispose();Copy-Item -LiteralPath $file.FullName -Destination (Join-Path $out "$id.png") -Force
}}
$effects=@()
$definitions=@(
 @('wind','craftpix-net-837255-free-magic-slash-effects-asset-pack/Double Wind Slashes/PNG'),
 @('ultimate','craftpix-net-837255-free-magic-slash-effects-asset-pack/Ultimate Slash/PNG'),
 @('lightning','craftpix-net-837255-free-magic-slash-effects-asset-pack/Lightning Slash/PNG'),
 @('poison','craftpix-net-837255-free-magic-slash-effects-asset-pack/Poisonous Slashes/PNG'),
 @('water','craftpix-net-837255-free-magic-slash-effects-asset-pack/Water Slash/PNG'),
 @('fireball','craftpix-net-381552-free-water-and-fire-magic-sprite-vector-pack/Fire Ball/PNG'),
 @('fire-spell','craftpix-net-381552-free-water-and-fire-magic-sprite-vector-pack/Fire Spell/PNG'),
 @('waterball','craftpix-net-381552-free-water-and-fire-magic-sprite-vector-pack/Water Ball/PNG'),
 @('water-spell','craftpix-net-381552-free-water-and-fire-magic-sprite-vector-pack/Water Spell/PNG'),
 @('smoke','craftpix-net-333631-free-cartoon-smoke-effects-asset-pack/Smoke Spell/PNG'),
 @('explosion','craftpix-net-840730-free-animated-explosion-sprite-pack/PNG/Explosion_2')
)
foreach($def in $definitions){
 $files=@(Get-ChildItem (Join-Path $world "effect/$($def[1])") -Filter '*.png'|Sort-Object { [int]([regex]::Match($_.BaseName,'(\d+)$').Value) })
 $imgs=@($files|ForEach-Object{[System.Drawing.Bitmap]::new($_.FullName)})
 $minX=100000;$minY=100000;$maxX=0;$maxY=0
 foreach($img in $imgs){for($y=0;$y -lt $img.Height;$y+=5){for($x=0;$x -lt $img.Width;$x+=5){if($img.GetPixel($x,$y).A -gt 20){$minX=[Math]::Min($minX,$x);$maxX=[Math]::Max($maxX,$x);$minY=[Math]::Min($minY,$y);$maxY=[Math]::Max($maxY,$y)}}}}
 $minX=[Math]::Max(0,$minX-6);$minY=[Math]::Max(0,$minY-6);$w=[Math]::Min($imgs[0].Width-$minX,$maxX-$minX+7);$h=[Math]::Min($imgs[0].Height-$minY,$maxY-$minY+7)
 $size=128;$sheet=[System.Drawing.Bitmap]::new($size*$imgs.Count,$size,[System.Drawing.Imaging.PixelFormat]::Format32bppArgb);$g=[System.Drawing.Graphics]::FromImage($sheet);$g.InterpolationMode=[System.Drawing.Drawing2D.InterpolationMode]::NearestNeighbor;$g.PixelOffsetMode=[System.Drawing.Drawing2D.PixelOffsetMode]::Half
 for($i=0;$i -lt $imgs.Count;$i++){ $ratio=[Math]::Min(($size-4)/$w,($size-4)/$h);$dw=[int]($w*$ratio);$dh=[int]($h*$ratio);$g.DrawImage($imgs[$i],[System.Drawing.Rectangle]::new([int]($i*$size+($size-$dw)/2),[int](($size-$dh)/2),$dw,$dh),$minX,$minY,$w,$h,[System.Drawing.GraphicsUnit]::Pixel);$imgs[$i].Dispose() }
 $g.Dispose();$sheet.Save((Join-Path $out "fx-$($def[0]).png"),[System.Drawing.Imaging.ImageFormat]::Png);$sheet.Dispose()
 $effects+=@{id=$def[0];url="/assets/v3/fx-$($def[0]).png";frame=128;frames=$files.Count}
}
$terrain=@()
foreach($name in @('Ground_grass','Road1','Road2','Road3','Road4','Road5')){$src=Join-Path $world "effect/craftpix-net-574220-free-path-and-road-top-down-pixel-tileset/PNG_Tiled/$name.png";Copy-Item -LiteralPath $src -Destination (Join-Path $out "$name.png") -Force;$terrain+=@{id=$name;url="/assets/v3/$name.png"}}
@{actors=$catalog.actors;props=$props;effects=$effects;terrain=$terrain}|ConvertTo-Json -Depth 9|Set-Content (Join-Path $project 'public/catalog-v3.json') -Encoding utf8
Write-Output "V3 prepared: $($props.Count) props, $($effects.Count) animated effects, $($terrain.Count) terrain sheets."
