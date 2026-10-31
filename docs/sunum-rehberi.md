# Ekip, ara değerlendirme sunumu ve soru-cevap

## Hedef ve görevler

Pazartesi oturumu dönem sonu teslimi değildir. Hedef, 12–15 dakikada yapılan işi ve yazılım mühendisliği sürecini somut göstermek, soruları açıklayabilmektir.

| Kişi | Sorumluluk |
|---|---|
| Kerem | Koordinasyon, veri analizi, GitHub ve Kanban |
| Seyfettin | Uygulama kodunu inceleme/geliştirme, pazartesi sunumu |
| Suhayb ve Umut | Birlikte tanıtım ve süreç slaytları; okunabilir görseller |

Başlangıç kodunu ve belgeleri Codex desteğiyle hazırladık. Sunumdan önce herkes kendi bölümünü inceleyip açıklayabilecek. Katkıları gerçek değişikliklerle kaydedeceğiz.

## 14 dakikalık akış

| Süre | Başlık | Somut kanıt |
|---|---|---|
| 0:00–1:15 | Problem, amaç, kapsam, kullanıcı | README ve üç ekran fikri |
| 1:15–2:30 | Veri araştırması ve planlama | Mendeley kaynağı, araştırma notu, küçük artımlarla ilerleme kararı |
| 2:30–5:00 | GitHub ve Kanban | Depo yapısı, gerçek Issues, durum geçişleri, commit farkı |
| 5:00–6:30 | VS Code ve Git | Küçük gerçek değişiklik; status/add/commit/push veya kısa kayıt |
| 6:30–8:30 | Gereksinimler ve UML | F1/NF1, Use Case, Activity, Class; koddaki karşılıkları |
| 8:30–11:30 | Çalışan prototip | Anket, sonuç, temiz yeniden başlangıç, kullanmayan kişi ve araştırma ekranı |
| 11:30–12:45 | Problemler ve çözümler | Yanlış payda, 86/88 ayrımı, seyrek hücreler, klasör yükleme |
| 12:45–14:00 | Test ve sonraki aşamalar | Gerçek test çıktısı, açık görevler, dönem sonu hedefi |

Sunum PowerPoint üzerinden yapılacak. Suhayb ve Umut'un slaytlarının son durumu bekleniyor. Ayrıca konuşma notları olan bir PowerPoint prototipi hazırlandı; ekipçe gözden geçirilecek. Ekran kaydı zorunlu değil; canlı gösterim kullanılabilir. Slaytlar konuşma metniyle doldurulmaz. Kod/diyagram ekranda okunabilir büyüklükte gösterilir. Ekran kaydı kullanılacaksa her kayıt 20–40 saniye ve tek amaca odaklı olmalı; sunumdan önce açıldığı kontrol edilmelidir.

## Geliştirme yaklaşımı

**Çevik (Agile) yaklaşımı esas alarak artımlı geliştirme yapıyoruz. Görevleri Kanban ile takip ediyoruz.** Önce veri ve kuralları, sonra anket ve sonuç ekranlarını hazırladık. Testlerde ve incelemelerde gördüğümüz hatalara göre düzenleme yaptık.

- **Çevik:** Geri bildirime göre işi gözden geçirme yaklaşımımız.
- **Artımlı:** Uygulamaya küçük parçalar hâlinde özellik eklememiz.
- **Yinelemeli:** Hazır bölümleri test edip düzeltmemiz.
- **Kanban:** Görevlerin durumunu panoda takip etmemiz.

Scrum rolleri ve düzenli sprint uygulamadığımız için “Scrum kullandık” demiyoruz.

## Kanban için görevler

### Araştırma ve geliştirme planı slaydına yazılacaklar

**Araştırma bulgusu**

- Mendeley Data, AI Tools and Technology Trends: 1.481 yanıtlık veri setini inceledik. Anket seçeneklerini ve karşılaştırmaları bu veriye dayandırdık.
- Stack Overflow Developer Survey 2025, AI bölümü: Kullanım ve çıktıya güven ayrı başlıklarda ele alınıyor. Kendi araştırmamızda da kullanım sıklığı, amaç, araç ve endişeyi ayrı değişkenler olarak inceliyoruz. İki araştırmanın verilerini birleştirmiyoruz.

**Çalışma yaklaşımı**

- Yaklaşım: Çevik yaklaşım doğrultusunda artımlı geliştirme, Kanban ile görev takibi.
- Gerekçe: Kapsamı geliştikçe netleştirmek, işleri küçük parçalara ayırmak ve test sonuçlarına göre düzenlemek.
- Döngü: Planlama, geliştirme, test ve inceleme, düzenleme.

**Aşamalar:** Veri ve gereksinim analizi, UML tasarımı, anket ve karşılaştırma prototipi, test ve düzeltmeler, sunum provası. Mobil/klavye kontrolü ve sunum provası henüz açık işler. Gerçekleşmeyen aşamalara tamamlandı yazmayın.

To Do / In Progress / Done. Aşağıdaki durumlar yerel çalışma kanıtını belirtir; GitHub Issues/Projects'in güncellendiği anlamına gelmez.

