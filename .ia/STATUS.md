# Estado del proyecto

## Fecha

31/07/2026

---

## Última tarea completada

- Componente **Columnas de servicios** (`src/components/ServicesColumns.tsx`, commit `d47eb73`): réplica exacta del SSR de `/grafik` — título BigNoodle 34px `0.35em` rojo `#DD0018` (es h2 en la réplica; en el original es `<p>`), espaciador 16px/`0.5em`, 4 líneas 16px worksans-extralight bold `#DD0018` con `letter-spacing:0`, 2 párrafos vacíos finales (wixGuard) como espaciado inferior; columnas 310px en left 140/631 dentro de fila de 237px; móvil: columnas apiladas centradas. Validado (tsc, ESLint 0 warnings, build OK).
- Anteriormente: Fila CTA y flechas SVG (`9ddd3f4`); componente `HeaderNav` (`745ec18`); `layout.tsx` global; fuentes locales; descarga de recursos oficiales; 35 JPGs de portfolio; análisis completo; decisiones del usuario; documentos en `.ia/`.

---

## Tarea actual

Ninguna en progreso. Siguiente: componente LinkBar de iconos (PNG 18×18, 2 o 4 iconos según idioma).

---

## Próximo paso

1. Sección "Componentes compartidos": HeaderNav, Fila CTA y flechas SVG, Columnas de servicios, LinkBar de iconos (cada una con su validación).
2. Confirmar pendientes menores: favicon (por defecto: del logo) y CrossFade (por defecto: navegación normal).
3. Extraer textos de `/cas-grafik`, `/cas-bio` y `/cas-contacto` de la web publicada (antes de implementarlas).

---

## Último commit

- `d47eb73` — feat: replicate services columns component
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
