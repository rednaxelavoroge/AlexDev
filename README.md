# AlexDev — v2 (Next.js)

Repositioning site for AlexDev as an AI-Native Engineering Company.
Next.js (App Router), locale routing for 7 languages, English content shipped, others fall back to English until translated.

## Run

```bash
npm install
npm run dev      # http://localhost:3000  → redirects to /en/v2
npm run build    # production build
npm start        # serve production build
```

## Routing

- `/` → redirects to `/en/v2`
- `/{locale}/v2` → the site (locale one of: en, es, pt, it, fr, ar, ru)
- `/{locale}` → redirects to `/{locale}/v2`

The page is intentionally at `/v2` for the review phase. To move it to the
homepage later, render `SiteV2` from `app/[locale]/page.jsx` instead of
redirecting (see the one-line note in that file).

## Internationalisation

- Locales and RTL config: `lib/i18n.js` (Arabic = `dir="rtl"`, set on `<html>` in `app/[locale]/layout.jsx`).
- Content lives in `content/en.js` as one structured object — no hard-coded copy in components.
- To add a language: copy `content/en.js` → `content/es.js`, translate the strings,
  then register it in `content/index.js`. That's the whole task.
- English is the fully-owned default. Translate with human review, not machine output.

## Configure before launch

- WhatsApp number and email: `content/en.js` → `contact` (currently `995585890730` / `hello@alex-dev.pro`).
- The brief form opens WhatsApp with a pre-filled message (`wa.me`). For silent
  delivery / lead logging, add a backend endpoint or a form service and POST there
  in `submitBrief` (components/SiteV2.jsx).

## Notes

- No person/photo on the site by design — the founder's face lives in ads and
  personal chat; the site builds trust through proof (real work, metrics, methodology).
- Selected Work contains only real, shipped projects. Never add fabricated metrics
  or "coming soon" items.
- No marketing services (SEO / SMM) — out of scope by strategy.
- Theme: light default, toggle to dark in the header. Colors are CSS variables in
  `app/globals.css` (`:root` = dark values, `[data-theme="light"]` = light overrides).
