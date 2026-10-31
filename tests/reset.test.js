import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const app=fs.readFileSync(new URL('../src/app.js',import.meta.url),'utf8');
const functions=app.slice(app.indexOf('function clearResult()'),app.indexOf("$('survey').addEventListener"));
function fixture(){
 const cells={};let formReset=0,questionRedrawn=0;
 for(const id of ['comparison','options','profile','group-n','guidance-text','form-error'])cells[id]={textContent:'eski sonuç',children:['eski seçim'],replaceChildren(){this.children=[];this.textContent='';}};
 cells.survey={reset(){formReset++;}};
 const ctx={answers:{frequency:'Once a day',purpose:'Coding and debugging'},step:3,data:{},$:id=>cells[id],view(v){ctx.activeView=v;},drawQuestion(){questionRedrawn++;}};
 vm.createContext(ctx);vm.runInContext(functions,ctx);
 return {cells,ctx,formReset:()=>formReset,questionRedrawn:()=>questionRedrawn};
}
test('Sıfırlama yanıtları, formu, tüm sonuçları ve hatayı temizler',()=>{
 const f=fixture();vm.runInContext('reset()',f.ctx);assert.equal(Object.keys(f.ctx.answers).length,0);assert.equal(f.ctx.step,0);
 for(const id of ['profile','group-n','guidance-text','form-error'])assert.equal(f.cells[id].textContent,'');
 assert.equal(f.cells.comparison.children.length,0);assert.equal(f.cells.options.children.length,0);assert.equal(f.formReset(),1);assert.equal(f.questionRedrawn(),1);assert.equal(f.ctx.activeView,'survey-view');
});
test('Tekrarlanan sıfırlama kalıntı üretmez',()=>{const f=fixture();vm.runInContext('reset();reset()',f.ctx);assert.equal(f.cells['guidance-text'].textContent,'');assert.equal(f.cells['group-n'].textContent,'');assert.equal(f.formReset(),2);});
test('Ayrılışta ve geri dönüşte sıfırlama bağlıdır',()=>{assert.match(app,/addEventListener\('pageshow', reset\)/);assert.match(app,/addEventListener\('pagehide', \(\) => \{ reset\(\); \}\)/);});
