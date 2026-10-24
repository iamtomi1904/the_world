from pathlib import Path
p=Path('public/design-preview/elarion-map-r002/index.html');s=p.read_text(encoding='utf-8')
old='let ids=new Set;DATA.regions.forEach'
new="let ids=new Set;if($('concept').checked){let a=document.createElementNS(ns,'rect');a.setAttribute('width','1536');a.setAttribute('height','1024');c.append(a)}DATA.regions.forEach"
assert old in s;p.write_text(s.replace(old,new),encoding='utf-8')
print('Designer full-color mode now includes entire background; progression states unchanged')
