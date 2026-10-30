"""CSV kaynağından kimliksiz toplu referans paketi üretir. Python 3 + NumPy gerekir."""
import argparse,csv,json,hashlib,math
from collections import Counter
from pathlib import Path
import numpy as np

ROOT=Path(__file__).resolve().parents[1]
FIELDS={
 'frequency':'How often do you use AI Tools?',
 'purpose':'What do you mainly used Ai tools for?',
 'tool':'Which Ai tools do you use most often?',
 'concern':'What is your biggest concern about AI and emerging technology',
}
LABELS={
 'Several times a day':'Günde birkaç kez','Once a day':'Günde bir kez','A few times a week':'Haftada birkaç kez','Once a week':'Haftada bir kez','A few times a month':'Ayda birkaç kez','Rarely':'Nadiren',"I've tried them but stopped":'Denedim, kullanmayı bıraktım','Never':'Hiç kullanmıyorum',
 'Chatgpt':'ChatGPT','Perplexity':'Perplexity','Google Gemini':'Google Gemini','Claude':'Claude','Cursor/GitHub copilot (coding assistants)':'Cursor / GitHub Copilot','Midjourney/DALL-E(image generation)':'Midjourney / DALL-E',"I don't use any AI tools":'AI aracı kullanmıyorum','Notion AI/Grammerly( writing and Productivity)':'Notion AI / Grammarly',
 'Research and Answering questions':'Araştırma ve soru yanıtlama','Coding and debugging':'Kodlama ve hata ayıklama','Writing and editing content':'Yazma ve içerik düzenleme','Studying and homework help':'Ders çalışma ve ödev desteği','Image or video creation':'Görsel veya video üretimi','Summarising documents or meetings':'Belge veya toplantı özetleme','Data Analysis':'Veri analizi','Customer support or buisness automation':'Müşteri desteği / iş otomasyonu','Translation and language learning':'Çeviri ve dil öğrenimi',
 'Job Displacement':'İş kaybı','Over- reliance on Technology':'Teknolojiye aşırı bağımlılık','Misinformation and deepfakes':'Yanlış bilgi ve deepfake','Bias and unfair decisions':'Yanlılık ve adaletsiz kararlar','Loss of human creativity':'İnsan yaratıcılığının azalması','Privacy and data misuse':'Gizlilik ve verinin kötüye kullanımı','I have no major concern':'Önemli bir endişem yok','Environment impact ( energy use)':'Çevresel etki / enerji tüketimi',
}
FREQUENCIES=['Several times a day','Once a day','A few times a week','Once a week','A few times a month','Rarely',"I've tried them but stopped",'Never']
NONUSE={'Never',"I've tried them but stopped"}
def gammaq(a,x):
 if x==0:return 1.0
 if x<a+1:
  s=term=1/a;ap=a
  for _ in range(10000):
   ap+=1;term*=x/ap;s+=term
   if abs(term)<abs(s)*1e-14:break
  return max(0,min(1,1-s*math.exp(-x+a*math.log(x)-math.lgamma(a))))
 b=x+1-a;c=1e300;dd=1/b;h=dd
 for i in range(1,10000):
  an=-i*(i-a);b+=2;dd=an*dd+b;dd=dd if abs(dd)>1e-300 else 1e-300;c=b+an/c;c=c if abs(c)>1e-300 else 1e-300;dd=1/dd;delta=dd*c;h*=delta
  if abs(delta-1)<1e-14:break
 return max(0,min(1,math.exp(-x+a*math.log(x)-math.lgamma(a))*h))
