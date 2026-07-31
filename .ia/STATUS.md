# Estado del proyecto

## Fecha

31/07/2026

---

## Última tarea completada

- Componentes **Fila CTA y flechas SVG** (`src/components/Arrow.tsx`, `src/components/CtaRow.tsx`, commit `9ddd3f4`): flecha SVG con path exacto del SSR (viewBox `62.414 7.193 56.117 189.118`, rotada 180°, fill `#DD0018`) para los dos tamaños (47×160 decorativa, 9×32 CTA); fila CTA (flecha-enlace + chip h1 28px blanco sobre `#DD0018` con `&nbsp;` + flecha + chip) con posiciones verificadas en los SSR de `/grafik`, `/bio` y `/kontaktua` (flechas left 250/518 top 1, chips left 269/537, alto de fila 79px; enlaces de flecha y chip apuntan al mismo destino); variante móvil centrada. Validado (tsc, ESLint 0 warnings, build OK).
- Anteriormente: componente `HeaderNav` (`745ec18`); `layout.tsx` global; fuentes locales; descarga de recursos oficiales; 35 JPGs de portfolio; análisis completo; decisiones del usuario; documentos en `.ia/`.

---

## Tarea actual

Ninguna en progreso. Siguiente: componente Columnas de servicios (título 34px + lista bold 16px worksans-extralight).

---

## Próximo paso

1. Sección "Componentes compartidos": HeaderNav, Fila CTA y flechas SVG, Columnas de servicios, LinkBar de iconos (cada una con su validación).
2. Confirmar pendientes menores: favicon (por defecto: del logo) y CrossFade (por defecto: navegación normal).
3. Extraer textos de `/cas-grafik`, `/cas-bio` y `/cas-contacto` de la web publicada (antes de implementarlas).

---

## Último commit

- `9ddd3f4` — feat: replicate CTA row and arrow SVG components
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
