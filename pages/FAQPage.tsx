
import React, { useEffect } from 'react';
import { updateSEO } from '../lib/seo';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const FAQPage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    updateSEO(t('faq.title'), t('faq.subtitle'));
  }, [t]);

  const faqs = t('faq.items', { returnObjects: true }) as { q: string, a: string }[];

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <HelpCircle className="text-blue-600" size={32} />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{t('faq.title')}</h1>
        <p className="text-xl text-gray-500">{t('faq.subtitle')}</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="group bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <span className="font-bold text-gray-900 pr-4">{faq.q}</span>
              <ChevronDown className="text-gray-400 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};
