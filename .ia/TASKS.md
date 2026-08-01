# TASKS

## Análisis

- [x] Análisis completo de la web de referencia (https://sutangrafik.wixsite.com/website): 8 páginas, estructura, textos, tipografías, colores, iconografía, recursos — ver ARCHITECTURE.md

## Confirmaciones previas a la implementación

- [x] Confirmar con el usuario los puntos de ARCHITECTURE.md §16: galería (35 JPGs del historial Git), formulario (modo prueba, sin email), footer (NO añadir)
- [x] Favicon: generar `.ico` a partir del logo (16/32/48/256, aspecto 4:3 con fondo transparente) — hecho 01/08/2026
- [x] CrossFade: el usuario no lo conoce → NO aplicar (decisión 01/08/2026; navegación normal)
- [x] Extraer textos exactos de `/cas-grafik`, `/cas-bio` y `/cas-contacto` de la web publicada (SSR + textos)

## Recursos y base

- [x] Extraer las 35 JPGs de portfolio del historial Git (commit `7a03e51`, `images/Portfoliokoak/`) a `public/images/portfolio`
- [x] Descargar al proyecto los recursos oficiales de `static.wixstatic.com` (logo, fondo, 4 iconos, imágenes de bio) a `public/images`
- [x] Añadir fuentes locales: BigNoodleTitling (woff2/woff/ttf) desde el historial Git y Third Rail (woff2/woff/ttf) desde wixstatic, a `public/fonts`
- [x] Configurar `layout.tsx` global: fuentes, fondo común (imagen 40% fija + blanco), metadata base, skip-link
- [x] Validar: TypeScript, ESLint, build

## Componentes compartidos

- [x] Componente HeaderNav (logo 119×90 + chips + selector EUS/CAS, estado activo por prop) — geometría re-medida del original (CDP + SSR): contenedor h-172px, logo top 100 left 0, EUS/CAS top 107 left 929/955 (26px, lh 1.15em), chips top 140 (eu: left 745/826/878; cas: left 756/837/889, chip 28px #DD0018, activo #A82020, selectores #DD0018/#8B0000); páginas con contenedor `ml-[130px]` (grid real del original, no centrado)
- [x] Componentes Fila CTA y flechas SVG (47×160 decorativa y 9×32 en CTA, rotada 180°), colores #DD0018 — path exacto del SSR; fila CTA con posiciones verificadas en las 3 páginas (flechas left 250/518 top 1, chips left 269/537, alto 79px)
- [x] Componente Columnas de servicios — detalles del SSR: título BigNoodle 34px 0.35em rojo #DD0018 (lh 1.15em), espaciador 16px/0.5em, 4 líneas worksans-extralight 16px lh 1.14em #DD0018 + guards (hasta 6 líneas), columnas 310px en left 140/631, fila 160px
- [x] Componente LinkBar de iconos (PNG 18×18, 2 o 4 iconos según idioma) — SSR verificado: `ul` aria-label "Barra de redes sociales", 18×18 object-fit cover, gap 5px (41px total eu); eu: Tel/Email; cas: + Facebook/Instagram con target _blank; hover: ninguno
- [ ] Validar: TypeScript, ESLint, build

## Home eu `/`

- [x] Implementar home eu: logo 354×266 centrado, EUS/CAS, 3 chips (GRAFIK/BIO/kontaktuA con `&nbsp;`), LinkBar 2 iconos (tel + mail) — posiciones SSR: logo left 313 top 71 (sin enlace), EUS/CAS left 830/856 top 71, chips left 370/451/503 top 10, LinkBar left 469 top 65; extraído componente Chip (usado también en HeaderNav y CtaRow)
- [x] Responsive y accesibilidad de la home eu
- [x] Validar: TypeScript, ESLint, build, funcionamiento, responsive

## Página `/grafik` (eu)

- [x] Implementar `/grafik`: HeaderNav, título GRAFIK 53px, eslogan, línea roja, intro, flechas decorativas, columnas de servicios (con textos oficiales de ARCHITECTURE.md §11) — SSR: título NBSP(ls 0.05em)+GRAFIK(ls 0.25em) 53px/1.5em blanco sobre #DD0018 en left 17 (310px), eslogan 26px/0.5em ls 0.45em, línea 979×5 (border-top 4px #DD0018), intro 17px/0.5em ls 0.23em, flechas 47×160 left 88/589 top 8, fila servicios 160px; márgenes exactos del grid original: título mt-33 mb-11, eslogan mb-13, línea mb-16, intro mt-8 mb-40, flechas mt-8 mb-69, galería ml-205 mb-30; metadata por página
- [x] Galería Masonry 576px con lightbox y las 35 imágenes de portfolio + fila CTA (ZER DA SUTAN GRAFIK? / aurrekontua eskatu) — `PortfolioGallery` (client): masonry CSS columns (2 móvil/3 escritorio, gap 5px) con las 35 imágenes (dimensiones reales en `src/data/portfolio.ts`) + lightbox (overlay, cerrar, anterior/siguiente, teclado Esc/←/→); CTA con hrefs bio/kontaktua; contenedor left 205, 576px, margin-bottom 30
- [x] Responsive y accesibilidad de `/grafik` — móvil: título 36px, eslogan/intro con wrap, línea full-width, columnas apiladas, galería a 2 columnas, CTA centrada; lightbox accesible (role dialog, aria-modal, teclado)
- [x] Validar: TypeScript, ESLint, build, funcionamiento, responsive — cadena vertical verificada con CDP (fonts reales bignoodle/worksans locales): logo 100, título 205, eslogan 314, intro 359, flechas 415, galería 611 (original real ≈612.5; el original headless mide 700 por artefacto Arial/parastorage bloqueado — las mediciones headless del original son inestables e inflan filas por wraps Arial; los valores de referencia fiables son el CSS del SSR + métricas reales de las fuentes)

## Página `/bio` (eu)

- [x] Implementar `/bio`: HeaderNav, título bio 53px, encabezado SUTAN GRAFIK (Third Rail + BigNoodle), 5 párrafos + separador ALEX TURRILLAS, logo pequeño 41×48 e imágenes (204×153 y 213×204) — SSR/mediciones del navegador: título `NBSP bio NBSP ` (ls 0.05em uniforme) 53px/1.5em blanco sobre #DD0018 en left -43 (310px) con margin-bottom -6; bloque de texto 622px en left 78 (margin 11/20) con encabezado SUTAN (Third Rail 30px ls 0.2em + 3 NBSP + espacio) + GRAFIK (BigNoodle 29px ls 0.35em), espaciadores (16px/0.5em y 14px/1.3em), 3 párrafos + ALEX TURRILLAS (18px ls 0.35em) + 2 párrafos, 2 espaciadores finales (21px y 16px centrado); imágenes absolutas: logo pequeño 41×48 left 197 (fila 5, encima del texto en el original), logo 204×153 left 738 (fila 6, mb 6), ilustración 213×204 left 733 (fila 7, mb 54); filas 5-8 = 465px
- [x] Fila CTA (EGINDAKO LANAK IKUSI / aurrekontua eskatu) + responsive y accesibilidad de `/bio` — móvil: título 36px, textos apilados, imágenes centradas; alt descriptivos en las 3 imágenes
- [x] Validar: TypeScript, ESLint, build, funcionamiento, responsive — verificado que el offset superior de 50px en el original es la barra de Wix (chrome a eliminar) y que el logo pequeño solapa el encabezado también en el original (elementFromPoint)

## Página `/kontaktua` (eu)

- [x] Implementar `/kontaktua`: HeaderNav, título kontaktua 53px (mailto), descripción, y componente Formulario (3 inputs + textarea + botón Bidali + mensaje éxito) — SSR/mediciones: título `NBSP kontaktua NBSP ` (ls 0.05em) 53px/1.5em blanco sobre #DD0018 en left 23 (310px) con margin-bottom 18 y enlace mailto:sutangrafik@gmail.com; descripción 622px en left 83 (margin-bottom -15): p1 29px (ls 0.1em, lh 1.15em → 33px) + p2 18px (21px) + NBSP 18px (21px, ls 0.35em) + NBSP 16px centrado bold (18px) = 93px, BigNoodle #DD0018; formulario 781px en left 83 (margin-bottom 25): grid [391px 386px] gap-x 3px con filas 43/43/43/50 (altura total 179px), email (pattern `^.+@.+\.[a-zA-Z]{2,63}$`, maxLength 250, autocomplete off) / nombre (maxLength 100) / asunto, textarea 386×124 (maxLength 500), botón Bidali 52×42 self-start justify-self-end (bg accent, sombra), mensaje éxito 686×16 "Eskerrik asko! Mezua ondo bidali da." (visible al enviar); inputs: bg rgba(255,255,255,0.3), sin borde, sombra 0 1px 4px rgba(0,0,0,0.6), 20px/1.4em BigNoodle #DD0018, placeholder negro, error borde #C71212 + texto #FF4040
- [x] Handler de envío del formulario en **modo prueba**: validación cliente con estados error/success como el original, SIN envío de email (éxito simulado) — errores "Campo obligatorio" / "Correo electrónico no válido" (textos estándar: los strings exactos del bundle Wix no son recuperables)
- [x] Fila CTA (ZER DA SUTAN GRAFIK? → /bio, EGINDAKO LANAK IKUSI → /grafik, mb 5px) + responsive y accesibilidad de `/kontaktua` — móvil: título 36px, descripción apilada, formulario en columna
- [x] Validar: TypeScript, ESLint, build, funcionamiento, responsive — geometría verificada vs original con CDP: título 310×80 @156, desc @254 (33/21/21/18), formulario 179px @332, botón @461, CTA chips @536 (idéntico al original); junto con el fix de HeaderNav (chips top 90, nav 156px) y el refactor de CtaRow (contenedor h-32 + prop className) en el mismo commit

## Home cas `/cas`

- [x] Implementar `/cas` (idéntica a la home eu pero chips ContaCtO, selector CAS activo y LinkBar de 4 iconos: tel, email, Facebook, Instagram con URLs reales) — posiciones SSR cas: chips left 377/458/510 (ContaCtO 92px) top 358, LinkBar left 446 top 421; ambas homes comparten `HomeContent`; metadata oficial cas (title, description, og)
- [x] Responsive y accesibilidad de `/cas`
- [x] Validar: TypeScript, ESLint, build, funcionamiento, responsive

## Página `/cas-grafik` (es)

- [x] Implementar `/cas-grafik` con los textos extraídos de la web publicada — HeaderNav (cas activo, chips ContaCtO left 756/837/889), título GRAFIK, eslogan 23px/0.45em, línea, intro 15px/0.2em, flechas mb-44, servicios (DISEÑO GRÁFICO / EDITORIAL IMAGEN con textos es), galería `md:ml-[201px] md:mb-[52px]` (left 201 del grid orig cas vs 205 eu), CTA (¿QUÉ ES SUTAN GRAFIK? / PEDIR PRESUPUESTO, mb-52); cadena vertical medida con CDP: logo 100, galería 611, CTA 3120 (orig real ≈612.5/3120.5)
- [x] Validar: TypeScript, ESLint, build, funcionamiento, responsive

## Página `/cas-bio` (es)

- [x] Implementar `/cas-bio` con los textos extraídos de la web publicada — SSR/mediciones CDP del original: título `NBSP bio NBSP ` (left -43, mb -6), bloque texto 622px left 78 (mt 11): SUTAN 30px Third Rail + GRAFIK 29px, párrafos 13px (2º bloque y 2 párrafos finales) y 14px (bloque central) worksans-bold justify, ALEX TURRILLAS 18px, espaciadores 16px/0.5em, guards, 21px/16px finales; imágenes: logo 41×48 left 197 (top-0), 204×153 left 738 (top-48, mb 0), 213×204 left 734 (top-201, mb 42 — difiere del eu: 207/54); CTA TRABAJOS REALIZAdos (lowercase d, texto literal del original) → /cas-grafik + PEDIR PRESUPUESTO → /cas-contacto (mb 44); cadena local == orig medida con CDP: título 201, texto 286, imágenes 275/323/476, CTA 741 (orig: 201/286/275/323/476/740)
- [x] Validar: TypeScript, ESLint, build, funcionamiento, responsive

## Página `/cas-contacto` (es)

- [x] Implementar `/cas-contacto` con los textos extraídos de la web publicada (incluye formulario) — SSR/mediciones CDP del original: título `NBSP contacto NBSP ` (left 12, mb 18, mailto), descripción 622px left 83 con `--min-height:105px` y mb -27: p1 29px ls 0.1em "¿necesitas un presupuesto para tus proyectos?" + p2 18px "ponte en contacto con nosotros y aclararemos dudas" + guards; formulario 781px left 83 mb 27 con `ContactForm lang="es"`: placeholders CORREO ELECTRÓNICO * / NOMBRE-APELLIDOS * / TEMA / MENSAJE (tema y textarea sin maxLength en el original cas), botón Bidali, éxito "¡Gracias! Mensaje enviado."; CTA ¿QUÉ ES SUTAN GRAFIK? → /cas-bio + TRABAJOS REALIZADOS → /cas-grafik (mb 5); cadena local == orig medida con CDP: título 206, desc 304, form 382, inputs 382/425/468, botón/success 511, CTA 589 (orig: 206/304/382/382/425/468/511/588)
- [x] Validar: TypeScript, ESLint, build, funcionamiento, responsive

## Cierre

- [x] SEO completo por página (metadata, OG oficial del SSR, canonical `sutangrafik.com`, sitemap, robots) — verificado en dev server: las 8 páginas con canonical + og:title del original (BIO/GRAFIK/KONTAKTUA ... eus, ... cas), sitemap.xml con 8 URLs, robots.txt con sitemap
- [x] Validación final global: build (14 rutas estáticas), TypeScript, ESLint, responsive de las 8 páginas (validado en cada tarea) — revisión visual vs original pendiente de aprobación del usuario
- [x] Actualizar STATUS.md y commit final

## Correcciones de auditoría (01/08/2026)

- [x] V1 — Centrado del grid: el original centra con `margin-left:calc((100% - 980px)/2)` (el "ml:130px" era un artefacto de medición a viewport 1240); corregido `md:ml-[130px]` → `md:mx-auto` en los 7 wrappers (HomeContent + bio, grafik, kontaktua, cas-bio, cas-grafik, cas-contacto). Verificado con CDP a 1280 y 1920: chips/CTA/flechas en x idéntico al original (ContaCtO 1352/1032, PEDIR 1000/680)
- [x] F1 — Bug mensaje de éxito eu del formulario: `success` mostraba el literal `{text.success}`; corregido a `Eskerrik asko! Mezua ondo bidali da.`
- [x] F2 — maxLength espurios: el original solo tiene maxlength en email (250) y nombre (100); eliminado `maxLength={100}` del asunto y `maxLength={500}` del textarea (ambos idiomas)
- [x] V2 — Peso 700 de Work Sans: el original registra la cara bold de worksans-extralight (negrita real); cargado `weight: ['200','700']` en next/font (antes solo 200 → faux-bold)
- [x] V3 — Mensaje de éxito en Helvetica (como el original helvetica-w01-roman): `fontFamily: 'Helvetica, Arial, sans-serif'` en el <p> de éxito (desktop + móvil)
- [x] V6 — `lang`: el original usa `lang="es"` en TODAS las páginas (verificado en los 7 SSR); layout.tsx corregido `lang="eu"` → `lang="es"`
- [x] Favicon: `.ico` regenerado a partir de `public/images/logo.png` (4 tamaños 16/32/48/256, PNG embebido, fondo transparente, aspecto 4:3 conservado)
- [x] Validar: TypeScript, ESLint, build, funcionamiento

## Refinamiento visual (01/08/2026)

- [x] **Fondo — textura/filtro**: el original sirve un tile del CDN reducido y desenfocado (`w_744,h_526,...,blur_1`) mostrado a `background-size:4961px 3508px`, opacity 0.4, repeat, center, fixed, sobre underlay blanco (`--bg-overlay-color:color_11`), layer `--fill-layer-image-height:120%`. Sustituido `public/images/background.jpg` por el tile exacto descargado del CDN (744×526, 47KB, URL del SSR home.html); CSS de `.site-background` sin cambios.
- [x] **Vertical home vs resto**: causa = banner freemium Wix (`--wix-ads-height:50px` → `#site-root{top:var(--wix-ads-height)}`; verificado con CDP ocultando el banner: home logo 71/chips 357 == local; interiores 50px más altos: bio 690, cas-grafik 3089). Decisión del usuario: punto medio 25/25 →
  - Home (+25): `HomeContent.tsx` logo/EUS/CAS top 96 (antes 71), chipsTop 382 (eu)/383 (es), linkbarTop 437 (eu)/446 (es), contenedor h-[523px].
  - Interiores (-25): `md:-mt-[25px]` en el wrapper `w-full max-w-[980px] md:mx-auto` de las 6 páginas (grafik, bio, kontaktua, cas-grafik, cas-bio, cas-contacto) — header + contenido juntos (nav 140→115, bio EGINDAKO LANAK 740→715, cas-grafik 3119→3094, kontaktua 586→561). Verificado por CDP.
- [x] **Transiciones entre páginas**: el original implementa View Transitions API (`@view-transition{navigation:auto;types:CrossFade}` + keyframes slide-horizontal-new/old (0.6s cubic-bezier(.83,0,.17,1)), slide-vertical, out-in-new/old (0.35s) + `view-transition-name`: header-group, wix-ads-group, footer-group, background-group, page-group). NO implementado — decisión del usuario (01/08/2026): no lo aplica por ahora. Si se decide replicar: reglas en `globals.css` + enlaces `next/link` (navegación SPA).
- [x] Validar: TypeScript, ESLint, build, funcionamiento

## Refinamiento visual — 4 diferencias (01/08/2026, decisión invertida)

- [x] **Transiciones entre páginas (ahora SÍ)**: instrucción del usuario de replicarlas sí o sí. Verificado el original en vivo con CDP: navegación cross-document real (sin SPA), `MutationObserver` no captura clases (la pseudo-clase `:root:active-view-transition` es del navegador, no un atributo), sin animaciones JS (`getAnimations()==[]`), CSS completo de `main.744ea815.min.css` extraído (3714 chars): el tipo `CrossFade` usa la animación por defecto del navegador (cross-fade) con `animation-duration:.6s` en el grupo `page-group` (header/wix-ads/footer/background con su propio `view-transition-name` para no fundirse), `cursor:wait` durante la transición y `@media (prefers-reduced-motion:reduce)` → sin animación. Implementado en la SPA local:
  - `src/components/ViewTransitions.tsx` (client): listener de clic global que intercepta enlaces internos (`a[href^="/"]`, sin modificadores) y envuelve `router.push` en `document.startViewTransition()` (fallback a push normal si no soportado), montado en `layout.tsx`.
  - `globals.css`: `#main-content{view-transition-name:page-group}` y `.site-background{view-transition-name:background-group}` (el fondo no se funde, como `background-group` del original), `::view-transition-{group,old,new}(page-group){animation-duration:.6s}` y bloque `prefers-reduced-motion:reduce` → `animation:none !important` (idéntico al original).
- [x] **Imagen de fondo — sin blur**: el SSR del original sirve placeholder `w_744,h_526,q_85,blur_1`, pero verificado con CDP en vivo que el cliente lo reemplaza por la versión nítida `w_1920,h_1358,q_90,usm_0.66_1.00_0.01,enc_auto` (sin blur) con `opacity:0.4` (el JS `tb_stop_client_images`/tiled-image hace `onload` y aplica la URI completa). Descargada esa URL exacta (615KB) → `public/images/background.jpg` (sustituye al tile blur 47KB). CSS de `.site-background` sin cambios (opacity 0.4 ya coincidía).
- [x] **Sombra/efecto de tarjeta de la galería**: medido en vivo por CDP dentro del iframe santa-galleries Masonry: cada `.item` lleva inline `box-shadow: rgba(0,0,0,0.36) 1.03px 2.82px 3px 1px` (el `style.min.css` no define sombra; la aplica `app.min.js`) y `cursor:pointer`. Aplicado en `PortfolioGallery.tsx`: `shadow-[1.03px_2.82px_3px_1px_rgba(0,0,0,0.36)]` en cada tarjeta (el espaciado mb-5/gap-5 NO se toca — ya acordado).
- [x] **Cursor pointer en la galería**: `cursor-pointer` añadido a cada tarjeta de `PortfolioGallery.tsx` (el original lo tiene en `.item` y en computed style).
- [x] Validar: TypeScript, ESLint, build, funcionamiento

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
