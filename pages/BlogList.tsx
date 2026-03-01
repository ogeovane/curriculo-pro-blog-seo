
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants.tsx';
import { updateSEO } from '../lib/seo';
import { Adsense } from '../components/Adsense';
import { Calendar, Tag, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const BlogList: React.FC = () => {
  const { t, i18n } = useTranslation();
  const language = i18n.language.split('-')[0];
  const filteredPosts = BLOG_POSTS.filter(post => post.lang === language);

  useEffect(() => {
    updateSEO(t('blog.title'), t('blog.header_subtitle'));
  }, [t]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="max-w-3xl mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">{t('blog.header_title')}</h1>
        <p className="text-xl text-gray-500 leading-relaxed">
          {t('blog.header_subtitle')}
        </p>
      </div>

      <Adsense slot="blog-list-top" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article key={post.slug} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group">
            <Link to={`/blog/${post.slug}`}>
              <div className="h-48 bg-blue-50 overflow-hidden">
                <img src={`https://picsum.photos/seed/${post.slug}/800/400`} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center space-x-4 text-xs font-bold text-blue-600 uppercase mb-4 tracking-wider">
                  <span className="bg-blue-50 px-2 py-1 rounded">{post.category}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition leading-tight">
                  {post.title}
                </h2>
                <p className="text-gray-500 text-sm mb-6 line-clamp-2 leading-relaxed">
                  {post.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-50 pt-4">
                  <span className="flex items-center"><Calendar size={12} className="mr-1" /> {post.date}</span>
                  <span className="text-blue-600 font-bold flex items-center">{t('blog.read_article')} <ChevronRight size={14} /></span>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      <Adsense slot="blog-list-bottom" />
    </div>
  );
};
