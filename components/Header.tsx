
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, BookOpen, User } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-blue-600 p-1.5 rounded-lg">
            <FileText className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight text-gray-900">
            {t('header.brand_name')} <span className="text-blue-600">{t('header.brand_number')}</span>
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <Link to="/" className="text-gray-500 hover:text-blue-600 transition">{t('header.home')}</Link>
          <Link to="/curriculo" className="text-gray-500 hover:text-blue-600 transition">{t('header.builder')}</Link>
          <Link to="/blog" className="text-gray-500 hover:text-blue-600 transition">{t('header.blog')}</Link>
          <Link to="/sobre" className="text-gray-500 hover:text-blue-600 transition">{t('header.about')}</Link>
        </nav>

        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <Link
            to="/curriculo"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
          >
            {t('header.generate')}
          </Link>
        </div>
      </div>
    </header>
  );
};
