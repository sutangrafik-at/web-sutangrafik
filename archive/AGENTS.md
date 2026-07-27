# Sutan Grafik — Web Project

## Brand
- **Name**: Sutan Grafik
- **Owner**: Alex Turrillas (Deba, Gipuzkoa)
- **Niche**: Diseinu grafikoa / Diseño gráfico (graphic design)
- **Contact**: sutangrafik@gmail.com | 688 84 03 08
- **Social**: [Facebook](https://www.facebook.com/sutan.grafik.3), [Instagram](https://www.instagram.com/sutangrafikdiseinua/)

## Design System

### Colors
| Var | Value | Usage |
|-----|-------|-------|
| `--bg-primary` | `#ffffff` | Page background |
| `--bg-secondary` | `#f5f5f5` | Secondary surfaces |
| `--text-primary` | `#000000` | Body text |
| `--text-secondary` | `#333333` | Muted body text |
| `--text-muted` | `#666666` | Subtle text |
| `--accent` | `#DD0018` | Headings, highlights, brand accent |
| `--accent-hover` | `#8B0000` | Accent hover state |
| `--border-color` | `#e0e0e0` | Dividers, borders |

### Background
- Tiled texture via `images/background.jpg` (4961×3508) repeated on `<body>`.
- Hero overlay: same image at `opacity: 0.4` via `::before` pseudo-element (fixed position).
- No dark mode; always white canvas.

### Typography
- **Display**: `BigNoodleTitling` (local woff2/woff/ttf, fallback Montserrat) — used for nav links, section headings, CTAs.
- **Body**: `Montserrat` (Google Fonts, weights 300–900) — used for paragraphs, lists, form labels.
- Nav links, h1, h2, service headings, cta-btn are all `var(--font-display)`.
- Body text, list items, form labels are `var(--font-body)`.

### Layout
- `--max-width: 1200px` centered container.
- Sections: `.home-hero`, `.grafik-hero`, `.grafik-services`, `.grafik-carousel`, `.grafik-cta`, `.bio-section`, `.bio-cta`, `.contact-section`, `.contact-cta`.
- `fade-in` class triggers IntersectionObserver-based reveal animation (`.visible` adds opacity 1 + translateY 0).

## Structure

```
web-sutangrafik/
├── index.html            # Home (EU)
├── grafik.html           # Graphic design services + image carousel (EU)
├── bio.html              # About / biography (EU)
├── kontaktua.html        # Contact form (EU)
├── cas/                  # Spanish versions
│   ├── index.html        # Home (ES)
│   ├── grafik.html       # Graphic design + carousel (ES)
│   ├── bio.html          # About (ES)
│   └── contacto.html     # Contact (ES)
├── css/
│   ├── style.css         # All styles (light theme, carousel, animations)
│   ├── responsive.css    # Breakpoints: 1024px, 768px, 480px
│   ├── wix-main.min.css   # Unused (legacy Wix export)
│   └── wix-renderer.min.css # Unused (legacy Wix export)
├── js/
│   ├── main.js           # Hamburger menu, contact form validation, carousel
│   └── animations.js     # IntersectionObserver fade-in on `.fade-in` elements
├── fonts/
│   └── bignoodletitling.*
├── images/
│   ├── logo-hq.png       # Main logo (used on all pages)
│   ├── background.jpg    # Tiled background texture
│   ├── profile-hq.png    # Profile photo (bio page)
│   ├── {facebook,instagram,email,phone,arrow}-icon-hq.png
│   └── Portfoliokoak/    # 36 JPG portfolio images for carousel
├── html/                 # Unused (legacy Wix export)
├── data/                 # Unused (legacy Wix export)
└── js/bundles/, js/polyfills/  # Unused (legacy Wix export)
```

## Navbar
- **Logo** (60×45, links to home) + **Language switcher** (EUS / CAS).
- **Nav links**: GRAFIK, BIO, kontaktuA (stylized lowercase 'k').
- Active page gets `.active` class.
- **Hamburger** button toggles `.open` on `.main-nav` (slides in from right on mobile ≤768px).

## Pages

### Home (`index.html`)
- Hero with large logo (`logo-big`, 350×263) centered.
- Nav links directly below logo (same links as top nav).
- Contact bar: phone + email with icons.
- No "Sutan Grafik" heading text — only the logo image carries the brand name.

### Grafik (`grafik.html`)
- Hero with "GRAFIK" heading and subtitle.
- Services grid: "DISEINU GRAFIKOA" + "EDITORIALA IRUDIA" in 2-column layout.
- **Portfolio carousel** (id `#portfolio-carousel`, class `.grafik-carousel`):
  - Loads 36 images from `images/Portfoliokoak/` via `data-base` attribute.
  - Prev/next buttons, dot indicators.
  - Keyboard navigation (ArrowLeft, ArrowRight), touch swipe support.
  - Images use `object-fit: contain`, max-height 500px.
- CTA section with links to BIO and KONTAKTUA.

### Bio (`bio.html`)
- "SUTAN GRAFIK" heading.
- Two-column layout: text (left) + profile image (right, 300×300).
- CTA to view work or request quote.

### Contact (`kontaktua.html`)
- Email link prominently displayed.
- Form: name, email, message with client-side validation.
- Form validation highlights empty/invalid fields with red border, shows success message.

## Carousel (JS)
- Located in `main.js` as a self-executing anonymous function.
- Image list is hardcoded (36 filenames).
- Base path from `data-base` attribute or fallback `images/Portfoliokoak/`.
- Track uses `transform: translateX(-${index * 100}%)` for sliding.
- Dots dynamically created and synced with current index.
- Touch swipe: `touchstart` records X, `touchend` compares delta (>50px triggers direction).

## Mobile Breakpoints
- **1024px**: Smaller hero text, responsive grids, logo 280px.
- **768px**: Hamburger nav (full-screen overlay from right), logo 220px, carousel max-height 300px, stacked CTAs.
- **480px**: Logo 160px, tighter padding, carousel max-height 220px.

## Key Conventions
- Language: Basque (EU) primary, Spanish (CAS) under `cas/` subdirectory.
- Nav link casing: "GRAFIK", "BIO", "kontaktuA" / "ContaCtO" (stylized mixed case).
- No closing `/` on void elements (e.g., `<br>`, `<img...>` — matches Wix export style).
- All JS in IIFEs with `'use strict'`.
- Images use `loading="lazy"` for performance.
- `alt` text on decorative images is empty string `""`.
- No external dependencies beyond Google Fonts CSS import.

## Deployment
- GitHub Pages via `sutangrafik.github.io` repo.
- Canonical URLs point to `https://sutangrafik.github.io/`.
- `robots.txt` and `sitemap.xml` present.
