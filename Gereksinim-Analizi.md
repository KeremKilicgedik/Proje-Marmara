# GEREKSİNİM ANALİZİ BELGESİ

**PROJE:** Yapay Zekâ Kullanım Alışkanlıkları, Tercihleri ve Kullanıcı Endişelerinin Veri Analizi  
**ÜNİVERSİTE:** Marmara Üniversitesi  
**DERS:** Yazılım Mühendisliği Temelleri  
**BELGE SÜRÜMÜ:** 1.0

---

## <u>1. PROJENİN TANIMI</u>

Bu proje, bireylerin yapay zekâ araçlarını kullanım sıklıklarını, tercih ettikleri araçları, kullanım amaçlarını ve yapay zekâ teknolojilerine yönelik endişelerini inceleyen akademik bir veri analizi çalışmasıdır.

Araştırmada Mendeley Data platformunda yayımlanmış **AI Tools and Technology Trends** veri seti kullanılmaktadır.

Çalışmanın amacı, mevcut veriler üzerinden istatistiksel analizler gerçekleştirmek ve yapay zekâ kullanım davranışları arasındaki olası ilişkileri değerlendirmektir.

---

## <u>2. PROBLEM TANIMI</u>

Yapay zekâ araçlarının yaygınlaşmasıyla birlikte kullanıcıların bu araçları hangi sıklıkta, hangi amaçlarla ve hangi tercihler doğrultusunda kullandıklarının incelenmesi önem kazanmıştır.

Bununla birlikte kullanıcıların yapay zekâ teknolojilerine yönelik endişeleri de farklılık gösterebilmektedir.

**Temel araştırma problemi:**

Yapay zekâ kullanım sıklığı, araç tercihleri, kullanım amaçları ve kullanıcı endişeleri arasında istatistiksel olarak anlamlı ilişkiler bulunmakta mıdır?

---

## <u>3. PROJENİN KAPSAMI</u>

### <u>3.1. Proje Kapsamındaki İşlemler</u>

- Hazır veri setinin incelenmesi
- Veri kalitesi kontrollerinin yapılması
- Verilerin analiz için düzenlenmesi
- Frekans ve yüzde dağılımlarının hesaplanması
- Pivot ve çapraz tabloların hazırlanması
- Grafiklerin oluşturulması
- Araştırma hipotezlerinin uygun yöntemlerle test edilmesi
- Bulguların raporlanması

### <u>3.2. Kapsam Dışı İşlemler</u>

- Yeni katılımcılardan anket verisi toplanması
- Yapay zekâ modeli geliştirilmesi veya eğitilmesi
- Katılımcıların yaş ve cinsiyetlerine göre analiz yapılması
- Veri setinde bulunmayan güven düzeyi değişkeninin analiz edilmesi
- Tam kapsamlı bir web veya mobil uygulama geliştirilmesi

---

## <u>4. PAYDAŞLAR VE KULLANICILAR</u>

| Paydaş | Rolü |
|---|---|
| Proje ekibi | Veri hazırlama, analiz, dokümantasyon ve sunum |
| Öğretim elemanı | Proje sürecini değerlendirme ve geri bildirim |
| Araştırma sonuçlarını inceleyenler | Grafik ve raporları değerlendirme |
| Veri seti sağlayıcısı | Araştırmada kullanılan mevcut verinin kaynağı |

Projenin temel kullanıcıları, veri analizini gerçekleştiren ekip üyeleridir.

---

## <u>5. FONKSİYONEL GEREKSİNİMLER</u>

Fonksiyonel gereksinimler, proje kapsamında gerçekleştirilecek işlemleri tanımlar.

| Kod | Gereksinim | Öncelik |
|---|---|---|
| FR-01 | CSV veya XLSX biçimindeki veri seti içe aktarılabilmelidir. | Yüksek |
| FR-02 | Eksik hücreler tespit edilebilmelidir. | Yüksek |
| FR-03 | Tutarsız yanıtlar belirlenebilmelidir. | Yüksek |
| FR-04 | Kullanım sıklığına göre frekans ve yüzde hesaplanabilmelidir. | Yüksek |
| FR-05 | Yapay zekâ araçlarının tercih edilme dağılımı hesaplanabilmelidir. | Yüksek |
| FR-06 | Kullanım amaçları analiz edilebilmelidir. | Yüksek |
| FR-07 | Kullanıcı endişeleri sınıflandırılarak incelenebilmelidir. | Yüksek |
| FR-08 | Değişkenler arasında çapraz tablolar oluşturulabilmelidir. | Yüksek |
| FR-09 | Uygun koşullarda istatistiksel hipotez testleri uygulanabilmelidir. | Yüksek |
| FR-10 | Analiz sonuçları grafiklerle görselleştirilebilmelidir. | Yüksek |
| FR-11 | Tablolar ve grafikler raporlama için dışa aktarılabilmelidir. | Orta |
| FR-12 | Proje dosyaları GitHub üzerinden sürüm kontrollü olarak yönetilebilmelidir. | Yüksek |

