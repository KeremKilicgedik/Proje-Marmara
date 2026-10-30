# Gereksinim analizi

Sürüm 2.0 · 30 Ekim 2026 · Durum: tasarım

## Amaç ve kapsam

Kısa anket yanıtlarını mevcut Mendeley araştırma verisiyle karşılaştıran, kullanım örüntüsünü ve genel önerileri gösteren statik web uygulaması geliştirilecektir. Araştırma analizleri uygulamanın ayrı bir ekranında sunulacaktır. Eski belgedeki “uygulama geliştirme kapsam dışıdır” kararı bu sürümle değiştirilmiştir.

Aktörler: anketi dolduran ziyaretçi ve referans veriyi geliştirme aşamasında hazırlayan ekip üyesi. Öğretim elemanı araştırmayı ve çalışan uygulamayı değerlendirir. Canlı sistemde yönetici girişi gerekmez.

## Fonksiyonel gereksinimler

| Kod | Gereksinim | Kabul ölçütü |
|---|---|---|
| FR-01 | Kaynak ve gizliliği göster | Anketten önce kaynak ve yanıtların kaydedilmediği bilgisi görünür |
| FR-02 | Kısa anket sun | Yalnız doğrulanmış veri seçenekleri kullanılır; ad/e-posta istenmez |
| FR-03 | Yanıtları doğrula | Zorunlu sorular ve geçersiz kombinasyonlar için açıklayıcı uyarı vardır |
| FR-04 | Kullanım özeti oluştur | Aynı yanıt aynı kural sürümünde aynı başlığı üretir; kural gerekçesi görünür |
| FR-05 | Referans grubu seç | Önceden tanımlı eşleme ölçütü ve kullanılan kişi sayısı görünür |
| FR-06 | Oranları hesapla | Pay, payda ve eksik veri işlemi belirtilir; çoklu seçimde kişi paydası kullanılır |
| FR-07 | Az veri durumunu yönet | Geçerli n<30 için yüzdeler gösterilmez; daha geniş grup otomatik seçilmez |
| FR-08 | Öneri sun | Amaç temelli genel öneriler bulgulardan ayrı etiketlenir |
| FR-09 | Yanıt düzenle ve sıfırla | Düzenleme sonucu yeniler; sıfırlama ve yenileme önceki yanıtları geri getirmez |
| FR-10 | Araştırma ekranı göster | Yalnız tamamlanmış gerçek analizler, kaynak ve sınırlılıklarla gösterilir |
| FR-11 | Veri hatasını yönet | Referans paket yüklenmezse veya şema yanlışsa sahte sonuç yerine hata gösterilir |
| FR-12 | Veri hazırlamayı belgele | Kaynak sürümü, kategori eşlemeleri ve dışlama gerekçeleri sürümlenir |

## Fonksiyonel olmayan gereksinimler

| Kod | Gereksinim | Doğrulama |
|---|---|---|
| NFR-01 | Anket yanıtı kalıcı saklanmaz | Depolama, çerez, URL ve konsol kontrolü |
| NFR-02 | Yanıt ağ üzerinden aktarılmaz | Gerçek tarayıcı Network kontrolü ve kaynak kod taraması |
| NFR-03 | Erişilebilir kullanım | Etiketli alanlar, klavye akışı, görünür odak ve anlaşılır hata |
| NFR-04 | Mobil okunabilirlik | 360 px genişlikte yatay taşma olmadan form ve sonuç |
| NFR-05 | Tekrarlanabilirlik | Sabit veri/kural sürümünde aynı girdiye aynı hesaplama |
| NFR-06 | Bilimsel açıklık | Kaynak, grup büyüklüğü, payda ve genelleme sınırı görünür |
| NFR-07 | Veri minimizasyonu | Kimlik alanları dağıtılmaz; paket tercihen toplu tablolardan oluşur |

## İlk sürümün sınırları

Üyelik, yanıt veritabanı, yeni anket veri seti toplama, harici AI servisi, kişilik/başarı tahmini ve model eğitimi ilk sürümde bulunmaz. Ankete verilen yanıtlar yalnızca anlık karşılaştırma girdisidir; araştırma örneklemine eklenmez.

Tüm uygulama gereksinimleri geliştirme/test aşamasını beklemektedir. Belgenin varlığı uygulamanın tamamlandığı anlamına gelmez. İş kırılımı: [görev planı](gorev-plani.md).
