'use client';

import { getModelById } from '@/data/models';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import ImageModal from '@/components/ImageModal';
import DynamicTitle from '@/components/DynamicTitle';
import LegalFooter from '@/components/LegalFooter';
import { notFound } from 'next/navigation';
import { useState, use } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ModelPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ModelPage({ params }: ModelPageProps) {
  const { id } = use(params);
  const model = getModelById(id);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { language, t } = useLanguage();

  if (!model) {
    notFound();
  }

  const modelName = model.name[language];
  const modelDescription = model.description[language];

  return (
    <div className="min-h-screen bg-white">
      <DynamicTitle title={modelName} subtitle={t('city.lasvegas')} />
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">


        {/* Images First */}
        {model.images.length > 0 && (
          <div className="p-6">
            <h1 className="text-7xl font-extrabold text-center mb-12 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent tracking-wide drop-shadow-lg" style={{ fontSize: '72px', lineHeight: '1.1', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>{modelName}</h1>
            <div className="flex items-center justify-center mb-4">
              <div className="flex-1 flex flex-col gap-2">
                <div className="border-t border-gray-200"></div>
                <div className="border-t border-gray-200"></div>
              </div>
              <h2 className="mx-6 text-gray-800 text-center whitespace-nowrap" style={{ fontSize: '54px', lineHeight: '1.16', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: '450' }}>{t('model.photos')}</h2>
              <div className="flex-1 flex flex-col gap-2">
                <div className="border-t border-gray-200"></div>
                <div className="border-t border-gray-200"></div>
              </div>
            </div>
            <div className="columns-1 sm:columns-2 gap-4 space-y-4">
              {model.images.map((image, index) => (
                <div key={index} className="break-inside-avoid mb-4 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                  <Image
                    src={image}
                    alt={`${model.id} - ${t('model.photo')} ${index + 1}`}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    onClick={() => setSelectedImage(image)}
                  />
                </div>
              ))}
            </div>

            <ImageModal
              isOpen={!!selectedImage}
              imageSrc={selectedImage || ''}
              imageAlt={`${model.id} - ${t('model.modelPhoto')}`}
              onClose={() => setSelectedImage(null)}
            />
          </div>
        )}

        {/* Description Last */}
        <div className="p-6">
          <div className="flex items-center justify-center mb-4 mt-4">
            <div className="flex-1 flex flex-col gap-2">
              <div className="border-t border-gray-200"></div>
              <div className="border-t border-gray-200"></div>
            </div>
            <h2 className="mx-6 text-gray-800 text-center whitespace-nowrap" style={{ fontSize: '54px', lineHeight: '1.16', fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', fontWeight: '450' }}>{t('model.introduction')}</h2>
            <div className="flex-1 flex flex-col gap-2">
              <div className="border-t border-gray-200"></div>
              <div className="border-t border-gray-200"></div>
            </div>
          </div>
          <p className="text-gray-800 font-normal whitespace-pre-line" style={{ fontSize: '32px', lineHeight: '1.6', fontWeight: '450' }}>{modelDescription}</p>
        </div>
        
        <LegalFooter />
      </div>
    </div>
  );
} 