
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ResumeBuilder } from './pages/ResumeBuilder';
import { BlogList } from './pages/BlogList';
import { BlogPost } from './pages/BlogPost';
import { LegalPage } from './pages/LegalPage';
import { TemplatesPage } from './pages/TemplatesPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/curriculo" element={<ResumeBuilder />} />
            <Route path="/templates" element={<TemplatesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/privacidade" element={<LegalPage title="Política de Privacidade" />} />
            <Route path="/termos" element={<LegalPage title="Termos de Uso" />} />
            <Route path="/cookies" element={<LegalPage title="Política de Cookies" />} />
            <Route path="/sobre" element={<div className="max-w-4xl mx-auto px-4 py-20 text-center"><h1 className="text-4xl font-bold mb-4">Sobre Nós</h1><p className="text-gray-500 text-lg">Somos uma iniciativa dedicada a democratizar o acesso a ferramentas profissionais de carreira e recrutamento, ajudando brasileiros a conquistarem seu próximo passo profissional.</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
