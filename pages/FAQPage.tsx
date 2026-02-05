
import React, { useEffect } from 'react';
import { updateSEO } from '../lib/seo';
import { HelpCircle, ChevronDown } from 'lucide-react';

export const FAQPage: React.FC = () => {
  useEffect(() => {
    updateSEO("Perguntas Frequentes - Currículo Pro", "Tire todas as suas dúvidas sobre como criar o currículo perfeito e como funciona nossa plataforma.");
  }, []);

  const faqs = [
    {
      q: "O que é um currículo ATS?",
      a: "ATS (Applicant Tracking System) são sistemas que as empresas usam para filtrar currículos automaticamente. Nossos templates são desenhados para que esses sistemas consigam ler suas informações sem erros."
    },
    {
      q: "O serviço é realmente gratuito?",
      a: "Sim! Você pode criar, editar e baixar seu currículo em PDF quantas vezes quiser, sem custos ou assinaturas escondidas."
    },
    {
      q: "Meus dados ficam salvos?",
      a: "Para sua privacidade, não armazenamos seus dados pessoais em nossos servidores. As informações que você digita ficam salvas temporariamente no seu navegador enquanto você edita."
    },
    {
      q: "Como baixo o currículo em PDF?",
      a: "Após preencher seus dados, clique em 'Baixar PDF'. Na tela de impressão que abrir, selecione a opção 'Salvar como PDF' no destino da sua impressora."
    },
    {
      q: "Quantas experiências devo colocar?",
      a: "Recomendamos focar nas últimas 3 ou nas mais relevantes para a vaga que você está buscando. O ideal é manter o currículo em no máximo 2 páginas."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
          <HelpCircle className="text-blue-600" size={32} />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Perguntas Frequentes</h1>
        <p className="text-xl text-gray-500">Tudo o que você precisa saber sobre o Currículo Pro.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="group bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
            <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
              <span className="font-bold text-gray-900 pr-4">{faq.q}</span>
              <ChevronDown className="text-gray-400 group-open:rotate-180 transition-transform" />
            </summary>
            <div className="px-6 pb-6 text-gray-600 leading-relaxed">
              {faq.a}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
};
