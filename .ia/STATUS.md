# Estado del proyecto

## Fecha

31/07/2026

---

## Última tarea completada

- **Home cas `/cas`** (`src/app/cas/page.tsx`, commit `559d4e9`): misma estructura que la home eu con datos SSR cas — chips GRAFIK/BIO/ContaCtO (left 377/458/510, ContaCtO 92px, top 358), CAS activo `#8B0000`, LinkBar 4 iconos (tel, email, Facebook, Instagram) left 446 top 421; metadata oficial cas (title "Sutan Grafik | Diseño gráfico", description y og:title del SSR). Ambas homes comparten `src/components/HomeContent.tsx` (prop `lang`, tabla HOME_DATA con posiciones exactas por idioma; logo 354×266 sin enlace, EUS/CAS left 830/856 top 71). LinkBar gana prop `style`. Validado (tsc, ESLint 0 warnings, build OK, 6 rutas estáticas).
- Anteriormente: Home eu `/` (`6a150a7`); LinkBar (`46fc74d`); Columnas de servicios (`d47eb73`); Fila CTA y flechas SVG (`9ddd3f4`); componente `HeaderNav` (`745ec18`); `layout.tsx` global; fuentes locales; descarga de recursos oficiales; 35 JPGs de portfolio; análisis completo; decisiones del usuario; documentos en `.ia/`.

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
