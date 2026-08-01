# Web Sutangrafik

Sitio web corporativo de **Sutangrafik** — estudio de diseño gráfico y editorial (Bilbao). Réplica fiel de la web original (Wix) como aplicación Next.js, bilingüe **euskera / castellano** (rutas con prefijo `cas-`).

## Stack

- **Next.js 15** (App Router, `turbopack`) + **React 19**
- **TypeScript 5** (`strict`, `noUnusedLocals`, `noUnusedParameters`)
- **Tailwind CSS 4** (PostCSS, `@theme` con tokens propios)
- **ESLint 9** (`eslint-config-next`) + **Prettier** (`prettier-plugin-tailwindcss`)

## Scripts

```bash
npm run dev        # servidor de desarrollo (turbopack)
npm run build      # build de producción (14 rutas estáticas)
npm run start      # servidor de producción
npm run lint       # ESLint
npm run format     # Prettier --write
npm run format:check
```

## Estructura

```
src/
├── app/                  # rutas (App Router)
│   ├── page.tsx          # home (eu)
│   ├── bio|grafik|kontaktua/        # páginas eu
│   ├── cas|cas-bio|cas-grafik|cas-contacto/  # páginas es
│   ├── layout.tsx        # layout raíz + metadata + ViewTransitions
│   ├── robots.ts         # robots.txt
│   └── sitemap.ts        # sitemap.xml
├── components/           # componentes reutilizables
│   ├── HeaderNav.tsx     # navegación con chips
│   ├── HomeContent.tsx   # bloque principal del home (eu/es)
│   ├── Chip.tsx / LinkBar.tsx / Arrow.tsx
│   ├── ServicesColumns.tsx
│   ├── PortfolioGallery.tsx   # galería masonry + lightbox
│   ├── CtaRow.tsx / ContactForm.tsx
│   └── ViewTransitions.tsx    # transición suave entre rutas (View Transitions API)
└── data/portfolio.ts     # imágenes y títulos de la galería
```

## Notas de fidelidad (vs. original Wix)

- Fuentes auto-hospedadas: `worksans-extralight` (woff2 exactos descargados del original, 400/700) para los párrafos de Bio; Work Sans de Google para el resto.
- Imagen de fondo nítida descargada del original (`public/images/background.jpg`), con `opacity 0.4`.
- Transición entre páginas: fade-out 140 ms / fade-in 200 ms + 12 px, con `prefers-reduced-motion` respetado.
- Galería: sombra `rgba(0,0,0,0.36) 1.03px 2.82px 3px 1px`, espaciado 13 px (idéntico al original).
- Diseño verificado contra el original con CDP (Edge headless); el historial completo de decisiones y mediciones está en `.ia/`.

## Despliegue

Build estándar de Next.js: todas las rutas se prerenderizan como contenido estático (14 rutas, sin funciones server).

```bash
npm run build
npm run start   # servidor de producción, o desplegar en Vercel / cualquier host Node
```

No requiere variables de entorno ni backend.
