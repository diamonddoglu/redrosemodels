'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { useEffect, useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const { t, language } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update HTML lang attribute for SEO
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const navItems = [
    { href: '/', label: t('nav.home') },
    { href: '/newyork', label: t('nav.newyork') },
    { href: '/losangeles', label: t('nav.losangeles') },
    { href: '/sanfrancisco', label: t('nav.sanfrancisco') },
    { href: '/boston', label: t('nav.boston') },
    { href: '/seattle', label: t('nav.seattle') },
    { href: '/lasvegas', label: t('nav.lasvegas') },
  ];

  return (
    <nav className="backdrop-blur-md bg-white/70 shadow-xl rounded-2xl border border-gray-200 mt-4 mx-auto sticky top-4 z-50 transition-all rose-shadow" style={{ left: 0, right: 0 }} aria-label="主导航">
      <div className="flex justify-between items-center h-16 px-4 sm:px-6 lg:px-10">
        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-red-100 hover:text-red-600 transition-colors"
          aria-label={isMobileMenuOpen ? "关闭菜单" : "打开菜单"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop navigation - centered */}
        <div className="hidden lg:flex items-center justify-center flex-1" role="navigation" aria-label="桌面导航">
          <div className="flex items-center space-x-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 rounded-full text-base font-medium transition-all duration-200
                    ${isActive ? 'rose-gradient text-white shadow-md' : 'text-gray-700 hover:bg-red-100 hover:text-red-600'}
                  `}
                  style={{ minWidth: '80px', textAlign: 'center' }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Language switcher - right aligned */}
        <div className="flex items-center">
          <LanguageSwitcher />
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-xl border border-gray-200 rounded-b-2xl mt-2" role="navigation" aria-label="移动端导航">
            <div className="flex flex-col space-y-2 p-4">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-full text-base font-medium transition-all duration-200
                      ${isActive ? 'rose-gradient text-white shadow-md' : 'text-gray-700 hover:bg-red-100 hover:text-red-600'}
                    `}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-2 border-t border-gray-200">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 