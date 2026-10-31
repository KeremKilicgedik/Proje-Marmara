export const MIN_GROUP_SIZE = 30;
export const NONUSE = new Set(['Never', "I've tried them but stopped"]);
export const NO_TOOL = "I don't use any AI tools";

// Seçenekleri kontrol et. Hiç kullanmayanlarda güncel araç ve amaç arama.
export function validate(data, answers) {
  const errors = [];
  for (const field of ['frequency', 'concern']) {
    if (!data.options[field].some(o => o.value === answers[field])) errors.push(field);
  }
  if (!NONUSE.has(answers.frequency)) {
    for (const field of ['tool', 'purpose']) {
      if (!data.options[field].some(o => o.value === answers[field])) errors.push(field);
    }
    if (answers.tool === NO_TOOL) errors.push('tool');
  }
  return [...new Set(errors)];
}

// Aynı kullanım sıklığı grubunu seç ve her sorunun oranını o grupta hesapla.
export function compare(data, answers) {
  if (validate(data, answers).length) throw new Error('Yanıtlar eksik veya birbiriyle uyumsuz.');
  const group = data.groups[answers.frequency];
  if (!group || !Number.isInteger(group.n) || group.n < 0) throw new Error('Referans verisi geçersiz.');
  const active = !NONUSE.has(answers.frequency);
  const fields = active ? ['purpose', 'tool', 'concern'] : ['concern'];
  const distributions = fields.map(field => {
    const counts = group.counts[field];
    if (!counts || Object.values(counts).some(n => !Number.isInteger(n) || n < 0)) throw new Error('Referans sayımları geçersiz.');
    // Payda, bu sorunun gruptaki geçerli yanıt sayısıdır.
    const denominator = Object.values(counts).reduce((a, b) => a + b, 0);
    if (denominator > group.n) throw new Error('Tek seçimli soruda kişi paydası aşıldı.');
    return {
      field, n: denominator, sufficient: denominator >= MIN_GROUP_SIZE,
      rows: data.options[field].map(option => ({
        ...option, count: counts[option.value] ?? 0,
        proportion: denominator >= MIN_GROUP_SIZE ? (counts[option.value] ?? 0) / denominator : null,
        selected: option.value === answers[field],
      })).sort((a, b) => b.count - a.count),
    };
  });
  const label = field => data.options[field].find(o => o.value === answers[field])?.label;
  const profile = active ? `${label('frequency')} · ${label('purpose')}` : label('frequency');
  const guidance = !active ? 'Yapay zekâyı kullanmama veya bırakma tercihin bir eksiklik değildir. Yeniden denemek istersen kişisel veri içermeyen küçük bir görevle başlayabilirsin.'
    : answers.purpose === 'Coding and debugging' ? 'Kod önerilerini küçük örneklerle test et ve neden çalıştığını açıklayabildiğinden emin ol. Gizli anahtarlarını araçlarla paylaşma.'
    : answers.purpose === 'Studying and homework help' ? 'Doğrudan cevabı almak yerine açıklama ve alıştırma iste; öğrendiklerini ders kaynağınla kontrol et.'
    : answers.purpose === 'Research and Answering questions' ? 'Önemli iddiaları birincil kaynaklarla karşılaştır; kaynak bağlantılarının gerçekten iddiayı desteklediğini kontrol et.'
    : 'Üretilen çıktıyı amacına uygunluk ve doğruluk açısından kontrol et. Paylaşmadan önce kişisel veya gizli bilgileri çıkar.';
  return { profile, guidance, active, n: group.n, frequency: label('frequency'), distributions, ruleVersion: '1.0' };
}
