
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Zap, Shield, FileCheck, ArrowRight } from 'lucide-react';
import { Adsense } from '../components/Adsense';
import { updateSEO } from '../lib/seo';

export const HomePage: React.FC = () => {
  useEffect(() => {
    updateSEO("Gerador de Currículo Gratuito 2026", "Crie currículos profissionais modernos e otimizados para ATS em minutos. Diversos templates gratuitos.");
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
      <div className="text-center mb-16">
        <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">Otimizado para o Mercado 2026</span>
        <h1 className="mt-4 text-4xl md:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Crie um Currículo Profissional <br className="hidden md:block"/>
          <span className="text-blue-600">em menos de 5 minutos.</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Nossos templates são testados em sistemas de recrutamento (ATS) para garantir que seu currículo seja lido e aprovado. Gratuito e sem pegadinhas.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/curriculo" className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition flex items-center justify-center shadow-lg shadow-blue-200">
            Começar Agora <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link to="/blog" className="w-full sm:w-auto bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-50 transition flex items-center justify-center">
            Dicas de Carreira
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          { icon: <Zap className="text-blue-600" />, title: "Rápido e Prático", desc: "Preencha seus dados e veja o resultado em tempo real. Edite cada detalhe." },
          { icon: <Shield className="text-blue-600" />, title: "ATS-Friendly", desc: "Estruturas otimizadas para passar pelos robôs de seleção das grandes empresas." },
          { icon: <CheckCircle className="text-blue-600" />, title: "PDF Profissional", desc: "Exporte em um formato limpo, leve e universalmente aceito." }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Por que um bom currículo ainda é o fator #1 para contratação?</h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Mesmo com o avanço do LinkedIn, o arquivo PDF do currículo continua sendo o documento oficial de análise nos processos seletivos. Um layout confuso ou falta de palavras-chave pode te eliminar antes mesmo de alguém ler seu nome.
          </p>
          <Link to="/blog/como-fazer-um-curriculo-perfeito" className="text-blue-400 font-bold hover:underline flex items-center">
            Leia nosso guia completo <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
        <div className="hidden lg:block absolute -right-20 -bottom-20 opacity-20 rotate-12">
          <FileCheck size={400} />
        </div>
      </section>
    </div>
  );
};
