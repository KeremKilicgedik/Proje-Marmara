# Veri, yöntem ve gizlilik

## Kaynak ve doğrulama

Abhijeet Kumar, **AI Tools and Technology Trends**, Mendeley Data, v1. DOI: https://doi.org/10.17632/wphjf9t7bv.1. Kaynak: https://data.mendeley.com/datasets/wphjf9t7bv/1. Lisans: CC BY 4.0. Toplu paket, Türkçe etiketleme ve analizler bu proje kapsamında hazırlanmıştır.

Yüklenen CSV'de 1.481 kayıt, sekiz dolu soru alanı ve tamamen boş `.` sütunu vardır. Sekiz soru alanında boş yanıt yoktur. İncelenen araç, amaç, sıklık ve endişe alanlarında her kayıt bir tek seçimli kategori içerir; metin içindeki virgüller çoklu seçim ayıracı sayılmamıştır. Yaş/cinsiyet değişkeni yoktur.

CSV analiz kaynağıdır. Birlikte gönderilen XLSX'in 1.482 satırı (başlık dahil) ve dokuz sütunu dış boşluklar normalize edildikten sonra CSV ile birebir eşleşmiştir; kaynak dosyalar depoya dağıtılmaz. Pakette CSV SHA-256 özeti bulunur.

## Temizleme kararları

Başlık ve değerlerdeki dış boşluklar temizlendi. Tamamen boş sütun analize alınmadı. İngilizce kaynak kategorileri korunarak ayrı Türkçe etiketler eklendi. Kayıtlar yalnız aynı yanıt kombinasyonunu taşıdığı için silinmedi; katılımcı kimliği olmadığından birebir aynı yanıtlar gerçek tekrar kayıt olarak kanıtlanamaz.

Önceki proje belgesindeki 86 sayısı **araç kullanmıyorum** yanıtının sayısıdır. Güncel CSV'de sıklığı **Never 51 + bıraktım 37 = 88** olan kişi vardır. İki tanım birbirine eşit değildir. Ana araştırmada tüm kayıtlar tutuldu. Güncel kullanım belirtmeyenleri çıkaran 1.393 kişilik ek analiz duyarlılık kontrolü olarak raporlandı; ana sonuçla karıştırılmadı.

## Üç araştırma hipotezi

Her çift için H₀ ilişki olmadığı, H₁ ilişki olduğu yönündedir.

| Hipotez | Karşılaştırma | Ana yöntem | Sonuç (Holm p) | Cramér’s V |
|---|---|---|---|---|
| H1 | Kullanım sıklığı × kullanım amacı | Pearson istatistiğiyle permütasyon | 0,0002; H₀ reddedildi | 0,110 |
| H2 | Kullanılan araç × kullanım amacı | Pearson ki-kare | <0,0001; H₀ reddedildi | 0,313 |
| H3 | Kullanım sıklığı × endişe | Pearson ki-kare | 0,3245; H₀ reddedilemedi | 0,071 |

Keşfedici testler, katılımcı kayıtlarının bağımsız olduğu varsayımıyla yapılır. Anketin toplumu temsil ettiği kabul edilmez; nedensellik kurulmaz. Kaynak örneklem tasarımının sınırlılıkları testle ortadan kalkmaz.

Beklenen hücrelerin en az birinin 1'in altında olması veya %20'den fazlasının 5'in altında kalması halinde asimptotik ki-kare yerine sabit tohumlu 9.999 permütasyon kullanıldı. H1 bu koşulu karşılar. Monte Carlo p=(aşan+1)/(B+1); minimum çözünürlük 0,0001'dir; bu sınır gerçek p'nin tam değeri gibi yorumlanmaz. H2/H3 standart Pearson yaklaşımının bu kontrolünü geçti. Üç ana teste Holm düzeltmesi, alpha=0,05 uygulandı.

**H1 özellikle temkinli okunmalı:** 1.393 güncel kullanıcıyla yapılan ek analizde ham p=0,0915'tir; ana örneklemdeki ilişki bu kapsamda anlamlılık eşiğine ulaşmaz. H2 ek analizde ham p=0,0001 (permütasyon çözünürlüğü), H3'te ham p=0,2006'dır. Ek analizler keşfedicidir; ana üç testin Holm ailesine dahil değildir. V değerleri raporlanır; evrensel “güçlü/zayıf” etiketleri verilmez.

H₀'ın reddedilememesi ilişkisizliğin kanıtı değildir. Test sonuçları bir kullanıcının profilini bilimsel olarak doğrulamaz.

## Uygulamadaki karşılaştırma

