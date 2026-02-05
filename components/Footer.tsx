
import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8 no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <FileText className="text-blue-600 w-6 h-6" />
              <span className="text-xl font-bold tracking-tight">Currículo <span className="text-blue-600">Pro</span></span>
            </Link>
            <p className="text-gray-500 text-sm">
              Crie currículos profissionais e modernos em minutos. Totalmente gratuito e otimizado para sistemas de recrutamento.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Plataforma</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/curriculo" className="hover:text-blue-600">Gerador de Currículo</Link></li>
              <li><Link to="/templates" className="hover:text-blue-600">Templates ATS</Link></li>
              <li><Link to="/blog" className="hover:text-blue-600">Blog Profissional</Link></li>
              <li><Link to="/faq" className="hover:text-blue-600">Perguntas Frequentes</Link></li>
              <li><Link to="/contato" className="hover:text-blue-600">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-500">
              <li><Link to="/privacidade" className="hover:text-blue-600">Política de Privacidade</Link></li>
              <li><Link to="/termos" className="hover:text-blue-600">Termos de Uso</Link></li>
              <li><Link to="/cookies" className="hover:text-blue-600">Política de Cookies</Link></li>
              <li><a href="/sitemap.xml" className="hover:text-blue-600">Sitemap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-gray-900 mb-4 text-sm">Redes Sociais</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition"><Twitter size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition"><Instagram size={20} /></a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2024 Currículo Pro. Todos os direitos reservados.</p>
          <p className="mt-2 md:mt-0">Desenvolvido para sua próxima conquista.</p>
        </div>
      </div>
    </footer>
  );
};
