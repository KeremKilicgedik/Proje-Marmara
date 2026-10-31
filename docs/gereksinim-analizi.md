# Gereksinim analizi

Bu belge, uygulamanın ne yapması gerektiğini ve bunu nasıl kontrol edeceğimizi anlatıyor.

## Amaç ve kullanıcılar

AI kullanımını merak eden öğrenciler ve ziyaretçiler kısa anketi doldurup hazır veri setindeki aynı sıklık grubuyla karşılaştırma yapabilsin. Sonuçlar bütün toplumu temsil etmez.

## Fonksiyonel gereksinimler: uygulamanın yapacağı işler

| Kod | Beklediğimiz davranış | Kontrolü |
|---|---|---|
| F1 | Anket sorularını gösterme ve yanıtları kontrol etme | Boş yanıtta uyarı verir. Anket sırasında önceki soruya dönülebilir. |
| F2 | Kullanım özetini gösterme | Seçilen sıklık ve amaç açıklanır. Kişilik etiketi verilmez. |
| F3 | Referans grubuyla karşılaştırma | Aynı sıklık grubundaki kişi sayısını, seçeneğin sayısını ve oranını gösterir. |
| F4 | Küçük grupları açıklama | Geçerli kişi sayısı 30'dan azsa yüzde yerine açıklama gösterir. Bu bilimsel güvenilirlik sınırı değildir. |
| F5 | Genel öneri gösterme | Öneri, araştırma sonucu gibi sunulmaz. |
| F6 | Yeni anketi boş başlatma | Sonuçtan sonra ham seçimler silinir. Ankete dönüş, ekran/sekme değişimi ve hata durumlarında eski yanıt/sonuç temizlenir. |
| F7 | Araştırma sonuçlarını gösterme | Üç hipotezin sorusu, sonucu ve sınırları görülebilir. |

## Fonksiyonel olmayan gereksinimler: nasıl çalışmalı?

| Kod | Beklediğimiz özellik | Kontrolü |
|---|---|---|
| NF1 | Yeni yanıtları kaydetmeme ve göndermeme | Kod, ağ, depolama ve URL kontrolleri. |
| NF2 | Aynı girdide aynı sonucu verme | Aynı yanıt, veri ve kural sürümüyle hesaplama testi. |
| NF3 | Mobil ve klavyeyle kullanılabilme | Dar ekran ve klavye denemesi. Uygulamalı kontrol henüz açık. |
| NF4 | Sayıların anlaşılır olması | Kaynak, kişi sayısı ve oran hesabını kontrol etme. |

## İlk kapsam

Kullanıcı hesabı, yeni yanıt veritabanı veya dış AI servisi yok. Formu yeni araştırma verisi toplamak için kullanmıyoruz. Model eğitmiyoruz.

Pazartesi için temel akışın çalışmasını, belgelerin kodla uyuşmasını ve ekibin yaptığı işi açıklayabilmesini hedefliyoruz. Kalan görevleri açıkça göstereceğiz.
