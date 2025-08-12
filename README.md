# Düğünler İçin Anı Paylaşım Platformu

Bu proje, düğünler için özel olarak tasarlanmış bir anı paylaşım platformudur. Misafirler düğün anılarını fotoğrafları ve mesajlarıyla paylaşabilirler.

## 🎯 Özellikler

### 📱 Kullanıcı Özellikleri
- **Fotoğraf Yükleme**: JPG, PNG, GIF, WebP formatlarında fotoğraf yükleme
- **Mesaj Paylaşımı**: Düğün anılarınızı yazılı olarak paylaşma
- **Güvenli Dosya Yükleme**: Dosya boyutu ve türü kontrolü
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu

### 🛡️ Güvenlik Özellikleri
- **Dosya Validasyonu**: Magic number kontrolü
- **XSS Koruması**: Input sanitization
- **Rate Limiting**: 5 dakikada maksimum 3 gönderi
- **Dosya Boyutu Limiti**: Maksimum 5MB per dosya

## 🚀 Teknolojiler

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 + Bootstrap
- **Testing**: Jest + React Testing Library
- **PWA**: Progressive Web App desteği
- **SEO**: Meta tags, Open Graph, Schema.org

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install

# Geliştirme sunucusunu başlat
npm run dev

# Production build
npm run build

# Testleri çalıştır
npm test

# TypeScript kontrolü
npm run type-check
```

## 🔧 Geliştirme

### Proje Yapısı
```
src/
├── components/          # React bileşenleri
│   ├── Hero.tsx        # Ana sayfa hero bölümü
│   ├── SimpleAdmin.tsx # Admin paneli
│   └── SectionDivider.tsx
├── types/              # TypeScript tip tanımları
├── assets/             # Resimler ve statik dosyalar
└── App.tsx             # Ana uygulama bileşeni
```

### Admin Girişi
- **Şifre**: `wedding2024!@#`
- **Maksimum Deneme**: 3
- **Kilit Süresi**: 5 dakika
- **Oturum Süresi**: 30 dakika

## 📱 PWA Özellikleri

- Ana ekrana eklenebilir
- Çevrimdışı çalışabilir
- Push bildirimleri (gelecek)
- Tam ekran mod

## 🧪 Test

```bash
# Tüm testleri çalıştır
npm test

# Test coverage
npm run test:coverage

# Watch modunda test
npm run test:watch
```

## 📄 Lisans

Bu proje özel kullanım için tasarlanmıştır.

## 👥 Geliştirici

**Kamile Güler** - Web sitesi geliştiricisi

---
