'use client';

import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface DynamicTitleProps {
  title: string;
  subtitle?: string;
}

export default function DynamicTitle({ title, subtitle }: DynamicTitleProps) {
  const { language } = useLanguage();

  useEffect(() => {
    const fullTitle = subtitle ? `${title} - ${subtitle}` : title;
    document.title = `${fullTitle} | xiaohongmodels.com`;
  }, [title, subtitle, language]);

  return null;
} 