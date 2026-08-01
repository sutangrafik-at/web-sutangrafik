# Estado del proyecto

## Fecha

01/08/2026

---

## Última tarea completada

- **Página `/cas-bio` (es)** (`src/app/cas-bio/page.tsx`) y **`/cas-contacto` (es)** (`src/app/cas-contacto/page.tsx` + prop `lang` en `ContactForm`): textos extraídos del SSR de la web publicada. cas-bio: título `NBSP bio NBSP ` (left -43, mb -6), bloque 622px con SUTAN/GRAFIK 30/29px, párrafos 13px/14px worksans-bold justify, ALEX TURRILLAS 18px, espaciadores y guards, 3 imágenes (41×48 @0, 204×153 @48 mb 0, 213×204 @201 mb 42 — difieren del eu), CTA `TRABAJOS REALIZAdos` (texto literal con d minúscula) + PEDIR PRESUPUESTO (mb 44). cas-contacto: título `NBSP contacto NBSP ` (left 12, mb 18, mailto), descripción con `--min-height:105px` y mb -27 (p1 29px "¿necesitas un presupuesto para tus proyectos?" + p2 18px), formulario 781px (placeholders CORREO ELECTRÓNICO */NOMBRE-APELLIDOS */TEMA/MENSAJE, botón Bidali, éxito "¡Gracias! Mensaje enviado.", tema/textarea sin maxLength), CTA ¿QUÉ ES SUTAN GRAFIK? + TRABAJOS REALIZADOS (mb 5). Verificación CDP local vs original: cas-bio título 201/texto 286/imágenes 275/323/476/CTA 741 (orig 201/286/275/323/476/740); cas-contacto título 206/desc 304/form 382/inputs 382/425/468/botón 511/CTA 589 (orig idéntico, Δ ≤1px).
- Anteriormente: `/cas-grafik` (`4aa065b`+`e6254b6`); `/kontaktua` (`b4bfd6b`); `/bio` (`1675c04`); `/grafik` completo (`f9c86ba`/`b31682e`/`a3ad3b6`); Home cas `/cas` (`559d4e9`); Home eu `/` (`6a150a7`); LinkBar (`46fc74d`); Columnas de servicios (`d47eb73`); Fila CTA y flechas SVG (`9ddd3f4`); componente `HeaderNav` (`745ec18`); `layout.tsx` global; fuentes locales; descarga de recursos oficiales; 35 JPGs de portfolio; análisis completo; decisiones del usuario; documentos en `.ia/`.

---

## Tarea actual

Ninguna en progreso. Las 8 páginas están implementadas. Siguiente: cierre — SEO completo por página (sitemap, robots, canonical `sutangrafik.com`), validación final global y revisión visual.

---

## Próximo paso

1. SEO completo: metadata/OG por página (parcial: title/description/og ya en cada página), canonical `sutangrafik.com`, sitemap.xml y robots.txt.
2. Validación final global: build, TypeScript, ESLint, responsive de las 8 páginas, revisión visual vs original.
3. Confirmar pendientes menores: favicon (por defecto: del logo) y CrossFade (por defecto: navegación normal).
4. Actualizar STATUS.md y commit final.

---

## Último commit

- `e6254b6` — feat: implement cas-grafik page with services, gallery and CTA
- `4aa065b` — fix: align header and section metrics with original measurements
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
- Mediciones headless del original: con parastorage bloqueado, bignoodle/worksans se caen a Arial → filas infladas por wraps (el "2.25em" era artefacto); la fuente de verdad son el CSS del SSR + las métricas reales de las fuentes locales. Las posiciones de anclas (títulos/imágenes/formulario/CTA) SÍ son fiables en headless (medidas en el mismo estado).
- Favicon y CrossFade pendientes de confirmar (hay valor por defecto definido).
- Documentos en `.ia/` (fuera de la raíz); actualizar referencias de AGENTS.md (RECUPERACIÓN DE LA SESIÓN) si se mantiene la ubicación.

---

## Notas

- Fuente de verdad: web publicada (revisión 211, SSR capturado) + recursos del historial Git (commit 7a03e51).
- Navegación no es layout global: cada página es una landing con logo + chips + EUS/CAS como contenido propio.
- El grid del original no está centrado: contenedor de página con `margin-left: 130px` (verificado por CDP: galería l=331 = 130+201).
- Wix clásico no responsive (980px fijo); la réplica añade responsive manteniendo fidelidad (prioridad 3 de AGENTS.md).
