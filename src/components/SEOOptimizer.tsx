export default function SEOOptimizer() {
  // Default to Simplified Chinese for SEO purposes
  const language = 'zh-CN';

  // Structured data for the website
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "xiaohongmodels.vercel.app",
    "url": "https://xiaohongmodels.vercel.app",
    "description": "北美高素质模特私教上门服务，提供纽约、洛杉矶、旧金山、波士顿、西雅图、拉斯维加斯等地区模特私教服务。",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://xiaohongmodels.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "inLanguage": language === 'zh-CN' ? 'zh-CN' : language === 'zh-TW' ? 'zh-TW' : language,
    "publisher": {
      "@type": "Organization",
      "name": "xiaohongmodels",
      "url": "https://xiaohongmodels.vercel.app"
    }
  };

  // Local business structured data
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "xiaohongmodels",
    "description": "北美高素质模特私教上门服务",
    "url": "https://xiaohongmodels.vercel.app",
    "telephone": "+1-xxx-xxx-xxxx",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US",
      "addressRegion": "North America"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "New York"
      },
      {
        "@type": "City", 
        "name": "Los Angeles"
      },
      {
        "@type": "City",
        "name": "San Francisco"
      },
      {
        "@type": "City",
        "name": "Boston"
      },
      {
        "@type": "City",
        "name": "Seattle"
      },
      {
        "@type": "City",
        "name": "Las Vegas"
      }
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "United States"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "模特私教服务",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "单次1小时服务",
            "description": "专业模特私教1小时服务"
          },
          "price": "1500",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Service",
            "name": "1夜服务",
            "description": "专业模特私教1夜服务"
          },
          "price": "3000",
          "priceCurrency": "USD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service", 
            "name": "空降服务",
            "description": "专业模特私教空降服务"
          },
          "price": "4000",
          "priceCurrency": "USD"
        }
      ]
    }
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessData)
        }}
      />
      
      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="North America" />
      <meta name="geo.position" content="40.7128;-74.0060" />
      <meta name="ICBM" content="40.7128, -74.0060" />
      
      {/* Social Media Meta Tags */}
      <meta property="og:locale" content={language === 'zh-CN' ? 'zh_CN' : language === 'zh-TW' ? 'zh_TW' : language} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="xiaohongmodels.vercel.app" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:site" content="@xiaohongmodels" />
      <meta name="twitter:creator" content="@xiaohongmodels" />
      
      {/* Mobile Meta Tags */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="xiaohongmodels" />
      
      {/* Performance Meta Tags */}
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-config" content="/browserconfig.xml" />
      
      {/* Security Meta Tags */}
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="referrer" content="strict-origin-when-cross-origin" />
    </>
  );
} 