'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { locales, langLabels } from '../lib/i18n';

export default function SiteV2({ content: c, locale }) {
  const router = useRouter();
  const [theme, setTheme] = useState('light');
  const [form, setForm] = useState({
    name: '', contact: '', type: c.final.form.typeOptions[0], msg: '',
  });

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', next);
    }
  }

  function changeLang(e) {
    router.push(`/${e.target.value.toLowerCase()}/v2`);
  }

  function submitBrief(e) {
    e.preventDefault();
    const t =
      'New project brief — AlexDev' +
      '\nName: ' + (form.name.trim() || '—') +
      '\nContact: ' + (form.contact.trim() || '—') +
      '\nProject type: ' + form.type +
      '\nDetails: ' + (form.msg.trim() || '—');
    window.open(
      'https://wa.me/' + c.contact.whatsapp + '?text=' + encodeURIComponent(t),
      '_blank'
    );
  }

  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  return (
    <>
      <div className="rails"><div /></div>

      <nav>
        <div className="nav-in">
          <a className="logo" href="#top"><span className="mk" />AlexDev</a>
          <div className="nav-links">
            <a href={`/${locale}/ai-business-assistant`}>{c.nav.product || 'AI Business Assistant'}</a>
            <a href="#framework">{c.nav.framework}</a>
            <a href="#engineer">{c.nav.engineer}</a>
            <a href="#work">{c.nav.work}</a>
            <a href="#aes">{c.nav.aes}</a>
            <a href="#engage">{c.nav.engage}</a>
            <a href="#faq">{c.nav.faq}</a>
          </div>
          <div className="nav-cta">
            <select className="lang-select" aria-label="Language" value={langLabels[locale]} onChange={changeLang}>
              {locales.map((l) => (<option key={l} value={langLabels[l]}>{langLabels[l]}</option>))}
            </select>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
              <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
                <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
                <path d="M8 1a7 7 0 0 1 0 14z" fill="currentColor" />
              </svg>
            </button>
            <a className="btn btn-pri" href="#start">{c.nav.cta}</a>
          </div>
        </div>
      </nav>

      <main>
        <div className="wrap">

          <section className="hero" id="top">
            <div className="hero-grid">
              <div>
                <span className="eyebrow"><span className="dot" />{c.hero.eyebrow}</span>
                <h1>{c.hero.titleLine1}<br />{c.hero.titleLine2} <span className="mut">{c.hero.titleMuted}</span></h1>
                <p className="sub">{c.hero.sub}</p>
                <div className="hero-cta">
                  <a className="btn btn-pri" href="#start">{c.hero.ctaPrimary}</a>
                  <a className="btn btn-ghost" href="#aes">{c.hero.ctaSecondary}</a>
                </div>
                <div className="hero-meta">
                  {c.hero.meta.map((m, i) => (<span key={i}><i />{m}</span>))}
                </div>
              </div>
              <div className="spec">
                <div className="spec-top"><span className="t">{c.hero.spec.title}</span><span className="s">{c.hero.spec.status}</span></div>
                {c.hero.spec.rows.map((r, i) => (
                  <div className={'spec-row' + (r.gate ? ' gate' : '')} key={i}>
                    <span className="n">{r.n}</span><span className="l">{r.l}</span><span className="tag">{r.tag}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="trust">
            <div className="sec-head"><span className="id">02</span><span className="nm">{c.trust.id}</span><span className="ln" /></div>
            <div className="metrics">
              {c.trust.metrics.map((m, i) => (
                <div className="metric" key={i}>
                  <div className="v">{m.v}</div>
                  <div className="k">{m.k}</div>
                  <div className="src">{m.src}</div>
                </div>
              ))}
            </div>
            <div className="stack">
              <span className="lbl">{c.trust.stackLabel}</span>
              {c.trust.stack.map((s, i) => (<span className="chip" key={i}>{s}</span>))}
            </div>
          </section>

          <section id="framework">
            <div className="sec-head"><span className="id">03</span><span className="nm">{c.framework.id}</span><span className="ln" /></div>
            <h2>{c.framework.h2}</h2>
            <p className="lead">{c.framework.lead}</p>
            <div className="prin">
              {c.framework.cards.map((card, i) => (
                <div className="pcard" key={i}>
                  <span className="pn">{card.n}</span>
                  <h3>{card.h}</h3>
                  <p>{card.p}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="engineer">
            <div className="sec-head"><span className="id">04</span><span className="nm">{c.engineer.id}</span><span className="ln" /></div>
            <h2>{c.engineer.h2}</h2>
            <p className="lead">{c.engineer.lead}</p>
            <div className="lanes">
              <div className="lane eng">
                <div className="lane-h"><span className="lt">{c.engineer.laneEng.title}</span><span className="lk">{c.engineer.laneEng.kind}</span></div>
                <div className="lane-b">
                  {c.engineer.laneEng.rows.map((r, i) => (
                    <div className="lrow" key={i}><span className="li">{r.li}</span><span className="ld">{r.ld}</span></div>
                  ))}
                </div>
              </div>
              <div className="lane quick">
                <div className="lane-h"><span className="lt">{c.engineer.laneQuick.title}</span><span className="lk">{c.engineer.laneQuick.kind}</span></div>
                <div className="lane-b">
                  {c.engineer.laneQuick.rows.map((r, i) => (
                    <div className="lrow" key={i}><span className="li">{r.li}</span><span className="ld">{r.ld}</span></div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="work">
            <div className="sec-head"><span className="id">05</span><span className="nm">{c.work.id}</span><span className="ln" /></div>
            <h2>{c.work.h2}</h2>
            <p className="lead">{c.work.lead}</p>
            <div className="work">
              {c.work.projects.map((p, i) => (
                <div className="wcard" key={i}>
                  <div className="wtop"><span className="dm">{p.dm}</span><span className="yr">{p.yr}</span></div>
                  <div className="wbody">
                    <h3>{p.name}</h3>
                    <a className="url" href={p.href} target="_blank" rel="noopener">{p.url}</a>
                    <p>{p.desc}</p>
                  </div>
                  <div className="wmet">
                    {p.metrics.map((m, j) => (
                      <div key={j}><div className="mv">{m.mv}</div><div className="mk">{m.mk}</div></div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="aes">
            <div className="sec-head"><span className="id">06</span><span className="nm">{c.aes.id}</span><span className="ln" /></div>
            <h2>{c.aes.h2}</h2>
            <p className="lead">{c.aes.lead}</p>
            <div className="aes">
              {c.aes.stages.map((s, i) => (
                <div className={'stage' + (s.gate ? ' gate' : '')} key={i}>
                  <span className="sn">{s.sn}</span>
                  <h4>{s.h}</h4>
                  <span className={'role ' + s.type}>{s.role}</span>
                </div>
              ))}
            </div>
            <div className="aes-note">
              {c.aes.notes.map((n, i) => (<span key={i}><b>{n.b}</b>{n.t}</span>))}
            </div>
          </section>

          <section id="engage">
            <div className="sec-head"><span className="id">07</span><span className="nm">{c.engage.id}</span><span className="ln" /></div>
            <h2>{c.engage.h2}</h2>
            <p className="lead">{c.engage.lead}</p>
            <div className="eng-grid">
              {[c.engage.cardA, c.engage.cardB].map((card, i) => (
                <div className={'ecard' + (i === 1 ? ' b' : '')} key={i}>
                  <span className="ek">{card.k}</span>
                  <h3>{card.h}</h3>
                  <p className="ed">{card.d}</p>
                  <div className="plist">
                    {card.rows.map((r, j) => (
                      <div className="prow" key={j}><span className="pi">{r.pi}</span><span className={'pp' + (r.scope ? ' scope' : '')}>{r.pp}</span></div>
                    ))}
                  </div>
                  <div className="foot">{card.foot}</div>
                </div>
              ))}
            </div>
          </section>

          <section id="faq">
            <div className="sec-head"><span className="id">08</span><span className="nm">{c.faq.id}</span><span className="ln" /></div>
            <h2>{c.faq.h2}</h2>
            <div className="faq">
              {c.faq.items.map((it, i) => (
                <details key={i} open={it.open || false}>
                  <summary>{it.q}<span className="pl">+</span></summary>
                  <p>{it.a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="final" id="start">
            <div className="sec-head" style={{ justifyContent: 'center', marginBottom: '28px' }}><span className="id">09</span><span className="nm">{c.final.id}</span></div>
            <h2>{c.final.h2}</h2>
            <p>{c.final.p}</p>
            <form className="form" onSubmit={submitBrief}>
              <div className="row">
                <div className="field"><label>{c.final.form.name}</label><input type="text" placeholder={c.final.form.namePh} value={form.name} onChange={upd('name')} /></div>
                <div className="field"><label>{c.final.form.contact}</label><input type="text" placeholder={c.final.form.contactPh} value={form.contact} onChange={upd('contact')} /></div>
              </div>
              <div className="field"><label>{c.final.form.type}</label>
                <select value={form.type} onChange={upd('type')}>
                  {c.final.form.typeOptions.map((o, i) => (<option key={i}>{o}</option>))}
                </select>
              </div>
              <div className="field"><label>{c.final.form.building}</label><textarea placeholder={c.final.form.buildingPh} value={form.msg} onChange={upd('msg')} /></div>
              <button className="btn btn-pri" type="submit">{c.final.form.submit}</button>
              <div className="form-alt">{c.final.form.alt} <a href={'https://wa.me/' + c.contact.whatsapp} target="_blank" rel="noopener">WhatsApp</a> · <a href={c.contact.messenger} target="_blank" rel="noopener">Messenger</a></div>
            </form>
          </section>

        </div>

        <footer>
          <div className="wrap">
            <div className="foot-grid">
              <div className="about">
                <a className="logo" href="#top"><span className="mk" />AlexDev</a>
                <p>{c.footer.about}</p>
              </div>
              <div className="foot-cols">
                <div className="fcol"><div className="ft">{c.footer.colCompany.t}</div>{c.footer.colCompany.links.map((l, i) => (<a href={l.href} key={i}>{l.label}</a>))}</div>
                <div className="fcol"><div className="ft">{c.footer.colEngineer.t}</div>{c.footer.colEngineer.links.map((l, i) => (<a href={l.href} key={i}>{l.label}</a>))}</div>
                <div className="fcol"><div className="ft">{c.footer.colConnect.t}</div><a href={'https://wa.me/' + c.contact.whatsapp} target="_blank" rel="noopener">WhatsApp</a><a href={c.contact.messenger} target="_blank" rel="noopener">Messenger</a></div>
              </div>
            </div>
            <div className="copy"><span>{c.footer.copy}</span><span>{c.footer.worldwide}</span></div>
          </div>
        </footer>
      </main>
    </>
  );
}
