# Estado del proyecto

## Fecha

31/07/2026

---

## Última tarea completada

- Componente **LinkBar de iconos** (`src/components/LinkBar.tsx`, commit `46fc74d`): réplica del SSR de las homes — `ul` con `aria-label="Barra de redes sociales"`, iconos PNG 18×18 `object-fit:cover` con `gap-[5px]` (ancho medido original 41px para 2 iconos), prop `items` con label tipado (`Tel`/`Email`/`Facebook`/`Instagram`) mapeado a `public/images/icons/*.png`; externos con `target="_blank"` + `rel="noopener noreferrer"`. Sin hover propio (verificado en CSS). Validado (tsc, ESLint 0 warnings, build OK).
- Anteriormente: Columnas de servicios (`d47eb73`); Fila CTA y flechas SVG (`9ddd3f4`); componente `HeaderNav` (`745ec18`); `layout.tsx` global; fuentes locales; descarga de recursos oficiales; 35 JPGs de portfolio; análisis completo; decisiones del usuario; documentos en `.ia/`.

---

## Tarea actual

Ninguna en progreso. Siguiente: implementar home eu `/` (logo 354×266 centrado, EUS/CAS, 3 chips, LinkBar 2 iconos).

---

## Próximo paso

1. Sección "Componentes compartidos": HeaderNav, Fila CTA y flechas SVG, Columnas de servicios, LinkBar de iconos (cada una con su validación).
2. Confirmar pendientes menores: favicon (por defecto: del logo) y CrossFade (por defecto: navegación normal).
3. Extraer textos de `/cas-grafik`, `/cas-bio` y `/cas-contacto` de la web publicada (antes de implementarlas).

---

## Último commit

- `46fc74d` — feat: replicate link bar component
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
