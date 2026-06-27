"use client";

import Link from "next/link";
import { Terminal, MessageCircle, Send, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useDict } from "@/lib/i18n/DictProvider";

export function Footer() {
  const dict = useDict();

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
              {dict.footer.description as string}
            </p>
            <p className="text-xs text-gray-600">
              {siteConfig.location.city}, {siteConfig.location.country} · Worldwide
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-sm mb-4 font-display">{dict.footer.nav as string}</h3>
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
            <h3 className="text-white font-semibold text-sm mb-4 font-display">{dict.footer.connect as string}</h3>
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
                  href={siteConfig.contacts.telegramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Send size={16} className="text-[#43b4ec]" /> Telegram
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.contacts.emailUrl}
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                >
                  <Mail size={16} className="text-indigo-300" /> {siteConfig.contacts.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>{dict.footer.copyright as string}</p>
          <p>{dict.footer.founderLine as string}</p>
        </div>
      </div>
    </footer>
  );
}
