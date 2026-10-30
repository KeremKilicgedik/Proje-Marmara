import { compare, NONUSE } from './engine.js';
const $ = id => document.getElementById(id);
const views = ['survey-view', 'result-view', 'research-view'];
let data, step = 0, answers = {};
const questions = {
  frequency: ['Yapay zekâ araçlarını ne sıklıkta kullanıyorsun?', 'Karşılaştırılacağın grubu bu yanıt belirler.'],
  tool: ['En sık hangi yapay zekâ aracını kullanıyorsun?', 'Kaynak anketteki gibi tek bir seçenek seç.'],
  purpose: ['Yapay zekâyı ağırlıklı olarak ne için kullanıyorsun?', 'En baskın kullanım amacını seç.'],
  concern: ['Yapay zekâ hakkında en büyük endişen ne?', 'Endişen olmadığını da belirtebilirsin.'],
};
const path = () => NONUSE.has(answers.frequency) ? ['frequency', 'concern'] : ['frequency', 'tool', 'purpose', 'concern'];
function node(tag, text, className) { const el = document.createElement(tag); if (text !== undefined) el.textContent = text; if (className) el.className = className; return el; }
function view(id) {
  for (const v of views) $(v).hidden = v !== id;
  for (const [name, on] of [['nav-survey', id !== 'research-view'], ['nav-research', id === 'research-view']]) { $(name).classList.toggle('active', on); $(name).setAttribute('aria-pressed', String(on)); }
}
function drawQuestion(focus = true) {
  step = Math.min(step, path().length - 1); const key = path()[step];
  $('question-title').textContent = questions[key][0]; $('question-help').textContent = questions[key][1];
  $('step-label').textContent = `Soru ${step + 1} / ${path().length}`;
  $('progress').setAttribute('aria-valuemax', path().length); $('progress').setAttribute('aria-valuenow', step + 1);
  $('progress-fill').style.width = `${(step + 1) / path().length * 100}%`;
  const fieldset = $('options'); fieldset.replaceChildren(node('legend', 'Bir yanıt seç', 'sr-only'));
  for (const [i, option] of data.options[key].entries()) {
    const label = node('label', undefined, 'option'); const input = node('input'); input.type = 'radio'; input.name = key; input.value = option.value; input.id = `${key}-${i}`; input.checked = answers[key] === option.value; input.autocomplete = 'off';
    label.append(input, node('span', option.label)); fieldset.append(label);
  }
  $('back').disabled = step === 0; $('next').textContent = step === path().length - 1 ? 'Sonucumu göster →' : 'Devam et →'; $('form-error').textContent = '';
  if (focus) $('question-title').focus();
}
function pformat(p) { return p < .0001 ? '<0,0001' : p.toLocaleString('tr-TR', { maximumFractionDigits: 4 }); }
const percent = p => (p * 100).toLocaleString('tr-TR', { maximumFractionDigits: 1 });
function renderResult() {
  const result = compare(data, answers); $('profile').textContent = result.profile; $('group-n').textContent = result.n.toLocaleString('tr-TR'); $('guidance-text').textContent = result.guidance; $('comparison').replaceChildren();
  const headings = { purpose: 'Bu grupta kullanım amaçları', tool: 'Bu grupta kullanılan araçlar', concern: 'Bu grupta bildirilen endişeler' };
  for (const dist of result.distributions) {
    const section = node('section', undefined, 'distribution'); section.append(node('h2', headings[dist.field]), node('p', `Aynı sıklıktaki ${result.n} katılımcı. Bu sorunun geçerli yanıt tabanı: n=${dist.n}. Tek seçimli yanıtlar.`, 'denominator'));
    if (!dist.sufficient) section.append(node('p', `Yeterli karşılaştırma verisi yok (n=${dist.n}). Yüzde göstermek için en az 30 geçerli yanıt gerekir.`));
    else {
      const selected = dist.rows.find(r => r.selected);
      if (selected) section.append(node('p', `${dist.n} kişinin ${selected.count} tanesi (%${percent(selected.proportion)}) senin seçtiğin “${selected.label}” yanıtını vermiş.`, 'selected-result'));
      for (const row of dist.rows) {
        const line = node('div', undefined, `bar-row${row.selected ? ' chosen' : ''}`); const track = node('div', undefined, 'bar-track'); const fill = node('div', undefined, 'bar-fill'); fill.style.width = `${row.proportion * 100}%`; track.append(fill); track.setAttribute('aria-hidden', 'true');
        line.append(node('span', row.label + (row.selected ? ' · senin yanıtın' : ''), 'bar-label'), track, node('span', `%${percent(row.proportion)} (${row.count})`, 'bar-value')); section.append(line);
      }
    }
    $('comparison').append(section);
  }
  view('result-view'); $('result-title').focus();
}
function renderResearch() {
  $('sample-size').textContent = data.audit.rowCount.toLocaleString('tr-TR');
  for (const [value, label] of [[data.audit.rowCount, 'kaynak katılımcı'], [data.audit.nonemptyColumns, 'araştırma değişkeni'], [3, 'keşfedici hipotez']]) { const card = node('div', undefined, 'audit-card'); card.append(node('strong', value.toLocaleString('tr-TR')), node('span', label)); $('audit-cards').append(card); }
  const titles = ['Kullanım sıklığı ve kullanım amacı', 'Araç kullanımı ve kullanım amacı', 'Kullanım sıklığı ve endişeler'];
  data.tests.forEach((test, i) => {
    const card = node('section', undefined, 'test-card'); card.append(node('h3', `H${i + 1} · ${titles[i]}`), node('p', test.decision));
    const meta = node('div', undefined, 'test-meta'); for (const text of [`n=${test.n}`, `Düzeltilmiş p ${pformat(test.adjustedP)}`, `Cramér’s V=${test.cramersV.toLocaleString('tr-TR', { maximumFractionDigits: 3 })}`]) meta.append(node('span', text)); card.append(meta);
    const details = node('details'); details.append(node('summary', 'Yöntem ve duyarlılık analizi'), node('p', `${test.method}. χ²=${test.statistic.toFixed(3)}, sd=${test.df}. Beklenen hücre sayılarının %${percent(test.smallCellFraction)} kadarı 5’in altında.${test.permutations ? ` ${test.permutations} permütasyon; minimum p çözünürlüğü 0,0001.` : ''}`));
    details.append(node('p', `Yalnız güncel kullanıcıları içeren duyarlılık kontrolü: n=${test.sensitivity.n}; ham p ${pformat(test.sensitivity.p)}. Bu ek testin p değeri ana üç testin Holm düzeltmesine dahil değildir; keşfedici olarak okunmalıdır.`)); card.append(details); $('research-tests').append(card);
  });
  $('audit-note').textContent = `Dosyada sıklığını “hiç” veya “bıraktım” olarak belirten ${data.audit.nonuseFrequency}, araç kullanmadığını belirten ${data.audit.noTool} kişi var. Bunlar aynı tanım değildir. Ana analizde kayıtlar korundu; ${data.audit.activeCount} güncel kullanıcıyla duyarlılık kontrolü yapıldı. Tamamen boş bir sütun analize alınmadı.`;
}
function reset() { answers = {}; step = 0; $('survey').reset(); $('comparison').replaceChildren(); $('profile').textContent = ''; view('survey-view'); if (data) drawQuestion(false); }
$('survey').addEventListener('submit', event => {
  event.preventDefault(); const key = path()[step]; const input = $('options').querySelector('input:checked');
  if (!input) { $('form-error').textContent = 'Devam etmek için bir yanıt seç.'; return; }
  if (key === 'tool' && input.value === "I don't use any AI tools") { $('form-error').textContent = 'Sıklık yanıtın güncel kullanımı belirtiyor. Kullanmıyorsan Geri ile sıklığını değiştir; kullanıyorsan bir araç seç.'; return; }
  answers[key] = input.value;
  if (key === 'frequency' && NONUSE.has(input.value)) { delete answers.tool; delete answers.purpose; }
  if (step < path().length - 1) { step++; drawQuestion(); } else { try { renderResult(); } catch { $('form-error').textContent = 'Karşılaştırma hazırlanamadı. Yanıtlarını veya referans veriyi kontrol et.'; } }
});
$('back').addEventListener('click', () => { const input = $('options').querySelector('input:checked'); if (input) answers[path()[step]] = input.value; step--; drawQuestion(); });
$('edit').addEventListener('click', () => { step = 0; view('survey-view'); drawQuestion(); });
$('reset').addEventListener('click', reset);
$('nav-survey').addEventListener('click', () => { view('survey-view'); drawQuestion(); });
$('nav-research').addEventListener('click', () => { view('research-view'); $('research-title').focus(); });
$('home-link').addEventListener('click', event => { event.preventDefault(); view('survey-view'); drawQuestion(); });
window.addEventListener('pageshow', event => { if (event.persisted) reset(); });
window.addEventListener('pagehide', () => { reset(); });
try { data = (await import('../data/reference.js')).default; renderResearch(); reset(); }
catch { for (const v of views) $(v).hidden = true; $('fatal-error').hidden = false; $('fatal-error').textContent = 'Referans verisi yüklenemedi. Uygulamayı README’deki yerel sunucu komutuyla aç; dosyayı çift tıklamak yerine http adresini kullan.'; }
