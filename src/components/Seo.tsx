import { Helmet } from 'react-helmet';
import { siteConfig } from '../site.config';

interface SeoProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function Seo({ 
  title, 
  description, 
  image, 
  url 
}: SeoProps) {
  const seoTitle = title || siteConfig.seo.title;
  const seoDescription = description || siteConfig.seo.description;
  const seoImage = image || siteConfig.seo.ogImage;
  const seoUrl = url || siteConfig.seo.canonicalUrl;

  // Schema.org Event verisi
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": siteConfig.schema.eventName,
    "description": siteConfig.schema.eventDescription,
    "startDate": siteConfig.schema.startDate,
    "endDate": siteConfig.schema.endDate,
    "location": {
      "@type": "Place",
      "name": siteConfig.schema.locationName,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": siteConfig.schema.locationAddress,
        "addressCountry": siteConfig.schema.locationCountry
      }
    },
    "organizer": {
      "@type": "Person",
      "name": siteConfig.coupleNames.full
    },
    "image": seoImage,
    "url": seoUrl
  };

  return (
    <Helmet>
      {/* Temel meta etiketleri */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={siteConfig.seo.keywords.join(', ')} />
      <meta name="author" content={siteConfig.seo.author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="Turkish" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seoUrl} />
      
      {/* Open Graph meta etiketleri */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:image:width" content={siteConfig.seo.ogImageWidth.toString()} />
      <meta property="og:image:height" content={siteConfig.seo.ogImageHeight.toString()} />
      <meta property="og:site_name" content={seoTitle} />
      <meta property="og:locale" content="tr_TR" />
      
      {/* Twitter Card meta etiketleri */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      
      {/* Web App Manifest */}
      <meta name="theme-color" content="#667eea" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content={seoTitle} />
      
      {/* Schema.org Event verisi */}
      <script type="application/ld+json">
        {JSON.stringify(eventSchema)}
      </script>
    </Helmet>
  );
}
