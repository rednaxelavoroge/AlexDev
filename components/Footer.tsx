import Link from "next/link";
import { Terminal, MessageCircle } from "lucide-react";

function MessengerIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.19.16.14.26.35.27.57l.05 1.78c.02.57.6.94 1.12.71l1.99-.88c.17-.07.36-.09.54-.04 1.04.29 2.13.44 3.27.44 5.64 0 10-4.13 10-9.7C22 6.13 17.64 2 12 2zm6 7.46l-2.93 4.66c-.47.74-1.47.93-2.18.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63l2.93-4.66c.47-.74 1.47-.93 2.18-.4l2.34 1.75a.6.6 0 0 0 .72 0l3.16-2.4c.42-.32.97.18.69.63z" />
    </svg>
  );
}
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#02050c] pt-16 pb-10 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10 mb-12">
          <div className="space-y-4 max-w-sm">
            <div className="flex items-center gap-2.5">
              <span className="h-9 w-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Terminal size={18} />
              </span>
              <span className="text-lg font-bold text-white font-display">
                AlexDev <span className="text-indigo-400">Studio</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Бутиковая студия разработки под руководством основателя. Создаём AI-продукты, SaaS и
              веб-платформы для стартапов и бизнеса по всему миру.
            </p>
            <p className="text-xs text-gray-600">
              {siteConfig.location.city}, {siteConfig.location.country} · Worldwide
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 font-display">Навигация</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              {siteConfig.nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="hover:text-white transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 font-display">Связаться</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.contacts.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <MessageCircle size={16} className="text-[#25D366]" /> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contacts.messengerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <span className="text-[#3b9bff]"><MessengerIcon size={16} /></span> Messenger
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© 2024–2026 AlexDev Studio. Все права защищены.</p>
          <p>Founder &amp; Lead Engineer — Александр · AI · SaaS · Web3</p>
        </div>
      </div>
    </footer>
  );
}
