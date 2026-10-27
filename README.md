# Proje-Marmara

# Yapay Zekâ Kullanım Alışkanlıkları, Tercihleri ve Kullanıcı Endişelerinin Veri Analizi

**Üniversite:** Marmara Üniversitesi  
**Ders:** Yazılım Mühendisliği Temelleri  
**Proje Türü:** Akademik Veri Analizi ve Yazılım Mühendisliği Süreç Yönetimi  
**Proje Durumu:** Veri analizi ve dokümantasyon çalışmaları devam ediyor.

---

## <u>1. PROJE HAKKINDA</u>

Bu proje, bireylerin yapay zekâ araçlarını kullanım alışkanlıklarını, tercihlerini, kullanım amaçlarını ve yapay zekâ teknolojilerine yönelik endişelerini incelemek amacıyla yürütülen akademik bir veri analizi çalışmasıdır.

Araştırmada Mendeley Data platformunda yayımlanan **AI Tools and Technology Trends** adlı veri seti kullanılmaktadır.

Veri seti **1.481 yanıt ve 8 araştırma değişkeninden** oluşmaktadır.

Proje kapsamında veriler Google Sheets aracılığıyla incelenmekte, temizlenmekte ve görselleştirilmektedir. İlerleyen aşamalarda araştırma hipotezleri uygun istatistiksel yöntemlerle değerlendirilecektir.

Proje yönetiminde GitHub, GitHub Projects ve Git sürüm kontrolü kullanılmaktadır.

---

## <u>2. ARAŞTIRMANIN AMACI</u>

- Yapay zekâ araçlarının kullanım sıklığını incelemek.
- En çok tercih edilen yapay zekâ araçlarını belirlemek.
- Yapay zekânın hangi amaçlarla kullanıldığını araştırmak.
- Kullanıcıların araç seçiminde önem verdiği özellikleri incelemek.
- Yapay zekâ teknolojilerine yönelik endişeleri değerlendirmek.
- Kullanım sıklığı, araç tercihleri ve kullanım amaçları arasındaki ilişkileri analiz etmek.
- Bulguları grafikler ve istatistiksel yöntemlerle yorumlamak.

---

## <u>3. ARAŞTIRMA SORULARI VE HİPOTEZLER</u>

### <u>3.1. Hipotez 1 — Kullanım Sıklığı ve Kullanım Amacı</u>

**Araştırma sorusu:** Yapay zekâ kullanım sıklığı ile kullanım amacı arasında ilişki var mıdır?

- **H₀:** Yapay zekâ kullanım sıklığı ile kullanım amacı arasında istatistiksel olarak anlamlı bir ilişki yoktur.
- **H₁:** Yapay zekâ kullanım sıklığı ile kullanım amacı arasında istatistiksel olarak anlamlı bir ilişki vardır.

**Planlanan analiz:** Çapraz tablo ve varsayımlar uygun olduğunda Ki-kare bağımsızlık testi.

### <u>3.2. Hipotez 2 — Araç Tercihi ve Kullanım Amacı</u>

**Araştırma sorusu:** Tercih edilen yapay zekâ araçları ile kullanım amacı arasında ilişki var mıdır?

- **H₀:** Araç tercihi ile kullanım amacı arasında istatistiksel olarak anlamlı bir ilişki yoktur.
- **H₁:** Araç tercihi ile kullanım amacı arasında istatistiksel olarak anlamlı bir ilişki vardır.

**Planlanan analiz:** Frekans analizi, çapraz tablo ve varsayımlar uygun olduğunda Ki-kare bağımsızlık testi.

### <u>3.3. Hipotez 3 — Kullanım Sıklığı ve Kullanıcı Endişeleri</u>

**Araştırma sorusu:** Yapay zekâ kullanım sıklığı ile kullanıcıların endişeleri arasında ilişki var mıdır?

- **H₀:** Kullanım sıklığı ile kullanıcı endişeleri arasında istatistiksel olarak anlamlı bir ilişki yoktur.
- **H₁:** Kullanım sıklığı ile kullanıcı endişeleri arasında istatistiksel olarak anlamlı bir ilişki vardır.

**Planlanan analiz:** Çapraz tablo, yüzde dağılımları ve varsayımlar uygun olduğunda Ki-kare bağımsızlık testi.

**Not:** İstatistiksel testlerin uygulanabilirliği, değişkenlerin yapısı ve test varsayımları incelendikten sonra kesinleştirilecektir.

---

## <u>4. KULLANILAN VERİ SETİ</u>

**Veri seti adı:** AI Tools and Technology Trends

**Kaynak:** Mendeley Data

