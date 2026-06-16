import React, { useState } from 'react';
import { X, Shield, Lock, Terminal, AlertTriangle, ArrowRight, ExternalLink } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  link?: string;
  github?: string;
  isNda?: boolean;
  metrics?: { label: string; value: string }[];
  challenge?: string;
  solution?: string;
}

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onRequestAccess: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onRequestAccess }) => {
  const [showSandbox, setShowSandbox] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [sandboxError, setSandboxError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  if (!project) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSandboxError('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSandboxError('Ошибка доступа: Учетная запись не активирована. Для просмотра приватного репозитория отправьте запрос на получение Demo-доступа.');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content - Slide out from right */}
      <div className="relative w-full max-w-3xl h-full bg-[#070b15] border-l border-white/10 shadow-2xl flex flex-col z-10 transition-transform duration-300 transform translate-x-0 overflow-y-auto">
        
        {/* Header */}
        <div className="sticky top-0 z-20 flex items-center justify-between p-6 border-b border-white/10 bg-[#070b15]/90 backdrop-blur-md">
          <div>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              {project.category}
            </span>
            <h2 className="text-2xl font-bold text-white mt-2 font-display">{project.title}</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 p-6 space-y-8">
          {/* Main Visual Frame */}
          <div className="relative aspect-video rounded-xl overflow-hidden border border-white/10 bg-[#0c1020] group">
            {showSandbox ? (
              /* Simulated Secure Sandbox Portal */
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-[#030712] font-mono text-sm">
                <div className="w-full max-w-md p-6 rounded-xl border border-red-500/30 bg-red-950/10 space-y-4">
                  <div className="flex items-center gap-3 text-red-400">
                    <Shield className="animate-pulse" size={24} />
                    <span className="font-bold uppercase tracking-wider text-xs">Авторизованный портал (NDA)</span>
                  </div>
                  
                  <div className="p-3 rounded bg-black/40 border border-white/5 text-xs text-gray-400 space-y-1">
                    <p className="flex items-center gap-1.5"><Terminal size={12} className="text-teal-400" /> Host: client-sandbox.alex.dev</p>
                    <p className="flex items-center gap-1.5"><Terminal size={12} className="text-teal-400" /> Status: Restricted Environment</p>
                    <p className="flex items-center gap-1.5"><Terminal size={12} className="text-teal-400" /> Environment: Private Sandbox</p>
                  </div>

                  <form onSubmit={handleLoginSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Идентификатор / Логин</label>
                      <input 
                        type="text" 
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="demo_client"
                        className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded focus:border-red-500/50 outline-none text-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">Секретный пароль</label>
                      <input 
                        type="password" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded focus:border-red-500/50 outline-none text-white text-xs"
                      />
                    </div>

                    {sandboxError && (
                      <div className="p-3 rounded bg-red-500/10 border border-red-500/20 text-xs text-red-400 flex gap-2">
                        <AlertTriangle className="shrink-0" size={16} />
                        <span>{sandboxError}</span>
                      </div>
                    )}

                    <div className="flex gap-2 pt-2">
                      <button 
                        type="submit"
                        disabled={isLoading}
                        className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-red-800 text-white font-semibold text-xs rounded transition-colors flex items-center justify-center gap-2"
                      >
                        {isLoading ? 'Проверка...' : 'Войти в Систему'}
                      </button>
                      <button 
                        type="button"
                        onClick={() => setShowSandbox(false)}
                        className="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 text-xs rounded transition-colors"
                      >
                        Назад
                      </button>
                    </div>
                  </form>

                  <div className="border-t border-white/5 pt-3 text-center">
                    <button 
                      onClick={() => {
                        onClose();
                        onRequestAccess(project.title);
                      }}
                      className="text-xs text-indigo-400 hover:text-indigo-300 underline flex items-center justify-center gap-1.5 mx-auto"
                    >
                      Запросить Demo-ключ доступа <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Regular Image Cover */
              <>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070b15] via-transparent to-transparent opacity-80" />
                {project.isNda && (
                  <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded bg-black/60 backdrop-blur-sm border border-red-500/20 text-red-400 text-xs font-mono">
                    <Lock size={12} /> NDA Secure
                  </div>
                )}
              </>
            )}
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap gap-4">
            {project.isNda ? (
              <button 
                onClick={() => setShowSandbox(true)}
                className="flex-1 min-w-[200px] py-4 bg-gradient-to-r from-red-600 to-indigo-600 hover:from-red-500 hover:to-indigo-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all duration-300"
              >
                <Terminal size={18} /> Запустить интерактивное Demo (NDA)
              </button>
            ) : project.link && project.link !== '#' ? (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[200px] py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/15 hover:shadow-indigo-500/30 transition-all duration-300"
              >
                <ExternalLink size={18} /> Открыть рабочий проект <ArrowRight size={16} />
              </a>
            ) : (
              <button 
                onClick={() => {
                  onClose();
                  onRequestAccess(project.title);
                }}
                className="flex-1 min-w-[200px] py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg transition-all duration-300"
              >
                Запросить развертывание Demo <ArrowRight size={16} />
              </button>
            )}

            {project.github && project.github !== '#' && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-semibold text-gray-300 hover:text-white transition-all flex items-center justify-center gap-2"
              >
                GitHub репозиторий
              </a>
            )}
          </div>

          {/* Key Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {project.metrics.map((m, index) => (
                <div key={index} className="p-4 rounded-xl border border-white/5 bg-white/2.5">
                  <span className="block text-2xl font-bold text-teal-400 font-display">{m.value}</span>
                  <span className="text-xs text-gray-500">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {/* Project Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-2 font-display">О проекте</h3>
              <p className="text-gray-400 leading-relaxed text-sm">{project.fullDescription}</p>
            </div>

            {project.challenge && (
              <div>
                <h3 className="text-lg font-bold text-white mb-2 font-display">Поставленная задача</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{project.challenge}</p>
              </div>
            )}

            {project.solution && (
              <div>
                <h3 className="text-lg font-bold text-white mb-2 font-display">Реализованное решение</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{project.solution}</p>
              </div>
            )}

            <div>
              <h3 className="text-lg font-bold text-white mb-3 font-display">Стек технологий</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span 
                    key={t}
                    className="px-3 py-1.5 rounded-lg text-xs bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
