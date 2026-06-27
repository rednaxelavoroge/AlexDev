"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useDict } from "@/lib/i18n/DictProvider";

export function Navigation() {
  const dict = useDict();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        <Link href="/" className="flex items-center gap-2.5 group" aria-label={siteConfig.name}>
          <span className="h-9 w-9 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-all">
            <Terminal size={18} />
          </span>
          <span className="text-xl font-bold text-white tracking-tight font-display">
            AlexDev <span className="text-indigo-400">Studio</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm text-gray-400">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white transition-colors">
              {dict.nav[item.label as keyof typeof dict.nav] ?? item.label}
            </Link>
          ))}
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
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white py-3 border-b border-white/5"
            >
              {dict.nav[item.label as keyof typeof dict.nav] ?? item.label}
            </Link>
          ))}
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
