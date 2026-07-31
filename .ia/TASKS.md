# TASKS

## Análisis

- [x] Análisis completo de la web de referencia (https://sutangrafik.wixsite.com/website): 8 páginas, estructura, textos, tipografías, colores, iconografía, recursos — ver ARCHITECTURE.md

## Confirmaciones previas a la implementación

- [x] Confirmar con el usuario los puntos de ARCHITECTURE.md §16: galería (35 JPGs del historial Git), formulario (modo prueba, sin email), footer (NO añadir)
- [ ] Pendiente de confirmar: favicon y CrossFade (por defecto: favicon del logo, navegación normal)
- [ ] Extraer textos exactos de las páginas `/cas-grafik`, `/cas-bio` y `/cas-contacto` de la web publicada (los locales `es` de la copia anterior no son fuente de verdad)

## Recursos y base

- [x] Extraer las 35 JPGs de portfolio del historial Git (commit `7a03e51`, `images/Portfoliokoak/`) a `public/images/portfolio`
- [x] Descargar al proyecto los recursos oficiales de `static.wixstatic.com` (logo, fondo, 4 iconos, imágenes de bio) a `public/images`
- [x] Añadir fuentes locales: BigNoodleTitling (woff2/woff/ttf) desde el historial Git y Third Rail (woff2/woff/ttf) desde wixstatic, a `public/fonts`
- [x] Configurar `layout.tsx` global: fuentes, fondo común (imagen 40% fija + blanco), metadata base, skip-link
- [x] Validar: TypeScript, ESLint, build

## Componentes compartidos

- [x] Componente HeaderNav (logo 119×90 + chips + selector EUS/CAS, estado activo por prop) con estilos exactos (chip 28px blanco sobre #DD0018, activo #A82020, selectores #DD0018/#8B0000; posiciones verificadas del SSR: chips top 139 left 745/826/878, EUS/CAS top 57 left 929/955)
- [ ] Componentes Fila CTA y flechas SVG (47×160 decorativa y 9×32 en CTA, rotada 180°), colores #DD0018
- [ ] Componente Columnas de servicios (título 34px + lista bold 16px worksans-extralight)
- [ ] Componente LinkBar de iconos (PNG 18×18, 2 o 4 iconos según idioma)
- [ ] Validar: TypeScript, ESLint, build

## Home eu `/`

- [ ] Implementar home eu: logo 354×266 centrado, EUS/CAS, 3 chips (GRAFIK/BIO/kontaktuA con `&nbsp;`), LinkBar 2 iconos (tel + mail)
- [ ] Responsive y accesibilidad de la home eu
- [ ] Validar: TypeScript, ESLint, build, funcionamiento, responsive

## Página `/grafik` (eu)

- [ ] Implementar `/grafik`: HeaderNav, título GRAFIK 53px, eslogan, línea roja, intro, flechas decorativas, columnas de servicios (con textos oficiales de ARCHITECTURE.md §11)
- [ ] Galería Masonry 576px con lightbox y las 35 imágenes de portfolio + fila CTA (ZER DA SUTAN GRAFIK? / aurrekontua eskatu)
- [ ] Responsive y accesibilidad de `/grafik`
- [ ] Validar: TypeScript, ESLint, build, funcionamiento, responsive

## Página `/bio` (eu)

- [ ] Implementar `/bio`: HeaderNav, título bio 53px, encabezado SUTAN GRAFIK (Third Rail + BigNoodle), 5 párrafos + separador ALEX TURRILLAS, logo pequeño 41×48 e imágenes (204×153 y 213×204)
- [ ] Fila CTA (EGINDAKO LANAK IKUSI / aurrekontua eskatu) + responsive y accesibilidad de `/bio`
- [ ] Validar: TypeScript, ESLint, build, funcionamiento, responsive

## Página `/kontaktua` (eu)

- [ ] Implementar `/kontaktua`: HeaderNav, título kontaktua 53px (mailto), descripción, y componente Formulario (3 inputs + textarea + botón Bidali + mensaje éxito)
- [ ] Handler de envío del formulario en **modo prueba**: validación cliente con estados error/success como el original, SIN envío de email (éxito simulado)
- [ ] Fila CTA + responsive y accesibilidad de `/kontaktua`
- [ ] Validar: TypeScript, ESLint, build, funcionamiento, responsive

## Home cas `/cas`

- [ ] Implementar `/cas` (idéntica a la home eu pero chips ContaCtO, selector CAS activo y LinkBar de 4 iconos: tel, email, Facebook, Instagram con URLs reales)
- [ ] Responsive y accesibilidad de `/cas`
- [ ] Validar: TypeScript, ESLint, build, funcionamiento, responsive

## Página `/cas-grafik` (es)

- [ ] Implementar `/cas-grafik` con los textos extraídos de la web publicada
- [ ] Validar: TypeScript, ESLint, build, funcionamiento, responsive

## Página `/cas-bio` (es)

- [ ] Implementar `/cas-bio` con los textos extraídos de la web publicada
- [ ] Validar: TypeScript, ESLint, build, funcionamiento, responsive

## Página `/cas-contacto` (es)

- [ ] Implementar `/cas-contacto` con los textos extraídos de la web publicada (incluye formulario)
- [ ] Validar: TypeScript, ESLint, build, funcionamiento, responsive

## Cierre

- [ ] SEO completo por página (metadata, OG, canonical `sutangrafik.com`, sitemap, robots)
- [ ] Validación final global: build, TypeScript, ESLint, responsive de las 8 páginas, revisión visual vs original
- [ ] Actualizar STATUS.md y commit final

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

Reglas adicionales:

- Solo puede existir una tarea "En progreso".
- Al completar una tarea, marcarla como completada inmediatamente.
- Registrar la siguiente tarea como "En progreso" únicamente cuando se vaya a comenzar.
