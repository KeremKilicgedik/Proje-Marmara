import test from 'node:test';
import assert from 'node:assert/strict';
import data from '../data/reference.js';
import {compare, validate} from '../src/engine.js';
const a = {frequency: 'Several times a day', tool: 'Chatgpt', purpose: 'Research and Answering questions', concern: 'Job Displacement'};
test('Gerçek referans sayımları her grupta kişi sayısına eşittir', () => {
  assert.equal(data.audit.rowCount, 1481);
  assert.equal(Object.values(data.groups).reduce((s,g)=>s+g.n,0),1481);
  for (const g of Object.values(data.groups)) for (const c of Object.values(g.counts)) assert.equal(Object.values(c).reduce((s,n)=>s+n,0),g.n);
});
test('Aynı girdiye aynı sonuç; payda yalnız aynı sıklık grubudur', () => {
  const r=compare(data,a);assert.deepEqual(r,compare(data,a));assert.equal(r.n,279);
  for(const dist of r.distributions){assert.equal(dist.n,279);assert.ok(Math.abs(dist.rows.reduce((s,r)=>s+r.proportion,0)-1)<1e-12);}
});
test('Bilinmeyen kategori ve eksik yanıt kabul edilmez',()=>{assert.ok(validate(data,{...a,frequency:'unknown'}).length);assert.throws(()=>compare(data,{...a,purpose:''}));});
test('Kullanmayan kişiye güncel amaç veya araç zorunlu değildir',()=>{const r=compare(data,{frequency:'Never',concern:'Job Displacement'});assert.equal(r.active,false);assert.equal(r.distributions.length,1);assert.equal(r.n,51);});
test('Güncel sıklıkla araç kullanmıyorum yanıtı çelişkisi yakalanır',()=>{assert.ok(validate(data,{...a,tool:"I don't use any AI tools"}).includes('tool'));});
test('Küçük veya boş grupta yüzdeler gösterilmez',()=>{
  for (const n of [0,29]) { const d=structuredClone(data);d.groups[a.frequency]={n,counts:{purpose:{[a.purpose]:n},tool:{[a.tool]:n},concern:{[a.concern]:n}}};const r=compare(d,a);for(const x of r.distributions){assert.equal(x.sufficient,false);assert.ok(x.rows.every(r=>r.proportion===null));} }
});
test('n=30 sınırı ve sıfır gözlenen seçenek korunur',()=>{const d=structuredClone(data);d.groups[a.frequency]={n:30,counts:{purpose:{[a.purpose]:30},tool:{[a.tool]:30},concern:{[a.concern]:30}}};const r=compare(d,a);assert.equal(r.distributions[0].sufficient,true);assert.ok(r.distributions[0].rows.some(r=>r.proportion===0));});
test('Negatif veya kişi paydasını aşan referans sayımları reddedilir',()=>{const d=structuredClone(data);d.groups[a.frequency].counts.tool.Chatgpt=10000;assert.throws(()=>compare(d,a));});
