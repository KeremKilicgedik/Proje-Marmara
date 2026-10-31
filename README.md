# Kullanım Atlası

Marmara Üniversitesi — Yazılım Mühendisliği Temelleri

Kullanıcı kısa bir anket dolduruyor. Uygulama, onunla aynı sıklıkta yapay zekâ kullanan kişilerin amaç, araç ve endişe dağılımlarını gösteriyor. Karşılaştırmayı hazır Mendeley verisiyle yapıyoruz. Yeni kullanıcı yanıtlarını kaydetmiyoruz.

## Projeyi çalıştırma

Sunum için **demo.html** dosyasını indirip çift tıklayın. Kod ve toplu referans verisi bu dosyanın içinde.

Kaynak dosyalarla geliştirme yapmak için Python 3 ile proje klasöründe:

```bash
python -m http.server 8000 --bind 127.0.0.1
```

Tarayıcıda http://127.0.0.1:8000 adresini açın. `index.html` bu yöntemle çalışır. Sunucuyu Ctrl+C ile kapatın. Bu sunucu yalnız dosyaları sunar, anket yanıtlarını alan bir uygulama servisi yoktur.

## Nasıl çalışıyoruz?

**Çevik yaklaşımı esas alarak artımlı geliştirme yapıyoruz. Görevleri Kanban ile takip ediyoruz.** Önce veri ve kuralları, sonra anket ve sonuç ekranlarını hazırladık. Testlerde gördüğümüz sorunlara göre düzenleme yaptık. Ayrıntılar [sunum rehberinde](docs/sunum-rehberi.md).

## Ekip

| Kişi | Görevi |
|---|---|
| Kerem (`KeremKilicgedik`) | Koordinasyon, veri analizi ve GitHub takibi |
| Seyfettin (`seyfettinokmen53-oss`) | Uygulama geliştirme ve sunum |
| Suhayb (`aloushsoheb-commits`) | Umut ile slayt hazırlama |
| Umut (`Umtutu`) | Suhayb ile slayt hazırlama |

Başlangıç kodunu ve belgeleri Codex desteğiyle hazırladık. Ekip olarak kodu inceleme ve geliştirme çalışmasına devam ediyoruz.

## Hangi dosya ne işe yarıyor?

| Dosya / klasör | Kısa açıklama |
|---|---|
| `src/app.js` | Soruları ve ekranları yönetir, gerektiğinde yanıt ve sonucu temizler. |
| `src/engine.js` | Yanıtları doğrular ve aynı sıklık grubuyla karşılaştırmayı hesaplar. |
| `data/reference.js` | Hazır veri setinden ürettiğimiz toplu sayımları ve analiz sonuçlarını içerir. Yeni yanıtlar buraya eklenmez. |
| `index.html`, `assets/style.css` | Sayfa yapısı ve görünüm. |
| `demo.html` | Sunumda açtığımız tek dosyalık uygulama. |
| `scripts/prepare_data.py` | Kaynak CSV'den toplu sayımları ve araştırma analizini üretir. |
| `scripts/build_standalone.py` | Kaynak dosyalardan demo.html oluşturur. |
| `tests/` | Hesaplama ve temizleme davranışlarını kontrol eder. |
| `.github/` | Görev ve değişiklik açıklamaları için kısa şablonlar. |

## Belgeler

- [Gereksinimler](docs/gereksinim-analizi.md): Uygulama ne yapmalı, nasıl kontrol ediyoruz?
- [Tasarım ve UML](docs/tasarim.md): Kullanıcı, işlem akışı ve veri yapıları.
- [Veri ve yöntem](docs/veri-ve-yontem.md): Veri kaynağı, üç hipotez ve sonuçlarının açıklaması.
- [Sunum rehberi](docs/sunum-rehberi.md): GitHub'da açacağımız yerler, Git gösterimi ve soru-cevap.

## Veri kaynağı ve sınırlar

[AI Tools and Technology Trends](https://data.mendeley.com/datasets/wphjf9t7bv/1), Abhijeet Kumar, Mendeley Data v1. DOI: 10.17632/wphjf9t7bv.1. Lisans: CC BY 4.0.

Dosyada 1.481 kayıt, 8 dolu soru alanı ve 1 tamamen boş sütun var. Dolu alanlarda eksik yanıt yok. Yaş ve cinsiyet alanı bulunmuyor. Ham katılımcı satırları yerine toplu veriyi kullanıyoruz.

Sonuçlar bu örneklemle sınırlı. Kişilik veya başarı puanı üretmiyoruz. Genel önerileri araştırma bulgularından ayrı gösteriyoruz. Üç hipotez kullanıcıya verdiğimiz profilin bilimsel doğrulaması değildir.

## Şu anki durum

Anket, karşılaştırma ve araştırma ekranları hazır. 22 JavaScript testi ve 3 istatistik fonksiyonu kontrolü geçti. JavaScript testlerini Node.js ile çalıştırabilirsiniz:

```bash
node --test tests/engine.test.js tests/privacy.test.js tests/reset.test.js
```

Kerem, Opera GX denemesinde ağ ve depolama alanlarının boş olduğunu bildirdi. Bu gözlem bütün tarayıcıları kapsamaz. Mobil/klavye kontrolü, ekibin kod incelemesi ve sunum bilgisayarındaki demo/Git provası hâlâ açık işler.

2 Kasım Pazartesi sunumunda 12–15 dakika içinde yaptıklarımızı ve kalan işleri göstereceğiz. Dönem sonu geliştirmelerine devam edeceğiz.