def test(rows,a,b,seed):
 pairs=[(r[a],r[b]) for r in rows if r[a] and r[b]];aa=sorted({x for x,y in pairs});bb=sorted({y for x,y in pairs});ai={x:i for i,x in enumerate(aa)};bi={x:i for i,x in enumerate(bb)}
 x=np.array([ai[i] for i,j in pairs]);y=np.array([bi[j] for i,j in pairs]);shape=(len(aa),len(bb));o=np.bincount(x*shape[1]+y,minlength=shape[0]*shape[1]).reshape(shape);n=len(pairs);e=np.outer(o.sum(1),o.sum(0))/n;stat=float(((o-e)**2/e).sum());df=(shape[0]-1)*(shape[1]-1);sparse=bool((e<1).any() or (e<5).mean()>.2)
 p=gammaq(df/2,stat/2);method='Pearson ki-kare';B=0
 if sparse:
  B=9999;rng=np.random.default_rng(seed);extreme=0
  for _ in range(B):
   perm=rng.permutation(y);z=np.bincount(x*shape[1]+perm,minlength=o.size).reshape(shape);extreme+=float(((z-e)**2/e).sum())>=stat-1e-12
  p=(extreme+1)/(B+1);method='Pearson istatistiğiyle permütasyon testi'
 return dict(n=n,statistic=stat,df=df,p=p,cramersV=math.sqrt(stat/(n*min(shape[0]-1,shape[1]-1))),method=method,minExpected=float(e.min()),smallCellFraction=float((e<5).mean()),permutations=B,seed=seed,rowLabels=aa,columnLabels=bb,counts=o.tolist())
def holm(ps):
 order=sorted(range(len(ps)),key=lambda i:ps[i]);out=[0]*len(ps);last=0
 for k,i in enumerate(order):last=max(last,min(1,ps[i]*(len(ps)-k)));out[i]=last
 return out
def main():
 ap=argparse.ArgumentParser();ap.add_argument('csv');args=ap.parse_args();path=Path(args.csv);raw=path.read_bytes();reader=csv.DictReader(raw.decode('utf-8-sig').splitlines());records=[{k.strip():v.strip() for k,v in r.items()} for r in reader];rows=[{key:r[head] for key,head in FIELDS.items()} for r in records]
 assert all(all(v for v in r.values()) for r in rows),'Analiz alanında eksik yanıt var; inceleme gerekli.'
 assert all(v in LABELS for r in rows for v in r.values()),'Bilinmeyen kategori var; eşleme güncellenmeli.'
 tests=[test(rows,'frequency','purpose',20261101),test(rows,'tool','purpose',20261102),test(rows,'frequency','concern',20261103)]
 for t,p in zip(tests,holm([t['p'] for t in tests])):t['adjustedP']=p;t['decision']='H₀ reddedildi' if p<.05 else 'H₀ reddedilemedi'
 active=[r for r in rows if r['frequency'] not in NONUSE and r['tool']!="I don't use any AI tools"]
 for t,(a,b) in zip(tests,[('frequency','purpose'),('tool','purpose'),('frequency','concern')]):t['sensitivity']=test(active,a,b,20261104)
 options={key:[{'value':v,'label':LABELS[v]} for v in (FREQUENCIES if key=='frequency' else sorted({r[key] for r in rows}))] for key in FIELDS}
 def group(rr):return {'n':len(rr),'counts':{k:dict(Counter(r[k] for r in rr)) for k in ['purpose','tool','concern']}}
 audit=dict(rowCount=len(rows),rawColumns=len(records[0]),nonemptyColumns=sum(any(r[k] for r in records) for k in records[0]),emptyColumns=[k for k in records[0] if all(not r[k] for r in records)],missing={k:sum(not r[k] for r in records) for k in records[0]},nonuseFrequency=sum(r['frequency'] in NONUSE for r in rows),noTool=sum(r['tool']=="I don't use any AI tools" for r in rows),activeCount=len(active))
 data=dict(version='1.0.0',source={'name':'AI Tools and Technology Trends','author':'Abhijeet Kumar','url':'https://data.mendeley.com/datasets/wphjf9t7bv/1','doi':'10.17632/wphjf9t7bv.1','license':'CC BY 4.0','sha256':hashlib.sha256(raw).hexdigest()},audit=audit,options=options,groups={f:group([r for r in rows if r['frequency']==f]) for f in FREQUENCIES},overall=group(rows),tests=tests)
 target=ROOT/'data';target.mkdir(exist_ok=True);(target/'reference.js').write_text('export default '+json.dumps(data,ensure_ascii=False,indent=2)+';\n',encoding='utf8')
 print(json.dumps({'audit':audit,'tests':[{k:v for k,v in t.items() if k not in ['counts','rowLabels','columnLabels','sensitivity']} for t in tests]},ensure_ascii=False,indent=2))
if __name__=='__main__':main()
