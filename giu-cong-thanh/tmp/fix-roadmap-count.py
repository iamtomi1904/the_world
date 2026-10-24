from pathlib import Path
p=Path('public/roadmap.js');s=p.read_text(encoding='utf-8')
old='001–${tasks.length}. Chốt'
assert old in s
s=s.replace(old,"001–'+tasks.length+'. Chốt")
p.write_text(s,encoding='utf-8')
print('Dynamic label corrected')
