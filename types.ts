
export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  year: string;
}

export interface ResumeData {
  name: string;
  role: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  summary: string;
  experiences: Experience[];
  education: Education[];
  skills: string[];
  languages: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  category: string;
  content: string;
  date: string;
  lang: string;
}

export enum TemplateType {
  MINIMAL_ATS = 'minimal-ats',
  MODERN_PRO = 'modern-pro',
  EXECUTIVE_BLACK = 'executive-black',
  CREATIVE_COLOR = 'creative-color',
  TECH_ATS = 'tech-ats',
  CLASSIC_FORMAL = 'classic-formal'
}
