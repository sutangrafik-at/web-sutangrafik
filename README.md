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
npm run build      # export estático de producción → carpeta out/
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
- Diseño verificado contra el original con CDP (Edge headless).

## Despliegue

El proyecto se publica como **sitio estático** (`output: 'export'` en `next.config.ts`): las 14 rutas se prerenderizan en la carpeta `out/` durante el build. No requiere variables de entorno ni backend.

### En local

```bash
npm install
npm run dev        # http://localhost:3000
```

Build de producción (export estático):

```bash
npm run build      # genera ./out
npx serve out      # sirve el export en http://localhost:3000
```

Para probar el build **exactamente como se publicará en GitHub Pages** (con prefijo de ruta):

```bash
# Windows PowerShell
$env:NEXT_PUBLIC_BASE_PATH = '/web-sutangrafik'
npm run build
```

### Despliegue automático (GitHub Pages)

Cada push a la rama `main` dispara el workflow `.github/workflows/deploy.yml`:

1. Instala dependencias (`npm ci`).
2. Ejecuta ESLint y TypeScript.
3. Genera el export estático con `NEXT_PUBLIC_BASE_PATH=/web-sutangrafik`.
4. Publica la carpeta `out/` con las acciones oficiales `actions/upload-pages-artifact` + `actions/deploy-pages`.

Resultado: https://sutangrafik-at.github.io/web-sutangrafik/

### Requisitos (una sola vez)

- Activar en el repositorio: **Settings → Pages → Source: _GitHub Actions_**.
- El workflow usa `permissions: pages: write` e `id-token: write`, ya declaradas en el propio workflow.
- Despliegue manual opcional: botón _Run workflow_ en la pestaña Actions.

### Cómo funciona el prefijo de ruta (basePath)

GitHub Pages sirve este repositorio bajo `/web-sutangrafik`, por lo que el build añade `basePath` y `assetPrefix` desde la variable `NEXT_PUBLIC_BASE_PATH` (solo definida en CI):

- Los enlaces internos (`next/link`) se prefijan automáticamente.
- Imágenes, fondo y fuentes se prefijan vía `src/lib/assets.ts` (`asset()`) y `next/font/local`.
- En local (sin la variable) todo funciona sin prefijo, igual que siempre.
