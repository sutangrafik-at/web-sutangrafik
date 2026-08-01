# Estado del proyecto

## Fecha

01/08/2026

---

## Última tarea completada

- **Refinamiento visual — 4 diferencias (01/08/2026)**: implementadas por instrucción del usuario (invierte la decisión previa de no aplicar CrossFade):
  1. **Transiciones entre páginas**: verificado en vivo con CDP que el original hace navegación cross-document con View Transitions API (`@view-transition{navigation:auto;types:CrossFade}`, `page-group` con `animation-duration:.6s` usando la animación por defecto del navegador; header/ads/footer/background con `view-transition-name` propio; `cursor:wait`; `prefers-reduced-motion:reduce` → sin animación; el `MutationObserver` no detecta nada porque `:root:active-view-transition` es pseudo-clase, no atributo, y `getAnimations()==[]`). Replicado en la SPA: nuevo `src/components/ViewTransitions.tsx` (client, intercepta clics de enlaces internos y envuelve `router.push` en `document.startViewTransition()`, montado en `layout.tsx`) + `globals.css` (`#main-content`→page-group, `.site-background`→background-group, `animation-duration:.6s` en el grupo, bloque `prefers-reduced-motion`). CSS de referencia extraído completo de `main.744ea815.min.css` (3714 chars).
  2. **Imagen de fondo**: el original sirve placeholder blur en el SSR pero el cliente lo reemplaza por la nítida `w_1920,h_1358,q_90,usm_0.66_1.00_0.01,enc_auto` con `opacity:0.4` (verificado por CDP). Descargada esa URL exacta (615KB) → `public/images/background.jpg` (sustituye al tile blur 744×526 de 47KB). CSS sin cambios.
  3. **Sombra de tarjeta de la galería**: medida en vivo dentro del iframe Masonry (`box-shadow: rgba(0,0,0,0.36) 1.03px 2.82px 3px 1px` inline por `app.min.js`) → aplicada con Tailwind arbitrary en cada tarjeta de `PortfolioGallery.tsx` (espaciado intacto).
  4. **Cursor pointer en la galería**: `cursor-pointer` en cada tarjeta de `PortfolioGallery.tsx` (computed style del original: `cursor:pointer`).
  Comprobaciones: tsc/lint/build OK (14 rutas).
- Anteriormente: **Refinamiento visual (01/08/2026)**: análisis y corrección de 3 diferencias vs original:
  1. **Transiciones entre páginas**: el original usa la View Transitions API (`@view-transition{navigation:auto;types:CrossFade}`, keyframes slide-horizontal/out-in, `view-transition-name` en header/wix-ads/footer/background/page groups). NO implementado por decisión del usuario (01/08/2026) — queda documentado en TASKS.md.
  2. **Fondo**: el original no sirve el JPG nítido 4961×3508 sino un tile del CDN reducido y desenfocado (`w_744,h_526,...,blur_1`) mostrado a `background-size:4961px 3508px` con `--fill-layer-image-opacity:0.4`, `--fill-layer-image-height:120%`, underlay blanco `--bg-overlay-color:color_11`, `--bg-position:fixed`. Sustituido `public/images/background.jpg` por el tile exacto descargado del CDN (744×526, 47KB); el CSS de `.site-background` no cambió (ya coincidía).
  3. **Vertical home vs resto**: los 50px de diferencia son el banner freemium de Wix (`--wix-ads-height:50px` → `#site-root{top:var(--wix-ads-height)}`); con banner oculto (`--wix-ads-height:0`) el original renderiza home logo 71/chips 357 (== la local) e interiores 50px más arriba (bio 690, cas-grafik 3089). La local se había calibrado con banner activo en interiores (+50) y sin banner en la home → decisión del usuario de punto medio 25/25: home +25 (logo/EUS/CAS 96, chips 382/383, linkbar 437/446, contenedor 523px en `HomeContent.tsx`) e interiores -25 (`md:-mt-[25px]` en el wrapper de las 6 páginas: header nav 140→115, bio EGINDAKO LANAK 740→715, cas-grafik 3119→3094, kontaktua 586→561). Verificado por CDP en home/cas/bio/cas-grafik/kontaktua. Comprobaciones: tsc/lint/build OK (14 rutas).
