// Translation Pattern for Models:
// Each model needs translations for: 'zh-CN', 'zh-TW', 'en', 'ko', 'ja'
// 
// Name pattern:
// - English: "New York #X", "Los Angeles #X", etc.
// - Korean: "뉴욕 X호", "로스앤젤레스 X호", etc.
// - Japanese: "ニューヨークX号", "ロサンゼルスX号", etc.
//
// Description pattern:
// - Translate key physical attributes (height, weight, cup size)
// - Translate personality traits and service descriptions
// - Maintain professional tone while preserving meaning

export interface Model {
  id: string;
  name: {
    'zh-CN': string;
    'zh-TW': string;
    'en': string;
    'ko': string;
    'ja': string;
  };
  mainImage: string;
  images: string[];
  description: {
    'zh-CN': string;
    'zh-TW': string;
    'en': string;
    'ko': string;
    'ja': string;
  };
  city: string;
}

export const models: Model[] = [
  // 纽约模特
  {
    id: 'ny-001',
    name: {
      'zh-CN': '纽约1号',
      'zh-TW': '紐約1號',
      'en': 'New York #1',
      'ko': '뉴욕 1호',
      'ja': 'ニューヨーク1号'
    },
    mainImage: '/images/models/ny-001-3.jpg',
    images: [
      '/images/models/ny-001-1.jpg',
      '/images/models/ny-001-2.jpg',
      '/images/models/ny-001-3.jpg',
      '/images/models/ny-001-4.jpg',
    ],
    description: {
      'zh-CN': `美国纽约在校大学生
                  98年
                  165cm  43kg 胸C
                  皮肤白皙 五官精致 蜜桃臀
                  清纯甜美 肤白滑嫩 性格nice 有素质的来`,
      'zh-TW': `美國紐約在校大學生
                  98年
                  165cm  43kg 胸C
                  皮膚白皙 五官精緻 蜜桃臀
                  清純甜美 膚白滑嫩 性格nice 有素質的來`,
      'en': `New York University Student
                  Born 1998
                  165cm, 43kg, C cup
                  Fair skin, delicate features, peach butt
                  Pure and sweet, smooth skin, nice personality, quality service`,
      'ko': `뉴욕 대학생
                  98년생
                  165cm, 43kg, C컵
                  피부가 하얗고, 섬세한 이목구비, 복숭아 엉덩이
                  순수하고 달콤하며, 피부가 매끄럽고, 성격이 좋음, 품질 서비스`,
      'ja': `ニューヨーク大学生
                  98年生まれ
                  165cm、43kg、Cカップ
                  肌が白く、繊細な顔立ち、桃尻
                  純粋で甘く、肌が滑らかで、性格が良く、品質サービス`
    },
    city: 'newyork'
  },
  {
    id: 'ny-002',
    name: {
      'zh-CN': '纽约2号',
      'zh-TW': '紐約2號',
      'en': 'New York #2',
      'ko': '뉴욕 2호',
      'ja': 'ニューヨーク2号'
    },
    mainImage: '/images/models/ny-002-2.jpg',
    images: [
      '/images/models/ny-002-1.jpg',
      '/images/models/ny-002-2.jpg',
      '/images/models/ny-002-3.jpg',
      '/images/models/ny-002-4.jpg',
    ],
    description: {
      'zh-CN': `纽约新人172cm 97年生 留学生兼职 哥伦比亚大学医学科
                  可给不一样的体验 水多 服务超好`,
      'zh-TW': `紐約新人172cm 97年生 留學生兼職 哥倫比亞大學醫學科
                  可給不一樣的體驗 水多 服務超好`,
      'en': `New York newcomer 172cm, born 1997, international student part-time, Columbia University Medical School
                  Can provide different experience, very wet, excellent service`,
      'ko': `뉴욕 신인 172cm, 97년생, 유학생 파트타임, 컬럼비아대학교 의학과
                  다른 경험을 제공할 수 있고, 매우 젖어있으며, 훌륭한 서비스`,
      'ja': `ニューヨーク新人172cm、97年生まれ、留学生パートタイム、コロンビア大学医学部
                  異なる体験を提供でき、とても濡れており、素晴らしいサービス`
    },
    city: 'newyork'
  },
  {
    id: 'ny-003',
    name: {
      'zh-CN': '纽约3号',
      'zh-TW': '紐約3號',
      'en': 'New York #3',
      'ko': '뉴욕 3호',
      'ja': 'ニューヨーク3号'
    },
    mainImage: '/images/models/ny-003-1.jpg',
    images: [
      '/images/models/ny-003-1.jpg',
      '/images/models/ny-003-2.jpg',
      '/images/models/ny-003-3.jpg',
      '/images/models/ny-003-4.jpg',
    ],
    description: {
      'zh-CN': `纽约新人
                  166CM 胸C  身材黄金比例 腿细长直
                  美国纽约留学生 高学历 高素质 无纹身 不吸烟  温柔甜美
                  水多 超紧 超敏感 可以cosplay`,
      'zh-TW': `紐約新人
                  166CM 胸C  身材黃金比例 腿細長直
                  美國紐約留學生 高學歷 高素質 無紋身 不吸煙  溫柔甜美
                  水多 超緊 超敏感 可以cosplay`,
      'en': `New York newcomer
                  166CM, C cup, golden body proportions, long slender legs
                  International student in New York, high education, high quality, no tattoos, non-smoker, gentle and sweet
                  Very wet, very tight, very sensitive, can cosplay`,
      'ko': `뉴욕 신인
                  166CM, C컵, 황금 비율 몸매, 가늘고 긴 다리
                  뉴욕 유학생, 고학력, 고품질, 문신 없음, 비흡연자, 부드럽고 달콤함
                  매우 젖어있고, 매우 조밀하며, 매우 민감하고, 코스플레이 가능`,
      'ja': `ニューヨーク新人
                  166CM、Cカップ、黄金比率のボディ、細くて長い脚
                  ニューヨーク留学生、高学歴、高品質、タトゥーなし、非喫煙者、優しく甘い
                  とても濡れており、とても締まっており、とても敏感で、コスプレ可能`
    },
    city: 'newyork'
  },
  {
    id: 'ny-004',
    name: {
      'zh-CN': '纽约4号',
      'zh-TW': '紐約4號',
      'en': 'New York #4',
      'ko': '뉴욕 4호',
      'ja': 'ニューヨーク4号'
    },
    mainImage: '/images/models/ny-004-2.jpg',
    images: [
      '/images/models/ny-004-1.jpg',
      '/images/models/ny-004-2.jpg',
      '/images/models/ny-004-3.jpg',
      '/images/models/ny-004-4.jpg',
    ],
    description: {
      'zh-CN': `任雪纯
                168CM 胸D
                纯天然 自然美 雪白 青春`,
      'zh-TW': `任雪純
                168CM 胸D
                純天然 自然美 雪白 青春`,
      'en': `Ren Xuechun
                168CM, D cup
                All natural, natural beauty, snow white, youthful`,
      'ko': `런쉐춘
                168CM, D컵
                완전 천연, 자연미, 눈처럼 하얀 피부, 청춘`,
      'ja': `任雪純
                168CM、Dカップ
                完全天然、自然美、雪のように白い、青春`
    },
    city: 'newyork'
  },
  {
    id: 'ny-005',
    name: {
      'zh-CN': '纽约5号',
      'zh-TW': '紐約5號',
      'en': 'New York #5',
      'ko': '뉴욕 5호',
      'ja': 'ニューヨーク5号'
    },
    mainImage: '/images/models/ny-005-3.jpg',
    images: [
      '/images/models/ny-005-1.jpg',
      '/images/models/ny-005-2.jpg',
      '/images/models/ny-005-3.jpg',
      '/images/models/ny-005-4.jpg',
    ],
    description: {
      'zh-CN': `夏雪
                  身高168 胸D
                  在校学生
                  健身美女`,
      'zh-TW': `夏雪
                  身高168 胸D
                  在校學生
                  健身美女`,
      'en': `Xia Xue
                  Height 168, D cup
                  University student
                  Fitness beauty`,
      'ko': `샤쉐
                  키 168, D컵
                  대학생
                  피트니스 미녀`,
      'ja': `夏雪
                  身長168、Dカップ
                  大学生
                  フィットネス美女`
    },
    city: 'newyork'
  },
  {
    id: 'ny-006',
    name: {
      'zh-CN': '纽约6号',
      'zh-TW': '紐約6號',
      'en': 'New York #6',
      'ko': '뉴욕 6호',
      'ja': 'ニューヨーク6号'
    },
    mainImage: '/images/models/ny-006-1.jpg',
    images: [
      '/images/models/ny-006-1.jpg',
      '/images/models/ny-006-2.jpg',
      '/images/models/ny-006-3.jpg',
      '/images/models/ny-006-4.jpg',
    ],
    description: {
      'zh-CN': `纽约168CM 98年 胸D`,
      'zh-TW': `紐約168CM 98年 胸D`,
      'en': `New York 168CM, born 1998, D cup`,
      'ko': `뉴욕 168CM, 98년생, D컵`,
      'ja': `ニューヨーク168CM、98年生まれ、Dカップ`
    },
    city: 'newyork'
  },
  {
    id: 'ny-007',
    name: {
      'zh-CN': '纽约7号',
      'zh-TW': '紐約7號',
      'en': 'New York #7',
      'ko': '뉴욕 7호',
      'ja': 'ニューヨーク7号'
    },
    mainImage: '/images/models/ny-007-1.jpg',
    images: [
      '/images/models/ny-007-1.jpg',
      '/images/models/ny-007-2.jpg',
      '/images/models/ny-007-3.jpg',
      '/images/models/ny-007-4.jpg',
    ],
    description: {
      'zh-CN': `纽约留学生 168cm  C胸  45kg
                  肌肤白嫩`,
      'zh-TW': `紐約留學生 168cm  C胸  45kg
                  肌膚白嫩`,
      'en': `New York international student, 168cm, C cup, 45kg
                  Fair and tender skin`,
      'ko': `뉴욕 유학생, 168cm, C컵, 45kg
                  피부가 하얗고 부드러움`,
      'ja': `ニューヨーク留学生、168cm、Cカップ、45kg
                  肌が白くて柔らかい`
    },
    city: 'newyork'
  },
  {
    id: 'ny-008',
    name: {
      'zh-CN': '纽约8号',
      'zh-TW': '紐約8號',
      'en': 'New York #8',
      'ko': '뉴욕 8호',
      'ja': 'ニューヨーク8号'
    },
    mainImage: '/images/models/ny-008-1.jpg',
    images: [
      '/images/models/ny-008-1.jpg',
      '/images/models/ny-008-2.jpg',
      '/images/models/ny-008-3.jpg',
      '/images/models/ny-008-4.jpg',
    ],
    description: {
      'zh-CN': `173 B 蜜桃臀 大长腿 年轻时尚
                  第一次下海 短暂兼职
                  不接急单
                  温柔可人  全是雪白 混血感`,
      'zh-TW': `173 B 蜜桃臀 大長腿 年輕時尚
                  第一次下海 短暫兼職
                  不接急單
                  溫柔可人  全是雪白 混血感`,
      'en': `173cm, B cup, peach butt, long legs, young and fashionable
                  First time, short-term part-time
                  No rush orders
                  Gentle and lovely, all snow white, mixed race look`,
      'ko': `173cm, B컵, 복숭아 엉덩이, 긴 다리, 젊고 패션
                  첫 번째, 단기 파트타임
                  급한 주문 안 받음
                  부드럽고 사랑스럽고, 모두 눈처럼 하얗고, 혼혈 느낌`,
      'ja': `173cm、Bカップ、桃尻、長い脚、若くてファッショナブル
                  初回、短期パートタイム
                  急な注文は受け付けません
                  優しく愛らしく、すべて雪のように白く、ハーフ感`
    },
    city: 'newyork'
  },
  {
    id: 'ny-009',
    name: {
      'zh-CN': '纽约9号',
      'zh-TW': '紐約9號',
      'en': 'New York #9',
      'ko': '뉴욕 9호',
      'ja': 'ニューヨーク9号'
    },
    mainImage: '/images/models/ny-009-2.jpg',
    images: [
      '/images/models/ny-009-1.jpg',
      '/images/models/ny-009-2.jpg',
      '/images/models/ny-009-3.jpg',
      '/images/models/ny-009-4.jpg',
    ],
    description: {
      'zh-CN': `美国纽约 新人 留学生 166CM 胸C
                  可爱女友 皮肤 白嫩`,
      'zh-TW': `美國紐約 新人 留學生 166CM 胸C
                  可愛女友 皮膚 白嫩`,
      'en': `New York, USA, newcomer, international student, 166CM, C cup
                  Cute girlfriend, fair and tender skin`,
      'ko': `미국 뉴욕, 신인, 유학생, 166CM, C컵
                  귀여운 여자친구, 피부가 하얗고 부드러움`,
      'ja': `アメリカニューヨーク、新人、留学生、166CM、Cカップ
                  可愛い彼女、肌が白くて柔らかい`
    },
    city: 'newyork'
  },
  {
    id: 'ny-010',
    name: {
      'zh-CN': '纽约10号',
      'zh-TW': '紐約10號',
      'en': 'New York #10',
      'ko': '뉴욕 10호',
      'ja': 'ニューヨーク10号'
    },
    mainImage: '/images/models/ny-010-2.jpg',
    images: [
      '/images/models/ny-010-1.jpg',
      '/images/models/ny-010-2.jpg',
    ],
    description: {
      'zh-CN': `美国纽约 新人开  留学生
                  176CM 胸C
                  只开白天 晚上9点前
                  提前预约 不接急单`,
      'zh-TW': `美國紐約 新人開  留學生
                  176CM 胸C
                  只開白天 晚上9點前
                  提前預約 不接急單`,
      'en': `New York, USA, newcomer, international student
                  176CM, C cup
                  Daytime only, before 9 PM
                  Advance booking required, no rush orders`,
      'ko': `미국 뉴욕, 신인, 유학생
                  176CM, C컵
                  낮에만, 저녁 9시 전
                  사전 예약 필수, 급한 주문 안 받음`,
      'ja': `アメリカニューヨーク、新人、留学生
                  176CM、Cカップ
                  昼間のみ、夜9時前
                  事前予約必須、急な注文は受け付けません`
    },
    city: 'newyork'
  },
  {
    id: 'ny-011',
    name: {
      'zh-CN': '纽约11号',
      'zh-TW': '紐約11號',
      'en': 'New York #11',
      'ko': '뉴욕 11호',
      'ja': 'ニューヨーク11号'
    },
    mainImage: '/images/models/ny-011-3.jpg',
    images: [
      '/images/models/ny-011-1.jpg',
      '/images/models/ny-011-2.jpg',
      '/images/models/ny-011-3.jpg',
      '/images/models/ny-011-4.jpg',
      '/images/models/ny-011-5.jpg',
      '/images/models/ny-011-6.jpg',
    ],
    description: {
      'zh-CN': `真人真照
                  167身高 胸D  可盐可甜
                  真实留学生可验证 英语流利
                  可翻译`,
      'zh-TW': `真人真照
                  167身高 胸D  可鹽可甜
                  真實留學生可驗證 英語流利
                  可翻譯`,
      'en': `Real person, real photos
                  167cm height, D cup, can be sweet or salty
                  Real international student, verifiable, fluent English
                  Can translate`,
      'ko': `실제 인물, 실제 사진
                  167cm 키, D컵, 달콤하거나 짭짤할 수 있음
                  실제 유학생, 검증 가능, 영어 유창함
                  번역 가능`,
      'ja': `実在人物、実写
                  167cm身長、Dカップ、甘くも塩辛くも
                  実在留学生、検証可能、英語流暢
                  翻訳可能`
    },
    city: 'newyork'
  },
  {
    id: 'ny-012',
        name: {
      'zh-CN': '纽约12号',
      'zh-TW': '紐約12號',
      'en': 'New York #12',
      'ko': '뉴욕 12호',
      'ja': 'ニューヨーク12号'
    },
    mainImage: '/images/models/ny-012-4.jpg',
    images: [
      '/images/models/ny-012-1.jpg',
      '/images/models/ny-012-2.jpg',
      '/images/models/ny-012-3.jpg',
      '/images/models/ny-012-4.jpg',
    ],
        description: {
      'zh-CN': `纽约  极品学生99年 身高168 92Kg
                  真人`,
      'zh-TW': `紐約  極品學生99年 身高168 92Kg
                  真人`,
      'en': `New York premium student, born 1999, height 168cm, 92kg
                  Real person`,
      'ko': `뉴욕 프리미엄 학생, 99년생, 키 168cm, 92kg
                  실존 인물`,
      'ja': `ニューヨークプレミアム学生、99年生まれ、身長168cm、92kg
                  実在人物`
    },
    city: 'newyork'
  },
  {
    id: 'ny-013',
        name: {
      'zh-CN': '纽约13号',
      'zh-TW': '紐約13號',
      'en': 'New York #13',
      'ko': '뉴욕 13호',
      'ja': 'ニューヨーク13号'
    },
    mainImage: '/images/models/ny-013-4.jpg',
    images: [
      '/images/models/ny-013-1.jpg',
      '/images/models/ny-013-2.jpg',
      '/images/models/ny-013-3.jpg',
      '/images/models/ny-013-4.jpg',
      '/images/models/ny-013-5.jpg',
      '/images/models/ny-013-6.jpg',
    ],
        description: {
      'zh-CN': `纽约 真实96年 白羊座 净高166胸D罩杯 体重90斤 纯天然无整容 笑容甜美 气质绝佳 谈吐优雅 性格温柔开朗 皮肤嫩光滑 真实平面模特 身材苗条 比例好
                  极品 极品 极品  保证能喜欢`,
      'zh-TW': `紐約 真實96年 白羊座 淨高166胸D罩杯 體重90斤 純天然無整容 笑容甜美 氣質絕佳 談吐優雅 性格溫柔開朗 皮膚嫩光滑 真實平面模特 身材苗條 比例好
                  極品 極品 極品  保證能喜歡`,
      'en': `New York real 1996, Aries, net height 166cm, D cup, 90 pounds, all natural no surgery, sweet smile, excellent temperament, elegant conversation, gentle and cheerful personality, smooth skin, real fashion model, slim figure, perfect proportions
                  Premium, premium, premium, guaranteed to like`,
      'ko': `뉴욕 실존 96년생, 양자리, 순키 166cm, D컵, 90근, 완전 천연 무수술, 달콤한 미소, 뛰어난 기질, 우아한 대화, 부드럽고 밝은 성격, 매끄러운 피부, 실존 패션 모델, 날씬한 몸매, 완벽한 비율
                  프리미엄, 프리미엄, 프리미엄, 좋아할 것 보장`,
      'ja': `ニューヨーク実在96年生まれ、牡羊座、純身長166cm、Dカップ、90斤、完全天然無整形、甘い笑顔、絶佳な気質、優雅な会話、優しく明るい性格、滑らかな肌、実在ファッションモデル、スリムな体型、完璧な比率
                  プレミアム、プレミアム、プレミアム、気に入る保証`
    },
    city: 'newyork'
  },
  {
    id: 'ny-014',
        name: {
      'zh-CN': '纽约14号',
      'zh-TW': '紐約14號',
      'en': 'New York #14',
      'ko': '뉴욕 14호',
      'ja': 'ニューヨーク14号'
    },
    mainImage: '/images/models/ny-014-5.jpg',
    images: [
      '/images/models/ny-014-1.jpg',
      '/images/models/ny-014-2.jpg',
      '/images/models/ny-014-3.jpg',
      '/images/models/ny-014-4.jpg',
      '/images/models/ny-014-5.jpg',
      '/images/models/ny-014-6.jpg',
    ],
        description: {
      'zh-CN': `170天然D++，皮肤白嫩，丰胸肥臀，大长腿，身材火辣，气质高挑，好懂事 接受各种调教`,
      'zh-TW': `170天然D++，皮膚白嫩，豐胸肥臀，大長腿，身材火辣，氣質高挑，好懂事 接受各種調教`,
      'en': `170cm natural D++, fair and tender skin, full bust and hips, long legs, hot figure, tall and elegant, well-behaved, accepts various training`,
      'ko': `170cm 천연 D++, 하얗고 부드러운 피부, 풍만한 가슴과 엉덩이, 긴 다리, 핫한 몸매, 키 크고 우아함, 예의 바름, 다양한 훈련 수용`,
      'ja': `170cm天然D++、白くて柔らかい肌、豊満な胸とお尻、長い脚、ホットな体型、背が高くて優雅、お行儀が良い、様々な調教を受け入れる`
    },
    city: 'newyork'
  },
  {
    id: 'ny-015',
        name: {
      'zh-CN': '纽约15号',
      'zh-TW': '紐約15號',
      'en': 'New York #15',
      'ko': '뉴욕 15호',
      'ja': 'ニューヨーク15号'
    },
    mainImage: '/images/models/ny-015-6.jpg',
    images: [
      '/images/models/ny-015-1.jpg',
      '/images/models/ny-015-2.jpg',
      '/images/models/ny-015-3.jpg',
      '/images/models/ny-015-4.jpg',
      '/images/models/ny-015-5.jpg',
      '/images/models/ny-015-6.jpg',
    ],
        description: {
      'zh-CN': `美国纽约：00后165D cup你的初恋小女友性格
                  温柔可爱可欲可纯天然0整`,
      'zh-TW': `美國紐約：00後165D cup你的初戀小女友性格
                  溫柔可愛可欲可純天然0整`,
      'en': `New York, USA: 00s generation 165cm D cup, your first love girlfriend personality
                  Gentle, cute, can be seductive or pure, all natural, no surgery`,
      'ko': `미국 뉴욕: 00년대생 165cm D컵, 당신의 첫사랑 여자친구 성격
                  부드럽고 귀엽고, 유혹적이거나 순수할 수 있고, 완전 천연, 무수술`,
      'ja': `アメリカニューヨーク：00年代生まれ165cm Dカップ、あなたの初恋彼女の性格
                  優しく可愛く、誘惑的にも純粋にも、完全天然、無整形`
    },
    city: 'newyork'
  },
  {
    id: 'ny-016',
        name: {
      'zh-CN': '纽约16号',
      'zh-TW': '紐約16號',
      'en': 'New York #16',
      'ko': '뉴욕 16호',
      'ja': 'ニューヨーク16号'
    },
    mainImage: '/images/models/ny-016-1.jpg',
    images: [
      '/images/models/ny-016-1.jpg',
      '/images/models/ny-016-2.jpg',
      '/images/models/ny-016-3.jpg',
    ],
        description: {
      'zh-CN': `留学生首秀 167D 新人 高素质！ 眼神清澈 外甜内sao 待K如男友 超级耐心服务 质量超高`,
      'zh-TW': `留學生首秀 167D 新人 高素質！ 眼神清澈 外甜內sao 待K如男友 超級耐心服務 質量超高`,
      'en': `International student debut, 167cm D cup, newcomer, high quality! Clear eyes, sweet outside seductive inside, treats you like boyfriend, super patient service, ultra high quality`,
      'ko': `유학생 데뷔, 167cm D컵, 신인, 고품질! 맑은 눈, 밖으로는 달콤하고 안으로는 섹시, 남자친구처럼 대우, 초인내심 서비스, 초고품질`,
      'ja': `留学生デビュー、167cm Dカップ、新人、高品質！澄んだ瞳、外は甘く内はセクシー、彼氏のように扱う、超忍耐強いサービス、超高品質`
    },
    city: 'newyork'
  },
  {
    id: 'ny-017',
        name: {
      'zh-CN': '纽约17号',
      'zh-TW': '紐約17號',
      'en': 'New York #17',
      'ko': '뉴욕 17호',
      'ja': 'ニューヨーク17号'
    },
    mainImage: '/images/models/ny-017-2.jpg',
    images: [
      '/images/models/ny-017-1.jpg',
      '/images/models/ny-017-2.jpg',
      '/images/models/ny-017-3.jpg',
      '/images/models/ny-017-4.jpg',
    ],
        description: {
      'zh-CN': `极品女神 身高：162cm 体重： 45kg 罩杯：真胸D 年龄：22岁 性格：温柔乖巧 身材火辣，前凸后翘，皮肤嫩滑 性感妩媚，声音甜美 服务周到，可解锁各种姿势 欢迎实力高端预约`,
      'zh-TW': `極品女神 身高：162cm 體重： 45kg 罩杯：真胸D 年齡：22歲 性格：溫柔乖巧 身材火辣，前凸後翹，皮膚嫩滑 性感嫵媚，聲音甜美 服務周到，可解鎖各種姿勢 歡迎實力高端預約`,
      'en': `Premium goddess, height: 162cm, weight: 45kg, cup: real D, age: 22, personality: gentle and obedient, hot figure, curvy, smooth skin, sexy and charming, sweet voice, attentive service, can unlock various positions, welcome high-end appointments`,
      'ko': `프리미엄 여신, 키: 162cm, 몸무게: 45kg, 컵: 진짜 D, 나이: 22, 성격: 부드럽고 순종적, 핫한 몸매, 볼륨감, 매끄러운 피부, 섹시하고 매력적, 달콤한 목소리, 세심한 서비스, 다양한 자세 해금 가능, 고급 예약 환영`,
      'ja': `プレミアム女神、身長：162cm、体重：45kg、カップ：本物D、年齢：22歳、性格：優しく従順、ホットな体型、ボリューム感、滑らかな肌、セクシーで魅力的、甘い声、丁寧なサービス、様々なポーズアンロック可能、高級予約歓迎`
    },
    city: 'newyork'
  },
  {
    id: 'ny-018',
        name: {
      'zh-CN': '纽约18号',
      'zh-TW': '紐約18號',
      'en': 'New York #18',
      'ko': '뉴욕 18호',
      'ja': 'ニューヨーク18号'
    },
    mainImage: '/images/models/ny-018-2.jpg',
    images: [
      '/images/models/ny-018-1.jpg',
      '/images/models/ny-018-2.jpg',
      '/images/models/ny-018-3.jpg',
      '/images/models/ny-018-4.jpg',
      '/images/models/ny-018-5.jpg',
    ],
        description: {
      'zh-CN': `兼职美女22岁 天然0整 165 cm   胸C  白嫩皮肤 刚刚下海  难得的天然美女 清纯`,
      'zh-TW': `兼職美女22歲 天然0整 165 cm   胸C  白嫩皮膚 剛剛下海  難得的天然美女 清純`,
      'en': `Part-time beauty 22 years old, all natural no surgery, 165cm, C cup, fair and tender skin, just started, rare natural beauty, pure`,
      'ko': `파트타임 미녀 22세, 완전 천연 무수술, 165cm, C컵, 하얗고 부드러운 피부, 방금 시작, 희귀한 천연 미녀, 순수함`,
      'ja': `パートタイム美女22歳、完全天然無整形、165cm、Cカップ、白くて柔らかい肌、始めたばかり、珍しい天然美女、清純`
    },
    city: 'newyork'
  },
  {
    id: 'ny-019',
        name: {
      'zh-CN': '纽约19号',
      'zh-TW': '紐約19號',
      'en': 'New York #19',
      'ko': '뉴욕 19호',
      'ja': 'ニューヨーク19号'
    },
    mainImage: '/images/models/ny-019-4.jpg',
    images: [
      '/images/models/ny-019-1.jpg',
      '/images/models/ny-019-2.jpg',
      '/images/models/ny-019-3.jpg',
      '/images/models/ny-019-4.jpg',
    ],
        description: {
      'zh-CN': `极品极品，纯物！旧金山极品新人身高：176 体重49，第一家百万网红小于雯本人，百万粉丝，可验，纽约留学一段时日，兼职一月，过时不候！ ?满纯欲风，极品，有差可退，`,
      'zh-TW': `極品極品，純物！舊金山極品新人身高：176 體重49，第一家百萬網紅小於雯本人，百萬粉絲，可驗，紐約留學一段時日，兼職一月，過時不候！ ?滿純欲風，極品，有差可退，`,
      'en': `Premium premium, pure! San Francisco premium newcomer height: 176cm, weight 49kg, first million-follower influencer Yu Wen herself, million followers, verifiable, studied in New York for a period, part-time for one month, no waiting! Full pure desire style, premium, refund if not satisfied`,
      'ko': `프리미엄 프리미엄, 순수! 샌프란시스코 프리미엄 신인 키: 176cm, 몸무게 49kg, 첫 번째 백만 팔로워 인플루언서 위원 본인, 백만 팔로워, 검증 가능, 뉴욕에서 한동안 유학, 한 달 파트타임, 기다리지 않음! 가득한 순수 욕망 스타일, 프리미엄, 만족하지 못하면 환불`,
      'ja': `プレミアムプレミアム、純粋！サンフランシスコプレミアム新人身長：176cm、体重49kg、最初の百万フォロワーインフルエンサー于雯本人、百万フォロワー、検証可能、ニューヨークで一時期留学、一ヶ月パートタイム、待たない！満ちた純欲スタイル、プレミアム、満足しなければ返金`
    },
    city: 'newyork'
  },
  {
    id: 'ny-020',
        name: {
      'zh-CN': '纽约20号',
      'zh-TW': '紐約20號',
      'en': 'New York #20',
      'ko': '뉴욕 20호',
      'ja': 'ニューヨーク20号'
    },
    mainImage: '/images/models/ny-020-4.jpg',
    images: [
      '/images/models/ny-020-1.jpg',
      '/images/models/ny-020-2.jpg',
      '/images/models/ny-020-3.jpg',
      '/images/models/ny-020-4.jpg',
    ],
        description: {
      'zh-CN': `新人 170E 流利英语日语 高学历`,
      'zh-TW': `新人 170E 流利英語日語 高學歷`,
      'en': `Newcomer 170cm E cup, fluent English and Japanese, high education`,
      'ko': `신인 170cm E컵, 영어와 일본어 유창함, 고학력`,
      'ja': `新人170cm Eカップ、英語と日本語流暢、高学歴`
    },
    city: 'newyork'
  },
  {
    id: 'ny-021',
        name: {
      'zh-CN': '纽约21号',
      'zh-TW': '紐約21號',
      'en': 'New York #21',
      'ko': '뉴욕 21호',
      'ja': 'ニューヨーク21号'
    },
    mainImage: '/images/models/ny-021-1.jpg',
    images: [
      '/images/models/ny-021-1.jpg',
      '/images/models/ny-021-2.jpg',
      '/images/models/ny-021-3.jpg',
      '/images/models/ny-021-4.jpg',
    ],
        description: {
      'zh-CN': `纽约 169E 网红小姐姐 纯天然 白白嫩嫩`,
      'zh-TW': `紐約 169E 網紅小姐姐 純天然 白白嫩嫩`,
      'en': `New York 169cm E cup, internet celebrity beauty, all natural, fair and tender`,
      'ko': `뉴욕 169cm E컵, 인터넷 셀럽 미녀, 완전 천연, 하얗고 부드러움`,
      'ja': `ニューヨーク169cm Eカップ、ネットセレブ美女、完全天然、白くて柔らかい`
    },
    city: 'newyork'
  },
  {
    id: 'ny-022',
        name: {
      'zh-CN': '纽约22号',
      'zh-TW': '紐約22號',
      'en': 'New York #22',
      'ko': '뉴욕 22호',
      'ja': 'ニューヨーク22号'
    },
    mainImage: '/images/models/ny-022-4.jpg',
    images: [
      '/images/models/ny-022-1.jpg',
      '/images/models/ny-022-2.jpg',
      '/images/models/ny-022-3.jpg',
      '/images/models/ny-022-4.jpg',
    ],
        description: {
      'zh-CN': `流星 170E 身材凹凸有致 高学历 颜值在线 纯天然`,
      'zh-TW': `流星 170E 身材凹凸有致 高學歷 顏值在線 純天然`,
      'en': `Meteor 170cm E cup, curvy figure, high education, beautiful appearance, all natural`,
      'ko': `유성 170cm E컵, 볼륨감 있는 몸매, 고학력, 아름다운 외모, 완전 천연`,
      'ja': `流星170cm Eカップ、ボリューム感のある体型、高学歴、美しい外見、完全天然`
    },
    city: 'newyork'
  },
  {
    id: 'ny-023',
        name: {
      'zh-CN': '纽约23号',
      'zh-TW': '紐約23號',
      'en': 'New York #23',
      'ko': '뉴욕 23호',
      'ja': 'ニューヨーク23号'
    },
    mainImage: '/images/models/ny-023-1.jpg',
    images: [
      '/images/models/ny-023-1.jpg',
      '/images/models/ny-023-2.jpg',
      '/images/models/ny-023-3.jpg',
      '/images/models/ny-023-4.jpg',
    ],
                      description: {
      'zh-CN': `纽约新人 真实留学生 高素质 清纯无整 可纯可御 完美驾驭各种风格 极品短发 童颜巨乳 巴掌脸 超精致五官 173净 真实E 99年 大熊 蜜桃臀 超级细腰 巨白 ～`,
      'zh-TW': `紐約新人 真實留學生 高素質 清純無整 可純可御 完美駕馭各種風格 極品短髮 童顏巨乳 巴掌臉 超精緻五官 173淨 真實E 99年 大熊 蜜桃臀 超級細腰 巨白 ～`,
      'en': `New York newcomer, real international student, high quality, pure no surgery, can be pure or mature, perfectly handles all styles, premium short hair, baby face big breasts, small face, super delicate features, 173cm net height, real E cup, born 1999, big breasts, peach butt, super slim waist, extremely white~`,
      'ko': `뉴욕 신인, 진짜 유학생, 고품질, 순수 성형 없음, 순수하거나 성숙할 수 있음, 모든 스타일 완벽 소화, 프리미엄 단발, 동안 거유, 작은 얼굴, 초정교한 이목구비, 173cm 순키, 진짜 E컵, 99년생, 큰 가슴, 복숭아 엉덩이, 초슬림 허리, 극도로 하얀~`,
      'ja': `ニューヨーク新人、本当の留学生、高品質、清純整形なし、純粋にも成熟にも、あらゆるスタイル完璧にこなす、プレミアムショートヘア、童顔巨乳、小顔、超繊細な顔立ち、173cm純身長、本物Eカップ、99年生まれ、大きなおっぱい、桃のお尻、超細いウエスト、超白い~`
    },
    city: 'newyork'
  },
  {
    id: 'ny-024',
        name: {
      'zh-CN': '纽约24号',
      'zh-TW': '紐約24號',
      'en': 'New York #24',
      'ko': '뉴욕 24호',
      'ja': 'ニューヨーク24号'
    },
    mainImage: '/images/models/ny-024-2.jpg',
    images: [
      '/images/models/ny-024-1.jpg',
      '/images/models/ny-024-2.jpg',
      '/images/models/ny-024-3.jpg',
      '/images/models/ny-024-4.jpg',
    ],
                      description: {
      'zh-CN': `新人 170E 高大白 欧美身材 前凸后翘类型 喜欢瘦小的勿扰`,
      'zh-TW': `新人 170E 高大白 歐美身材 前凸後翹類型 喜歡瘦小的勿擾`,
      'en': `Newcomer 170cm E cup, tall and white, Western figure, curvy type, those who prefer petite need not apply`,
      'ko': `신인 170cm E컵, 키 크고 하얀, 서양형 몸매, 볼륨감 있는 타입, 작은 것을 선호하는 분은 사절`,
      'ja': `新人170cm Eカップ、背が高く白い、欧米体型、ボリューム感のあるタイプ、小柄を好む方はお断り`
    },
    city: 'newyork'
  },
  {
    id: 'ny-025',
        name: {
      'zh-CN': '纽约25号',
      'zh-TW': '紐約25號',
      'en': 'New York #25',
      'ko': '뉴욕 25호',
      'ja': 'ニューヨーク25号'
    },
    mainImage: '/images/models/ny-025-1.jpg',
    images: [
      '/images/models/ny-025-1.jpg',
      '/images/models/ny-025-2.jpg',
      '/images/models/ny-025-3.jpg',
    ],
        description: {
      'zh-CN': `Hannah99年 身高163 胸c`,
      'zh-TW': `Hannah99年 身高163 胸c`,
      'en': `Hannah born 1999, height 163cm, C cup`,
      'ko': `한나 99년생, 키 163cm, C컵`,
      'ja': `ハンナ99年生まれ、身長163cm、Cカップ`
    },
    city: 'newyork'
  },
  {
    id: 'ny-026',
        name: {
      'zh-CN': '纽约26号',
      'zh-TW': '紐約26號',
      'en': 'New York #26',
      'ko': '뉴욕 26호',
      'ja': 'ニューヨーク26号'
    },
    mainImage: '/images/models/ny-026-4.jpg',
    images: [
      '/images/models/ny-026-1.jpg',
      '/images/models/ny-026-2.jpg',
      '/images/models/ny-026-3.jpg',
      '/images/models/ny-026-4.jpg',
      '/images/models/ny-026-5.jpg',
    ],
        description: {
      'zh-CN': `纽约 洛杉矶 新人?娇小可爱小宝贝 白皙皮肤 166 c 00年，留学生，短暂兼职！`,
      'zh-TW': `紐約 洛杉磯 新人?嬌小可愛小寶貝 白皙皮膚 166 c 00年，留學生，短暫兼職！`,
      'en': `New York, Los Angeles newcomer? Petite cute baby, fair skin, 166cm C cup, born 2000, international student, short-term part-time!`,
      'ko': `뉴욕, 로스앤젤레스 신인? 작고 귀여운 베이비, 하얀 피부, 166cm C컵, 00년생, 유학생, 단기 파트타임!`,
      'ja': `ニューヨーク、ロサンゼルス新人？小柄で可愛いベイビー、白い肌、166cm Cカップ、00年生まれ、留学生、短期パートタイム！`
    },
    city: 'newyork'
  },
  {
    id: 'ny-027',
        name: {
      'zh-CN': '纽约27号',
      'zh-TW': '紐約27號',
      'en': 'New York #27',
      'ko': '뉴욕 27호',
      'ja': 'ニューヨーク27号'
    },
    mainImage: '/images/models/ny-027-2.jpg',
    images: [
      '/images/models/ny-027-1.jpg',
      '/images/models/ny-027-2.jpg',
      '/images/models/ny-027-3.jpg',
      '/images/models/ny-027-4.jpg',
      '/images/models/ny-027-5.jpg',
    ],
        description: {
      'zh-CN': `纽约独家一手资源 独家新闻 纯新人 175c 大长腿 御姐范 真人真照 高级脸 可黑丝可制服 留学生`,
      'zh-TW': `紐約獨家一手資源 獨家新聞 純新人 175c 大長腿 御姐范 真人真照 高級臉 可黑絲可制服 留學生`,
      'en': `New York exclusive first-hand resource, exclusive news, pure newcomer, 175cm C cup, long legs, mature lady style, real person real photos, high-class face, can wear black stockings or uniforms, international student`,
      'ko': `뉴욕 독점 일차 자원, 독점 뉴스, 순수 신인, 175cm C컵, 긴 다리, 누나 스타일, 실제 사람 실제 사진, 고급스러운 얼굴, 검은 스타킹이나 유니폼 가능, 유학생`,
      'ja': `ニューヨーク独占一次資源、独占ニュース、純粋新人、175cm Cカップ、長い脚、姉御風、実人実写真、高級な顔、黒ストッキングや制服可能、留学生`
    },
    city: 'newyork'
  },
  {
    id: 'ny-028',
        name: {
      'zh-CN': '纽约28号',
      'zh-TW': '紐約28號',
      'en': 'New York #28',
      'ko': '뉴욕 28호',
      'ja': 'ニューヨーク28号'
    },
    mainImage: '/images/models/ny-028-6.jpg',
    images: [
      '/images/models/ny-028-1.jpg',
      '/images/models/ny-028-2.jpg',
      '/images/models/ny-028-3.jpg',
      '/images/models/ny-028-4.jpg',
      '/images/models/ny-028-5.jpg',
      '/images/models/ny-028-6.jpg',
    ],
        description: {
      'zh-CN': `纽约 真实99年 留学生 净高168胸D罩杯 体重90斤 纯天然无整容 笑容甜美 气质绝佳 谈吐优雅 性格温柔开朗 皮肤嫩光滑身材苗条 比例好`,
      'zh-TW': `紐約 真實99年 留學生 淨高168胸D罩杯 體重90斤 純天然無整容 笑容甜美 氣質絕佳 談吐優雅 性格溫柔開朗 皮膚嫩光滑身材苗條 比例好`,
      'en': `New York, real 1999-born international student, net height 168cm D cup, weight 90 pounds, pure natural no surgery, sweet smile, excellent temperament, elegant conversation, gentle and cheerful personality, smooth tender skin slim figure, good proportions`,
      'ko': `뉴욕, 진짜 99년생 유학생, 순키 168cm D컵, 체중 90근, 순천연 성형 없음, 달콤한 미소, 훌륭한 기질, 우아한 대화, 부드럽고 쾌활한 성격, 부드러운 순한 피부 슬림한 몸매, 좋은 비율`,
      'ja': `ニューヨーク、本当の99年生まれ留学生、純身長168cm Dカップ、体重90斤、純天然整形なし、甘い笑顔、絶佳な気質、優雅な会話、優しく明るい性格、滑らかで柔らかい肌スリムな体型、良いプロポーション`
    },
    city: 'newyork'
  },
  {
    id: 'ny-029',
        name: {
      'zh-CN': '纽约29号',
      'zh-TW': '紐約29號',
      'en': 'New York #29',
      'ko': '뉴욕 29호',
      'ja': 'ニューヨーク29号'
    },
    mainImage: '/images/models/ny-029-3.jpg',
    images: [
      '/images/models/ny-029-1.jpg',
      '/images/models/ny-029-2.jpg',
      '/images/models/ny-029-3.jpg',
      '/images/models/ny-029-4.jpg',
    ],
        description: {
      'zh-CN': `美国 纽约新人圈外兼职留学生 身高/168胸围/C  皮肤雪白 一次牵手 回味无穷`,
      'zh-TW': `美國 紐約新人圈外兼職留學生 身高/168胸圍/C  皮膚雪白 一次牽手 回味無窮`,
      'en': `USA, New York newcomer outside circle part-time international student, height 168cm, bust C cup, snow white skin, one hand-holding experience, unforgettable`,
      'ko': `미국, 뉴욕 신인 외부 서클 파트타임 유학생, 키 168cm, 가슴둘레 C컵, 눈처럼 하얀 피부, 한 번의 손잡기, 잊을 수 없음`,
      'ja': `アメリカ、ニューヨーク新人外部サークルパートタイム留学生、身長168cm、バストCカップ、雪のように白い肌、一度の手つなぎ、後味が尽きない`
    },
    city: 'newyork'
  },
  {
    id: 'ny-030',
        name: {
      'zh-CN': '纽约30号',
      'zh-TW': '紐約30號',
      'en': 'New York #30',
      'ko': '뉴욕 30호',
      'ja': 'ニューヨーク30号'
    },
    mainImage: '/images/models/ny-030-3.jpg',
    images: [
      '/images/models/ny-030-1.jpg',
      '/images/models/ny-030-2.jpg',
      '/images/models/ny-030-3.jpg',
      '/images/models/ny-030-4.jpg',
    ],
        description: {
      'zh-CN': `美国 纽约学生兼职 服务好 有耐心 ?身高170春天然c杯?45g ?99年甜美御?舞蹈??健美瑜伽`,
      'zh-TW': `美國 紐約學生兼職 服務好 有耐心 ?身高170春天然c杯?45g ?99年甜美御?舞蹈??健美瑜伽`,
      'en': `USA, New York student part-time, good service, patient, height 170cm natural C cup, 45kg, born 1999 sweet mature, dance and fitness yoga`,
      'ko': `미국, 뉴욕 학생 파트타임, 좋은 서비스, 인내심, 키 170cm 천연 C컵, 45kg, 99년생 달콤한 성숙함, 댄스와 피트니스 요가`,
      'ja': `アメリカ、ニューヨーク学生パートタイム、良いサービス、忍耐強く、身長170cm天然Cカップ、45kg、99年生まれ甘い成熟、ダンスとフィットネスヨガ`
    },
    city: 'newyork'
  },
  {
    id: 'ny-031',
        name: {
      'zh-CN': '纽约31号',
      'zh-TW': '紐約31號',
      'en': 'New York #31',
      'ko': '뉴욕 31호',
      'ja': 'ニューヨーク31号'
    },
    mainImage: '/images/models/ny-031-4.jpg',
    images: [
      '/images/models/ny-031-1.jpg',
      '/images/models/ny-031-2.jpg',
      '/images/models/ny-031-3.jpg',
      '/images/models/ny-031-4.jpg',
    ],
        description: {
      'zh-CN': `01年新人留学生  34D 165cm 爱好· 滑雪 画画 射击`,
      'zh-TW': `01年新人留學生  34D 165cm 愛好· 滑雪 畫畫 射擊`,
      'en': `2001-born newcomer international student, 34D, 165cm, hobbies: skiing, painting, shooting`,
      'ko': `01년생 신인 유학생, 34D, 165cm, 취미: 스키, 그림, 사격`,
      'ja': `01年生まれ新人留学生、34D、165cm、趣味：スキー、絵画、射撃`
    },
    city: 'newyork'
  },
  {
    id: 'ny-032',
        name: {
      'zh-CN': '纽约32号',
      'zh-TW': '紐約32號',
      'en': 'New York #32',
      'ko': '뉴욕 32호',
      'ja': 'ニューヨーク32号'
    },
    mainImage: '/images/models/ny-032-2.jpg',
    images: [
      '/images/models/ny-032-1.jpg',
      '/images/models/ny-032-2.jpg',
      '/images/models/ny-032-3.jpg',
      '/images/models/ny-032-4.jpg',
    ],
        description: {
      'zh-CN': `新人 🐝 173D ·超棒身材🥰 ·超好的女友性格🥰 全美可飞`,
      'zh-TW': `新人 🐝 173D ·超棒身材🥰 ·超好的女友性格🥰 全美可飛`,
      'en': `Newcomer 🐝 173cm D cup ·Amazing figure🥰 ·Super good girlfriend personality🥰 Can fly anywhere in US`,
      'ko': `신인 🐝 173cm D컵 ·완벽한 몸매🥰 ·완벽한 여자친구 성격🥰 전미 공수 가능`,
      'ja': `新人🐝173cm Dカップ·素晴らしい体型🥰·完璧な彼女性格🥰全米空輸可能`
    },
    city: 'newyork'
  },
  {
    id: 'ny-033',
        name: {
      'zh-CN': '纽约33号',
      'zh-TW': '紐約33號',
      'en': 'New York #33',
      'ko': '뉴욕 33호',
      'ja': 'ニューヨーク33号'
    },
    mainImage: '/images/models/ny-033-1.jpg',
    images: [
      '/images/models/ny-033-1.jpg',
      '/images/models/ny-033-2.jpg',
      '/images/models/ny-033-3.jpg',
    ],
        description: {
      'zh-CN': `美国 纽约167D留学生兼职短开 活泼可爱 知性大方 不催不事 嘴甜好 三點粉嫩 皮肤雪白 提前预约 不接急单`,
      'zh-TW': `美國 紐約167D留學生兼職短開 活潑可愛 知性大方 不催不事 嘴甜好 三點粉嫩 皮膚雪白 提前預約 不接急單`,
      'en': `USA, New York 167cm D cup international student part-time short stay, lively and cute, intelligent and generous, no rush no trouble, sweet talk, three points pink tender, snow white skin, advance booking, no emergency orders`,
      'ko': `미국, 뉴욕 167cm D컵 유학생 파트타임 단기, 활발하고 귀여움, 지적이고 관대함, 서두르지 않고 까다롭지 않음, 달콤한 말, 세 점 분홍 부드러움, 눈처럼 하얀 피부, 사전 예약, 긴급 주문 불가`,
      'ja': `アメリカ、ニューヨーク167cm Dカップ留学生パートタイム短期、活発で可愛い、知的で寛容、急がせず面倒をかけない、甘い言葉、三点ピンク柔らか、雪のように白い肌、事前予約、緊急注文不可`
    },
    city: 'newyork'
  },
  {
    id: 'ny-034',
        name: {
      'zh-CN': '纽约34号',
      'zh-TW': '紐約34號',
      'en': 'New York #34',
      'ko': '뉴욕 34호',
      'ja': 'ニューヨーク34号'
    },
    mainImage: '/images/models/ny-034-3.jpg',
    images: [
      '/images/models/ny-034-1.jpg',
      '/images/models/ny-034-2.jpg',
      '/images/models/ny-034-3.jpg',
      '/images/models/ny-034-4.jpg',
    ],
        description: {
      'zh-CN': `纽约新人极品，170E，00年！留学生‍，🉑盐🉑甜，🉑解锁各种姿势！`,
      'zh-TW': `紐約新人極品，170E，00年！留學生‍，🉑鹽🉑甜，🉑解鎖各種姿勢！`,
      'en': `New York newcomer premium, 170cm E cup, born 2000! International student‍, 🉑sassy🉑sweet, 🉑unlock all positions!`,
      'ko': `뉴욕 신인 프리미엄, 170cm E컵, 00년생! 유학생‍, 🉑시크🉑달콤, 🉑모든 자세 해금!`,
      'ja': `ニューヨーク新人プレミアム、170cm Eカップ、00年生まれ！留学生‍、🉑塩🉑甘、🉑全ポーズアンロック！`
    },
    city: 'newyork'
  },
  {
    id: 'ny-035',
        name: {
      'zh-CN': '纽约35号',
      'zh-TW': '紐約35號',
      'en': 'New York #35',
      'ko': '뉴욕 35호',
      'ja': 'ニューヨーク35号'
    },
    mainImage: '/images/models/ny-035-1.jpg',
    images: [
      '/images/models/ny-035-1.jpg',
      '/images/models/ny-035-2.jpg',
      '/images/models/ny-035-3.jpg',
      '/images/models/ny-035-4.jpg',
      '/images/models/ny-035-5.jpg',
    ],
        description: {
      'zh-CN': `纽约极品留学生 03 本人真实照片 165 92 d`,
      'zh-TW': `紐約極品留學生 03 本人真實照片 165 92 d`,
      'en': `New York premium international student, born 2003, real personal photos, 165cm, 92 pounds, D cup`,
      'ko': `뉴욕 프리미엄 유학생, 03년생, 실제 개인 사진, 165cm, 92파운드, D컵`,
      'ja': `ニューヨークプレミアム留学生、03年生まれ、実人実写真、165cm、92ポンド、Dカップ`
    },
    city: 'newyork'
  },
  {
    id: 'ny-036',
        name: {
      'zh-CN': '纽约36号',
      'zh-TW': '紐約36號',
      'en': 'New York #36',
      'ko': '뉴욕 36호',
      'ja': 'ニューヨーク36号'
    },
    mainImage: '/images/models/ny-036-3.jpg',
    images: [
      '/images/models/ny-036-1.jpg',
      '/images/models/ny-036-2.jpg',
      '/images/models/ny-036-3.jpg',
      '/images/models/ny-036-4.jpg',
      '/images/models/ny-036-5.jpg',
    ],
        description: {
      'zh-CN': `你的气质女友 98年170D 大长腿蜜桃臀 健身身材 洋气清秀 谈吐有素质 长期打高尔夫 工作原因身边都是女性 单身2年想出来结识下绅士的男士 目的不在赚钱 只遇有缘人`,
      'zh-TW': `你的氣質女友 98年170D 大長腿蜜桃臀 健身身材 洋氣清秀 談吐有素質 長期打高爾夫 工作原因身邊都是女性 單身2年想出來結識下紳士的男士 目的不在賺錢 只遇有緣人`,
      'en': `Your elegant girlfriend, born 1998, 170cm D cup, long legs peach butt, fitness figure, sophisticated and refined, cultured conversation, long-term golfer, work environment mostly female, single for 2 years wants to meet gentlemen, not for money, only seeking destined connections`,
      'ko': `당신의 우아한 여자친구, 98년생, 170cm D컵, 긴 다리 복숭아 엉덩이, 피트니스 몸매, 세련되고 우아함, 교양 있는 대화, 장기 골퍼, 직장 환경 대부분 여성, 2년 독신 신사분들과 만나고 싶음, 돈이 목적이 아님, 인연만 찾음`,
      'ja': `あなたの上品な彼女、98年生まれ、170cm Dカップ、長い脚桃のお尻、フィットネス体型、洗練されて上品、教養のある会話、長期ゴルファー、職場環境ほとんど女性、2年独身紳士と出会いたい、お金が目的ではなく、縁だけを求める`
    },
    city: 'newyork'
  },
  {
    id: 'ny-037',
        name: {
      'zh-CN': '纽约37号',
      'zh-TW': '紐約37號',
      'en': 'New York #37',
      'ko': '뉴욕 37호',
      'ja': 'ニューヨーク37号'
    },
    mainImage: '/images/models/ny-037-3.jpg',
    images: [
      '/images/models/ny-037-1.jpg',
      '/images/models/ny-037-2.jpg',
      '/images/models/ny-037-3.jpg',
      '/images/models/ny-037-4.jpg',
      '/images/models/ny-037-5.jpg',
      '/images/models/ny-037-6.jpg',
    ],
        description: {
      'zh-CN': `圈外极品自然款 顶级天花板 毫无风尘气 白净细腻皮肤 性格温柔可人女朋友的感觉  胸D 0整 172 真正天然脸 高素質精致小純氣質出眾`,
      'zh-TW': `圈外極品自然款 頂級天花板 毫無風塵氣 白淨細膩皮膚 性格溫柔可人女朋友的感覺  胸D 0整 172 真正天然臉 高素質精緻小純氣質出眾`,
      'en': `Outside circle premium natural style, top ceiling, no worldly aura, fair and delicate skin, gentle and lovable girlfriend personality, D cup 0 surgery, 172cm, truly natural face, high quality refined pure outstanding temperament`,
      'ko': `외부 서클 프리미엄 자연 스타일, 최고 천장, 세속적 기운 없음, 하얗고 섬세한 피부, 부드럽고 사랑스러운 여자친구 성격, D컵 0 성형, 172cm, 진짜 천연 얼굴, 고품질 정교한 순수한 뛰어난 기질`,
      'ja': `外部サークルプレミアム自然スタイル、トップ天井、世俗的な気配なし、白くて繊細な肌、優しくて愛らしい彼女性格、Dカップ0整形、172cm、本当の天然顔、高品質繊細な純粋な卓越した気質`
    },
    city: 'newyork'
  },
  {
    id: 'ny-038',
        name: {
      'zh-CN': '纽约38号',
      'zh-TW': '紐約38號',
      'en': 'New York #38',
      'ko': '뉴욕 38호',
      'ja': 'ニューヨーク38号'
    },
    mainImage: '/images/models/ny-038-6.jpg',
    images: [
      '/images/models/ny-038-1.jpg',
      '/images/models/ny-038-2.jpg',
      '/images/models/ny-038-3.jpg',
      '/images/models/ny-038-4.jpg',
      '/images/models/ny-038-5.jpg',
      '/images/models/ny-038-6.jpg',
      '/images/models/ny-038-7.jpg',
    ],
        description: {
      'zh-CN': `甜辣结合 可甜可御 高学历高素质 谈吐优雅举止大方  Age年龄/01 ·Height 身高/170 ·Weight体重/99 ·Bust 胸围/D 留学生假期兼职打工短期停留不要错过呦！`,
      'zh-TW': `甜辣結合 可甜可御 高學歷高素質 談吐優雅舉止大方  Age年齡/01 ·Height 身高/170 ·Weight體重/99 ·Bust 胸圍/D 留學生假期兼職打工短期停留不要錯過呦！`,
      'en': `Sweet and spicy combination, can be sweet or mature, high education high quality, elegant conversation graceful manners, Age 2001 ·Height 170cm ·Weight 99 pounds ·Bust D cup, international student holiday part-time work short stay don't miss out!`,
      'ko': `달콤하고 매운 조합, 달콤하거나 성숙할 수 있음, 고학력 고품질, 우아한 대화 우아한 매너, 나이 01년 ·키 170cm ·체중 99파운드 ·가슴둘레 D컵, 유학생 휴가 파트타임 일 단기 체류 놓치지 마세요!`,
      'ja': `甘辛組み合わせ、甘くも成熟も、高学歴高品質、優雅な会話優雅なマナー、年齢01年·身長170cm·体重99ポンド·バストDカップ、留学生休暇パートタイム短期滞在見逃さないでね！`
    },
    city: 'newyork'
  },
  {
    id: 'ny-039',
        name: {
      'zh-CN': '纽约39号',
      'zh-TW': '紐約39號',
      'en': 'New York #39',
      'ko': '뉴욕 39호',
      'ja': 'ニューヨーク39号'
    },
    mainImage: '/images/models/ny-039-3.jpg',
    images: [
      '/images/models/ny-039-1.jpg',
      '/images/models/ny-039-2.jpg',
      '/images/models/ny-039-3.jpg',
      '/images/models/ny-039-4.jpg',
      '/images/models/ny-039-5.jpg',
    ],
        description: {
      'zh-CN': `纽约人六月 净高172E00，肤白貌美气质优雅 ⭐真实留学生，英文流利，高学历高情商 ⭐圈外兼职女友，大长腿`,
      'zh-TW': `紐約人六月 淨高172E00，膚白貌美氣質優雅 ⭐真實留學生，英文流利，高學歷高情商 ⭐圈外兼職女友，大長腿`,
      'en': `New Yorker June, net height 172cm E cup born 2000, fair skin beautiful appearance elegant temperament ⭐Real international student, fluent English, high education high EQ ⭐Outside circle part-time girlfriend, long legs`,
      'ko': `뉴요커 준, 순키 172cm E컵 00년생, 하얀 피부 아름다운 외모 우아한 기질 ⭐진짜 유학생, 유창한 영어, 고학력 고EQ ⭐외부 서클 파트타임 여자친구, 긴 다리`,
      'ja': `ニューヨーカー6月、純身長172cm Eカップ00年生まれ、白い肌美しい外見優雅な気質⭐本当の留学生、流暢な英語、高学歴高EQ⭐外部サークルパートタイム彼女、長い脚`
    },
    city: 'newyork'
  },
  {
    id: 'ny-040',
        name: {
      'zh-CN': '纽约40号',
      'zh-TW': '紐約40號',
      'en': 'New York #40',
      'ko': '뉴욕 40호',
      'ja': 'ニューヨーク40号'
    },
    mainImage: '/images/models/ny-040-1.jpg',
    images: [
      '/images/models/ny-040-1.jpg',
      '/images/models/ny-040-2.jpg',
      '/images/models/ny-040-3.jpg',
      '/images/models/ny-040-4.jpg',
      '/images/models/ny-040-5.jpg',
      '/images/models/ny-040-6.jpg',
    ],
        description: {
      'zh-CN': `纽约新人身高165cm 肤白 真胸D杯 可爱型小女生  玩得开 态度好`,
      'zh-TW': `紐約新人身高165cm 膚白 真胸D杯 可愛型小女生  玩得開 態度好`,
      'en': `New York newcomer height 165cm, fair skin, real D cup, cute type little girl, fun to be with, good attitude`,
      'ko': `뉴욕 신인 키 165cm, 하얀 피부, 진짜 D컵, 귀여운 타입 작은 여자아이, 함께 있기 좋음, 좋은 태도`,
      'ja': `ニューヨーク新人身長165cm、白い肌、本物Dカップ、可愛いタイプの小さな女の子、一緒にいて楽しい、良い態度`
    },
    city: 'newyork'
  },
  {
    id: 'ny-041',
        name: {
      'zh-CN': '纽约41号',
      'zh-TW': '紐約41號',
      'en': 'New York #41',
      'ko': '뉴욕 41호',
      'ja': 'ニューヨーク41号'
    },
    mainImage: '/images/models/ny-041-1.jpg',
    images: [
      '/images/models/ny-041-1.jpg',
      '/images/models/ny-041-2.jpg',
      '/images/models/ny-041-3.jpg',
      '/images/models/ny-041-4.jpg',
    ],
        description: {
      'zh-CN': `纽约兼职佛系 真实土澳留学生‍ 非职业款 真实00年 天然165C 南方人 可爱带点小性感的韩系纯欲少女 性格超级好 爱撒娇 一笑眼睛弯弯的 全脸无整 可素颜出镜 三点粉 皮肤超白皙细腻 让你享受甜蜜蜜的好心情`,
      'zh-TW': `紐約兼職佛系 真實土澳留學生‍ 非職業款 真實00年 天然165C 南方人 可愛帶點小性感的韓系純欲少女 性格超級好 愛撒嬌 一笑眼睛彎彎的 全臉無整 可素顏出鏡 三點粉 皮膚超白皙細膩 讓你享受甜蜜蜜的好心情`,
      'en': `New York part-time zen style, real Australian international student‍, non-professional type, real 2000-born, natural 165cm C cup, southern girl, cute with a little sexy Korean pure desire girl, super good personality, loves to act cute, smile with curved eyes, no surgery on face, can appear without makeup, three points pink, ultra fair delicate skin, let you enjoy sweet sweet good mood`,
      'ko': `뉴욕 파트타임 선 스타일, 진짜 호주 유학생‍, 비전문 타입, 진짜 00년생, 천연 165cm C컵, 남방 여자, 귀여운 약간 섹시한 한류 순수 욕망 소녀, 완벽한 성격, 애교 부리기 좋아함, 웃으면 눈이 굽어짐, 얼굴 성형 없음, 메이크업 없이 출연 가능, 세 점 분홍, 초하얀 섬세한 피부, 달콤달콤한 좋은 기분 즐기게 해줌`,
      'ja': `ニューヨークパートタイム禅スタイル、本当のオーストラリア留学生‍、非プロタイプ、本当の00年生まれ、天然165cm Cカップ、南方の女の子、可愛くて少しセクシーな韓流純欲少女、超良い性格、甘え好き、笑うと目が曲がる、顔整形なし、素顔で出演可能、三点ピンク、超白く繊細な肌、甘い甘い良い気分を楽しませてくれる`
    },
    city: 'newyork'
  },
  {
    id: 'ny-042',
        name: {
      'zh-CN': '纽约42号',
      'zh-TW': '紐約42號',
      'en': 'New York #42',
      'ko': '뉴욕 42호',
      'ja': 'ニューヨーク42号'
    },
    mainImage: '/images/models/ny-042-2.jpg',
    images: [
      '/images/models/ny-042-1.jpg',
      '/images/models/ny-042-2.jpg',
      '/images/models/ny-042-3.jpg',
      '/images/models/ny-042-4.jpg',
      '/images/models/ny-042-5.jpg',
    ],
        description: {
      'zh-CN': `艺名：巧儿 身高：172 胸围：F（真） 体重：53kg 💕 皮肤雪白 0整容 S型身材 丰满气质大密 好不粘人 黑丝情趣诱惑 热爱高尔夫 健身 1:1女友配合度非常高 、高情商 服务超级好，能玩玩具   骚 主动 活好`,
      'zh-TW': `藝名：巧兒 身高：172 胸圍：F（真） 體重：53kg 💕 皮膚雪白 0整容 S型身材 豐滿氣質大密 好不粘人 黑絲情趣誘惑 熱愛高爾夫 健身 1:1女友配合度非常高 、高情商 服務超級好，能玩玩具   騷 主動 活好`,
      'en': `Stage name: Qiao'er, height: 172cm, bust: F (real), weight: 53kg 💕 Snow white skin, 0 surgery, S-curve figure, voluptuous temperament, not clingy, black stockings sensual temptation, loves golf, fitness, 1:1 girlfriend compatibility very high, high EQ, super good service, can play with toys, seductive, proactive, skilled`,
      'ko': `예명: 교얼, 키: 172cm, 가슴둘레: F (진짜), 체중: 53kg 💕 눈처럼 하얀 피부, 0 성형, S커브 몸매, 풍만한 기질, 집착하지 않음, 검은 스타킹 관능적 유혹, 골프 사랑, 피트니스, 1:1 여자친구 호환성 매우 높음, 고EQ, 초좋은 서비스, 장난감 가지고 놀 수 있음, 요염함, 적극적, 숙련됨`,
      'ja': `芸名：巧児、身長：172cm、バスト：F（本物）、体重：53kg💕雪のように白い肌、0整形、Sカーブ体型、豊満な気質、しつこくない、黒ストッキング官能的誘惑、ゴルフ好き、フィットネス、1:1彼女相性非常に高い、高EQ、超良いサービス、おもちゃで遊べる、妖艶、積極的、上手`
    },
    city: 'newyork'
  },
  {
    id: 'ny-043',
        name: {
      'zh-CN': '纽约43号',
      'zh-TW': '紐約43號',
      'en': 'New York #43',
      'ko': '뉴욕 43호',
      'ja': 'ニューヨーク43号'
    },
    mainImage: '/images/models/ny-043-6.jpg',
    images: [
      '/images/models/ny-043-1.jpg',
      '/images/models/ny-043-2.jpg',
      '/images/models/ny-043-3.jpg',
      '/images/models/ny-043-4.jpg',
      '/images/models/ny-043-5.jpg',
      '/images/models/ny-043-6.jpg',
    ],
        description: {
      'zh-CN': `御姐173大d，02年真实学生 超级洋气漂亮，绝对本人照片 现实中更好看，真d，超级大长腿 给你飞一样的体验`,
      'zh-TW': `御姐173大d，02年真實學生 超級洋氣漂亮，絕對本人照片 現實中更好看，真d，超級大長腿 給你飛一樣的體驗`,
      'en': `Mature lady 173cm big D cup, born 2002 real student, super sophisticated beautiful, absolutely real photos, even better looking in reality, real D cup, super long legs, gives you flying-like experience`,
      'ko': `누나 173cm 큰 D컵, 02년생 진짜 학생, 초세련 아름다움, 절대 실사진, 현실에서 더 예쁨, 진짜 D컵, 초긴 다리, 날아가는 듯한 경험 제공`,
      'ja': `姉御173cm大Dカップ、02年生まれ本当の学生、超洗練された美しさ、絶対実写真、現実でより美しい、本物Dカップ、超長い脚、飛ぶような体験を提供`
    },
    city: 'newyork'
  },
  {
    id: 'ny-044',
        name: {
      'zh-CN': '纽约44号',
      'zh-TW': '紐約44號',
      'en': 'New York #44',
      'ko': '뉴욕 44호',
      'ja': 'ニューヨーク44号'
    },
    mainImage: '/images/models/ny-044-2.jpg',
    images: [
      '/images/models/ny-044-1.jpg',
      '/images/models/ny-044-2.jpg',
      '/images/models/ny-044-3.jpg',
      '/images/models/ny-044-4.jpg',
    ],
        description: {
      'zh-CN': `00后美国留学生 162cm 48kg F(cup)保真  童颜巨乳   鲍鱼饱满多汁   服务贴心  女友感爆棚`,
      'zh-TW': `00後美國留學生 162cm 48kg F(cup)保真  童顏巨乳   鮑魚飽滿多汁   服務貼心  女友感爆棚`,
      'en': `2000s-born American international student, 162cm 48kg F cup guaranteed, baby face big breasts, plump juicy, attentive service, girlfriend feeling explosion`,
      'ko': `00년대생 미국 유학생, 162cm 48kg F컵 보장, 동안 거유, 풍만하고 촉촉함, 세심한 서비스, 여자친구 느낌 폭발`,
      'ja': `00年代生まれアメリカ留学生、162cm 48kg Fカップ保証、童顔巨乳、ふっくらジューシー、心のこもったサービス、彼女感爆発`
    },
    city: 'newyork'
  },
  {
    id: 'ny-045',
        name: {
      'zh-CN': '纽约45号',
      'zh-TW': '紐約45號',
      'en': 'New York #45',
      'ko': '뉴욕 45호',
      'ja': 'ニューヨーク45号'
    },
    mainImage: '/images/models/ny-045-4.jpg',
    images: [
      '/images/models/ny-045-1.jpg',
      '/images/models/ny-045-2.jpg',
      '/images/models/ny-045-3.jpg',
      '/images/models/ny-045-4.jpg',
    ],
        description: {
      'zh-CN': `01年 身高168 体重98斤  在美留学生 研究生在读`,
      'zh-TW': `01年 身高168 體重98斤  在美留學生 研究生在讀`,
      'en': `Born 2001, height 168cm, weight 98 pounds, international student in USA, graduate student`,
      'ko': `01년생, 키 168cm, 체중 98근, 미국 유학생, 대학원생`,
      'ja': `01年生まれ、身長168cm、体重98斤、アメリカ留学生、大学院生`
    },
    city: 'newyork'
  },
  {
    id: 'ny-046',
        name: {
      'zh-CN': '纽约46号',
      'zh-TW': '紐約46號',
      'en': 'New York #46',
      'ko': '뉴욕 46호',
      'ja': 'ニューヨーク46号'
    },
    mainImage: '/images/models/ny-046-3.jpg',
    images: [
      '/images/models/ny-046-1.jpg',
      '/images/models/ny-046-2.jpg',
      '/images/models/ny-046-3.jpg',
      '/images/models/ny-046-4.jpg',
      '/images/models/ny-046-5.jpg',
    ],
        description: {
      'zh-CN': `大学留学生 05年大一留学生 全身全脸无整 • Age：05 • Height：165 喜高勿扰 • Weight：45kg • Bust：D`,
      'zh-TW': `大學留學生 05年大一留學生 全身全臉無整 • Age：05 • Height：165 喜高勿擾 • Weight：45kg • Bust：D`,
      'en': `University international student, 2005-born freshman, no surgery on body or face • Age: 05 • Height: 165cm, prefer tall • Weight: 45kg • Bust: D`,
      'ko': `대학 유학생, 05년생 신입생, 전신 전면 성형 없음 • 나이: 05 • 키: 165cm, 키 큰 것 선호 • 체중: 45kg • 가슴둘레: D`,
      'ja': `大学留学生、05年生まれ新入生、全身全顔整形なし•年齢：05•身長：165cm、背が高いのを好む•体重：45kg•バスト：D`
    },
    city: 'newyork'
  },
  {
    id: 'ny-047',
        name: {
      'zh-CN': '纽约47号',
      'zh-TW': '紐約47號',
      'en': 'New York #47',
      'ko': '뉴욕 47호',
      'ja': 'ニューヨーク47号'
    },
    mainImage: '/images/models/ny-047-4.jpg',
    images: [
      '/images/models/ny-047-1.jpg',
      '/images/models/ny-047-2.jpg',
      '/images/models/ny-047-3.jpg',
      '/images/models/ny-047-4.jpg',
    ],
        description: {
      'zh-CN': `02年新人刚刚落地168胸C小版张柏芝`,
      'zh-TW': `02年新人剛剛落地168胸C小版張柏芝`,
      'en': `2002-born newcomer just landed, 168cm C cup, mini version Cecilia Cheung`,
      'ko': `02년생 신인 방금 도착, 168cm C컵, 미니 버전 장백지`,
      'ja': `02年生まれ新人ちょうど到着、168cm Cカップ、ミニ版張栢芝`
    },
    city: 'newyork'
  },
  {
    id: 'ny-048',
        name: {
      'zh-CN': '纽约48号',
      'zh-TW': '紐約48號',
      'en': 'New York #48',
      'ko': '뉴욕 48호',
      'ja': 'ニューヨーク48号'
    },
    mainImage: '/images/models/ny-048-1.jpg',
    images: [
      '/images/models/ny-048-1.jpg',
      '/images/models/ny-048-2.jpg',
      '/images/models/ny-048-3.jpg',
      '/images/models/ny-048-4.jpg',
    ],
        description: {
      'zh-CN': `00年 读研 净身高170 体重50kg 36大E`,
      'zh-TW': `00年 讀研 淨身高170 體重50kg 36大E`,
      'en': `Born 2000, graduate student, net height 170cm, weight 50kg, 36 big E cup`,
      'ko': `00년생, 대학원생, 순키 170cm, 체중 50kg, 36 큰 E컵`,
      'ja': `00年生まれ、大学院生、純身長170cm、体重50kg、36大Eカップ`
    },
    city: 'newyork'
  },
  
  // 洛杉矶模特
  {
    id: 'la-001',
        name: {
      'zh-CN': '洛杉矶1号',
      'zh-TW': '洛杉磯1號',
      'en': 'Los Angeles #1',
      'ko': '로스앤젤레스 1호',
      'ja': 'ロサンゼルス1号'
    },
    mainImage: '/images/models/la-001-1.jpg',
    images: [
      '/images/models/la-001-1.jpg',
      '/images/models/la-001-2.jpg',
      '/images/models/la-001-3.jpg',
    ],
        description: {
      'zh-CN': `洛杉矶留学生
                  165cm 45kg 胸C
                  皮肤白皙 五官精致 蜜桃臀女孩
                  清纯甜美 网红风`,
      'zh-TW': `洛杉磯留學生
                  165cm 45kg 胸C
                  皮膚白皙 五官精緻 蜜桃臀女孩
                  清純甜美 網紅風`,
      'en': `Los Angeles international student
                  165cm, 45kg, C cup
                  Fair skin, delicate features, peach butt girl
                  Pure and sweet, internet celebrity style`,
      'ko': `로스앤젤레스 유학생
                  165cm, 45kg, C컵
                  하얀 피부, 섬세한 이목구비, 복숭아 엉덩이 소녀
                  순수하고 달콤함, 인터넷 셀럽 스타일`,
      'ja': `ロサンゼルス留学生
                  165cm、45kg、Cカップ
                  白い肌、繊細な顔立ち、桃尻ガール
                  純粋で甘い、ネットセレブスタイル`
    },
    city: 'losangeles'
  },
  {
    id: 'la-002',
        name: {
      'zh-CN': '洛杉矶2号',
      'zh-TW': '洛杉磯2號',
      'en': 'Los Angeles #2',
      'ko': '로스앤젤레스 2호',
      'ja': 'ロサンゼルス2号'
    },
    mainImage: '/images/models/la-002-2.jpg',
    images: [
      '/images/models/la-002-1.jpg',
      '/images/models/la-002-2.jpg',
      '/images/models/la-002-3.jpg',
    ],
        description: {
      'zh-CN': `洛杉矶留学生清纯可爱气质
                  165cm  胸c 20岁 肤白貌美
                  年轻超嫩 特别健谈 前凸后翘`,
      'zh-TW': `洛杉磯留學生清純可愛氣質
                  165cm  胸c 20歲 膚白貌美
                  年輕超嫩 特別健談 前凸後翹`,
      'en': `Los Angeles international student pure and cute temperament
                  165cm, C cup, 20 years old, fair skin and beautiful
                  Young and super tender, very talkative, curvy figure`,
      'ko': `로스앤젤레스 유학생 순수하고 귀여운 기질
                  165cm, C컵, 20세, 하얀 피부와 아름다움
                  젊고 초부드러움, 매우 수다스러움, 볼륨감 있는 몸매`,
      'ja': `ロサンゼルス留学生清純で可愛い気質
                  165cm、Cカップ、20歳、白い肌と美しさ
                  若くて超柔らか、とてもおしゃべり、ボリューム感のある体型`
    },
    city: 'losangeles'
  },
  {
    id: 'la-003',
        name: {
      'zh-CN': '洛杉矶3号',
      'zh-TW': '洛杉磯3號',
      'en': 'Los Angeles #3',
      'ko': '로스앤젤레스 3호',
      'ja': 'ロサンゼルス3号'
    },
    mainImage: '/images/models/la-003-1.jpg',
    images: [
      '/images/models/la-003-1.jpg',
      '/images/models/la-003-2.jpg',
      '/images/models/la-003-3.jpg',
    ],
              description: {
      'zh-CN': `洛杉矶超美留学生小姐姐
                    产自98 165cm 胸c 前凸后翘 皮肤超白 全身大牌 可全美空降 服务超好 特别健谈 欢迎合作 绝对满意`,
      'zh-TW': `洛杉磯超美留學生小姐姐
                    產自98 165cm 胸c 前凸後翹 皮膚超白 全身大牌 可全美空降 服務超好 特別健談 歡迎合作 絕對滿意`,
      'en': `Los Angeles super beautiful international student beauty
                    Born 1998, 165cm, C cup, curvy figure, ultra white skin, all designer clothes, can fly anywhere in US, excellent service, very talkative, welcome cooperation, absolutely satisfying`,
      'ko': `로스앤젤레스 초아름다운 유학생 미녀
                    98년생, 165cm, C컵, 볼륨감 있는 몸매, 초하얀 피부, 전신 명품, 전미 공수 가능, 훌륭한 서비스, 매우 수다스러움, 협력 환영, 절대 만족`,
      'ja': `ロサンゼルス超美留学生美女
                    98年生まれ、165cm、Cカップ、ボリューム感のある体型、超白い肌、全身ブランド、全米空輸可能、素晴らしいサービス、とてもおしゃべり、協力歓迎、絶対満足`
    },
    city: 'losangeles'
  },
  {
    id: 'la-004',
        name: {
      'zh-CN': '洛杉矶4号',
      'zh-TW': '洛杉磯4號',
      'en': 'Los Angeles #4',
      'ko': '로스앤젤레스 4호',
      'ja': 'ロサンゼルス4号'
    },
    mainImage: '/images/models/la-004-4.jpg',
    images: [
      '/images/models/la-004-1.jpg',
      '/images/models/la-004-2.jpg',
      '/images/models/la-004-3.jpg',
      '/images/models/la-004-4.jpg',
    ],
              description: {
      'zh-CN': `洛杉矶173CM 胸D 真胸
                   刚下水不久 私人独家资源`,
      'zh-TW': `洛杉磯173CM 胸D 真胸
                   剛下水不久 私人獨家資源`,
      'en': `Los Angeles 173cm, D cup, real breasts
                   Just started recently, private exclusive resource`,
      'ko': `로스앤젤레스 173cm, D컵, 진짜 가슴
                   방금 시작, 프라이빗 독점 자원`,
      'ja': `ロサンゼルス173cm、Dカップ、本物のおっぱい
                   始めたばかり、プライベート独占リソース`
    },
    city: 'losangeles'
  },
  {
    id: 'la-005',
        name: {
      'zh-CN': '洛杉矶5号',
      'zh-TW': '洛杉磯5號',
      'en': 'Los Angeles #5',
      'ko': '로스앤젤레스 5호',
      'ja': 'ロサンゼルス5号'
    },
    mainImage: '/images/models/la-005-2.jpg',
    images: [
      '/images/models/la-005-1.jpg',
      '/images/models/la-005-2.jpg',
      '/images/models/la-005-3.jpg',
      '/images/models/la-005-4.jpg',
    ],
              description: {
      'zh-CN': `洛杉矶  2021年新生
                   经济管理系 出生03年
                   身高166    胸D
                   新人   不接急单`,
      'zh-TW': `洛杉磯  2021年新生
                   經濟管理系 出生03年
                   身高166    胸D
                   新人   不接急單`,
      'en': `Los Angeles 2021 freshman
                   Economics and Management major, born 2003
                   Height 166cm, D cup
                   Newcomer, no rush orders`,
      'ko': `로스앤젤레스 2021년 신입생
                   경제경영학과, 03년생
                   키 166cm, D컵
                   신인, 급한 주문 안 받음`,
      'ja': `ロサンゼルス2021年新入生
                   経済経営学科、03年生まれ
                   身長166cm、Dカップ
                   新人、急な注文は受け付けません`
    },
    city: 'losangeles'
  },
  {
    id: 'la-006',
        name: {
      'zh-CN': '洛杉矶6号',
      'zh-TW': '洛杉磯6號',
      'en': 'Los Angeles #6',
      'ko': '로스앤젤레스 6호',
      'ja': 'ロサンゼルス6号'
    },
    mainImage: '/images/models/la-006-2.jpg',
    images: [
      '/images/models/la-006-1.jpg',
      '/images/models/la-006-2.jpg',
      '/images/models/la-006-3.jpg',
      '/images/models/la-006-4.jpg',
      '/images/models/la-006-5.jpg',
      '/images/models/la-006-6.jpg',
      '/images/models/la-006-7.jpg',
    ],
              description: {
      'zh-CN': `01年生 166CM  胸D  名牌大学在校生
                   第一次下水 短暂兼职 不接急单 只去酒店
                   温柔可爱 全身雪白无纹身 初恋女友型`,
      'zh-TW': `01年生 166CM  胸D  名牌大學在校生
                   第一次下水 短暫兼職 不接急單 只去酒店
                   溫柔可愛 全身雪白無紋身 初戀女友型`,
      'en': `Born 2001, 166cm, D cup, prestigious university student
                   First time, short-term part-time, no rush orders, hotel only
                   Gentle and cute, snow white skin no tattoos, first love girlfriend type`,
      'ko': `01년생, 166cm, D컵, 명문대학 재학생
                   첫 번째, 단기 파트타임, 급한 주문 안 받음, 호텔만
                   부드럽고 귀엽고, 눈처럼 하얀 피부 문신 없음, 첫사랑 여자친구 타입`,
      'ja': `01年生まれ、166cm、Dカップ、名門大学在校生
                   初回、短期パートタイム、急な注文は受け付けません、ホテルのみ
                   優しく可愛く、雪のように白い肌タトゥーなし、初恋彼女タイプ`
    },
    city: 'losangeles'
  },
  {
    id: 'la-007',
        name: {
      'zh-CN': '洛杉矶7号',
      'zh-TW': '洛杉磯7號',
      'en': 'Los Angeles #7',
      'ko': '로스앤젤레스 7호',
      'ja': 'ロサンゼルス7号'
    },
    mainImage: '/images/models/la-007-3.jpg',
    images: [
      '/images/models/la-007-1.jpg',
      '/images/models/la-007-2.jpg',
      '/images/models/la-007-3.jpg',
      '/images/models/la-007-4.jpg',
    ],
              description: {
      'zh-CN': `洛杉矶   170CM    胸C
                   秀色空绝世 馨香为谁转
                   给你初恋情人不一样的感觉`,
      'zh-TW': `洛杉磯   170CM    胸C
                   秀色空絕世 馨香為誰轉
                   給你初戀情人不一樣的感覺`,
      'en': `Los Angeles 170cm, C cup
                   Beauty beyond compare, fragrance for whom
                   Gives you a different feeling from your first love`,
      'ko': `로스앤젤레스 170cm, C컵
                   세상에 둘도 없는 아름다움, 향기는 누구를 위한 것인가
                   첫사랑과는 다른 느낌을 선사`,
      'ja': `ロサンゼルス170cm、Cカップ
                   秀色空絶世、馨香は誰のため
                   初恋とは違う感覚をお届け`
    },
    city: 'losangeles'
  },
  {
    id: 'la-008',
        name: {
      'zh-CN': '洛杉矶8号',
      'zh-TW': '洛杉磯8號',
      'en': 'Los Angeles #8',
      'ko': '로스앤젤레스 8호',
      'ja': 'ロサンゼルス8号'
    },
    mainImage: '/images/models/la-008-1.jpg',
    images: [
      '/images/models/la-008-1.jpg',
      '/images/models/la-008-2.jpg',
      '/images/models/la-008-3.jpg',
      '/images/models/la-008-4.jpg',
    ],
              description: {
      'zh-CN': `美国洛杉矶 02年 168CM 胸E 真胸
                   皮肤皙白 婴儿肌 青春甜美少女
                   服务态度超好 碧玺 初恋款
                   极度纯欲`,
      'zh-TW': `美國洛杉磯 02年 168CM 胸E 真胸
                   皮膚皙白 嬰兒肌 青春甜美少女
                   服務態度超好 碧璽 初戀款
                   極度純慾`,
      'en': `Los Angeles, USA, born 2002, 168cm, E cup, real breasts
                   Fair skin, baby-like skin, youthful sweet girl
                   Excellent service attitude, tourmaline, first love style
                   Extremely pure and seductive`,
      'ko': `미국 로스앤젤레스, 02년생, 168cm, E컵, 진짜 가슴
                   하얀 피부, 아기 같은 피부, 젊고 달콤한 소녀
                   훌륭한 서비스 태도, 토르말린, 첫사랑 스타일
                   극도로 순수하고 매혹적`,
      'ja': `アメリカロサンゼルス、02年生まれ、168cm、Eカップ、本物のおっぱい
                   白い肌、赤ちゃんのような肌、若くて甘い少女
                   素晴らしいサービス態度、トルマリン、初恋スタイル
                   極度に純粋で魅惑的`
    },
    city: 'losangeles'
  },
  {
    id: 'la-009',
        name: {
      'zh-CN': '洛杉矶9号',
      'zh-TW': '洛杉磯9號',
      'en': 'Los Angeles #9',
      'ko': '로스앤젤레스 9호',
      'ja': 'ロサンゼルス9号'
    },
    mainImage: '/images/models/la-009-1.jpg',
    images: [
      '/images/models/la-009-1.jpg',
      '/images/models/la-009-2.jpg',
      '/images/models/la-009-3.jpg',
      '/images/models/la-009-4.jpg',
    ],
              description: {
      'zh-CN': `美国洛杉矶 留学生兼职短暂开 170CM 胸C  真胸
                   清纯甜美 蜜桃臀 大长腿 皮肤超级白`,
      'zh-TW': `美國洛杉磯 留學生兼職短暫開 170CM 胸C  真胸
                   清純甜美 蜜桃臀 大長腿 皮膚超級白`,
      'en': `Los Angeles, USA, international student part-time short-term, 170cm, C cup, real breasts
                   Pure and sweet, peach butt, long legs, super white skin`,
      'ko': `미국 로스앤젤레스, 유학생 파트타임 단기, 170cm, C컵, 진짜 가슴
                   순수하고 달콤하고, 복숭아 엉덩이, 긴 다리, 초하얀 피부`,
      'ja': `アメリカロサンゼルス、留学生パートタイム短期、170cm、Cカップ、本物のおっぱい
                   清純で甘く、桃のお尻、長い脚、超白い肌`
    },
    city: 'losangeles'
  },
  {
    id: 'la-010',
        name: {
      'zh-CN': '洛杉矶10号',
      'zh-TW': '洛杉磯10號',
      'en': 'Los Angeles #10',
      'ko': '로스앤젤레스 10호',
      'ja': 'ロサンゼルス10号'
    },
    mainImage: '/images/models/la-010-3.jpg',
    images: [
      '/images/models/la-010-1.jpg',
      '/images/models/la-010-2.jpg',
      '/images/models/la-010-3.jpg',
      '/images/models/la-010-4.jpg',
    ],
              description: {
      'zh-CN': `美国洛杉矶 新人首次开
                   167CM 胸C 真胸`,
      'zh-TW': `美國洛杉磯 新人首次開
                   167CM 胸C 真胸`,
      'en': `Los Angeles, USA, newcomer first time
                   167cm, C cup, real breasts`,
      'ko': `미국 로스앤젤레스, 신인 첫 번째
                   167cm, C컵, 진짜 가슴`,
      'ja': `アメリカロサンゼルス、新人初回
                   167cm、Cカップ、本物のおっぱい`
    },
    city: 'losangeles'
  },
  {
    id: 'la-011',
        name: {
      'zh-CN': '洛杉矶11号',
      'zh-TW': '洛杉磯11號',
      'en': 'Los Angeles #11',
      'ko': '로스앤젤레스 11호',
      'ja': 'ロサンゼルス11号'
    },
    mainImage: '/images/models/la-011-2.jpg',
    images: [
      '/images/models/la-011-1.jpg',
      '/images/models/la-011-2.jpg',
      '/images/models/la-011-3.jpg',
      '/images/models/la-011-4.jpg',
    ],
              description: {
      'zh-CN': `美国洛杉矶 167CM 胸D 纯新人短暂开
                   学生 可性感 可洋气
                   照片原相机 人照无差
                   提前预约 不接急单`,
      'zh-TW': `美國洛杉磯 167CM 胸D 純新人短暫開
                   學生 可性感 可洋氣
                   照片原相機 人照無差
                   提前預約 不接急單`,
      'en': `Los Angeles, USA, 167cm, D cup, pure newcomer short-term
                   Student, can be sexy, can be fashionable
                   Photos from original camera, no difference from real person
                   Advance booking required, no rush orders`,
      'ko': `미국 로스앤젤레스, 167cm, D컵, 순수 신인 단기
                   학생, 섹시할 수 있고, 패셔너블할 수 있음
                   원본 카메라 사진, 실제 사람과 차이 없음
                   사전 예약 필수, 급한 주문 안 받음`,
      'ja': `アメリカロサンゼルス、167cm、Dカップ、純粋な新人短期
                   学生、セクシーにも、おしゃれにも
                   オリジナルカメラ写真、実際の人と差なし
                   事前予約必須、急な注文は受け付けません`
    },
    city: 'losangeles'
  },
  {
    id: 'la-012',
        name: {
      'zh-CN': '洛杉矶12号',
      'zh-TW': '洛杉磯12號',
      'en': 'Los Angeles #12',
      'ko': '로스앤젤레스 12호',
      'ja': 'ロサンゼルス12号'
    },
    mainImage: '/images/models/la-012-1.jpg',
    images: [
      '/images/models/la-012-1.jpg',
      '/images/models/la-012-2.jpg',
      '/images/models/la-012-3.jpg',
      '/images/models/la-012-4.jpg',
    ],
              description: {
      'zh-CN': `美国洛杉矶 167CM 胸D 纯新人短暂开
                   学生 可性感 可洋气
                   照片原相机 人照无差
                   提前预约  不接急单`,
      'zh-TW': `美國洛杉磯 167CM 胸D 純新人短暫開
                   學生 可性感 可洋氣
                   照片原相機 人照無差
                   提前預約  不接急單`,
      'en': `Los Angeles, USA, 167cm, D cup, pure newcomer short-term
                   Student, can be sexy, can be fashionable
                   Photos from original camera, no difference from real person
                   Advance booking required, no rush orders`,
      'ko': `미국 로스앤젤레스, 167cm, D컵, 순수 신인 단기
                   학생, 섹시할 수 있고, 패셔너블할 수 있음
                   원본 카메라 사진, 실제 사람과 차이 없음
                   사전 예약 필수, 급한 주문 안 받음`,
      'ja': `アメリカロサンゼルス、167cm、Dカップ、純粋な新人短期
                   学生、セクシーにも、おしゃれにも
                   オリジナルカメラ写真、実際の人と差なし
                   事前予約必須、急な注文は受け付けません`
    },
    city: 'losangeles'
  },
  {
    id: 'la-013',
        name: {
      'zh-CN': '洛杉矶13号',
      'zh-TW': '洛杉磯13號',
      'en': 'Los Angeles #13',
      'ko': '로스앤젤레스 13호',
      'ja': 'ロサンゼルス13号'
    },
    mainImage: '/images/models/la-013-2.jpg',
    images: [
      '/images/models/la-013-1.jpg',
      '/images/models/la-013-2.jpg',
      '/images/models/la-013-3.jpg',
      '/images/models/la-013-4.jpg',
    ],
              description: {
      'zh-CN': `生2001年  身高170  胸C
                   天然皮肤 巨白 高级face`,
      'zh-TW': `生2001年  身高170  胸C
                   天然皮膚 巨白 高級face`,
      'en': `Born 2001, height 170cm, C cup
                   Natural skin, extremely white, high-class face`,
      'ko': `2001년생, 키 170cm, C컵
                   천연 피부, 극도로 하얀, 고급스러운 얼굴`,
      'ja': `2001年生まれ、身長170cm、Cカップ
                   天然肌、超白い、高級な顔`
    },
    city: 'losangeles'
  },
  {
    id: 'la-014',
        name: {
      'zh-CN': '洛杉矶14号',
      'zh-TW': '洛杉磯14號',
      'en': 'Los Angeles #14',
      'ko': '로스앤젤레스 14호',
      'ja': 'ロサンゼルス14号'
    },
    mainImage: '/images/models/la-014-1.jpg',
    images: [
      '/images/models/la-014-1.jpg',
      '/images/models/la-014-2.jpg',
      '/images/models/la-014-3.jpg',
      '/images/models/la-014-4.jpg',
    ],
              description: {
      'zh-CN': `小RED书兼职美妆博主
                   身高169CM 胸C CUP 43Kg 纯天然上海囡囡
                   20岁 多国留学经验 家教良好 知书达理  擅长琴棋书画 会4门外语
                   爱好滑雪 攀岩 蹦极 各类极限运动`,
      'zh-TW': `小RED書兼職美妝博主
                   身高169CM 胸C CUP 43Kg 純天然上海囡囡
                   20歲 多國留學經驗 家教良好 知書達理  擅長琴棋書畫 會4門外語
                   愛好滑雪 攀岩 蹦極 各類極限運動`,
      'en': `Xiaohongshu part-time beauty blogger
                   Height 169cm, C cup, 43kg, pure natural Shanghai girl
                   20 years old, multi-country study abroad experience, good upbringing, well-educated, skilled in music, chess, calligraphy, painting, speaks 4 foreign languages
                   Hobbies: skiing, rock climbing, bungee jumping, various extreme sports`,
      'ko': `샤오훙슈 파트타임 뷰티 블로거
                   키 169cm, C컵, 43kg, 순수 천연 상하이 여자
                   20세, 다국가 유학 경험, 좋은 가정교육, 교양 있는, 음악, 체스, 서예, 그림에 능숙, 4개국어 구사
                   취미: 스키, 암벽등반, 번지점프, 각종 익스트림 스포츠`,
      'ja': `小紅書パートタイムビューティーブロガー
                   身長169cm、Cカップ、43kg、純天然上海娘
                   20歳、多国留学経験、良い家庭教育、教養豊か、琴棋書画に堪能、4ヶ国語話せる
                   趣味：スキー、ロッククライミング、バンジージャンプ、各種エクストリームスポーツ`
    },
    city: 'losangeles'
  },
  {
    id: 'la-015',
        name: {
      'zh-CN': '洛杉矶15号',
      'zh-TW': '洛杉磯15號',
      'en': 'Los Angeles #15',
      'ko': '로스앤젤레스 15호',
      'ja': 'ロサンゼルス15号'
    },
    mainImage: '/images/models/la-015-1.jpg',
    images: [
      '/images/models/la-015-1.jpg',
      '/images/models/la-015-2.jpg',
      '/images/models/la-015-3.jpg',
      '/images/models/la-015-4.jpg',
    ],
              description: {
      'zh-CN': `美国洛杉矶
                   国内知名模特人称小范冰冰
                   175CM 胸D 肤白貌美 大长腿 蜜桃臀 马甲线
                   大蜜风范 会聊天 双商极高
                   预约从速`,
      'zh-TW': `美國洛杉磯
                   國內知名模特人稱小范冰冰
                   175CM 胸D 膚白貌美 大長腿 蜜桃臀 馬甲線
                   大蜜風範 會聊天 雙商極高
                   預約從速`,
      'en': `Los Angeles, USA
                   Nationally famous model known as Little Fan Bingbing
                   175cm, D cup, fair skin and beautiful, long legs, peach butt, six-pack abs
                   Mature and elegant, great conversationalist, extremely high EQ and IQ
                   Book quickly`,
      'ko': `미국 로스앤젤레스
                   국내 유명 모델, 작은 판빙빙으로 불림
                   175cm, D컵, 하얀 피부와 아름다움, 긴 다리, 복숭아 엉덩이, 식스팩
                   성숙하고 우아함, 대화 잘함, 극도로 높은 EQ와 IQ
                   빠른 예약 필수`,
      'ja': `アメリカロサンゼルス
                   国内有名モデル、小さな范冰冰と呼ばれる
                   175cm、Dカップ、白い肌と美しさ、長い脚、桃のお尻、腹筋
                   成熟して上品、会話上手、極めて高いEQとIQ
                   早めの予約をお勧め`
    },
    city: 'losangeles'
  },
  {
    id: 'la-016',
        name: {
      'zh-CN': '洛杉矶16号',
      'zh-TW': '洛杉磯16號',
      'en': 'Los Angeles #16',
      'ko': '로스앤젤레스 16호',
      'ja': 'ロサンゼルス16号'
    },
    mainImage: '/images/models/la-016-1.jpg',
    images: [
      '/images/models/la-016-1.jpg',
      '/images/models/la-016-2.jpg',
      '/images/models/la-016-3.jpg',
      '/images/models/la-016-4.jpg',
    ],
              description: {
      'zh-CN': `洛杉矶美女
                   165CM 胸C 42KG 00后小美女 极品碧玺
                   身材娇小玲珑可爱 乖巧懂事
                   伴游空降party 都可以`,
      'zh-TW': `洛杉磯美女
                   165CM 胸C 42KG 00後小美女 極品碧璽
                   身材嬌小玲瓏可愛 乖巧懂事
                   伴遊空降party 都可以`,
      'en': `Los Angeles beauty
                   165cm, C cup, 42kg, post-2000s little beauty, premium tourmaline
                   Petite and delicate figure, cute and well-behaved
                   Escort, air drop, party, all available`,
      'ko': `로스앤젤레스 미녀
                   165cm, C컵, 42kg, 00후 소녀, 프리미엄 토르말린
                   작고 섬세한 몸매, 귀엽고 순한
                   에스코트, 공수, 파티, 모두 가능`,
      'ja': `ロサンゼルス美女
                   165cm、Cカップ、42kg、00年代後半の小美女、プレミアムトルマリン
                   小柄で繊細な体型、可愛くておとなしい
                   エスコート、空輸、パーティー、すべて可能`
    },
    city: 'losangeles'
  },
  {
    id: 'la-017',
        name: {
      'zh-CN': '洛杉矶17号',
      'zh-TW': '洛杉磯17號',
      'en': 'Los Angeles #17',
      'ko': '로스앤젤레스 17호',
      'ja': 'ロサンゼルス17号'
    },
    mainImage: '/images/models/la-017-1.jpg',
    images: [
      '/images/models/la-017-1.jpg',
      '/images/models/la-017-2.jpg',
      '/images/models/la-017-3.jpg',
      '/images/models/la-017-4.jpg',
    ],
              description: {
      'zh-CN': `洛杉矶也可以旧金山
                   身高172CM 胸C 52kg 00年
                   零整容 超级温柔 高情商
                   清纯甜美 气质高雅 气质女神
                   中英文流利 可伴游翻译 在校生 高学历
                   兼职 刚下海 全美可飞`,
      'zh-TW': `洛杉磯也可以舊金山
                   身高172CM 胸C 52kg 00年
                   零整容 超級溫柔 高情商
                   清純甜美 氣質高雅 氣質女神
                   中英文流利 可伴遊翻譯 在校生 高學歷
                   兼職 剛下海 全美可飛`,
      'en': `Los Angeles or San Francisco available
                   Height 172cm, C cup, 52kg, born 2000
                   No plastic surgery, super gentle, high EQ
                   Pure and sweet, elegant temperament, goddess-like aura
                   Fluent in Chinese and English, can escort and translate, current student, high education
                   Part-time, just started, can fly anywhere in US`,
      'ko': `로스앤젤레스 또는 샌프란시스코 가능
                   키 172cm, C컵, 52kg, 00년생
                   성형 없음, 초부드러움, 높은 EQ
                   순수하고 달콤하고, 우아한 기질, 여신 같은 분위기
                   중영어 유창, 에스코트 및 번역 가능, 재학생, 고학력
                   파트타임, 방금 시작, 전미 공수 가능`,
      'ja': `ロサンゼルスまたはサンフランシスコ可能
                   身長172cm、Cカップ、52kg、00年生まれ
                   整形なし、超優しい、高EQ
                   清純で甘く、上品な気質、女神のようなオーラ
                   中英語流暢、エスコート・通訳可能、在校生、高学歴
                   パートタイム、始めたばかり、全米空輸可能`
    },
    city: 'losangeles'
  },
  {
    id: 'la-018',
        name: {
      'zh-CN': '洛杉矶18号',
      'zh-TW': '洛杉磯18號',
      'en': 'Los Angeles #18',
      'ko': '로스앤젤레스 18호',
      'ja': 'ロサンゼルス18号'
    },
    mainImage: '/images/models/la-018-2.jpg',
    images: [
      '/images/models/la-018-1.jpg',
      '/images/models/la-018-2.jpg',
      '/images/models/la-018-3.jpg',
      '/images/models/la-018-4.jpg',
    ],
              description: {
      'zh-CN': `洛杉矶 气质留学生
                 温柔似水 女友般甜蜜服务
                 清纯貌美 可甜可盐 碧玺新人刚下水
                 166CM 45KG 21岁 胸C 真胸
                 情商高事少`,
      'zh-TW': `洛杉磯 氣質留學生
                 溫柔似水 女友般甜蜜服務
                 清純貌美 可甜可鹽 碧璽新人剛下水
                 166CM 45KG 21歲 胸C 真胸
                 情商高事少`,
      'en': `Los Angeles, elegant international student
                 Gentle as water, girlfriend-like sweet service
                 Pure and beautiful, can be sweet or sassy, tourmaline newcomer just started
                 166cm, 45kg, 21 years old, C cup, real breasts
                 High EQ, low maintenance`,
      'ko': `로스앤젤레스, 기품 있는 유학생
                 물처럼 부드럽고, 여자친구 같은 달콤한 서비스
                 순수하고 아름답고, 달콤하거나 매력적일 수 있음, 토르말린 신인 방금 시작
                 166cm, 45kg, 21세, C컵, 진짜 가슴
                 높은 EQ, 까다롭지 않음`,
      'ja': `ロサンゼルス、気品のある留学生
                 水のように優しく、彼女のような甘いサービス
                 清純で美しく、甘くも塩辛くも、トルマリン新人始めたばかり
                 166cm、45kg、21歳、Cカップ、本物のおっぱい
                 高EQ、手がかからない`
    },
    city: 'losangeles'
  },
  {
    id: 'la-019',
        name: {
      'zh-CN': '洛杉矶19号',
      'zh-TW': '洛杉磯19號',
      'en': 'Los Angeles #19',
      'ko': '로스앤젤레스 19호',
      'ja': 'ロサンゼルス19号'
    },
    mainImage: '/images/models/la-019-3.jpg',
    images: [
      '/images/models/la-019-1.jpg',
      '/images/models/la-019-2.jpg',
      '/images/models/la-019-3.jpg',
      '/images/models/la-019-4.jpg',
    ],
              description: {
      'zh-CN': `洛杉矶
                   真人真照 高素质 高个子 流利中英文
                   南航空姐 173CM 胸36E
                   可全美空降`,
      'zh-TW': `洛杉磯
                   真人真照 高素質 高個子 流利中英文
                   南航空姐 173CM 胸36E
                   可全美空降`,
      'en': `Los Angeles
                   Real person real photos, high quality, tall, fluent in Chinese and English
                   China Southern flight attendant, 173cm, 36E cup
                   Can fly anywhere in US`,
      'ko': `로스앤젤레스
                   실제 사람 실제 사진, 고품질, 키 큰, 중영어 유창
                   중국남방항공 승무원, 173cm, 36E컵
                   전미 공수 가능`,
      'ja': `ロサンゼルス
                   実人実写真、高品質、背が高い、中英語流暢
                   中国南方航空客室乗務員、173cm、36Eカップ
                   全米空輸可能`
    },
    city: 'losangeles'
  },
  {
    id: 'la-020',
        name: {
      'zh-CN': '洛杉矶20号',
      'zh-TW': '洛杉磯20號',
      'en': 'Los Angeles #20',
      'ko': '로스앤젤레스 20호',
      'ja': 'ロサンゼルス20号'
    },
    mainImage: '/images/models/la-020-4.jpg',
    images: [
      '/images/models/la-020-1.jpg',
      '/images/models/la-020-2.jpg',
      '/images/models/la-020-3.jpg',
      '/images/models/la-020-4.jpg',
    ],
              description: {
      'zh-CN': `洛杉矶
                   167cM 胸C 极致纯欲温柔小猫咪
                   真实留学生 第一次初恋的感觉 刚下水不久
                   兼职提前预约`,
      'zh-TW': `洛杉磯
                   167cM 胸C 極致純慾溫柔小貓咪
                   真實留學生 第一次初戀的感覺 剛下水不久
                   兼職提前預約`,
      'en': `Los Angeles
                   167cm, C cup, ultimate pure desire gentle kitten
                   Real international student, first love feeling, just started recently
                   Part-time advance booking required`,
      'ko': `로스앤젤레스
                   167cm, C컵, 극한 순수 욕망 부드러운 고양이
                   진짜 유학생, 첫사랑 느낌, 방금 시작
                   파트타임 사전 예약 필수`,
      'ja': `ロサンゼルス
                   167cm、Cカップ、究極の純粋な欲望優しい子猫
                   本当の留学生、初恋の感じ、始めたばかり
                   パートタイム事前予約必須`
    },
    city: 'losangeles'
  },
  {
    id: 'la-023',
        name: {
      'zh-CN': '洛杉矶23号',
      'zh-TW': '洛杉磯23號',
      'en': 'Los Angeles #23',
      'ko': '로스앤젤레스 23호',
      'ja': 'ロサンゼルス23号'
    },
    mainImage: '/images/models/la-023-5.jpg',
    images: [
      '/images/models/la-023-1.jpg',
      '/images/models/la-023-2.jpg',
      '/images/models/la-023-3.jpg',
      '/images/models/la-023-4.jpg',
      '/images/models/la-023-5.jpg',
      '/images/models/la-023-6.jpg',
    ],
              description: {
      'zh-CN': `美国 洛杉矶极品学生身高176 胸C  气质甜美 服务好 有耐心 提前预约 不接急单?`,
      'zh-TW': `美國 洛杉磯極品學生身高176 胸C  氣質甜美 服務好 有耐心 提前預約 不接急單?`,
      'en': `USA, Los Angeles premium student, height 176cm, C cup, sweet temperament, good service, patient, advance booking required, no rush orders?`,
      'ko': `미국, 로스앤젤레스 프리미엄 학생, 키 176cm, C컵, 달콤한 기질, 좋은 서비스, 인내심, 사전 예약 필수, 급한 주문 안 받음?`,
      'ja': `アメリカ、ロサンゼルスプレミアム学生、身長176cm、Cカップ、甘い気質、良いサービス、忍耐強く、事前予約必須、急な注文は受け付けません？`
    },
    city: 'losangeles'
  },
  {
    id: 'la-025',
        name: {
      'zh-CN': '洛杉矶25号',
      'zh-TW': '洛杉磯25號',
      'en': 'Los Angeles #25',
      'ko': '로스앤젤레스 25호',
      'ja': 'ロサンゼルス25号'
    },
    mainImage: '/images/models/la-025-1.jpg',
    images: [
      '/images/models/la-025-1.jpg',
      '/images/models/la-025-2.jpg',
      '/images/models/la-025-3.jpg',
      '/images/models/la-025-4.jpg',
      '/images/models/la-025-5.jpg',
    ],
              description: {
      'zh-CN': `旧金山名校留学生 170C肤白貌美气质甜美 可性感可网红 翘臀长腿 好评！女朋友感！`,
      'zh-TW': `舊金山名校留學生 170C膚白貌美氣質甜美 可性感可網紅 翹臀長腿 好評！女朋友感！`,
      'en': `San Francisco prestigious university international student, 170cm C cup, fair skin beautiful sweet temperament, can be sexy or internet famous, perky butt long legs, great reviews! Girlfriend feeling!`,
      'ko': `샌프란시스코 명문대학 유학생, 170cm C컵, 하얀 피부 아름다운 달콤한 기질, 섹시하거나 인터넷 유명인 가능, 볼륨감 있는 엉덩이 긴 다리, 훌륭한 리뷰! 여자친구 느낌!`,
      'ja': `サンフランシスコ名門大学留学生、170cm Cカップ、白い肌美しい甘い気質、セクシーにもネット有名人にも、丸いお尻長い脚、素晴らしいレビュー！彼女感！`
    },
    city: 'losangeles'
  },
  {
    id: 'la-027',
        name: {
      'zh-CN': '洛杉矶27号',
      'zh-TW': '洛杉磯27號',
      'en': 'Los Angeles #27',
      'ko': '로스앤젤레스 27호',
      'ja': 'ロサンゼルス27号'
    },
    mainImage: '/images/models/la-027-1.jpg',
    images: [
      '/images/models/la-027-1.jpg',
      '/images/models/la-027-2.jpg',
      '/images/models/la-027-3.jpg',
      '/images/models/la-027-4.jpg',
      '/images/models/la-027-5.jpg',
      '/images/models/la-027-6.jpg',
    ],
              description: {
      'zh-CN': `美国极品00年名校留学生，170天然E杯，全身雪白大长腿，甜美性感有气质～真人超漂亮，百分百好评！给你女朋友的感觉`,
      'zh-TW': `美國極品00年名校留學生，170天然E杯，全身雪白大長腿，甜美性感有氣質～真人超漂亮，百分百好評！給你女朋友的感覺`,
      'en': `USA premium 2000-born prestigious university international student, 170cm natural E cup, snow white long legs all over, sweet sexy with temperament~ Real person super beautiful, 100% great reviews! Gives you girlfriend feeling`,
      'ko': `미국 프리미엄 00년생 명문대학 유학생, 170cm 천연 E컵, 전신 눈처럼 하얀 긴 다리, 달콤하고 섹시하고 기질~ 실제 사람 초아름다움, 100% 훌륭한 리뷰! 여자친구 느낌 선사`,
      'ja': `アメリカプレミアム00年生まれ名門大学留学生、170cm天然Eカップ、全身雪のように白い長い脚、甘くセクシーで気質~実人超美しい、100%素晴らしいレビュー！彼女感をお届け`
    },
    city: 'losangeles'
  },
  {
    id: 'la-028',
        name: {
      'zh-CN': '洛杉矶28号',
      'zh-TW': '洛杉磯28號',
      'en': 'Los Angeles #28',
      'ko': '로스앤젤레스 28호',
      'ja': 'ロサンゼルス28号'
    },
    mainImage: '/images/models/la-028-3.jpg',
    images: [
      '/images/models/la-028-1.jpg',
      '/images/models/la-028-2.jpg',
      '/images/models/la-028-3.jpg',
      '/images/models/la-028-4.jpg',
      '/images/models/la-028-5.jpg',
      '/images/models/la-028-6.jpg',
      '/images/models/la-028-7.jpg',
    ],
              description: {
      'zh-CN': `真实留学生。170 c 可纯可御好不事儿   人好看漂亮  活好 极品配置`,
      'zh-TW': `真實留學生。170 c 可純可御好不事兒   人好看漂亮  活好 極品配置`,
      'en': `Real international student. 170cm C cup, can be pure or mature, not fussy, beautiful person, good service, premium configuration`,
      'ko': `진짜 유학생. 170cm C컵, 순수하거나 성숙할 수 있고, 까다롭지 않음, 아름다운 사람, 좋은 서비스, 프리미엄 구성`,
      'ja': `本当の留学生。170cm Cカップ、純粋にも成熟にも、わがままじゃない、美しい人、良いサービス、プレミアム構成`
    },
    city: 'losangeles'
  },
  {
    id: 'la-029',
        name: {
      'zh-CN': '洛杉矶29号',
      'zh-TW': '洛杉磯29號',
      'en': 'Los Angeles #29',
      'ko': '로스앤젤레스 29호',
      'ja': 'ロサンゼルス29号'
    },
    mainImage: '/images/models/la-029-1.jpg',
    images: [
      '/images/models/la-029-1.jpg',
      '/images/models/la-029-2.jpg',
      '/images/models/la-029-3.jpg',
      '/images/models/la-029-4.jpg',
    ],
              description: {
      'zh-CN': `美国 洛杉矶新人第一次开 英国伯明翰留学生极品新人  Height:166 C:C 超洋氣網紅 純慾女神 高情商會來事 超緊緻 ☆氣場十足 你的首選girl`,
      'zh-TW': `美國 洛杉磯新人第一次開 英國伯明翰留學生極品新人  Height:166 C:C 超洋氣網紅 純慾女神 高情商會來事 超緊緻 ☆氣場十足 你的首選girl`,
      'en': `USA, Los Angeles newcomer first time, UK Birmingham international student premium newcomer, Height: 166cm C:C, ultra sophisticated internet celebrity, pure desire goddess, high EQ knows how to handle things, super tight ☆full of aura, your first choice girl`,
      'ko': `미국, 로스앤젤레스 신인 첫번째, 영국 버밍엄 유학생 프리미엄 신인, 키: 166cm C:C, 초세련 인플루언서, 순수 욕망 여신, 고EQ 일처리 잘함, 초탄탄함 ☆기운 충만, 당신의 첫 선택 여자`,
      'ja': `アメリカ、ロサンゼルス新人初回、イギリスバーミンガム留学生プレミアム新人、身長：166cm C:C、超洗練インフルエンサー、純欲女神、高EQ物事の処理上手、超引き締まり☆オーラ満載、あなたの第一選択ガール`
    },
    city: 'losangeles'
  },
  {
    id: 'la-030',
        name: {
      'zh-CN': '洛杉矶30号',
      'zh-TW': '洛杉磯30號',
      'en': 'Los Angeles #30',
      'ko': '로스앤젤레스 30호',
      'ja': 'ロサンゼルス30号'
    },
    mainImage: '/images/models/la-030-3.jpg',
    images: [
      '/images/models/la-030-1.jpg',
      '/images/models/la-030-2.jpg',
      '/images/models/la-030-3.jpg',
      '/images/models/la-030-4.jpg',
    ],
              description: {
      'zh-CN': `美国纯新人大蜜型 00年在读硕士 170C 初恋感觉 美国一个k都不认识 蜜桃臀 甜美纯欲 英语流利`,
      'zh-TW': `美國純新人大蜜型 00年在讀碩士 170C 初戀感覺 美國一個k都不認識 蜜桃臀 甜美純慾 英語流利`,
      'en': `USA pure newcomer big honey type, 2000-born graduate student, 170cm C cup, first love feeling, doesn't know anyone in America, peach butt, sweet pure desire, fluent English`,
      'ko': `미국 순수 신인 큰 꿀 타입, 00년생 대학원생, 170cm C컵, 첫사랑 느낌, 미국에서 아는 사람 없음, 복숭아 엉덩이, 달콤한 순수 욕망, 유창한 영어`,
      'ja': `アメリカ純粋新人大蜜タイプ、00年生まれ大学院生、170cm Cカップ、初恋感覚、アメリカで知り合いなし、桃のお尻、甘い純欲、流暢な英語`
    },
    city: 'losangeles'
  },
  {
    id: 'la-031',
        name: {
      'zh-CN': '洛杉矶31号',
      'zh-TW': '洛杉磯31號',
      'en': 'Los Angeles #31',
      'ko': '로스앤젤레스 31호',
      'ja': 'ロサンゼルス31号'
    },
    mainImage: '/images/models/la-031-2.jpg',
    images: [
      '/images/models/la-031-1.jpg',
      '/images/models/la-031-2.jpg',
      '/images/models/la-031-3.jpg',
    ],
              description: {
      'zh-CN': `洛杉矶新人1.66 D 短开 文艺女孩 气质优雅 待客如初恋`,
      'zh-TW': `洛杉磯新人1.66 D 短開 文藝女孩 氣質優雅 待客如初戀`,
      'en': `Los Angeles newcomer 1.66m D cup, short stay, artistic girl, elegant temperament, treats guests like first love`,
      'ko': `로스앤젤레스 신인 1.66m D컵, 단기, 예술적 소녀, 우아한 기질, 손님을 첫사랑처럼 대함`,
      'ja': `ロサンゼルス新人1.66m Dカップ、短期、芸術的な女の子、優雅な気質、お客様を初恋のように扱う`
    },
    city: 'losangeles'
  },
  {
    id: 'la-032',
        name: {
      'zh-CN': '洛杉矶32号',
      'zh-TW': '洛杉磯32號',
      'en': 'Los Angeles #32',
      'ko': '로스앤젤레스 32호',
      'ja': 'ロサンゼルス32号'
    },
    mainImage: '/images/models/la-032-3.jpg',
    images: [
      '/images/models/la-032-1.jpg',
      '/images/models/la-032-2.jpg',
      '/images/models/la-032-3.jpg',
      '/images/models/la-032-4.jpg',
      '/images/models/la-032-5.jpg',
    ],
              description: {
      'zh-CN': `美国洛杉矶极品新人 真实01年  净身高166 清纯女神 笑容甜美 宛如初恋`,
      'zh-TW': `美國洛杉磯極品新人 真實01年  淨身高166 清純女神 笑容甜美 宛如初戀`,
      'en': `USA Los Angeles premium newcomer, real 2001-born, net height 166cm, pure goddess, sweet smile, just like first love`,
      'ko': `미국 로스앤젤레스 프리미엄 신인, 진짜 01년생, 순키 166cm, 순수 여신, 달콤한 미소, 마치 첫사랑 같음`,
      'ja': `アメリカロサンゼルスプレミアム新人、本当の01年生まれ、純身長166cm、清純女神、甘い笑顔、初恋のような`
    },
    city: 'losangeles'
  },
  {
    id: 'la-033',
        name: {
      'zh-CN': '洛杉矶33号',
      'zh-TW': '洛杉磯33號',
      'en': 'Los Angeles #33',
      'ko': '로스앤젤레스 33호',
      'ja': 'ロサンゼルス33号'
    },
    mainImage: '/images/models/la-033-3.jpg',
    images: [
      '/images/models/la-033-1.jpg',
      '/images/models/la-033-2.jpg',
      '/images/models/la-033-3.jpg',
      '/images/models/la-033-4.jpg',
    ],
              description: {
      'zh-CN': `美国洛杉矶新人 167D 学生 皮肤雪白 网红款 服务好 真人照挂 提前预约`,
      'zh-TW': `美國洛杉磯新人 167D 學生 皮膚雪白 網紅款 服務好 真人照掛 提前預約`,
      'en': `USA Los Angeles newcomer, 167cm D cup, student, snow white skin, internet celebrity style, good service, real photos, advance booking`,
      'ko': `미국 로스앤젤레스 신인, 167cm D컵, 학생, 눈처럼 하얀 피부, 인플루언서 스타일, 좋은 서비스, 실사진, 사전 예약`,
      'ja': `アメリカロサンゼルス新人、167cm Dカップ、学生、雪のように白い肌、インフルエンサースタイル、良いサービス、実写真、事前予約`
    },
    city: 'losangeles'
  },
  {
    id: 'la-034',
        name: {
      'zh-CN': '洛杉矶34号',
      'zh-TW': '洛杉磯34號',
      'en': 'Los Angeles #34',
      'ko': '로스앤젤레스 34호',
      'ja': 'ロサンゼルス34号'
    },
    mainImage: '/images/models/la-034-3.jpg',
    images: [
      '/images/models/la-034-1.jpg',
      '/images/models/la-034-2.jpg',
      '/images/models/la-034-3.jpg',
      '/images/models/la-034-4.jpg',
    ],
              description: {
      'zh-CN': `美国 洛杉矶新人168 真 C. 真实蜜桃臀 经济学研究生 （可验学生证）98年 日常 喜欢健身 各种户外运动 真实留学多年 真实外交部实习offer 获得者 英语流利 不嗨 可快，夜，伴游`,
      'zh-TW': `美國 洛杉磯新人168 真 C. 真實蜜桃臀 經濟學研究生 （可驗學生證）98年 日常 喜歡健身 各種戶外運動 真實留學多年 真實外交部實習offer 獲得者 英語流利 不嗨 可快，夜，伴遊`,
      'en': `USA, Los Angeles newcomer 168cm real C cup, real peach butt, economics graduate student (can verify student ID), born 1998, daily life, loves fitness, various outdoor sports, real study abroad for years, real foreign ministry internship offer recipient, fluent English, not high, can do quick, night, companion`,
      'ko': `미국, 로스앤젤레스 신인 168cm 진짜 C컵, 진짜 복숭아 엉덩이, 경제학 대학원생 (학생증 확인 가능), 98년생, 일상, 피트니스 좋아함, 다양한 야외 스포츠, 진짜 유학 수년, 진짜 외교부 인턴십 오퍼 수령자, 유창한 영어, 하이하지 않음, 빠른, 밤, 동반 가능`,
      'ja': `アメリカ、ロサンゼルス新人168cm本物Cカップ、本物桃のお尻、経済学大学院生（学生証確認可能）、98年生まれ、日常、フィットネス好き、様々なアウトドアスポーツ、本当の留学数年、本当の外務省インターンシップオファー獲得者、流暢な英語、ハイではない、クイック、夜、同伴可能`
    },
    city: 'losangeles'
  },
  {
    id: 'la-035',
        name: {
      'zh-CN': '洛杉矶35号',
      'zh-TW': '洛杉磯35號',
      'en': 'Los Angeles #35',
      'ko': '로스앤젤레스 35호',
      'ja': 'ロサンゼルス35号'
    },
    mainImage: '/images/models/la-035-4.jpg',
    images: [
      '/images/models/la-035-1.jpg',
      '/images/models/la-035-2.jpg',
      '/images/models/la-035-3.jpg',
      '/images/models/la-035-4.jpg',
    ],
              description: {
      'zh-CN': `洛杉矶新人 ?ins小网红 171cm 48kgC cup22岁 ?大长腿，身材超好，皮肤白嫩粉红咪咪 ? 名校在读大学生? ?性格温柔主动，喜欢聊天，听话乖巧`,
      'zh-TW': `洛杉磯新人 ?ins小網紅 171cm 48kgC cup22歲 ?大長腿，身材超好，皮膚白嫩粉紅咪咪 ? 名校在讀大學生? ?性格溫柔主動，喜歡聊天，聽話乖巧`,
      'en': `Los Angeles newcomer ?Instagram small influencer 171cm 48kg C cup 22 years old ?Long legs, amazing figure, fair tender skin pink nipples ?Elite university student? ?Gentle proactive personality, loves chatting, obedient and well-behaved`,
      'ko': `로스앤젤레스 신인 ?인스타그램 작은 인플루언서 171cm 48kg C컵 22세 ?긴 다리, 완벽한 몸매, 하얗고 부드러운 피부 분홍 젖꼭지 ?명문대학생? ?부드럽고 적극적인 성격, 채팅 좋아함, 순종적이고 착함`,
      'ja': `ロサンゼルス新人？インスタグラム小さなインフルエンサー171cm 48kg Cカップ22歳？長い脚、素晴らしい体型、白くて柔らかい肌ピンク乳首？名門大学生？？優しくて積極的な性格、チャット好き、従順でおとなしい`
    },
    city: 'losangeles'
  },
  {
    id: 'la-036',
        name: {
      'zh-CN': '洛杉矶36号',
      'zh-TW': '洛杉磯36號',
      'en': 'Los Angeles #36',
      'ko': '로스앤젤레스 36호',
      'ja': 'ロサンゼルス36号'
    },
    mainImage: '/images/models/la-036-3.jpg',
    images: [
      '/images/models/la-036-1.jpg',
      '/images/models/la-036-2.jpg',
      '/images/models/la-036-3.jpg',
      '/images/models/la-036-4.jpg',
      '/images/models/la-036-5.jpg',
      '/images/models/la-036-6.jpg',
    ],
              description: {
      'zh-CN': `洛杉矶新人 佳音 🍒166/98/34D 💧零整容零纹身 🍼性格温柔 长相甜美 🍬真实可验03年 名校在读 保证让你欲求不满 欲罢不能`,
      'zh-TW': `洛杉磯新人 佳音 🍒166/98/34D 💧零整容零紋身 🍼性格溫柔 長相甜美 🍬真實可驗03年 名校在讀 保證讓你欲求不滿 欲罷不能`,
      'en': `Los Angeles newcomer Jiayin 🍒166/98/34D 💧Zero surgery zero tattoos 🍼Gentle personality, sweet appearance 🍬Real verifiable 2003-born, elite university student, guaranteed to leave you unsatisfied and unable to stop`,
      'ko': `로스앤젤레스 신인 지아인 🍒166/98/34D 💧제로 성형 제로 문신 🍼부드러운 성격, 달콤한 외모 🍬진짜 확인 가능 03년생, 명문대학생, 만족하지 못하고 멈출 수 없게 보장`,
      'ja': `ロサンゼルス新人佳音🍒166/98/34D💧ゼロ整形ゼロタトゥー🍼優しい性格、甘い外見🍬本当に確認可能03年生まれ、名門大学生、満足せず止められないことを保証`
    },
    city: 'losangeles'
  },
  {
    id: 'la-037',
        name: {
      'zh-CN': '洛杉矶37号',
      'zh-TW': '洛杉磯37號',
      'en': 'Los Angeles #37',
      'ko': '로스앤젤레스 37호',
      'ja': 'ロサンゼルス37号'
    },
    mainImage: '/images/models/la-037-1.jpg',
    images: [
      '/images/models/la-037-1.jpg',
      '/images/models/la-037-2.jpg',
    ],
              description: {
      'zh-CN': `留学生 uci学生 00 后 待课如初恋 D 166 净身高`,
      'zh-TW': `留學生 uci學生 00 後 待課如初戀 D 166 淨身高`,
      'en': `International student, UCI student, born after 2000, treats class like first love, D cup 166cm net height`,
      'ko': `유학생, UCI 학생, 00년대 후반생, 수업을 첫사랑처럼 대함, D컵 166cm 순키`,
      'ja': `留学生、UCI学生、00年代後半生まれ、授業を初恋のように扱う、Dカップ166cm純身長`
    },
    city: 'losangeles'
  },
  {
    id: 'la-038',
        name: {
      'zh-CN': '洛杉矶38号',
      'zh-TW': '洛杉磯38號',
      'en': 'Los Angeles #38',
      'ko': '로스앤젤레스 38호',
      'ja': 'ロサンゼルス38号'
    },
    mainImage: '/images/models/la-038-1.jpg',
    images: [
      '/images/models/la-038-1.jpg',
      '/images/models/la-038-2.jpg',
    ],
              description: {
      'zh-CN': `美国 洛杉矶 新人短开4天 留学生 171C 🍒 肤白貌美 大长腿 服务好 🍒 有耐心 懂礼貌 高素质`,
      'zh-TW': `美國 洛杉磯 新人短開4天 留學生 171C 🍒 膚白貌美 大長腿 服務好 🍒 有耐心 懂禮貌 高素質`,
      'en': `USA, Los Angeles, newcomer short stay 4 days, international student, 171cm C cup 🍒 Fair skin beautiful appearance, long legs, good service 🍒 Patient, polite, high quality`,
      'ko': `미국, 로스앤젤레스, 신인 단기 4일, 유학생, 171cm C컵 🍒 하얀 피부 아름다운 외모, 긴 다리, 좋은 서비스 🍒 인내심, 예의 바름, 고품질`,
      'ja': `アメリカ、ロサンゼルス、新人短期4日間、留学生、171cm Cカップ🍒白い肌美しい外見、長い脚、良いサービス🍒忍耐強く、礼儀正しい、高品質`
    },
    city: 'losangeles'
  },
  {
    id: 'la-039',
        name: {
      'zh-CN': '洛杉矶39号',
      'zh-TW': '洛杉磯39號',
      'en': 'Los Angeles #39',
      'ko': '로스앤젤레스 39호',
      'ja': 'ロサンゼルス39号'
    },
    mainImage: '/images/models/la-039-6.jpg',
    images: [
      '/images/models/la-039-1.jpg',
      '/images/models/la-039-2.jpg',
      '/images/models/la-039-3.jpg',
      '/images/models/la-039-4.jpg',
      '/images/models/la-039-5.jpg',
      '/images/models/la-039-6.jpg',
    ],
              description: {
      'zh-CN': `新人纯洛杉矶 留学生 01年 170cm 48kg C 长发清纯 甜美可爱 女友feel`,
      'zh-TW': `新人純洛杉磯 留學生 01年 170cm 48kg C 長髮清純 甜美可愛 女友feel`,
      'en': `Newcomer pure Los Angeles, international student, born 2001, 170cm 48kg C cup, long hair pure, sweet cute, girlfriend feel`,
      'ko': `신인 순수 로스앤젤레스, 유학생, 01년생, 170cm 48kg C컵, 긴 머리 순수, 달콤하고 귀여움, 여자친구 느낌`,
      'ja': `新人純粋ロサンゼルス、留学生、01年生まれ、170cm 48kg Cカップ、長髪清純、甘くて可愛い、彼女感`
    },
    city: 'losangeles'
  },
  {
    id: 'la-040',
        name: {
      'zh-CN': '洛杉矶40号',
      'zh-TW': '洛杉磯40號',
      'en': 'Los Angeles #40',
      'ko': '로스앤젤레스 40호',
      'ja': 'ロサンゼルス40号'
    },
    mainImage: '/images/models/la-040-2.jpg',
    images: [
      '/images/models/la-040-1.jpg',
      '/images/models/la-040-2.jpg',
      '/images/models/la-040-3.jpg',
      '/images/models/la-040-4.jpg',
    ],
              description: {
      'zh-CN': `美国 洛杉矶新人 真实空姐，身高168，C 真胸 服务好 有气质 高素质 提前预约`,
      'zh-TW': `美國 洛杉磯新人 真實空姐，身高168，C 真胸 服務好 有氣質 高素質 提前預約`,
      'en': `USA, Los Angeles newcomer, real flight attendant, height 168cm, C cup real breasts, good service, elegant temperament, high quality, advance booking`,
      'ko': `미국, 로스앤젤레스 신인, 진짜 승무원, 키 168cm, C컵 진짜 가슴, 좋은 서비스, 우아한 기질, 고품질, 사전 예약`,
      'ja': `アメリカ、ロサンゼルス新人、本当の客室乗務員、身長168cm、Cカップ本物のおっぱい、良いサービス、上品な気質、高品質、事前予約`
    },
    city: 'losangeles'
  },
  {
    id: 'la-041',
        name: {
      'zh-CN': '洛杉矶41号',
      'zh-TW': '洛杉磯41號',
      'en': 'Los Angeles #41',
      'ko': '로스앤젤레스 41호',
      'ja': 'ロサンゼルス41号'
    },
    mainImage: '/images/models/la-041-3.jpg',
    images: [
      '/images/models/la-041-1.jpg',
      '/images/models/la-041-2.jpg',
      '/images/models/la-041-3.jpg',
      '/images/models/la-041-4.jpg',
    ],
              description: {
      'zh-CN': `美国 洛杉矶03年学妹 168c。可查id 大眼萌妹 清纯可爱 可提前预约`,
      'zh-TW': `美國 洛杉磯03年學妹 168c。可查id 大眼萌妹 清純可愛 可提前預約`,
      'en': `USA, Los Angeles 2003-born junior, 168cm C cup. Can verify ID, big-eyed cute girl, pure and lovely, advance booking available`,
      'ko': `미국, 로스앤젤레스 03년생 후배, 168cm C컵. ID 확인 가능, 큰 눈 귀여운 소녀, 순수하고 사랑스러움, 사전 예약 가능`,
      'ja': `アメリカ、ロサンゼルス03年生まれ後輩、168cm Cカップ。ID確認可能、大きな目のかわいい女の子、清純で愛らしい、事前予約可能`
    },
    city: 'losangeles'
  },
  {
    id: 'la-042',
        name: {
      'zh-CN': '洛杉矶42号',
      'zh-TW': '洛杉磯42號',
      'en': 'Los Angeles #42',
      'ko': '로스앤젤레스 42호',
      'ja': 'ロサンゼルス42号'
    },
    mainImage: '/images/models/la-042-2.jpg',
    images: [
      '/images/models/la-042-1.jpg',
      '/images/models/la-042-2.jpg',
      '/images/models/la-042-3.jpg',
      '/images/models/la-042-4.jpg',
      '/images/models/la-042-5.jpg',
    ],
              description: {
      'zh-CN': `洛杉矶首开第一次 真实在读00后留学生 可查ID 165/49/C`,
      'zh-TW': `洛杉磯首開第一次 真實在讀00後留學生 可查ID 165/49/C`,
      'en': `Los Angeles first time debut, real current 2000s-born international student, can verify ID, 165cm/49kg/C cup`,
      'ko': `로스앤젤레스 첫 데뷔, 진짜 재학중인 00년대생 유학생, ID 확인 가능, 165cm/49kg/C컵`,
      'ja': `ロサンゼルス初回デビュー、本当の在学中00年代生まれ留学生、ID確認可能、165cm/49kg/Cカップ`
    },
    city: 'losangeles'
  },
  {
    id: 'la-043',
        name: {
      'zh-CN': '洛杉矶43号',
      'zh-TW': '洛杉磯43號',
      'en': 'Los Angeles #43',
      'ko': '로스앤젤레스 43호',
      'ja': 'ロサンゼルス43号'
    },
    mainImage: '/images/models/la-043-1.jpg',
    images: [
      '/images/models/la-043-1.jpg',
      '/images/models/la-043-2.jpg',
      '/images/models/la-043-3.jpg',
      '/images/models/la-043-4.jpg',
      '/images/models/la-043-5.jpg',
    ],
              description: {
      'zh-CN': `洛杉矶 清纯留学生 165cm/45kg 胸D 19岁 真实可看id 纯天然长相甜美皮肤白A4腰`,
      'zh-TW': `洛杉磯 清純留學生 165cm/45kg 胸D 19歲 真實可看id 純天然長相甜美皮膚白A4腰`,
      'en': `Los Angeles, pure international student, 165cm/45kg D cup, 19 years old, real ID viewable, natural sweet appearance fair skin A4 waist`,
      'ko': `로스앤젤레스, 순수 유학생, 165cm/45kg D컵, 19세, 진짜 ID 확인 가능, 천연 달콤한 외모 하얀 피부 A4 허리`,
      'ja': `ロサンゼルス、清純留学生、165cm/45kg Dカップ、19歳、実ID確認可能、天然甘い外見白い肌A4ウエスト`
    },
    city: 'losangeles'
  },
  {
    id: 'la-044',
        name: {
      'zh-CN': '洛杉矶44号',
      'zh-TW': '洛杉磯44號',
      'en': 'Los Angeles #44',
      'ko': '로스앤젤레스 44호',
      'ja': 'ロサンゼルス44号'
    },
    mainImage: '/images/models/la-044-3.jpg',
    images: [
      '/images/models/la-044-1.jpg',
      '/images/models/la-044-2.jpg',
      '/images/models/la-044-3.jpg',
      '/images/models/la-044-4.jpg',
      '/images/models/la-044-5.jpg',
    ],
              description: {
      'zh-CN': `性感純欲，在校生兼职 大E真杯 蜜桃臀 浑身雪白 甜美如初恋`,
      'zh-TW': `性感純慾，在校生兼職 大E真杯 蜜桃臀 渾身雪白 甜美如初戀`,
      'en': `Sexy pure desire, part-time student, large E real cup, peach butt, snow white all over, sweet as first love`,
      'ko': `섹시한 순수 욕망, 재학생 파트타임, 큰 E 진짜 컵, 복숭아 엉덩이, 온몸이 눈처럼 하얨, 첫사랑처럼 달콤함`,
      'ja': `セクシーな純欲、在校生パートタイム、大E本物カップ、桃のお尻、全身雪白、初恋のように甘い`
    },
    city: 'losangeles'
  },
  {
    id: 'la-045',
    name: {
      'zh-CN': '洛杉矶45号',
      'zh-TW': '洛杉磯45號',
      'en': 'Los Angeles #45',
      'ko': '로스앤젤레스 45호',
      'ja': 'ロサンゼルス45号'
    },
    mainImage: '/images/models/la-045-4.jpg',
    images: [
      '/images/models/la-045-1.jpg',
      '/images/models/la-045-2.jpg',
      '/images/models/la-045-3.jpg',
      '/images/models/la-045-4.jpg',
    ],
    description: {
      'zh-CN': `百万模特，爱豆，艺人（真人） 身高 167cm 胸围 G 杯（大G体验） 腰围 63 臀围 103  纯天然无整（没有整容） 臀超极翘，圆润❗❗❗ 可甜可御 本人超级甜美，宅男女神 擅长一字马 “交流”，钢管舞（性感辣舞） “电动马达臀" ：🉑自动 10mins 酥胸体验`,
      'zh-TW': `百萬模特，愛豆，藝人（真人） 身高 167cm 胸圍 G 杯（大G體驗） 腰圍 63 臀圍 103  純天然無整（沒有整容） 臀超極翹，圓潤❗❗❗ 可甜可御 本人超級甜美，宅男女神 擅長一字馬 “交流”，鋼管舞（性感辣舞） “電動馬達臀" ：🉑自動 10mins 酥胸體驗`,
      'en': `Million-dollar model, idol, artist (real person), height 167cm, bust G cup (large G experience), waist 63, hip 103, pure natural no surgery (no plastic surgery), super perky and round butt❗❗❗ Can be sweet or dominant, super sweet personality, otaku goddess, skilled at splits "communication", pole dance (sexy hot dance), "electric motor butt": 🉑automatic 10mins tender breast experience`,
      'ko': `백만 달러 모델, 아이돌, 아티스트 (실제 인물), 키 167cm, 가슴둘레 G컵 (대형 G 경험), 허리 63, 엉덩이 103, 순수 천연 무성형 (성형 없음), 엉덩이 초 볼륨감, 둥글❗❗❗ 달콤하거나 지배적일 수 있음, 초달콤한 성격, 오타쿠 여신, 스플릿 전문 "소통", 폴댄스 (섹시한 핫댄스), "전동 모터 엉덩이": 🉑자동 10분 부드러운 가슴 경험`,
      'ja': `百万ドルモデル、アイドル、アーティスト（実在人物）、身長167cm、胸囲Gカップ（大G体験）、ウエスト63、ヒップ103、純天然無整形（整形なし）、お尻超ぷるぷる、丸い❗❗❗甘くも支配的にも、超甘い性格、オタク女神、開脚上手「コミュニケーション」、ポールダンス（セクシーホットダンス）、"電動モーターお尻": 🉑自動10分柔らかい胸体験`
    },
    city: 'losangeles'
  },
  {
    id: 'la-047',
        name: {
      'zh-CN': '洛杉矶47号',
      'zh-TW': '洛杉磯47號',
      'en': 'Los Angeles #47',
      'ko': '로스앤젤레스 47호',
      'ja': 'ロサンゼルス47号'
    },
    mainImage: '/images/models/la-047-3.jpg',
    images: [
      '/images/models/la-047-1.jpg',
      '/images/models/la-047-2.jpg',
      '/images/models/la-047-3.jpg',
      '/images/models/la-047-4.jpg',
    ],
              description: {
      'zh-CN': `美国留学生 168/d/48kg 01年 纯欲天菜 s身材 折角腰蜜桃臀d奶真 给你极致视觉盛宴 高学历高素质 中英流利 脾气超级好的校园女神白月光`,
      'zh-TW': `美國留學生 168/d/48kg 01年 純慾天菜 s身材 折角腰蜜桃臀d奶真 給你極致視覺盛宴 高學歷高素質 中英流利 脾氣超級好的校園女神白月光`,
      'en': `USA international student 168cm/D cup/48kg 2001-born pure desire goddess, S figure, defined waist peach butt real D breasts, giving you ultimate visual feast, high education high quality, fluent Chinese and English, super good-tempered campus goddess white moonlight`,
      'ko': `미국 유학생 168cm/D컵/48kg 01년생 순수 욕망 여신, S라인, 각진 허리 복숭아 엉덩이 진짜 D가슴, 극한의 시각적 향연 제공, 고학력 고품질, 중국어 영어 유창, 성격 초우수한 캠퍼스 여신 백월광`,
      'ja': `アメリカ留学生168cm/Dカップ/48kg 01年生まれ純欲天菜、S体型、角張った腰桃のお尻本物Dおっぱい、極致の視覚的饗宴を提供、高学歴高品質、中英流暢、性格超良いキャンパス女神白月光`
    },
    city: 'losangeles'
  },
  {
    id: 'la-048',
        name: {
      'zh-CN': '洛杉矶48号',
      'zh-TW': '洛杉磯48號',
      'en': 'Los Angeles #48',
      'ko': '로스앤젤레스 48호',
      'ja': 'ロサンゼルス48号'
    },
    mainImage: '/images/models/la-048-3.jpg',
    images: [
      '/images/models/la-048-1.jpg',
      '/images/models/la-048-2.jpg',
      '/images/models/la-048-3.jpg',
      '/images/models/la-048-4.jpg',
    ],
              description: {
      'zh-CN': `甜美女神 活好不事逼，性格落落大方，碧玺款 165D, 48kg，极致的女友体验`,
      'zh-TW': `甜美女神 活好不事逼，性格落落大方，碧璽款 165D, 48kg，極致的女友體驗`,
      'en': `Sweet goddess, good at it not pushy, generous personality, tourmaline style 165cm D cup, 48kg, ultimate girlfriend experience`,
      'ko': `달콤한 여신, 잘하고 까다롭지 않음, 관대한 성격, 토르말린 스타일 165cm D컵, 48kg, 극한의 여자친구 경험`,
      'ja': `甘い女神、上手でうるさくない、大らかな性格、トルマリンスタイル165cm Dカップ、48kg、極致の彼女体験`
    },
    city: 'losangeles'
  },
  {
    id: 'la-049',
        name: {
      'zh-CN': '洛杉矶49号',
      'zh-TW': '洛杉磯49號',
      'en': 'Los Angeles #49',
      'ko': '로스앤젤레스 49호',
      'ja': 'ロサンゼルス49号'
    },
    mainImage: '/images/models/la-049-7.jpg',
    images: [
      '/images/models/la-049-1.jpg',
      '/images/models/la-049-2.jpg',
      '/images/models/la-049-3.jpg',
      '/images/models/la-049-4.jpg',
      '/images/models/la-049-5.jpg',
      '/images/models/la-049-6.jpg',
      '/images/models/la-049-7.jpg',
    ],
              description: {
      'zh-CN': `99 167/D 细腰🍑臀 S曲线 皮肤细腻 可甜可御小性感 高情商交流 🏻功底 高級気質ホワイトカラー 𝙏𝙝𝙖𝙣𝙠𝙨 𝙮𝙤𝙪 •𝘽𝙤𝙨𝙨 ⛅⛅⛅⛅ 希望是你领略万物之后 余悸的冲动 ☾ 全球🌍可飞 颜值气质极佳 Looking forward to meeting you`,
      'zh-TW': `99 167/D 細腰🍑臀 S曲線 皮膚細膩 可甜可御小性感 高情商交流 🏻功底 高級気質ホワイトカラー 𝙏𝙝𝙖𝙣𝙠𝙨 𝙮𝙤𝙪 •𝘽𝙤𝙨𝙨 ⛅⛅⛅⛅ 希望是你領略萬物之後 餘悸的衝動 ☾ 全球🌍可飛 顏值氣質極佳 Looking forward to meeting you`,
      'en': `1999-born 167cm/D cup, slim waist 🍑 butt, S curve, delicate skin, can be sweet or dominant little sexy, high EQ communication, foundation skills, high-class temperament white collar, Thanks you •Boss ⛅⛅⛅⛅ Hope to be the lingering impulse after you experience everything ☾ Global🌍 travel available, excellent looks and temperament Looking forward to meeting you`,
      'ko': `99년생 167cm/D컵, 가는 허리 🍑 엉덩이, S커브, 섬세한 피부, 달콤하거나 지배적일 수 있는 작은 섹시, 높은 EQ 소통, 기초 실력, 고급스러운 기질 화이트칼라, Thanks you •Boss ⛅⛅⛅⛅ 모든 것을 경험한 후의 여운이 되길 바람 ☾ 글로벌🌍 여행 가능, 뛰어난 외모와 기질 만나기를 기대합니다`,
      'ja': `99年生まれ167cm/Dカップ、細い腰🍑お尻、Sカーブ、繊細な肌、甘くも支配的にもなれる小さなセクシー、高EQコミュニケーション、基礎スキル、高級気質ホワイトカラー、Thanks you •Boss ⛅⛅⛅⛅ 万物を体験した後の余韻になりたい☾グローバル🌍旅行可能、優れた外見と気質、お会いできることを楽しみにしています`
    },
    city: 'losangeles'
  },
  {
    id: 'la-050',
        name: {
      'zh-CN': '洛杉矶50号',
      'zh-TW': '洛杉磯50號',
      'en': 'Los Angeles #50',
      'ko': '로스앤젤레스 50호',
      'ja': 'ロサンゼルス50号'
    },
    mainImage: '/images/models/la-050-5.jpg',
    images: [
      '/images/models/la-050-1.jpg',
      '/images/models/la-050-2.jpg',
      '/images/models/la-050-3.jpg',
      '/images/models/la-050-4.jpg',
      '/images/models/la-050-5.jpg',
    ],
              description: {
      'zh-CN': `美国真实网红留学生🧑‍ 暑期兼职 168D 44Kg S身材 雪白皮肤 高素质 全英文无障碍沟通 真实数据 毫无水分🥰 只见高素质k`,
      'zh-TW': `美國真實網紅留學生🧑‍ 暑期兼職 168D 44Kg S身材 雪白皮膚 高素質 全英文無障礙溝通 真實數據 毫無水分🥰 只見高素質k`,
      'en': `USA real internet celebrity international student🧑‍ summer part-time, 168cm D cup 44kg S figure, snow white skin, high quality, fluent English communication, real data, no exaggeration🥰 only high quality clients`,
      'ko': `미국 진짜 인플루언서 유학생🧑‍ 여름 파트타임, 168cm D컵 44kg S라인, 눈처럼 하얀 피부, 고품질, 영어 소통 유창, 진짜 데이터, 과장 없음🥰 고품질 고객만`,
      'ja': `アメリカ本当のインフルエンサー留学生🧑‍夏期パートタイム、168cm Dカップ44kg S体型、雪白の肌、高品質、英語コミュニケーション流暢、実データ、誇張なし🥰高品質のお客様のみ`
    },
    city: 'losangeles'
  },
  {
    id: 'la-051',
        name: {
      'zh-CN': '洛杉矶51号',
      'zh-TW': '洛杉磯51號',
      'en': 'Los Angeles #51',
      'ko': '로스앤젤레스 51호',
      'ja': 'ロサンゼルス51号'
    },
    mainImage: '/images/models/la-051-4.jpg',
    images: [
      '/images/models/la-051-1.jpg',
      '/images/models/la-051-2.jpg',
      '/images/models/la-051-3.jpg',
      '/images/models/la-051-4.jpg',
      '/images/models/la-051-5.jpg',
    ],
              description: {
      'zh-CN': `02年净身高170 体重110斤 真80D  前凸后翘 3点粉嫩 新加坡在读`,
      'zh-TW': `02年淨身高170 體重110斤 真80D  前凸後翹 3點粉嫩 新加坡在讀`,
      'en': `2002-born net height 170cm weight 110 jin real 80D, curvy front and back, 3 points pink tender, studying in Singapore`,
      'ko': `02년생 순키 170cm 체중 110근 진짜 80D, 앞뒤 볼륨감, 3점 분홍 부드러움, 싱가포르 재학중`,
      'ja': `02年生まれ純身長170cm体重110斤本物80D、前凸後翘、3点ピンク柔らか、シンガポール在学中`
    },
    city: 'losangeles'
  },
  {
    id: 'la-052',
        name: {
      'zh-CN': '洛杉矶52号',
      'zh-TW': '洛杉磯52號',
      'en': 'Los Angeles #52',
      'ko': '로스앤젤레스 52호',
      'ja': 'ロサンゼルス52号'
    },
    mainImage: '/images/models/la-052-4.jpg',
    images: [
      '/images/models/la-052-1.jpg',
      '/images/models/la-052-2.jpg',
      '/images/models/la-052-3.jpg',
      '/images/models/la-052-4.jpg',
    ],
              description: {
      'zh-CN': `英国留学生在洛杉矶 167 D 超级小纯身高167胸D天然无整90斤 清纯界天花板 服务好水多3点粉嫩`,
      'zh-TW': `英國留學生在洛杉磯 167 D 超級小純身高167胸D天然無整90斤 清純界天花板 服務好水多3點粉嫩`,
      'en': `UK international student in Los Angeles 167cm D cup, super small pure height 167cm chest D natural no surgery 90 jin, pure realm ceiling, good service lots of water 3 points pink tender`,
      'ko': `영국 유학생 로스앤젤레스에서 167cm D컵, 초소형 순수 키 167cm 가슴 D 천연 무성형 90근, 순수계 천장, 좋은 서비스 물 많음 3점 분홍 부드러움`,
      'ja': `イギリス留学生ロサンゼルスで167cm Dカップ、超小型純粋身長167cm胸D天然無整形90斤、清純界天井、良いサービス水分多3点ピンク柔らか`
    },
    city: 'losangeles'
  },
  {
    id: 'la-053',
        name: {
      'zh-CN': '洛杉矶53号',
      'zh-TW': '洛杉磯53號',
      'en': 'Los Angeles #53',
      'ko': '로스앤젤레스 53호',
      'ja': 'ロサンゼルス53号'
    },
    mainImage: '/images/models/la-053-4.jpg',
    images: [
      '/images/models/la-053-1.jpg',
      '/images/models/la-053-2.jpg',
      '/images/models/la-053-3.jpg',
      '/images/models/la-053-4.jpg',
    ],
              description: {
      'zh-CN': `极品刚刚下海18岁舞蹈生宅男女神，鲜嫩欲滴加州校花网红，网感女友颜～166CM 天然C 杯 性格活泼开朗会黏人，短期工作`,
      'zh-TW': `極品剛剛下海18歲舞蹈生宅男女神，鮮嫩欲滴加州校花網紅，網感女友顏～166CM 天然C 杯 性格活潑開朗會黏人，短期工作`,
      'en': `Premium just debuted 18-year-old dance student otaku goddess, fresh and juicy California campus queen internet celebrity, online girlfriend look～166cm natural C cup, lively cheerful personality clingy, short-term work`,
      'ko': `프리미엄 갓 데뷔 18세 댄스학생 오타쿠 여신, 신선하고 촉촉한 캘리포니아 캠퍼스 퀸 인플루언서, 온라인 여자친구 룩～166cm 천연 C컵, 활발하고 밝은 성격 애착, 단기 근무`,
      'ja': `プレミアム初デビュー18歳ダンス学生オタク女神、新鮮でジューシーなカリフォルニアキャンパスクイーンインフルエンサー、ネット彼女顔～166cm天然Cカップ、活発で明るい性格ベタベタ、短期勤務`
    },
    city: 'losangeles'
  },
  {
    id: 'la-054',
        name: {
      'zh-CN': '洛杉矶54号',
      'zh-TW': '洛杉磯54號',
      'en': 'Los Angeles #54',
      'ko': '로스앤젤레스 54호',
      'ja': 'ロサンゼルス54号'
    },
    mainImage: '/images/models/la-054-4.jpg',
    images: [
      '/images/models/la-054-1.jpg',
      '/images/models/la-054-2.jpg',
      '/images/models/la-054-3.jpg',
      '/images/models/la-054-4.jpg',
    ],
              description: {
      'zh-CN': `神似嫩模梨花&玉兰油模特，百万伏特闪烁大眼睛，一眼高级大漂174CM 纯天然C 挺拔高挑匀称身姿，平肩薄背天鹅颈，四肢修长媲美嫩模，细腰逆天绝世长美腿`,
      'zh-TW': `神似嫩模梨花&玉蘭油模特，百萬伏特閃爍大眼睛，一眼高級大漂174CM 純天然C 挺拔高挑勻稱身姿，平肩薄背天鵝頸，四肢修長媲美嫩模，細腰逆天絕世長美腿`,
      'en': `Resembles young model Rika & Olay model, million volt sparkling big eyes, first glance high-class big drift 174cm pure natural C cup, tall straight proportional figure, flat shoulders thin back swan neck, long limbs rivaling young models, slim waist heavenly ultimate long beautiful legs`,
      'ko': `젊은 모델 리카 & 올레이 모델과 닮음, 백만 볼트 반짝이는 큰 눈, 첫눈에 고급스러운 큰 드리프트 174cm 순천연 C컵, 키크고 곧은 균형잡힌 몸매, 평어깨 얇은 등 백조 목, 긴 사지 젊은 모델에 필적, 가는 허리 천상의 절세 긴 아름다운 다리`,
      'ja': `若いモデル梨花＆オレイモデルに似ている、百万ボルトキラキラ大きな目、一目で高級な大漂174cm純天然Cカップ、背筋の伸びた高くて均整の取れた体つき、平肩薄背白鳥の首、四肢の長さ若いモデルに匹敵、細い腰逆天絶世の長い美脚`
    },
    city: 'losangeles'
  },
  {
    id: 'la-055',
        name: {
      'zh-CN': '洛杉矶55号',
      'zh-TW': '洛杉磯55號',
      'en': 'Los Angeles #55',
      'ko': '로스앤젤레스 55호',
      'ja': 'ロサンゼルス55号'
    },
    mainImage: '/images/models/la-055-1.jpg',
    images: [
      '/images/models/la-055-1.jpg',
      '/images/models/la-055-2.jpg',
      '/images/models/la-055-3.jpg',
      '/images/models/la-055-4.jpg',
      '/images/models/la-055-5.jpg',
      '/images/models/la-055-6.jpg',
      '/images/models/la-055-7.jpg',
      '/images/models/la-055-8.jpg',
    ],
              description: {
      'zh-CN': `LA 新人身高/Height 165cm胸围/Bus天然D体重/Weight 44kg软萌甜美少女感 超级温柔 童颜巨乳`,
      'zh-TW': `LA 新人身高/Height 165cm胸圍/Bus天然D體重/Weight 44kg軟萌甜美少女感 超級溫柔 童顏巨乳`,
      'en': `LA newcomer height/Height 165cm bust/Bus natural D weight/Weight 44kg soft cute sweet girl feeling, super gentle, childlike face big breasts`,
      'ko': `LA 신인 키/Height 165cm 가슴둘레/Bus 천연 D 체중/Weight 44kg 부드럽고 귀여운 달콤한 소녀감, 초우아함, 동안 거유`,
      'ja': `LA新人身長/Height 165cmバスト/Bus天然D体重/Weight 44kg柔らかくて可愛い甘い少女感、超優しい、童顔巨乳`
    },
    city: 'losangeles'
  },
  {
    id: 'la-056',
        name: {
      'zh-CN': '洛杉矶56号',
      'zh-TW': '洛杉磯56號',
      'en': 'Los Angeles #56',
      'ko': '로스앤젤레스 56호',
      'ja': 'ロサンゼルス56号'
    },
    mainImage: '/images/models/la-056-2.jpg',
    images: [
      '/images/models/la-056-1.jpg',
      '/images/models/la-056-2.jpg',
      '/images/models/la-056-3.jpg',
      '/images/models/la-056-4.jpg',
      '/images/models/la-056-5.jpg',
    ],
              description: {
      'zh-CN': `洛杉矶04留学生刚刚下海，清纯小美女，165真D服务态度好，配合，三点粉嫩多汁💧尤物`,
      'zh-TW': `洛杉磯04留學生剛剛下海，清純小美女，165真D服務態度好，配合，三點粉嫩多汁💧尤物`,
      'en': `Los Angeles 2004 international student just debuted, pure little beauty, 165cm real D good service attitude, cooperative, three points pink tender juicy💧 goddess`,
      'ko': `로스앤젤레스 04 유학생 갓 데뷔, 순수한 작은 미녀, 165cm 진짜 D 좋은 서비스 태도, 협조적, 3점 분홍 부드럽고 촉촉함💧 여신`,
      'ja': `ロサンゼルス04留学生初デビュー、清純な小美女、165cm本物D良いサービス態度、協力的、3点ピンク柔らかくてジューシー💧女神`
    },
    city: 'losangeles'
  },
  {
    id: 'la-057',
        name: {
      'zh-CN': '洛杉矶57号',
      'zh-TW': '洛杉磯57號',
      'en': 'Los Angeles #57',
      'ko': '로스앤젤레스 57호',
      'ja': 'ロサンゼルス57号'
    },
    mainImage: '/images/models/la-057-3.jpg',
    images: [
      '/images/models/la-057-1.jpg',
      '/images/models/la-057-2.jpg',
      '/images/models/la-057-3.jpg',
    ],
              description: {
      'zh-CN': `04 在读留学生 白小纯 168 34C 98斤 高学历 高素质`,
      'zh-TW': `04 在讀留學生 白小純 168 34C 98斤 高學歷 高素質`,
      'en': `2004 current international student, Bai Xiaochun, 168cm 34C 98 jin, high education, high quality`,
      'ko': `04 재학중인 유학생, 바이샤오춘, 168cm 34C 98근, 고학력, 고품질`,
      'ja': `04在学中留学生、白小純、168cm 34C 98斤、高学歴、高品質`
    },
    city: 'losangeles'
  },
  {
    id: 'la-058',
        name: {
      'zh-CN': '洛杉矶58号',
      'zh-TW': '洛杉磯58號',
      'en': 'Los Angeles #58',
      'ko': '로스앤젤레스 58호',
      'ja': 'ロサンゼルス58号'
    },
    mainImage: '/images/models/la-058-2.jpg',
    images: [
      '/images/models/la-058-1.jpg',
      '/images/models/la-058-2.jpg',
      '/images/models/la-058-3.jpg',
      '/images/models/la-058-4.jpg',
      '/images/models/la-058-5.jpg',
      '/images/models/la-058-6.jpg',
      '/images/models/la-058-7.jpg',
    ],
              description: {
      'zh-CN': `纯兼职 极品02年可验🪪 净身高170 真E 纯天然 皮肤雪白 洋气甜美 可爱纯欲款 名校毕业生 蜜桃翘臀 极品甜美少女 性格有趣`,
      'zh-TW': `純兼職 極品02年可驗🪪 淨身高170 真E 純天然 皮膚雪白 洋氣甜美 可愛純慾款 名校畢業生 蜜桃翹臀 極品甜美少女 性格有趣`,
      'en': `Pure part-time, premium 2002-born verifiable🪪 net height 170cm real E cup, pure natural, snow white skin, western sweet, cute pure desire style, elite university graduate, peach perky butt, premium sweet girl, interesting personality`,
      'ko': `순수 파트타임, 프리미엄 02년생 확인 가능🪪 순키 170cm 진짜 E컵, 순천연, 눈처럼 하얀 피부, 서양적 달콤함, 귀여운 순수 욕망 스타일, 명문대 졸업생, 복숭아 볼륨 엉덩이, 프리미엄 달콤한 소녀, 재미있는 성격`,
      'ja': `純粋パートタイム、プレミアム02年生まれ確認可能🪪純身長170cm本物Eカップ、純天然、雪白の肌、洋風甘い、可愛い純欲スタイル、名門大学卒業生、桃の丸いお尻、プレミアム甘い少女、面白い性格`
    },
    city: 'losangeles'
  },
  {
    id: 'la-059',
        name: {
      'zh-CN': '洛杉矶59号',
      'zh-TW': '洛杉磯59號',
      'en': 'Los Angeles #59',
      'ko': '로스앤젤레스 59호',
      'ja': 'ロサンゼルス59号'
    },
    mainImage: '/images/models/la-059-4.jpg',
    images: [
      '/images/models/la-059-1.jpg',
      '/images/models/la-059-2.jpg',
      '/images/models/la-059-3.jpg',
      '/images/models/la-059-4.jpg',
      '/images/models/la-059-5.jpg',
      '/images/models/la-059-6.jpg',
    ],
              description: {
      'zh-CN': `身高165 体重46kg 真胸D 天生冷白皮 研究生在读`,
      'zh-TW': `身高165 體重46kg 真胸D 天生冷白皮 研究生在讀`,
      'en': `Height 165cm weight 46kg real breasts D cup, naturally cool white skin, graduate student`,
      'ko': `키 165cm 체중 46kg 진짜 가슴 D컵, 천연 차가운 하얀 피부, 대학원생`,
      'ja': `身長165cm体重46kg本物のおっぱいDカップ、天然冷白肌、大学院生`
    },
    city: 'losangeles'
  },
  {
    id: 'la-060',
        name: {
      'zh-CN': '洛杉矶60号',
      'zh-TW': '洛杉磯60號',
      'en': 'Los Angeles #60',
      'ko': '로스앤젤레스 60호',
      'ja': 'ロサンゼルス60号'
    },
    mainImage: '/images/models/la-060-2.jpg',
    images: [
      '/images/models/la-060-1.jpg',
      '/images/models/la-060-2.jpg',
      '/images/models/la-060-3.jpg',
      '/images/models/la-060-4.jpg',
      '/images/models/la-060-5.jpg',
    ],
              description: {
      'zh-CN': `170cm 36F 00年童颜脸 蜜桃臀 前凸后翘 大胸真胸 全身保真`,
      'zh-TW': `170cm 36F 00年童顏臉 蜜桃臀 前凸後翹 大胸真胸 全身保真`,
      'en': `170cm 36F 2000-born childlike face, peach butt, curvy front and back, big real breasts, full body authentic`,
      'ko': `170cm 36F 00년생 동안 얼굴, 복숭아 엉덩이, 앞뒤 볼륨감, 큰 진짜 가슴, 전신 진품`,
      'ja': `170cm 36F 00年生まれ童顔、桃のお尻、前凸後翘、大きな本物のおっぱい、全身保真`
    },
    city: 'losangeles'
  },
  {
    id: 'la-061',
        name: {
      'zh-CN': '洛杉矶61号',
      'zh-TW': '洛杉磯61號',
      'en': 'Los Angeles #61',
      'ko': '로스앤젤레스 61호',
      'ja': 'ロサンゼルス61号'
    },
    mainImage: '/images/models/la-061-3.jpg',
    images: [
      '/images/models/la-061-1.jpg',
      '/images/models/la-061-2.jpg',
      '/images/models/la-061-3.jpg',
    ],
              description: {
      'zh-CN': `USA真实研究生 净身高176 55kg   胸C 可纯可欲`,
      'zh-TW': `USA真實研究生 淨身高176 55kg   胸C 可純可慾`,
      'en': `USA real graduate student, net height 176cm 55kg, C cup, can be pure or desire`,
      'ko': `미국 진짜 대학원생, 순키 176cm 55kg, C컵, 순수하거나 욕망 가능`,
      'ja': `アメリカ本当の大学院生、純身長176cm 55kg、Cカップ、純粋にも欲望にも`
    },
    city: 'losangeles'
  },
  
  // 旧金山模特
  {
    id: 'sf-004',
        name: {
      'zh-CN': '旧金山4号',
      'zh-TW': '舊金山4號',
      'en': 'San Francisco #4',
      'ko': '샌프란시스코 4호',
      'ja': 'サンフランシスコ4号'
    },
    mainImage: '/images/models/sf-004-2.jpg',
    images: [
      '/images/models/sf-004-1.jpg',
      '/images/models/sf-004-2.jpg',
      '/images/models/sf-004-3.jpg',
      '/images/models/sf-004-4.jpg',
    ],
        description: {
      'zh-CN': `旧金山新人新人净170 D 首次 皮肤雪白 长年健身瑜伽完美身材比例 柔声细语委婉动人 待你如初恋`,
      'zh-TW': `舊金山新人新人淨170 D 首次 皮膚雪白 長年健身瑜伽完美身材比例 柔聲細語委婉動人 待你如初戀`,
      'en': `San Francisco newcomer net 170cm D cup first time, snow white skin, years of fitness yoga perfect body proportions, soft voice gentle and moving, treats you like first love`,
      'ko': `샌프란시스코 신인 순키 170cm D컵 첫번째, 눈처럼 하얀 피부, 수년간 피트니스 요가 완벽한 몸매 비율, 부드러운 목소리 우아하고 감동적, 첫사랑처럼 대함`,
      'ja': `サンフランシスコ新人純170cm Dカップ初回、雪白の肌、長年のフィットネスヨガ完璧な体型比率、柔らかい声優雅で感動的、初恋のように扱う`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-005',
        name: {
      'zh-CN': '旧金山5号',
      'zh-TW': '舊金山5號',
      'en': 'San Francisco #5',
      'ko': '샌프란시스코 5호',
      'ja': 'サンフランシスコ5号'
    },
    mainImage: '/images/models/sf-005-3.jpg',
    images: [
      '/images/models/sf-005-1.jpg',
      '/images/models/sf-005-2.jpg',
      '/images/models/sf-005-3.jpg',
      '/images/models/sf-005-4.jpg',
    ],
        description: {
      'zh-CN': `美国旧金山 新人开 ??身高166C 研究生在读 真人真照 不施粉黛 禁挂 禁冒 提前预约`,
      'zh-TW': `美國舊金山 新人開 ??身高166C 研究生在讀 真人真照 不施粉黛 禁掛 禁冒 提前預約`,
      'en': `USA San Francisco newcomer debut ??height 166cm C cup graduate student, real person real photos, no makeup, no hanging no faking, advance booking`,
      'ko': `미국 샌프란시스코 신인 데뷔 ??키 166cm C컵 대학원생, 진짜 사람 진짜 사진, 화장 없음, 걸기 금지 가짜 금지, 사전 예약`,
      'ja': `アメリカサンフランシスコ新人デビュー？？身長166cm Cカップ大学院生、実人実写真、化粧なし、掛け禁止偽物禁止、事前予約`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-006',
        name: {
      'zh-CN': '旧金山6号',
      'zh-TW': '舊金山6號',
      'en': 'San Francisco #6',
      'ko': '샌프란시스코 6호',
      'ja': 'サンフランシスコ6号'
    },
    mainImage: '/images/models/sf-006-3.jpg',
    images: [
      '/images/models/sf-006-1.jpg',
      '/images/models/sf-006-2.jpg',
      '/images/models/sf-006-3.jpg',
      '/images/models/sf-006-4.jpg',
    ],
        description: {
      'zh-CN': `美国 旧金山极品纯欲天花板 ??留学生 172D/01年 清纯皮肤雪白貌美大长腿 好评如潮，原相机也视频也超`,
      'zh-TW': `美國 舊金山極品純欲天花板 ??留學生 172D/01年 清純皮膚雪白貌美大長腿 好評如潮，原相機也視頻也超`,
      'en': `USA San Francisco premium pure desire ceiling ??international student 172cm D cup/2001-born, pure snow white skin beautiful long legs, rave reviews, original camera and video also super`,
      'ko': `미국 샌프란시스코 프리미엄 순수 욕망 천장 ??유학생 172cm D컵/01년생, 순수 눈처럼 하얀 피부 아름다운 긴 다리, 찬사 쇄도, 원본 카메라와 비디오도 초`,
      'ja': `アメリカサンフランシスコプレミアム純欲天井？？留学生172cm Dカップ/01年生まれ、清純雪白肌美しい長い脚、絶賛の嵐、オリジナルカメラとビデオも超`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-008',
        name: {
      'zh-CN': '旧金山8号',
      'zh-TW': '舊金山8號',
      'en': 'San Francisco #8',
      'ko': '샌프란시스코 8호',
      'ja': 'サンフランシスコ8号'
    },
    mainImage: '/images/models/sf-008-3.jpg',
    images: [
      '/images/models/sf-008-1.jpg',
      '/images/models/sf-008-2.jpg',
      '/images/models/sf-008-3.jpg',
      '/images/models/sf-008-4.jpg',
    ],
        description: {
      'zh-CN': `172真胸大d 皮肤雪白 气质高雅 初恋阳光 真实留学生 提前预约 人照无差 短暂停留几天`,
      'zh-TW': `172真胸大d 皮膚雪白 氣質高雅 初戀陽光 真實留學生 提前預約 人照無差 短暫停留幾天`,
      'en': `172cm real breasts big D cup, snow white skin, elegant temperament, first love sunshine, real international student, advance booking, person and photo no difference, short stay few days`,
      'ko': `172cm 진짜 가슴 큰 D컵, 눈처럼 하얀 피부, 우아한 기질, 첫사랑 햇살, 진짜 유학생, 사전 예약, 사람과 사진 차이 없음, 단기 체류 며칠`,
      'ja': `172cm本物のおっぱい大Dカップ、雪白の肌、上品な気質、初恋の陽射し、本当の留学生、事前予約、人と写真差なし、短期滞在数日`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-013',
        name: {
      'zh-CN': '旧金山13号',
      'zh-TW': '舊金山13號',
      'en': 'San Francisco #13',
      'ko': '샌프란시스코 13호',
      'ja': 'サンフランシスコ13号'
    },
    mainImage: '/images/models/sf-013-3.jpg',
    images: [
      '/images/models/sf-013-1.jpg',
      '/images/models/sf-013-2.jpg',
      '/images/models/sf-013-3.jpg',
      '/images/models/sf-013-4.jpg',
    ],
        description: {
      'zh-CN': `美国 旧金山新人第一次开留学生 166cm c瑜伽身体柔软气质超好，0整，高素质，活波开朗阳光热情配合度极高真实小网红  提前预约`,
      'zh-TW': `美國 舊金山新人第一次開留學生 166cm c瑜伽身體柔軟氣質超好，0整，高素質，活波開朗陽光熱情配合度極高真實小網紅  提前預約`,
      'en': `USA San Francisco newcomer first time debut international student 166cm C cup yoga body soft temperament super good, 0 surgery, high quality, lively cheerful sunny enthusiastic extremely high cooperation real small internet celebrity, advance booking`,
      'ko': `미국 샌프란시스코 신인 첫번째 데뷔 유학생 166cm C컵 요가 몸 부드러운 기질 초우수, 0성형, 고품질, 활발하고 밝은 햇살 열정적 극도로 높은 협조도 진짜 작은 인플루언서, 사전 예약`,
      'ja': `アメリカサンフランシスコ新人初回デビュー留学生166cm Cカップヨガ体柔らかい気質超良い、0整形、高品質、活発で明るい陽気で情熱的極度に高い協力度本当の小さなインフルエンサー、事前予約`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-017',
        name: {
      'zh-CN': '旧金山17号',
      'zh-TW': '舊金山17號',
      'en': 'San Francisco #17',
      'ko': '샌프란시스코 17호',
      'ja': 'サンフランシスコ17号'
    },
    mainImage: '/images/models/sf-017-4.jpg',
    images: [
      '/images/models/sf-017-1.jpg',
      '/images/models/sf-017-2.jpg',
      '/images/models/sf-017-3.jpg',
      '/images/models/sf-017-4.jpg',
    ],
        description: {
      'zh-CN': `旧金山气质美女 留学生 全身大牌 170c  出发秒洗`,
      'zh-TW': `舊金山氣質美女 留學生 全身大牌 170c  出發秒洗`,
      'en': `San Francisco elegant beauty, international student, full body luxury brands, 170cm C cup, departure instant wash`,
      'ko': `샌프란시스코 우아한 미녀, 유학생, 전신 럭셔리 브랜드, 170cm C컵, 출발 즉시 세척`,
      'ja': `サンフランシスコ上品な美女、留学生、全身ブランド品、170cm Cカップ、出発即座洗浄`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-018',
        name: {
      'zh-CN': '旧金山18号',
      'zh-TW': '舊金山18號',
      'en': 'San Francisco #18',
      'ko': '샌프란시스코 18호',
      'ja': 'サンフランシスコ18号'
    },
    mainImage: '/images/models/sf-018-4.jpg',
    images: [
      '/images/models/sf-018-1.jpg',
      '/images/models/sf-018-2.jpg',
      '/images/models/sf-018-3.jpg',
      '/images/models/sf-018-4.jpg',
    ],
        description: {
      'zh-CN': `真实留学生 真实新人 性感成熟欲女 佛系开 173ccm c+ 气质大气高挑 谈吐优雅 女朋友一样的体贴和服务让您流连忘返`,
      'zh-TW': `真實留學生 真實新人 性感成熟欲女 佛系開 173ccm c+ 氣質大氣高挑 談吐優雅 女朋友一樣的體貼和服務讓您流連忘返`,
      'en': `Real international student, real newcomer, sexy mature desire woman, Buddhist-style debut, 173cm C+ cup, elegant tall temperament, graceful conversation, girlfriend-like care and service making you linger`,
      'ko': `진짜 유학생, 진짜 신인, 섹시한 성숙한 욕망 여성, 불교 스타일 데뷔, 173cm C+컵, 우아한 키큰 기질, 우아한 대화, 여자친구 같은 배려와 서비스로 오래 머물게 함`,
      'ja': `本当の留学生、本当の新人、セクシーな成熟した欲女、仏系デビュー、173cm C+カップ、上品で背の高い気質、優雅な会話、彼女のような思いやりとサービスで名残惜しく`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-019',
        name: {
      'zh-CN': '旧金山19号',
      'zh-TW': '舊金山19號',
      'en': 'San Francisco #19',
      'ko': '샌프란시스코 19호',
      'ja': 'サンフランシスコ19号'
    },
    mainImage: '/images/models/sf-019-1.jpg',
    images: [
      '/images/models/sf-019-1.jpg',
      '/images/models/sf-019-2.jpg',
      '/images/models/sf-019-3.jpg',
      '/images/models/sf-019-4.jpg',
    ],
        description: {
      'zh-CN': `美国 旧金山 新人首开 173C 纯欲天花板 甜美粉嫩温柔可人`,
      'zh-TW': `美國 舊金山 新人首開 173C 純欲天花板 甜美粉嫩溫柔可人`,
      'en': `USA San Francisco newcomer first debut 173cm C cup, pure desire ceiling, sweet pink tender gentle lovely`,
      'ko': `미국 샌프란시스코 신인 첫 데뷔 173cm C컵, 순수 욕망 천장, 달콤한 분홍 부드럽고 우아한 사랑스러움`,
      'ja': `アメリカサンフランシスコ新人初デビュー173cm Cカップ、純欲天井、甘いピンク柔らかくて優雅で愛らしい`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-020',
        name: {
      'zh-CN': '旧金山20号',
      'zh-TW': '舊金山20號',
      'en': 'San Francisco #20',
      'ko': '샌프란시스코 20호',
      'ja': 'サンフランシスコ20号'
    },
    mainImage: '/images/models/sf-020-1.jpg',
    images: [
      '/images/models/sf-020-1.jpg',
      '/images/models/sf-020-2.jpg',
      '/images/models/sf-020-3.jpg',
    ],
        description: {
      'zh-CN': `汉娜 168D 旧金山短开到10.1号`,
      'zh-TW': `漢娜 168D 舊金山短開到10.1號`,
      'en': `Hannah 168cm D cup, San Francisco short stay until October 1st`,
      'ko': `한나 168cm D컵, 샌프란시스코 단기 체류 10월 1일까지`,
      'ja': `ハンナ168cm Dカップ、サンフランシスコ短期滞在10月1日まで`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-022',
        name: {
      'zh-CN': '旧金山22号',
      'zh-TW': '舊金山22號',
      'en': 'San Francisco #22',
      'ko': '샌프란시스코 22호',
      'ja': 'サンフランシスコ22号'
    },
    mainImage: '/images/models/sf-022-1.jpg',
    images: [
      '/images/models/sf-022-1.jpg',
      '/images/models/sf-022-2.jpg',
      '/images/models/sf-022-3.jpg',
    ],
        description: {
      'zh-CN': `美国 旧金山新人首开 留学生 18岁 166D 可空降 提前预约`,
      'zh-TW': `美國 舊金山新人首開 留學生 18歲 166D 可空降 提前預約`,
      'en': `USA San Francisco newcomer first debut international student 18 years old 166cm D cup, can air drop, advance booking`,
      'ko': `미국 샌프란시스코 신인 첫 데뷔 유학생 18세 166cm D컵, 공수 가능, 사전 예약`,
      'ja': `アメリカサンフランシスコ新人初デビュー留学生18歳166cm Dカップ、空輸可能、事前予約`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-024',
        name: {
      'zh-CN': '旧金山24号',
      'zh-TW': '舊金山24號',
      'en': 'San Francisco #24',
      'ko': '샌프란시스코 24호',
      'ja': 'サンフランシスコ24号'
    },
    mainImage: '/images/models/sf-024-5.jpg',
    images: [
      '/images/models/sf-024-1.jpg',
      '/images/models/sf-024-2.jpg',
      '/images/models/sf-024-3.jpg',
      '/images/models/sf-024-4.jpg',
      '/images/models/sf-024-5.jpg',
      '/images/models/sf-024-6.jpg',
      '/images/models/sf-024-7.jpg',
    ],
        description: {
      'zh-CN': `旧金山 172d 白如雪 小版蒋梦婕 筷子腿 d胸 真实留学生 腰细 听话不事儿 极致初恋感觉 02年`,
      'zh-TW': `舊金山 172d 白如雪 小版蔣夢婕 筷子腿 d胸 真實留學生 腰細 聽話不事兒 極致初戀感覺 02年`,
      'en': `San Francisco 172cm D cup white as snow, mini version Jiang Mengjie, chopstick legs D breasts, real international student, slim waist, obedient no trouble, ultimate first love feeling, 2002-born`,
      'ko': `샌프란시스코 172cm D컵 눈처럼 하얀, 미니 버전 장멍제, 젓가락 다리 D가슴, 진짜 유학생, 가는 허리, 순종적 문제없음, 극한 첫사랑 느낌, 02년생`,
      'ja': `サンフランシスコ172cm Dカップ雪のように白い、ミニ版蒋梦婕、箸脚D胸、本当の留学生、細い腰、従順で問題なし、極致初恋感覚、02年生まれ`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-028',
        name: {
      'zh-CN': '旧金山28号',
      'zh-TW': '舊金山28號',
      'en': 'San Francisco #28',
      'ko': '샌프란시스코 28호',
      'ja': 'サンフランシスコ28号'
    },
    mainImage: '/images/models/sf-028-2.jpg',
    images: [
      '/images/models/sf-028-1.jpg',
      '/images/models/sf-028-2.jpg',
      '/images/models/sf-028-3.jpg',
      '/images/models/sf-028-4.jpg',
    ],
        description: {
      'zh-CN': `纽约 美女第一次来旧金山 真人 00年白小纯系清纯小妹妹 167  D`,
      'zh-TW': `紐約 美女第一次來舊金山 真人 00年白小純系清純小妹妹 167  D`,
      'en': `New York beauty first time coming to San Francisco, real person, 2000-born Bai Xiaochun series pure little sister, 167cm D cup`,
      'ko': `뉴욕 미녀 샌프란시스코에 처음 방문, 진짜 사람, 00년생 바이샤오춘 시리즈 순수한 작은 여동생, 167cm D컵`,
      'ja': `ニューヨーク美女サンフランシスコ初来訪、実人、00年生まれ白小純シリーズ清純な小姉妹、167cm Dカップ`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-029',
        name: {
      'zh-CN': '旧金山29号',
      'zh-TW': '舊金山29號',
      'en': 'San Francisco #29',
      'ko': '샌프란시스코 29호',
      'ja': 'サンフランシスコ29号'
    },
    mainImage: '/images/models/sf-029-1.jpg',
    images: [
      '/images/models/sf-029-1.jpg',
      '/images/models/sf-029-2.jpg',
      '/images/models/sf-029-3.jpg',
    ],
        description: {
      'zh-CN': `美国 旧金山 纯人 留学生 兼职开 169E 🉑纯🉑蜜 皮肤白嫩 腿长腰细 高学历，高素质，纯天然无整 服务一流，有耐 提前预约`,
      'zh-TW': `美國 舊金山 純人 留學生 兼職開 169E 🉑純🉑蜜 皮膚白嫩 腿長腰細 高學歷，高素質，純天然無整 服務一流，有耐 提前預約`,
      'en': `USA San Francisco pure person international student part-time debut 169cm E cup 🉑pure🉑honey, fair tender skin, long legs slim waist, high education, high quality, pure natural no surgery, first-class service, patient, advance booking`,
      'ko': `미국 샌프란시스코 순수한 사람 유학생 파트타임 데뷔 169cm E컵 🉑순수🉑꿀, 하얗고 부드러운 피부, 긴 다리 가는 허리, 고학력, 고품질, 순천연 무성형, 일류 서비스, 인내심, 사전 예약`,
      'ja': `アメリカサンフランシスコ純粋な人留学生パートタイムデビュー169cm Eカップ🉑純粋🉑蜜、白くて柔らかい肌、長い脚細い腰、高学歴、高品質、純天然無整形、一流サービス、忍耐強く、事前予約`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-031',
        name: {
      'zh-CN': '旧金山31号',
      'zh-TW': '舊金山31號',
      'en': 'San Francisco #31',
      'ko': '샌프란시스코 31호',
      'ja': 'サンフランシスコ31号'
    },
    mainImage: '/images/models/sf-031-1.jpg',
    images: [
      '/images/models/sf-031-1.jpg',
      '/images/models/sf-031-2.jpg',
      '/images/models/sf-031-3.jpg',
      '/images/models/sf-031-4.jpg',
      '/images/models/sf-031-5.jpg',
    ],
        description: {
      'zh-CN': `03年真实学生，绝对第一次下水 可可爱爱，清纯小学妹 165c，全脸无整容 主打反差 绝对学霸 可看学生证 第一次出来赚学费`,
      'zh-TW': `03年真實學生，絕對第一次下水 可可愛愛，清純小學妹 165c，全臉無整容 主打反差 絕對學霸 可看學生證 第一次出來賺學費`,
      'en': `2003-born real student, absolutely first time debut, super cute, pure little junior 165cm C cup, full face no surgery, main feature contrast, absolute top student, can show student ID, first time out earning tuition`,
      'ko': `03년생 진짜 학생, 절대 첫번째 데뷔, 귀엽고 사랑스러움, 순수한 작은 후배 165cm C컵, 전면 무성형, 메인 특징 대비, 절대 학벅, 학생증 확인 가능, 첫번째 나와서 등록금 벌기`,
      'ja': `03年生まれ本当の学生、絶対初回デビュー、超可愛い、清純な小後輩165cm Cカップ、全顔無整形、メインフィーチャーコントラスト、絶対学覇、学生証確認可能、初回出て学費稼ぎ`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-032',
        name: {
      'zh-CN': '旧金山32号',
      'zh-TW': '舊金山32號',
      'en': 'San Francisco #32',
      'ko': '샌프란시스코 32호',
      'ja': 'サンフランシスコ32号'
    },
    mainImage: '/images/models/sf-032-2.jpg',
    images: [
      '/images/models/sf-032-1.jpg',
      '/images/models/sf-032-2.jpg',
    ],
        description: {
      'zh-CN': `旧金山纯新人 170 胸C 刚刚下海 留学生 真实照片`,
      'zh-TW': `舊金山純新人 170 胸C 剛剛下海 留學生 真實照片`,
      'en': `San Francisco pure newcomer 170cm C cup just debuted, international student, real photos`,
      'ko': `샌프란시스코 순수 신인 170cm C컵 갓 데뷔, 유학생, 진짜 사진`,
      'ja': `サンフランシスコ純粋新人170cm Cカップ初デビュー、留学生、実写真`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-033',
        name: {
      'zh-CN': '旧金山33号',
      'zh-TW': '舊金山33號',
      'en': 'San Francisco #33',
      'ko': '샌프란시스코 33호',
      'ja': 'サンフランシスコ33号'
    },
    mainImage: '/images/models/sf-033-2.jpg',
    images: [
      '/images/models/sf-033-1.jpg',
      '/images/models/sf-033-2.jpg',
      '/images/models/sf-033-3.jpg',
      '/images/models/sf-033-4.jpg',
      '/images/models/sf-033-5.jpg',
    ],
        description: {
      'zh-CN': `旧金山 171  胸d  02年 小学妹 刚到国外 留学生 皮肤白皙透亮，全身雪白，清纯可爱 女神般初恋感受，耐心服务`,
      'zh-TW': `舊金山 171  胸d  02年 小學妹 剛到國外 留學生 皮膚白皙透亮，全身雪白，清純可愛 女神般初戀感受，耐心服務`,
      'en': `San Francisco 171cm D cup 2002-born little junior, just arrived abroad, international student, fair translucent skin, full body snow white, pure cute, goddess-like first love feeling, patient service`,
      'ko': `샌프란시스코 171cm D컵 02년생 작은 후배, 막 해외 도착, 유학생, 하얗고 투명한 피부, 전신 눈처럼 하얨, 순수하고 귀여움, 여신같은 첫사랑 느낌, 인내심 있는 서비스`,
      'ja': `サンフランシスコ171cm Dカップ02年生まれ小後輩、海外到着したばかり、留学生、白くて透き通った肌、全身雪白、清純で可愛い、女神のような初恋感覚、忍耐強いサービス`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-034',
        name: {
      'zh-CN': '旧金山34号',
      'zh-TW': '舊金山34號',
      'en': 'San Francisco #34',
      'ko': '샌프란시스코 34호',
      'ja': 'サンフランシスコ34号'
    },
    mainImage: '/images/models/sf-034-3.jpg',
    images: [
      '/images/models/sf-034-1.jpg',
      '/images/models/sf-034-2.jpg',
      '/images/models/sf-034-3.jpg',
      '/images/models/sf-034-4.jpg',
    ],
        description: {
      'zh-CN': `清纯治愈系温柔女孩 165 c 知书达理，善解人意   温柔听话 名校在读，刚刚到旧金山读书`,
      'zh-TW': `清純治癒系溫柔女孩 165 c 知書達理，善解人意   溫柔聽話 名校在讀，剛剛到舊金山讀書`,
      'en': `Pure healing gentle girl 165cm C cup, well-educated and understanding, gentle and obedient, elite university student, just arrived in San Francisco to study`,
      'ko': `순수 힐링 우아한 소녀 165cm C컵, 학식 있고 이해심 많음, 부드럽고 순종적, 명문대학생, 막 샌프란시스코 도착해서 공부`,
      'ja': `清純ヒーリング系優しい女の子165cm Cカップ、教養があり理解力豊か、優しくて従順、名門大学生、サンフランシスコ到着したばかりで勉強`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-035',
        name: {
      'zh-CN': '旧金山35号',
      'zh-TW': '舊金山35號',
      'en': 'San Francisco #35',
      'ko': '샌프란시스코 35호',
      'ja': 'サンフランシスコ35号'
    },
    mainImage: '/images/models/sf-035-6.jpg',
    images: [
      '/images/models/sf-035-1.jpg',
      '/images/models/sf-035-2.jpg',
      '/images/models/sf-035-3.jpg',
      '/images/models/sf-035-4.jpg',
      '/images/models/sf-035-5.jpg',
      '/images/models/sf-035-6.jpg',
      '/images/models/sf-035-7.jpg',
    ],
        description: {
      'zh-CN': `身高171真D 留学生可全程英文交流 可咸可甜可蜜百变女神 天然无整 健美S身材 圈内唯一电臀 健身达人：网球、击剑、射击、高尔夫 只見素質客 低素质自觉绕道 颜值高情商高性格好身材好 全身雪白 超级长腿`,
      'zh-TW': `身高171真D 留學生可全程英文交流 可鹹可甜可蜜百變女神 天然無整 健美S身材 圈內唯一電臀 健身達人：網球、擊劍、射擊、高爾夫 只見素質客 低素質自覺繞道 顏值高情商高性格好身材好 全身雪白 超級長腿`,
      'en': `Height 171cm real D cup, international student can communicate fully in English, can be salty sweet honey versatile goddess, natural no surgery, fit S figure, industry's only electric butt, fitness expert: tennis, fencing, shooting, golf, only quality clients, low quality please detour, high looks high EQ good personality good figure, full body snow white, super long legs`,
      'ko': `키 171cm 진짜 D컵, 유학생 영어로 완전 소통 가능, 짭짤하고 달콤하고 꿀같은 다재다능한 여신, 천연 무성형, 피트 S라인, 업계 유일 전기 엉덩이, 피트니스 전문가: 테니스, 펜싱, 사격, 골프, 고품질 고객만, 저품질은 우회, 높은 외모 높은 EQ 좋은 성격 좋은 몸매, 전신 눈처럼 하얨, 초긴 다리`,
      'ja': `身長171cm本物Dカップ、留学生英語で完全コミュニケーション可能、塩辛くも甘くも蜜のように多才な女神、天然無整形、フィットS体型、業界唯一の電気お尻、フィットネス専門家：テニス、フェンシング、射撃、ゴルフ、高品質のお客様のみ、低品質は迂回、高外見高EQ良い性格良い体型、全身雪白、超長い脚`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-036',
        name: {
      'zh-CN': '旧金山36号',
      'zh-TW': '舊金山36號',
      'en': 'San Francisco #36',
      'ko': '샌프란시스코 36호',
      'ja': 'サンフランシスコ36号'
    },
    mainImage: '/images/models/sf-036-7.jpg',
    images: [
      '/images/models/sf-036-1.jpg',
      '/images/models/sf-036-2.jpg',
      '/images/models/sf-036-3.jpg',
      '/images/models/sf-036-4.jpg',
      '/images/models/sf-036-5.jpg',
      '/images/models/sf-036-6.jpg',
      '/images/models/sf-036-7.jpg',
    ],
        description: {
      'zh-CN': `03年Top 15在读留学生 166 92斤 C 可纯可御姐 声音甜美 多种姿势极品诱人‍ 全英文交流✅ 钢琴绘画书法唱歌冰球滑雪蹦极都会`,
      'zh-TW': `03年Top 15在讀留學生 166 92斤 C 可純可御姐 聲音甜美 多種姿勢極品誘人‍ 全英文交流✅ 鋼琴繪畫書法唱歌冰球滑雪蹦極都會`,
      'en': `2003-born Top 15 current international student 166cm 92 jin C cup, can be pure or dominant, sweet voice, multiple positions extremely seductive‍, full English communication✅, piano painting calligraphy singing ice hockey skiing bungee jumping all mastered`,
      'ko': `03년생 Top 15 재학중인 유학생 166cm 92근 C컵, 순수하거나 지배적일 수 있음, 달콤한 목소리, 다양한 자세 극한 유혹‍, 완전 영어 소통✅, 피아노 그림 서예 노래 아이스하키 스키 번지점프 모두 숙련`,
      'ja': `03年生まれTop 15在学中留学生166cm 92斤Cカップ、純粋にも御姉にも、甘い声、様々なポーズ極致誘惑‍、完全英語コミュニケーション✅、ピアノ絵画書道歌アイスホッケースキーバンジージャンプ全て習得`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-037',
        name: {
      'zh-CN': '旧金山37号',
      'zh-TW': '舊金山37號',
      'en': 'San Francisco #37',
      'ko': '샌프란시스코 37호',
      'ja': 'サンフランシスコ37号'
    },
    mainImage: '/images/models/sf-037-1.jpg',
    images: [
      '/images/models/sf-037-1.jpg',
      '/images/models/sf-037-2.jpg',
      '/images/models/sf-037-3.jpg',
      '/images/models/sf-037-4.jpg',
    ],
        description: {
      'zh-CN': `99年168D完美身材，英文流利全程可英文交流，身材很顶，凹凸有致，活好，会打扮   情商高，情趣内衣，丝袜随便玩 让你意犹未尽，回味无穷，喜欢活好的强烈推荐她`,
      'zh-TW': `99年168D完美身材，英文流利全程可英文交流，身材很頂，凹凸有致，活好，會打扮   情商高，情趣內衣，絲襪隨便玩 讓你意猶未盡，回味無窮，喜歡活好的強烈推薦她`,
      'en': `1999-born 168cm D cup perfect figure, fluent English full English communication, amazing figure, curvy, good at it, knows how to dress, high EQ, lingerie, stockings play freely, leaves you wanting more, endless aftertaste, highly recommended for those who like good performance`,
      'ko': `99년생 168cm D컵 완벽한 몸매, 유창한 영어 완전 영어 소통, 몸매 최고, 볼륨감, 잘함, 옷입기 잘함, 높은 EQ, 란제리, 스타킹 자유롭게 놀기, 더 원하게 만듦, 끝없는 여운, 잘하는 것 좋아하는 분들 강력 추천`,
      'ja': `99年生まれ168cm Dカップ完璧な体型、流暢な英語完全英語コミュニケーション、体型最高、凹凸有り、上手、おしゃれ上手、高EQ、ランジェリー、ストッキング自由に遊び、もっと欲しくさせる、無限の余韻、上手なの好きな方強くお勧め`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-038',
        name: {
      'zh-CN': '旧金山38号',
      'zh-TW': '舊金山38號',
      'en': 'San Francisco #38',
      'ko': '샌프란시스코 38호',
      'ja': 'サンフランシスコ38号'
    },
    mainImage: '/images/models/sf-038-3.jpg',
    images: [
      '/images/models/sf-038-1.jpg',
      '/images/models/sf-038-2.jpg',
      '/images/models/sf-038-3.jpg',
    ],
        description: {
      'zh-CN': `新人落地 163 34C 02年在读学生‍ 学习好 懂礼貌 甜美性感少女`,
      'zh-TW': `新人落地 163 34C 02年在讀學生‍ 學習好 懂禮貌 甜美性感少女`,
      'en': `Newcomer arrived 163cm 34C 2002-born current student‍, good at studying, polite, sweet sexy girl`,
      'ko': `신인 도착 163cm 34C 02년생 재학생‍, 공부 잘함, 예의 바름, 달콤하고 섹시한 소녀`,
      'ja': `新人到着163cm 34C 02年生まれ在学中‍、勉強上手、礼儀正しい、甘くてセクシーな少女`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-039',
        name: {
      'zh-CN': '旧金山39号',
      'zh-TW': '舊金山39號',
      'en': 'San Francisco #39',
      'ko': '샌프란시스코 39호',
      'ja': 'サンフランシスコ39号'
    },
    mainImage: '/images/models/sf-039-2.jpg',
    images: [
      '/images/models/sf-039-1.jpg',
      '/images/models/sf-039-2.jpg',
      '/images/models/sf-039-3.jpg',
      '/images/models/sf-039-4.jpg',
    ],
        description: {
      'zh-CN': `旧金山独家资源，刚刚下海，高175 23 体重53 胸围 D 温柔气质学妹 健身达人 学校世界QS 前20 在读`,
      'zh-TW': `舊金山獨家資源，剛剛下海，高175 23 體重53 胸圍 D 溫柔氣質學妹 健身達人 學校世界QS 前20 在讀`,
      'en': `San Francisco exclusive resource, just debuted, height 175cm age 23 weight 53kg bust D cup, gentle temperament junior, fitness expert, university world QS top 20, current student`,
      'ko': `샌프란시스코 독점 자원, 갓 데뷔, 키 175cm 나이 23 체중 53kg 가슴둘레 D컵, 부드러운 기질 후배, 피트니스 전문가, 대학 세계 QS 상위 20, 재학중`,
      'ja': `サンフランシスコ独占リソース、初デビュー、身長175cm年齢23体重53kgバストDカップ、優しい気質後輩、フィットネス専門家、大学世界QS上位20、在学中`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-040',
        name: {
      'zh-CN': '旧金山40号',
      'zh-TW': '舊金山40號',
      'en': 'San Francisco #40',
      'ko': '샌프란시스코 40호',
      'ja': 'サンフランシスコ40号'
    },
    mainImage: '/images/models/sf-040-2.jpg',
    images: [
      '/images/models/sf-040-1.jpg',
      '/images/models/sf-040-2.jpg',
      '/images/models/sf-040-3.jpg',
      '/images/models/sf-040-4.jpg',
    ],
        description: {
      'zh-CN': `名校在读极品学妹02年出生，168d天然全身无整，大长腿🦵声音温柔，待客如初恋，全方位配合能满足各种姿势`,
      'zh-TW': `名校在讀極品學妹02年出生，168d天然全身無整，大長腿🦵聲音溫柔，待客如初戀，全方位配合能滿足各種姿勢`,
      'en': `Elite university current premium junior 2002-born, 168cm D cup natural full body no surgery, long legs🦵 gentle voice, treats guests like first love, all-round cooperation can satisfy various positions`,
      'ko': `명문대 재학중인 프리미엄 후배 02년생, 168cm D컵 천연 전신 무성형, 긴 다리🦵 부드러운 목소리, 손님을 첫사랑처럼 대함, 전방위 협조 다양한 자세 만족 가능`,
      'ja': `名門大学在学中プレミアム後輩02年生まれ、168cm Dカップ天然全身無整形、長い脚🦵優しい声、お客様を初恋のように扱う、全方位協力様々なポーズ満足可能`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-041',
        name: {
      'zh-CN': '旧金山41号',
      'zh-TW': '舊金山41號',
      'en': 'San Francisco #41',
      'ko': '샌프란시스코 41호',
      'ja': 'サンフランシスコ41号'
    },
    mainImage: '/images/models/sf-041-4.jpg',
    images: [
      '/images/models/sf-041-1.jpg',
      '/images/models/sf-041-2.jpg',
      '/images/models/sf-041-3.jpg',
      '/images/models/sf-041-4.jpg',
    ],
        description: {
      'zh-CN': `真c 光脚174cm  马甲线 御姐飒气质小姐姐`,
      'zh-TW': `真c 光腳174cm  馬甲線 御姐颯氣質小姐姐`,
      'en': `Real C cup barefoot 174cm, six-pack abs, dominant chic temperament girl`,
      'ko': `진짜 C컵 맨발 174cm, 식스팩 복근, 지배적 시크 기질 소녀`,
      'ja': `本物Cカップ素足174cm、腹筋、御姉クール気質女の子`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-042',
        name: {
      'zh-CN': '旧金山42号',
      'zh-TW': '舊金山42號',
      'en': 'San Francisco #42',
      'ko': '샌프란시스코 42호',
      'ja': 'サンフランシスコ42号'
    },
    mainImage: '/images/models/sf-042-1.jpg',
    images: [
      '/images/models/sf-042-1.jpg',
      '/images/models/sf-042-2.jpg',
      '/images/models/sf-042-3.jpg',
      '/images/models/sf-042-4.jpg',
      '/images/models/sf-042-5.jpg',
    ],
        description: {
      'zh-CN': `独家新人刚刚下海，三点粉嫩，紧，170胸C全身雪白无整，态度温和`,
      'zh-TW': `獨家新人剛剛下海，三點粉嫩，緊，170胸C全身雪白無整，態度溫和`,
      'en': `Exclusive newcomer just debuted, three points pink tender, tight, 170cm C cup full body snow white no surgery, gentle attitude`,
      'ko': `독점 신인 갓 데뷔, 3점 분홍 부드러움, 타이트, 170cm C컵 전신 눈처럼 하얀 무성형, 부드러운 태도`,
      'ja': `独占新人初デビュー、3点ピンク柔らか、タイト、170cm Cカップ全身雪白無整形、優しい態度`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-043',
        name: {
      'zh-CN': '旧金山43号',
      'zh-TW': '舊金山43號',
      'en': 'San Francisco #43',
      'ko': '샌프란시스코 43호',
      'ja': 'サンフランシスコ43号'
    },
    mainImage: '/images/models/sf-043-4.jpg',
    images: [
      '/images/models/sf-043-1.jpg',
      '/images/models/sf-043-2.jpg',
      '/images/models/sf-043-3.jpg',
      '/images/models/sf-043-4.jpg',
      '/images/models/sf-043-5.jpg',
      '/images/models/sf-043-6.jpg',
      '/images/models/sf-043-7.jpg',
    ],
        description: {
      'zh-CN': `165胸d学妹，03刚刚转学到旧金山，乖乖的斯文眼镜妹，佛系开提前约，雪白肌肤新下海，赚学费生活费，无不良嗜好无纹身。`,
      'zh-TW': `165胸d學妹，03剛剛轉學到舊金山，乖乖的斯文眼鏡妹，佛系開提前約，雪白肌膚新下海，賺學費生活費，無不良嗜好無紋身。`,
      'en': `165cm D cup junior, 2003-born just transferred to San Francisco, well-behaved scholarly glasses girl, Buddhist-style debut advance booking, snow white skin new debut, earning tuition and living expenses, no bad habits no tattoos`,
      'ko': `165cm D컵 후배, 03년생 막 샌프란시스코로 전학, 착한 학구적인 안경 소녀, 불교 스타일 데뷔 사전 예약, 눈처럼 하얀 피부 신인 데뷔, 등록금 생활비 벌기, 나쁜 습관 없음 문신 없음`,
      'ja': `165cm Dカップ後輩、03年生まれサンフランシスコに転校したばかり、おとなしい学究的な眼鏡女の子、仏系デビュー事前予約、雪白の肌新人デビュー、学費生活費稼ぎ、悪い癖なしタトゥーなし`
    },
    city: 'sanfrancisco'
  },
  {
    id: 'sf-044',
        name: {
      'zh-CN': '旧金山44号',
      'zh-TW': '舊金山44號',
      'en': 'San Francisco #44',
      'ko': '샌프란시스코 44호',
      'ja': 'サンフランシスコ44号'
    },
    mainImage: '/images/models/sf-044-3.jpg',
    images: [
      '/images/models/sf-044-1.jpg',
      '/images/models/sf-044-2.jpg',
      '/images/models/sf-044-3.jpg',
      '/images/models/sf-044-4.jpg',
    ],
        description: {
      'zh-CN': `旧金山,身高174，体重45KG，罩杯C年龄21岁，可以一字马，绝对零整容。纯天然，活好 服务温和`,
      'zh-TW': `舊金山,身高174，體重45KG，罩杯C年齡21歲，可以一字馬，絕對零整容。純天然，活好 服務溫和`,
      'en': `San Francisco, height 174cm, weight 45kg, C cup age 21, can do splits, absolutely zero surgery. Pure natural, good at it, gentle service`,
      'ko': `샌프란시스코, 키 174cm, 체중 45kg, C컵 나이 21, 스플릿 가능, 절대 제로 성형. 순천연, 잘함, 부드러운 서비스`,
      'ja': `サンフランシスコ、身長174cm、体重45kg、Cカップ年齢21歳、開脚可能、絶対ゼロ整形。純天然、上手、優しいサービス`
    },
    city: 'sanfrancisco'
  },
  
  // 波士顿模特
  {
    id: 'bos-001',
    name: {
      'zh-CN': '波士顿1号',
      'zh-TW': '波士頓1號',
      'en': 'Boston #1',
      'ko': '보스턴 1호',
      'ja': 'ボストン1号'
    },
    mainImage: '/images/models/bos-001-4.jpg',
    images: [
      '/images/models/bos-001-1.jpg',
      '/images/models/bos-001-2.jpg',
      '/images/models/bos-001-3.jpg',
      '/images/models/bos-001-4.jpg',
    ],
    description: {
      'zh-CN': `美国波士顿 新人留学生 兼职开 167cm 胸D
                  五官精致 谈吐优雅 可甜可咸 性格nice
                  温柔可爱 身材颜值在线 温柔如水 带客如初恋  不催不事
                  提前预约 不接急单`,
      'zh-TW': `美國波士頓 新人留學生 兼職開 167cm 胸D
                  五官精緻 談吐優雅 可甜可鹹 性格nice
                  溫柔可愛 身材顏值在線 溫柔如水 帶客如初戀  不催不事
                  提前預約 不接急單`,
      'en': `American Boston newcomer international student, part-time, 167cm D cup
                  Delicate features, elegant conversation, can be sweet or spicy, nice personality
                  Gentle and lovely, great figure and looks, gentle as water, treating guests like first love, no rush no trouble
                  Advance booking, no urgent orders`,
      'ko': `미국 보스턴 신인 유학생, 파트타임, 167cm D컵
                  섬세한 오관, 우아한 대화, 달콤하거나 매운 가능, 좋은 성격
                  부드럽고 사랑스러운, 훌륭한 몸매와 외모, 물처럼 부드러운, 첫사랑처럼 손님 대우, 서두르지 않고 문제없음
                  사전 예약, 긴급 주문 없음`,
      'ja': `アメリカボストン新人留学生、パートタイム、167cm Dカップ
                  繊細な五官、優雅な話し方、甘くも辛くも、性格良い
                  優しく可愛い、体型とルックス抜群、水のように優しい、初恋のようにお客様対応、急がず問題なし
                  事前予約、緊急注文なし`
    },
    city: 'boston'
  },
  {
    id: 'bos-002',
        name: {
      'zh-CN': '波士顿2号',
      'zh-TW': '波士頓2號',
      'en': 'Boston #2',
      'ko': '보스턴 2호',
      'ja': 'ボストン2号'
    },
    mainImage: '/images/models/bos-002-3.jpg',
    images: [
      '/images/models/bos-002-1.jpg',
      '/images/models/bos-002-2.jpg',
      '/images/models/bos-002-3.jpg',
      '/images/models/bos-002-4.jpg',
    ],
        description: {
      'zh-CN': `波士顿新人留学生166D 童颜巨乳`,
      'zh-TW': `波士頓新人留學生166D 童顏巨乳`,
      'en': `Boston newcomer international student 166cm D cup, childlike face big breasts`,
      'ko': `보스턴 신인 유학생 166cm D컵, 동안 거유`,
      'ja': `ボストン新人留学生166cm Dカップ、童顔巨乳`
    },
    city: 'boston'
  },
  {
    id: 'bos-003',
        name: {
      'zh-CN': '波士顿3号',
      'zh-TW': '波士頓3號',
      'en': 'Boston #3',
      'ko': '보스턴 3호',
      'ja': 'ボストン3号'
    },
    mainImage: '/images/models/bos-003-4.jpg',
    images: [
      '/images/models/bos-003-1.jpg',
      '/images/models/bos-003-2.jpg',
      '/images/models/bos-003-3.jpg',
      '/images/models/bos-003-4.jpg',
    ],
        description: {
      'zh-CN': `波士顿 留学生
                  170CM 胸D 01年`,
      'zh-TW': `波士頓 留學生
                  170CM 胸D 01年`,
            'en': `Boston international student 170cm D cup 2001-born`,
      'ko': `보스턴 유학생 170cm D컵 01년생`,
      'ja': `ボストン留学生170cm Dカップ01年生まれ`
    },
    city: 'boston'
  },
  {
    id: 'bos-004',
        name: {
      'zh-CN': '波士顿4号',
      'zh-TW': '波士頓4號',
      'en': 'Boston #4',
      'ko': '보스턴 4호',
      'ja': 'ボストン4号'
    },
    mainImage: '/images/models/bos-004-3.jpg',
    images: [
      '/images/models/bos-004-1.jpg',
      '/images/models/bos-004-2.jpg',
      '/images/models/bos-004-3.jpg',
      '/images/models/bos-004-4.jpg',
    ],
        description: {
      'zh-CN': `波士顿170c温柔相待，秀色?绝世，馨香为谁转！给你初恋情人的不一样的感觉`,
      'zh-TW': `波士頓170c溫柔相待，秀色?絕世，馨香為誰轉！給你初戀情人的不一樣的感覺`,
      'en': `Boston 170cm C cup gentle treatment, stunning beauty? peerless, sweet fragrance for whom! Giving you a different feeling of first love`,
      'ko': `보스턴 170cm C컵 부드러운 대우, 절세미인? 무쌍, 달콤한 향기 누구를 위해! 첫사랑의 다른 느낌을 드림`,
      'ja': `ボストン170cm Cカップ優しい扱い、絶世の美女？無双、甘い香り誰のために！初恋の違う感じを与える`
    },
    city: 'boston'
  },
  {
    id: 'bos-005',
        name: {
      'zh-CN': '波士顿5号',
      'zh-TW': '波士頓5號',
      'en': 'Boston #5',
      'ko': '보스턴 5호',
      'ja': 'ボストン5号'
    },
    mainImage: '/images/models/bos-005-3.jpg',
    images: [
      '/images/models/bos-005-1.jpg',
      '/images/models/bos-005-2.jpg',
      '/images/models/bos-005-3.jpg',
    ],
        description: {
      'zh-CN': `美国波士顿新人留学生166C  可纯可密 高素质  服务好 提前预约`,
      'zh-TW': `美國波士頓新人留學生166C  可純可密 高素質  服務好 提前預約`,
      'en': `USA Boston newcomer international student 166cm C cup, can be pure or intimate, high quality, good service, advance booking`,
      'ko': `미국 보스턴 신인 유학생 166cm C컵, 순수하거나 친밀할 수 있음, 고품질, 좋은 서비스, 사전 예약`,
      'ja': `アメリカボストン新人留学生166cm Cカップ、純粋にも親密にも、高品質、良いサービス、事前予約`
    },
    city: 'boston'
  },
  {
    id: 'bos-006',
        name: {
      'zh-CN': '波士顿6号',
      'zh-TW': '波士頓6號',
      'en': 'Boston #6',
      'ko': '보스턴 6호',
      'ja': 'ボストン6号'
    },
    mainImage: '/images/models/bos-006-5.jpg',
    images: [
      '/images/models/bos-006-1.jpg',
      '/images/models/bos-006-2.jpg',
      '/images/models/bos-006-3.jpg',
      '/images/models/bos-006-4.jpg',
      '/images/models/bos-006-5.jpg',
    ],
        description: {
      'zh-CN': `纯新人  168d 罩杯  非常注重身材管理  绝对独家 可欲可甜 气质绝好  全身大牌 提前预约  真实学生 皮肤雪白 本人与照片无差 比照片好看。`,
      'zh-TW': `純新人  168d 罩杯  非常注重身材管理  絕對獨家 可欲可甜 氣質絕好  全身大牌 提前預約  真實學生 皮膚雪白 本人與照片無差 比照片好看。`,
      'en': `Pure newcomer 168cm D cup, very focused on figure management, absolutely exclusive, can be desire or sweet, excellent temperament, full body luxury brands, advance booking, real student, snow white skin, person and photo no difference, better than photos`,
      'ko': `순수 신인 168cm D컵, 몸매 관리 매우 중시, 절대 독점, 욕망이나 달콤할 수 있음, 우수한 기질, 전신 럭셔리 브랜드, 사전 예약, 진짜 학생, 눈처럼 하얀 피부, 사람과 사진 차이 없음, 사진보다 예쁨`,
      'ja': `純粋新人168cm Dカップ、体型管理非常に重視、絶対独占、欲望にも甘くも、優れた気質、全身ブランド品、事前予約、本当の学生、雪白の肌、人と写真差なし、写真より綺麗`
    },
    city: 'boston'
  },
  
  // 西雅图模特
  {
    id: 'sea-004',
        name: {
      'zh-CN': '西雅图4号',
      'zh-TW': '西雅圖4號',
      'en': 'Seattle #4',
      'ko': '시애틀 4호',
      'ja': 'シアトル4号'
    },
    mainImage: '/images/models/sea-004-5.jpg',
    images: [
      '/images/models/sea-004-1.jpg',
      '/images/models/sea-004-2.jpg',
      '/images/models/sea-004-3.jpg',
      '/images/models/sea-004-4.jpg',
      '/images/models/sea-004-5.jpg',
    ],
        description: {
      'zh-CN': `西雅图168c 真实留学生 脸精致 可纯可欲`,
      'zh-TW': `西雅圖168c 真實留學生 臉精緻 可純可欲`,
      'en': `Seattle 168cm C cup, real international student, delicate face, can be pure or desire`,
      'ko': `시애틀 168cm C컵, 진짜 유학생, 섬세한 얼굴, 순수하거나 욕망 가능`,
      'ja': `シアトル168cm Cカップ、本当の留学生、繊細な顔、純粋にも欲望にも`
    },
    city: 'seattle'
  },
  
  // 拉斯维加斯模特
  {
    id: 'lv-001',
        name: {
      'zh-CN': '拉斯维加斯1号',
      'zh-TW': '拉斯維加斯1號',
      'en': 'Las Vegas #1',
      'ko': '라스베가스 1호',
      'ja': 'ラスベガス1号'
    },
    mainImage: '/images/models/lv-001-2.jpg',
    images: [
      '/images/models/lv-001-1.jpg',
      '/images/models/lv-001-2.jpg',
      '/images/models/lv-001-3.jpg',
    ],
        description: {
      'zh-CN': `拉斯维加斯美国哥伦比亚留学生168c可盐可甜！给你初恋般的感觉！`,
      'zh-TW': `拉斯維加斯美國哥倫比亞留學生168c可鹽可甜！給你初戀般的感覺！`,
      'en': `Las Vegas USA Columbia international student 168cm C cup can be salty or sweet! Giving you first love feeling!`,
      'ko': `라스베가스 미국 컬럼비아 유학생 168cm C컵 짭짤하거나 달콤할 수 있음! 첫사랑 느낌을 드림!`,
      'ja': `ラスベガスアメリカコロンビア留学生168cm Cカップ塩辛くも甘くも！初恋のような感じを与える！`
    },
    city: 'lasvegas'
  },
  {
    id: 'lv-002',
        name: {
      'zh-CN': '拉斯维加斯2号',
      'zh-TW': '拉斯維加斯2號',
      'en': 'Las Vegas #2',
      'ko': '라스베가스 2호',
      'ja': 'ラスベガス2号'
    },
    mainImage: '/images/models/lv-002-1.jpg',
    images: [
      '/images/models/lv-002-1.jpg',
      '/images/models/lv-002-2.jpg',
      '/images/models/lv-002-3.jpg',
      '/images/models/lv-002-4.jpg',
    ],
        description: {
      'zh-CN': `拉斯维加斯 166D 真D 真人真照 服务一流`,
      'zh-TW': `拉斯維加斯 166D 真D 真人真照 服務一流`,
      'en': `Las Vegas 166cm D cup real D cup, real person real photos, first-class service`,
      'ko': `라스베가스 166cm D컵 진짜 D컵, 진짜 사람 진짜 사진, 일류 서비스`,
      'ja': `ラスベガス166cm Dカップ本物Dカップ、実人実写真、一流サービス`
    },
    city: 'lasvegas'
  },
  {
    id: 'lv-003',
        name: {
      'zh-CN': '拉斯维加斯3号',
      'zh-TW': '拉斯維加斯3號',
      'en': 'Las Vegas #3',
      'ko': '라스베가스 3호',
      'ja': 'ラスベガス3号'
    },
    mainImage: '/images/models/lv-003-1.jpg',
    images: [
      '/images/models/lv-003-1.jpg',
      '/images/models/lv-003-2.jpg',
      '/images/models/lv-003-3.jpg',
    ],
        description: {
      'zh-CN': `美国 拉斯维加斯 99年 34D 170 白皙无整 乖巧可爱 新人刚下海 留学生兼职 可纯可欲 提前预约`,
      'zh-TW': `美國 拉斯維加斯 99年 34D 170 白皙無整 乖巧可愛 新人剛下海 留學生兼職 可純可欲 提前預約`,
      'en': `USA Las Vegas 1999-born 34D 170cm fair no surgery, well-behaved cute, newcomer just debuted, international student part-time, can be pure or desire, advance booking`,
      'ko': `미국 라스베가스 99년생 34D 170cm 하얗고 무성형, 착하고 귀여움, 신인 갓 데뷔, 유학생 파트타임, 순수하거나 욕망 가능, 사전 예약`,
      'ja': `アメリカラスベガス99年生まれ34D 170cm白くて無整形、おとなしくて可愛い、新人初デビュー、留学生パートタイム、純粋にも欲望にも、事前予約`
    },
    city: 'lasvegas'
  },
  {
    id: 'lv-004',
        name: {
      'zh-CN': '拉斯维加斯4号',
      'zh-TW': '拉斯維加斯4號',
      'en': 'Las Vegas #4',
      'ko': '라스베가스 4호',
      'ja': 'ラスベガス4号'
    },
    mainImage: '/images/models/lv-004-1.jpg',
    images: [
      '/images/models/lv-004-1.jpg',
      '/images/models/lv-004-2.jpg',
      '/images/models/lv-004-3.jpg',
      '/images/models/lv-004-4.jpg',
      '/images/models/lv-004-5.jpg',
    ],
        description: {
      'zh-CN': `拉斯维加斯新人学生纯兼职 165 D天然美熊 清纯甜美兼职`,
      'zh-TW': `拉斯維加斯新人學生純兼職 165 D天然美熊 清純甜美兼職`,
      'en': `Las Vegas newcomer student pure part-time 165cm D cup natural beautiful bear, pure sweet part-time`,
      'ko': `라스베가스 신인 학생 순수 파트타임 165cm D컵 천연 아름다운 곰, 순수 달콤한 파트타임`,
      'ja': `ラスベガス新人学生純粋パートタイム165cm Dカップ天然美しい熊、清純甘いパートタイム`
    },
    city: 'lasvegas'
  },
  {
    id: 'lv-005',
        name: {
      'zh-CN': '拉斯维加斯5号',
      'zh-TW': '拉斯維加斯5號',
      'en': 'Las Vegas #5',
      'ko': '라스베가스 5호',
      'ja': 'ラスベガス5号'
    },
    mainImage: '/images/models/lv-005-2.jpg',
    images: [
      '/images/models/lv-005-1.jpg',
      '/images/models/lv-005-2.jpg',
      '/images/models/lv-005-3.jpg',
      '/images/models/lv-005-4.jpg',
    ],
        description: {
      'zh-CN': `身高173旧金山 36d 真实胸围 童颜巨乳 第一天开 真是留学生 ?暑假短期兼职一个月 有单来砸，第一次下水。懵懂无知，初恋感觉`,
      'zh-TW': `身高173舊金山 36d 真實胸圍 童顏巨乳 第一天開 真是留學生 ?暑假短期兼職一個月 有單來砸，第一次下水。懵懂無知，初戀感覺`,
      'en': `Height 173cm San Francisco 36D real bust, childlike face big breasts, first day debut, real international student? Summer short-term part-time one month, orders welcome, first time debut. Innocent naive, first love feeling`,
      'ko': `키 173cm 샌프란시스코 36D 진짜 가슴둘레, 동안 거유, 첫날 데뷔, 진짜 유학생? 여름 단기 파트타임 한달, 주문 환영, 첫번째 데뷔. 순진하고 어리석음, 첫사랑 느낌`,
      'ja': `身長173cmサンフランシスコ36D本物バスト、童顔巨乳、初日デビュー、本当の留学生？夏期短期パートタイム一ヶ月、オーダー歓迎、初回デビュー。無邪気で無知、初恋感覚`
    },
    city: 'lasvegas'
  },
  {
    id: 'lv-006',
        name: {
      'zh-CN': '拉斯维加斯6号',
      'zh-TW': '拉斯維加斯6號',
      'en': 'Las Vegas #6',
      'ko': '라스베가스 6호',
      'ja': 'ラスベガス6号'
    },
    mainImage: '/images/models/lv-006-4.jpg',
    images: [
      '/images/models/lv-006-1.jpg',
      '/images/models/lv-006-2.jpg',
      '/images/models/lv-006-3.jpg',
      '/images/models/lv-006-4.jpg',
    ],
        description: {
      'zh-CN': `拉斯 真实168大d 真胸 气质款`,
      'zh-TW': `拉斯 真實168大d 真胸 氣質款`,
      'en': `Las Vegas real 168cm big D cup, real breasts, elegant style`,
      'ko': `라스베가스 진짜 168cm 큰 D컵, 진짜 가슴, 우아한 스타일`,
      'ja': `ラスベガス本物168cm大Dカップ、本物のおっぱい、上品なスタイル`
    },
    city: 'lasvegas'
  },
  {
    id: 'lv-007',
        name: {
      'zh-CN': '拉斯维加斯7号',
      'zh-TW': '拉斯維加斯7號',
      'en': 'Las Vegas #7',
      'ko': '라스베가스 7호',
      'ja': 'ラスベガス7号'
    },
    mainImage: '/images/models/lv-007-3.jpg',
    images: [
      '/images/models/lv-007-1.jpg',
      '/images/models/lv-007-2.jpg',
      '/images/models/lv-007-3.jpg',
      '/images/models/lv-007-4.jpg',
      '/images/models/lv-007-5.jpg',
    ],
        description: {
      'zh-CN': `拉斯 166白皙可爱 零零后 真实学生 短开`,
      'zh-TW': `拉斯 166白皙可愛 零零後 真實學生 短開`,
      'en': `Las Vegas 166cm fair cute 2000s-born, real student, short stay`,
      'ko': `라스베가스 166cm 하얗고 귀여운 00년대생, 진짜 학생, 단기 체류`,
      'ja': `ラスベガス166cm白くて可愛い00年代生まれ、本当の学生、短期滞在`
    },
    city: 'lasvegas'
  },
  {
    id: 'lv-008',
        name: {
      'zh-CN': '拉斯维加斯8号',
      'zh-TW': '拉斯維加斯8號',
      'en': 'Las Vegas #8',
      'ko': '라스베가스 8호',
      'ja': 'ラスベガス8号'
    },
    mainImage: '/images/models/lv-008-2.jpg',
    images: [
      '/images/models/lv-008-1.jpg',
      '/images/models/lv-008-2.jpg',
      '/images/models/lv-008-3.jpg',
      '/images/models/lv-008-4.jpg',
    ],
        description: {
      'zh-CN': `165 皮肤白皙 04 年出生 c杯 真实学生减轻家里负担赚学费`,
      'zh-TW': `165 皮膚白皙 04 年出生 c杯 真實學生減輕家裡負擔賺學費`,
      'en': `165cm fair skin 2004-born C cup, real student helping family burden earning tuition`,
      'ko': `165cm 하얀 피부 04년생 C컵, 진짜 학생 가족 부담 줄이고 등록금 벌기`,
      'ja': `165cm白い肌04年生まれCカップ、本当の学生家族の負担軽減学費稼ぎ`
    },
    city: 'lasvegas'
  },

];

export const getModelsByCity = (city: string): Model[] => {
  return models.filter(model => model.city === city).sort((a, b) => b.id.localeCompare(a.id));
};

export const getModelById = (id: string): Model | undefined => {
  return models.find(model => model.id === id);
}; 