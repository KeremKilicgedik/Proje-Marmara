# UML USE CASE (KULLANIM DURUMU) DİYAGRAMI

**Proje:** Yapay Zekâ Kullanım Alışkanlıkları, Tercihleri ve Kullanıcı Endişelerinin Veri Analizi  
**Belge Sürümü:** 1.1  
**Diyagram Türü:** UML Use Case

---

## <u>1. DİYAGRAMIN AMACI</u>

Bu diyagram, proje ekibinin veri analizi sürecinde gerçekleştirdiği temel işlemleri modellemek amacıyla hazırlanmıştır.

Proje kapsamında bağımsız bir yazılım uygulaması geliştirilmediği için diyagram, Google Sheets ve diğer proje araçlarıyla yürütülen analiz sürecini kavramsal olarak temsil etmektedir.

## <u>2. AKTÖR VE SİSTEM SINIRI</u>

**Aktör:** Araştırmacı (proje ekibi üyesi)

**Sistem sınırı:** Yapay Zekâ Veri Analizi Süreci

Araştırmacı, verilerin hazırlanmasından sonuçların raporlanmasına kadar olan işlemleri yürütür.

## <u>3. KULLANIM DURUMLARI</u>

| Kod | Kullanım Durumu | Açıklama | Durum |
|---|---|---|---|
| UC-01 | Veri setini içe aktar | Veriyi Google Sheets'e aktarır. | Tamamlandı |
| UC-02 | Veri kalitesini kontrol et | Eksik ve tutarsız yanıtları inceler. | İlk kontroller tamamlandı |
| UC-03 | Frekans analizi yap | Kategorilerin sayı ve yüzdelerini hesaplar. | Kullanım sıklığı için tamamlandı |
| UC-04 | Grafik oluştur | Analiz sonuçlarını görselleştirir. | İlk grafik tamamlandı |
| UC-05 | Hipotezleri test et | Değişkenler arasındaki ilişkileri değerlendirir. | Planlandı |
| UC-06 | Bulguları raporla | Sonuçları akademik raporda açıklar. | Planlandı |

## <u>4. UML GÖSTERİMİ</u>

Diyagram aşağıdaki UML gösterim kurallarına göre hazırlanmıştır:

- **Aktör:** Çöp adam sembolüyle gösterilir.
- **Kullanım durumları:** Oval şekillerle gösterilir.
- **Sistem sınırı:** Kullanım durumlarını çevreleyen dikdörtgendir.
- **İlişki:** Aktör ile kullanım durumları arasındaki düz çizgidir.

Diyagramda araştırmacı aktörü, altı kullanım durumuyla ilişkilendirilmiştir.

**Diyagram görseli:** Bu belgeye ayrıca UML diyagramı görseli eklenecektir.

## <u>5. GEREKSİNİMLERLE İLİŞKİSİ</u>

Kullanım durumları, `docs/gereksinim-analizi.md` dosyasında belirtilen fonksiyonel gereksinimlere dayanmaktadır.

- **UC-01:** Veri aktarımı ve çalışma kopyası oluşturma
- **UC-02:** Eksik ve tutarsız veri kontrolleri
- **UC-03:** Frekans ve yüzde hesaplama
- **UC-04:** Grafik oluşturma
- **UC-05:** Çapraz tablolar ve hipotez testleri
- **UC-06:** Akademik raporlama

## <u>6. DİYAGRAMIN SINIRLILIKLARI</u>

Bu diyagram, tamamlanmış bir yazılım uygulamasının kullanıcı arayüzünü veya otomatik işlevlerini temsil etmemektedir.

Mevcut projenin veri analizi faaliyetlerini açıklayan kavramsal bir modeldir.

---

**Belge Sürümü:** 1.1  
**Durum:** Diyagramın görselinin depoya eklenmesi bekleniyor.
