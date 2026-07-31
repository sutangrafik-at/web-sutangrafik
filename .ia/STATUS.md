# Estado del proyecto

## Fecha

31/07/2026

---

## Última tarea completada

- Extraer las 35 JPGs de portfolio del historial Git (`7a03e51`, `images/Portfoliokoak/`) a `public/images/portfolio/` (162.7 MB, resoluciones originales conservadas, sin modificar).
- Anteriormente: análisis completo de la web de referencia; ARCHITECTURE.md; TASKS.md por página; decisiones del usuario registradas en ARCHITECTURE.md §16 (galería 35 JPGs, formulario modo prueba sin email, footer no); investigación técnica de la galería (iframe santa-galleries protegido) en §9; documentos trasladados a `.ia/`.

---

## Tarea actual

Ninguna en progreso. Siguiente: descargar los recursos oficiales de `static.wixstatic.com` (logo, fondo, 4 iconos, imágenes de bio) a `public/images`.

---

## Próximo paso

1. Tarea "Recursos y base" siguiente: descargar recursos oficiales de `static.wixstatic.com` (logo, fondo, 4 iconos, imágenes de bio) a `public/images`.
2. Luego: fuentes locales (BigNoodleTitling, Third Rail) y `layout.tsx` global.
3. Confirmar pendientes menores: favicon (por defecto: del logo) y CrossFade (por defecto: navegación normal).
4. Extraer textos de `/cas-grafik`, `/cas-bio` y `/cas-contacto` de la web publicada (antes de implementarlas).

---

## Último commit

Pendiente (se realizará tras el commit de la extracción de portfolio)

---

## Estado

- Build: OK (next build --turbopack, sin errores)
- TypeScript: OK (tsc --noEmit, sin errores)
- ESLint: OK (sin errores)

---

## Problemas conocidos

- URLs de la galería Masonry de `/grafik` inaccesibles (iframe santa-galleries protegido, AccessDenied) → resuelto con decisión de usar las 35 JPGs del historial Git.
- Destino del envío del formulario: en modo prueba, sin email (decisión del usuario).
- Textos de las 3 páginas cas internas pendientes de extracción de la web publicada.
- Favicon y CrossFade pendientes de confirmar (hay valor por defecto definido).
- Documentos en `.ia/` (fuera de la raíz); actualizar referencias de AGENTS.md (RECUPERACIÓN DE LA SESIÓN) si se mantiene la ubicación.

---

## Notas

- Fuente de verdad: web publicada (revisión 211, SSR capturado) + recursos del historial Git (commit 7a03e51).
- Navegación no es layout global: cada página es una landing con logo + chips + EUS/CAS como contenido propio.
- Wix clásico no responsive (980px fijo); la réplica añade responsive manteniendo fidelidad (prioridad 3 de AGENTS.md).
