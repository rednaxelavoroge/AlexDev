'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { locales, langLabels } from '../lib/i18n';
import { aiBusinessAssistantContent } from '../content/ai-business-assistant';

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
      'AI Business Assistant — Demo Request' +
      '\nName: ' + (form.name.trim() || '—') +
      '\nCompany: ' + (form.company.trim() || '—') +
      '\nContact: ' + (form.contact.trim() || '—') +
      '\nBusiness type: ' + (form.bizType.trim() || '—') +
      '\nAutomation goals: ' + (form.automate.trim() || '—');

    window.open(
      'https://wa.me/37281952565?text=' + encodeURIComponent(text),
      '_blank'
    );
    setDemoOpen(false);
  }

  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <div className="rails"><div /></div>

      <nav>
        <div className="nav-in">
          <a className="logo" href={`/${locale}`}>
            <span className="mk" />AlexDev
          </a>
          <div className="nav-links">
            <a href={`/${locale}/ai-business-assistant`} style={{ color: 'var(--accent)', fontWeight: 600 }}>
              AI Business Assistant
            </a>
            <a href="#what">Capabilities</a>
            <a href="#how">How it works</a>
            <a href="#positioning">Your Business</a>
            <a href="#integrations">Integrations</a>
            <a href="#pricing">Pricing</a>
          </div>
          <div className="nav-cta">
            <select className="lang-select" aria-label="Language" value={langLabels[locale] || 'EN'} onChange={changeLang}>
              {locales.map((l) => (<option key={l} value={langLabels[l]}>{langLabels[l]}</option>))}
            </select>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
              <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
                <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M8 1a7 7 0 0 1 0 14z" fill="currentColor" />
              </svg>
            </button>
            <button className="btn btn-pri" onClick={() => setDemoOpen(true)}>
              {c.ctaDemo}
            </button>
          </div>
        </div>
      </nav>

      <main>
        <div className="wrap">
          {/* HERO SECTION */}
          <section className="hero">
            <div className="hero-grid">
              <div>
                <span className="eyebrow"><span className="dot" />{c.badge}</span>
                <h1>AI Business <span className="mut">Assistant</span></h1>
                <p className="sub">{c.subtitle}</p>
                <div className="hero-cta">
                  <button className="btn btn-pri" onClick={() => setDemoOpen(true)}>
                    {c.ctaDemo}
                  </button>
                  <button className="btn btn-ghost" onClick={() => setDemoOpen(true)}>
                    {c.ctaStart}
                  </button>
                </div>
                <div className="hero-meta">
                  <span><i></i>Meta Cloud API v23.0</span>
                  <span><i></i>Claude Haiku 4.5</span>
                  <span><i></i>Bitrix24 CRM</span>
                </div>
              </div>

              {/* Technical Diagram */}
              <div className="spec" style={{ padding: 0 }}>
                <div className="spec-top">
                  <span className="t">WhatsApp AI Architecture</span>
                  <span className="s">Production Ready</span>
                </div>
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div className="spec-row" style={{ gridTemplateColumns: '1fr' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '11px', color: 'var(--accent)', textTransform: 'uppercase' }}>Step 1 • Customer Message</span>
                      <span className="tag">Meta Cloud API</span>
                    </div>
                    <p style={{ color: 'var(--fg2)', fontSize: '13px', marginTop: '4px' }}>Inbound WhatsApp message received via direct Webhook without BSP markup.</p>
                  </div>

                  <div className="spec-row gate" style={{ gridTemplateColumns: '1fr' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '11px', color: 'var(--accent)', textTransform: 'uppercase' }}>Step 2 • Rules & Knowledge Engine</span>
                      <span className="tag">AI + Supabase</span>
                    </div>
                    <p style={{ color: 'var(--fg)', fontSize: '13px', marginTop: '4px' }}>Checks catalog, price rules, company FAQs, tone of voice & client history.</p>
                  </div>

                  <div className="spec-row" style={{ gridTemplateColumns: '1fr' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '11px', color: 'var(--fg3)', textTransform: 'uppercase' }}>Step 3 • Answer & Manager Handoff</span>
                      <span className="tag">Bitrix24 / Open Lines</span>
                    </div>
                    <p style={{ color: 'var(--fg2)', fontSize: '13px', marginTop: '4px' }}>Sends 24/7 instant response or relays conversation to human manager.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* WHAT IT DOES */}
          <section id="what">
            <div className="sec-head">
              <span className="id">01</span>
              <span className="nm">Capabilities</span>
              <span className="ln" />
            </div>
            <h2>{c.whatTitle}</h2>
            <p className="lead">{c.whatSub}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px', marginTop: '40px' }}>
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
              <span className="id">02</span>
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

          {/* YOUR BUSINESS YOUR KNOWLEDGE YOUR AI */}
          <section id="positioning">
            <div className="sec-head">
              <span className="id">03</span>
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
          </section>

          {/* WHATSAPP + AI */}
          <section>
            <div className="sec-head">
              <span className="id">04</span>
              <span className="nm">WhatsApp Native</span>
              <span className="ln" />
            </div>
            <h2>{c.waTitle}</h2>
            <p className="lead">{c.waSub}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '40px' }}>
              {c.waCards.map((card, idx) => (
                <div key={idx} className="spec" style={{ padding: '24px' }}>
                  <h3 style={{ fontSize: '17px', color: 'var(--fg)', marginBottom: '8px', fontFamily: 'var(--disp)' }}>{card.t}</h3>
                  <p style={{ fontSize: '14px', color: 'var(--fg2)' }}>{card.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* HUMAN HANDOFF */}
          <section>
            <div className="sec-head">
              <span className="id">05</span>
              <span className="nm">Human Handoff</span>
              <span className="ln" />
            </div>
            <h2>{c.handoffTitle}</h2>
            <p className="lead">{c.handoffSub}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '40px' }}>
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

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px', marginTop: '40px' }}>
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

          {/* BUSINESS AUTOMATION */}
          <section>
            <div className="sec-head">
              <span className="id">07</span>
              <span className="nm">Automation Scope</span>
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

          {/* WHO IT IS FOR */}
          <section>
            <div className="sec-head">
              <span className="id">08</span>
              <span className="nm">Industries</span>
              <span className="ln" />
            </div>
            <h2>{c.whoTitle}</h2>
            <p className="lead">{c.whoSub}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginTop: '32px' }}>
              {c.whoCards.map((ind, idx) => (
                <div key={idx} className="spec-row" style={{ padding: '14px 18px', background: 'var(--panel)' }}>
                  <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--fg)' }}>{ind}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '20px', padding: '16px 20px', background: 'var(--accent-dim)', border: '1px solid var(--line2)', borderRadius: '8px', textAlign: 'center', fontWeight: 600, color: 'var(--accent)' }}>
              ✨ {c.whoUniversal}
            </div>
          </section>

          {/* SECURITY & CONTROL */}
          <section>
            <div className="sec-head">
              <span className="id">09</span>
              <span className="nm">Control</span>
              <span className="ln" />
            </div>
            <h2>{c.secTitle}</h2>
            <p className="lead">{c.secSub}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '40px' }}>
              {c.secItems.map((item, idx) => (
                <div key={idx} className="spec" style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '16px', color: 'var(--fg)', marginBottom: '6px' }}>{item.t}</h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--fg2)' }}>{item.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* TECH STACK */}
          <section>
            <div className="sec-head">
              <span className="id">10</span>
              <span className="nm">Technology</span>
              <span className="ln" />
            </div>
            <h2>{c.techTitle}</h2>
            <p className="lead">{c.techSub}</p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '32px' }}>
              {c.techItems.map((item, idx) => (
                <span key={idx} className="chip" style={{ fontSize: '13px', color: 'var(--fg)' }}>
                  🛠️ {item}
                </span>
              ))}
            </div>
          </section>

          {/* IMPLEMENTATION PROCESS */}
          <section>
            <div className="sec-head">
              <span className="id">11</span>
              <span className="nm">Implementation</span>
              <span className="ln" />
            </div>
            <h2>{c.implTitle}</h2>
            <p className="lead">{c.implSub}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginTop: '40px' }}>
              {c.implSteps.map((st, idx) => (
                <div key={idx} className="spec" style={{ padding: '20px' }}>
                  <h3 style={{ fontSize: '15px', color: 'var(--accent)', marginBottom: '6px' }}>{st.t}</h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--fg2)' }}>{st.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* PRICING */}
          <section id="pricing">
            <div className="sec-head">
              <span className="id">12</span>
              <span className="nm">Pricing & Tiers</span>
              <span className="ln" />
            </div>
            <h2>{c.pricingTitle}</h2>
            <p className="lead">{c.pricingSub}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '40px' }}>
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
                <button className="btn btn-ghost" style={{ width: '100%', marginTop: '24px' }} onClick={() => setDemoOpen(true)}>{c.ctaDemo}</button>
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
                <button className="btn btn-ghost" style={{ width: '100%', marginTop: '24px' }} onClick={() => setDemoOpen(true)}>{c.ctaDemo}</button>
              </div>
            </div>
          </section>

          {/* START / DEMO MODAL FORM */}
          {demoOpen && (
            <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
              <div className="spec" style={{ maxWidth: '500px', width: '100%', padding: '32px', position: 'relative', background: 'var(--panel)' }}>
                <button onClick={() => setDemoOpen(false)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', color: 'var(--fg2)', fontSize: '20px', cursor: 'pointer' }}>✕</button>

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

      <footer>
        <div className="wrap">
          <div className="copy">
            <span>© 2024–2026 AlexDev · AI-Native Engineering</span>
            <a href={`/${locale}`}>alex-dev.pro</a>
          </div>
        </div>
      </footer>
    </>
  );
}
