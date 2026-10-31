import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const app=fs.readFileSync(new URL('../src/app.js',import.meta.url),'utf8');
const functions=app.slice(app.indexOf('function clearResult()'),app.indexOf("$('survey').addEventListener"));
function fixture(){
 const cells={};let formReset=0,questionRedrawn=0;
 for(const id of ['comparison','options','profile','group-n','guidance-text','form-error','result-title','research-title','edit','reset','nav-survey','nav-research','home-link','back'])cells[id]={textContent:'eski sonuç',children:['eski seçim'],handlers:{},addEventListener(t,f){this.handlers[t]=f;},focus(){},querySelector(){return {value:'Job Displacement'};},replaceChildren(){this.children=[];this.textContent='';}};
 cells.survey={handlers:{},addEventListener(t,f){this.handlers[t]=f;},reset(){formReset++;}};
 const document={hidden:false,handlers:{},addEventListener(t,f){this.handlers[t]=f;}};
 const window={handlers:{},addEventListener(t,f){this.handlers[t]=f;}};
 const ctx={answers:{frequency:'Once a day',purpose:'Coding and debugging'},step:3,data:{},document,window,NONUSE:new Set(),path:()=>['frequency','tool','purpose','concern'],renderResult(){throw new Error('Sentetik test hatası');},$:id=>cells[id],view(v){ctx.activeView=v;},drawQuestion(){questionRedrawn++;}};
 vm.createContext(ctx);vm.runInContext(functions,ctx);
 vm.runInContext(app.slice(app.indexOf("$('survey').addEventListener"),app.indexOf('try { data =')),ctx);
 return {cells,ctx,formReset:()=>formReset,questionRedrawn:()=>questionRedrawn};
}
test('Sıfırlama yanıtları, formu, tüm sonuçları ve hatayı temizler',()=>{
 const f=fixture();vm.runInContext('reset()',f.ctx);assert.equal(Object.keys(f.ctx.answers).length,0);assert.equal(f.ctx.step,0);
 for(const id of ['profile','group-n','guidance-text','form-error'])assert.equal(f.cells[id].textContent,'');
 assert.equal(f.cells.comparison.children.length,0);assert.equal(f.cells.options.children.length,0);assert.equal(f.formReset(),1);assert.equal(f.questionRedrawn(),1);assert.equal(f.ctx.activeView,'survey-view');
});
test('Tekrarlanan sıfırlama kalıntı üretmez',()=>{const f=fixture();vm.runInContext('reset();reset()',f.ctx);assert.equal(f.cells['guidance-text'].textContent,'');assert.equal(f.cells['group-n'].textContent,'');assert.equal(f.formReset(),2);});
test('Ayrılışta ve geri dönüşte sıfırlama bağlıdır',()=>{assert.match(app,/addEventListener\('pageshow', reset\)/);assert.match(app,/addEventListener\('pagehide', \(\) => \{ reset\(\); \}\)/);});
for(const id of ['nav-survey','nav-research','home-link','edit','reset'])test(id+' geçişi tüm özel bilgileri temizler',()=>{const f=fixture();f.cells[id].handlers.click({preventDefault(){}});assert.equal(Object.keys(f.ctx.answers).length,0);assert.equal(f.cells['guidance-text'].textContent,'');assert.equal(f.cells['group-n'].textContent,'');assert.equal(f.cells.comparison.children.length,0);});
test('Sekme gizlenince temizlenir; görünürlükte veri geri gelmez',()=>{const f=fixture();f.ctx.document.hidden=true;f.ctx.document.handlers.visibilitychange();assert.equal(Object.keys(f.ctx.answers).length,0);f.ctx.document.hidden=false;f.ctx.document.handlers.visibilitychange();assert.equal(f.cells.profile.textContent,'');});
test('Belge/kaynak bağlantısına tıklamadan önce temizlenir',()=>{const f=fixture();f.ctx.document.handlers.click({target:{closest(){return {id:'source'};}}});assert.equal(Object.keys(f.ctx.answers).length,0);assert.equal(f.cells['guidance-text'].textContent,'');});
test('Sonuç oluşturma hatası kısmi sonuç ve yanıt bırakmaz',()=>{const f=fixture();f.cells.survey.handlers.submit({preventDefault(){}});assert.equal(Object.keys(f.ctx.answers).length,0);assert.equal(f.cells.profile.textContent,'');assert.match(f.cells['form-error'].textContent,/Yanıtlar temizlendi/);});
test('Sonuç gösterildiğinde ham yanıt ve gizli form temizlenir',()=>{const f=fixture();f.ctx.compare=()=>({profile:'test özeti',n:30,guidance:'test önerisi',distributions:[]});vm.runInContext(app.slice(app.indexOf('function renderResult()'),app.indexOf('function renderResearch()')),f.ctx);vm.runInContext('renderResult()',f.ctx);assert.equal(Object.keys(f.ctx.answers).length,0);assert.equal(f.cells.options.children.length,0);assert.equal(f.cells.profile.textContent,'test özeti');assert.equal(f.ctx.activeView,'result-view');});