Referans grubu yalnız **aynı kullanım sıklığı** ile seçilir. Böylece amaçla grup seçip o amacın oranını şaşırtıcı bir bulgu gibi sunmayız. Bir sorunun paydası gruptaki geçerli kişi sayısı, payı ilgili seçeneği bildiren kişi sayısıdır. Bu dosyadaki alanlar tek seçimlidir. Her soru için n ve seçeneğin kişi sayısı gösterilir.

n<30 için yüzde gösterilmez. Bu pratik bir gösterim kuralıdır; n≥30 olması temsiliyet/güvenilirlik garantisi değildir. Mevcut sıklık grupları bu eşiği geçer; küçük/boş gruplar testlerde ayrıca denenmiştir. Kullanıcı hiç kullanmıyorsa veya bıraktıysa güncel amaç/araç soruları zorlanmaz; endişe karşılaştırması gösterilir.

Profil, kişinin sıklık ve amaç yanıtının özetidir; gizli skor veya eğitilmiş model yoktur. Genel öneriler elle yazılmıştır ve bilimsel bulgudan ayrı etiketlenir. Veri setinde olmayan demografik özellikler veya örneklem dışı genellemeler üretilmez.

## Gizlilik

Yanıtlar yalnız JavaScript belleğinde tutulur. Yanıtları sunucuya gönderme, URL/konsola yazma, çerez/localStorage/sessionStorage/IndexedDB kullanma yoktur. Harici analitik veya AI servisi yoktur. Sonuç hesaplanıp çizildikten sonra ham seçimler ve form alanları temizlenir. Ankete dönüş, diğer uygulama ekranları, sekmenin gizlenmesi, bağlantı açma, hata, yenileme ve geri/ileri önbelleği dönüşünde sonuçlar da temizlenir. `connect-src 'none'` ve `form-action 'none'` ek koruma sağlar; modül dosyaları aynı kökenden yüklenir.

Barındırma sağlayıcısı IP/erişim kayıtları tutabilir; “hiçbir veri işlenmez” denmez. Kerem, Opera GX üzerinde denediği anket–sonuç senaryosunda Network listesinin ve Local Storage, Session Storage, IndexedDB, Cookies alanlarının boş olduğunu bildirdi. Bu kullanıcı gözlemi, 22 otomatik testten ayrı kaydedilir; bütün tarayıcılar için eksiksiz doğrulama veya hukuki güvence sayılmaz.

## Yeniden üretme

Python 3 ve NumPy ile proje kökünden:

```bash
python scripts/prepare_data.py "kaynak-dosya.csv"
```

Bu komut `data/reference.js` dosyasını yeniden üretir. İçinde kaynak hash'i, kategori sözlüğü, grup sayımları, çapraz tablolar ve test parametreleri bulunur. Değişen veriyle testler de yeniden çalıştırılmalıdır.

## İncelenen kaynaklar ve benzer çalışma

31 Ekim 2026 tarihinde aşağıdaki iki birincil kaynak incelendi. Bu bölüm kısa bir araştırma notudur; kapsamlı akademik literatür taraması değildir.

| Kaynak | İncelenen nokta | Projemizdeki karşılığı ve sınırı |
|---|---|---|
| [Kumar, AI Tools and Technology Trends, v1, 2026](https://data.mendeley.com/datasets/wphjf9t7bv/1) | Öğrencilerin AI kullanımı ve tercihleri için çevrim içi anket; açık veri ve CC BY 4.0 lisansı | Analizimizin asıl kaynağı. Kaynak sayfasının genel açıklamasına rağmen yüklenen dosyada yaş/cinsiyet bulunmadığı dosya üzerinden doğrulandı. Örneklem topluma genellenmez. |
| [Stack Overflow Developer Survey 2025 — AI](https://survey.stackoverflow.co/2025/ai) | AI kullanımının yanında çıktıya güven ve kullanım güçlüklerini ayrı sorularla inceliyor | Kullanım ve endişenin ayrı boyutlar olarak ele alınmasına örnek. Geliştirici kitlesi ve soruları farklı olduğundan sayımları Mendeley verisiyle birleştirmiyoruz. |

Stack Overflow raporunda doğruluğa güvenmeyenlerin oranı %46, güvenenlerin oranı %33 olarak veriliyor. Bu sayı bizim örneklemimizin sonucu değildir; kullanım yaygınlığı ile güvenin aynı kavram olmadığını tartışmak için dış araştırma bağlamıdır. Kaynak: yukarıdaki AI sayfasının “Accuracy of AI tools” bölümü.

Bizim yazılım katkımız, hazır anket sonuçlarını göstermekle birlikte ziyaretçinin seçimine göre aynı kullanım sıklığı grubunun dağılımını hesaplayan, kaynağı ve paydayı görünür kılan bir arayüzdür. Yeni bir psikometrik ölçüm veya makine öğrenmesi modeli geliştirdiğimizi iddia etmiyoruz.
