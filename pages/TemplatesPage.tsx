
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { updateSEO } from '../lib/seo';
import { Layout, Check, ArrowRight } from 'lucide-react';
import { TemplateType } from '../types';

export const TemplatesPage: React.FC = () => {
  useEffect(() => {
    updateSEO("Templates de Currículo ATS 2026", "Conheça nossos modelos de currículo otimizados para sistemas de recrutamento e escolha o ideal para sua carreira.");
  }, []);

  const templates = [
    {
      id: TemplateType.MINIMAL_ATS,
      name: "Minimal Clean (ATS)",
      description: "O favorito dos recrutadores. Design focado em legibilidade total para sistemas automáticos.",
      features: ["Foco em conteúdo", "100% Otimizado para ATS", "Ideal para áreas corporativas"]
    },
    {
      id: TemplateType.MODERN_PRO,
      name: "Modern Split",
      description: "Layout de duas colunas que destaca habilidades e informações de contato de forma criativa.",
      features: ["Design Moderno", "Destaque visual", "Ótimo para Tech e Marketing"]
    },
    {
      id: TemplateType.CLASSIC_FORMAL,
      name: "Classic Formal",
      description: "Estilo tradicional e elegante, perfeito para cargos executivos e áreas acadêmicas.",
      features: ["Elegância sóbria", "Layout atemporal", "Ideal para cargos seniores"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">Escolha seu Template Profissional</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Todos os nossos modelos foram validados por especialistas em RH e são compatíveis com sistemas de triagem digital.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {templates.map((t) => (
          <div key={t.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all flex flex-col overflow-hidden group">
            <div className="h-64 bg-gray-50 flex items-center justify-center border-b border-gray-50 group-hover:bg-blue-50 transition-colors">
              <Layout size={64} className="text-gray-300 group-hover:text-blue-300 transition-colors" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.name}</h3>
              <p className="text-gray-500 text-sm mb-6 flex-1">{t.description}</p>
              
              <ul className="space-y-3 mb-8">
                {t.features.map((f, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <Check size={16} className="text-green-500 mr-2" /> {f}
                  </li>
                ))}
              </ul>

              <Link 
                to="/curriculo" 
                className="w-full bg-blue-600 text-white text-center py-3 rounded-xl font-bold hover:bg-blue-700 transition flex items-center justify-center"
              >
                Usar este modelo <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
