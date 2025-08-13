# 📁 PROJE DOSYALARI AÇIKLAMASI

Bu dosya, wedding template projesindeki tüm dosyaların ne işe yaradığını açıklar.

## 🗂️ ANA KLASÖRLER

### 📂 `src/` - Kaynak Kodlar
React uygulamasının ana kodlarının bulunduğu klasör.

### 📂 `public/` - Statik Dosyalar
Tarayıcıya direkt sunulan dosyalar (resimler, favicon, manifest).

### 📂 `.github/workflows/` - GitHub Otomasyonları
GitHub'da otomatik çalışan işlemler (test, build kontrolü).

---

## 📄 ANA DOSYALAR

### 🔧 `package.json`
- **Ne işe yarar**: Proje ayarları, bağımlılıklar, script'ler
- **İçeriği**: 
  - Proje adı: "wedding-template"
  - Kullanılan paketler (React, TypeScript, Vite)
  - Çalıştırma komutları (npm run dev, build, test)
- **Önem**: Proje kalbi, her şey buradan yönetiliyor

### 📖 `README.md`
- **Ne işe yarar**: Proje kullanım kılavuzu
- **İçeriği**: 
  - Nasıl kurulur
  - Nasıl özelleştirilir
  - Deployment nasıl yapılır
- **Önem**: Yeni kullanıcılar için rehber

### 📜 `LICENSE`
- **Ne işe yarar**: MIT lisansı
- **İçeriği**: Projeyi özgürce kullanma, değiştirme, dağıtma hakkı
- **Önem**: Yasal koruma

### 🤝 `CONTRIBUTING.md`
- **Ne işe yarar**: Katkıda bulunma rehberi
- **İçeriği**: 
  - Kod nasıl yazılır
  - Test nasıl yapılır
  - Pull request nasıl açılır
- **Önem**: Geliştiriciler için rehber

---

## 📂 `src/` KLASÖRÜ İÇERİĞİ

### 🎯 `src/site.config.ts` ⭐ EN ÖNEMLİ DOSYA
- **Ne işe yarar**: Tüm site içeriği burada
- **İçeriği**:
  - Çift isimleri (Raşit & Beyza)
  - Düğün tarihleri ve yerleri
  - İletişim bilgileri
  - Tüm metinler
  - Görsel dosya yolları
- **Önem**: Bu dosyayı değiştirerek tüm sitei özelleştirebilirsin

### 🚀 `src/main.tsx`
- **Ne işe yarar**: Uygulama başlangıç noktası
- **İçeriği**: 
  - React uygulamasını başlatır
  - Helmet provider'ı ekler
- **Önem**: Uygulama giriş kapısı

### 🎨 `src/App.tsx`
- **Ne işe yarar**: Ana uygulama bileşeni
- **İçeriği**:
  - Tüm sayfa bölümleri
  - site.config'den veri çeker
  - Dinamik içerik gösterir
- **Önem**: Ana sayfa yapısı

### 🎭 `src/components/` - Bileşenler Klasörü

#### `src/components/Hero.tsx`
- **Ne işe yarar**: Ana sayfa üst kısmı
- **İçeriği**: 
  - Büyük başlık
  - Alt başlık
  - site.config'den veri alır
- **Önem**: İlk görünen kısım

#### `src/components/Seo.tsx`
- **Ne işe yarar**: SEO meta etiketleri
- **İçeriği**:
  - Sayfa başlığı
  - Açıklama
  - Open Graph etiketleri
  - Schema.org verisi
- **Önem**: Arama motorları için

#### `src/components/WeddingForm.tsx`
- **Ne işe yarar**: Fotoğraf yükleme formu
- **İçeriği**:
  - Dosya seçimi
  - Mesaj yazma
  - Gönderme işlemi
- **Önem**: Misafirlerin fotoğraf paylaşması

#### `src/components/__tests__/Hero.test.tsx`
- **Ne işe yarar**: Hero bileşeni testleri
- **İçeriği**: 
  - Bileşenin doğru çalıştığını kontrol eder
- **Önem**: Kod kalitesi

### 📝 `src/types/` - Tip Tanımları

#### `src/types/index.ts`
- **Ne işe yarar**: TypeScript tip tanımları
- **İçeriği**:
  - Form verileri tipleri
  - Bileşen prop tipleri
  - Hata tipleri
- **Önem**: Kod güvenliği

#### `src/types/images.d.ts`
- **Ne işe yarar**: Resim dosya tipleri
- **İçeriği**: 
  - .jpg, .png gibi dosyaların TypeScript'te tanınması
- **Önem**: Resim import'ları için

### 🎨 `src/` - Stil Dosyaları

#### `src/App.css`
- **Ne işe yarar**: Ana uygulama stilleri
- **İçeriği**: 
  - Sayfa düzeni
  - Bileşen stilleri
  - Responsive tasarım