Bu gereksinimler, ayrı bir yazılım uygulamasından ziyade Google Sheets ve proje araçlarıyla yürütülen analiz iş akışına yöneliktir.

---

## <u>6. FONKSİYONEL OLMAYAN GEREKSİNİMLER</u>

Fonksiyonel olmayan gereksinimler, gerçekleştirilen işlemlerin kalite özelliklerini tanımlar.

| Kod | Gereksinim | Açıklama |
|---|---|---|
| NFR-01 | Veri bütünlüğü | Orijinal veri seti korunmalıdır. |
| NFR-02 | Doğruluk | Hesaplamalar kontrol edilebilir olmalıdır. |
| NFR-03 | Tekrarlanabilirlik | Analiz adımları belgelenmelidir. |
| NFR-04 | Kullanılabilirlik | Tablolar ve grafikler anlaşılır olmalıdır. |
| NFR-05 | İzlenebilirlik | Dosya değişiklikleri GitHub üzerinden takip edilebilmelidir. |
| NFR-06 | Güvenlik | Proje dosyalarına erişim yetkileri kontrol edilmelidir. |
| NFR-07 | Bakım kolaylığı | Analiz ve dokümantasyon dosyaları düzenli tutulmalıdır. |
| NFR-08 | Akademik uygunluk | Kaynaklar, yöntemler ve sınırlılıklar açıkça belirtilmelidir. |

---

## <u>7. VERİ GEREKSİNİMLERİ</u>

Araştırmada kullanılan veri setinde **1.481 yanıt ve sekiz araştırma değişkeni** bulunmaktadır.

| Değişken | Açıklama |
|---|---|
| Yapay zekâ aracı | En sık kullanılan yapay zekâ aracı |
| Kullanım amacı | Yapay zekâdan yararlanma amacı |
| Seçim kriteri | Araç tercihinde önem verilen özellik |
| Etkili teknoloji trendi | Gelecekte etkili olması beklenen teknoloji |
| İlgi duyulan trend | Takip edilen teknoloji alanı |
| Kullanıcı endişesi | Yapay zekâya yönelik temel endişe |
| Bilgi kaynağı | Yeni teknolojilerin öğrenildiği kaynak |
| Kullanım sıklığı | Yapay zekâ araçlarının kullanım sıklığı |

**Veri kaynağı:** https://data.mendeley.com/datasets/wphjf9t7bv/1

---

## <u>8. ARAŞTIRMA HİPOTEZLERİ</u>

### <u>8.1. Hipotez 1 — Kullanım Sıklığı ve Kullanım Amacı</u>

**H₀:** Yapay zekâ kullanım sıklığı ile kullanım amacı arasında istatistiksel olarak anlamlı bir ilişki yoktur.

**H₁:** Yapay zekâ kullanım sıklığı ile kullanım amacı arasında istatistiksel olarak anlamlı bir ilişki vardır.

### <u>8.2. Hipotez 2 — Araç Tercihi ve Kullanım Amacı</u>

**H₀:** Tercih edilen yapay zekâ aracı ile kullanım amacı arasında istatistiksel olarak anlamlı bir ilişki yoktur.

**H₁:** Tercih edilen yapay zekâ aracı ile kullanım amacı arasında istatistiksel olarak anlamlı bir ilişki vardır.

### <u>8.3. Hipotez 3 — Kullanım Sıklığı ve Kullanıcı Endişeleri</u>

**H₀:** Yapay zekâ kullanım sıklığı ile kullanıcıların endişeleri arasında istatistiksel olarak anlamlı bir ilişki yoktur.

**H₁:** Yapay zekâ kullanım sıklığı ile kullanıcıların endişeleri arasında istatistiksel olarak anlamlı bir ilişki vardır.

**Planlanan yöntem:** Varsayımlar sağlandığında Ki-kare bağımsızlık testi.

---

## <u>9. TEMEL İŞ AKIŞI</u>

1. Veri setinin temin edilmesi
2. Google Sheets ortamına aktarılması
3. Orijinal verinin korunması
4. Eksik ve tutarsız kayıtların incelenmesi
5. Veri temizleme kararlarının belgelenmesi
6. Frekans ve yüzde analizlerinin yapılması
7. Grafiklerin oluşturulması
8. Çapraz tabloların hazırlanması
9. Hipotez testlerinin uygulanması
10. Bulguların raporlanması

---

## <u>10. KULLANIM SENARYOLARI</u>

### <u>10.1. UC-01 — Veri Setini İçe Aktarma</u>

**Aktör:** Araştırmacı

**Ön koşul:** Veri dosyasının mevcut olması.

**Temel akış:**
1. Araştırmacı Google Sheets'i açar.
2. Veri dosyasını içe aktarır.
3. Sütunların doğru aktarıldığını kontrol eder.
4. Orijinal verinin bir çalışma kopyasını oluşturur.

