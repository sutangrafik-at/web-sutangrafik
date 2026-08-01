# Estado del proyecto

## Fecha

01/08/2026

---

## Última tarea completada

- **Cierre SEO**: metadata completa por página con los valores OG oficiales del SSR (BIO | SUTAN GRAFIK eus / GRAFIK | SUTAN GRAFIK eus / KONTAKTUA | SUTAN GRAFIK eus / SUTAN GRAFIK diseño gráfico / BIO | SUTAN GRAFIK cas / GRAFIK | SUTAN GRAFIK cas / CONTACTO | SUTAN GRAFIK cas), `canonical` en las 8 páginas, `sitemap.xml` (8 URLs, prioridad 1 home) y `robots.txt` (allow all + sitemap) — verificado en dev server y en build (14 rutas estáticas). Además, corrección de fidelidad en cas-bio: párrafos literales `?`/`.` del original (tras "Tras varios años...", tras "Ofrecemos...", "." tras "Apasionado...", y los dos finales 21px/16px) que estaban como `&nbsp;` (el eu `/bio` original no los tiene, verificado).
- Anteriormente: `/cas-bio` y `/cas-contacto` (`e6ed3aa`+`7fbf00d`); `/cas-grafik` (`4aa065b`+`e6254b6`); `/kontaktua` (`b4bfd6b`); `/bio` (`1675c04`); `/grafik` completo (`f9c86ba`/`b31682e`/`a3ad3b6`); Home cas `/cas` (`559d4e9`); Home eu `/` (`6a150a7`); LinkBar (`46fc74d`); Columnas de servicios (`d47eb73`); Fila CTA y flechas SVG (`9ddd3f4`); componente `HeaderNav` (`745ec18`); `layout.tsx` global; fuentes locales; descarga de recursos oficiales; 35 JPGs de portfolio; análisis completo; decisiones del usuario; documentos en `.ia/`.

---

## Tarea actual

Las 8 páginas están implementadas y validadas (build/tsc/lint). Pendiente: revisión visual del usuario de la web completa en local y confirmación de los pendientes menores (favicon, CrossFade) antes de considerar el proyecto finalizado.

---

## Próximo paso

1. Revisión visual del usuario de las 8 páginas en local (http://localhost:3001) vs original.
2. Confirmar pendientes menores: favicon (por defecto: del logo) y CrossFade (por defecto: navegación normal).
3. Actualizar STATUS.md y commit final.

---

## Último commit

- docs: update status with SEO closure (este commit)
- feat: add SEO metadata, canonical, sitemap and robots
- fix: restore literal ? and . paragraphs in cas-bio
- `7fbf00d` — docs: mark cas-bio and cas-contacto tasks as complete
- `e6ed3aa` — feat: implement cas-bio and cas-contacto pages with extracted texts
- `e6254b6` — feat: implement cas-grafik page with services, gallery and CTA

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
