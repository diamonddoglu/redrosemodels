'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface ModelCardProps {
  id: string;
  name: {
    'zh-CN': string;
    'zh-TW': string;
    'en'?: string;
    'ko'?: string;
    'ja'?: string;
  };
  mainImage: string;
  city: string;
  priority?: boolean;
}

export default function ModelCard({ id, name, mainImage, city, priority = false }: ModelCardProps) {
  const { language, t } = useLanguage();
  
  const modelName = name[language as keyof typeof name] || name['zh-CN'];
  const cityName = t(`city.${city}`);
  const modelLabel = t('model.label');
  const cityModelSubtitle = t(`model.card.${city}.subtitle`);

  return (
    <Link href={`/${city}/${id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-[3/4] w-full group">
          <Image
            src={mainImage}
            alt={`${id} - ${cityName}${modelLabel}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            loading={priority ? 'eager' : 'lazy'}
            onError={(e) => {
              // Fallback to placeholder if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              const parent = target.parentElement;
              if (parent) {
                parent.innerHTML = '';
                const placeholder = document.createElement('div');
                placeholder.className = 'absolute inset-0 bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center';
                placeholder.innerHTML = `
                  <div class="text-center">
                    <div class="text-4xl mb-2">👩</div>
                    <div class="text-sm text-gray-600 font-medium">${id}</div>
                    <div class="text-xs text-gray-500">${modelLabel}照片</div>
                  </div>
                `;
                parent.appendChild(placeholder);
              }
            }}
          />
          {/* Slide Up Hover overlay with model name */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
          >
            <h3 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">{modelName}</h3>
            <p className="text-lg text-white drop-shadow">{cityModelSubtitle}</p>
          </div>
        </div>
        {/* Remove the name at the bottom of the card */}
        {/* <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">{name}</h3>
        </div> */}
      </div>
    </Link>
  );
} 