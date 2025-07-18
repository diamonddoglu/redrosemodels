'use client';

import { getModelsByCity } from '@/data/models';
import ModelCard from '@/components/ModelCard';
import Navigation from '@/components/Navigation';
import DynamicTitle from '@/components/DynamicTitle';
import LegalFooter from '@/components/LegalFooter';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';

export default function NewYorkPage() {
  const allModels = getModelsByCity('newyork');
  const { t } = useLanguage();
  const [currentPage, setCurrentPage] = useState(1);
  const modelsPerPage = 12;
  
  const totalPages = Math.ceil(allModels.length / modelsPerPage);
  const startIndex = (currentPage - 1) * modelsPerPage;
  const endIndex = startIndex + modelsPerPage;
  const models = allModels.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };


  return (
      <div className="min-h-screen bg-white">
        <DynamicTitle title={t('city.newyork')} subtitle={t('city.models')} />
        <Navigation />
        <div className="max-w-7xl mx-auto px-8 py-8 sm:px-12 lg:px-8">
          {/* Remove the city name heading, keep only the session title with double lines */}
          <div className="flex items-center justify-center mb-4">
            <div className="flex-1 flex flex-col gap-2">
              <div className="border-t border-gray-200"></div>
              <div className="border-t border-gray-200"></div>
            </div>
            <h2 className="mx-6 text-gray-800 text-center whitespace-nowrap" style={{ fontSize: '54px', lineHeight: '1.16', fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", fontWeight: '450' }}>
              {t('page.title.newyork')}
            </h2>
            <div className="flex-1 flex flex-col gap-2">
              <div className="border-t border-gray-200"></div>
              <div className="border-t border-gray-200"></div>
            </div>
          </div>
          
          {models.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 mb-8">
                {models.map((model, index) => (
                  <ModelCard
                    key={model.id}
                    id={model.id}
                    name={model.name}
                    mainImage={model.mainImage}
                    city={model.city}
                    priority={currentPage === 1 && index < 8}
                  />
                ))}
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center space-x-2 mb-20">
                                  <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t('pagination.previous')}
                </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-4 py-2 text-sm font-medium rounded-md ${
                        currentPage === page
                          ? 'bg-pink-600 text-white'
                          : 'text-gray-500 bg-white border border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                                  <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {t('pagination.next')}
                </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">{t('models.noData')}</p>
            </div>
          )}
          
          <LegalFooter />
        </div>
      </div>
  );
} 