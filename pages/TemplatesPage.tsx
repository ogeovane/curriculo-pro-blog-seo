
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updateSEO } from '../lib/seo';
import { Layout, Check, ArrowRight } from 'lucide-react';
import { TemplateType } from '../types';
import { useTranslation } from 'react-i18next';

export const TemplatesPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    updateSEO(t('templates.title'), t('templates.subtitle'));
  }, [t]);

  const templates = [
    {
      id: TemplateType.MINIMAL_ATS,
      name: t('templates.items.minimal.name'),
      description: t('templates.items.minimal.desc'),
      features: t('templates.items.minimal.features', { returnObjects: true }) as string[]
    },
    {
      id: TemplateType.MODERN_PRO,
      name: t('templates.items.modern.name'),
      description: t('templates.items.modern.desc'),
      features: t('templates.items.modern.features', { returnObjects: true }) as string[]
    },
    {
      id: TemplateType.CLASSIC_FORMAL,
      name: t('templates.items.classic.name'),
      description: t('templates.items.classic.desc'),
      features: t('templates.items.classic.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">{t('templates.title')}</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          {t('templates.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {templates.map((t_item) => (
          <div key={t_item.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col overflow-hidden group">
            <div className="h-64 bg-gray-50 flex items-center justify-center border-b border-gray-50 group-hover:bg-blue-50 transition-colors">
              <Layout size={64} className="text-gray-300 group-hover:text-blue-300 transition-colors" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t_item.name}</h3>
              <p className="text-gray-500 text-sm mb-6 flex-1">{t_item.description}</p>

              <ul className="space-y-3 mb-8">
                {t_item.features.map((f, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <Check size={16} className="text-green-500 mr-2" /> {f}
                  </li>
                ))}
              </ul>

              <Link
                to="/curriculo"
                className="w-full bg-blue-600 text-white text-center py-3 rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center"
              >
                {t('templates.use_template')} <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
