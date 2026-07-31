# Estado del proyecto

## Fecha

31/07/2026

---

## Última tarea completada

- **Página `/bio` (eu)** (`src/app/bio/page.tsx`, commit `1675c04`): HeaderNav (bio activo), título `NBSP bio NBSP ` 53px/1.5em blanco sobre `#DD0018` (ls 0.05em uniforme) en left -43 (310px) con margin-bottom -6, encabezado SUTAN (Third Rail 30px ls 0.2em + 3 NBSP + espacio) + GRAFIK (BigNoodle 29px ls 0.35em), espaciadores (16px/0.5em y 14px/1.3em), 3 párrafos 14px justificados bold + separador ALEX TURRILLAS (18px ls 0.35em) + 2 párrafos + 2 espaciadores finales (21px BigNoodle y 16px centrado), todo en bloque 622px left 78 (margin 11/20); 3 imágenes absolutas: logo pequeño 41×48 left 197 (fila 5, sobre el texto — verificado con elementFromPoint que el original también lo pinta encima), logo 204×153 left 738 (fila 6, mb 6), ilustración 213×204 left 733 (fila 7, mb 54); filas 5-8 = 465px; CTA (EGINDAKO LANAK IKUSI → /grafik, aurrekontua eskatu → /kontaktua); metadata BIO | Sutan Grafik; móvil: apilado con título 36px, imágenes centradas; alt descriptivos. Medición vía Edge headless + CDP (posiciones computadas reales del original). Validado (tsc, ESLint 0 warnings, build OK, 8 rutas estáticas).
- Anteriormente: `/grafik` completo (`f9c86ba`/`b31682e`/`a3ad3b6`); Home cas `/cas` (`559d4e9`); Home eu `/` (`6a150a7`); LinkBar (`46fc74d`); Columnas de servicios (`d47eb73`); Fila CTA y flechas SVG (`9ddd3f4`); componente `HeaderNav` (`745ec18`); `layout.tsx` global; fuentes locales; descarga de recursos oficiales; 35 JPGs de portfolio; análisis completo; decisiones del usuario; documentos en `.ia/`.

---

## Tarea actual

Ninguna en progreso. Siguiente: implementar `/kontaktua` (eu) — HeaderNav, título kontaktua 53px (mailto), descripción, formulario modo prueba (3 inputs + textarea + botón Bidali + mensaje éxito) y fila CTA.

---

## Próximo paso

1. Implementar `/kontaktua` (eu): título kontaktua 53px enlazado a mailto, descripción 29px/18px, componente Formulario con validación cliente (estados error/success del original) en modo prueba y fila CTA (ZER DA SUTAN GRAFIK? / EGINDAKO LANAK IKUSI).
2. Extraer textos de `/cas-grafik`, `/cas-bio` y `/cas-contacto` de la web publicada (antes de implementarlas).
3. Confirmar pendientes menores: favicon (por defecto: del logo) y CrossFade (por defecto: navegación normal).

---

## Último commit

- `1675c04` — feat: replicate bio page with header, paragraphs and images
- `f9c86ba` — chore: mark grafik page tasks as complete
- `b31682e` — feat: add portfolio masonry gallery with lightbox and CTA row
- `a3ad3b6` — feat: implement grafik page header, slogan, line, intro and services
- `559d4e9` — feat: implement cas home page with shared home content

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
