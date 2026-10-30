import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
test('Yanıt işleyen modüllerde ağ, depolama ve log çağrıları yok',()=>{
  for(const file of ['src/app.js','src/engine.js']) {
    const s=fs.readFileSync(new URL('../'+file,import.meta.url),'utf8');
    assert.doesNotMatch(s,/\b(localStorage|sessionStorage|indexedDB|sendBeacon|XMLHttpRequest|WebSocket)\b|\bfetch\s*\(|document\.cookie|console\.(log|warn|error)|location\.(search|hash)|history\.(pushState|replaceState)/);
  }
});
test('Form ağ gönderimi engelleniyor, harici script yok',()=>{
  const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
  assert.match(html,/connect-src 'none'/);assert.match(html,/form-action 'none'/);assert.match(html,/autocomplete="off"/);
  assert.doesNotMatch(html,/<script[^>]+src="https?:/);
});
