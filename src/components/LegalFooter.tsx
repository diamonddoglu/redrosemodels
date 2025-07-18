'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function LegalFooter() {
  const { t } = useLanguage();

  return (
    <>
      {/* Age Disclaimer */}
      <div className="text-center py-4 px-4">
        <p className="text-gray-500 text-xs">
          {t('legal.ageDisclaimer')}
        </p>
      </div>
      
      {/* Legal Links */}
      <div className="text-center py-4 border-t border-gray-200">
        <div className="flex justify-center space-x-6 text-xs text-gray-500">
          <a href="/disclaimer" className="hover:text-gray-700">{t('legal.disclaimer')}</a>
          <a href="/terms" className="hover:text-gray-700">{t('legal.terms')}</a>
          <a href="/privacy" className="hover:text-gray-700">{t('legal.privacy')}</a>
        </div>
        <p className="text-gray-400 text-xs mt-2">{t('legal.copyright')}</p>
      </div>
    </>
  );
} 