'use client';

export default function Footer({ content: c, locale }) {
  const getHref = (anchor) => {
    if (!anchor.startsWith('#')) return anchor;
    return `/${locale}${anchor}`;
  };

  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="about">
            <a className="logo" href={`/${locale}`}>
              <span className="mk" />AlexDev
            </a>
            <p>{c.footer.about}</p>
          </div>
          <div className="foot-cols">
            <div className="fcol">
              <div className="ft">{c.nav.products || 'Products & Platforms'}</div>
              <a href="https://showroom-ai.pro/" target="_blank" rel="noopener">Showroom AI</a>
              <a href={`/${locale}/showroom-ai`}>Showroom AI Overview</a>
              <a href={`/${locale}/ai-business-assistant`}>AI Business Assistant</a>
            </div>
            <div className="fcol">
              <div className="ft">{c.footer.colCompany.t}</div>
              {c.footer.colCompany.links.map((l, i) => (
                <a href={getHref(l.href)} key={i}>
                  {l.label}
                </a>
              ))}
            </div>
            <div className="fcol">
              <div className="ft">{c.footer.colEngineer.t}</div>
              {c.footer.colEngineer.links.map((l, i) => (
                <a href={getHref(l.href)} key={i}>
                  {l.label}
                </a>
              ))}
            </div>
            <div className="fcol">
              <div className="ft">{c.footer.colConnect.t}</div>
              <a href={'https://wa.me/' + c.contact.whatsapp} target="_blank" rel="noopener">
                WhatsApp
              </a>
              <a href={c.contact.messenger} target="_blank" rel="noopener">
                Messenger
              </a>
            </div>
          </div>
        </div>
        <div className="copy">
          <span>{c.footer.copy}</span>
          <span>{c.footer.worldwide}</span>
        </div>
      </div>
    </footer>
  );
}
