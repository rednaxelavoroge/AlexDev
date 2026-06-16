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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch("https://formsubmit.co/ajax/aegonet@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: name,
          Telegram: telegram,
          Email: email,
          "Project Type": projectType,
          Message: message
        })
      });
      
      if (response.ok) {
        setIsSubmitted(true);
        // Reset form
        setName('');
        setTelegram('');
        setEmail('');
        setMessage('');
      } else {
        alert("Произошла ошибка при отправке. Пожалуйста, напишите напрямую на почту aegonet@gmail.com или в WhatsApp.");
      }
    } catch (err) {
      console.error(err);
      alert("Ошибка сети. Пожалуйста, напишите напрямую в WhatsApp или на почту aegonet@gmail.com.");
    } finally {
      setIsSending(false);
    }
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
                <span>Email: aegonet@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                <span>Рабочие часы: 10:00 – 20:00 (UTC+3)</span>
              </div>
              <div className="pt-2">
                <a 
                  href="https://wa.me/995585890730" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs rounded-xl shadow-lg shadow-[#25D366]/10 transition-all duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.93a7.907 7.907 0 0 0 1.08 3.951L0 16l4.223-1.108a7.9 7.9 0 0 0 3.776.969h.002c4.368 0 7.926-3.558 7.93-7.93A7.897 7.897 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.69-4.98c-.202-.101-1.194-.588-1.378-.654-.184-.066-.317-.1-.449.1-.132.2-.511.63-.626.76-.115.132-.23.148-.432.047a5.05 5.05 0 0 1-2.617-2.286c-.198-.34-.33-.76-.412-1.147-.078-.369.072-.569.213-.708.127-.127.282-.329.424-.492.14-.165.188-.282.281-.469.094-.188.047-.353-.023-.492-.07-.14-.45-1.087-.62-1.498-.166-.398-.332-.344-.45-.35-.115-.006-.247-.006-.38-.006-.132 0-.348.05-.53.247-.182.197-.694.678-.694 1.654 0 .976.71 1.92 0 1.92c.08.106 1.396 2.13 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.194-.488 1.362-.96.168-.472.168-.875.118-.96-.05-.084-.184-.132-.387-.233z"/></svg>
                  Написать в WhatsApp
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-white/5 bg-white/2.5 max-w-md">
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 shrink-0">
                  <MessageSquareCode size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Быстрый старт</h4>
                  <p className="text-xs text-gray-500 mt-1">Отвечаю в течение 2 часов в WhatsApp. Готов приступить к разработке ТЗ в течение суток.</p>
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
