
import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { BLOG_POSTS } from '../constants.tsx';
import { updateSEO } from '../lib/seo';
import { Adsense } from '../components/Adsense';
import { ArrowLeft, Share2, Calendar, User, Bookmark } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const BlogPost: React.FC = () => {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const language = i18n.language.split('-')[0];
  const post = BLOG_POSTS.find(p => p.slug === slug && p.lang === language);

  useEffect(() => {
    if (post) {
      updateSEO(post.metaTitle || post.title, post.metaDescription || post.description);
    }
    window.scrollTo(0, 0);
  }, [post]);

  if (!post) return <Navigate to="/blog" />;

  // Parser simples para Markdown (H2, H3, Bullets, Parágrafos e Links)
  const renderContent = (content: string) => {
    return content.split('\n').map((line, i) => {
      // Título H2
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-2xl md:text-3xl font-extrabold text-gray-900 mt-12 mb-6 tracking-tight">{line.replace('## ', '')}</h2>;
      }
      // Título H3
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-xl md:text-2xl font-bold text-gray-800 mt-8 mb-4">{line.replace('### ', '')}</h3>;
      }
      // Bullets
      if (line.startsWith('- ') || line.startsWith('* ')) {
        return (
          <li key={i} className="ml-6 mb-3 text-gray-700 list-disc pl-2">
            {renderLineWithLinks(line.substring(2))}
          </li>
        );
      }
      // Lista numerada simples
      if (/^\d+\./.test(line)) {
        return (
          <div key={i} className="ml-6 mb-4 text-gray-700 pl-2">
            <span className="font-bold mr-2">{line.split('.')[0]}.</span>
            {renderLineWithLinks(line.split('.').slice(1).join('.'))}
          </div>
        );
      }
      // Linha vazia
      if (line.trim() === '') return <div key={i} className="h-4" />;

      // Parágrafo normal
      return <p key={i} className="mb-6 text-gray-700 leading-relaxed text-lg">{renderLineWithLinks(line)}</p>;
    });
  };

  // Suporte a links internos no formato [texto](/url)
  const renderLineWithLinks = (text: string) => {
    const parts = text.split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, index) => {
      const match = part.match(/\[(.*?)\]\((.*?)\)/);
      if (match) {
        return (
          <Link
            key={index}
            to={match[2]}
            className="text-blue-600 font-semibold hover:underline decoration-blue-200 decoration-2 underline-offset-4"
          >
            {match[1]}
          </Link>
        );
      }
      // Bold simples
      const boldParts = part.split(/(\*\*.*?\*\*)/g);
      return boldParts.map((bp, bIndex) => {
        const bMatch = bp.match(/\*\*(.*?)\*\*/);
        if (bMatch) return <strong key={bIndex} className="font-bold text-gray-900">{bMatch[1]}</strong>;
        return bp;
      });
    });
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <Link to="/blog" className="inline-flex items-center text-sm font-bold text-blue-600 mb-8 hover:translate-x-[-4px] transition group">
          <ArrowLeft size={16} className="mr-2 group-hover:mr-3 transition-all" /> {t('blog.back_to_blog')}
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-blue-600 uppercase mb-6 tracking-widest">
            <span className="bg-blue-50 px-3 py-1.5 rounded-full flex items-center">
              <Bookmark size={12} className="mr-1.5" /> {post.category}
            </span>
            <span className="text-gray-400 flex items-center">
              <Calendar size={12} className="mr-1.5" /> {post.date}
            </span>
            <span className="text-gray-400 flex items-center">
              <User size={12} className="mr-1.5" /> {t('blog.author')}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tighter leading-[1.1] mb-8">
            {post.title}
          </h1>
          <div className="text-xl md:text-2xl text-gray-500 leading-relaxed italic border-l-8 border-blue-600 pl-8 py-2 mb-10 bg-gray-50 rounded-r-2xl">
            {post.description}
          </div>
        </header>

        <div className="mb-16 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-gray-200">
          <img src={`https://picsum.photos/seed/${post.slug}/1200/600`} alt={post.title} className="w-full h-auto object-cover aspect-video" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          <div className="lg:col-span-3">
            <article className="article-content">
              {renderContent(post.content)}
            </article>

            <Adsense slot="post-middle" />

            <div className="mt-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[2.5rem] p-10 md:p-16 text-white text-center shadow-xl shadow-blue-200 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                <Share2 size={120} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black mb-6 relative z-10">{t('blog.cta_title')}</h3>
              <p className="mb-10 text-blue-50 text-xl max-w-xl mx-auto relative z-10 opacity-90">{t('blog.cta_desc')}</p>
              <Link to="/curriculo" className="inline-flex items-center bg-white text-blue-700 px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-50 transition shadow-lg relative z-10">
                {t('blog.cta_button')}
              </Link>
            </div>
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28 space-y-10">
              <div className="bg-white p-8 rounded-[2rem] border-2 border-gray-50 shadow-sm">
                <h4 className="font-black text-gray-900 mb-6 flex items-center text-lg uppercase tracking-tight">
                  <Share2 size={20} className="mr-3 text-blue-600" /> {t('blog.share')}
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  <button className="h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl hover:bg-blue-600 hover:text-white transition font-bold">FB</button>
                  <button className="h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl hover:bg-blue-600 hover:text-white transition font-bold">TW</button>
                  <button className="h-12 bg-blue-50 text-blue-600 flex items-center justify-center rounded-xl hover:bg-blue-600 hover:text-white transition font-bold">WA</button>
                </div>
              </div>

              <div className="bg-gray-900 p-8 rounded-[2.5rem] text-white">
                <h4 className="font-black mb-6 text-xl tracking-tight">{t('blog.trending')}</h4>
                <ul className="space-y-6">
                  {BLOG_POSTS.filter(p => p.slug !== slug && p.lang === language).slice(0, 3).map(p => (
                    <li key={p.slug} className="group">
                      <Link to={`/blog/${p.slug}`} className="block">
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block">{p.category}</span>
                        <span className="text-base font-bold text-gray-100 group-hover:text-blue-300 transition line-clamp-2 leading-snug">
                          {p.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <Adsense slot="post-sidebar" format="rectangle" />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
