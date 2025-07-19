'use client';

import Link from "next/link";
import Navigation from "@/components/Navigation";
import Image from "next/image";
import DynamicTitle from "@/components/DynamicTitle";
import LegalFooter from "@/components/LegalFooter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <a href="#main-content" className="skip-link">跳到主要内容</a>
      <DynamicTitle title={t('home.title')} />
      <Navigation />
      
      {/* Hero Section with Large Image */}
      <section className="relative w-full overflow-hidden p-1 sm:p-1 lg:p-1" aria-label="Hero section">
        <div className="max-w-5xl mx-auto">
          <Image
            src="/redrosemodels-hero.jpg"
            alt="红玫瑰模特私教服务展示图片"
            width={1920}
            height={1080}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      <div className="flex flex-col items-center px-4 py-8 sm:px-8">
      <main id="main-content" className="w-full max-w-6xl flex flex-col gap-8" role="main">
        <h1 className="text-center mb-4 text-hero-title">{t('home.title')}</h1>
        <p className="text-center text-black font-semibold -mb-2 text-hero-subtitle">{t('home.subtitle')}</p>
        <p className="text-center text-black font-semibold mb-6 text-hero-tagline">{t('home.tagline')}</p>
        <p className="mb-4 text-center text-hero-description">{t('home.description')}</p>
        <p className="mb-4 text-center text-hero-description">{t('home.description2')}</p>
        <p className="mb-4 text-center text-hero-description" style={{ color: '#dc2626' }}>{t('home.contact')} <a href="https://t.me/redrosemodels" className="underline" target="_blank" rel="noopener noreferrer" style={{ color: '#dc2626' }} aria-label="联系红玫瑰模特私教服务">https://t.me/redrosemodels</a></p>
        <div className="flex items-center justify-center mb-4" role="separator" aria-label="浏览城市服务">
          <div className="flex-1 flex flex-col gap-2">
            <div className="border-t border-gray-200"></div>
            <div className="border-t border-gray-200"></div>
          </div>
          <h2 className="mx-6 text-gray-800 text-center whitespace-nowrap text-section-title">{t('home.browse')}</h2>
          <div className="flex-1 flex flex-col gap-2">
            <div className="border-t border-gray-200"></div>
            <div className="border-t border-gray-200"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 mb-12" role="grid" aria-label="城市服务选择">
          <Link href="/newyork" className="group relative overflow-hidden bg-white border-2 border-red-400 rounded-2xl p-8 hover:rose-shadow-hover transition-all duration-500 transform hover:-translate-y-2" role="gridcell" aria-label={`浏览${t('city.newyork')}模特服务`}>
            <div className="absolute inset-0 rose-gradient-light opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">🗽</div>
              <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300">{t('city.newyork')}</h3>
              <p className="text-sm text-gray-700 mt-2 transition-colors duration-300">{t('city.newyork.subtitle')}</p>
            </div>
          </Link>
          
          <Link href="/losangeles" className="group relative overflow-hidden bg-white border-2 border-red-400 rounded-2xl p-8 hover:rose-shadow-hover transition-all duration-500 transform hover:-translate-y-2" role="gridcell" aria-label={`浏览${t('city.losangeles')}模特服务`}>
            <div className="absolute inset-0 rose-gradient-light opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">🌴</div>
              <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300">{t('city.losangeles')}</h3>
              <p className="text-sm text-gray-700 mt-2 transition-colors duration-300">{t('city.losangeles.subtitle')}</p>
            </div>
          </Link>
          
          <Link href="/sanfrancisco" className="group relative overflow-hidden bg-white border-2 border-red-400 rounded-2xl p-8 hover:rose-shadow-hover transition-all duration-500 transform hover:-translate-y-2" role="gridcell" aria-label={`浏览${t('city.sanfrancisco')}模特服务`}>
            <div className="absolute inset-0 rose-gradient-light opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">🌉</div>
              <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300">{t('city.sanfrancisco')}</h3>
              <p className="text-sm text-gray-700 mt-2 transition-colors duration-300">{t('city.sanfrancisco.subtitle')}</p>
            </div>
          </Link>
          
          <Link href="/boston" className="group relative overflow-hidden bg-white border-2 border-red-400 rounded-2xl p-8 hover:rose-shadow-hover transition-all duration-500 transform hover:-translate-y-2" role="gridcell" aria-label={`浏览${t('city.boston')}模特服务`}>
            <div className="absolute inset-0 rose-gradient-light opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">🏛️</div>
              <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300">{t('city.boston')}</h3>
              <p className="text-sm text-gray-700 mt-2 transition-colors duration-300">{t('city.boston.subtitle')}</p>
            </div>
          </Link>
          
          <Link href="/seattle" className="group relative overflow-hidden bg-white border-2 border-red-400 rounded-2xl p-8 hover:rose-shadow-hover transition-all duration-500 transform hover:-translate-y-2" role="gridcell" aria-label={`浏览${t('city.seattle')}模特服务`}>
            <div className="absolute inset-0 rose-gradient-light opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">☔</div>
              <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300">{t('city.seattle')}</h3>
              <p className="text-sm text-gray-700 mt-2 transition-colors duration-300">{t('city.seattle.subtitle')}</p>
            </div>
          </Link>
          
          <Link href="/lasvegas" className="group relative overflow-hidden bg-white border-2 border-red-400 rounded-2xl p-8 hover:rose-shadow-hover transition-all duration-500 transform hover:-translate-y-2" role="gridcell" aria-label={`浏览${t('city.lasvegas')}模特服务`}>
            <div className="absolute inset-0 rose-gradient-light opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">🎰</div>
              <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300">{t('city.lasvegas')}</h3>
              <p className="text-sm text-gray-700 mt-2 transition-colors duration-300">{t('city.lasvegas.subtitle')}</p>
            </div>
          </Link>
        </div>
        <section className="text-base sm:text-lg" role="region" aria-label="服务信息">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4 text-center text-hero-subtitle">{t('services.title')}</h2>
          <div className="pl-6 space-y-2 text-center text-red-700 mb-8 text-hero-description font-semibold">
            <div>{t('services.hourly')}</div>
            <div>{t('services.overnight')}</div>
            <div>{t('services.airdrop')}</div>
          </div>
          <p className="mt-8 text-center text-hero-description">{t('services.booking')}</p>
          <p className="mt-4 text-center mb-12 text-hero-description">{t('services.browse')}</p>
          <div className="pl-6 space-y-4 text-hero-description">
            <div>{t('faq.location')}</div>
            <div>{t('faq.location.answer')}</div>
            <div>{t('faq.services')}</div>
            <div>{t('faq.services.answer')}</div>
            <div>{t('faq.payment')}</div>
            <div>{t('faq.payment.answer')}</div>
            <div>{t('faq.authentic')}</div>
            <div>{t('faq.authentic.answer')}</div>
            <div>{t('faq.refund')}</div>
            <div>{t('faq.refund.answer')}</div>
            <div>{t('faq.refund.option1')}</div>
            <div>{t('faq.refund.option2')}</div>
            <div>{t('faq.airdrop')}</div>
            <div>{t('faq.airdrop.answer')}</div>
            <div>{t('faq.overnight')}</div>
            <div>{t('faq.overnight.answer')}</div>
            <div className="text-recruitment">{t('faq.recruitment')}</div>
          </div>
        </section>
      </main>
      </div>
      
      <LegalFooter />
    </div>
  );
}
