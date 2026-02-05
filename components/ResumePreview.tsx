
import React from 'react';
import { ResumeData, TemplateType } from '../types';

interface ResumePreviewProps {
  data: ResumeData;
  template: TemplateType;
}

export const ResumePreview: React.FC<ResumePreviewProps> = ({ data, template }) => {
  const renderMinimalATS = () => (
    <div className="p-10 text-slate-900 bg-white min-h-[1100px] leading-relaxed font-sans">
      <div className="border-b-2 border-slate-900 pb-4 mb-6">
        <h1 className="text-3xl font-bold uppercase tracking-tight mb-1">{data.name}</h1>
        <div className="text-sm flex flex-wrap gap-x-4">
          <span>{data.email}</span>
          <span>{data.phone}</span>
          <span>{data.location}</span>
          <span>{data.linkedin}</span>
        </div>
      </div>

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-200 mb-2">Objetivo / Resumo</h2>
        <p className="text-sm whitespace-pre-wrap">{data.summary}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase border-b border-slate-200 mb-2">Experiência Profissional</h2>
        <div className="space-y-4">
          {data.experiences.map((exp) => (
            <div key={exp.id}>
              <div className="flex justify-between font-bold text-sm">
                <span>{exp.company} | {exp.role}</span>
                <span>{exp.period}</span>
              </div>
              <p className="text-sm whitespace-pre-wrap text-slate-700 mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid grid-cols-2 gap-8">
        <section>
          <h2 className="text-lg font-bold uppercase border-b border-slate-200 mb-2">Formação</h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="text-sm mb-2">
              <p className="font-bold">{edu.institution}</p>
              <p>{edu.degree} - {edu.year}</p>
            </div>
          ))}
        </section>
        <section>
          <h2 className="text-lg font-bold uppercase border-b border-slate-200 mb-2">Habilidades</h2>
          <p className="text-sm">{data.skills.join(' • ')}</p>
          {data.languages.length > 0 && (
            <div className="mt-4">
              <h2 className="text-lg font-bold uppercase border-b border-slate-200 mb-2">Idiomas</h2>
              <p className="text-sm">{data.languages.join(' • ')}</p>
            </div>
          )}
        </section>
      </div>
    </div>
  );

  const renderModernPro = () => (
    <div className="flex bg-white min-h-[1100px] font-sans">
      <div className="w-1/3 bg-slate-800 text-white p-8">
        <h1 className="text-2xl font-bold mb-1">{data.name}</h1>
        <p className="text-slate-300 mb-8">{data.role}</p>

        <section className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Contato</h2>
          <div className="text-sm space-y-2 opacity-80">
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.location}</p>
            <p>{data.linkedin}</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Habilidades</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((s, i) => (
              <span key={i} className="bg-slate-700 px-2 py-1 rounded text-xs">{s}</span>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Idiomas</h2>
          <ul className="text-sm opacity-80 space-y-1">
            {data.languages.map((l, i) => <li key={i}>{l}</li>)}
          </ul>
        </section>
      </div>

      <div className="w-2/3 p-10 text-slate-800">
        <section className="mb-8">
          <h2 className="text-xl font-bold border-b-2 border-slate-100 pb-2 mb-4">Resumo</h2>
          <p className="text-sm leading-relaxed">{data.summary}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold border-b-2 border-slate-100 pb-2 mb-4">Experiência</h2>
          <div className="space-y-6">
            {data.experiences.map((exp) => (
              <div key={exp.id}>
                <h3 className="font-bold text-base">{exp.role}</h3>
                <p className="text-sm text-slate-500 mb-2">{exp.company} | {exp.period}</p>
                <p className="text-sm whitespace-pre-wrap">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold border-b-2 border-slate-100 pb-2 mb-4">Formação</h2>
          {data.education.map((edu) => (
            <div key={edu.id} className="mb-4">
              <h3 className="font-bold text-sm">{edu.institution}</h3>
              <p className="text-sm text-slate-600">{edu.degree} ({edu.year})</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );

  const renderClassic = () => (
    <div className="p-12 bg-white min-h-[1100px] text-gray-900 font-serif leading-snug">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">{data.name}</h1>
        <div className="text-sm italic text-gray-600">
          {data.location} • {data.phone} • {data.email}
        </div>
      </div>

      <hr className="border-gray-800 my-4" />

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase mb-2">Perfil Profissional</h2>
        <p className="text-sm text-justify">{data.summary}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-lg font-bold uppercase mb-2">Histórico de Carreira</h2>
        {data.experiences.map(exp => (
          <div key={exp.id} className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <span className="font-bold text-lg">{exp.company}</span>
              <span className="text-sm italic">{exp.period}</span>
            </div>
            <p className="font-bold text-sm mb-1">{exp.role}</p>
            <p className="text-sm whitespace-pre-wrap pl-4">{exp.description}</p>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-2 gap-12">
        <section>
          <h2 className="text-lg font-bold uppercase mb-2">Acadêmico</h2>
          {data.education.map(edu => (
            <div key={edu.id} className="mb-2">
              <p className="font-bold text-sm">{edu.institution}</p>
              <p className="text-sm">{edu.degree}, {edu.year}</p>
            </div>
          ))}
        </section>
        <section>
          <h2 className="text-lg font-bold uppercase mb-2">Competências</h2>
          <p className="text-sm">{data.skills.join(', ')}</p>
        </section>
      </div>
    </div>
  );

  const getTemplateContent = () => {
    switch(template) {
      case TemplateType.MODERN_PRO: return renderModernPro();
      case TemplateType.CLASSIC_FORMAL: return renderClassic();
      default: return renderMinimalATS();
    }
  };

  return (
    <div className="shadow-2xl overflow-hidden rounded-sm" id="resume-content">
      {getTemplateContent()}
    </div>
  );
};
