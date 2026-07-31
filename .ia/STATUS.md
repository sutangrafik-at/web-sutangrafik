# Estado del proyecto

## Fecha

31/07/2026

---

## Última tarea completada

- Configurado `layout.tsx` global: `@font-face` BigNoodleTitling + Third Rail (woff2→woff→ttf) y Work Sans 200 (worksans-extralight) vía `next/font/google`; fondo común replicando el original (blanco + `background.jpg` repeat 4961×3508 centrado, opacidad 0.4, fijo); metadata base exacta del SSR (title, description multilínea oficial, og:site_name SUTAN GRAFIK, og:type website, og:image logo 800×600, twitter summary_large_image, metadataBase `https://www.sutangrafik.com`); skip-link estilo Wix (BqYkvS) y `<main id="main-content">`. Colores oficiales como `@theme` en globals.css (accent, accent-active, accent-hover, success, error).
- Anteriormente: fuentes locales; descarga de recursos oficiales; 35 JPGs de portfolio; análisis completo; decisiones del usuario; documentos en `.ia/`.

---

## Tarea actual

Ninguna en progreso. Siguiente: componente HeaderNav (logo 119×90 + chips + selector EUS/CAS).

---

## Próximo paso

1. Sección "Componentes compartidos": HeaderNav, Fila CTA y flechas SVG, Columnas de servicios, LinkBar de iconos (cada una con su validación).
2. Confirmar pendientes menores: favicon (por defecto: del logo) y CrossFade (por defecto: navegación normal).
3. Extraer textos de `/cas-grafik`, `/cas-bio` y `/cas-contacto` de la web publicada (antes de implementarlas).

---

## Último commit

Pendiente (se realizará tras el commit del layout global)

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
