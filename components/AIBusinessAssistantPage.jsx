'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { locales, langLabels } from '../lib/i18n';
import { getContent } from '../content';
import { aiBusinessAssistantContent } from '../content/ai-business-assistant';
import Footer from './Footer';
import MobileNav from './MobileNav';

export default function AIBusinessAssistantPage({ locale }) {
  const router = useRouter();
  const [theme, setTheme] = useState('light');
  const [demoOpen, setDemoOpen] = useState(false);
  const [form, setForm] = useState({
    name: '',
    company: '',
    contact: '',
    bizType: '',
    automate: '',
  });

  const lang = locale === 'ru' ? 'ru' : 'en';
  const c = aiBusinessAssistantContent[lang] || aiBusinessAssistantContent.en;
  const mainContent = getContent(locale);

  useEffect(() => {
    if (!demoOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setDemoOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [demoOpen]);

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', next);
    }
  }

  function changeLang(e) {
    const targetLang = e.target.value.toLowerCase();
    router.push(`/${targetLang}/ai-business-assistant`);
  }

  function submitDemoRequest(e) {
    e.preventDefault();
    const text =
      (lang === 'ru' ? 'AI Бизнес-Ассистент — Запрос консультации' : 'AI Business Assistant — Consultation Request') +
      '\n' + (lang === 'ru' ? 'Имя: ' : 'Name: ') + (form.name.trim() || '—') +
      '\n' + (lang === 'ru' ? 'Компания: ' : 'Company: ') + (form.company.trim() || '—') +
      '\n' + (lang === 'ru' ? 'Контакт: ' : 'Contact: ') + (form.contact.trim() || '—') +
      '\n' + (lang === 'ru' ? 'Сфера бизнеса: ' : 'Business type: ') + (form.bizType.trim() || '—') +
      '\n' + (lang === 'ru' ? 'Цели автоматизации: ' : 'Automation goals: ') + (form.automate.trim() || '—');

    window.open(
      'https://wa.me/' + mainContent.contact.whatsapp + '?text=' + encodeURIComponent(text),
      '_blank'
    );
    setDemoOpen(false);
  }

  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const aiAssistantLinks = [
    { id: '#automate', label: c.nav.automate },
    { id: '#how', label: c.nav.how },
    { id: '#integrations', label: c.nav.integrations },
    { id: '#pricing', label: c.nav.pricing },
  ];

  return (
    <>
      <div className="rails"><div /></div>

      <MobileNav locale={locale} content={mainContent} isSubpage={true} customLinks={aiAssistantLinks} />

      <main style={{ overflowX: 'hidden' }}>
        <div className="wrap">
          {/* HERO SECTION WITH ENGINEERING WHATSAPP UI SCENE */}
          <section className="hero">
            <div className="hero-grid" style={{ alignItems: 'center' }}>
              <div>
                <span className="eyebrow"><span className="dot" />{c.badge}</span>
                {lang === 'ru' ? (
                  <h1>AI Бизнес-<span className="mut">Ассистент</span></h1>
                ) : (
                  <h1>AI Business <span className="mut">Assistant</span></h1>
                )}
                <p className="sub">{c.subtitle}</p>
                <div className="hero-cta">
                  <button className="btn btn-pri" onClick={() => setDemoOpen(true)}>
                    {c.ctaConsult}
                  </button>
                  <button className="btn btn-ghost" onClick={() => setDemoOpen(true)}>
                    {c.ctaStart}
                  </button>
                </div>
                <div className="hero-meta">
                  {c.heroMeta.map((m, i) => (
                    <span key={i}><i></i>{m}</span>
                  ))}
                </div>
              </div>

              {/* Engineering WhatsApp UI Scene */}
              <div className="spec" style={{ padding: '24px', background: 'var(--panel)', borderRadius: '14px', border: '1px solid var(--line2)' }}>
                {/* Header Badge */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '16px', borderBottom: '1px solid var(--line)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#25D366', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.76.459 3.478 1.333 4.992l-1.416 5.174 5.293-1.388c1.464.798 3.116 1.218 4.778 1.219h.004c5.506 0 9.989-4.478 9.99-9.984.001-2.667-1.034-5.174-2.92-7.062a9.927 9.927 0 0 0-7.072-2.937zm5.811 14.162c-.244.688-1.42 1.314-1.961 1.396-.54.081-1.244.116-2.008-.129-.462-.148-1.055-.341-1.826-.676-3.23-1.399-5.328-4.664-5.489-4.88-.162-.216-1.309-1.741-1.309-3.321 0-1.58.825-2.358 1.12-2.678.295-.32.645-.4.86-.4.215 0 .43.003.618.01.2.008.47-.076.736.56.27.646.917 2.24.997 2.402.08.162.134.351.027.567-.107.216-.162.351-.322.54-.162.189-.34.423-.487.567-.162.162-.331.338-.142.662.189.324.84 1.386 1.802 2.242 1.238 1.102 2.28 1.444 2.604 1.606.324.162.513.135.702-.081.189-.216.81-.945 1.026-1.269.216-.324.432-.27.728-.162.297.108 1.889.891 2.213 1.053.324.162.54.243.621.378.081.135.081.783-.163 1.471z"/>
                      </svg>
                    </div>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--fg)', fontFamily: 'var(--disp)' }}>WhatsApp Cloud API</div>
                      <div style={{ fontSize: '11px', color: 'var(--fg3)', fontFamily: 'var(--mono)' }}>Official Meta Infrastructure</div>
                    </div>
                  </div>
                  <span className="tag" style={{ color: '#25D366', borderColor: 'rgba(37,211,102,0.3)', fontSize: '10px' }}>Active • 24/7 AI</span>
                </div>

                {/* Simulated Conversation Scene */}
                <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {/* Customer Message */}
                  <div style={{ alignSelf: 'flex-start', maxWidth: '88%', padding: '10px 14px', borderRadius: '12px 12px 12px 2px', background: 'var(--bg2)', border: '1px solid var(--line)', fontSize: '13px', color: 'var(--fg2)' }}>
                    <span style={{ display: 'block', fontSize: '10px', color: 'var(--fg3)', fontFamily: 'var(--mono)', marginBottom: '4px' }}>Customer → WhatsApp</span>
                    {c.heroDialogue.customer}
                  </div>

                  {/* AI Knowledge Node Indicator */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '6px 12px', background: 'var(--accent-dim)', borderRadius: '6px', fontSize: '11px', color: 'var(--accent)', fontFamily: 'var(--mono)', width: 'fit-content', margin: '2px 0' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }}></span>
                    {c.heroDialogue.aiEngineNote}
                  </div>

                  {/* AI Assistant Message */}
                  <div style={{ alignSelf: 'flex-end', maxWidth: '88%', padding: '10px 14px', borderRadius: '12px 12px 2px 12px', background: 'var(--panel2)', border: '1px solid var(--accent)', fontSize: '13px', color: 'var(--fg)' }}>
                    <span style={{ display: 'block', fontSize: '10px', color: 'var(--accent)', fontFamily: 'var(--mono)', marginBottom: '4px' }}>{c.title}</span>
                    {c.heroDialogue.aiReply}
                  </div>
                </div>

                {/* Greeting & Handoff Note Bar */}
                <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px dashed var(--line2)', fontSize: '11px', color: 'var(--fg3)', fontFamily: 'var(--mono)', lineHeight: 1.4 }}>
                  💡 {c.heroDialogue.greetingRuleNote}
                </div>
              </div>
            </div>

            {/* Step Architecture Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '40px' }}>
              {c.archSteps.map((st, i) => (
                <div key={i} className="spec" style={{ padding: '20px' }}>
                  <span className="mono" style={{ fontSize: '11px', color: 'var(--accent)', textTransform: 'uppercase' }}>{st.step}</span>
                  <h3 style={{ fontSize: '15px', color: 'var(--fg)', margin: '6px 0 4px', fontFamily: 'var(--disp)' }}>{st.title}</h3>
                  <p style={{ fontSize: '13px', color: 'var(--fg2)', lineHeight: 1.5 }}>{st.desc}</p>
                </div>
              ))}
            </div>

            {/* AI Model Note */}
            <div style={{ marginTop: '16px', padding: '12px 18px', background: 'var(--bg2)', border: '1px solid var(--line)', borderRadius: '8px', fontSize: '13px', color: 'var(--fg3)', fontFamily: 'var(--mono)' }}>
              ℹ️ {c.aiEngineNote}
            </div>
          </section>

          {/* WHAT WE AUTOMATE */}
          <section id="automate">
            <div className="sec-head">
              <span className="id">01</span>
              <span className="nm">{c.autoTitle}</span>
              <span className="ln" />
            </div>
            <h2>{c.autoTitle}</h2>
            <p className="lead">{c.autoSub}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '32px' }}>
              {c.autoList.map((item, idx) => (
                <span key={idx} className="chip" style={{ fontSize: '13.5px', padding: '10px 16px', background: 'var(--panel)', color: 'var(--fg)' }}>
                  ⚡ {item}
                </span>
              ))}
            </div>
          </section>

          {/* YOUR BUSINESS YOUR KNOWLEDGE YOUR AI */}
          <section id="positioning">
            <div className="sec-head">
              <span className="id">02</span>
              <span className="nm">Customization</span>
              <span className="ln" />
            </div>
            <h2>{c.posTitle}</h2>
            <p className="lead">{c.posSub}</p>
            <div style={{ marginTop: '20px', padding: '14px 20px', background: 'var(--accent-dim)', border: '1px solid var(--line2)', borderRadius: '8px', color: 'var(--accent)', fontWeight: 500 }}>
              {c.posLead}
            </div>

            <div style={{ marginTop: '32px' }}>
              <span className="mono" style={{ display: 'block', marginBottom: '16px' }}>{c.posItemsLabel}</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {c.posItems.map((item, idx) => (
                  <span key={idx} className="chip" style={{ color: 'var(--fg)', borderColor: 'var(--line2)', background: 'var(--panel)' }}>
                    ✓ {item}
                  </span>
                ))}
              </div>
            </div>

            {/* INDUSTRY EXAMPLES */}
            <div style={{ marginTop: '40px' }}>
              <span className="mono" style={{ display: 'block', marginBottom: '16px' }}>{c.posExamplesTitle}</span>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
                {c.posExamples.map((ex, idx) => (
                  <div key={idx} className="spec" style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '16px', color: 'var(--accent)', marginBottom: '8px', fontFamily: 'var(--disp)' }}>{ex.domain}</h3>
                    <p style={{ fontSize: '13.5px', color: 'var(--fg2)', lineHeight: 1.5 }}>{ex.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* WHAT IT DOES / CAPABILITIES */}
          <section id="what">
            <div className="sec-head">
              <span className="id">03</span>
              <span className="nm">Capabilities</span>
              <span className="ln" />
            </div>
            <h2>{c.whatTitle}</h2>
            <p className="lead">{c.whatSub}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '16px', marginTop: '40px' }}>
              {c.features.map((feat, idx) => (
                <div key={idx} className="spec" style={{ padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 600, color: 'var(--fg)', fontFamily: 'var(--disp)' }}>{feat.t}</h3>
                    {feat.tag && <span className="tag" style={{ fontSize: '10px', color: 'var(--accent)', borderColor: 'var(--accent-dim)' }}>{feat.tag}</span>}
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--fg2)', lineHeight: 1.5 }}>{feat.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* HOW IT WORKS */}
          <section id="how">
            <div className="sec-head">
              <span className="id">04</span>
              <span className="nm">Workflow</span>
              <span className="ln" />
            </div>
            <h2>{c.howTitle}</h2>
            <p className="lead">{c.howSub}</p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '40px' }}>
              {c.steps.map((st, i) => (
                <div key={i} className="spec-row" style={{ gridTemplateColumns: '40px 1fr', padding: '18px 24px', background: 'var(--panel)' }}>
                  <span className="n" style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent)' }}>{st.num}</span>
                  <div>
                    <h4 style={{ fontSize: '15px', color: 'var(--fg)', marginBottom: '4px' }}>{st.t}</h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--fg2)' }}>{st.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* HUMAN HANDOFF */}
          <section id="handoff">
            <div className="sec-head">
              <span className="id">05</span>
              <span className="nm">Human Handoff</span>
              <span className="ln" />
            </div>
            <h2>{c.handoffTitle}</h2>
            <p className="lead">{c.handoffSub}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px', marginTop: '40px' }}>
              <div className="spec" style={{ padding: '24px' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--fg)', marginBottom: '16px', fontFamily: 'var(--disp)' }}>{c.handoffCol1.t}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {c.handoffCol1.items.map((it, idx) => (
                    <li key={idx} style={{ fontSize: '14px', color: 'var(--fg2)', display: 'flex', gap: '8px' }}>
                      <span style={{ color: 'var(--accent)' }}>•</span> {it}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="spec" style={{ padding: '24px', borderColor: 'var(--accent)' }}>
                <h3 style={{ fontSize: '18px', color: 'var(--accent)', marginBottom: '16px', fontFamily: 'var(--disp)' }}>{c.handoffCol2.t}</h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {c.handoffCol2.items.map((it, idx) => (
                    <li key={idx} style={{ fontSize: '14px', color: 'var(--fg)', display: 'flex', gap: '8px' }}>
                      <span style={{ color: 'var(--accent)' }}>✓</span> {it}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div style={{ marginTop: '20px', padding: '16px 20px', background: 'var(--panel2)', border: '1px solid var(--line2)', borderRadius: '8px', fontSize: '14px', color: 'var(--fg2)' }}>
              ℹ️ {c.handoffRelay}
            </div>
          </section>

          {/* CRM INTEGRATIONS */}
          <section id="integrations">
            <div className="sec-head">
              <span className="id">06</span>
              <span className="nm">Integrations</span>
              <span className="ln" />
            </div>
            <h2>{c.crmTitle}</h2>
            <p className="lead">{c.crmSub}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px', marginTop: '40px' }}>
              <div className="spec" style={{ padding: '24px' }}>
                <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Bitrix24 CRM</span>
                <h3 style={{ fontSize: '18px', color: 'var(--fg)', marginBottom: '8px' }}>{c.bitrixTitle}</h3>
                <p style={{ fontSize: '14px', color: 'var(--fg2)', marginBottom: '16px' }}>{c.bitrixDesc}</p>
                <div style={{ fontSize: '13px', color: 'var(--accent)' }}>{c.bitrixNote}</div>
              </div>

              <div className="spec" style={{ padding: '24px' }}>
                <span className="tag" style={{ marginBottom: '12px', display: 'inline-block' }}>Open Architecture</span>
                <h3 style={{ fontSize: '18px', color: 'var(--fg)', marginBottom: '8px' }}>{c.archTitle}</h3>
                <p style={{ fontSize: '14px', color: 'var(--fg2)', marginBottom: '16px' }}>{c.archDesc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {c.crmItems.map((item, idx) => (<span key={idx} className="chip">{item}</span>))}
                </div>
              </div>
            </div>
          </section>

          {/* PRICING */}
          <section id="pricing">
            <div className="sec-head">
              <span className="id">07</span>
              <span className="nm">Pricing & Tiers</span>
              <span className="ln" />
            </div>
            <h2>{c.pricingTitle}</h2>
            <p className="lead">{c.pricingSub}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '24px', marginTop: '40px' }}>
              {/* Starter */}
              <div className="spec" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '20px', color: 'var(--fg)', marginBottom: '6px' }}>{c.pricingStarter.t}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--fg2)', marginBottom: '20px' }}>{c.pricingStarter.d}</p>
                  <div className="mono" style={{ fontSize: '16px', color: 'var(--fg)', marginBottom: '20px' }}>Custom Quote</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {c.pricingStarter.f.map((f, i) => (<li key={i} style={{ fontSize: '13.5px', color: 'var(--fg2)' }}>✓ {f}</li>))}
                  </ul>
                </div>
                <button className="btn btn-ghost" style={{ width: '100%', marginTop: '24px' }} onClick={() => setDemoOpen(true)}>{c.ctaConsult}</button>
              </div>

              {/* Business (Featured) */}
              <div className="spec" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderColor: 'var(--accent)', background: 'var(--panel2)' }}>
                <div>
                  <span className="tag" style={{ marginBottom: '12px', display: 'inline-block', color: 'var(--accent)', borderColor: 'var(--accent)' }}>{c.pricingBiz.badge}</span>
                  <h3 style={{ fontSize: '20px', color: 'var(--fg)', marginBottom: '6px' }}>{c.pricingBiz.t}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--fg2)', marginBottom: '20px' }}>{c.pricingBiz.d}</p>
                  <div className="mono" style={{ fontSize: '16px', color: 'var(--accent)', marginBottom: '20px' }}>Tailored Setup</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {c.pricingBiz.f.map((f, i) => (<li key={i} style={{ fontSize: '13.5px', color: 'var(--fg)' }}>✓ {f}</li>))}
                  </ul>
                </div>
                <button className="btn btn-pri" style={{ width: '100%', marginTop: '24px' }} onClick={() => setDemoOpen(true)}>{c.ctaStart}</button>
              </div>

              {/* Custom */}
              <div className="spec" style={{ padding: '28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '20px', color: 'var(--fg)', marginBottom: '6px' }}>{c.pricingCustom.t}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--fg2)', marginBottom: '20px' }}>{c.pricingCustom.d}</p>
                  <div className="mono" style={{ fontSize: '16px', color: 'var(--fg)', marginBottom: '20px' }}>Enterprise Plan</div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {c.pricingCustom.f.map((f, i) => (<li key={i} style={{ fontSize: '13.5px', color: 'var(--fg2)' }}>✓ {f}</li>))}
                  </ul>
                </div>
                <button className="btn btn-ghost" style={{ width: '100%', marginTop: '24px' }} onClick={() => setDemoOpen(true)}>{c.ctaConsult}</button>
              </div>
            </div>
          </section>

          {/* UNIVERSAL CONSULTATION MODAL FORM */}
          {demoOpen && (
            <div
              onClick={(e) => {
                if (e.target === e.currentTarget) setDemoOpen(false);
              }}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.8)',
                backdropFilter: 'blur(8px)',
                zIndex: 100,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '16px',
                overflowY: 'auto',
              }}
            >
              <div
                className="spec modal-box"
                style={{
                  maxWidth: '500px',
                  width: '100%',
                  position: 'relative',
                  background: 'var(--panel)',
                  boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
                }}
              >
                <button
                  type="button"
                  onClick={() => setDemoOpen(false)}
                  style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'var(--bg2)',
                    border: '1px solid var(--line2)',
                    color: 'var(--fg)',
                    fontSize: '18px',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10,
                  }}
                  aria-label="Close modal"
                >
                  ✕
                </button>

                <h3 style={{ fontSize: '22px', color: 'var(--fg)', marginBottom: '8px' }}>{c.formTitle}</h3>
                <p style={{ fontSize: '14px', color: 'var(--fg2)', marginBottom: '24px' }}>{c.formSub}</p>

                <form onSubmit={submitDemoRequest} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div>
                    <label style={{ fontSize: '12px', color: 'var(--fg3)', textTransform: 'uppercase', fontFamily: 'var(--mono)', display: 'block', marginBottom: '4px' }}>{c.formFields.name} *</label>
                    <input type="text" required value={form.name} onChange={upd('name')} placeholder={c.formFields.namePh} style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', background: 'var(--bg)', border: '1px solid var(--line2)', color: 'var(--fg)', outline: 'none' }} />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', color: 'var(--fg3)', textTransform: 'uppercase', fontFamily: 'var(--mono)', display: 'block', marginBottom: '4px' }}>{c.formFields.company} *</label>
                    <input type="text" required value={form.company} onChange={upd('company')} placeholder={c.formFields.companyPh} style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', background: 'var(--bg)', border: '1px solid var(--line2)', color: 'var(--fg)', outline: 'none' }} />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', color: 'var(--fg3)', textTransform: 'uppercase', fontFamily: 'var(--mono)', display: 'block', marginBottom: '4px' }}>{c.formFields.contact} *</label>
                    <input type="text" required value={form.contact} onChange={upd('contact')} placeholder={c.formFields.contactPh} style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', background: 'var(--bg)', border: '1px solid var(--line2)', color: 'var(--fg)', outline: 'none' }} />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', color: 'var(--fg3)', textTransform: 'uppercase', fontFamily: 'var(--mono)', display: 'block', marginBottom: '4px' }}>{c.formFields.bizType}</label>
                    <input type="text" value={form.bizType} onChange={upd('bizType')} placeholder={c.formFields.bizTypePh} style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', background: 'var(--bg)', border: '1px solid var(--line2)', color: 'var(--fg)', outline: 'none' }} />
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', color: 'var(--fg3)', textTransform: 'uppercase', fontFamily: 'var(--mono)', display: 'block', marginBottom: '4px' }}>{c.formFields.automate}</label>
                    <textarea rows={3} value={form.automate} onChange={upd('automate')} placeholder={c.formFields.automatePh} style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', background: 'var(--bg)', border: '1px solid var(--line2)', color: 'var(--fg)', outline: 'none', resize: 'vertical' }} />
                  </div>

                  <button type="submit" className="btn btn-pri" style={{ width: '100%', marginTop: '8px' }}>
                    {c.formFields.submit}
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer content={mainContent} locale={locale} />
    </>
  );
}
