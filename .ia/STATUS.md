# Estado del proyecto

## Fecha

31/07/2026

---

## Última tarea completada

- Añadidas las fuentes locales a `public/fonts/`: BigNoodleTitling (woff2/woff/ttf, del historial Git) y Third Rail (woff2/woff/ttf, descargada de `static.wixstatic.com/ufonts/ef03a3_004476c206e5480fafac36a3a1851d13/`). Verificado: los `.woff2` originales son bytes idénticos a los `.woff` (nota documentada en ARCHITECTURE.md §13 para el `@font-face`).
- Anteriormente: descarga de recursos oficiales a `public/images/`; extracción de las 35 JPGs de portfolio; análisis completo; decisiones del usuario; documentos en `.ia/`.

---

## Tarea actual

Ninguna en progreso. Siguiente: configurar `layout.tsx` global (fuentes, fondo común, metadata base, skip-link).

---

## Próximo paso

1. Tarea "Recursos y base" siguiente: configurar `layout.tsx` global — fuentes (`@font-face` woff2→woff→ttf, nota de ARCHITECTURE.md §13), fondo común (imagen 40% fija + blanco), metadata base, skip-link.
2. Confirmar pendientes menores: favicon (por defecto: del logo) y CrossFade (por defecto: navegación normal).
3. Extraer textos de `/cas-grafik`, `/cas-bio` y `/cas-contacto` de la web publicada (antes de implementarlas).

---

## Último commit

Pendiente (se realizará tras el commit de fuentes locales)

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
