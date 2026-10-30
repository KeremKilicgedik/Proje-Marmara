# Kullanıcı ve veri hazırlama akışları

Sürüm 2.0 · Aşağıdaki Mermaid gösterimi bir faaliyet akışıdır.

## Kullanıcı akışı

```mermaid
flowchart TD
    A([Başlangıç]) --> B[Kaynak ve gizlilik açıklaması]
    B --> C[Referans paketini yükle ve doğrula]
    C --> D{Paket geçerli mi?}
    D -->|Hayır| E[Karşılaştırma hatasını göster]
    D -->|Evet| F[Kısa anketi doldur]
    F --> G{Yanıtlar geçerli mi?}
    G -->|Hayır| H[İlgili alanı açıklamayla işaretle]
    H --> F
    G -->|Evet| I[Yalnız bellekte kullanım özetini üret]
    I --> J[Sıklığa göre referans grubunu seç]
    J --> K{Geçerli n en az 30 mu?}
    K -->|Hayır| L[Yetersiz karşılaştırma verisini açıkla]
    K -->|Evet| M[n, payda ve yüzdeleri göster]
    L --> N[Genel önerileri ve sınırlılıkları göster]
    M --> N
    N --> O{Kullanıcı seçimi}
    O -->|Düzenle| F
    O -->|Yeniden başlat| P[Bellekteki yanıt ve sonucu temizle]
    P --> F
    O -->|Çık| Q([Bitiş])
```

Geri/ileri gezinme ve yenilemede yanıtların geri gelmemesi ayrıca test edilecektir. URL, depolama ve ağ üzerinden anket yanıtı taşınmaz.

## Referans hazırlama akışı

```mermaid
flowchart TD
    A[Kaynak sürümünü ve lisansı kaydet] --> B[Ham dosyayı kontrol et]
    B --> C[Kategori ve çoklu seçim eşlemesini doğrula]
    C --> D[Eksik ve çelişkili kayıt kararlarını belgele]
    D --> E[Araştırma analizlerini gerçekleştir]
    D --> F[Kimliksiz toplu referans tabloları oluştur]
    E --> G[Yöntem ve sınırlılıklarla raporla]
    F --> H[Hesaplamaları bağımsız sayımla kontrol et]
    H --> I[Sürüm bilgisiyle uygulama paketine ekle]
    G --> I
```
