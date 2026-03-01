
import React, { useState, useEffect } from 'react';
import { ResumeForm } from '../components/ResumeForm';
import { ResumePreview } from '../components/ResumePreview';
import { INITIAL_RESUME_DATA } from '../constants.tsx';
import { TemplateType, ResumeData } from '../types';
import { Download, Layout, Edit3, Eye } from 'lucide-react';
import { updateSEO } from '../lib/seo';
import { useTranslation } from 'react-i18next';

export const ResumeBuilder: React.FC = () => {
  const { t } = useTranslation();
  const [data, setData] = useState<ResumeData>(INITIAL_RESUME_DATA);
  const [template, setTemplate] = useState<TemplateType>(TemplateType.MINIMAL_ATS);
  const [view, setView] = useState<'edit' | 'preview'>('edit');

  useEffect(() => {
    updateSEO(t('builder.form_title'), t('builder.tip'));
  }, [t]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Tool Bar */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 sticky top-16 z-40 no-print">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setView('edit')}
              className={`flex items-center px-4 py-1.5 rounded-md text-sm font-semibold transition ${view === 'edit' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <Edit3 size={16} className="mr-2" /> {t('builder.edit')}
            </button>
            <button
              onClick={() => setView('preview')}
              className={`flex items-center px-4 py-1.5 rounded-md text-sm font-semibold transition ${view === 'preview' ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-700'}`}
            >
              <Eye size={16} className="mr-2" /> {t('builder.preview')}
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-gray-400 uppercase hidden sm:inline">{t('builder.template')}:</span>
            <select
              value={template}
              onChange={(e) => setTemplate(e.target.value as TemplateType)}
              className="bg-gray-100 border-none rounded-lg text-sm px-3 py-1.5 outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={TemplateType.MINIMAL_ATS}>Minimal Clean (ATS)</option>
              <option value={TemplateType.MODERN_PRO}>Modern Split</option>
              <option value={TemplateType.CLASSIC_FORMAL}>Classic Formal</option>
            </select>
          </div>

          <button
            onClick={handlePrint}
            className="bg-green-600 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-green-700 transition flex items-center"
          >
            <Download size={18} className="mr-2" /> {t('builder.download')}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 flex-1 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className={`${view === 'edit' ? 'block' : 'hidden lg:block'}`}>
          <h2 className="text-2xl font-bold mb-6 no-print">{t('builder.form_title')}</h2>
          <ResumeForm data={data} onChange={setData} />
        </div>

        <div className={`${view === 'preview' ? 'block' : 'hidden lg:block'} sticky top-40 h-fit`}>
          <h2 className="text-2xl font-bold mb-6 no-print">{t('builder.preview_title')}</h2>
          <div className="scale-100 origin-top overflow-auto lg:overflow-visible">
            <ResumePreview data={data} template={template} />
          </div>
          <p className="mt-4 text-center text-xs text-gray-400 italic no-print">{t('builder.tip')}</p>
        </div>
      </div>
    </div>
  );
};
