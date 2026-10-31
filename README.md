# Kullanım Atlası — Proje Marmara

> **31 Ekim 2026: Gizlilik temizliği genişletildi.** Sonuçtan sonra ham seçimler silinir. Ekran/sekme geçişi, bağlantı açma ve hata durumları sonuçları da temizler. 22 otomatik test geçti. Bu kontrol, tüm tarayıcılar için hukuki veya teknik bir güvence değildir.

**Marmara Üniversitesi · Yazılım Mühendisliği Temelleri**

Kullanıcı kısa bir anket doldurur. Uygulama yanıtlarını Mendeley anketinde aynı sıklıkta AI kullandığını belirten katılımcılarla karşılaştırır. Kullanım özeti, gerçek kişi sayıları, oranlar ve ayrı bir genel öneri gösterir. Yanıtları kaydetmez.

**Pazartesi hedefimiz:** Bitmiş ürün teslimi değil; 12–15 dakika ve soru-cevapta araştırma, tasarım, Git/GitHub, Kanban ve çalışan başlangıç prototipini göstermek. Hedef oturum 2 Kasım 2026 Pazartesi. Dönem sonu geliştirmeleri ayrıca takip edilir.

## Uygulamayı açma

**En kolay demo:** demo.html dosyasını çift tıklayın. Gerçek toplu veri ve kod tek dosyada bulunur; sunucu gerekmez. Geliştirme kaynakları src/ ve assets/ altında tutulur.

**Modüler geliştirme:** Python 3 ile proje klasöründe:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Tarayıcıda http://127.0.0.1:8000 adresini açın. Sunucuyu Ctrl+C ile durdurun. `index.html` dosyasını çift tıklamayın; JavaScript modülleri yerel HTTP sunucusu gerektirir. Sunucu anket yanıtı almaz; yalnız statik dosya sunar.

Uygulama yalnız HTML, CSS ve JavaScript kullanır. Node.js yalnız testler için gereklidir:

```bash
node --test tests/engine.test.js tests/privacy.test.js tests/reset.test.js
```

## Ekip ve gerçek sorumluluklar

| Üye | Sorumluluk |
|---|---|
| Kerem | Proje koordinasyonu, veri analizi ve GitHub takibi |
| Seyfettin | Uygulama geliştirme ve pazartesi sunumu |
| Suhayb | Umut ile proje tanıtım slaytları |
| Umut | Suhayb ile proje tanıtım slaytları |

Bu başlangıç kodu ve belge düzeni Codex desteğiyle hazırlanmıştır. Seyfettin'in görevi kodu anlayarak incelemek, geliştirmek ve kendi yaptığı değişiklikleri gerçek commitlerle kaydetmektir. Katkı geçmişi geriye dönük olarak uydurulmaz.

## Ne çalışıyor?

- Gerçek veri seçeneklerine bağlı kısa anket; kullanmayanlar için daha kısa akış.
- Aynı kullanım sıklığına göre kişi tabanlı karşılaştırma ve düzenlenebilir yanıtlar.
- Kaynak ve paydası açık sonuç ekranı; veri yetersizse yüzde göstermeme kontrolü.
- Üç araştırma hipotezi, gerçek sayımlar ve duyarlılık analizi.
- Tarayıcı belleğinde işleme; yanıtlar ağa, URL'ye veya kalıcı depolamaya yazılmaz.
- On hesaplama ve kaynak kodu gizlilik testi; ayrıca üç istatistik fonksiyonu kontrolü. Gerçek tarayıcıdaki görsel ve gizlilik kontrollerinin durumu sunum rehberinde yazılıdır.

## Veri ve bilimsel sınırlar

Kaynak: [AI Tools and Technology Trends — Abhijeet Kumar, Mendeley Data v1](https://data.mendeley.com/datasets/wphjf9t7bv/1), DOI: 10.17632/wphjf9t7bv.1, **CC BY 4.0**.

Yüklenen CSV'de **1.481 yanıt, 8 dolu soru sütunu ve 1 tamamen boş sütun** doğrulandı. Sekiz soru alanında boş yanıt yoktur. Tarayıcıya ham katılımcı satırları yerine kaynak atfı ve Türkçe eşlemeler içeren toplu sayımlar verilir. CSV'nin SHA-256 özeti veri paketine kaydedilmiştir.

Kullanım profili kişilik veya başarı testi değildir; yalnız kişinin yanıtlarının özetidir. Karşılaştırma örneklemle sınırlıdır; genelleme ve neden-sonuç iddiası yoktur. Öneriler elle yazılmış genel rehberliktir. Araştırma analizleri, yeni bir kişinin profilini bilimsel olarak doğrulamaz.

## Dosya düzeni

```text
index.html               Anket, sonuç ve araştırma ekranları
assets/style.css         Mobil uyumlu görünüm
src/app.js               Ekran ve anket yönetimi
src/engine.js            Doğrulama ve karşılaştırma kuralları
data/reference.js        Gerçek veriden üretilmiş toplu referans ve analiz
scripts/prepare_data.py  CSV'den referans veriyi yeniden üretme
tests/engine.test.js     Hesaplama ve hata senaryoları
docs/                    Aşağıdaki dört ana belge ve UML görseli
```

## Dört ana belge

1. [Gereksinimler](docs/gereksinim-analizi.md) — işlevler ve kabul ölçütleri.
2. [Tasarım ve UML](docs/tasarim.md) — UC açıklamaları, activity ve class diyagramları.
3. [Veri ve bilimsel yöntem](docs/veri-ve-yontem.md) — kaynak, temizleme, hipotezler, karşılaştırma, gizlilik.
4. [Sunum ve çalışma rehberi](docs/sunum-rehberi.md) — ekip, Kanban, Git gösterimi, 12–15 dakika akışı ve olası sorular.

GitHub'a dosya yüklerken klasörleri düzleştirmeyin; `docs/`, `src/` ve `.github/` yapısını koruyun. Issues ve Projects çevrim içi görevleri yerel belgelerle otomatik değişmez; canlı panodaki durum ayrıca doğrulanmalıdır.
