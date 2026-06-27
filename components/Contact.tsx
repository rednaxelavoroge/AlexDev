"use client";

import { useState } from "react";
import { CheckCircle2, SendHorizontal, MessageCircle, Globe, Send, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";

const PROJECT_TYPES = [
  "AI-продукт / агент",
  "SaaS / веб-платформа",
  "Telegram Mini App",
  "Web3 / DeFi",
  "Автоматизация / интеграции",
  "Другое",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    type: PROJECT_TYPES[0],
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const set = (k: keyof typeof form, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${siteConfig.contacts.formDeliveryEmail}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `AlexDev Studio — заявка: ${form.type}`,
          Name: form.name,
          Contact: form.contact,
          "Project Type": form.type,
          Message: form.message,
        }),
      });
      if (res.ok) {
        setSent(true);
        setForm({ name: "", contact: "", type: PROJECT_TYPES[0], message: "" });
      } else {
        setError("Не удалось отправить. Напишите в WhatsApp, Telegram или на email.");
      }
    } catch {
      setError("Ошибка сети. Напишите в WhatsApp, Telegram или на email.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#02050c] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-500/5 rounded-full glow-glow pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-4">
                Контакты
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight leading-tight">
                Давайте создадим что-то крутое
              </h2>
              <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                Оставьте заявку или напишите напрямую — обсудим задачу, предложим подход и
                оценку. Отвечаем в течение 24 часов.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              <a
                href={siteConfig.contacts.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/20 hover:bg-[#25D366]/15 transition-all group"
              >
                <span className="h-10 w-10 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366]">
                  <MessageCircle size={20} />
                </span>
                <span>
                  <span className="block text-white font-semibold text-sm">WhatsApp</span>
                  <span className="block text-gray-500 text-xs">Быстрый ответ</span>
                </span>
              </a>
              <a
                href={siteConfig.contacts.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#229ED9]/10 border border-[#229ED9]/25 hover:bg-[#229ED9]/15 transition-all group"
              >
                <span className="h-10 w-10 rounded-xl bg-[#229ED9]/15 flex items-center justify-center text-[#43b4ec]">
                  <Send size={20} />
                </span>
                <span>
                  <span className="block text-white font-semibold text-sm">Telegram</span>
                  <span className="block text-gray-500 text-xs">{siteConfig.contacts.telegram}</span>
                </span>
              </a>
              <a
                href={siteConfig.contacts.emailUrl}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all"
              >
                <span className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-indigo-300">
                  <Mail size={18} />
                </span>
                <span>
                  <span className="block text-white font-semibold text-sm">Email</span>
                  <span className="block text-gray-500 text-xs">{siteConfig.contacts.email}</span>
                </span>
              </a>
              <a
                href="#contact-form"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all"
              >
                <span className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-teal-400">
                  <SendHorizontal size={18} />
                </span>
                <span>
                  <span className="block text-white font-semibold text-sm">Форма заявки</span>
                  <span className="block text-gray-500 text-xs">Заполните и мы ответим</span>
                </span>
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Globe size={16} className="text-teal-400" />
              Работаем по всему миру · {siteConfig.location.city}, {siteConfig.location.country}
            </div>
          </div>

          {/* Form */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="h-16 w-16 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center justify-center text-teal-400">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">Заявка отправлена!</h3>
                <p className="text-gray-400 text-sm max-w-sm">
                  Спасибо! Свяжемся с вами в течение 24 часов. Для срочных вопросов — WhatsApp,
                  Telegram или email.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold rounded-lg border border-white/10 transition-all"
                >
                  Отправить ещё раз
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <Field label="Ваше имя">
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder="Иван Иванов"
                    className="input"
                  />
                </Field>
                <Field label="Как с вами связаться (WhatsApp / Telegram / email)">
                  <input
                    type="text"
                    required
                    value={form.contact}
                    onChange={(e) => set("contact", e.target.value)}
                     placeholder="+995 …, @username или email"
                    className="input"
                  />
                </Field>
                <Field label="Тип проекта">
                  <select
                    value={form.type}
                    onChange={(e) => set("type", e.target.value)}
                    className="input"
                  >
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t} className="bg-[#0c101e]">
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Описание задачи">
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder="Опишите цели, сроки и требования к продукту…"
                    className="input resize-none"
                  />
                </Field>

                {error && <p className="text-sm text-red-400">{error}</p>}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 disabled:opacity-60 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/15 transition-all"
                >
                  {sending ? "Отправка…" : (<>Отправить заявку <SendHorizontal size={16} /></>)}
                </button>
                <p className="text-center text-[11px] text-gray-600">
                  Нажимая кнопку, вы соглашаетесь на обработку данных для ответа на заявку.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
        {label}
      </span>
      {children}
    </label>
  );
}
