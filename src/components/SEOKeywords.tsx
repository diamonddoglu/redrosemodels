import Script from 'next/script';

export default function SEOKeywords() {
  // SEO Keywords in all supported languages
  const seoKeywords = {
    'zh-CN': [
      '模特私教', '北美模特', '上门服务', '纽约模特', '洛杉矶模特', '旧金山模特', 
      '波士顿模特', '西雅图模特', '拉斯维加斯模特', '华人模特', '亚洲模特', 
      '私教服务', '模特预约', '高端模特', '专业模特', '美国外围', '北美修车', '伴游', '私钟', '快餐', '留学生', '援交', 'escort',
      '旧金山外围', '洛杉矶外围', '纽约外围', '芝加哥外围', '拉斯维加斯外围', 
      '华盛顿外围', '波士顿外围', '空降', 'us151'
    ],
    'zh-TW': [
      '模特私教', '北美模特', '上門服務', '紐約模特', '洛杉磯模特', '舊金山模特',
      '波士頓模特', '西雅圖模特', '拉斯維加斯模特', '華人模特', '亞洲模特',
      '私教服務', '模特預約', '高端模特', '專業模特', '美國外圍', '北美修車', '伴遊', '私鐘', '快餐', '留學生', '援交', 'escort',
      '舊金山外圍', '洛杉磯外圍', '紐約外圍', '芝加哥外圍', '拉斯維加斯外圍',
      '華盛頓外圍', '波士頓外圍', '空降', 'us151'
    ],
    'ko': [
      '모델 에스코트', '북미 모델', '방문 서비스', '뉴욕 모델', '로스앤젤레스 모델', '샌프란시스코 모델',
      '보스턴 모델', '시애틀 모델', '라스베가스 모델', '중국인 모델', '아시아 모델',
      '에스코트 서비스', '모델 예약', '고급 모델', '전문 모델', '미국 에스코트', '북미 에스코트', '동반 여행', '개인 에스코트', '퀵 서비스', '유학생', '에스코트', 'escort',
      '샌프란시스코 에스코트', '로스앤젤레스 에스코트', '뉴욕 에스코트', '시카고 에스코트', '라스베가스 에스코트',
      '워싱턴 에스코트', '보스턴 에스코트', '에어드롭', 'us151'
    ],
    'ja': [
      'モデルエスコート', '北米モデル', '訪問サービス', 'ニューヨークモデル', 'ロサンゼルスモデル', 'サンフランシスコモデル',
      'ボストンモデル', 'シアトルモデル', 'ラスベガスモデル', '中国人モデル', 'アジアモデル',
      'エスコートサービス', 'モデル予約', '高級モデル', '専門モデル', 'アメリカエスコート', '北米エスコート', '同伴旅行', '個人エスコート', 'クイックサービス', '留学生', 'エスコート', 'escort',
      'サンフランシスコエスコート', 'ロサンゼルスエスコート', 'ニューヨークエスコート', 'シカゴエスコート', 'ラスベガスエスコート',
      'ワシントンエスコート', 'ボストンエスコート', 'エアドロップ', 'us151'
    ]
  };

  // Generate meta keywords for all languages
  const generateKeywordsMeta = () => {
    const allKeywords: string[] = [];
    
    Object.values(seoKeywords).forEach(lang => {
      allKeywords.push(...lang);
    });
    
    return allKeywords.join(', ');
  };

  return (
    <>
      {/* Primary Keywords Meta Tag */}
      <meta name="keywords" content={generateKeywordsMeta()} />
      
      {/* Language-specific keywords for hreflang */}
      <meta name="keywords-zh-CN" content={seoKeywords['zh-CN'].join(', ')} />
      <meta name="keywords-zh-TW" content={seoKeywords['zh-TW'].join(', ')} />
      <meta name="keywords-ko" content={seoKeywords['ko'].join(', ')} />
      <meta name="keywords-ja" content={seoKeywords['ja'].join(', ')} />
      
      {/* Structured data for keywords - Deferred */}
      <Script
        id="keywords-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "xiaohongmodels.vercel.app",
            "keywords": generateKeywordsMeta(),
            "description": "北美高素质模特私教上门服务，提供纽约、洛杉矶、旧金山、波士顿、西雅图、拉斯维加斯等地区模特私教服务。",
            "url": "https://xiaohongmodels.vercel.app"
          })
        }}
        strategy="afterInteractive"
      />
    </>
  );
} 