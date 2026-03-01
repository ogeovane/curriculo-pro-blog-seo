
import React, { useState, useEffect } from 'react';
import { updateSEO } from '../lib/seo';
import { Mail, Send, CheckCircle, MessageSquare } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const ContactPage: React.FC = () => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    updateSEO(t('contact.title'), t('contact.subtitle'));
    window.scrollTo(0, 0);
  }, [t]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulando envio
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            <MessageSquare className="text-blue-600" size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            {t('contact.title').split('?')[0]} <span className="text-blue-600">{t('contact.title').includes('?') ? 'ajudar?' : ''}</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 leading-relaxed">
            {t('contact.subtitle')}
          </p>

          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-3 rounded-xl">
                <Mail className="text-gray-600" size={24} />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">{t('contact.support_email')}</p>
                <p className="text-lg font-bold text-gray-900">suporte@curriculopro.com.br</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-xl shadow-blue-50/50">
          {submitted ? (
            <div className="text-center py-12">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="text-green-600" size={40} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contact.sent_title')}</h2>
              <p className="text-gray-500 mb-8">{t('contact.sent_desc')}</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-blue-600 font-bold hover:underline"
              >
                {t('contact.send_another')}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">{t('contact.form_name')}</label>
                <input
                  required
                  type="text"
                  placeholder="Ex: João Silva"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">{t('contact.form_email')}</label>
                <input
                  required
                  type="email"
                  placeholder="seu@email.com"
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">{t('contact.form_message')}</label>
                <textarea
                  required
                  rows={5}
                  placeholder={t('contact.form_message_placeholder')}
                  className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:bg-white outline-none transition-all"
                />
              </div>
              <button
                disabled={loading}
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all flex items-center justify-center shadow-lg shadow-blue-100 disabled:opacity-50"
              >
                {loading ? t('contact.sending') : (
                  <>{t('contact.send_button')} <Send size={20} className="ml-3" /></>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