**Sonuç:** Veri seti analiz için erişilebilir hâle gelir.

### <u>10.2. UC-02 — Veri Kalitesini Kontrol Etme</u>

**Aktör:** Araştırmacı

**Temel akış:**
1. Eksik hücreleri kontrol eder.
2. Tutarsız cevapları belirler.
3. İncelenecek kayıtları işaretler.
4. Veri temizleme kararlarını belgelendirir.

**Sonuç:** Analiz için kullanılacak verilerin durumu belirlenir.

### <u>10.3. UC-03 — Kullanım Sıklığını Analiz Etme</u>

**Aktör:** Araştırmacı

**Temel akış:**
1. Kullanım sıklığı değişkenini seçer.
2. Pivot tablo oluşturur.
3. Kategori sayılarını hesaplar.
4. Yüzde dağılımını belirler.
5. Sonuçları grafikle gösterir.

**Sonuç:** Kullanım sıklığı dağılımı elde edilir.

### <u>10.4. UC-04 — Hipotezleri Test Etme</u>

**Aktör:** Araştırmacı

**Temel akış:**
1. İlgili değişkenleri seçer.
2. Çapraz tablo oluşturur.
3. Test varsayımlarını değerlendirir.
4. Uygun istatistiksel testi uygular.
5. Sonuçları yorumlar.

**Sonuç:** Hipotezlere ilişkin istatistiksel bulgular elde edilir.

---

## <u>11. MEVCUT ÇALIŞMALAR</u>

Şu ana kadar:

- Proje konusu belirlenmiştir.
- Hazır veri seti seçilmiştir.
- GitHub deposu ve Kanban panosu oluşturulmuştur.
- README dosyası güncellenmiştir.
- Veri seti Google Sheets'e aktarılmıştır.
- Orijinal verinin çalışma kopyası hazırlanmıştır.
- Tamamen boş olan sütun kaldırılmıştır.
- Eksik hücre kontrolü gerçekleştirilmiştir.
- Potansiyel tutarsız yanıtlar belirlenmiştir.
- Kullanım sıklığına ilişkin pivot tablo ve grafik hazırlanmıştır.

### <u>11.1. Ön Veri Kalitesi Bulguları</u>

| Kontrol | Sonuç |
|---|---:|
| Toplam yanıt | 1.481 |
| Analiz değişkeni | 8 |
| Eksik hücre | 0 |
| Potansiyel tutarsız kayıt | 86 |
| Hiç kullanmayanlar | 50 |
| Kullanmayı deneyip bırakanlar | 36 |

Bu 86 kayıt doğrudan silinmemiştir. Veri temizleme kararları analiz öncesinde belgelenecektir.

---

## <u>12. KABUL KRİTERLERİ</u>

- Veri seti kaynağı belgelendirilmiş olmalıdır.
- Veri temizleme işlemleri izlenebilir olmalıdır.
- Kullanım sıklığı ve araç tercihleri için dağılım tabloları oluşturulmalıdır.
- En az üç araştırma hipotezi değerlendirilmelidir.
- Grafikler anlaşılır ve doğru etiketlenmiş olmalıdır.
- Analiz sonuçları akademik raporda açıklanmalıdır.
- Proje dosyaları GitHub deposunda düzenli tutulmalıdır.
- Tamamlanan ve planlanan çalışmalar açıkça ayrılmalıdır.

---

## <u>13. RİSKLER VE SINIRLILIKLAR</u>

| Risk veya sınırlılık | Planlanan yaklaşım |
|---|---|
| Tutarsız anket yanıtları | Kayıtlar incelenecek, kararlar belgelenecek. |
| Bazı kategorilerde az yanıt bulunması | Test varsayımları kontrol edilecek. |
| Hazır veri setinin sınırlı değişken içermesi | Araştırma soruları mevcut değişkenlerle sınırlandırılacak. |
| Sonuçların genellenebilirliği | Örneklemin özellikleri ve sınırlılıkları belirtilecek. |
| Ekip içi görev koordinasyonu | GitHub Projects ve Issues kullanılacak. |
| Dosya değişikliklerinin karışması | Git sürüm kontrolü kullanılacak. |

---

## <u>14. PLANLANAN SONRAKİ ÇALIŞMALAR</u>

- [ ] GitHub Issues görevlerinin oluşturulması
- [ ] UML Use Case diyagramının hazırlanması
- [ ] UML Activity diyagramının hazırlanması
- [ ] Önerilen yazılım mimarisi için Class diyagramının tasarlanması
- [ ] Diğer tanımlayıcı analizlerin tamamlanması
- [ ] Hipotez testlerinin gerçekleştirilmesi
- [ ] Akademik raporun hazırlanması
- [ ] Ara sunumun oluşturulması

---

**BELGE SÜRÜMÜ:** 1.0  
**BELGE TÜRÜ:** Yazılım Mühendisliği Gereksinim Analizi  
**PROJE DURUMU:** Geliştirme ve veri analizi süreci devam ediyor.
