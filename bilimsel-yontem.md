# Bilimsel yöntem ve araştırma hipotezleri

## İki ayrı çıktı

Araştırma bölümünde kaynak örneklemin ilişkileri analiz edilir. Uygulamada kişinin yanıtları bu örneklemle betimsel olarak karşılaştırılır. Bir hipotezin anlamlı çıkması bireysel profil sınıflandırmasını doğrulamaz. Uygulama kişilik, zekâ, başarı veya gelecek davranış tahmini yapmaz.

## Araştırma hipotezleri

Mendeley projesinin mevcut üç hipotezi korunmuştur. Epoch'a göre konuşulan yaş ve cinsiyet hipotezleri bu veri setine aktarılmamıştır; mevcut dosyada bu alanların varlığı doğrulanmamıştır.

### H1 — Kullanım sıklığı ve amaç

**Araştırma sorusu:** Kullanım sıklığı ile kullanım amacı arasında ilişki var mıdır?

- H₀: Kullanım sıklığı ile kullanım amacı arasında ilişki yoktur.
- H₁: Kullanım sıklığı ile kullanım amacı arasında ilişki vardır.

### H2 — Araç kullanımı ve amaç

**Araştırma sorusu:** Kullanılan araçlar ile kullanım amacı arasında ilişki var mıdır?

- H₀: İncelenen araçların kullanımı ile kullanım amacı arasında ilişki yoktur.
- H₁: En az bir aracın kullanımı ile kullanım amacı arasında ilişki vardır.

### H3 — Kullanım sıklığı ve endişeler

**Araştırma sorusu:** Kullanım sıklığı ile kullanıcı endişeleri arasında ilişki var mıdır?

- H₀: Kullanım sıklığı ile kullanıcı endişeleri arasında ilişki yoktur.
- H₁: Kullanım sıklığı ile kullanıcı endişeleri arasında ilişki vardır.

**Analiz planı:** Önce ham soru metni ve tekli/çoklu seçim yapısı doğrulanır. Tek seçimli kategoriler için kişi bazında çapraz tablolar oluşturulur; bağımsız gözlemler ve beklenen hücre sayıları kontrol edilir. Uygunsa Pearson ki-kare, seyrek hücrelerde gerekçeli exact/Monte Carlo alternatifi kullanılır. Çoklu seçimler birbirinden bağımsız satırlar gibi çoğaltılmaz; her seçenek kişi bazında ikili göstergeye dönüştürülür, uygun test ve çoklu test düzeltmesi uygulanır. Rapor n, tablo, yöntem, p, varsa Holm düzeltilmiş p ve uygun etki büyüklüğünü içerir. Alpha=0,05 analizden önce sabitlenir; eşik veya kategoriler sonucu anlamlı yapmak için değiştirilmez.

## Kullanıcı karşılaştırması

İlk sürümde ana eşleme ölçütü **aynı kullanım sıklığıdır**. Amaç ve araç dağılımları bu grup içinde gösterilir. Amaç kullanılarak grup seçilip aynı amaç yüzdesi anlamlı bir keşif gibi sunulmaz. Genişletilmiş eşleştirme gerekiyorsa farklı bir ölçüt kullanıcıya açıklanır ve ayrı analiz sayılır.

- Payda: aynı sıklıktaki, gösterilen soruya geçerli yanıtı olan kişi sayısı.
- Pay: ilgili seçeneği bildiren bu kişiler.
- Çoklu seçimde bir kişi her seçenek için en çok bir kez sayılır; oranlar toplamı %100'ü aşabilir.
- Geçerli n<30 ise yüzde gösterilmez. Bu bir proje gösterim kuralıdır; n≥30 olması temsiliyet veya istatistiksel güvenilirlik garantisi değildir.
- Referans grup n değeri ile her sorunun geçerli n değeri ayrılır.
- Daha geniş gruba sessizce geçilmez; kullanıcıya farklı tabanla karşılaştırma açıkça önerilebilir.
- Bilinmeyen, eksik veya kaynakta bulunmayan seçenekler sıfıra dönüştürülmez.
- “Hiç kullanmıyorum” ve “denedim, bıraktım” ayrı kategorilerdir; güncel amaç sorusuna zorlanmazlar. Kaynaktaki benzer kayıtlar otomatik silinmez.

## Profil ve öneriler

Başlık, kullanıcının seçtiği sıklık ve amaçların anlaşılır bir özetidir. Çoklu amaçlarda hepsi korunur veya nötr “birden fazla amaç” açıklaması kullanılır; keyfî baskın amaç atanmaz. Kesin kategori eşlemeleri ham veri doğrulamasından sonra sürümlenecektir. Öneriler elle yazılmış amaç temelli genel rehberliktir; veri setinin kanıtladığı çıkarım veya eğitilmiş AI çıktısı gibi sunulmaz.

## Sınırlılıklar ve raporlama

Çevrim içi anket örnekleminin seçilim, öz bildirim ve ölçüm sınırları vardır. Tüm topluma genelleme, nedensellik, klinik/psikolojik değerlendirme yapılmaz. Kaynakta belirtilmeyen ağırlık, güven aralığı veya temsil iddiası icat edilmez. Sonuç ekranındaki kaynak/sürüm ve sınırlılık bağlantısı görünür olmalıdır. Örnek tasarım sayıları gerçek bulgular olarak kullanılmaz.

Bu güncellemede ham Mendeley dosyası analiz edilmemiştir; istatistiksel sonuç üretilmemiştir.
