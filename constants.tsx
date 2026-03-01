
import { BlogPost, ResumeData } from './types';
import { BLOG_POSTS } from './posts';

export { BLOG_POSTS };

export const INITIAL_RESUME_DATA: ResumeData = {
  name: 'Seu Nome Completo',
  role: 'Cargo Desejado',
  email: 'seuemail@exemplo.com',
  phone: '(11) 98765-4321',
  location: 'São Paulo, SP',
  linkedin: 'linkedin.com/in/seuusuario',
  summary: 'Resumo profissional impactante destacando suas principais conquistas e objetivos de carreira.',
  experiences: [
    {
      id: '1',
      company: 'Nome da Empresa',
      role: 'Seu Cargo',
      period: 'Jan 2020 - Presente',
      description: '• Responsável por X\n• Conquista Y com aumento de Z%'
    }
  ],
  education: [
    {
      id: '1',
      institution: 'Universidade Exemplo',
      degree: 'Bacharelado em Administração',
      year: '2019'
    }
  ],
  skills: ['Comunicação', 'Gestão de Tempo', 'Pacote Office'],
  languages: ['Português (Nativo)', 'Inglês (Intermediário)']
};
