# Estado del proyecto

## Fecha

01/08/2026

---

## Última tarea completada

- **Corrección de las diferencias detectadas en la auditoría (01/08/2026)**: V1 centrado del grid (`md:mx-auto` en los 7 wrappers — el original usa `margin-left:calc((100% - 980px)/2)`; el `ml:130px` era artefacto del viewport de medición 1240; verificado por CDP a 1280/1920: x idéntico al original en chips/CTA/flechas), F1 bug del mensaje de éxito eu (`{text.success}` literal → "Eskerrik asko! Mezua ondo bidali da."), F2 maxLengths espurios eliminados (asunto y textarea; el original solo tiene email=250 y nombre=100), V2 Work Sans con peso 700 (negrita real, no faux-bold), V3 mensaje de éxito en Helvetica, V6 `lang="es"` en todas las páginas (como el original, verificado en los 7 SSR), favicon `.ico` regenerado del logo (16/32/48/256, PNG embebido, aspecto 4:3 con fondo transparente). Comprobaciones: tsc/lint/build OK (14 rutas).
- Anteriormente: Cierre SEO (canonical/OG/sitemap/robots, `0f37b1a`); `/cas-bio` y `/cas-contacto` (`e6ed3aa`+`7fbf00d`); `/cas-grafik` (`4aa065b`+`e6254b6`); `/kontaktua` (`b4bfd6b`); `/bio` (`1675c04`); `/grafik` completo (`f9c86ba`/`b31682e`/`a3ad3b6`); Home cas `/cas` (`559d4e9`); Home eu `/` (`6a150a7`); LinkBar (`46fc74d`); Columnas de servicios (`d47eb73`); Fila CTA y flechas SVG (`9ddd3f4`); componente `HeaderNav` (`745ec18`); `layout.tsx` global; fuentes locales; descarga de recursos oficiales; 35 JPGs de portfolio; análisis completo; decisiones del usuario; documentos en `.ia/`.

---

## Tarea actual

Las 8 páginas están implementadas y validadas (build/tsc/lint). Pendiente: revisión visual del usuario de la web completa en local y confirmación del favicon generado.

---

## Próximo paso

1. Revisión visual del usuario de las 8 páginas en local (http://localhost:3001) vs original.
2. Confirmación del favicon generado a partir del logo.
3. Actualizar STATUS.md y commit final.

---

## Último commit

- docs: update status with audit corrections (este commit)
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
- Favicon y CrossFade pendientes de confirmar (hay valor por defecto definido).
- Documentos en `.ia/` (fuera de la raíz); actualizar referencias de AGENTS.md (RECUPERACIÓN DE LA SESIÓN) si se mantiene la ubicación.

---

## Notas

- Fuente de verdad: web publicada (revisión 211, SSR capturado) + recursos del historial Git (commit 7a03e51).
- Navegación no es layout global: cada página es una landing con logo + chips + EUS/CAS como contenido propio.
- El grid del original **está centrado** (`margin-left:calc((100% - 980px)/2)`); el "ml:130px" medido en sesiones previas era el offset de centrado al viewport de medición (1240px). La réplica usa `md:mx-auto` en el contenedor de página (corrección V1, verificado por CDP).
- Wix clásico no responsive (980px fijo); la réplica añade responsive manteniendo fidelidad (prioridad 3 de AGENTS.md).
