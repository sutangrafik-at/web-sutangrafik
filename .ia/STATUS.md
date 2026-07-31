# Estado del proyecto

## Fecha

31/07/2026

---

## Última tarea completada

- Componente `HeaderNav` (`src/components/HeaderNav.tsx`, commit `745ec18`): réplica del header de páginas internas — logo 119×90 enlace a home, chips h1 28px BigNoodleTitling blanco (activo `#A82020`, resto `#DD0018`, `&nbsp;` alrededor) con posiciones exactas del SSR (GRAFIK left 745, BIO 826, kontaktuA 878, top 139), selector EUS/CAS 16px (activo `#8B0000`, inactivo `#DD0018`; left 929/955, top 57) enlazando a la misma página en el otro idioma; fila nav 202px dentro de contenedor 980px centrado; variante móvil apilada centrada. Añadidos `--font-bignoodle` y `--font-thirdrail` al `@theme` de globals.css. Validado (tsc, ESLint 0 warnings, build OK).
- Anteriormente: `layout.tsx` global con `@font-face` BigNoodleTitling + Third Rail y Work Sans 200; fondo común (blanco + `background.jpg` tile 40% fijo); metadata base exacta del SSR; skip-link; colores oficiales en `@theme`. Fuentes locales; descarga de recursos oficiales; 35 JPGs de portfolio; análisis completo; decisiones del usuario; documentos en `.ia/`.

---

## Tarea actual

Ninguna en progreso. Siguiente: componentes Fila CTA y flechas SVG (47×160 decorativa y 9×32 en CTA, rotada 180°, `#DD0018`).

---

## Próximo paso

1. Sección "Componentes compartidos": HeaderNav, Fila CTA y flechas SVG, Columnas de servicios, LinkBar de iconos (cada una con su validación).
2. Confirmar pendientes menores: favicon (por defecto: del logo) y CrossFade (por defecto: navegación normal).
3. Extraer textos de `/cas-grafik`, `/cas-bio` y `/cas-contacto` de la web publicada (antes de implementarlas).

---

## Último commit

- `745ec18` — feat: replicate header navigation component (HeaderNav + fuentes en @theme)

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
