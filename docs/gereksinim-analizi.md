# GEREKSİNİM ANALİZİ BELGESİ

**Proje:** Yapay Zekâ Kullanım Alışkanlıkları, Tercihleri ve Kullanıcı Endişelerinin Veri Analizi  
**Üniversite:** Marmara Üniversitesi  
**Ders:** Yazılım Mühendisliği Temelleri  
**Belge Sürümü:** 1.1  
**Durum:** Veri analizi ve dokümantasyon çalışmaları devam ediyor.

---

## <u>1. PROJENİN TANIMI</u>

Bu proje, yapay zekâ araçlarının kullanım sıklığını, kullanım amaçlarını, araç tercihlerini ve kullanıcıların teknolojilere yönelik endişelerini inceleyen bir veri analizi çalışmasıdır.

Araştırmada Mendeley Data platformunda yayımlanan **AI Tools and Technology Trends** veri seti kullanılmaktadır.

Proje, bağımsız bir web veya mobil uygulama geliştirmek yerine mevcut veri setinin Google Sheets üzerinden incelenmesi, analiz edilmesi ve raporlanması üzerine kuruludur.

GitHub ve GitHub Projects araçları proje dokümantasyonu, sürüm takibi ve görev yönetimi için kullanılmaktadır.

---

## <u>2. PROBLEM TANIMI</u>

Yapay zekâ araçları farklı sıklıklarda ve farklı amaçlarla kullanılmaktadır. Kullanıcıların araç tercihleri ve teknolojilere yönelik endişeleri de değişiklik gösterebilmektedir.

Bu çalışmanın temel problemi, bu değişkenler arasında istatistiksel olarak anlamlı ilişkiler bulunup bulunmadığını araştırmaktır.

**Temel araştırma sorusu:**

Yapay zekâ kullanım sıklığı, kullanım amaçları, araç tercihleri ve kullanıcı endişeleri arasında anlamlı ilişkiler var mıdır?

---

## <u>3. PROJENİN KAPSAMI</u>

### <u>3.1. Kapsam Dahilindeki İşlemler</u>

- Hazır veri setinin temin edilmesi
- Verinin Google Sheets ortamına aktarılması
- Orijinal verinin korunması
- Eksik ve tutarsız yanıtların kontrol edilmesi
- Frekans ve yüzde analizleri
- Pivot ve çapraz tablolar
- Veri görselleştirme
- İstatistiksel hipotez testleri
- Bulguların raporlanması
- GitHub üzerinden proje yönetimi

### <u>3.2. Kapsam Dışındaki İşlemler</u>

- Yeni anket yanıtlarının toplanması
- Yapay zekâ modeli eğitilmesi
- Tam kapsamlı web veya mobil uygulama geliştirilmesi
- Veri setinde bulunmayan demografik değişkenlerin analizi

---

## <u>4. PAYDAŞLAR VE KULLANICILAR</u>

| Paydaş | Görevi |
|---|---|
| Proje ekibi | Verileri analiz etmek ve raporlamak |
| Öğretim elemanı | Süreci değerlendirmek ve geri bildirim sağlamak |
| Araştırma sonuçlarını inceleyenler | Bulguları ve grafiklerini değerlendirmek |
| Veri seti sağlayıcısı | Kullanılan araştırma verisinin kaynağını sağlamak |

**Temel aktör:** Araştırmacı (proje ekibi üyesi).

---

## <u>5. FONKSİYONEL GEREKSİNİMLER</u>

Fonksiyonel gereksinimler, analiz iş akışında gerçekleştirilmesi gereken işlemleri tanımlar.

| Kod | Gereksinim | Mevcut Durum |
|---|---|---|
| FR-01 | Veri setini Google Sheets'e aktarmak | Tamamlandı |
| FR-02 | Orijinal verinin çalışma kopyasını oluşturmak | Tamamlandı |
| FR-03 | Eksik hücreleri kontrol etmek | Tamamlandı |
| FR-04 | Potansiyel tutarsız yanıtları belirlemek | Tamamlandı |
| FR-05 | Kullanım sıklığının frekans dağılımını hesaplamak | Tamamlandı |
| FR-06 | Kullanım sıklığı için grafik oluşturmak | Tamamlandı |
| FR-07 | Yapay zekâ aracı tercihlerinin dağılımını incelemek | Planlandı |
| FR-08 | Kullanım amaçlarını analiz etmek | Planlandı |
| FR-09 | Kullanıcı endişelerini analiz etmek | Planlandı |
| FR-10 | Değişkenler arasında çapraz tablolar oluşturmak | Planlandı |
| FR-11 | Hipotezleri uygun istatistiksel testlerle değerlendirmek | Planlandı |
| FR-12 | Bulguları akademik raporda sunmak | Planlandı |

