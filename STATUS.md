# Estado del proyecto

## Fecha

31/07/2026

---

## Última tarea completada

- Análisis completo de la web de referencia (https://sutangrafik.wixsite.com/website): 8 páginas (4 eu + 4 cas), estructura, orden de secciones, textos oficiales, tipografías (BigNoodleTitling, Third Rail, worksans-extralight), colores, iconografía, enlaces, SEO y recursos multimedia (URLs wixstatic).
- Documentación: ARCHITECTURE.md creado con el informe completo de arquitectura (8 páginas, componentes, navegación, formularios, galerías, animaciones, responsive, recursos).
- TASKS.md regenerado con tareas pequeñas por página en orden real (home → grafik → bio → kontaktua → cas).

---

## Tarea actual

Ninguna en progreso. Esperando instrucciones del usuario sobre los 5 puntos pendientes de confirmación (ARCHITECTURE.md §16): galería, formulario, footer, favicon, CrossFade.

---

## Próximo paso

1. Confirmar con el usuario las decisiones de ARCHITECTURE.md §16.
2. Extraer textos exactos de `/cas-grafik`, `/cas-bio` y `/cas-contacto` de la web publicada.
3. Tarea "Recursos y base": descargar recursos oficiales y configurar layout global.

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

- Las URLs de las imágenes de la galería Masonry de `/grafik` no están expuestas en el SSR (componente iframe de Wix). Candidatas: 35 JPGs de portfolio en el historial Git, pendiente de confirmación.
- El destino del envío del formulario no está expuesto (Wix Forms) → requiere decisión del usuario.
- Textos de las 3 páginas cas internas pendientes de extracción de la web publicada.
- La web real no tiene footer, favicon ni animaciones; la copia anterior sí tenía footer (correcciones del usuario) → confirmar.

---

## Notas

- Fuente de verdad: web publicada (revisión 211, SSR capturado) + recursos del historial Git (commit 7a03e51).
- Navegación no es layout global: cada página es una landing con logo + chips + EUS/CAS como contenido propio.
- Wix clásico no responsive (980px fijo); la réplica añade responsive manteniendo fidelidad (prioridad 3 de AGENTS.md).
