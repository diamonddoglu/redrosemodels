'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: 'zh-CN' | 'zh-TW' | 'ko' | 'ja') => {
    setLanguage(newLanguage);
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => handleLanguageChange('zh-CN')}
        className={`px-4 py-3 rounded-l-full text-base font-medium transition-all duration-200 ${
          language === 'zh-CN'
            ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        title="简体中文"
      >
        简体
      </button>
      <button
        onClick={() => handleLanguageChange('zh-TW')}
        className={`px-4 py-3 text-base font-medium transition-all duration-200 ${
          language === 'zh-TW'
            ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        title="繁體中文"
      >
        繁體
      </button>

      <button
        onClick={() => handleLanguageChange('ko')}
        className={`px-4 py-3 text-base font-medium transition-all duration-200 ${
          language === 'ko'
            ? 'bg-gradient-to-r from-red-500 to-blue-500 text-white shadow-md'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        title="한국어"
      >
        한국어
      </button>
      <button
        onClick={() => handleLanguageChange('ja')}
        className={`px-4 py-3 rounded-r-full text-base font-medium transition-all duration-200 ${
          language === 'ja'
            ? 'bg-gradient-to-r from-red-600 to-white text-white shadow-md'
            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
        }`}
        title="日本語"
      >
        日本語
      </button>
    </div>
  );
} 