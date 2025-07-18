'use client';

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import DynamicTitle from '@/components/DynamicTitle';

interface LegalPageProps {
  type: 'disclaimer' | 'terms' | 'privacy';
}

export default function LegalPage({ type }: LegalPageProps) {
  const { t } = useLanguage();

  const getLegalContent = () => {
    switch (type) {
      case 'disclaimer':
        return {
          title: t('legal.disclaimer'),
          content: getDisclaimerContent(),
        };
      case 'terms':
        return {
          title: t('legal.terms'),
          content: getTermsContent(),
        };
      case 'privacy':
        return {
          title: t('legal.privacy'),
          content: getPrivacyContent(),
        };
      default:
        return { title: '', content: [] };
    }
  };

  const getDisclaimerContent = () => [
    {
      title: t('legal.disclaimer.important'),
      content: [
        t('legal.disclaimer.important.p1'),
        t('legal.disclaimer.important.p2')
      ]
    },
    {
      title: t('legal.disclaimer.age'),
      content: [
        t('legal.disclaimer.age.p1'),
        t('legal.disclaimer.age.p2')
      ]
    },
    {
      title: t('legal.disclaimer.content'),
      content: [
        t('legal.disclaimer.content.p1'),
        t('legal.disclaimer.content.p2')
      ]
    },
    {
      title: t('legal.disclaimer.legal'),
      content: [
        t('legal.disclaimer.legal.p1'),
        t('legal.disclaimer.legal.p2')
      ]
    },
    {
      title: t('legal.disclaimer.privacy'),
      content: [
        t('legal.disclaimer.privacy.p1'),
        t('legal.disclaimer.privacy.p2')
      ]
    },
    {
      title: t('legal.contact'),
      content: [
        t('legal.contact.questions'),
        t('legal.telegram')
      ]
    },
    {
      title: t('legal.disclaimer.update'),
      content: [
        t('legal.disclaimer.update.p1'),
        t('legal.lastUpdated')
      ]
    }
  ];

  const getTermsContent = () => [
    {
      title: t('legal.terms.service'),
      content: [
        t('legal.terms.service.p1'),
        t('legal.terms.service.p2')
      ]
    },
    {
      title: t('legal.terms.user'),
      content: [
        t('legal.terms.user.p1'),
        t('legal.terms.user.age'),
        t('legal.terms.user.law'),
        t('legal.terms.user.illegal'),
        t('legal.terms.user.content')
      ]
    },
    {
      title: t('legal.terms.usage'),
      content: [
        t('legal.terms.usage.p1'),
        t('legal.terms.usage.commercial'),
        t('legal.terms.usage.copy'),
        t('legal.terms.usage.attack'),
        t('legal.terms.usage.virus')
      ]
    },
    {
      title: t('legal.terms.privacy'),
      content: [
        t('legal.terms.privacy.p1'),
        t('legal.terms.privacy.collect'),
        t('legal.terms.privacy.sell'),
        t('legal.terms.privacy.security'),
        t('legal.terms.privacy.update')
      ]
    },
    {
      title: t('legal.terms.disclaimer'),
      content: [
        t('legal.terms.disclaimer.p1'),
        t('legal.terms.disclaimer.user'),
        t('legal.terms.disclaimer.third'),
        t('legal.terms.disclaimer.force'),
        t('legal.terms.disclaimer.leak')
      ]
    },
    {
      title: t('legal.terms.change'),
      content: [
        t('legal.terms.change.p1'),
        t('legal.terms.change.modify'),
        t('legal.terms.change.update'),
        t('legal.terms.change.restrict'),
        t('legal.terms.change.delete')
      ]
    },
    {
      title: t('legal.terms.jurisdiction'),
      content: [
        t('legal.terms.jurisdiction.p1'),
        t('legal.terms.jurisdiction.p2')
      ]
    },
    {
      title: '8. ' + t('legal.contact'),
      content: [
        t('legal.contact.questions'),
        t('legal.telegram')
      ]
    },
    {
      title: t('legal.terms.effective'),
      content: [
        t('legal.terms.effective.p1'),
        t('legal.lastUpdated')
      ]
    }
  ];

  const getPrivacyContent = () => [
    {
      title: t('legal.privacy.collection'),
      content: [
        t('legal.privacy.collection.p1'),
        t('legal.privacy.collection.ip'),
        t('legal.privacy.collection.browser'),
        t('legal.privacy.collection.time'),
        t('legal.privacy.collection.device'),
        t('legal.privacy.collection.no')
      ]
    },
    {
      title: t('legal.privacy.cookie'),
      content: [
        t('legal.privacy.cookie.p1'),
        t('legal.privacy.cookie.language'),
        t('legal.privacy.cookie.experience'),
        t('legal.privacy.cookie.analytics'),
        t('legal.privacy.cookie.security'),
        t('legal.privacy.cookie.disable')
      ]
    },
    {
      title: t('legal.privacy.usage'),
      content: [
        t('legal.privacy.usage.p1'),
        t('legal.privacy.usage.optimize'),
        t('legal.privacy.usage.security'),
        t('legal.privacy.usage.improve'),
        t('legal.privacy.usage.diagnose'),
        t('legal.privacy.usage.no')
      ]
    },
    {
      title: t('legal.privacy.protection'),
      content: [
        t('legal.privacy.protection.p1'),
        t('legal.privacy.protection.ssl'),
        t('legal.privacy.protection.update'),
        t('legal.privacy.protection.access'),
        t('legal.privacy.protection.monitor')
      ]
    },
    {
      title: t('legal.privacy.third'),
      content: [
        t('legal.privacy.third.p1'),
        t('legal.privacy.third.analytics'),
        t('legal.privacy.third.cloudflare'),
        t('legal.privacy.third.vercel'),
        t('legal.privacy.third.policy')
      ]
    },
    {
      title: t('legal.privacy.rights'),
      content: [
        t('legal.privacy.rights.p1')
      ]
    },
    {
      title: t('legal.privacy.changes'),
      content: [
        t('legal.privacy.changes.p1'),
        t('legal.privacy.changes.notice'),
        t('legal.privacy.changes.email'),
        t('legal.privacy.changes.date'),
        t('legal.privacy.changes.continue')
      ]
    },
    {
      title: t('legal.contact'),
      content: [
        t('legal.contact.questions'),
        t('legal.telegram'),
        t('legal.lastUpdated')
      ]
    }
  ];

  const { title, content } = getLegalContent();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <DynamicTitle title={title} />
      <Navigation />
      
      <div className="flex flex-col items-center px-4 py-8 sm:px-8">
        <main className="w-full max-w-4xl flex flex-col gap-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8" style={{ fontSize: '54px', lineHeight: '1.16', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: '700' }}>
            {title}
          </h1>
          
          <div className="space-y-8">
            {content.map((section, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h2 className="text-2xl sm:text-3xl font-semibold mb-4" style={{ fontSize: '40px', lineHeight: '1.2', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: '450' }}>
                  {section.title}
                </h2>
                <div className="space-y-3">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-lg sm:text-xl" style={{ fontSize: '32px', lineHeight: '1.3', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: '450' }}>
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      
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
    </div>
  );
} 