# Estado del proyecto

## Fecha

31/07/2026

---

## Última tarea completada

- Análisis completo de la web de referencia (https://sutangrafik.wixsite.com/website): 8 páginas (4 eu + 4 cas), estructura, orden de secciones, textos oficiales, tipografías (BigNoodleTitling, Third Rail, worksans-extralight), colores, iconografía, enlaces, SEO y recursos multimedia (URLs wixstatic).
- Documentación: ARCHITECTURE.md con el informe completo de arquitectura; TASKS.md con tareas pequeñas por página en orden real (home → grafik → bio → kontaktua → cas).
- Decisiones del usuario registradas en ARCHITECTURE.md §16:
  - **Galería**: usar las 35 JPGs de portfolio del historial Git (las URLs reales no son accesibles: iframe protegido con AccessDenied).
  - **Formulario**: modo prueba, sin envío de email (éxito simulado).
  - **Footer**: no añadir (la web real no tiene).
- Investigación técnica de la galería documentada en ARCHITECTURE.md §9 (iframe santa-galleries `comp-ju15vg0f`, bundles protegidos).
- Documentos del proyecto trasladados a la carpeta `.ia/` (convención del usuario; los procesos deben leerlos desde ahí).

---

## Tarea actual

Ninguna en progreso. Esperando instrucciones del usuario para comenzar la implementación.

---

## Próximo paso

1. Tarea "Recursos y base" (TASKS.md): extraer las 35 JPGs de portfolio del historial Git a `public/images/portfolio`, descargar recursos oficiales de `static.wixstatic.com`, añadir fuentes locales y configurar `layout.tsx`.
2. Confirmar pendientes menores: favicon (por defecto: del logo) y CrossFade (por defecto: navegación normal).
3. Extraer textos de `/cas-grafik`, `/cas-bio` y `/cas-contacto` de la web publicada (antes de implementarlas).

---

## Último commit

Pendiente (se realizará tras esta actualización de documentación)

---

## Estado

- Build: no ejecutado en este turno (no se modificó código de la app)
- TypeScript: no ejecutado en este turno
- ESLint: no ejecutado en este turno

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