**Bağlantı:** https://data.mendeley.com/datasets/wphjf9t7bv/1

**Yanıt sayısı:** 1.481

**Değişken sayısı:** 8

### <u>4.1. Veri Setindeki Değişkenler</u>

1. En sık kullanılan yapay zekâ araçları
2. Yapay zekâ araçlarının temel kullanım amacı
3. Yapay zekâ aracı seçiminde önem verilen özellikler
4. Önümüzdeki beş yılda etkili olması beklenen teknoloji trendleri
5. Takip edilmek istenen teknoloji trendleri
6. Yapay zekâ ve gelişen teknolojilere yönelik temel endişeler
7. Yeni yapay zekâ araçları hakkında bilgi edinilen kaynaklar
8. Yapay zekâ araçlarının kullanım sıklığı

### <u>4.2. Veri Kalitesi Kontrolleri</u>

Veri seti Google Sheets ortamına aktarılmış ve analiz için çalışma kopyası oluşturulmuştur.

Gerçekleştirilen kontroller:

- Tamamen boş sütun kaldırılmıştır.
- Sekiz değişken için eksik hücre kontrolü yapılmıştır.
- Kontrol sonucunda **0 eksik hücre** tespit edilmiştir.
- Potansiyel olarak tutarsız **86 yanıt** belirlenmiştir.

Bu 86 yanıtın:

- 50'sinde kullanım sıklığı **Never**,
- 36'sında kullanım sıklığı **I've tried them but stopped**

olarak belirtilmiştir.

Bu kayıtlar otomatik olarak silinmemiştir. Veri temizleme kararları, analiz üzerindeki etkileri değerlendirilerek belgelenecektir.

---

## <u>5. KULLANILAN VE PLANLANAN YÖNTEMLER</u>

### <u>5.1. Şu Ana Kadar Kullanılan Yöntemler</u>

- Google Sheets'e veri aktarımı
- Veri kopyası oluşturma
- Eksik hücre kontrolü
- Tutarsız yanıt kontrolü
- Pivot tablo oluşturma
- Frekans ve yüzde analizi
- Çubuk grafik ile veri görselleştirme

### <u>5.2. Planlanan Yöntemler</u>

- Diğer değişkenlerin frekans analizleri
- Çapraz tablolar
- Kategori bazlı karşılaştırmalar
- Çoklu seçim içeren yanıtların uygun şekilde ayrıştırılması
- Ki-kare bağımsızlık testi için varsayım kontrolleri
- Uygun istatistiksel testlerin uygulanması
- Bulguların akademik olarak yorumlanması

---

## <u>6. ETİK İLKELER VE VERİ GİZLİLİĞİ</u>

Bu çalışmada yeni katılımcı verisi toplanmamakta, yayımlanmış bir veri seti kullanılmaktadır.

Araştırma kapsamında:

- Veri kaynağı açıkça belirtilecektir.
- Veri setinin lisansı ve kullanım koşulları kontrol edilecektir.
- Kişisel veya tanımlayıcı bilgiler bulunması durumunda korunacaktır.
- Analiz sonuçları değiştirilmeden raporlanacaktır.
- Veri setinin sınırlılıkları açıklanacaktır.
- Araştırma sonuçları mevcut verinin desteklemediği çıkarımlara genişletilmeyecektir.

---

## <u>7. PROJE AŞAMALARI — SPRINT 1</u>

**Amaç:** Proje planlaması, veri seti seçimi ve ilk veri kontrolleri.

- [x] Proje konusunun belirlenmesi
- [x] GitHub deposunun oluşturulması
- [x] GitHub Projects Kanban panosunun hazırlanması
- [x] Hazır veri seti araştırmasının yapılması
- [x] AI Tools and Technology Trends veri setinin seçilmesi
- [x] Veri setinin Google Sheets'e aktarılması
- [x] Veri setindeki değişkenlerin incelenmesi
- [x] Araştırma hipotezlerinin oluşturulması
- [x] Eksik hücre kontrolünün yapılması
- [x] Potansiyel tutarsız yanıtların belirlenmesi
- [ ] Veri setinin lisans ve kullanım koşullarının doğrulanması
- [ ] Benzer akademik çalışmaların araştırılması

---

## <u>8. PROJE AŞAMALARI — SPRINT 2</u>

**Amaç:** Veri analizi, gereksinim analizi ve UML modelleme.

