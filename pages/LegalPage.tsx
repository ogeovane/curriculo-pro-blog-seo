
import React, { useEffect } from 'react';
import { updateSEO } from '../lib/seo';

interface LegalPageProps {
  title: string;
}

export const LegalPage: React.FC<LegalPageProps> = ({ title }) => {
  useEffect(() => {
    updateSEO(title, `Página de ${title} do Currículo Pro.`);
  }, [title]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-10">{title}</h1>
      <div className="prose prose-blue max-w-none text-gray-600 leading-loose">
        <p className="mb-6">
          Nós do Currículo Pro valorizamos sua privacidade e transparência. Esta página contém informações importantes sobre como operamos nossa plataforma e processamos seus dados (ou não, já que não armazenamos dados de currículo em nossos servidores de forma permanente).
        </p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Coleta de Informações</h2>
        <p>Os dados inseridos no gerador de currículo permanecem apenas no seu navegador durante a edição. Não coletamos nomes, CPFs ou históricos profissionais em nosso banco de dados centralizado para fins de marketing direto.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Cookies e Google AdSense</h2>
        <p>Utilizamos cookies para melhorar sua experiência e para fins de publicidade via Google AdSense. O Google utiliza cookies para veicular anúncios com base em suas visitas anteriores ao nosso site ou a outros sites na Internet.</p>
        <p className="mt-4">Você pode desativar a publicidade personalizada visitando as Configurações de anúncios do Google.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. LGPD e Compliance</h2>
        <p>Seguimos as diretrizes da Lei Geral de Proteção de Dados (LGPD) no Brasil. Como ferramenta gratuita, nosso objetivo é o empoderamento do candidato, não a comercialização de dados sensíveis.</p>

        <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Limitação de Responsabilidade</h2>
        <p>O Currículo Pro é uma ferramenta de auxílio. Não garantimos contratações ou entrevistas, visto que isso depende exclusivamente da qualidade das informações inseridas pelo usuário e do interesse dos recrutadores.</p>

        <div className="mt-12 pt-8 border-t border-gray-100 text-sm italic">
          Última atualização: Junho de 2024.
        </div>
      </div>
    </div>
  );
};
