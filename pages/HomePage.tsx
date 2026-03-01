
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Shield, FileCheck, ArrowRight } from 'lucide-react';
import { Adsense } from '../components/Adsense';
import { updateSEO } from '../lib/seo';
import { useTranslation } from 'react-i18next';

export const HomePage: React.FC = () => {
  const { t } = useTranslation();

  useEffect(() => {
    updateSEO(t('home.badge'), t('home.description'));
  }, [t]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-16">
        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">{t('home.badge')}</span>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
          {t('home.title1')} <br className="hidden md:block" />
          <span className="text-blue-600">{t('home.title2')}</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          {t('home.description')}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/curriculo" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition flex items-center justify-center shadow-lg shadow-blue-200">
            {t('home.cta_start')} <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link to="/blog" className="w-full sm:w-auto bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition flex items-center justify-center">
            {t('home.cta_blog')}
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          { icon: <Zap className="text-blue-600" />, title: t('home.feature1_title'), desc: t('home.feature1_desc') },
          { icon: <Shield className="text-blue-600" />, title: t('home.feature2_title'), desc: t('home.feature2_desc') },
          { icon: <CheckCircle className="text-blue-600" />, title: t('home.feature3_title'), desc: t('home.feature3_desc') }
        ].map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition">
            <div className="bg-blue-50 w-12 h-12 flex items-center justify-center rounded-xl mb-6">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-500 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

      <Adsense slot="home-top" />

      <section className="bg-gray-900 rounded-3xl p-8 md:p-16 text-white overflow-hidden relative">
        <div className="relative z-10 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('home.section_title')}</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            {t('home.section_desc')}
          </p>
          <Link to="/blog/como-fazer-um-curriculo-perfeito" className="text-blue-400 font-bold hover:underline flex items-center">
            {t('home.section_link')} <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="hidden lg:block absolute -right-20 -bottom-20 opacity-20 rotate-12">
          <FileCheck size={400} />
        </div>
      </section>
    </div>
  );
};
