
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <FileText className="text-blue-600 w-6 h-6" />
              <span className="text-xl font-bold tracking-tight">
                {t('header.brand_name')} <span className="text-blue-600">{t('header.brand_number')}</span>
              </span>
            </Link>
            <p className="text-gray-500 text-sm">
              {t('footer.description')}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">{t('footer.platform')}</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/curriculo" className="hover:text-blue-600">{t('footer.builder')}</Link></li>
              <li><Link to="/templates" className="hover:text-blue-600">{t('footer.templates')}</Link></li>
              <li><Link to="/blog" className="hover:text-blue-600">{t('footer.blog')}</Link></li>
              <li><Link to="/faq" className="hover:text-blue-600">{t('footer.faq')}</Link></li>
              <li><Link to="/contato" className="hover:text-blue-600">{t('footer.contact')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/privacidade" className="hover:text-blue-600">{t('footer.privacy')}</Link></li>
              <li><Link to="/termos" className="hover:text-blue-600">{t('footer.terms')}</Link></li>
              <li><Link to="/cookies" className="hover:text-blue-600">{t('footer.cookies')}</Link></li>
              <li><a href="/sitemap.xml" className="hover:text-blue-600">{t('footer.sitemap')}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">{t('footer.social')}</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition"><Instagram size={20} /></a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-2 md:space-y-0">
            <p>{t('footer.rights', { year: currentYear })}</p>
            <span className="hidden md:inline">•</span>
            <p>{t('footer.tagline')}</p>
          </div>
          <div className="mt-4 md:mt-0">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
};
