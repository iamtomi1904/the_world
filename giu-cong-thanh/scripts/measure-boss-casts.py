"""Read-only PNG inspection; does not alter artwork pixels."""
from PIL import Image
from pathlib import Path
import json
root=Path(__file__).resolve().parent.parent/'public'/'assets'/'v7'
result={}
for family in ['dragon','undead','serpent','wolf','harpy','stone']:
    path=root/f'boss-{family}-cast.png'
    im=Image.open(path)
    assert im.mode=='RGBA', f'{family}: missing transparency'
    width,height=im.size
    frames=[]
    for n in range(8):
        x=round(n%4*width/4); y=round(n//4*height/2)
        right=round((n%4+1)*width/4); bottom=round((n//4+1)*height/2)
        alpha=im.crop((x,y,right,bottom)).getchannel('A').point(lambda a:255 if a>70 else 0)
        box=alpha.getbbox()
        assert box, f'{family}: empty frame {n}'
        frames.append({'bbox':box,'originY':box[3]/(bottom-y)})
    result[family]={'url':f'/assets/v7/boss-{family}-cast.png','width':width,'height':height,'frameWidth':width/4,'frameHeight':height/2,'bodyHeight':max(f['bbox'][3]-f['bbox'][1] for f in frames)*.83,'originsY':[f['originY'] for f in frames],'frames':frames}
(root/'boss-casts.json').write_text(json.dumps(result,indent=2),encoding='utf8')
print(json.dumps({k:{'size':[v['width'],v['height']],'boxes':[f['bbox'] for f in v['frames']]} for k,v in result.items()}))