- **Önem**: Görsel görünüm

#### `src/index.css`
- **Ne işe yarar**: Genel stiller
- **İçeriği**:
  - CSS değişkenleri (renkler)
  - Temel stiller
  - Font ayarları
- **Önem**: Tema renkleri

#### `src/components/Hero.css`
- **Ne işe yarar**: Hero bileşeni stilleri
- **İçeriği**: 
  - Hero bölümü görünümü
  - Animasyonlar
- **Önem**: Hero görünümü

### 🧪 `src/setupTests.ts`
- **Ne işe yarar**: Test ortamı ayarları
- **İçeriği**: 
  - Jest test kütüphanesi ayarları
- **Önem**: Testlerin çalışması için

---

## 📂 `public/` KLASÖRÜ İÇERİĞİ

### 🖼️ `public/assets/` - Görseller
- **`hero.jpg`**: Ana sayfa arka plan resmi
- **`couple.jpg`**: Çift fotoğrafı
- **`about.jpg`**: Hakkında bölümü resmi
- **`og.jpg`**: Sosyal medya paylaşım resmi

### 🔗 `public/` - Diğer Dosyalar
- **`favicon.ico`**: Site ikonu
- **`manifest.json`**: PWA ayarları
- **`robots.txt`**: Arama motoru ayarları

---

## ⚙️ KONFİGÜRASYON DOSYALARI

### 🔧 `vite.config.ts`
- **Ne işe yarar**: Vite build aracı ayarları
- **İçeriği**: 
  - React plugin'i
  - Build ayarları
- **Önem**: Proje derleme

### 🔧 `tsconfig.json`
- **Ne işe yarar**: TypeScript ayarları
- **İçeriği**: 
  - Derleyici seçenekleri
  - Dosya dahil etme
- **Önem**: TypeScript derleme

### 🔧 `eslint.config.js`
- **Ne işe yarar**: Kod kalite kuralları
- **İçeriği**: 
  - Lint kuralları
  - TypeScript desteği
- **Önem**: Kod standartları

### 🔧 `jest.config.cjs`
- **Ne işe yarar**: Test ayarları
- **İçeriği**: 
  - Jest test kütüphanesi ayarları
- **Önem**: Test çalıştırma

---

## 🚀 ÇALIŞTIRMA KOMUTLARI

### `npm run dev`
- **Ne yapar**: Geliştirme sunucusunu başlatır
- **Sonuç**: http://localhost:3000 adresinde site açılır

### `npm run build`
- **Ne yapar**: Production için sitei derler
- **Sonuç**: `dist/` klasöründe hazır dosyalar

### `npm run preview`
- **Ne yapar**: Build edilen sitei önizler
- **Sonuç**: Production versiyonu test edilir

### `npm test`
- **Ne yapar**: Testleri çalıştırır
- **Sonuç**: Kod kalitesi kontrol edilir

### `npm run lint`
- **Ne yapar**: Kod standartlarını kontrol eder
- **Sonuç**: Kod kalitesi raporu

---

## 🎯 ÖZELLEŞTİRME NASIL YAPILIR?

### 1. Çift Bilgilerini Değiştir
```typescript
// src/site.config.ts dosyasında:
coupleNames: {
  groom: "Senin Adın",
  bride: "Eşinin Adı", 
  full: "Senin Adın & Eşinin Adı"
}
```

### 2. Tarihleri Değiştir
```typescript
// src/site.config.ts dosyasında:
events: [
  {
    title: "💒 Düğün Töreni",
    date: "15 Aralık 2024",
    time: "14:00"
  }
]
```

### 3. Resimleri Değiştir
- `public/assets/` klasöründeki dosyaları kendi resimlerinle değiştir
- Dosya isimleri aynı kalmalı

### 4. Metinleri Değiştir
```typescript
// src/site.config.ts dosyasında:
texts: {
  hero: {
    title: "Senin Başlığın",
    subtitle: "Senin alt başlığın"
  }
}
```

---

## 💡 ÖNEMLİ NOTLAR

1. **`src/site.config.ts`** dosyası en önemli dosya - her şey buradan yönetiliyor
2. **Resimler** `public/assets/` klasöründe olmalı
3. **Stil değişiklikleri** CSS dosyalarında yapılmalı
4. **Yeni özellikler** için yeni bileşenler eklenebilir
5. **Test etmek** için `npm run dev` komutu kullanılmalı

---

## 🆘 YARDIM GEREKİRSE

- **README.md** dosyasını oku
- **site.config.ts** dosyasını incele
- **npm run dev** ile test et
- Sorun varsa GitHub Issues'da ara

Bu template ile kendi düğün siteni kolayca oluşturabilirsin! 🎉