**Not:** Buradaki gereksinimler, sıfırdan geliştirilen bir yazılımın özellikleri değil, veri analizi iş akışının gerçekleştirmesi gereken işlevlerdir.

---

## <u>6. FONKSİYONEL OLMAYAN GEREKSİNİMLER</u>

| Kod | Gereksinim | Nasıl Sağlanacak? |
|---|---|---|
| NFR-01 | Veri bütünlüğü | Orijinal veri ayrı tutulacak. |
| NFR-02 | Hesaplama doğruluğu | Toplamlar ve yüzdeler kontrol edilecek. |
| NFR-03 | Tekrarlanabilirlik | Formüller ve analiz adımları belgelenecek. |
| NFR-04 | Anlaşılabilirlik | Grafiklerde başlık, eksen ve birimler açık olacak. |
| NFR-05 | İzlenebilirlik | Belgeler GitHub commit geçmişiyle takip edilecek. |
| NFR-06 | Ekip koordinasyonu | Görevler Kanban panosunda yönetilecek. |
| NFR-07 | Akademik uygunluk | Kaynaklar ve yöntemler belirtilecek. |
| NFR-08 | Veri güvenliği | Erişim izinleri ve veri kullanım koşulları kontrol edilecek. |

---

## <u>7. VERİ GEREKSİNİMLERİ VE VERİ KALİTESİ</u>

### <u>7.1. Veri Seti Bilgileri</u>

**Adı:** AI Tools and Technology Trends  
**Kaynağı:** Mendeley Data  
**Bağlantı:** https://data.mendeley.com/datasets/wphjf9t7bv/1

- **Yanıt sayısı:** 1.481
- **Araştırma değişkeni:** 8

Değişkenler; yapay zekâ araçları, kullanım amaçları, seçim kriterleri, teknoloji trendleri, kullanıcı endişeleri, bilgi kaynakları ve kullanım sıklığını kapsamaktadır.

### <u>7.2. Gerçekleştirilen Veri Kontrolleri</u>

Veri seti Google Sheets'e aktarılmış ve `Temiz Veri` adlı çalışma sayfası oluşturulmuştur.

Gerçekleştirilen işlemler:

1. Tamamen boş olan sütun kaldırıldı.
2. Sekiz değişkende eksik hücre kontrolü yapıldı.
3. Eksik hücre sayısı **0** bulundu.
4. Araç kullanmadığını belirten ancak kullanım amacı yanıtı bulunan **86 kayıt** belirlendi.
5. Bu kayıtlar inceleme amacıyla korundu.

Bu 86 kaydın 50'sinde kullanım sıklığı *Never*, 36'sında *I've tried them but stopped* olarak belirtilmiştir.

**Veri temizleme yaklaşımı:** Tutarsız olduğu düşünülen kayıtlar, gerekçelendirilmiş bir karar verilmeden silinmeyecektir.

---

## <u>8. ARAŞTIRMA HİPOTEZLERİ</u>

### <u>8.1. Hipotez 1</u>

**H₀:** Yapay zekâ kullanım sıklığı ile kullanım amacı arasında anlamlı ilişki yoktur.

**H₁:** Yapay zekâ kullanım sıklığı ile kullanım amacı arasında anlamlı ilişki vardır.

### <u>8.2. Hipotez 2</u>

**H₀:** Tercih edilen yapay zekâ aracı ile kullanım amacı arasında anlamlı ilişki yoktur.

**H₁:** Tercih edilen yapay zekâ aracı ile kullanım amacı arasında anlamlı ilişki vardır.

### <u>8.3. Hipotez 3</u>

**H₀:** Yapay zekâ kullanım sıklığı ile kullanıcı endişeleri arasında anlamlı ilişki yoktur.

**H₁:** Yapay zekâ kullanım sıklığı ile kullanıcı endişeleri arasında anlamlı ilişki vardır.

**Planlanan yöntem:** Kategorik değişkenler için çapraz tablolar ve varsayımlar uygun olduğunda Ki-kare bağımsızlık testi.

---

## <u>9. KULLANIM SENARYOLARI</u>

### <u>9.1. UC-01 — Veri Setini İçe Aktarma</u>

**Aktör:** Araştırmacı  
**Durum:** Tamamlandı

1. Araştırmacı veri setini temin eder.
2. Google Sheets'e aktarır.
3. Sütunları kontrol eder.
4. Çalışma kopyasını oluşturur.

