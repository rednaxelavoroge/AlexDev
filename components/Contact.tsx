"use client";

import { useState } from "react";
import { CheckCircle2, SendHorizontal, MessageCircle, Globe } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { useDict } from "@/lib/i18n/DictProvider";

function MessengerIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.36 2 2 6.13 2 11.7c0 2.91 1.19 5.44 3.14 7.19.16.14.26.35.27.57l.05 1.78c.02.57.6.94 1.12.71l1.99-.88c.17-.07.36-.09.54-.04 1.04.29 2.13.44 3.27.44 5.64 0 10-4.13 10-9.7C22 6.13 17.64 2 12 2zm6 7.46l-2.93 4.66c-.47.74-1.47.93-2.18.4l-2.34-1.75a.6.6 0 0 0-.72 0l-3.16 2.4c-.42.32-.97-.18-.69-.63l2.93-4.66c.47-.74 1.47-.93 2.18-.4l2.34 1.75a.6.6 0 0 0 .72 0l3.16-2.4c.42-.32.97.18.69.63z" />
    </svg>
  );
}

export function Contact() {
  const dict = useDict();
  const projectTypes = dict.contact.projectTypes as string[];

  const [form, setForm] = useState({
    name: "",
    contact: "",
    type: projectTypes[0],
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
        setForm({ name: "", contact: "", type: projectTypes[0], message: "" });
      } else {
        setError(dict.contact.errorSend as string);
      }
    } catch {
      setError(dict.contact.errorNetwork as string);
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
                {dict.contact.badge as string}
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold text-white font-display tracking-tight leading-tight">
                {dict.contact.heading as string}
              </h2>
              <p className="mt-4 text-gray-400 text-lg leading-relaxed">
                {dict.contact.description as string}
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
                  <span className="block text-white font-semibold text-sm">{dict.contact.whatsapp as string}</span>
                  <span className="block text-gray-500 text-xs">{dict.contact.whatsappSub as string}</span>
                </span>
              </a>
              <a
                href={siteConfig.contacts.messengerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-[#0084FF]/10 border border-[#0084FF]/25 hover:bg-[#0084FF]/15 transition-all group"
              >
                <span className="h-10 w-10 rounded-xl bg-[#0084FF]/15 flex items-center justify-center text-[#3b9bff]">
                  <MessengerIcon size={20} />
                </span>
                <span>
                  <span className="block text-white font-semibold text-sm">Messenger</span>
                  <span className="block text-gray-500 text-xs">Facebook Messenger</span>
                </span>
              </a>
              <a
                href="#contact-form"
                className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.05] transition-all sm:col-span-2"
              >
                <span className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-teal-400">
                  <SendHorizontal size={18} />
                </span>
                <span>
                  <span className="block text-white font-semibold text-sm">{dict.contact.form as string}</span>
                  <span className="block text-gray-500 text-xs">{dict.contact.formSub as string}</span>
                </span>
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Globe size={16} className="text-teal-400" />
              {dict.contact.worldwide as string} · {siteConfig.location.city}, {siteConfig.location.country}
            </div>
          </div>

          {/* Form */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            {sent ? (
              <div className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="h-16 w-16 bg-teal-500/10 border border-teal-500/20 rounded-full flex items-center justify-center text-teal-400">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">{dict.contact.successTitle as string}</h3>
                <p className="text-gray-400 text-sm max-w-sm">
                  {dict.contact.successText as string}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-4 px-6 py-2.5 bg-white/5 hover:bg-white/10 text-white text-xs font-semibold rounded-lg border border-white/10 transition-all"
                >
                  {dict.contact.resend as string}
                </button>
              </div>
            ) : (
              <form onSubmit={submit} className="space-y-5">
                <Field label={dict.contact.fieldName as string}>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => set("name", e.target.value)}
                    placeholder={dict.contact.placeholderName as string}
                    className="input"
                  />
                </Field>
                <Field label={dict.contact.fieldContact as string}>
                  <input
                    type="text"
                    required
                    value={form.contact}
                    onChange={(e) => set("contact", e.target.value)}
                    placeholder={dict.contact.placeholderContact as string}
                    className="input"
                  />
                </Field>
                <Field label={dict.contact.fieldType as string}>
                  <select
                    value={form.type}
                    onChange={(e) => set("type", e.target.value)}
                    className="input"
                  >
                    {projectTypes.map((t) => (
                      <option key={t} value={t} className="bg-[#0c101e]">
                        {t}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label={dict.contact.fieldMessage as string}>
                  <textarea
                    rows={4}
                    required
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    placeholder={dict.contact.placeholderMessage as string}
                    className="input resize-none"
                  />
                </Field>

                {error && <p className="text-sm text-red-400">{error}</p>}

                <button
                  type="submit"
                  disabled={sending}
                  className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 disabled:opacity-60 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/15 transition-all"
                >
                  {sending ? (dict.contact.sending as string) : (<>{dict.contact.submit as string} <SendHorizontal size={16} /></>)}
                </button>
                <p className="text-center text-[11px] text-gray-600">
                  {dict.contact.consent as string}
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
