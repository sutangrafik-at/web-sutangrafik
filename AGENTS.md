# Sutan Grafik — Project Context

## Architecture
Single-page application (SPA) with 4 sections: Home, Grafik, Bio, Kontaktua.
- Entry: `index.html`
- Styles: `css/style.css`
- Logic: `js/app.js`, `js/i18n.js`
- Translations: `locales/eu/common.json`, `locales/es/common.json`

## Home Page
- Strictly 100vh, non-scrollable (`overflow: hidden; height: 100vh` on `body[data-current-section="home"]`).
- Centered content (logo, nav boxes, contact bar).
- Footer hidden.
- Header has transparent background (`background: transparent`).

## Gallery (/grafik)
- Layout: CSS Grid with `grid-template-columns: repeat(3, 1fr)`, `gap: 0.75rem`, `align-items: start`.
- Ordering: Horizontal left-to-right across rows (1.jpg -> 2.jpg -> 3.jpg), ascending by filename.
- Source: `images/portfoliokoak/` (files `1.jpg` through `35.jpg`, generated via `for` loop in `portfolioFiles`).
- Lightbox: PhotoSwipe v5 (CDN module script in `index.html`).
- Gallery items are `<a>` elements with `data-pswp-width`/`data-pswp-height` set on `load` event from `naturalWidth`/`naturalHeight`.
- No forced uniform row heights — each image renders at its natural aspect ratio (`width: 100%; height: auto`).

## Section Heights
- Fully isolated per page — inactive sections are `display:none` to prevent accumulated scroll height from longer sections bleeding into shorter ones.
