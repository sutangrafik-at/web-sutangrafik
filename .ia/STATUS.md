# Estado del proyecto

## Fecha

01/08/2026

---

## Última tarea completada

- **Página `/cas-grafik` (es)** (`src/app/cas-grafik/page.tsx`): HeaderNav (cas activo, chips `ContaCtO` left 756/837/889), título GRAFIK 53px, eslogan SOLUCIONES GRÁFICAS ADAPTADAS A TUS NECESIDADES (23px/0.5em ls 0.45em), línea roja, intro (15px/0.5em ls 0.2em), flechas decorativas, columnas de servicios (DISEÑO GRÁFICO / EDITORIAL IMAGEN con textos es), galería `md:ml-[201px] md:mb-[52px]` (left 201 del grid orig cas), fila CTA (¿QUÉ ES SUTAN GRAFIK? → /cas-bio, PEDIR PRESUPUESTO → /cas-contacto, mb-52), responsive móvil. Mismo commit de medición: corrección global de geometría tras re-medir el original con CDP — contenedor de página `ml-[130px]` (grid real del original, no centrado), HeaderNav re-medido (logo top 100, EUS/CAS top 107 26px, chips top 140, h-172px), servicios (items worksans-extralight 16px lh 1.14em, título lh 1.15em, guards a 6 líneas, fila 160px), márgenes exactos de fila 2-5 en grafik/cas-grafik (título mt-33 mb-11, eslogan mb-13, línea mb-16, intro mt-8 mb-40, flechas mt-8 mb-44/69 — el lh de bignoodle es 1.14em real; los "2.25em" de las mediciones headless eran artefacto Arial por parastorage bloqueado). Cadena vertical local (CDP): logo 100, eslogan 314, intro 359, flechas 415, galería 611, CTA 3120 ≈ original real (612.5/3120.5).
- Anteriormente: `/kontaktua` (`b4bfd6b`); `/bio` (`1675c04`); `/grafik` completo (`f9c86ba`/`b31682e`/`a3ad3b6`); Home cas `/cas` (`559d4e9`); Home eu `/` (`6a150a7`); LinkBar (`46fc74d`); Columnas de servicios (`d47eb73`); Fila CTA y flechas SVG (`9ddd3f4`); componente `HeaderNav` (`745ec18`); `layout.tsx` global; fuentes locales; descarga de recursos oficiales; 35 JPGs de portfolio; análisis completo; decisiones del usuario; documentos en `.ia/`.

---

## Tarea actual

Ninguna en progreso. Siguiente: extraer textos de `/cas-bio` y `/cas-contacto` de la web publicada e implementarlas.

---

## Próximo paso

1. Extraer textos exactos de `/cas-bio` y `/cas-contacto` de la web publicada (SSR).
2. Implementar `/cas-bio` (es) con HeaderNav cas, título bio, textos es, imágenes y fila CTA.
3. Implementar `/cas-contacto` (es) con el formulario (modo prueba).
4. Confirmar pendientes menores: favicon (por defecto: del logo) y CrossFade (por defecto: navegación normal).
5. Cierre: SEO completo por página (metadata, OG, canonical `sutangrafik.com`, sitemap, robots), validación final global y commit final.

---

## Último commit

- `8ee2dba` — docs: update status with kontaktua page completion
- `b4bfd6b` — feat: implement kontaktua page with test-mode contact form
- `f0518a6` — docs: update bio details and status after page implementation
- `1675c04` — feat: replicate bio page with header, paragraphs and images
- `f9c86ba` — chore: mark grafik page tasks as complete
- `b31682e` — feat: add portfolio masonry gallery with lightbox and CTA row
- `a3ad3b6` — feat: implement grafik page header, slogan, line, intro and services
- `559d4e9` — feat: implement cas home page with shared home content

---

## Estado

- Build: OK (next build --turbopack, sin errores)
- TypeScript: OK (tsc --noEmit, sin errores)
- ESLint: OK (sin errores)

---

## Problemas conocidos

- URLs de la galería Masonry de `/grafik` inaccesibles (iframe santa-galleries protegido, AccessDenied) → resuelto con decisión de usar las 35 JPGs del historial Git.
- Destino del envío del formulario: en modo prueba, sin email (decisión del usuario).
- Mediciones headless del original: con parastorage bloqueado, bignoodle/worksans se caen a Arial → filas infladas por wraps (el "2.25em" era artefacto); la fuente de verdad son el CSS del SSR + las métricas reales de las fuentes locales.
- Textos de `/cas-bio` y `/cas-contacto` pendientes de extracción de la web publicada.
- Favicon y CrossFade pendientes de confirmar (hay valor por defecto definido).
- Documentos en `.ia/` (fuera de la raíz); actualizar referencias de AGENTS.md (RECUPERACIÓN DE LA SESIÓN) si se mantiene la ubicación.

---

## Notas

- Fuente de verdad: web publicada (revisión 211, SSR capturado) + recursos del historial Git (commit 7a03e51).
- Navegación no es layout global: cada página es una landing con logo + chips + EUS/CAS como contenido propio.
- El grid del original no está centrado: contenedor de página con `margin-left: 130px` (verificado por CDP: galería l=331 = 130+201).
- Wix clásico no responsive (980px fijo); la réplica añade responsive manteniendo fidelidad (prioridad 3 de AGENTS.md).
