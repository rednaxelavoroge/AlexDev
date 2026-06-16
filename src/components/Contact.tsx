import React, { useState, useEffect } from 'react';
import { CheckCircle2, MessageSquareCode, SendHorizontal } from 'lucide-react';

interface ContactProps {
  prefillProjectName: string | null;
  clearPrefill: () => void;
}

export const Contact: React.FC<ContactProps> = ({ prefillProjectName, clearPrefill }) => {
  const [name, setName] = useState('');
  const [telegram, setTelegram] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('AI-бот / Ассистент');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (prefillProjectName) {
      setProjectType(
        prefillProjectName.includes('AI') || prefillProjectName.includes('Showroom')
          ? 'AI-бот / Ассистент'
          : prefillProjectName.includes('ROSCASH') || prefillProjectName.includes('Webtransfer') || prefillProjectName.includes('QADSAN')
          ? 'Web3 / DeFi Платформа'
          : 'Telegram Web App'
      );
      setMessage(`Здравствуйте! Хочу запросить тестовый доступ / развертывание Demo-окружения для проекта "${prefillProjectName}".`);
      clearPrefill();
    }
  }, [prefillProjectName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    setTimeout(() => {
      setIsSending(false);
      setIsSubmitted(true);
      
      // Reset form
      setName('');
      setTelegram('');
      setEmail('');
      setMessage('');
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#030712] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full glow-glow pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Info Side */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
                Связаться
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight leading-tight">
                Обсудим ваш проект?
              </h2>
              <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                Напишите мне, и мы согласуем время для созвона. Подробно разберем задачи вашего бизнеса, выберем стек технологий и составим план реализации.
              </p>
            </div>

            <div className="space-y-4 font-mono text-sm">
              <div className="flex items-center gap-3 text-gray-300">
                <span className="h-2 w-2 rounded-full bg-teal-400" />
                <span>Telegram: @alexdev_pro</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
                <span>Email: contact@alex.dev</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span>Рабочие часы: 10:00 – 20:00 (UTC+3)</span>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/2.5 max-w-md">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                  <MessageSquareCode size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Быстрый старт</h4>
                  <p className="text-xs text-gray-500 mt-1">Отвечаю в течение 2 часов в Telegram. Готов приступить к разработке ТЗ в течение суток.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 relative">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="h-16 w-16 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center justify-center text-teal-400 animate-bounce">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Заявка успешно отправлена!</h3>
                <p className="text-gray-400 text-sm max-w-sm">
                  Спасибо за обращение! Я свяжусь с вами в Telegram или по почте в течение ближайшего времени.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold rounded-lg border border-white/10 transition-all"
                >
                  Отправить еще раз
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Ваше имя</label>
                    <input 
                      type="text" 
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Алексей"
                      className="w-full px-4 py-3 bg-white/2 border border-white/5 hover:border-white/15 focus:border-indigo-500 focus:bg-[#070a13] rounded-xl outline-none text-white text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Юзернейм Telegram</label>
                    <input 
                      type="text" 
                      required
                      value={telegram}
                      onChange={(e) => setTelegram(e.target.value)}
                      placeholder="@username"
                      className="w-full px-4 py-3 bg-white/2 border border-white/5 hover:border-white/15 focus:border-indigo-500 focus:bg-[#070a13] rounded-xl outline-none text-white text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Email почта</label>
                  <input 
                    type="email" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full px-4 py-3 bg-white/2 border border-white/5 hover:border-white/15 focus:border-indigo-500 focus:bg-[#070a13] rounded-xl outline-none text-white text-sm transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Тип разработки</label>
                  <select 
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-3 bg-white/2 border border-white/5 hover:border-white/15 focus:border-indigo-500 focus:bg-[#070a13] rounded-xl outline-none text-white text-sm transition-all"
                  >
                    <option value="AI-бот / Ассистент" className="bg-[#0c101e]">AI-бот / Ассистент</option>
                    <option value="Telegram Web App" className="bg-[#0c101e]">Telegram Web App (Mini App)</option>
                    <option value="Web3 / DeFi Платформа" className="bg-[#0c101e]">Web3 / DeFi Платформа</option>
                    <option value="B2B SaaS / Личный кабинет" className="bg-[#0c101e]">B2B SaaS / Личный кабинет</option>
                    <option value="Сложный Landing Page" className="bg-[#0c101e]">Сложный Landing Page</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">Описание задачи</label>
                  <textarea 
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Опишите ваши цели, примерные сроки и требования к проекту..."
                    className="w-full px-4 py-3 bg-white/2 border border-white/5 hover:border-white/15 focus:border-indigo-500 focus:bg-[#070a13] rounded-xl outline-none text-white text-sm transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={isSending}
                  className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300"
                >
                  {isSending ? 'Отправка...' : (
                    <>
                      Отправить запрос <SendHorizontal size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
