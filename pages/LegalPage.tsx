
import React, { useEffect } from 'react';
import { updateSEO } from '../lib/seo';
import { useTranslation } from 'react-i18next';

interface LegalPageProps {
  title: string;
}

export const LegalPage: React.FC<LegalPageProps> = ({ title }) => {
  const { t } = useTranslation();

  useEffect(() => {
    updateSEO(title, `Página de ${title} do Currículo 1.`);
  }, [title]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10">{title}</h1>
      <div className="prose prose-blue max-w-none text-gray-600 leading-loose">
        <p className="mb-6">
          {t('legal.description')}
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{t('legal.section1_title')}</h2>
        <p>{t('legal.section1_desc')}</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{t('legal.section2_title')}</h2>
        <p>{t('legal.section2_desc')}</p>
        <p className="mt-4">{t('legal.section2_desc2')}</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{t('legal.section3_title')}</h2>
        <p>{t('legal.section3_desc')}</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">{t('legal.section4_title')}</h2>
        <p>{t('legal.section4_desc')}</p>

        <div className="mt-12 pt-8 border-t border-gray-100 text-sm italic">
          {t('legal.last_update')}
        </div>
      </div>
    </div>
  );
};
