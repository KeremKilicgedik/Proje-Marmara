# UML ACTIVITY (FAALİYET) DİYAGRAMI

**Proje:** Yapay Zekâ Kullanım Alışkanlıkları, Tercihleri ve Kullanıcı Endişelerinin Veri Analizi

**Belge Sürümü:** 1.0

---

## <u>1. DİYAGRAMIN AMACI</u>

Bu diyagram, veri setinin temin edilmesinden akademik raporun hazırlanmasına kadar olan iş akışını göstermektedir.

İşlemlerin sırası, veri kalitesi kontrolü ve istatistiksel test varsayımlarına ilişkin karar noktaları modellenmiştir.

## <u>2. FAALİYET DİYAGRAMI</u>

```mermaid
flowchart TD
    A([Başlangıç]) --> B[Veri setini temin et]
    B --> C[Google Sheets'e aktar]
    C --> D[Çalışma kopyası oluştur]
    D --> E[Veri kalitesini kontrol et]
    E --> F{Eksik veya tutarsız veri var mı?}
    F -->|Evet| G[Kayıtları incele ve kararları belgele]
    F -->|Hayır| H[Veri analizi yap]
    G --> H
    H --> I[Pivot ve çapraz tablolar oluştur]
    I --> J[Grafikleri hazırla]
    J --> K{Test varsayımları uygun mu?}
    K -->|Evet| L[Ki-kare bağımsızlık testi uygula]
    K -->|Hayır| M[Uygun alternatif yöntemi değerlendir]
    L --> N[Bulguları yorumla]
    M --> N
    N --> O[Akademik raporu hazırla]
    O --> P([Bitiş])
```

## <u>3. KARAR NOKTALARI</u>

**Karar 1 — Veri kalitesi:** Eksik veya tutarsız yanıtlar varsa kayıtlar incelenir ve veri temizleme kararları belgelenir.

**Karar 2 — İstatistiksel test:** Ki-kare bağımsızlık testinin varsayımları kontrol edilir. Varsayımlar uygun değilse alternatif yöntemler değerlendirilir.

## <u>4. MEVCUT DURUM</u>

Veri aktarımı, ilk veri kalitesi kontrolleri ve kullanım sıklığına ilişkin ilk analiz tamamlanmıştır.

Diğer analizler, hipotez testleri ve akademik raporlama planlanmaktadır.

---

**Belge Türü:** UML Activity  
**Durum:** İlk taslak
