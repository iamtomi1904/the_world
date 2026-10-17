$ErrorActionPreference='Stop'
Add-Type -AssemblyName System.Drawing
$project=Split-Path $PSScriptRoot -Parent
$out=Join-Path $project 'public/assets/guardian'
New-Item -ItemType Directory -Path $out -Force|Out-Null
$catalog=Get-Content (Join-Path $project 'public/catalog-v4.json') -Raw|ConvertFrom-Json
foreach($hero in @('knight-1','knight-2','knight-3')){
 $actor=$catalog.actors|Where-Object id -eq $hero
 foreach($action in @('idle','walk','attack','hurt','dead')){
  $src=[Drawing.Bitmap]::new((Join-Path $project "public/assets/v2/$hero/$action.png"))
  $count=[int]($src.Width/128)
  $sheet=[Drawing.Bitmap]::new(160*$count,160,[Drawing.Imaging.PixelFormat]::Format32bppArgb)
  $g=[Drawing.Graphics]::FromImage($sheet)
  for($n=0;$n -lt $count;$n++){
   $anchor=31
   if($action -eq 'walk'){$anchor=30}
   if($action -in @('attack','hurt')){
    $best=-1
    for($x=0;$x -le 112;$x++){
     $score=0
     for($k=0;$k -lt 16;$k++){for($y=112;$y -lt 128;$y++){if($src.GetPixel($n*128+$x+$k,$y).A -gt 100){$score++}}}
     if($score -gt $best){$best=$score;$anchor=$x+8}
    }
   }
   $g.DrawImage($src,[Drawing.Rectangle]::new($n*160+80-$anchor,16,128,128),$n*128,0,128,128,[Drawing.GraphicsUnit]::Pixel)
  }
  $g.Dispose()
  $sheet.Save((Join-Path $out "$hero-$action.png"),[Drawing.Imaging.ImageFormat]::Png)
  $sheet.Dispose();$src.Dispose()
  $actor.actions.$action.url="/assets/guardian/$hero-$action.png"
 }
 $actor.frame=160;$actor.originX=.5;$actor.originY=.9
}
$catalog|ConvertTo-Json -Depth 12|Set-Content (Join-Path $project 'public/catalog-v4.json') -Encoding utf8
Write-Output 'Guardian frames aligned to shared foot anchor (80,144).'
