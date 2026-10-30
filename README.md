# Yapay Zekâ Kullanım Profili ve Veri Karşılaştırma Uygulaması

**Marmara Üniversitesi · Yazılım Mühendisliği Temelleri · Dört kişilik grup projesi**

Kullanıcı kısa bir anket doldurur. Uygulama, yanıtlarını Mendeley veri setindeki karşılaştırılabilir katılımcı gruplarıyla eşleştirir; kullanım örüntüsünü, grup karşılaştırmasını ve amacına uygun genel önerileri gösterir.

Test akışı kolay anlaşılırdır. Sonuç bir kişilik testi, zekâ ölçümü veya doğrulanmış psikolojik sınıflandırma değildir. Profil başlığı, açık kurallara göre oluşturulan bir kullanım özetidir.

## Kullanıcı akışı

1. Kullanıcı veri kaynağını, karşılaştırmanın sınırlarını ve gizlilik bilgisini okur.
2. Veri setindeki seçeneklerle eşleştirilen kısa anketi doldurur.
3. Uygulama yanıtları yalnızca tarayıcı belleğinde değerlendirir.
4. Önceden belirlenmiş karşılaştırma ölçütüyle referans grubu bulur.
5. Profil özeti, karşılaştırılan grubun büyüklüğü ve oranları gösterilir.
6. Yeterli karşılaştırılabilir kayıt yoksa yüzde yerine açıklama gösterilir.
7. Kullanıcı yanıtlarını düzenleyebilir veya testi sıfırlayabilir.

## Ekranlar

| Ekran | İçerik |
|---|---|
| Başlangıç ve anket | Kaynak, gizlilik, kullanım sıklığı/amacı, araçlar ve uygun diğer sorular |
| Kişisel sonuç | Yanıtlara dayanan kullanım özeti, grup n değeri, karşılaştırmalar, öneriler |
| Araştırma | Toplu dağılımlar, hipotez analizleri, yöntem ve sınırlılıklar |

## Bilimsel temel

Araştırma katmanı; kullanım sıklığı, amaç, araçlar ve endişeler arasındaki ilişkileri inceler. Uygun olduğunda çapraz tablolar, ki-kare testleri ve etki büyüklüğü kullanılır. Çoklu seçimler ayrı ikili değişkenler olarak ele alınır.

Kullanıcıya gösterilen karşılaştırmalar betimseldir. Araştırmadaki anlamlı bir ilişki, bireysel profilin doğrulandığı veya kişinin gelecekteki davranışının tahmin edildiği anlamına gelmez. Kaynak örneklem tüm topluma genellenmez. Ayrıntı: [Bilimsel yöntem](docs/bilimsel-yontem.md).

## Veri kaynağı

- **AI Tools and Technology Trends**, Abhijeet Kumar, Mendeley Data, sürüm 1.
- Kaynak: https://data.mendeley.com/datasets/wphjf9t7bv/1
- DOI: https://doi.org/10.17632/wphjf9t7bv.1
- Kaynak sayfasındaki lisans: **CC BY 4.0**. Atıf, sürüm ve yapılan değişiklikler korunmalıdır.
- Önceki proje kayıtlarında 1.481 yanıt ve 8 araştırma değişkeni bildirilmiştir. Ham veri bu depoda bulunmadığından bu sayılar bu güncellemede yeniden doğrulanmamıştır.
- Önceki eksik veri/tutarsızlık kontrolleri [veri sözlüğünde](docs/veri-sozlugu.md) tarihsel kayıt olarak ayrılmıştır. Uygulamaya veri eklenmeden önce tekrar doğrulanacaktır.

Bu projede Mendeley kaynağı kullanılacaktır. Epoch analizleri bu deponun araştırma sonuçları değildir.

## Gizlilik tasarımı

Anket yanıtları yalnızca tarayıcı belleğinde işlenir. Yanıtları sunucuya gönderme, veritabanına yazma, localStorage/sessionStorage/IndexedDB/çerez ile saklama, URL'ye ekleme veya analitik/hata raporlama servisine aktarma yapılmaz. Yenileme ve yeniden başlatma yanıtları temizler; geri/ileri önbelleği de test edilecektir.

Statik barındırma sağlayıcısı sayfa istekleri için IP/erişim kaydı tutabilir. Bu yüzden “hiçbir veri işlenmez” vaadi yerine **“anket yanıtlarınız uygulama tarafından kaydedilmez veya sunucuya gönderilmez”** ifadesi kullanılır. [Gizlilik ve testler](docs/gizlilik.md).

## Teknik plan ve mevcut durum

Önerilen ilk sürüm: HTML, CSS ve JavaScript ile statik web uygulaması. Karşılaştırma motoru ve öneri kuralları tarayıcıda çalışır. Kaynak veri, lisans ve içerik incelemesinden sonra kimlik bilgisi içermeyen gerekli alanlar veya toplu karşılaştırma tabloları olarak hazırlanır. Harici AI servisi ve model eğitimi gerekmez.

**Şu an depoda uygulama kodu ve doğrulanmış veri paketi yoktur.** Bu güncelleme proje kapsamını, gereksinimleri, tasarımı ve geliştirme planını hazırlamaktadır. Çalıştırma komutu veya canlı demo henüz yoktur.

| İş | Durum |
|---|---|
| Yeni kapsam ve bilimsel/gizlilik kuralları | Belgelendi |
| Gereksinimler ve UML tasarımı | Belgelendi; uygulamayla doğrulanacak |
| Ham veri, seçenek eşleme ve temizleme | Bekliyor |
| Anket, sonuç ve araştırma ekranları | Bekliyor |
| Karşılaştırma motoru ve öneriler | Bekliyor |
| Hipotez testleri ve grafikler | Bekliyor |
| Tarayıcı/gizlilik testleri ve demo | Bekliyor |

## Ekip ve sunum

| Sorumluluk | Kapsam |
|---|---|
| Üye 1 — Arayüz | Anket, doğrulama, klavye ve mobil kullanım |
| Üye 2 — Veri | Veri kontrolü, kategori eşleme, araştırma analizleri |
| Üye 3 — Motor | Profil kuralları, referans grubu ve öneriler |
| Üye 4 — Sonuç ve test | Sonuç ekranı, entegrasyon, gizlilik testleri ve demo |

Gerçek isimler ve GitHub atamaları ekip tarafından eşleştirilecek; katkılar gerçek commit ve görev kayıtlarıyla izlenecektir. Hedef sunum: **2 Kasım 2026 Pazartesi** (önceki görüşmedeki pazartesi hedefi esas alınmıştır).

## Belgeler

- [Gereksinim analizi](docs/gereksinim-analizi.md)
- [Kullanım durumları ve UML](docs/use-case.md)
- [Faaliyet akışı](docs/activity.md)
- [Mimari ve sınıf modeli](docs/mimari.md)
- [Bilimsel yöntem ve hipotezler](docs/bilimsel-yontem.md)
- [Veri sözlüğü ve doğrulama](docs/veri-sozlugu.md)
- [Gizlilik](docs/gizlilik.md)
- [Örnek sonuç ekranı](docs/ornek-sonuc.md)
- [Görevler ve kabul ölçütleri](docs/gorev-plani.md)
- [Sunum akışı](docs/sunum-plani.md)
- [Kapsam değişikliği](docs/degisiklik-kaydi.md)

GitHub Issues ve Projects görevleri bu kapsamla uyumlu tutulacaktır. Tamamlanmayan işler tamamlandı olarak işaretlenmez; eski commit geçmişi korunur.
