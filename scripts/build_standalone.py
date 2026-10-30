"""Modüler uygulamadan çift tıklanabilen demo.html üretir; ek paket gerekmez."""
from pathlib import Path
import re
p=Path(__file__).resolve().parents[1]
html=(p/'index.html').read_text(encoding='utf8')
style=(p/'assets/style.css').read_text(encoding='utf8')
engine=(p/'src/engine.js').read_text(encoding='utf8').replace('export ','')
reference=(p/'data/reference.js').read_text(encoding='utf8').removeprefix('export default ').strip().removesuffix(';')
app=(p/'src/app.js').read_text(encoding='utf8')
app=re.sub(r"^import .*?;\n",'',app,count=1)
app=app.replace("data = (await import('../data/reference.js')).default",'data = '+reference)
html=html.replace('<link rel="stylesheet" href="assets/style.css">','<style>'+style+'</style>')
html=html.replace("script-src 'self'","script-src 'unsafe-inline'")
html=html.replace('<script type="module" src="src/app.js"></script>','<script>\n'+engine+'\n'+app+'\n</script>')
(p/'demo.html').write_text(html,encoding='utf8',newline='\n')
print('demo.html üretildi; kaynak modüller değiştirilmedi.')
