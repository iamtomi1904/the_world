from pathlib import Path
import re,json
d=Path('public/design-preview/elarion-map-r001');p=d/'index.html';s=p.read_text(encoding='utf-8')
positions={'V01 · 1–10':(690,430),'V02 · 11–20':(75,560),'V03 · biên rừng':(136,190),'V03 · hành hương':(470,307),'V04 · 31–40':(1170,112),'V05 · 41–45':(690,731),'W06 · 40–60 PK':(1090,780)}
for label,(x,y) in positions.items():
 pattern=r'<text class="zone-label" x="\d+" y="\d+">'+re.escape(label)+r'</text>'
 s,n=re.subn(pattern,f'<text class="zone-label" x="{x}" y="{y}">{label}</text>',s);assert n==1,label
p.write_text(s,encoding='utf-8')
p=d/'map-data.json';data=json.loads(p.read_text(encoding='utf-8'));data['zoneLabelAnchors']=positions;p.write_text(json.dumps(data,ensure_ascii=False,indent=2),encoding='utf-8')
print('Region labels separated from city/camp markers')
