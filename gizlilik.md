# Gizlilik tasarımı ve doğrulama

## Kullanıcıya gösterilecek metin

“Yanıtlarınız yalnızca bu sayfada sonucunuzu hesaplamak için kullanılır. Uygulama anket yanıtlarınızı kaydetmez veya sunucuya göndermez. Yeniden başlatma veya sayfayı yenileme yanıtlarınızı temizler.”

Bu ifade şu anda uygulama gereksinimidir; canlı uygulamada tarayıcı testleri geçmeden gizlilik davranışı doğrulanmış sayılmaz.

## Uygulama kuralları

- Ad, e-posta, hesap açma veya kullanıcı kimliği istenmez.
- Yanıtlar ve sonuçlar yalnız JS belleğinde tutulur.
- localStorage, sessionStorage, IndexedDB, çerez veya service worker önbelleğine yanıt yazılmaz.
- Form otomatik tamamlama ve geri/ileri önbelleğinden yanıt geri gelmesi kontrol edilir; gerekli yaşam döngüsü temizliği uygulanır.
- Yanıtlar URL sorgusuna, hash'e, history state'e, konsola veya hata raporlarına eklenmez.
- Yanıt gönderen fetch/XHR/sendBeacon/WebSocket/form submit isteği yapılmaz.
- Üçüncü taraf analitik, reklam, sohbet, AI API'si veya dış sonuç servisi eklenmez.
- Statik referans paketini başlangıçta indirmek mümkündür; istek yanıtları içermez.
- Barındırma sağlayıcısının IP/erişim kayıtları anket yanıtlarından ayrıdır; “hiçbir veri işlenmez” denmez.

## Kabul testi

Temiz tarayıcı profiliyle anket doldurulur. Network panelinde anketten önceki/sonraki istekler ve gövdeler incelenir. Application panelinde depolama ve çerezler kontrol edilir. URL, konsol, yenileme, geri/ileri ve yeniden başlatma denenir. Tekrar açıldığında yanıtların dönmediği doğrulanır. Bu kontroller uygulama geliştirilince gerçek tarayıcıda yapılacak; henüz yapılmadı.