- Anteriormente: **Corrección de las diferencias detectadas en la auditoría (01/08/2026)**: V1 centrado del grid (`md:mx-auto` en los 7 wrappers — el original usa `margin-left:calc((100% - 980px)/2)`; el `ml:130px` era artefacto del viewport de medición 1240; verificado por CDP a 1280/1920: x idéntico al original en chips/CTA/flechas), F1 bug del mensaje de éxito eu (`{text.success}` literal → "Eskerrik asko! Mezua ondo bidali da."), F2 maxLengths espurios eliminados (asunto y textarea; el original solo tiene email=250 y nombre=100), V2 Work Sans con peso 700 (negrita real, no faux-bold), V3 mensaje de éxito en Helvetica, V6 `lang="es"` en todas las páginas (como el original, verificado en los 7 SSR), favicon `.ico` regenerado del logo (16/32/48/256, PNG embebido, aspecto 4:3 con fondo transparente). Comprobaciones: tsc/lint/build OK (14 rutas).
- Anteriormente: Cierre SEO (canonical/OG/sitemap/robots, `0f37b1a`); `/cas-bio` y `/cas-contacto` (`e6ed3aa`+`7fbf00d`); `/cas-grafik` (`4aa065b`+`e6254b6`); `/kontaktua` (`b4bfd6b`); `/bio` (`1675c04`); `/grafik` completo (`f9c86ba`/`b31682e`/`a3ad3b6`); Home cas `/cas` (`559d4e9`); Home eu `/` (`6a150a7`); LinkBar (`46fc74d`); Columnas de servicios (`d47eb73`); Fila CTA y flechas SVG (`9ddd3f4`); componente `HeaderNav` (`745ec18`); `layout.tsx` global; fuentes locales; descarga de recursos oficiales; 35 JPGs de portfolio; análisis completo; decisiones del usuario; documentos en `.ia/`.

---

## Tarea actual

Las 8 páginas implementadas + correcciones de auditoría + refinamiento visual (3 diferencias previas + 4 diferencias actuales) aplicados (build/tsc/lint OK). Pendiente: revisión visual del usuario en local de los 4 cambios nuevos (transiciones CrossFade, fondo nítido, sombra de tarjeta y cursor de la galería).

---

## Próximo paso

1. Revisión visual del usuario en local (http://localhost:3001) de las transiciones CrossFade, el fondo nítido y la galería (sombra + cursor).
2. Ajustar cualquier desviación que detecte el usuario.
3. Actualizar STATUS.md y commit final si hay ajustes.

---

## Último commit

- `71e4544` — feat: replicate page transitions, sharp background and gallery card shadow (este commit)
- fix: correct grid centering, form success message, maxlengths and lang
- `3543b71` — docs: update status with SEO closure
- `0f37b1a` — feat: add SEO metadata, canonical, sitemap and robots
- `c8072a1` — fix: restore literal ? and . paragraphs in cas-bio
- `7fbf00d` — docs: mark cas-bio and cas-contacto tasks as complete
- `e6ed3aa` — feat: implement cas-bio and cas-contacto pages with extracted texts

---

## Estado

- Build: OK (next build --turbopack, sin errores)
- TypeScript: OK (tsc --noEmit, sin errores)
- ESLint: OK (sin errores)

---

## Problemas conocidos

- URLs de la galería Masonry de `/grafik` inaccesibles (iframe santa-galleries protegido, AccessDenied) → resuelto con decisión de usar las 35 JPGs del historial Git.
- Destino del envío del formulario: en modo prueba, sin email (decisión del usuario).
- Mediciones headless del original: con parastorage bloqueado, bignoodle/worksans se caen a Arial → filas infladas por wraps (el "2.25em" era artefacto); la fuente de verdad son el CSS del SSR + las métricas reales de las fuentes locales. Las posiciones de anclas (títulos/imágenes/formulario/CTA) SÍ son fiables en headless (medidas en el mismo estado).
- El banner freemium de Wix (`--wix-ads-height:50px`, `#site-root{top:var(--wix-ads-height)}`) desplaza todo el contenido del original 50px hacia abajo mientras está activo; es un anuncio (a eliminar) y su estado varía por sesión. La réplica usa el punto medio decidido (home -25 del render con banner, interiores +25) → siempre hay hasta 25px de diferencia según el estado del banner en el navegador del usuario.
- Transiciones CrossFade entre páginas del original (View Transitions API): replicadas con `document.startViewTransition()` en la SPA (componente `ViewTransitions.tsx` + reglas en `globals.css`, duración 0.6s, `prefers-reduced-motion` respetado). Diferencia esperada: el original navega cross-document (recarga real de documento) y la réplica es SPA — visualmente el cross-fade es el mismo.
- Documentos en `.ia/` (fuera de la raíz); actualizar referencias de AGENTS.md (RECUPERACIÓN DE LA SESIÓN) si se mantiene la ubicación.

---

## Notas

- Fuente de verdad: web publicada (revisión 211, SSR capturado) + recursos del historial Git (commit 7a03e51).
- Navegación no es layout global: cada página es una landing con logo + chips + EUS/CAS como contenido propio.
- El grid del original **está centrado** (`margin-left:calc((100% - 980px)/2)`); el "ml:130px" medido en sesiones previas era el offset de centrado al viewport de medición (1240px). La réplica usa `md:mx-auto` en el contenedor de página (corrección V1, verificado por CDP).
- Wix clásico no responsive (980px fijo); la réplica añade responsive manteniendo fidelidad (prioridad 3 de AGENTS.md).
