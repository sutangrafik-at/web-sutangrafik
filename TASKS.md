# TASKS

## Infraestructura del proyecto

- [x] Commit de limpieza: eliminar copia estática del working tree (recursos originales conservados en el historial de Git)
- [x] Scaffold de Next.js 15 (TypeScript, Tailwind CSS, ESLint, App Router, `src/`)
- [x] Configurar Prettier (`eslint-config-prettier`, `prettier-plugin-tailwindcss`)
- [x] Instalar Framer Motion (stack definido en SPEC.md)
- [x] Estructura base: `src/components`, `src/lib`, `src/types`
- [x] Metadata base del layout (`lang="eu"`, título y descripción verificados de la copia original)
- [x] Validación: ESLint, TypeScript y build sin errores

## Pendiente

- [ ] Analizar la web de referencia (https://sutangrafik.wixsite.com/website) y generar tareas por página
- [ ] Implementar cada página (las tareas se generarán tras el análisis)

Formato esperado:

- [ ] Tarea pendiente
- [x] Tarea completada

Reglas:

- Cada tarea debe ser pequeña y verificable.
- No agrupar varias páginas en una sola tarea.
- No marcar una tarea como completada hasta haber validado:
  - Build
  - TypeScript
  - ESLint
  - Funcionamiento
  - Responsive