| İş | Sorumlu | Yerel durum | Tamamlanma kanıtı |
|---|---|---|---|
| CSV ve kategori kontrolü | Kerem | Hazır; ekip inceleyecek | Gerçek sayımlar, hash ve veri paketi |
| Temel anket ve karşılaştırma | Seyfettin | Başlangıç kodu hazır; ekip incelemesi bekliyor | Çalışan akış ve kendi geliştirme kaydı |
| Gereksinim/UML eşlemesi | Kerem + Seyfettin | Taslak hazır | Ekibin kodla eşleştirerek onayı |
| PowerPoint slaytları | Suhayb + Umut | Son durum dönüşü bekleniyor | Dosyanın açılması ve 12–15 dakikalık prova |
| Opera GX ağ/depolama gözlemi | Kerem | Kullanıcı tarafından bildirildi | Denenen anket–sonuç akışında listeler boş; tüm tarayıcıları kapsamaz |
| Mobil, klavye ve sunum bilgisayarı kontrolü | Seyfettin + Kerem | Açık | 360 px, klavye, boş yanıt, yeniden başlama ve demo açılışı |
| GitHub görev ve Kanban düzeni | Kerem | Mevcut pano incelendi; güncelleme takibi | Canlı panoda gerçek kayıtlar; tamamlanma kanıtıyla durum değişimi |
| Kaynak ve benzer çalışma özeti | Kerem; slayt desteği Suhayb/Umut | Kısa not hazır | veri-ve-yontem.md: Mendeley ve Stack Overflow karşılaştırması |

Done'a yalnız kanıtla geçilir. Eski görev/commit geçmişi silinmez. Geçersiz kapsam açık gerekçeyle kapatılır.

## GitHub'da nereleri açacağız?

Her dosyayı sırayla okumamız gerekmiyor. Aşağıdaki yerleri kısa örneklerle göstereceğiz.

| Açılacak yer | Söyleyeceğimiz açıklama |
|---|---|
| README | “Amacımız, ekip görevleri ve uygulamayı açma bilgileri burada.” |
| docs/gereksinim-analizi.md | “Uygulamanın ne yapması gerektiğini ve kontrolünü yazdık.” |
| docs/tasarim.md | “Kullanıcı işlemlerini, işlem sırasını ve veri yapılarını üç UML diyagramıyla gösterdik.” |
| docs/veri-ve-yontem.md | “Veri kaynağını ve üç araştırma sorusunun sonucunu açıkladık.” |
| src/app.js | “Anketi ve ekranları yönetiyor.” |
| src/engine.js | “Yanıtları doğruluyor ve karşılaştırmayı hesaplıyor.” |
| data/reference.js | “Hazır veri setinden ürettiğimiz toplu sayımlar burada.” |
| tests/ | “Hesaplama ve temizleme kurallarını kontrol ediyoruz.” |

Ardından dosyalardan çıkıp süreç kanıtlarını açacağız:

