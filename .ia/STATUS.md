# Estado del proyecto

## Fecha

31/07/2026

---

## Última tarea completada

- **Página `/kontaktua` (eu)** (`src/app/kontaktua/page.tsx` + `src/components/ContactForm.tsx`, commit `b4bfd6b`): HeaderNav (kontaktua activo), título `NBSP kontaktua NBSP ` 53px/1.5em blanco sobre `#DD0018` (ls 0.05em) en left 23 (310px) margin-bottom 18, enlazado a mailto:sutangrafik@gmail.com; descripción 622px left 83 (mb -15): 29px/1.15em (33px) + 18px/1.15em (21px) + NBSP 18px ls 0.35em (21px) + NBSP 16px bold centrado (18px) = 93px, BigNoodle #DD0018 ls 0.1em; formulario 781px left 83 (mb 25): grid 391/386 gap-x 3 con filas 43/43/43/50 (179px total), email (pattern `^.+@.+\.[a-zA-Z]{2,63}$`, maxLength 250) / nombre (maxLength 100) / asunto, textarea 386×124, botón Bidali 52×42 self-start (bg accent, sombra), éxito 686×16 "Eskerrik asko! Mezua ondo bidali da."; inputs bg rgba(255,255,255,0.3), sombra 0 1px 4px rgba(0,0,0,0.6), 20px/1.4em #DD0018, error borde #C71212 + texto #FF4040; validación cliente modo prueba ("Campo obligatorio" / "Correo electrónico no válido", éxito simulado sin email); CTA (ZER DA SUTAN GRAFIK? → /bio, EGINDAKO LANAK IKUSI → /grafik, mb 5px); móvil apilado (título 36px). Geometría verificada vs original con Edge headless + CDP: título 310×80 @156, desc @254 (33/21/21/18), form 179 @332, botón @461, CTA @536 — idénticos. El mismo commit incluye el fix de HeaderNav (chips top-[90px], contenedor h-[156px] — antes 139px/202px) y el refactor de CtaRow (contenedor h-[32px] + prop `className`; antes 79px fijo; mb resultantes: grafik 46, bio 41, kontaktua 5).
- Anteriormente: `/bio` (`1675c04`); `/grafik` completo (`f9c86ba`/`b31682e`/`a3ad3b6`); Home cas `/cas` (`559d4e9`); Home eu `/` (`6a150a7`); LinkBar (`46fc74d`); Columnas de servicios (`d47eb73`); Fila CTA y flechas SVG (`9ddd3f4`); componente `HeaderNav` (`745ec18`); `layout.tsx` global; fuentes locales; descarga de recursos oficiales; 35 JPGs de portfolio; análisis completo; decisiones del usuario; documentos en `.ia/`.

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
