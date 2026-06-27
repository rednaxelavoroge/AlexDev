"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Terminal, Menu, X, Globe } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useDict } from "@/lib/i18n/DictProvider";
import { LANGS, LANG_LABELS, type Lang } from "@/lib/i18n";

const NAV_KEYS = ["services", "portfolio", "technologies", "process", "pricing", "faq", "blog", "contacts"] as const;

export function Navigation() {
  const dict = useDict();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const currentLang = (pathname.match(/^\/(en|ru|ka|hy)(\/|$)/)?.[1] || "en") as Lang;

  const switchLang = (lang: Lang) => {
    const newPath = pathname.replace(/^\/(en|ru|ka|hy)(\/|$)/, `/${lang}/`);
    document.cookie = `alexdev_lang=${lang};path=/;max-age=${365 * 24 * 60 * 60}`;
    window.location.href = newPath;
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 border-b transition-colors ${
        scrolled
          ? "border-white/10 bg-[#030712]/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href={`/${currentLang}`} className="flex items-center gap-2.5 group" aria-label={siteConfig.name}>
          <span className="h-9 w-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-all">
            <Terminal size={18} />
          </span>
          <span className="text-xl font-bold text-white tracking-tight font-display">
            AlexDev <span className="text-indigo-400">Studio</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6 text-sm text-gray-400">
          {siteConfig.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-white transition-colors"
            >
              {dict.nav[NAV_KEYS[i]] ?? item.label}
            </Link>
          ))}

          {/* Language switcher */}
          <div className="relative ml-2">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-xs font-semibold text-gray-400 hover:text-white hover:bg-white/5 transition-all"
            >
              <Globe size={14} />
              {currentLang.toUpperCase()}
            </button>
            {langOpen && (
              <div className="absolute top-full right-0 mt-1 py-1 rounded-xl bg-[#0d1220] border border-white/10 shadow-xl min-w-[130px] z-50">
                {LANGS.map((l) => (
                  <button
                    key={l}
                    onClick={() => { switchLang(l); setLangOpen(false); }}
                    className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                      l === currentLang
                        ? "text-white bg-indigo-500/10"
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {LANG_LABELS[l]}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-semibold text-xs shadow-lg shadow-indigo-500/20 transition-all"
          >
            {dict.nav.discussProject}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-gray-300 hover:text-white"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-b border-white/10 bg-[#030712] px-4 py-6 flex flex-col gap-1">
          {siteConfig.nav.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white py-3 border-b border-white/5"
            >
              {dict.nav[NAV_KEYS[i]] ?? item.label}
            </Link>
          ))}
          <div className="py-3 border-b border-white/5">
            <div className="flex flex-wrap gap-2">
              {LANGS.map((l) => (
                <button
                  key={l}
                  onClick={() => { switchLang(l); setOpen(false); }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    l === currentLang
                      ? "bg-indigo-500 text-white"
                      : "bg-white/5 text-gray-400 hover:text-white"
                  }`}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>
          </div>
          <a
            href="#contact"
            className="w-full py-3 mt-4 text-center rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm"
          >
            {dict.nav.discussProject}
          </a>
        </div>
      )}
    </header>
  );
}
