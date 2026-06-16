import React from 'react';
import { Send, Terminal } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 bg-[#02050c] py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
              <Terminal size={18} />
            </div>
            <span className="text-lg font-bold text-white font-display">AlexDev</span>
            <span className="text-xs text-gray-500 font-mono">© 2024-2026 AlexDev.</span>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a href="#services" className="hover:text-white transition-colors">Услуги</a>
            <a href="#projects" className="hover:text-white transition-colors">Кейсы</a>
            <a href="#workflow" className="hover:text-white transition-colors">Процесс</a>
            <a href="#contact" className="hover:text-white transition-colors">Контакты</a>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            <a 
              href="https://t.me/alexdev_pro" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/5"
            >
              <Send size={18} />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors border border-white/5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>

        </div>

        {/* Disclaimer */}
        <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
          <p>Разработка ИИ-агентов, Web3 и Telegram-систем. Все права защищены.</p>
        </div>

      </div>
    </footer>
  );
};
