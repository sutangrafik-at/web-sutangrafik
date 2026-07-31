# Estado del proyecto

## Fecha

31/07/2026

---

## Última tarea completada

- Descargados los recursos oficiales de `static.wixstatic.com` a `public/images/` (logo 800×600, background 4961×3508, 4 iconos 225×225 en `icons/`, bio-logo 473×558, bio-image 407×390) — originales sin transformar. ARCHITECTURE.md §13 corregido con dimensiones reales.
- Anteriormente: extracción de las 35 JPGs de portfolio a `public/images/portfolio/`; análisis completo de la web de referencia; decisiones del usuario (galería 35 JPGs, formulario modo prueba, footer no); documentos en `.ia/`.

---

## Tarea actual

Ninguna en progreso. Siguiente: añadir fuentes locales (BigNoodleTitling woff2/woff/ttf y Third Rail) a `public/fonts`.

---

## Próximo paso

1. Tarea "Recursos y base" siguiente: añadir fuentes locales (BigNoodleTitling, Third Rail) desde el historial Git / wixstatic a `public/fonts`.
2. Luego: configurar `layout.tsx` global (fuentes, fondo común, metadata base, skip-link).
3. Confirmar pendientes menores: favicon (por defecto: del logo) y CrossFade (por defecto: navegación normal).
4. Extraer textos de `/cas-grafik`, `/cas-bio` y `/cas-contacto` de la web publicada (antes de implementarlas).

---

## Último commit

Pendiente (se realizará tras el commit de recursos oficiales)

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
