
import React from 'react';
import { ResumeData, Experience, Education } from '../types';
import { Plus, Trash2, User, Briefcase, GraduationCap, Code, Languages } from 'lucide-react';

interface ResumeFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export const ResumeForm: React.FC<ResumeFormProps> = ({ data, onChange }) => {
  const updateField = (field: keyof ResumeData, value: any) => {
    onChange({ ...data, [field]: value });
  };

  const addExperience = () => {
    const newExp: Experience = { id: Date.now().toString(), company: '', role: '', period: '', description: '' };
    updateField('experiences', [...data.experiences, newExp]);
  };

  const removeExperience = (id: string) => {
    updateField('experiences', data.experiences.filter(e => e.id !== id));
  };

  const updateExperience = (id: string, field: keyof Experience, value: string) => {
    const newList = data.experiences.map(e => e.id === id ? { ...e, [field]: value } : e);
    updateField('experiences', newList);
  };

  const addEducation = () => {
    const newEdu: Education = { id: Date.now().toString(), institution: '', degree: '', year: '' };
    updateField('education', [...data.education, newEdu]);
  };

  const removeEducation = (id: string) => {
    updateField('education', data.education.filter(e => e.id !== id));
  };

  const updateEducationField = (id: string, field: keyof Education, value: string) => {
    const newList = data.education.map(e => e.id === id ? { ...e, [field]: value } : e);
    updateField('education', newList);
  };

  return (
    <div className="space-y-8 pb-20">
      {/* Dados Pessoais */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center space-x-2 mb-6">
          <User className="text-blue-600" />
          <h3 className="text-lg font-bold">Dados Pessoais</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase">Nome Completo</label>
            <input 
              type="text" 
              value={data.name} 
              onChange={(e) => updateField('name', e.target.value)}
              className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="Ex: João Silva"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase">Cargo Desejado</label>
            <input 
              type="text" 
              value={data.role} 
              onChange={(e) => updateField('role', e.target.value)}
              className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="Ex: Desenvolvedor Frontend"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase">E-mail</label>
            <input 
              type="email" 
              value={data.email} 
              onChange={(e) => updateField('email', e.target.value)}
              className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="seu@email.com"
            />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-500 uppercase">Telefone</label>
            <input 
              type="text" 
              value={data.phone} 
              onChange={(e) => updateField('phone', e.target.value)}
              className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
              placeholder="(11) 99999-9999"
            />
          </div>
        </div>
        <div className="mt-4 space-y-1">
          <label className="text-xs font-semibold text-gray-500 uppercase">Resumo Profissional</label>
          <textarea 
            rows={4}
            value={data.summary}
            onChange={(e) => updateField('summary', e.target.value)}
            className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Conte um pouco sobre sua trajetória..."
          />
        </div>
      </section>

      {/* Experiência */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Briefcase className="text-blue-600" />
            <h3 className="text-lg font-bold">Experiência Profissional</h3>
          </div>
          <button 
            onClick={addExperience}
            className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-full transition"
          >
            <Plus size={24} />
          </button>
        </div>
        <div className="space-y-6">
          {data.experiences.map((exp) => (
            <div key={exp.id} className="p-4 border border-gray-100 rounded-lg relative group">
              <button 
                onClick={() => removeExperience(exp.id)}
                className="absolute top-4 right-4 text-red-400 hover:text-red-600 transition opacity-0 group-hover:opacity-100"
              >
                <Trash2 size={18} />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  placeholder="Empresa"
                  value={exp.company}
                  onChange={(e) => updateExperience(exp.id, 'company', e.target.value)}
                  className="w-full p-2 border-b border-gray-200 focus:border-blue-500 outline-none"
                />
                <input 
                  placeholder="Cargo"
                  value={exp.role}
                  onChange={(e) => updateExperience(exp.id, 'role', e.target.value)}
                  className="w-full p-2 border-b border-gray-200 focus:border-blue-500 outline-none"
                />
                <input 
                  placeholder="Período (Ex: Jan 2020 - Atual)"
                  value={exp.period}
                  onChange={(e) => updateExperience(exp.id, 'period', e.target.value)}
                  className="w-full p-2 border-b border-gray-200 focus:border-blue-500 outline-none"
                />
              </div>
              <textarea 
                placeholder="Descrição das atividades (use bullet points)"
                rows={3}
                value={exp.description}
                onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                className="w-full mt-4 p-2 border border-gray-100 rounded outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Formação */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <GraduationCap className="text-blue-600" />
            <h3 className="text-lg font-bold">Formação Acadêmica</h3>
          </div>
          <button 
            onClick={addEducation}
            className="text-blue-600 hover:bg-blue-50 p-1.5 rounded-full transition"
          >
            <Plus size={24} />
          </button>
        </div>
        <div className="space-y-4">
          {data.education.map((edu) => (
            <div key={edu.id} className="flex gap-4 items-end border-b border-gray-50 pb-4">
              <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-4">
                <input 
                  placeholder="Instituição"
                  value={edu.institution}
                  onChange={(e) => updateEducationField(edu.id, 'institution', e.target.value)}
                  className="p-2 border-b border-gray-200 outline-none"
                />
                <input 
                  placeholder="Grau/Curso"
                  value={edu.degree}
                  onChange={(e) => updateEducationField(edu.id, 'degree', e.target.value)}
                  className="p-2 border-b border-gray-200 outline-none"
                />
                <input 
                  placeholder="Ano"
                  value={edu.year}
                  onChange={(e) => updateEducationField(edu.id, 'year', e.target.value)}
                  className="p-2 border-b border-gray-200 outline-none"
                />
              </div>
              <button onClick={() => removeEducation(edu.id)} className="text-red-400 mb-2">
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Habilidades e Idiomas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-2 mb-4">
            <Code className="text-blue-600" size={20} />
            <h3 className="text-lg font-bold">Habilidades</h3>
          </div>
          <textarea 
            placeholder="Digite habilidades separadas por vírgula"
            value={data.skills.join(', ')}
            onChange={(e) => updateField('skills', e.target.value.split(',').map(s => s.trim()))}
            className="w-full p-2.5 border border-gray-200 rounded-lg h-24"
          />
        </section>

        <section className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center space-x-2 mb-4">
            <Languages className="text-blue-600" size={20} />
            <h3 className="text-lg font-bold">Idiomas</h3>
          </div>
          <textarea 
            placeholder="Ex: Português (Nativo), Inglês (Fluente)"
            value={data.languages.join(', ')}
            onChange={(e) => updateField('languages', e.target.value.split(',').map(s => s.trim()))}
            className="w-full p-2.5 border border-gray-200 rounded-lg h-24"
          />
        </section>
      </div>
    </div>
  );
};
