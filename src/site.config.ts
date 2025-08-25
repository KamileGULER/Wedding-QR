export interface WeddingEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  locationAddress: string;
  mapUrl: string;
  description?: string;
}

export interface ContactInfo {
  familyName: string;
  phone: string;
  email?: string;
}

export interface SiteConfig {
  // Temel bilgiler
  coupleNames: {
    groom: string;
    bride: string;
    full: string;
  };
  
  // SEO ve meta bilgileri
  seo: {
    title: string;
    description: string;
    keywords: string[];
    author: string;
    canonicalUrl: string;
    ogImage: string;
    ogImageWidth: number;
    ogImageHeight: number;
  };
  
  // Düğün etkinlikleri
  events: WeddingEvent[];
  
  // İletişim bilgileri
  contacts: ContactInfo[];
  
  // Görsel varlıklar
  assets: {
    hero: string;
    couple: string;
    about: string;
    og: string;
    favicon: string;
  };
  
  // Metinler
  texts: {
    hero: {
      title: string;
      subtitle: string;
    };
    howToUse: {
      title: string;
      steps: Array<{
        number: number;
        title: string;
        description: string;
      }>;
    };
    services: {
      title: string;
      description: string;
    };
    about: {
      message: string;
    };
    footer: {
      thankYou: string;
      developer: string;
    };
  };
  
  // Sosyal medya
  social: {
    instagram?: string;
    whatsapp?: string;
    facebook?: string;
  };
  
  // Schema.org Event verisi
  schema: {
    eventName: string;
    eventDescription: string;
    startDate: string;
    endDate: string;
    locationName: string;
    locationAddress: string;
    locationCountry: string;
  };
}

// Varsayılan konfigürasyon
// Vite'ın sağladığı BASE_URL ile dinamik base kullan
const VITE_BASE = (import.meta as any).env?.BASE_URL ?? '/';
const withBase = (path: string): string => `${VITE_BASE}${path.replace(/^\//, '')}`;

export const defaultConfig: SiteConfig = {
  coupleNames: {
    groom: "Mehmet",
    bride: "Ayşe Sena",
    full: "Ayşe Sena & Mehmet"
  },
  
  seo: {
    title: "Ayşe Sena & Mehmet Düğünü - Anılarınızı Paylaşın",
    description: "Ayşe Sena & Mehmet'in düğününe hoş geldiniz. Düğün anılarınızdan fotoğraflarınızı ve mesajlarınızı bizimle paylaşın.",
    keywords: ["düğün", "Ayşe Sena", "Mehmet", "fotoğraf", "anı", "paylaşım"],
    author: "Kamile Güler",
    canonicalUrl: "https://AnıBırak.com",
    ogImage: withBase("assets/og.jpg"),
    ogImageWidth: 1200,
    ogImageHeight: 630
  },
  
  events: [
    {
      id: "henna",
      title: "📅 Kına Gecesi",
      date: "9 Ağustos 2025 Cumartesi",
      time: "19:00",
      location: "Bağkonak İlkokulu Karşısı, Kız Evinin Önü",
      locationAddress: "Bağkonak, Yalvaç, Isparta",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Bağkonak+İlkokulu,+Yalvaç,+Isparta"
    },
    {
      id: "bride-pickup",
      title: "👰 Gelin Alma",
      date: "10 Ağustos 2025 Pazar",
      time: "10:00",
      location: "Isparta Merkez, Hızırbey Mah. 1549 Sok. Ceddid Sitesi",
      locationAddress: "Hızırbey Mahallesi 1549 Sokak, Isparta",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Hızırbey+Mahallesi+1549+Sokak,+Isparta"
    },
    {
      id: "reception",
      title: "🍽️ Yemek & Balo",
      date: "10 Ağustos 2025 Pazar",
      time: "16:00 - 23:00",
      location: "SAV Düğün Salonu, Merkez / Isparta",
      locationAddress: "SAV Düğün Salonu, Isparta",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=SAV+Düğün+Salonu,+Isparta",
      description: "🍽️ Yemek: 16:00 – 19:30\n💃 Balo: 20:00"
    }
  ],
  
  contacts: [
    {
      familyName: " Ailesi",
      phone: "-"
    },
    {
      familyName: " Ailesi",
      phone: "-"
    }
  ],
  
  assets: {
    hero: withBase("assets/hero.jpg"),
    couple: withBase("assets/couple.jpg"),
    about: withBase("assets/about.jpg"),
    og: withBase("assets/og.jpg"),
    favicon: withBase("favicon.svg"),
  },
  
  texts: {
    hero: {
      title: "Ayşe Sena & Mehmet",
      subtitle: "Düğünümüze hoş geldiniz. Fotoğraf ve mesajlarınızı bizimle paylaşabilirsiniz."
    },
    howToUse: {
      title: "Nasıl Kullanılır?",
      steps: [
        {
          number: 1,
          title: "Fotoğraf Seçin",
          description: "Düğün anılarınızdan fotoğraflarınızı seçin. Birden fazla fotoğraf yükleyebilirsiniz."
        },
        {
          number: 2,
          title: "Mesaj Yazın",
          description: "İsteğe bağlı olarak kısa bir mesaj yazabilirsiniz. Fotoğraf veya mesajdan en az biri gereklidir."
        },
        {
          number: 3,
          title: "Gönderin",
          description: "Formu doldurduktan sonra \"Gönder\" butonuna tıklayarak anılarınızı paylaşın."
        }
      ]
    },
    services: {
      title: "Anılarınızı Paylaşın",
      description: "Düğünümüzden fotoğraflarınızı ve sesli dileklerinizi yükleyerek bu özel günü ölümsüzleştirin. Kısa bir mesaj bırakmayı unutmayın!"
    },
    about: {
      message: "Ayşe Sena & Mehmet'in bu özel gününde bizimle olduğunuz için çok mutluyuz. Katılımınız ve güzel dilekleriniz için teşekkür ederiz!"
    },
    footer: {
      thankYou: "Mutluluk paylaştıkça çoğalır 💕",
      developer: "Kamile Güler"
    }
  },
  
  social: {
    instagram: "#",
    whatsapp: "#"
  },
  
  schema: {
    eventName: "Ayşe Sena & Mehmet Düğünü",
    eventDescription: "Ayşe Sena & Mehmet'in düğününe hoş geldiniz. Düğün anılarınızdan fotoğraflarınızı ve mesajlarınızı bizimle paylaşın.",
    startDate: "-",
    endDate: "-",
    locationName: "-",
    locationAddress: "-",
    locationCountry: "TR"
  }
};

// Aktif konfigürasyon (değiştirilebilir)
export const siteConfig: SiteConfig = defaultConfig;
