'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { locales, langLabels } from '../lib/i18n';

export default function MobileNav({ locale, content: c, isSubpage = false, customLinks = null }) {
  const router = useRouter();
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  function toggleTheme() {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', next);
    }
  }

  function changeLang(e) {
    const targetLang = e.target.value.toLowerCase();
    const currentPath = typeof window !== 'undefined' ? window.location.pathname : '';
    const segments = currentPath.split('/').filter(Boolean);
    
    if (segments.length > 0 && locales.includes(segments[0])) {
      segments[0] = targetLang;
      router.push('/' + segments.join('/'));
    } else {
      router.push(`/${targetLang}`);
    }
  }

  const getAnchor = (hash) => {
    return isSubpage ? `/${locale}${hash}` : hash;
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <div className="nav-in">
        {/* LOGO */}
        <a className="logo" href={`/${locale}`}>
          <span className="mk" />AlexDev
        </a>

        {/* DESKTOP NAV LINKS (hidden on mobile <= 900px via CSS) */}
        <div className="nav-links">
          <a href={getAnchor('#framework')}>{c.nav.framework}</a>
          <a href={getAnchor('#engineer')}>{c.nav.engineer}</a>
          <a href={getAnchor('#work')}>{c.nav.work}</a>
          <a href={getAnchor('#products')} style={{ color: 'var(--accent)', fontWeight: 600 }}>
            {c.nav.products || 'Products & Platforms'}
          </a>
          <a href={getAnchor('#aes')}>{c.nav.aes}</a>
          <a href={getAnchor('#engage')}>{c.nav.engage}</a>
          <a href={getAnchor('#faq')}>{c.nav.faq}</a>
        </div>

        {/* HEADER ACTIONS */}
        <div className="nav-cta">
          {/* Language Selector */}
          <select className="lang-select" aria-label="Language" value={locale} onChange={changeLang}>
            {locales.map((l) => (
              <option key={l} value={l}>
                {langLabels[l]}
              </option>
            ))}
          </select>

          {/* Theme Toggle */}
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle color theme">
            <svg width="15" height="15" viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.4" />
              <path d="M8 1a7 7 0 0 1 0 14z" fill="currentColor" />
            </svg>
          </button>

          {/* Desktop Primary CTA Button (hidden on narrow screens via CSS) */}
          <a className="btn btn-pri desktop-cta-btn" href={getAnchor('#start')}>
            {c.nav.cta}
          </a>

          {/* Mobile Hamburger Toggle Button (visible <= 900px via CSS) */}
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE NAV DRAWER OVERLAY */}
      {menuOpen && (
        <div
          className="mobile-drawer-backdrop"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMenuOpen(false);
          }}
        >
          <div className="mobile-drawer-content">
            {/* Drawer Header */}
            <div className="mobile-drawer-head">
              <a className="logo" href={`/${locale}`} onClick={closeMenu}>
                <span className="mk" />AlexDev
              </a>
              <button className="mobile-close-btn" onClick={closeMenu} aria-label="Close menu">
                ✕
              </button>
            </div>

            {/* Subpage Specific Anchors if provided */}
            {customLinks && customLinks.length > 0 && (
              <div style={{ margin: '16px 0 8px', padding: '12px 14px', background: 'var(--panel2)', border: '1px solid var(--line2)', borderRadius: '10px' }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: '10.5px', color: 'var(--accent)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Page Navigation
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {customLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.id}
                      onClick={closeMenu}
                      style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--fg)', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
                    >
                      <span style={{ color: 'var(--accent)' }}>•</span> {link.label}
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile Navigation Links */}
            <div className="mobile-drawer-links">
              <a href={getAnchor('#framework')} onClick={closeMenu}>
                <span className="num">01</span> {c.nav.framework}
              </a>
              <a href={getAnchor('#engineer')} onClick={closeMenu}>
                <span className="num">02</span> {c.nav.engineer}
              </a>
              <a href={getAnchor('#work')} onClick={closeMenu}>
                <span className="num">03</span> {c.nav.work}
              </a>
              <a href={getAnchor('#products')} onClick={closeMenu} className="highlight">
                <span className="num">04</span> {c.nav.products || 'Products & Platforms'}
              </a>
              <a href={getAnchor('#aes')} onClick={closeMenu}>
                <span className="num">05</span> {c.nav.aes}
              </a>
              <a href={getAnchor('#engage')} onClick={closeMenu}>
                <span className="num">06</span> {c.nav.engage}
              </a>
              <a href={getAnchor('#faq')} onClick={closeMenu}>
                <span className="num">07</span> {c.nav.faq}
              </a>
            </div>

            {/* Proprietary Products Card in Drawer */}
            <div className="mobile-drawer-products">
              <div className="phead">AlexDev Proprietary Products</div>
              <a href={`/${locale}/showroom-ai`} onClick={closeMenu} className="pitem">
                <div>
                  <div className="pname">Showroom AI</div>
                  <div className="pdesc">Enterprise AI Business Platform</div>
                </div>
                <span className="parr">→</span>
              </a>
              <a href={`/${locale}/ai-business-assistant`} onClick={closeMenu} className="pitem">
                <div>
                  <div className="pname">AI Business Assistant</div>
                  <div className="pdesc">WhatsApp Cloud API Assistant</div>
                </div>
                <span className="parr">→</span>
              </a>
            </div>

            {/* Bottom CTA Button */}
            <div style={{ marginTop: '24px' }}>
              <a href={getAnchor('#start')} onClick={closeMenu} className="btn btn-pri" style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '15px' }}>
                {c.nav.cta} →
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
