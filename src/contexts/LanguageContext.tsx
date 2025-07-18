'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'zh-CN' | 'zh-TW' | 'ko' | 'ja';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation data
const translations = {
  'zh-CN': {
    // Navigation
    'nav.home': '首页',
    'nav.newyork': '纽约',
    'nav.losangeles': '洛杉矶',
    'nav.sanfrancisco': '旧金山',
    'nav.boston': '波士顿',
    'nav.seattle': '西雅图',
    'nav.lasvegas': '拉斯维加斯',
    'nav.brand': '小红模特',
    
    // Language switcher
    'lang.switch': '繁體',
    'lang.current': '简体',
    
    // Home page
    'home.title': '北美小红模特私教预约平台',
    'home.subtitle': '专业模特私教服务 - 品质保证',
    'home.tagline': '无会员费 · 免订金 · 诚信服务',
    'home.description': '我们精选纽约、洛杉矶、旧金山、波士顿、西雅图、拉斯维加斯等城市的优质模特，提供专业私教上门服务，其他城市支持空降。',
    'home.description2': '为您提供高品质的模特私教体验。',
    'home.contact': '预约咨询：Telegram @xiaohongmodels',
    'home.browse': '浏览模特私教',
    
    // Cities
    'city.newyork': '纽约',
    'city.losangeles': '洛杉矶',
    'city.sanfrancisco': '旧金山',
    'city.boston': '波士顿',
    'city.seattle': '西雅图',
    'city.lasvegas': '拉斯维加斯',
    
    // City button subtitles (without space)
    'city.newyork.subtitle': '纽约模特',
    'city.losangeles.subtitle': '洛杉矶模特',
    'city.sanfrancisco.subtitle': '旧金山模特',
    'city.boston.subtitle': '波士顿模特',
    'city.seattle.subtitle': '西雅图模特',
    'city.lasvegas.subtitle': '拉斯维加斯模特',
    
    // Model card subtitles (without space)
    'model.card.newyork.subtitle': '纽约模特',
    'model.card.losangeles.subtitle': '洛杉矶模特',
    'model.card.sanfrancisco.subtitle': '旧金山模特',
    'model.card.boston.subtitle': '波士顿模特',
    'model.card.seattle.subtitle': '西雅图模特',
    'model.card.lasvegas.subtitle': '拉斯维加斯模特',
    
    // Page titles (without space)
    'page.title.newyork': '纽约模特库',
    'page.title.losangeles': '洛杉矶模特库',
    'page.title.sanfrancisco': '旧金山模特库',
    'page.title.boston': '波士顿模特库',
    'page.title.seattle': '西雅图模特库',
    'page.title.lasvegas': '拉斯维加斯模特库',
    
    // Services
    'services.title': '服务价格与规则',
    'services.hourly': '1小时：1500美元',
    'services.overnight': '1夜：3000美元',
    'services.airdrop': '空降1夜：4000美元起 + 路费',
    'services.booking': '建议提前预约以确保服务质量。',
    'services.browse': '请先浏览我们的模特相册，选择心仪人选后联系客服安排预约时间。',
    
    // FAQ
    'faq.location': '服务地点如何选择？',
    'faq.location.answer': '答：可选择酒店或您的住所，模特提供上门服务，我们暂不提供固定场所。',
    'faq.services': '具体服务内容有哪些？',
    'faq.services.answer': '答：服务内容由您与模特双方协商确定，我们提供平台对接服务。',
    'faq.payment': '付款方式是什么？',
    'faq.payment.answer': '答：见面确认满意后，可通过现金或转账方式直接支付给模特。',
    'faq.authentic': '模特资料是否真实？',
    'faq.authentic.answer': '答：每位模特都提供照片和视频资料，原则上资料真实可靠。如遇虚假信息，请及时联系我们处理。',
    'faq.refund': '服务不满意可以退换吗？',
    'faq.refund.answer': '答：我们提供退换服务，具体分为两种情况：',
    'faq.refund.option1': '1. 模特资料真实但其他原因需要退换，需支付模特交通费用作为补偿。',
    'faq.refund.option2': '2. 模特与资料不符，可拒绝支付费用并要求模特离开，同时联系我们处理。',
    'faq.airdrop': '空降服务如何收费？',
    'faq.airdrop.answer': '答：空降1夜服务4000美元起，需预付1000美元定金，路费按实际费用收取。',
    'faq.overnight': '1夜服务时长是多久？',
    'faq.overnight.answer': '答：1夜服务为8-10小时，通常从晚上10-12点开始到次日早上8点结束，具体时间可协商调整。',
    'faq.recruitment': '我们长期招募优质模特，有意向的女生欢迎联系我们',
    
    // Models
    'models.noData': '暂无模特信息',
    
    // Model detail pages
    'model.photos': '模特照片',
    'model.photo': '照片',
    'model.modelPhoto': '模特照片',
    'model.introduction': '模特介绍',
    'model.viewDetails': '查看详情',
    // City pages
    'city.models': '模特库',
    'model.label': '模特',
    
    // Page titles and pagination
    'page.title.city': '模特 - 第{page}页 - xiaohongmodels.vercel.app',
    'page.title.city.first': '模特 - 第1页 - xiaohongmodels.vercel.app',
    'page.title.model': '模特 - xiaohongmodels.vercel.app',
    'pagination.previous': '上一页',
    'pagination.next': '下一页',
    'pagination.page': '第{page}页',
    
    // Legal pages
    'legal.disclaimer': '免责声明',
    'legal.terms': '服务条款',
    'legal.privacy': '隐私政策',
    'legal.contact': '联系方式',
    'legal.contact.questions': '如有任何问题或疑虑，请通过以下方式联系：',
    'legal.lastUpdated': '最后更新时间：2025年7月',
    'legal.telegram': 'Telegram: @xiaohongmodels',
    'legal.ageDisclaimer': '所有模特均为18岁或以上成年人。',
    'legal.copyright': '© 2025 XiaohongModels. 保留所有权利。',
    
    // Legal content - Disclaimer
    'legal.disclaimer.important': '重要声明',
    'legal.disclaimer.important.p1': '本网站仅作为信息展示平台，不参与任何实际交易或服务提供。所有模特信息均为展示用途，不代表实际可获得的商业服务。',
    'legal.disclaimer.important.p2': '本网站内容仅供娱乐和信息参考，不构成任何商业要约或服务承诺。',
    'legal.disclaimer.age': '年龄验证',
    'legal.disclaimer.age.p1': '本网站展示的所有模特均声明为18岁或以上成年人。访问本网站即表示您确认自己已年满18岁。',
    'legal.disclaimer.age.p2': '如果您未满18岁，请立即离开本网站。',
    'legal.disclaimer.content': '内容免责',
    'legal.disclaimer.content.p1': '本网站展示的内容可能包含成人内容，访问者应自行判断是否适合查看。',
    'legal.disclaimer.content.p2': '本网站不对任何第三方网站或服务承担责任。',
    'legal.disclaimer.legal': '法律声明',
    'legal.disclaimer.legal.p1': '本网站运营者不参与、不促进、不协助任何非法活动。所有展示内容均为虚构或娱乐性质。',
    'legal.disclaimer.legal.p2': '访问者应遵守当地法律法规，本网站不对任何违法行为承担责任。',
    'legal.disclaimer.privacy': '隐私保护',
    'legal.disclaimer.privacy.p1': '本网站重视用户隐私，不会收集或存储任何个人敏感信息。',
    'legal.disclaimer.privacy.p2': '所有展示的模特信息均为公开信息，不涉及隐私泄露。',
    'legal.disclaimer.update': '更新声明',
    'legal.disclaimer.update.p1': '本免责声明可能会不定期更新，请定期查看最新版本。',
    
    // Legal content - Terms
    'legal.terms.service': '1. 服务说明',
    'legal.terms.service.p1': '本网站仅提供信息展示服务，不参与任何实际商业交易或服务提供。',
    'legal.terms.service.p2': '所有展示内容均为娱乐性质，不代表实际可获得的商业服务。',
    'legal.terms.user': '2. 用户责任',
    'legal.terms.user.p1': '用户应确保：',
    'legal.terms.user.age': '• 年满18岁或以上',
    'legal.terms.user.law': '• 遵守当地法律法规',
    'legal.terms.user.illegal': '• 不从事任何非法活动',
    'legal.terms.user.content': '• 不传播违法或不当内容',
    'legal.terms.usage': '3. 内容使用',
    'legal.terms.usage.p1': '本网站内容仅供个人浏览使用，禁止：',
    'legal.terms.usage.commercial': '• 商业用途使用',
    'legal.terms.usage.copy': '• 未经授权的复制和分发',
    'legal.terms.usage.attack': '• 恶意攻击或破坏网站',
    'legal.terms.usage.virus': '• 传播病毒或恶意软件',
    'legal.terms.privacy': '4. 隐私政策',
    'legal.terms.privacy.p1': '我们重视用户隐私，承诺：',
    'legal.terms.privacy.collect': '• 不收集个人敏感信息',
    'legal.terms.privacy.sell': '• 不向第三方出售用户数据',
    'legal.terms.privacy.security': '• 使用安全的服务器和加密技术',
    'legal.terms.privacy.update': '• 定期更新安全措施',
    'legal.terms.disclaimer': '5. 免责条款',
    'legal.terms.disclaimer.p1': '本网站不对以下情况承担责任：',
    'legal.terms.disclaimer.user': '• 用户违反法律法规的行为',
    'legal.terms.disclaimer.third': '• 第三方网站或服务的问题',
    'legal.terms.disclaimer.force': '• 不可抗力导致的服务中断',
    'legal.terms.disclaimer.leak': '• 用户个人信息的泄露（除非网站过失）',
    'legal.terms.change': '6. 服务变更',
    'legal.terms.change.p1': '我们保留以下权利：',
    'legal.terms.change.modify': '• 随时修改或终止服务',
    'legal.terms.change.update': '• 更新服务条款',
    'legal.terms.change.restrict': '• 限制或禁止用户访问',
    'legal.terms.change.delete': '• 删除不当内容',
    'legal.terms.jurisdiction': '7. 法律适用',
    'legal.terms.jurisdiction.p1': '本服务条款受美国法律管辖，任何争议应通过友好协商解决。',
    'legal.terms.jurisdiction.p2': '如协商不成，应提交至有管辖权的法院解决。',
    'legal.terms.effective': '9. 生效日期',
    'legal.terms.effective.p1': '本服务条款自2025年7月1日起生效。',
    
    // Legal content - Privacy
    'legal.privacy.collection': '信息收集',
    'legal.privacy.collection.p1': '本网站仅收集必要的技术信息，包括：',
    'legal.privacy.collection.ip': '• 浏览器类型和版本信息',
    'legal.privacy.collection.browser': '• 浏览器类型和版本',
    'legal.privacy.collection.time': '• 访问时间和页面浏览记录',
    'legal.privacy.collection.device': '• 设备信息（用于优化显示）',
    'legal.privacy.collection.no': '我们不会收集任何个人身份信息，如姓名、地址、电话号码等。',
    'legal.privacy.cookie': 'Cookie使用',
    'legal.privacy.cookie.p1': '本网站使用必要的Cookie来：',
    'legal.privacy.cookie.language': '• 记住用户语言偏好',
    'legal.privacy.cookie.experience': '• 提供更好的用户体验',
    'legal.privacy.cookie.analytics': '• 分析网站使用情况',
    'legal.privacy.cookie.security': '• 防止恶意攻击',
    'legal.privacy.cookie.disable': '您可以在浏览器设置中禁用Cookie，但这可能影响网站功能。',
    'legal.privacy.usage': '信息使用',
    'legal.privacy.usage.p1': '收集的信息仅用于：',
    'legal.privacy.usage.optimize': '• 网站功能优化',
    'legal.privacy.usage.security': '• 安全防护',
    'legal.privacy.usage.improve': '• 用户体验改进',
    'legal.privacy.usage.diagnose': '• 技术问题诊断',
    'legal.privacy.usage.no': '我们不会将信息用于商业营销或向第三方出售。',
    'legal.privacy.protection': '信息保护',
    'legal.privacy.protection.p1': '我们采取以下措施保护用户信息：',
    'legal.privacy.protection.ssl': '• 使用SSL加密传输',
    'legal.privacy.protection.update': '• 定期安全更新',
    'legal.privacy.protection.access': '• 限制数据访问权限',
    'legal.privacy.protection.monitor': '• 监控异常访问行为',
    'legal.privacy.third': '第三方服务',
    'legal.privacy.third.p1': '本网站可能使用以下第三方服务：',
    'legal.privacy.third.analytics': '• Google Analytics（网站分析）',
    'legal.privacy.third.cloudflare': '• Cloudflare（安全防护）',
    'legal.privacy.third.vercel': '• Vercel（网站托管）',
    'legal.privacy.third.policy': '这些服务有自己的隐私政策，我们建议您查看相关条款。',
    'legal.privacy.rights': '用户权利',
    'legal.privacy.rights.p1': '由于我们不收集个人身份信息，因此不适用个人数据权利。我们仅收集必要的技术信息用于网站功能优化。',
    'legal.privacy.changes': '政策变更',
    'legal.privacy.changes.p1': '我们可能会不时更新本隐私政策。重大变更时，我们会：',
    'legal.privacy.changes.notice': '• 在网站上发布通知',
    'legal.privacy.changes.email': '• 通过电子邮件通知（如果适用）',
    'legal.privacy.changes.date': '• 更新生效日期',
    'legal.privacy.changes.continue': '继续使用我们的服务即表示您同意更新后的政策。',
  },
  'zh-TW': {
    // Navigation
    'nav.home': '首頁',
    'nav.newyork': '紐約',
    'nav.losangeles': '洛杉磯',
    'nav.sanfrancisco': '舊金山',
    'nav.boston': '波士頓',
    'nav.seattle': '西雅圖',
    'nav.lasvegas': '拉斯維加斯',
    'nav.brand': '小紅模特',
    
    // Language switcher
    'lang.switch': '簡體',
    'lang.current': '繁體',
    
    // Home page
    'home.title': '北美小紅模特私教預約平台',
    'home.subtitle': '專業模特私教服務 - 品質保證',
    'home.tagline': '無會員費 · 免訂金 · 誠信服務',
    'home.description': '我們精選紐約、洛杉磯、舊金山、波士頓、西雅圖、拉斯維加斯等城市的優質模特，提供專業私教上門服務，其他城市支持空降。',
    'home.description2': '為您提供高品質的模特私教體驗。',
    'home.contact': '預約諮詢：Telegram @xiaohongmodels',
    'home.browse': '瀏覽模特私教',
    
    // Cities
    'city.newyork': '紐約',
    'city.losangeles': '洛杉磯',
    'city.sanfrancisco': '舊金山',
    'city.boston': '波士頓',
    'city.seattle': '西雅圖',
    'city.lasvegas': '拉斯維加斯',
    
    // City button subtitles (without space)
    'city.newyork.subtitle': '紐約模特',
    'city.losangeles.subtitle': '洛杉磯模特',
    'city.sanfrancisco.subtitle': '舊金山模特',
    'city.boston.subtitle': '波士頓模特',
    'city.seattle.subtitle': '西雅圖模特',
    'city.lasvegas.subtitle': '拉斯維加斯模特',
    
    // Model card subtitles (without space)
    'model.card.newyork.subtitle': '紐約模特',
    'model.card.losangeles.subtitle': '洛杉磯模特',
    'model.card.sanfrancisco.subtitle': '舊金山模特',
    'model.card.boston.subtitle': '波士頓模特',
    'model.card.seattle.subtitle': '西雅圖模特',
    'model.card.lasvegas.subtitle': '拉斯維加斯模特',
    
    // Page titles (without space)
    'page.title.newyork': '紐約模特庫',
    'page.title.losangeles': '洛杉磯模特庫',
    'page.title.sanfrancisco': '舊金山模特庫',
    'page.title.boston': '波士頓模特庫',
    'page.title.seattle': '西雅圖模特庫',
    'page.title.lasvegas': '拉斯維加斯模特庫',
    
    // Services
    'services.title': '服務價格與規則',
    'services.hourly': '1小時：1500美元',
    'services.overnight': '1夜：3000美元',
    'services.airdrop': '空降1夜：4000美元起 + 路費',
    'services.booking': '建議提前預約以確保服務質量。',
    'services.browse': '請先瀏覽我們的模特相冊，選擇心儀人選後聯繫客服安排預約時間。',
    
    // FAQ
    'faq.location': '服務地點如何選擇？',
    'faq.location.answer': '答：可選擇酒店或您的住所，模特提供上門服務，我們暫不提供固定場所。',
    'faq.services': '具體服務內容有哪些？',
    'faq.services.answer': '答：服務內容由您與模特雙方協商確定，我們提供平台對接服務。',
    'faq.payment': '付款方式是什麼？',
    'faq.payment.answer': '答：見面確認滿意後，可通過現金或轉帳方式直接支付給模特。',
    'faq.authentic': '模特資料是否真實？',
    'faq.authentic.answer': '答：每位模特都提供照片和視頻資料，原則上資料真實可靠。如遇虛假信息，請及時聯繫我們處理。',
    'faq.refund': '服務不滿意可以退換嗎？',
    'faq.refund.answer': '答：我們提供退換服務，具體分為兩種情況：',
    'faq.refund.option1': '1. 模特資料真實但其他原因需要退換，需支付模特交通費用作為補償。',
    'faq.refund.option2': '2. 模特與資料不符，可拒絕支付費用並要求模特離開，同時聯繫我們處理。',
    'faq.airdrop': '空降服務如何收費？',
    'faq.airdrop.answer': '答：空降1夜服務4000美元起，需預付1000美元定金，路費按實際費用收取。',
    'faq.overnight': '1夜服務時長是多久？',
    'faq.overnight.answer': '答：1夜服務為8-10小時，通常從晚上10-12點開始到次日早上8點結束，具體時間可協商調整。',
    'faq.recruitment': '我們長期招募優質模特，有意向的女生歡迎聯繫我們',
    
    // Models
    'models.noData': '暫無模特信息',
    
    // Model detail pages
    'model.photos': '模特照片',
    'model.photo': '照片',
    'model.modelPhoto': '模特照片',
    'model.introduction': '模特介紹',
    'model.viewDetails': '查看詳情',
    // City pages
    'city.models': '模特庫',
    'model.label': '模特',
    
    // Page titles and pagination
    'page.title.city': '模特 - 第{page}頁 - xiaohongmodels.vercel.app',
    'page.title.city.first': '模特 - 第1頁 - xiaohongmodels.vercel.app',
    'page.title.model': '模特 - xiaohongmodels.vercel.app',
    'pagination.previous': '上一頁',
    'pagination.next': '下一頁',
    'pagination.page': '第{page}頁',
    
    // Legal pages
    'legal.disclaimer': '免責聲明',
    'legal.terms': '服務條款',
    'legal.privacy': '隱私政策',
    'legal.contact': '聯繫方式',
    'legal.contact.questions': '如有任何問題或疑慮，請通過以下方式聯繫：',
    'legal.lastUpdated': '最後更新時間：2025年7月',
    'legal.telegram': 'Telegram: @xiaohongmodels',
    'legal.ageDisclaimer': '所有模特均為18歲或以上成年人。',
    'legal.copyright': '© 2025 XiaohongModels. 保留所有權利。',
    
    // Legal content - Disclaimer
    'legal.disclaimer.important': '重要聲明',
    'legal.disclaimer.important.p1': '本網站僅作為信息展示平台，不參與任何實際交易或服務提供。所有模特信息均為展示用途，不代表實際可獲得的商業服務。',
    'legal.disclaimer.important.p2': '本網站內容僅供娛樂和信息參考，不構成任何商業要約或服務承諾。',
    'legal.disclaimer.age': '年齡驗證',
    'legal.disclaimer.age.p1': '本網站展示的所有模特均聲明為18歲或以上成年人。訪問本網站即表示您確認自己已年滿18歲。',
    'legal.disclaimer.age.p2': '如果您未滿18歲，請立即離開本網站。',
    'legal.disclaimer.content': '內容免責',
    'legal.disclaimer.content.p1': '本網站展示的內容可能包含成人內容，訪問者應自行判斷是否適合查看。',
    'legal.disclaimer.content.p2': '本網站不對任何第三方網站或服務承擔責任。',
    'legal.disclaimer.legal': '法律聲明',
    'legal.disclaimer.legal.p1': '本網站運營者不參與、不促進、不協助任何非法活動。所有展示內容均為虛構或娛樂性質。',
    'legal.disclaimer.legal.p2': '訪問者應遵守當地法律法規，本網站不對任何違法行為承擔責任。',
    'legal.disclaimer.privacy': '隱私保護',
    'legal.disclaimer.privacy.p1': '本網站重視用戶隱私，不會收集或存儲任何個人敏感信息。',
    'legal.disclaimer.privacy.p2': '所有展示的模特信息均為公開信息，不涉及隱私泄露。',
    'legal.disclaimer.update': '更新聲明',
    'legal.disclaimer.update.p1': '本免責聲明可能會不定期更新，請定期查看最新版本。',
    
    // Legal content - Terms
    'legal.terms.service': '1. 服務說明',
    'legal.terms.service.p1': '本網站僅提供信息展示服務，不參與任何實際商業交易或服務提供。',
    'legal.terms.service.p2': '所有展示內容均為娛樂性質，不代表實際可獲得的商業服務。',
    'legal.terms.user': '2. 用戶責任',
    'legal.terms.user.p1': '用戶應確保：',
    'legal.terms.user.age': '• 年滿18歲或以上',
    'legal.terms.user.law': '• 遵守當地法律法規',
    'legal.terms.user.illegal': '• 不從事任何非法活動',
    'legal.terms.user.content': '• 不傳播違法或不當內容',
    'legal.terms.usage': '3. 內容使用',
    'legal.terms.usage.p1': '本網站內容僅供個人瀏覽使用，禁止：',
    'legal.terms.usage.commercial': '• 商業用途使用',
    'legal.terms.usage.copy': '• 未經授權的複製和分發',
    'legal.terms.usage.attack': '• 惡意攻擊或破壞網站',
    'legal.terms.usage.virus': '• 傳播病毒或惡意軟件',
    'legal.terms.privacy': '4. 隱私政策',
    'legal.terms.privacy.p1': '我們重視用戶隱私，承諾：',
    'legal.terms.privacy.collect': '• 不收集個人敏感信息',
    'legal.terms.privacy.sell': '• 不向第三方出售用戶數據',
    'legal.terms.privacy.security': '• 使用安全的服務器和加密技術',
    'legal.terms.privacy.update': '• 定期更新安全措施',
    'legal.terms.disclaimer': '5. 免責條款',
    'legal.terms.disclaimer.p1': '本網站不對以下情況承擔責任：',
    'legal.terms.disclaimer.user': '• 用戶違反法律法規的行為',
    'legal.terms.disclaimer.third': '• 第三方網站或服務的問題',
    'legal.terms.disclaimer.force': '• 不可抗力導致的服務中斷',
    'legal.terms.disclaimer.leak': '• 用戶個人信息的泄露（除非網站過失）',
    'legal.terms.change': '6. 服務變更',
    'legal.terms.change.p1': '我們保留以下權利：',
    'legal.terms.change.modify': '• 隨時修改或終止服務',
    'legal.terms.change.update': '• 更新服務條款',
    'legal.terms.change.restrict': '• 限制或禁止用戶訪問',
    'legal.terms.change.delete': '• 刪除不當內容',
    'legal.terms.jurisdiction': '7. 法律適用',
    'legal.terms.jurisdiction.p1': '本服務條款受美國法律管轄，任何爭議應通過友好協商解決。',
    'legal.terms.jurisdiction.p2': '如協商不成，應提交至有管轄權的法院解決。',
    'legal.terms.effective': '9. 生效日期',
    'legal.terms.effective.p1': '本服務條款自2025年7月1日起生效。',
    
    // Legal content - Privacy
    'legal.privacy.collection': '信息收集',
    'legal.privacy.collection.p1': '本網站僅收集必要的技術信息，包括：',
    'legal.privacy.collection.ip': '• 瀏覽器類型和版本信息',
    'legal.privacy.collection.browser': '• 瀏覽器類型和版本',
    'legal.privacy.collection.time': '• 訪問時間和頁面瀏覽記錄',
    'legal.privacy.collection.device': '• 設備信息（用於優化顯示）',
    'legal.privacy.collection.no': '我們不會收集任何個人身份信息，如姓名、地址、電話號碼等。',
    'legal.privacy.cookie': 'Cookie使用',
    'legal.privacy.cookie.p1': '本網站使用必要的Cookie來：',
    'legal.privacy.cookie.language': '• 記住用戶語言偏好',
    'legal.privacy.cookie.experience': '• 提供更好的用戶體驗',
    'legal.privacy.cookie.analytics': '• 分析網站使用情況',
    'legal.privacy.cookie.security': '• 防止惡意攻擊',
    'legal.privacy.cookie.disable': '您可以在瀏覽器設置中禁用Cookie，但這可能影響網站功能。',
    'legal.privacy.usage': '信息使用',
    'legal.privacy.usage.p1': '收集的信息僅用於：',
    'legal.privacy.usage.optimize': '• 網站功能優化',
    'legal.privacy.usage.security': '• 安全防護',
    'legal.privacy.usage.improve': '• 用戶體驗改進',
    'legal.privacy.usage.diagnose': '• 技術問題診斷',
    'legal.privacy.usage.no': '我們不會將信息用於商業營銷或向第三方出售。',
    'legal.privacy.protection': '信息保護',
    'legal.privacy.protection.p1': '我們採取以下措施保護用戶信息：',
    'legal.privacy.protection.ssl': '• 使用SSL加密傳輸',
    'legal.privacy.protection.update': '• 定期安全更新',
    'legal.privacy.protection.access': '• 限制數據訪問權限',
    'legal.privacy.protection.monitor': '• 監控異常訪問行為',
    'legal.privacy.third': '第三方服務',
    'legal.privacy.third.p1': '本網站可能使用以下第三方服務：',
    'legal.privacy.third.analytics': '• Google Analytics（網站分析）',
    'legal.privacy.third.cloudflare': '• Cloudflare（安全防護）',
    'legal.privacy.third.vercel': '• Vercel（網站託管）',
    'legal.privacy.third.policy': '這些服務有自己的隱私政策，我們建議您查看相關條款。',
    'legal.privacy.rights': '用戶權利',
    'legal.privacy.rights.p1': '由於我們不收集個人身份信息，因此不適用個人數據權利。我們僅收集必要的技術信息用於網站功能優化。',
    'legal.privacy.changes': '政策變更',
    'legal.privacy.changes.p1': '我們可能會不時更新本隱私政策。重大變更時，我們會：',
    'legal.privacy.changes.notice': '• 在網站上發布通知',
    'legal.privacy.changes.email': '• 通過電子郵件通知（如果適用）',
    'legal.privacy.changes.date': '• 更新生效日期',
    'legal.privacy.changes.continue': '繼續使用我們的服務即表示您同意更新後的政策。',
  },
  'ko': {
    // Navigation
    'nav.home': '홈',
    'nav.newyork': '뉴욕',
    'nav.losangeles': '로스앤젤레스',
    'nav.sanfrancisco': '샌프란시스코',
    'nav.boston': '보스턴',
    'nav.seattle': '시애틀',
    'nav.lasvegas': '라스베가스',
    'nav.brand': '샤오홍 모델',
    
    // Language switcher
    'lang.switch': '한국어',
    'lang.current': '한국어',
    
    // Home page
    'home.title': '북미 프리미엄 모델 에스코트 서비스',
    'home.subtitle': '전문 모델 에스코트 서비스 - 품질 보장',
    'home.tagline': '회원비 없음 · 보증금 없음 · 신뢰할 수 있는 서비스',
    'home.description': '뉴욕, 로스앤젤레스, 샌프란시스코, 보스턴, 시애틀, 라스베가스 등 도시의 프리미엄 모델을 선별하여 전문 에스코트 서비스를 제공합니다. 다른 도시는 에어드롭 서비스를 지원합니다.',
    'home.description2': '고품질 모델 에스코트 경험을 제공합니다.',
    'home.contact': '예약 문의: Telegram @xiaohongmodels',
    'home.browse': '모델 둘러보기',
    
    // Cities
    'city.newyork': '뉴욕',
    'city.losangeles': '로스앤젤레스',
    'city.sanfrancisco': '샌프란시스코',
    'city.boston': '보스턴',
    'city.seattle': '시애틀',
    'city.lasvegas': '라스베가스',
    
    // City button subtitles (without space)
    'city.newyork.subtitle': '뉴욕모델',
    'city.losangeles.subtitle': '로스앤젤레스모델',
    'city.sanfrancisco.subtitle': '샌프란시스코모델',
    'city.boston.subtitle': '보스턴모델',
    'city.seattle.subtitle': '시애틀모델',
    'city.lasvegas.subtitle': '라스베가스모델',
    
    // Model card subtitles (without space)
    'model.card.newyork.subtitle': '뉴욕모델',
    'model.card.losangeles.subtitle': '로스앤젤레스모델',
    'model.card.sanfrancisco.subtitle': '샌프란시스코모델',
    'model.card.boston.subtitle': '보스턴모델',
    'model.card.seattle.subtitle': '시애틀모델',
    'model.card.lasvegas.subtitle': '라스베가스모델',
    
    // Page titles (without space)
    'page.title.newyork': '뉴욕모델',
    'page.title.losangeles': '로스앤젤레스모델',
    'page.title.sanfrancisco': '샌프란시스코모델',
    'page.title.boston': '보스턴모델',
    'page.title.seattle': '시애틀모델',
    'page.title.lasvegas': '라스베가스모델',
    
    // Services
    'services.title': '서비스 가격 및 규칙',
    'services.hourly': '1시간: $1,500',
    'services.overnight': '1박: $3,000',
    'services.airdrop': '에어드롭 1박: $4,000 + 여행비',
    'services.booking': '서비스 품질을 위해 사전 예약을 권장합니다.',
    'services.browse': '먼저 모델 갤러리를 둘러보시고, 원하는 모델을 선택한 후 고객 서비스에 연락하여 예약 시간을 조정하세요.',
    
    // FAQ
    'faq.location': '서비스 장소는 어떻게 선택하나요?',
    'faq.location.answer': 'A: 호텔이나 귀하의 거주지를 선택할 수 있으며, 모델이 방문 서비스를 제공합니다. 현재 고정 장소는 제공하지 않습니다.',
    'faq.services': '구체적인 서비스 내용은 무엇인가요?',
    'faq.services.answer': 'A: 서비스 내용은 귀하와 모델 간에 협의하여 결정됩니다. 저희는 플랫폼 매칭 서비스를 제공합니다.',
    'faq.payment': '결제 방법은 무엇인가요?',
    'faq.payment.answer': 'A: 만남 후 만족을 확인한 후, 현금이나 은행 송금으로 모델에게 직접 지불할 수 있습니다.',
    'faq.authentic': '모델 프로필이 진짜인가요?',
    'faq.authentic.answer': 'A: 각 모델은 사진과 비디오 자료를 제공합니다. 원칙적으로 정보는 진실하고 신뢰할 수 있습니다. 허위 정보를 발견하면 즉시 저희에게 연락하세요.',
    'faq.refund': '서비스에 만족하지 못하면 환불할 수 있나요?',
    'faq.refund.answer': 'A: 환불 서비스를 제공하며, 구체적으로 두 가지 상황으로 나뉩니다:',
    'faq.refund.option1': '1. 모델 정보가 진실하지만 다른 이유로 환불이 필요한 경우, 모델 교통비를 보상으로 지불해야 합니다.',
    'faq.refund.option2': '2. 모델이 정보와 일치하지 않는 경우, 비용 지불을 거부하고 모델에게 떠나도록 요청할 수 있으며, 동시에 저희에게 연락하여 처리하세요.',
    'faq.airdrop': '에어드롭 서비스는 어떻게 요금이 부과되나요?',
    'faq.airdrop.answer': 'A: 에어드롭 1박 서비스는 $4,000부터 시작하며, 사전에 $1,000 보증금이 필요하며, 여행비는 실제 비용으로 청구됩니다.',
    'faq.overnight': '하룻밤 서비스는 얼마나 오래인가요?',
    'faq.overnight.answer': 'A: 하룻밤 서비스는 8-10시간이며, 보통 저녁 10-12시부터 다음날 아침 8시까지이며, 구체적인 시간은 협의할 수 있습니다.',
    'faq.recruitment': '저희는 항상 품질 좋은 모델을 모집하고 있으며, 관심 있는 여성분들은 언제든 연락해 주세요',
    
    // Models
    'models.noData': '모델 정보가 없습니다',
    
    // Model detail pages
    'model.photos': '모델 사진',
    'model.photo': '사진',
    'model.modelPhoto': '모델 사진',
    'model.introduction': '모델 소개',
    'model.viewDetails': '상세 보기',
    // City pages
    'city.models': '모델',
    'model.label': '모델',
    
    // Page titles and pagination
    'page.title.city': '모델 - {page}페이지 - xiaohongmodels.vercel.app',
    'page.title.city.first': '모델 - 1페이지 - xiaohongmodels.vercel.app',
    'page.title.model': '모델 - xiaohongmodels.vercel.app',
    'pagination.previous': '이전',
    'pagination.next': '다음',
    'pagination.page': '{page}페이지',
    
    // Legal pages
    'legal.disclaimer': '면책 조항',
    'legal.terms': '서비스 약관',
    'legal.privacy': '개인정보 처리방침',
    'legal.contact': '연락처',
    'legal.contact.questions': '문의사항이나 우려사항이 있으시면 다음 방법으로 연락해 주세요:',
    'legal.lastUpdated': '최종 업데이트: 2025년 7월',
    'legal.telegram': 'Telegram: @xiaohongmodels',
    'legal.ageDisclaimer': '모든 모델은 18세 이상의 성인입니다.',
    'legal.copyright': '© 2025 XiaohongModels. 모든 권리 보유.',
    
    // Legal content - Disclaimer
    'legal.disclaimer.important': '중요한 성명',
    'legal.disclaimer.important.p1': '이 웹사이트는 정보 제공 플랫폼으로만 운영되며, 실제 거래나 서비스 제공에 참여하지 않습니다. 모든 모델 정보는 전시 목적으로만 사용되며, 실제로 제공 가능한 상업 서비스를 대표하지 않습니다.',
    'legal.disclaimer.important.p2': '이 웹사이트의 내용은 오락 및 정보 참고용으로만 제공되며, 어떠한 상업적 제안이나 서비스 약속도 구성하지 않습니다.',
    'legal.disclaimer.age': '연령 확인',
    'legal.disclaimer.age.p1': '이 웹사이트에 표시된 모든 모델은 18세 이상의 성인으로 선언됩니다. 이 웹사이트를 방문하는 것은 귀하가 18세 이상임을 확인하는 것을 의미합니다.',
    'legal.disclaimer.age.p2': '만약 귀하가 18세 미만이라면, 즉시 이 웹사이트를 떠나주세요.',
    'legal.disclaimer.content': '내용 면책',
    'legal.disclaimer.content.p1': '이 웹사이트에 표시된 내용은 성인용 콘텐츠를 포함할 수 있으며, 방문자는 자신이 적합한지 스스로 판단해야 합니다.',
    'legal.disclaimer.content.p2': '이 웹사이트는 제3자 웹사이트나 서비스에 대해 책임을 지지 않습니다.',
    'legal.disclaimer.legal': '법적 성명',
    'legal.disclaimer.legal.p1': '이 웹사이트 운영자는 불법 활동에 참여하거나 촉진하거나 지원하지 않습니다. 모든 표시된 내용은 허구이거나 오락 목적입니다.',
    'legal.disclaimer.legal.p2': '방문자는 현지 법률을 준수해야 하며, 이 웹사이트는 불법 행위에 대해 책임을 지지 않습니다.',
    'legal.disclaimer.privacy': '개인정보 보호',
    'legal.disclaimer.privacy.p1': '이 웹사이트는 사용자 개인정보를 중시하며, 개인 민감 정보를 수집하거나 저장하지 않습니다.',
    'legal.disclaimer.privacy.p2': '모든 표시된 모델 정보는 공개 정보이며, 개인정보 유출과 관련이 없습니다.',
    'legal.disclaimer.update': '업데이트 성명',
    'legal.disclaimer.update.p1': '이 면책 조항은 정기적으로 업데이트될 수 있으며, 최신 버전을 정기적으로 확인하시기 바랍니다.',
    
    // Legal content - Terms
    'legal.terms.service': '1. 서비스 설명',
    'legal.terms.service.p1': '이 웹사이트는 정보 제공 서비스만 제공하며, 실제 상업 거래나 서비스 제공에 참여하지 않습니다.',
    'legal.terms.service.p2': '모든 표시된 내용은 오락 목적이며, 실제로 제공 가능한 상업 서비스를 대표하지 않습니다.',
    'legal.terms.user': '2. 사용자 책임',
    'legal.terms.user.p1': '사용자는 다음을 보장해야 합니다:',
    'legal.terms.user.age': '• 18세 이상',
    'legal.terms.user.law': '• 현지 법률 준수',
    'legal.terms.user.illegal': '• 불법 활동 금지',
    'legal.terms.user.content': '• 불법 또는 부적절한 콘텐츠 전파 금지',
    'legal.terms.usage': '3. 콘텐츠 사용',
    'legal.terms.usage.p1': '이 웹사이트 콘텐츠는 개인 브라우징용으로만 제공되며, 다음을 금지합니다:',
    'legal.terms.usage.commercial': '• 상업적 용도 사용',
    'legal.terms.usage.copy': '• 무단 복사 및 배포',
    'legal.terms.usage.attack': '• 악의적 공격 또는 웹사이트 파괴',
    'legal.terms.usage.virus': '• 바이러스 또는 악성 소프트웨어 전파',
    'legal.terms.privacy': '4. 개인정보 처리방침',
    'legal.terms.privacy.p1': '저희는 사용자 개인정보를 중시하며 다음을 약속합니다:',
    'legal.terms.privacy.collect': '• 개인 민감 정보 수집 금지',
    'legal.terms.privacy.sell': '• 제3자에게 사용자 데이터 판매 금지',
    'legal.terms.privacy.security': '• 안전한 서버 및 암호화 기술 사용',
    'legal.terms.privacy.update': '• 정기적인 보안 업데이트',
    'legal.terms.disclaimer': '5. 면책 조항',
    'legal.terms.disclaimer.p1': '이 웹사이트는 다음 상황에 대해 책임을 지지 않습니다:',
    'legal.terms.disclaimer.user': '• 사용자의 법률 위반 행위',
    'legal.terms.disclaimer.third': '• 제3자 웹사이트나 서비스 문제',
    'legal.terms.disclaimer.force': '• 불가항력으로 인한 서비스 중단',
    'legal.terms.disclaimer.leak': '• 사용자 개인정보 유출 (웹사이트 과실이 아닌 경우)',
    'legal.terms.change': '6. 서비스 변경',
    'legal.terms.change.p1': '저희는 다음 권리를 보유합니다:',
    'legal.terms.change.modify': '• 언제든지 서비스 수정 또는 종료',
    'legal.terms.change.update': '• 서비스 약관 업데이트',
    'legal.terms.change.restrict': '• 사용자 접근 제한 또는 금지',
    'legal.terms.change.delete': '• 부적절한 콘텐츠 삭제',
    'legal.terms.jurisdiction': '7. 법적 관할권',
    'legal.terms.jurisdiction.p1': '이 서비스 약관은 미국 법률의 관할을 받으며, 모든 분쟁은 우호적 협상을 통해 해결됩니다.',
    'legal.terms.jurisdiction.p2': '협상이 실패할 경우, 관할권이 있는 법원에 제출됩니다.',
    'legal.terms.effective': '9. 발효일',
    'legal.terms.effective.p1': '이 서비스 약관은 2025년 7월 1일부터 발효됩니다.',
    
    // Legal content - Privacy
    'legal.privacy.collection': '정보 수집',
    'legal.privacy.collection.p1': '이 웹사이트는 필요한 기술 정보만 수집합니다:',
    'legal.privacy.collection.ip': '• 브라우저 유형 및 버전 정보',
    'legal.privacy.collection.browser': '• 브라우저 유형 및 버전',
    'legal.privacy.collection.time': '• 방문 시간 및 페이지 방문 기록',
    'legal.privacy.collection.device': '• 기기 정보 (표시 최적화용)',
    'legal.privacy.collection.no': '저희는 이름, 주소, 전화번호 등의 개인 신원 정보를 수집하지 않습니다.',
    'legal.privacy.cookie': '쿠키 사용',
    'legal.privacy.cookie.p1': '이 웹사이트는 필요한 쿠키를 사용합니다:',
    'legal.privacy.cookie.language': '• 사용자 언어 선호도 기억',
    'legal.privacy.cookie.experience': '• 더 나은 사용자 경험 제공',
    'legal.privacy.cookie.analytics': '• 웹사이트 사용 분석',
    'legal.privacy.cookie.security': '• 악의적 공격 방지',
    'legal.privacy.cookie.disable': '브라우저 설정에서 쿠키를 비활성화할 수 있지만, 이는 웹사이트 기능에 영향을 줄 수 있습니다.',
    'legal.privacy.usage': '정보 사용',
    'legal.privacy.usage.p1': '수집된 정보는 다음 용도로만 사용됩니다:',
    'legal.privacy.usage.optimize': '• 웹사이트 기능 최적화',
    'legal.privacy.usage.security': '• 보안 보호',
    'legal.privacy.usage.improve': '• 사용자 경험 개선',
    'legal.privacy.usage.diagnose': '• 기술 문제 진단',
    'legal.privacy.usage.no': '저희는 정보를 상업적 마케팅이나 제3자 판매에 사용하지 않습니다.',
    'legal.privacy.protection': '정보 보호',
    'legal.privacy.protection.p1': '저희는 사용자 정보를 보호하기 위해 다음 조치를 취합니다:',
    'legal.privacy.protection.ssl': '• SSL 암호화 전송 사용',
    'legal.privacy.protection.update': '• 정기적인 보안 업데이트',
    'legal.privacy.protection.access': '• 데이터 접근 권한 제한',
    'legal.privacy.protection.monitor': '• 비정상적인 접근 행동 모니터링',
    'legal.privacy.third': '제3자 서비스',
    'legal.privacy.third.p1': '이 웹사이트는 다음 제3자 서비스를 사용할 수 있습니다:',
    'legal.privacy.third.analytics': '• Google Analytics (웹사이트 분석)',
    'legal.privacy.third.cloudflare': '• Cloudflare (보안 보호)',
    'legal.privacy.third.vercel': '• Vercel (웹사이트 호스팅)',
    'legal.privacy.third.policy': '이러한 서비스는 자체 개인정보 처리방침을 가지고 있으며, 관련 조항을 확인하시기 바랍니다.',
    'legal.privacy.rights': '사용자 권리',
    'legal.privacy.rights.p1': '저희는 개인 신원 정보를 수집하지 않으므로 개인 데이터 권리가 적용되지 않습니다. 저희는 웹사이트 기능 최적화를 위한 필요한 기술 정보만 수집합니다.',
    'legal.privacy.changes': '정책 변경',
    'legal.privacy.changes.p1': '저희는 이 개인정보 처리방침을 수시로 업데이트할 수 있습니다. 중요한 변경사항이 있을 때:',
    'legal.privacy.changes.notice': '• 웹사이트에 공지',
    'legal.privacy.changes.email': '• 이메일로 통지 (해당하는 경우)',
    'legal.privacy.changes.date': '• 발효일 업데이트',
    'legal.privacy.changes.continue': '서비스 계속 사용은 업데이트된 정책에 동의함을 의미합니다.',
  },
  'ja': {
    // Navigation
    'nav.home': 'ホーム',
    'nav.newyork': 'ニューヨーク',
    'nav.losangeles': 'ロサンゼルス',
    'nav.sanfrancisco': 'サンフランシスコ',
    'nav.boston': 'ボストン',
    'nav.seattle': 'シアトル',
    'nav.lasvegas': 'ラスベガス',
    'nav.brand': 'シャオホンモデル',
    
    // Language switcher
    'lang.switch': '日本語',
    'lang.current': '日本語',
    
    // Home page
    'home.title': '北米プレミアムモデルエスコートサービス',
    'home.subtitle': 'プロフェッショナルモデルエスコートサービス - 品質保証',
    'home.tagline': '会員費なし · 保証金なし · 信頼できるサービス',
    'home.description': 'ニューヨーク、ロサンゼルス、サンフランシスコ、ボストン、シアトル、ラスベガスなどの都市から厳選されたプレミアムモデルを提供し、プロフェッショナルなエスコートサービスを提供しています。他の都市はエアドロップサービスをサポートしています。',
    'home.description2': '高品質なモデルエスコート体験を提供します。',
    'home.contact': '予約お問い合わせ: Telegram @xiaohongmodels',
    'home.browse': 'モデルを閲覧',
    
    // Cities
    'city.newyork': 'ニューヨーク',
    'city.losangeles': 'ロサンゼルス',
    'city.sanfrancisco': 'サンフランシスコ',
    'city.boston': 'ボストン',
    'city.seattle': 'シアトル',
    'city.lasvegas': 'ラスベガス',
    
    // City button subtitles (without space)
    'city.newyork.subtitle': 'ニューヨークモデル',
    'city.losangeles.subtitle': 'ロサンゼルスモデル',
    'city.sanfrancisco.subtitle': 'サンフランシスコモデル',
    'city.boston.subtitle': 'ボストンモデル',
    'city.seattle.subtitle': 'シアトルモデル',
    'city.lasvegas.subtitle': 'ラスベガスモデル',
    
    // Model card subtitles (without space)
    'model.card.newyork.subtitle': 'ニューヨークモデル',
    'model.card.losangeles.subtitle': 'ロサンゼルスモデル',
    'model.card.sanfrancisco.subtitle': 'サンフランシスコモデル',
    'model.card.boston.subtitle': 'ボストンモデル',
    'model.card.seattle.subtitle': 'シアトルモデル',
    'model.card.lasvegas.subtitle': 'ラスベガスモデル',
    
    // Page titles (without space)
    'page.title.newyork': 'ニューヨークモデル',
    'page.title.losangeles': 'ロサンゼルスモデル',
    'page.title.sanfrancisco': 'サンフランシスコモデル',
    'page.title.boston': 'ボストンモデル',
    'page.title.seattle': 'シアトルモデル',
    'page.title.lasvegas': 'ラスベガスモデル',
    
    // Services
    'services.title': 'サービス料金とルール',
    'services.hourly': '1時間: $1,500',
    'services.overnight': '1泊: $3,000',
    'services.airdrop': 'エアドロップ1泊: $4,000 + 旅費',
    'services.booking': 'サービス品質を確保するため、事前予約をお勧めします。',
    'services.browse': 'まずモデルギャラリーをご覧いただき、お好みのモデルを選択してから、カスタマーサービスにお問い合わせいただき、予約時間を調整してください。',
    
    // FAQ
    'faq.location': 'サービス場所はどのように選択しますか？',
    'faq.location.answer': 'A: ホテルやご自宅を選択でき、モデルが訪問サービスを提供します。現在、固定場所は提供していません。',
    'faq.services': '具体的なサービス内容は何ですか？',
    'faq.services.answer': 'A: サービス内容はお客様とモデル間で協議して決定されます。当社はプラットフォームマッチングサービスを提供します。',
    'faq.payment': '支払い方法は何ですか？',
    'faq.payment.answer': 'A: お会いして満足を確認した後、現金または銀行振込でモデルに直接支払うことができます。',
    'faq.authentic': 'モデルのプロフィールは本物ですか？',
    'faq.authentic.answer': 'A: 各モデルは写真とビデオ資料を提供します。原則として、情報は真実で信頼できるものです。虚偽の情報に遭遇した場合は、すぐに当社にお問い合わせください。',
    'faq.refund': 'サービスに満足できない場合、返金は可能ですか？',
    'faq.refund.answer': 'A: 返金サービスを提供しており、具体的には2つの状況に分かれます:',
    'faq.refund.option1': '1. モデル情報が真実だが他の理由で返金が必要な場合、モデルの交通費を補償として支払う必要があります。',
    'faq.refund.option2': '2. モデルが情報と一致しない場合、支払いを拒否してモデルに立ち去るよう要求でき、同時に当社に連絡して処理してください。',
    'faq.airdrop': 'エアドロップサービスはどのように料金がかかりますか？',
    'faq.airdrop.answer': 'A: エアドロップ1泊サービスは$4,000から始まり、事前に$1,000の保証金が必要で、旅費は実際の費用で請求されます。',
    'faq.overnight': '一泊サービスはどのくらいの時間ですか？',
    'faq.overnight.answer': 'A: 一泊サービスは8-10時間で、通常は夜10-12時から翌朝8時までで、具体的な時間は協議可能です。',
    'faq.recruitment': '当社は常に質の高いモデルを募集しており、興味のある女性はいつでもお問い合わせください',
    
    // Models
    'models.noData': 'モデル情報がありません',
    
    // Model detail pages
    'model.photos': 'モデル写真',
    'model.photo': '写真',
    'model.modelPhoto': 'モデル写真',
    'model.introduction': 'モデル紹介',
    'model.viewDetails': '詳細を見る',
    // City pages
    'city.models': 'モデル',
    'model.label': 'モデル',
    
    // Page titles and pagination
    'page.title.city': 'モデル - {page}ページ - xiaohongmodels.vercel.app',
    'page.title.city.first': 'モデル - 1ページ - xiaohongmodels.vercel.app',
    'page.title.model': 'モデル - xiaohongmodels.vercel.app',
    'pagination.previous': '前へ',
    'pagination.next': '次へ',
    'pagination.page': '{page}ページ',
    
    // Legal pages
    'legal.disclaimer': '免責事項',
    'legal.terms': '利用規約',
    'legal.privacy': 'プライバシーポリシー',
    'legal.contact': 'お問い合わせ',
    'legal.contact.questions': 'ご質問やご不明な点がございましたら、以下の方法でお問い合わせください：',
    'legal.lastUpdated': '最終更新: 2025年7月',
    'legal.telegram': 'Telegram: @xiaohongmodels',
    'legal.ageDisclaimer': 'すべてのモデルは18歳以上の成人です。',
    'legal.copyright': '© 2025 XiaohongModels. 全著作権所有。',
    
    // Legal content - Disclaimer
    'legal.disclaimer.important': '重要な声明',
    'legal.disclaimer.important.p1': 'このウェブサイトは情報提供プラットフォームとしてのみ運営され、実際の取引やサービス提供には参加しません。すべてのモデル情報は展示目的でのみ使用され、実際に提供可能な商業サービスを代表するものではありません。',
    'legal.disclaimer.important.p2': 'このウェブサイトの内容は娯楽および情報参考用としてのみ提供され、いかなる商業的提案やサービス約束も構成しません。',
    'legal.disclaimer.age': '年齢確認',
    'legal.disclaimer.age.p1': 'このウェブサイトに表示されるすべてのモデルは18歳以上の成人として宣言されています。このウェブサイトを訪問することは、あなたが18歳以上であることを確認することを意味します。',
    'legal.disclaimer.age.p2': 'もしあなたが18歳未満の場合、すぐにこのウェブサイトを離れてください。',
    'legal.disclaimer.content': 'コンテンツ免責',
    'legal.disclaimer.content.p1': 'このウェブサイトに表示される内容は成人向けコンテンツを含む場合があり、訪問者は自分が適切かどうか自己判断する必要があります。',
    'legal.disclaimer.content.p2': 'このウェブサイトは第三者ウェブサイトやサービスについて責任を負いません。',
    'legal.disclaimer.legal': '法的声明',
    'legal.disclaimer.legal.p1': 'このウェブサイト運営者は違法活動に参加、促進、支援しません。すべての表示内容は架空または娯楽目的です。',
    'legal.disclaimer.legal.p2': '訪問者は現地の法律を遵守する必要があり、このウェブサイトは違法行為について責任を負いません。',
    'legal.disclaimer.privacy': 'プライバシー保護',
    'legal.disclaimer.privacy.p1': 'このウェブサイトはユーザーのプライバシーを重視し、個人の機密情報を収集または保存しません。',
    'legal.disclaimer.privacy.p2': 'すべての表示されたモデル情報は公開情報であり、プライバシー漏洩とは関係ありません。',
    'legal.disclaimer.update': '更新声明',
    'legal.disclaimer.update.p1': 'この免責事項は定期的に更新される場合があり、最新バージョンを定期的にご確認ください。',
    
    // Legal content - Terms
    'legal.terms.service': '1. サービス説明',
    'legal.terms.service.p1': 'このウェブサイトは情報提供サービスのみを提供し、実際の商業取引やサービス提供には参加しません。',
    'legal.terms.service.p2': 'すべての表示内容は娯楽目的であり、実際に提供可能な商業サービスを代表するものではありません。',
    'legal.terms.user': '2. ユーザー責任',
    'legal.terms.user.p1': 'ユーザーは以下を確保する必要があります:',
    'legal.terms.user.age': '• 18歳以上',
    'legal.terms.user.law': '• 現地の法律遵守',
    'legal.terms.user.illegal': '• 違法活動の禁止',
    'legal.terms.user.content': '• 違法または不適切なコンテンツの拡散禁止',
    'legal.terms.usage': '3. コンテンツ使用',
    'legal.terms.usage.p1': 'このウェブサイトコンテンツは個人閲覧用としてのみ提供され、以下を禁止します:',
    'legal.terms.usage.commercial': '• 商業目的での使用',
    'legal.terms.usage.copy': '• 無断での複製および配布',
    'legal.terms.usage.attack': '• 悪意のある攻撃またはウェブサイト破壊',
    'legal.terms.usage.virus': '• ウイルスまたはマルウェアの拡散',
    'legal.terms.privacy': '4. プライバシーポリシー',
    'legal.terms.privacy.p1': '当社はユーザーのプライバシーを重視し、以下を約束します:',
    'legal.terms.privacy.collect': '• 個人機密情報の収集禁止',
    'legal.terms.privacy.sell': '• 第三者へのユーザーデータ販売禁止',
    'legal.terms.privacy.security': '• 安全なサーバーおよび暗号化技術の使用',
    'legal.terms.privacy.update': '• 定期的なセキュリティ更新',
    'legal.terms.disclaimer': '5. 免責条項',
    'legal.terms.disclaimer.p1': 'このウェブサイトは以下の状況について責任を負いません:',
    'legal.terms.disclaimer.user': '• ユーザーの法律違反行為',
    'legal.terms.disclaimer.third': '• 第三者ウェブサイトやサービスの問題',
    'legal.terms.disclaimer.force': '• 不可抗力によるサービス中断',
    'legal.terms.disclaimer.leak': '• ユーザー個人情報の漏洩（ウェブサイトの過失でない場合）',
    'legal.terms.change': '6. サービス変更',
    'legal.terms.change.p1': '当社は以下の権利を保有します:',
    'legal.terms.change.modify': '• いつでもサービスの変更または終了',
    'legal.terms.change.update': '• 利用規約の更新',
    'legal.terms.change.restrict': '• ユーザーアクセスの制限または禁止',
    'legal.terms.change.delete': '• 不適切なコンテンツの削除',
    'legal.terms.jurisdiction': '7. 法的管轄権',
    'legal.terms.jurisdiction.p1': 'この利用規約は米国法律の管轄を受け、すべての紛争は友好的な交渉を通じて解決されます。',
    'legal.terms.jurisdiction.p2': '交渉が失敗した場合、管轄権のある裁判所に提出されます。',
    'legal.terms.effective': '9. 発効日',
    'legal.terms.effective.p1': 'この利用規約は2025年7月1日から発効されます。',
    
    // Legal content - Privacy
    'legal.privacy.collection': '情報収集',
    'legal.privacy.collection.p1': 'このウェブサイトは必要な技術情報のみを収集します:',
    'legal.privacy.collection.ip': '• ブラウザの種類とバージョン情報',
    'legal.privacy.collection.browser': '• ブラウザの種類とバージョン',
    'legal.privacy.collection.time': '• 訪問時間とページ閲覧記録',
    'legal.privacy.collection.device': '• デバイス情報（表示最適化用）',
    'legal.privacy.collection.no': '当社は名前、住所、電話番号などの個人識別情報を収集しません。',
    'legal.privacy.cookie': 'Cookie使用',
    'legal.privacy.cookie.p1': 'このウェブサイトは必要なCookieを使用します:',
    'legal.privacy.cookie.language': '• ユーザーの言語設定を記憶',
    'legal.privacy.cookie.experience': '• より良いユーザー体験を提供',
    'legal.privacy.cookie.analytics': '• ウェブサイト使用分析',
    'legal.privacy.cookie.security': '• 悪意のある攻撃を防止',
    'legal.privacy.cookie.disable': 'ブラウザ設定でCookieを無効にできますが、これによりウェブサイト機能に影響する場合があります。',
    'legal.privacy.usage': '情報使用',
    'legal.privacy.usage.p1': '収集された情報は以下の目的でのみ使用されます:',
    'legal.privacy.usage.optimize': '• ウェブサイト機能の最適化',
    'legal.privacy.usage.security': '• セキュリティ保護',
    'legal.privacy.usage.improve': '• ユーザー体験の改善',
    'legal.privacy.usage.diagnose': '• 技術的問題の診断',
    'legal.privacy.usage.no': '当社は情報を商業的マーケティングや第三者販売に使用しません。',
    'legal.privacy.protection': '情報保護',
    'legal.privacy.protection.p1': '当社はユーザー情報を保護するために以下の措置を講じます:',
    'legal.privacy.protection.ssl': '• SSL暗号化送信の使用',
    'legal.privacy.protection.update': '• 定期的なセキュリティ更新',
    'legal.privacy.protection.access': '• データアクセス権限の制限',
    'legal.privacy.protection.monitor': '• 異常なアクセス行動の監視',
    'legal.privacy.third': '第三者サービス',
    'legal.privacy.third.p1': 'このウェブサイトは以下の第三者サービスを使用する場合があります:',
    'legal.privacy.third.analytics': '• Google Analytics（ウェブサイト分析）',
    'legal.privacy.third.cloudflare': '• Cloudflare（セキュリティ保護）',
    'legal.privacy.third.vercel': '• Vercel（ウェブサイトホスティング）',
    'legal.privacy.third.policy': 'これらのサービスは独自のプライバシーポリシーを持っており、関連する条項をご確認ください。',
    'legal.privacy.rights': 'ユーザー権利',
    'legal.privacy.rights.p1': '当社は個人識別情報を収集しないため、個人データ権利は適用されません。当社はウェブサイト機能最適化のための必要な技術情報のみを収集します。',
    'legal.privacy.changes': 'ポリシー変更',
    'legal.privacy.changes.p1': '当社はこのプライバシーポリシーを随時更新する場合があります。重要な変更がある場合:',
    'legal.privacy.changes.notice': '• ウェブサイトでの通知',
    'legal.privacy.changes.email': '• メールでの通知（該当する場合）',
    'legal.privacy.changes.date': '• 発効日の更新',
    'legal.privacy.changes.continue': 'サービスの継続利用は更新されたポリシーへの同意を意味します。',
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh-CN');

  useEffect(() => {
    // Load language preference from localStorage
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'zh-CN' || savedLanguage === 'zh-TW' || savedLanguage === 'ko' || savedLanguage === 'ja')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string, params?: Record<string, string | number>): string => {
    let translation = translations[language][key as keyof typeof translations[typeof language]] || key;
    
    if (params) {
      Object.entries(params).forEach(([param, value]) => {
        translation = translation.replace(`{${param}}`, String(value));
      });
    }
    
    return translation;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 