import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/contexts/LanguageContext";
import SEOOptimizer from "@/components/SEOOptimizer";
import SEOKeywords from "@/components/SEOKeywords";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#ffffff',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://xiaohongmodels.vercel.app'),
  title: "北美小红模特私教预约平台 - 专业模特私教服务 | xiaohongmodels.vercel.app",
  description: "北美高素质模特私教上门服务，提供纽约、洛杉矶、旧金山、波士顿、西雅图、拉斯维加斯等地区模特私教服务。不收会员费、免订金、诚信服务、隐私保护。",
  keywords: "模特私教,北美模特,上门服务,纽约模特,洛杉矶模特,旧金山模特,波士顿模特,西雅图模特,拉斯维加斯模特,华人模特,亚洲模特,私教服务,模特预约,高端模特,专业模特,美国外围,北美修车,伴游,私钟,快餐,留学生,援交,escort,旧金山外围,洛杉矶外围,纽约外围,芝加哥外围,拉斯维加斯外围,华盛顿外围,波士顿外围,空降",
  authors: [{ name: "xiaohongmodels" }],
  creator: "xiaohongmodels",
  publisher: "xiaohongmodels",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  icons: {
    icon: '/favicon.svg',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: "北美小红模特私教预约平台 - 专业模特私教服务",
    description: "北美高素质模特私教上门服务，提供纽约、洛杉矶、旧金山、波士顿、西雅图、拉斯维加斯等地区模特私教服务。不收会员费、免订金、诚信服务。",
    url: "https://xiaohongmodels.vercel.app",
    siteName: "xiaohongmodels.vercel.app",
    locale: "zh_CN",
    type: "website",
    images: [
      {
        url: '/xiaohongmodels-hero.jpg',
        width: 1200,
        height: 630,
        alt: '北美小红模特私教预约平台',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "北美小红模特私教预约平台 - 专业模特私教服务",
    description: "北美高素质模特私教上门服务，提供纽约、洛杉矶、旧金山、波士顿、西雅图、拉斯维加斯等地区模特私教服务。",
    images: ['/xiaohongmodels-hero.jpg'],
  },
  alternates: {
    canonical: "https://xiaohongmodels.vercel.app",
    languages: {
      'zh-CN': 'https://xiaohongmodels.vercel.app',
      'zh-TW': 'https://xiaohongmodels.vercel.app',
      'ko': 'https://xiaohongmodels.vercel.app',
      'ja': 'https://xiaohongmodels.vercel.app',
    },
  },
  other: {
    'google-site-verification': 'your-verification-code',
    'msvalidate.01': 'your-bing-verification-code',
    'yandex-verification': 'your-yandex-verification-code',
    'baidu-site-verification': 'your-baidu-verification-code',
    'category': 'adult',
    'classification': 'adult content',
    'rating': 'adult',
    'distribution': 'global',
    'language': 'zh-CN',
    'generator': 'Next.js',
    'applicationName': 'xiaohongmodels',
    'referrer': 'origin-when-cross-origin',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <SEOOptimizer />
        <SEOKeywords />
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
          strategy="afterInteractive"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Preload critical resources */}
        <link rel="preload" href="/xiaohongmodels-hero.jpg" as="image" />
        <link rel="preload" href="/favicon.svg" as="image" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        
        {/* Manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* Apple touch icons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Performance optimizations */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="xiaohongmodels" />
        
        {/* Social media optimization */}
        <meta property="og:locale:alternate" content="zh_TW" />
        <meta property="og:locale:alternate" content="ko_KR" />
        <meta property="og:locale:alternate" content="ja_JP" />
        
        {/* Additional SEO meta tags */}
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="North America" />
        <meta name="geo.position" content="40.7128;-74.0060" />
        <meta name="ICBM" content="40.7128, -74.0060" />
        
        {/* Structured data for better search results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "xiaohongmodels.vercel.app",
              "url": "https://xiaohongmodels.vercel.app",
              "description": "北美高素质模特私教上门服务",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://xiaohongmodels.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              },
              "inLanguage": "zh-CN",
              "publisher": {
                "@type": "Organization",
                "name": "xiaohongmodels",
                "url": "https://xiaohongmodels.vercel.app"
              }
            })
          }}
        />
        
        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "xiaohongmodels",
              "description": "北美高素质模特私教上门服务",
              "url": "https://xiaohongmodels.vercel.app",
              "telephone": "+1-XXX-XXX-XXXX",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US",
                "addressRegion": "North America"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "40.7128",
                "longitude": "-74.0060"
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
              "serviceType": "模特私教服务",
              "priceRange": "$$",
              "openingHours": "Mo-Su 00:00-23:59"
            })
          }}
        />
        
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "服务地点如何选择？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "可选择酒店或您的住所，模特提供上门服务，我们暂不提供固定场所。"
                  }
                },
                {
                  "@type": "Question", 
                  "name": "具体服务内容有哪些？",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "服务内容由您与模特双方协商确定，我们提供平台对接服务。"
                  }
                },
                {
                  "@type": "Question",
                  "name": "付款方式是什么？", 
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "见面确认满意后，可通过现金或转账方式直接支付给模特。"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          {children}
          <Analytics />
          <SpeedInsights />
        </LanguageProvider>
      </body>
    </html>
  );
}
