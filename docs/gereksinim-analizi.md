# Gereksinimler

Sürüm 4 · 31 Ekim 2026 · Ara değerlendirme prototipi

**Problem:** Araştırmadaki AI kullanım dağılımları, kişinin kendi yanıtlarıyla ilişkilendirilebilen anlaşılır bir karşılaştırma olarak sunulmuyor.

**Çözüm:** Ziyaretçi kısa anketi doldurur; tarayıcıdaki uygulama aynı sıklık grubunun verilerini gösterir. Hedef kullanıcılar AI kullanımını merak eden öğrenciler ve diğer ziyaretçilerdir. Kaynak örneklem dışındaki kişilere de arayüz açılabilir; ancak sonuçlar topluma genellenemez.

## Fonksiyonel gereksinimler

| Kod | Gereksinim | Kabul ölçütü |
|---|---|---|
| F1 | Anketi sun ve doğrula | Gerçek veri seçenekleri, boş yanıt uyarısı, geri dönme |
| F2 | Kullanım örüntüsünü açıkla | Sıklık ve amaç yanıtı özetlenir; kişilik etiketi verilmez |
| F3 | Referans grubuyla karşılaştır | Aynı sıklık grubunda n, pay ve yüzde gösterilir |
| F4 | Veri yetersizliğini yönet | Geçerli n<30 için yüzde yerine açıklama gösterilir |
| F5 | Genel öneri göster | İstatistiksel bulgudan ayrı ve genel rehberlik olarak sunulur |
| F6 | Temizle ve yeniden başla | Sonuç hesaplandıktan sonra ham seçimler silinir. Ankete dönüş, ekran/sekme değişimi ve hata durumları önceki yanıt/sonucu temizler; yeni anket boş başlar |
| F7 | Araştırmayı göster | Üç hipotezin yöntemi, sonucu ve sınırları görülebilir |

## Fonksiyonel olmayan gereksinimler

| Kod | Gereksinim | Kontrol |
|---|---|---|
| NF1 | Yanıtlar kaydedilmez veya aktarılmaz | Kaynak kodu, Network, depolama ve URL kontrolü |
| NF2 | Sonuç tekrarlanabilirdir | Aynı yanıt, veri ve kural sürümünde aynı sonuç testi |
| NF3 | Mobil ve klavyeyle kullanılabilir | 360 px ekran, etiketler, odak ve klavye akışı |
| NF4 | Sayılar açıklanabilirdir | Veri sayımları, payda ve kaynak doğrulaması |

**İlk sürümde olmayanlar:** Üyelik, yanıt veritabanı, model eğitimi, kişilik testi, dış AI servisi ve yeni araştırma verisi toplama. Uygulamadaki form, yeni katılımcı verisi toplayan bir araştırma değildir.

**Pazartesi kabulü:** Belgelerle kod birbiriyle tutarlı olsun; temel anket–sonuç akışı gösterilebilsin; GitHub ve Kanban gerçek ilerlemeyi yansıtsın; ekip yaptığı işleri açıklayabilsin. Ürünün %100 bitmesi beklenmiyor.