- [x] Kullanım sıklığı için pivot tablo oluşturulması
- [x] Kullanım sıklığı yüzdelerinin hesaplanması
- [x] İlk veri görselleştirmesinin hazırlanması
- [x] Gereksinim analizi belgesinin oluşturulması
- [x] İlk kullanım durumu diyagramı taslağının hazırlanması
- [ ] UML Use Case diyagramının standart gösterimle tamamlanması
- [ ] UML Activity diyagramının hazırlanması
- [ ] Class diyagramının proje kapsamına uygun olarak değerlendirilmesi
- [ ] Diğer frekans analizlerinin tamamlanması
- [ ] Çapraz tabloların oluşturulması
- [ ] Hipotezlerin test edilmesi
- [ ] Analiz sonuçlarının yorumlanması

---

## <u>9. PROJE AŞAMALARI — SPRINT 3</u>

**Amaç:** Raporlama, sunum ve proje değerlendirmesi.

- [ ] Bulguların akademik rapora aktarılması
- [ ] Araştırmanın sınırlılıklarının değerlendirilmesi
- [ ] LaTeX / Overleaf ile proje raporunun hazırlanması
- [ ] Kaynakçanın düzenlenmesi
- [ ] Proje sunumunun hazırlanması
- [ ] GitHub commit ve Kanban kayıtlarının gözden geçirilmesi
- [ ] Son kontrollerin yapılması

---

## <u>10. EKİP ÇALIŞMASI VE PROJE YÖNETİMİ</u>

Proje görevleri GitHub Projects üzerinden **Kanban yöntemiyle** takip edilmektedir.

Kanban panosunda:

- **To Do:** Yapılması planlanan görevler
- **In Progress:** Üzerinde çalışılan görevler
- **Done:** Tamamlanan görevler

bulunmaktadır.

Ekip üyeleri veri analizi, literatür araştırması, dokümantasyon, UML modelleme ve raporlama aşamalarında birlikte çalışacaktır.

**Ekip üyeleri ve görev dağılımı:** Gerçek görev paylaşımına göre güncellenecektir.

---

## <u>11. KULLANILAN VE PLANLANAN TEKNOLOJİLER</u>

| Araç | Kullanım amacı | Durum |
|---|---|---|
| Google Sheets | Veri hazırlama, pivot tablolar ve grafikler | Kullanılıyor |
| Mendeley Data | Araştırma veri setinin temin edilmesi | Kullanıldı |
| GitHub | Proje dosyalarının yönetimi | Kullanılıyor |
| GitHub Projects | Kanban ve görev takibi | Kullanılıyor |
| Git | Sürüm kontrolü | Kullanımının belgelenmesi planlanıyor |
| VS Code | Yerel dosya düzenleme ve geliştirme ortamı | Proje kullanımının belgelenmesi planlanıyor |
| LaTeX / Overleaf | Akademik rapor hazırlama | Planlanıyor |

---

## <u>12. PROJE DOKÜMANTASYONU</u>

Proje kapsamında aşağıdaki belgeler hazırlanmakta veya planlanmaktadır.

| Belge | Açıklama | Durum |
|---|---|---|
| README.md | Projenin genel tanıtımı | Mevcut |
| docs/gereksinim-analizi.md | Gereksinimler ve kullanım senaryoları | Hazırlandı |
| docs/use-case.md | Kullanım durumu modeli | İlk taslak |
| Activity diyagramı | Veri analizi iş akışı | Planlanıyor |
| Class diyagramı | Uygun bir yazılım tasarımı için sınıf modeli | Değerlendirilecek |

---

## <u>13. BEKLENEN ÇIKTILAR</u>

Proje sonunda aşağıdaki çıktıların elde edilmesi hedeflenmektedir:

- Analize hazırlanmış veri seti
- Veri kalitesi kontrol kayıtları
- Tanımlayıcı istatistik tabloları
- Kullanım alışkanlıklarını gösteren grafikler
- Hipotez testlerinin sonuçları
- Gereksinim analizi belgesi
- Proje kapsamına uygun UML diyagramları
- Akademik araştırma raporu
- Proje sunumu
- GitHub üzerinden takip edilebilir proje geçmişi

---

## <u>14. PROJENİN MEVCUT DURUMU</u>

Projenin veri seti seçimi ve ilk veri hazırlama aşamaları tamamlanmıştır.

Google Sheets üzerinde kullanım sıklığına ilişkin ilk pivot tablo ve grafik hazırlanmıştır.

Gereksinim analizi belgesi ve ilk kullanım durumu diyagramı taslağı oluşturulmuştur.

**Devam eden çalışmalar:** UML modelleme, diğer değişkenlerin analizi, hipotez testleri ve raporlama hazırlıkları.

---

**Araştırma Alanı:** Yapay Zekâ, Veri Analizi, Kullanıcı Davranışları ve Yazılım Mühendisliği Süreçleri.
