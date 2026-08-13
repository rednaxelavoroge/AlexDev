'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { locales, langLabels } from '../lib/i18n';
import { getContent } from '../content';
import { showroomAIContent } from '../content/showroom-ai';
import Footer from './Footer';
import MobileNav from './MobileNav';

export default function ShowroomAIPage({ locale }) {
  const router = useRouter();
  const [theme, setTheme] = useState('light');
  const [demoOpen, setDemoOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('furniture');
  const [form, setForm] = useState({
    name: '',
    company: '',
    contact: '',
    bizType: '',
    automate: '',
  });

  const lang = locale === 'ru' ? 'ru' : 'en';
  const c = showroomAIContent[lang] || showroomAIContent.en;
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
    router.push(`/${targetLang}/showroom-ai`);
  }

  function submitConsultationRequest(e) {
    e.preventDefault();
    const text =
      (lang === 'ru' ? 'Showroom AI — Запрос консультации' : 'Showroom AI — Consultation Request') +
      '\n' + (lang === 'ru' ? 'Имя: ' : 'Name: ') + (form.name.trim() || '—') +
      '\n' + (lang === 'ru' ? 'Компания: ' : 'Company: ') + (form.company.trim() || '—') +
      '\n' + (lang === 'ru' ? 'Контакт: ' : 'Contact: ') + (form.contact.trim() || '—') +
      '\n' + (lang === 'ru' ? 'Отрасль: ' : 'Industry: ') + (form.bizType.trim() || '—') +
      '\n' + (lang === 'ru' ? 'Детали: ' : 'Details: ') + (form.automate.trim() || '—');

    window.open(
      'https://wa.me/' + mainContent.contact.whatsapp + '?text=' + encodeURIComponent(text),
      '_blank'
    );
    setDemoOpen(false);
  }

  const showroomLinks = [
    { id: '#industries', label: c.nav.industries },
    { id: '#capabilities', label: c.nav.capabilities },
    { id: '#workflow', label: c.nav.workflow },
    { id: '#architecture', label: c.nav.architecture },
    { id: '#pricing', label: c.nav.pricing },
  ];

  return (
    <>
      <div className="rails"><div /></div>

      {/* Navigation Header */}
      <MobileNav locale={locale} content={mainContent} isSubpage={true} customLinks={showroomLinks} />

      <main style={{ overflowX: 'hidden' }}>
        <div className="wrap">
          
          {/* HERO SECTION */}
          <section className="hero">
            <div className="hero-grid" style={{ alignItems: 'center' }}>
              <div>
                <span className="eyebrow"><span className="dot" />{c.badge}</span>
                <h1>SHOWROOM <span className="mut">AI</span></h1>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '13px', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '8px' }}>
                  {c.tagline}
                </div>
                <p className="sub">{c.subtitle}</p>
                <div className="hero-cta">
                  <a className="btn btn-pri" href="https://showroom-ai.pro/" target="_blank" rel="noopener">
                    {c.ctaExplore} →
                  </a>
                  <button className="btn btn-ghost" onClick={() => setDemoOpen(true)}>
                    {c.ctaConsult}
                  </button>
                </div>
                <div className="hero-meta">
                  {c.heroMeta.map((m, i) => (
                    <span key={i}><i />{m}</span>
                  ))}
                </div>
              </div>

              {/* Engineering Core Visual Scene */}
              <div className="spec">
                <div className="spec-top">
                  <span className="t">{c.heroSpec.title}</span>
                  <span className="s">{c.heroSpec.status}</span>
                </div>
                {c.heroSpec.rows.map((r, i) => (
                  <div className={'spec-row' + (i === 1 || i === 3 ? ' gate' : '')} key={i}>
                    <span className="n">{r.n}</span>
                    <span className="l">{r.l}</span>
                    <span className="tag">{r.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* INDUSTRIES SECTION */}
          <section id="industries">
            <div className="sec-head">
              <span className="id">01</span>
              <span className="nm">{c.nav.industries}</span>
              <span className="ln" />
            </div>
            <h2>{c.industriesTitle}</h2>
            <p className="lead">{c.industriesSub}</p>

            {/* Industry Selector Tabs (Touch-scrollable on mobile) */}
            <div style={{ marginTop: '32px', display: 'flex', gap: '10px', overflowX: 'auto', paddingBottom: '8px', WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory' }}>
              {c.industries.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => setActiveTab(ind.id)}
                  className="btn"
                  style={{
                    fontSize: '13px',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    background: activeTab === ind.id ? 'var(--fg)' : 'var(--bg2)',
                    color: activeTab === ind.id ? 'var(--bg)' : 'var(--fg2)',
                    borderColor: activeTab === ind.id ? 'var(--fg)' : 'var(--line2)',
                    fontWeight: activeTab === ind.id ? 600 : 400,
                    flexShrink: 0,
                    scrollSnapAlign: 'start',
                  }}
                >
                  {ind.name}
                </button>
              ))}
            </div>

            {/* Selected Industry Card */}
            {c.industries.filter((ind) => ind.id === activeTab).map((ind) => (
              <div
                key={ind.id}
                style={{
                  marginTop: '20px',
                  padding: '24px',
                  background: 'var(--panel)',
                  border: '1px solid var(--line2)',
                  borderRadius: '14px',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
                  gap: '24px',
                  alignItems: 'center',
                }}
              >
                <div>
                  <span className="mono" style={{ color: 'var(--accent)' }}>INDUSTRY CONFIGURATION</span>
                  <h3 style={{ fontFamily: 'var(--disp)', fontSize: '24px', margin: '10px 0' }}>{ind.title}</h3>
                  <p style={{ color: 'var(--fg2)', fontSize: '15px', lineHeight: 1.6 }}>{ind.desc}</p>
                </div>
                <div>
                  <div style={{ fontSize: '12px', fontFamily: 'var(--mono)', color: 'var(--fg3)', marginBottom: '10px' }}>SPECIFIC FIELDS & PARAMETERS</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {ind.tags.map((t, idx) => (
                      <span key={idx} className="chip" style={{ background: 'var(--bg2)', borderColor: 'var(--accent-dim)', color: 'var(--fg)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Platform Architecture Flow Diagram */}
            <div style={{ marginTop: '48px' }}>
              <h3 style={{ fontFamily: 'var(--disp)', fontSize: '20px', marginBottom: '20px' }}>{c.archFlowTitle}</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '12px' }}>
                {c.archFlow.map((flow, i) => (
                  <div key={i} style={{ padding: '18px 14px', background: 'var(--bg2)', border: '1px solid var(--line)', borderRadius: '10px' }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--accent)' }}>{flow.step}</div>
                    <div style={{ fontFamily: 'var(--disp)', fontWeight: 600, fontSize: '14px', marginTop: '6px' }}>{flow.name}</div>
                    <div style={{ fontSize: '12px', color: 'var(--fg3)', marginTop: '4px' }}>{flow.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CAPABILITIES SECTION */}
          <section id="capabilities">
            <div className="sec-head">
              <span className="id">02</span>
              <span className="nm">{c.nav.capabilities}</span>
              <span className="ln" />
            </div>
            <h2>{c.capabilitiesTitle}</h2>
            <p className="lead">{c.capabilitiesSub}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '34px' }}>
              {c.capabilities.map((cap, i) => (
                <div key={i} className="pcard" style={{ minHeight: 'auto' }}>
                  <span className="pn">0{i + 1}</span>
                  <h3 style={{ fontSize: '17px', margin: '14px 0 8px' }}>{cap.t}</h3>
                  <p style={{ fontSize: '13.5px' }}>{cap.d}</p>
                </div>
              ))}
            </div>
          </section>

          {/* WORKFLOW SECTION */}
          <section id="workflow">
            <div className="sec-head">
              <span className="id">03</span>
              <span className="nm">{c.nav.workflow}</span>
              <span className="ln" />
            </div>
            <h2>{c.workflowTitle}</h2>
            <p className="lead">{c.workflowSub}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '14px', marginTop: '34px' }}>
              {c.workflowSteps.map((step, i) => (
                <div key={i} style={{ padding: '20px', background: 'var(--panel)', border: '1px solid var(--line2)', borderRadius: '12px', position: 'relative' }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--accent)', display: 'block', marginBottom: '8px' }}>
                    STEP {step.num}
                  </span>
                  <div style={{ fontFamily: 'var(--disp)', fontWeight: 600, fontSize: '15px', color: 'var(--fg)' }}>
                    {step.label}
                  </div>
                  <p style={{ fontSize: '12.5px', color: 'var(--fg2)', marginTop: '8px', lineHeight: 1.4 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '24px', padding: '16px 20px', background: 'var(--accent-dim)', border: '1px solid rgba(224,168,94,0.3)', borderRadius: '10px', fontSize: '13.5px', color: 'var(--fg)' }}>
              <strong style={{ color: 'var(--accent)' }}>Deterministic Engine: </strong>
              Showroom AI operates within your specific catalog data, pricing formulas, and business constraints. The AI processes context; exact pricing and validation logic are strictly verified.
            </div>
          </section>

          {/* MULTI-TENANT ARCHITECTURE */}
          <section id="architecture">
            <div className="sec-head">
              <span className="id">04</span>
              <span className="nm">{c.nav.architecture}</span>
              <span className="ln" />
            </div>
            <h2>{c.multitenantTitle}</h2>
            <p className="lead">{c.multitenantLead}</p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '18px', marginTop: '34px' }}>
              {c.multitenantExamples.map((ex, i) => (
                <div key={i} style={{ padding: '24px', background: 'var(--bg2)', border: '1px solid var(--line)', borderRadius: '12px' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: '11px', color: 'var(--accent)', textTransform: 'uppercase' }}>ISOLATED TENANT CONTEXT</div>
                  <h3 style={{ fontFamily: 'var(--disp)', fontSize: '18px', margin: '12px 0 8px' }}>{ex.title}</h3>
                  <p style={{ fontSize: '13.5px', color: 'var(--fg2)', lineHeight: 1.55 }}>{ex.text}</p>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '28px', textAlign: 'center', fontFamily: 'var(--mono)', fontSize: '12px', color: 'var(--fg3)' }}>
              ✦ {c.multitenantNote}
            </div>
          </section>

          {/* PRICING & IMPLEMENTATION SECTION */}
          <section id="pricing">
            <div className="sec-head">
              <span className="id">05</span>
              <span className="nm">{c.nav.pricing}</span>
              <span className="ln" />
            </div>
            <h2>{c.pricingTitle}</h2>
            <p className="lead">{c.pricingSub}</p>

            <div style={{ marginTop: '34px', padding: '36px', background: 'var(--panel)', border: '1px solid var(--line2)', borderRadius: '16px', maxWidth: '800px' }}>
              <p style={{ fontSize: '16px', fontWeight: 500, color: 'var(--fg)' }}>{c.pricingDesc}</p>
              
              <ul style={{ marginTop: '18px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '12px', listStyle: 'none' }}>
                {c.pricingPoints.map((pt, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--fg2)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }}></span>
                    {pt}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: '36px', display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                <a className="btn btn-pri" href="https://showroom-ai.pro/" target="_blank" rel="noopener">
                  {c.pricingCtaPrimary} →
                </a>
                <button className="btn btn-ghost" onClick={() => setDemoOpen(true)}>
                  {c.pricingCtaSecondary}
                </button>
              </div>
            </div>
          </section>

        </div>

        {/* Consultation Modal */}
        {demoOpen && (
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) setDemoOpen(false);
            }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'rgba(0,0,0,0.8)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px',
              overflowY: 'auto',
            }}
          >
            <div
              className="modal-box"
              style={{
                background: 'var(--panel)',
                border: '1px solid var(--line2)',
                borderRadius: '16px',
                maxWidth: '520px',
                width: '100%',
                position: 'relative',
                boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              }}
            >
              <button
                type="button"
                onClick={() => setDemoOpen(false)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
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
                  transition: 'all 0.15s ease',
                  zIndex: 10,
                }}
                aria-label="Close modal"
              >
                ✕
              </button>
              <h3 style={{ fontFamily: 'var(--disp)', fontSize: '22px' }}>{c.formTitle}</h3>
              <p style={{ fontSize: '13.5px', color: 'var(--fg2)', marginTop: '6px', marginBottom: '20px' }}>{c.formSub}</p>

              <form onSubmit={submitConsultationRequest} style={{ display: 'grid', gap: '14px' }}>
                <div className="field">
                  <label>{c.formFields.name}</label>
                  <input type="text" placeholder={c.formFields.namePh} value={form.name} onChange={upd('name')} required />
                </div>
                <div className="field">
                  <label>{c.formFields.company}</label>
                  <input type="text" placeholder={c.formFields.companyPh} value={form.company} onChange={upd('company')} />
                </div>
                <div className="field">
                  <label>{c.formFields.contact}</label>
                  <input type="text" placeholder={c.formFields.contactPh} value={form.contact} onChange={upd('contact')} required />
                </div>
                <div className="field">
                  <label>{c.formFields.bizType}</label>
                  <input type="text" placeholder={c.formFields.bizTypePh} value={form.bizType} onChange={upd('bizType')} />
                </div>
                <div className="field">
                  <label>{c.formFields.automate}</label>
                  <textarea placeholder={c.formFields.automatePh} value={form.automate} onChange={upd('automate')} />
                </div>
                <button type="submit" className="btn btn-pri" style={{ justifyContent: 'center', marginTop: '6px' }}>
                  {c.formFields.submit}
                </button>
              </form>
            </div>
          </div>
        )}

        <Footer content={mainContent} locale={locale} />
      </main>
    </>
  );
}