1. [Issue #3](https://github.com/KeremKilicgedik/Proje-Marmara/issues/3): görev açıklaması ve kabul kutuları. Henüz yapılmayan bir kontrolü tamamlandı göstermeyin.
2. [Kanban panosu](https://github.com/users/KeremKilicgedik/projects/1): yapılacak, devam eden ve biten görevler. Sadece gerçekten durumu değişen işi taşıyın.
3. [Commit geçmişi](https://github.com/KeremKilicgedik/Proje-Marmara/commits/main/): bir commit'i açıp dosya farkını açıklayın. Örneğin bu belgeleri sadeleştiren commit veya sunum provasında yaptığınız gerçek değişiklik kullanılabilir.

**Son olarak:** VS Code'da gerçek Git işlemlerini ve `demo.html` ile çalışan anketi gösterin. Dosya tanıtımı tek başına uygulamalı gösterimin yerini tutmaz.

## Hipotezleri sözlü anlatma

“Sık kullananlarla daha az kullananların amaçları farklı mı? Farklı amaçların araç tercihleri farklı mı? Sıklığa göre endişeler farklı mı? Hazır veri setinde bu üç soruyu araştırdık.”

H1 tüm örneklemde anlamlı, güncel kullanıcılarla yapılan ek analizde değil. H2'de ilişki bulduk. H3'te yeterli kanıt bulamadık. Ayrıntı sorulursa veri ve yöntem belgesindeki hesaplama bölümünü açın. Bu analizlerin bireysel profil için doğrulama olmadığını belirtin.

## Git ve VS Code gösterimi

Proje klasörü VS Code'da açılır. Önce gerçek durum ve uzak depo gösterilir:

```bash
git status
git remote -v
git log --oneline -5
```

Örneğin bu rehberde ekibin doğruladığı küçük bir açıklama değişikliği yapılır:

```bash
git diff
git add docs/sunum-rehberi.md
git commit -m "Sunum provası notlarını güncelle"
git push
```

Push için ekip üyesinin GitHub oturumu ve doğru branch/uzak depo bağlantısı gerekir. Gerçek değişiklik olmadan gösteri amaçlı sahte katkı üretilmez. Branch'in main'den ayrı geliştirme alanı, commit'in yerel kayıt, push'un uzak depoya gönderim olduğu açıklanır.

## Olası sorular ve kısa cevaplar

**Bu bir kişilik testi mi?** Hayır. Yanıt özeti ve aynı sıklık grubunun betimsel karşılaştırmasıdır.

**Buradaki yapay zekâ nerede?** Konu yapay zekâ kullanımıdır; uygulama AI modeli eğitmez. Kural ve istatistik kullanır.

**Kişi niye bu gruba girdi?** Önceden seçilmiş aynı kullanım sıklığı ölçütüyle. Amaç ve araç yüzdeleri bu grubun içinde hesaplanır.

**Kullanıcının yanıtını tutuyor musunuz?** Uygulama yanıtı yalnız bellekte işler; araştırma verisine eklemez. Ağ/depolama kontrollerini ayrıca gösteririz.

**30 kişi bilimsel güvenilirlik sınırı mı?** Hayır. Yanıltıcı küçük grup yüzdelerini göstermemek için pratik bir arayüz kuralı.

**Neden yalnız ki-kare yapmadınız?** H1'de seyrek beklenen hücreler olduğu için permütasyon kullandık. İlişki gücü ve duyarlılık kontrolünü de raporladık.

**H1 kesin doğrulandı mı?** Hayır. Tüm örneklemde ilişki var; yalnız güncel kullanıcılarda eşik aşılmıyor. Kapsam değişimine duyarlı bir bulgu.

**86 ve 88 ne?** 86 kişi araç kullanmıyorum diyor. 88 kişinin sıklığı hiç/bıraktım. Sorular farklı, sayılar aynı kabul edilmez.

**Class diyagramı varken kodda class yok mu?** Diyagram mantıksal nesne ilişkilerini gösteriyor. JavaScript uygulaması nesne ve fonksiyon modülleriyle kuruldu.

**Neden veritabanı yok?** Yeni yanıt saklamıyoruz; toplu referans verisi yeterli. Arka uç eklemek bu aşamada gereksiz.

**Bütün insanlara genelleyebilir miyiz?** Hayır. Çevrim içi örneklemle sınırlı ve keşfedici bir çalışma.

**Yaptıklarınızla planlarınız nasıl ayrılıyor?** Çalışan kod, testler ve kaynak notu gösterilir; mobil/klavye kontrolü, ekip kod incelemesi, slaytların son durumu ve prova açık görevdir.

## Dönem sonuna doğru

Kategori çevirilerini ekipçe gözden geçirme, erişilebilirlik/mobil/gizlilik testleri, grafik ve rapor açıklamalarını geliştirme, ilgili literatürü tamamlama ve arayüz kullanılabilirlik değerlendirmesi. Üyelik veya veri toplama eklemek zorunlu değildir.

## Bu sürümün kontrol kaydı

- CSV ve XLSX normalize içerikleri birebir eşleşti.
- 22 JavaScript hesaplama, kaynak kodu gizlilik ve temizleme testi geçti.
- 3 Python istatistik fonksiyonu testi geçti.
- Modüler ve tek dosyalık JavaScript sözdizimi; belge bağlantıları ve SVG yapısı kontrol edildi.
- Kerem, Opera GX üzerinde denediği senaryoda Network ve dört depolama alanının boş olduğunu bildirdi. Bu kullanıcı gözlemi otomatik test değildir.
- Mobil/klavye ve sunum bilgisayarında uçtan uca prova henüz doğrulanmadı.
- Sunumu yapacak kişinin VS Code üzerinden gerçek değişiklik, commit ve push gösterimi henüz doğrulanmadı.
- GitHub canlı pano ve uzak depo bu yerel kontrollerle güncellenmiş sayılmaz.

## Sunumdan önce uygulanacak kısa kontrol

1. Seyfettin `demo.html` dosyasını sunum bilgisayarında açar; anketi bitirip kaynak, grup büyüklüğü ve oranların anlamını açıklar.
2. “Ankete dön” ile boş başlangıç; araştırma ekranına ve başka sekmeye geçişte temizleme kontrol edilir. Hiç kullanmayan kişi akışı da denenir.
3. Klavyeyle seçim/ilerleme ve dar ekranda görünüm denenir. Sorunlar Issue olarak kaydedilir; geçmeyen kontrol tamamlandı sayılmaz.
4. VS Code'da bir gerçek belge iyileştirmesi yapılıp diff, status, add, commit ve push gösterilir. GitHub'da ilgili commit açılır.
5. Kanban'da bir gerçek görev kabul ölçütüne göre taşınır. Ekibin yapmadığı değişiklikler ona aitmiş gibi gösterilmez.
6. PowerPoint gelince okunabilir UML görselleri, kaynak atıfları, 12–15 dakikalık süre ve çalışan/planlanan ayrımı birlikte kontrol edilir.

İnternet kesintisine karşı indirilen ZIP ve `demo.html` hazır bulundurulur. Kısa ekran kaydı yalnız istenirse yedek gösterimdir.