**Çıktı:** Analize hazır çalışma sayfası.

### <u>9.2. UC-02 — Veri Kalitesini Kontrol Etme</u>

**Aktör:** Araştırmacı  
**Durum:** İlk kontroller tamamlandı

1. Eksik hücreler kontrol edilir.
2. Tutarsız yanıtlar belirlenir.
3. Kayıtlar değerlendirilir.
4. Veri temizleme kararları belgelenir.

**Çıktı:** Veri kalitesi değerlendirmesi.

### <u>9.3. UC-03 — Frekans Analizi ve Grafik Oluşturma</u>

**Aktör:** Araştırmacı  
**Durum:** Kullanım sıklığı için tamamlandı

1. Kullanım sıklığı değişkeni seçilir.
2. Pivot tablo oluşturulur.
3. Frekans ve yüzde değerleri hesaplanır.
4. Çubuk grafik hazırlanır.

**Çıktı:** Kullanım sıklığı dağılım tablosu ve grafiği.

### <u>9.4. UC-04 — Hipotez Testi</u>

**Aktör:** Araştırmacı  
**Durum:** Planlandı

1. İlgili iki değişken seçilir.
2. Çapraz tablo hazırlanır.
3. İstatistiksel testin varsayımları kontrol edilir.
4. Uygun test uygulanır.
5. Sonuçlar yorumlanır.

**Çıktı:** Hipotezlere ilişkin istatistiksel değerlendirme.

### <u>9.5. UC-05 — Bulguları Raporlama</u>

**Aktör:** Araştırmacı  
**Durum:** Planlandı

1. Tablolar ve grafikler derlenir.
2. Bulgular açıklanır.
3. Sınırlılıklar değerlendirilir.
4. Kaynakça hazırlanır.
5. Akademik rapor tamamlanır.

**Çıktı:** Araştırma raporu.

---

## <u>10. KABUL KRİTERLERİ</u>

Projenin hedeflerine ulaştığını değerlendirmek için aşağıdaki kriterler kullanılacaktır:

- [x] Veri seti seçildi.
- [x] Veri seti Google Sheets'e aktarıldı.
- [x] Eksik hücre kontrolü yapıldı.
- [x] Potansiyel tutarsız yanıtlar belirlendi.
- [x] Kullanım sıklığı için pivot tablo oluşturuldu.
- [x] Kullanım sıklığı grafiği hazırlandı.
- [ ] Diğer değişkenlerin dağılımları incelendi.
- [ ] Hipotezler istatistiksel yöntemlerle değerlendirildi.
- [ ] UML modelleme belgeleri tamamlandı.
- [ ] Akademik rapor hazırlandı.
- [ ] Proje sunumu tamamlandı.

---

## <u>11. RİSKLER VE SINIRLILIKLAR</u>

| Risk | Yaklaşım |
|---|---|
| Tutarsız yanıtlar | İncelenecek ve analiz kararları belgelenecek. |
| Az sayıda gözlem içeren kategoriler | İstatistiksel test varsayımları kontrol edilecek. |
| Hazır veri setinin sınırlı değişkenleri | Yalnızca mevcut değişkenler analiz edilecek. |
| Analiz hataları | Formüller ve toplamlar doğrulanacak. |
| Görev koordinasyonu sorunları | GitHub Projects kullanılacak. |
| Raporlama gecikmeleri | Sprint görevleri takip edilecek. |

---

## <u>12. PROJE DOKÜMANTASYONU</u>

Proje kapsamında şu belgeler kullanılmaktadır:

- `README.md` — Proje tanıtımı ve ilerleme planı
- `docs/gereksinim-analizi.md` — Gereksinimler ve kullanım senaryoları
- `docs/use-case.md` — Kullanım durumu modeli

Planlanan ek belgeler:

- UML Activity diyagramı
- Projeye uygunluğu değerlendirilmiş Class diyagramı
- Veri analizi sonuçları
- Akademik araştırma raporu

---

## <u>13. SONRAKİ ÇALIŞMALAR</u>

1. UML Use Case diyagramının standart gösterimle tamamlanması
2. UML Activity diyagramının hazırlanması
3. Class diyagramı ihtiyacının değerlendirilmesi
4. Diğer veri analizlerinin gerçekleştirilmesi
5. Hipotez testlerinin yapılması
6. Akademik raporun hazırlanması
7. Proje sunumunun tamamlanması

---

**Belge Sürümü:** 1.1  
**Belge Türü:** Gereksinim Analizi  
**Proje Durumu:** Devam ediyor.
