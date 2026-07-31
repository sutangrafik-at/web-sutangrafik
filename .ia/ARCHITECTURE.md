# ARCHITECTURE

Análisis de ingeniería inversa de la web de referencia **https://sutangrafik.wixsite.com/website** (revisión 211, renderer Thunderbolt 1.17680.0, Wix clásico no responsive).

Fuente de verdad: web publicada (SSR capturado de `/`, `/grafik`, `/bio`, `/kontaktua`, `/cas`).

---

## 1. Arquitectura general del sitio

- **Wix clásico** (no responsive): ancho fijo de **980px** centrado (`calc((100% - 980px) * 0.5)`), sin versión móvil propia.
- **Sitio multi-página** (no SPA): cada página es una landing con su propio contenido, **sin header ni footer** (el `SITE_HEADER`/`SITE_FOOTER` existen pero están vacíos y ocultos por `#masterPage.landingPage`).
- La "navegación" (logo + chips + selector de idioma) **es contenido de cada página**, no layout global.
- **Bilingüe sin i18n de Wix**: dos bloques de páginas — euskera (idioma original) y castellano (rutas `cas-*`), conectados por los enlaces EUS/CAS.
- **Fondo común** en todas las páginas: blanco (`#FFFFFF`) + imagen JPG `4961×3508` en mosaico (tile a tamaño nativo, `background-repeat:repeat`, centrado) con **opacidad 0.4**, posición **fija**, sin parallax (`data-has-bg-scroll-effect` vacío).
- **Sin animaciones propias**: no hay scroll reveal, ni entradas animadas. Único efecto: transición de navegación **CrossFade** (`@view-transition`, CSS estándar de Wix) entre páginas.
- **Sin favicon propio** (usa el genérico de Wix). Pendiente de decisión.
- **Eliminar** (excepciones Wix): banner freemium "Este sitio web fue creado con Wix… Empezar", favicon de Wix, scripts/bundles de Wix, etiquetas `wixGuard`/`&nbsp;` se conservan como espaciado real (ver nota).

---

## 2. Páginas detectadas (8)

| Ruta | Id Wix | Título | Idioma |
|---|---|---|---|
| `/` | mainPage (HASIERA) | Sutan Grafik \| Diseinu grafikoa | eu |
| `/grafik` | u6917 | GRAFIK \| Sutan Grafik \| Diseinu grafikoa | eu |
| `/bio` | wcjh5 | BIO \| Sutan Grafik \| Diseinu grafikoa | eu |
| `/kontaktua` | troww | KONTAKTUA \| Sutan Grafik | eu |
| `/cas` | vodxh (INICIO) | Sutan Grafik \| Diseño gráfico | es |
| `/cas-grafik` | x1j9u | — | es |
| `/cas-bio` | uu60k | — | es |
| `/cas-contacto` | lqv7l | — | es |

Nota: el canonical de `/cas` apunta a `https://www.sutangrafik.com/cas` → el dominio de producción de la réplica será `sutangrafik.com`.

---

## 3. Orden real de las secciones (por página)

### Home `/` (y `/cas`, idéntica en estructura)
1. Logo grande `354×266` centrado (margin-top 71px; alt: `Sutan Grafik Diseño Grafico Diseinu grafikoa`)
2. Selector EUS/CAS arriba a la derecha (x=830/856, 16px, sin fondo) — el idioma activo en `#8B0000`, el otro en `#DD0018`
3. Fila de 3 chips: `GRAFIK` / `BIO` / `kontaktuA` (cas: `ContaCtO`) — h1 28px blanco sobre `#DD0018` con `&nbsp;` alrededor
4. LinkBar de iconos PNG 18×18 centrada:
   - Home eu: **2 iconos** (Tel `tel:688840308`, Email `mailto:sutangrafik@gmail.com`)
   - Home cas: **4 iconos** (Tel, Email, **Facebook** → `https://www.facebook.com/sutan.grafik.3`, **Instagram** → `https://www.instagram.com/sutangrafikdiseinua/`)

### `/grafik`
1. Logo `119×90` + chips de navegación (el activo con fondo `#A82020`, los demás `#DD0018`) + EUS/CAS arriba derecha
2. Título `GRAFIK` 53px blanco sobre `#DD0018` (con `&nbsp;` alrededor, letter-spacing 0.05em)
3. Eslogan `BEHARRIZANEN ARABERAKO SOLUZIO GRAFIKOAK` 26px, letter-spacing 0.45em, `#DD0018`
4. Línea horizontal roja 4px (`#DD0018`), 979px de ancho
5. Intro `GURE ESPERIENTZIAN OINARRITURIKO AHOLKULARITZA, SORKUNTZA PROZESU GUZTIAZ ARDURATZEN GARA` 17px, letter-spacing 0.23em
6. Dos flechas SVG decorativas largas (47×160, rotadas 180°)
7. Dos columnas de servicios: **DISEINU GRAFIKOA** y **EDITORIALA IRUDIA** (34px, letter-spacing 0.35em) + 4 líneas bold 16px (worksans-extralight) cada una
8. **Galería Masonry** `576×2459` (componente TPA de Wix, iframe; imágenes no expuestas en el SSR)
9. Fila CTA: flecha 9×32 + `ZER DA SUTAN GRAFIK?` + flecha + `aurrekontua eskatu` (h1 28px blancos sobre rojo, con `&nbsp;`)

### `/bio`
1. Logo + chips (BIO activo `#A82020`) + EUS/CAS
2. Título `bio` 53px blanco sobre `#DD0018`
3. Encabezado `SUTAN GRAFIK`: "SUTAN" en **Third Rail** 30px (letter-spacing 0.2em) + "GRAFIK" en BigNoodle 29px (0.35em), rojo
4. 3 párrafos + separador `ALEX TURRILLAS` 18px (0.35em) + 2 párrafos finales — todos 14px, justificados, bold, rojo, worksans-extralight (texto completo en §11)
5. Columna derecha: logo pequeño `41×48` (fila 5) y dos imágenes: logo `204×153` + imagen `213×204`
6. Fila CTA: flechas + `EGINDAKO LANAK IKUSI` + `aurrekontua eskatu`

### `/kontaktua`
1. Logo + chips (kontaktuA activo `#A82020`) + EUS/CAS
2. Título `kontaktua` 53px blanco sobre rojo — **enlace `mailto:sutangrafik@gmail.com`**
3. Descripción: `ZURE PROIEKTUETARAKO AURREKONTU BAT BEHAR DUZU?` (29px, 0.1em) + `JARRI ZAITEZ GUREKIN HARREMANETAN ETA ZURE ZALANTZAK ARGITUKO DITUGU` (18px, 0.1em), rojo
4. **Formulario Wix Forms** (781px): email* / nombre* / asunto (inputs 391×38, BigNoodle 20px rojo sobre blanco 30%) + textarea MEZUA (386×124) a la derecha + botón `Bidali` 52×42 (23px BigNoodle blanco sobre rojo) + mensaje éxito verde `#67BD31`: `Eskerrik asko! Mezua ondo bidali da.`
5. Fila CTA: flechas + `ZER DA SUTAN GRAFIK?` + `EGINDAKO LANAK IKUSI`

### `/cas-grafik`, `/cas-bio`, `/cas-contacto`
Misma estructura que sus equivalentes euskera (textos en castellano). **Textos exactos aún por extraer de la web publicada** (tarea previa a su implementación).

---

## 4. Componentes reutilizables

| Componente | Descripción | Uso |
|---|---|---|
| Fondo de sitio | Blanco + imagen 4961×3508 en tile al 40%, fijo | Todas las páginas |
| Logo | PNG original 2500×1330 (alt exacto) | Todas (119×90 internas; 354×266 home) |
| Chips de navegación | h1 28px blanco sobre `#DD0018`, activo `#A82020`, `&nbsp;` alrededor | Todas |
| Selector EUS/CAS | 16px BigNoodle, activo `#8B0000` / inactivo `#DD0018` | Todas |
| Título 53px sobre rojo | `&nbsp;texto&nbsp;` blanco sobre `#DD0018` | grafik, bio, kontaktua |
| Flecha SVG (VectorImage) | Path único, fill `#DD0018`; tamaños 47×160 (decorativa) y 9×32 (CTA, rotada 180°) | grafik, bio, kontaktua |
| Fila CTA | Flecha 9×32 + chip-enlace + flecha + chip-enlace | grafik, bio, kontaktua |
| Columnas de servicios | Título 34px (0.35em) + lista bold 16px | grafik |
| LinkBar de iconos | Iconos PNG 18×18, gap 5px | home (2 o 4 iconos) |
| Galería Masonry | Mosaico con lightbox (576px de ancho) | grafik |
| Formulario de contacto | 3 inputs + textarea + botón + mensaje éxito | kontaktua |

---

## 5. Componentes interactivos

| Tipo | Dónde | Comportamiento original |
|---|---|---|
| Galería Masonry con lightbox | /grafik, /cas-grafik | Mosaico de imágenes; click abre lightbox (zoom) — librería TPA santa-galleries |
| Formulario de contacto | /kontaktua, /cas-contacto | Validación cliente (email pattern `^.+@.+\.[a-zA-Z]{2,63}$`, maxLength 250/100), estado error (borde `#C71212`, texto `#FF4040`), mensaje éxito verde; envío al backend de Wix Forms (endpoint no expuesto en SSR) |
| Enlaces EUS/CAS | Todas | Navegación entre versiones de idioma de la misma página |
| Hover de enlaces | Todas | Color del texto/icono (estados hover de Wix; en la réplica: mantener apariencia base y estados accesibles) |
| Transición CrossFade | Entre páginas | Fade entre páginas al navegar (view-transition) |

No existen: carruseles, sliders, tabs, acordeones, menús desplegables, hamburguesa, lightbox de video.

---

## 6. Navegación

- **Logo** → home `/` (en las 3 páginas internas; en la home no enlaza)
- **Chips** GRAFIK/BIO/kontaktuA → `/grafik`, `/bio`, `/kontaktua` (cas → `/cas-grafik`, `/cas-bio`, `/cas-contacto`)
- **EUS** → misma página en euskera; **CAS** → misma página en castellano
- **CTAs** (`ZER DA SUTAN GRAFIK?` → bio, `EGINDAKO LANAK IKUSI` → grafik, `aurrekontua eskatu` → kontaktua)
- **Iconos** (solo home): `tel:688840308`, `mailto:sutangrafik@gmail.com`, Facebook, Instagram (solo cas)
- **mailto grande** en /kontaktua

Rutas objetivo en Next: `/`, `/grafik`, `/bio`, `/kontaktua`, `/cas`, `/cas-grafik`, `/cas-bio`, `/cas-contacto`.

---

## 7. Formularios

**Uno** (repetido en cas): en `/kontaktua`.
- Campos: email (obligatorio, `HELBIDE ELEKTRONIKOA *`), nombre (`IZENA -  ABIZENA *`, obligatorio), asunto (`GAIA`, opcional), mensaje (`MEZUA`, textarea, opcional)
- Sin labels visibles (solo placeholders en BigNoodle 20px `#DD0018`; placeholder negro; fondo blanco 30%; borde 0; focus con borde negro)
- Botón `Bidali`: rojo `#DD0018`, blanco, BigNoodle 23px, sin radio, sombra `0 1px 4px rgba(0,0,0,0.6)`
- Mensaje éxito (oculto por defecto): `Eskerrik asko! Mezua ondo bidali da.` en `#67BD31` (helvetica 14px)
- **Destino del envío**: **DECIDIDO — modo prueba**: el formulario NO enviará email por ahora; al enviar se simula el éxito (mensaje verde `Eskerrik asko!...`). El envío real se implementará más adelante si el usuario lo solicita.

---

## 8. Carruseles

**No existen** en la web original. No implementar ninguno.

## 9. Galerías

**Una**: galería Masonry (santa-galleries v0.105.40, componente `comp-ju15vg0f`) en `/grafik`, `576×2459px`, centrada (left 205px en el grid de 980px), margin-bottom 30px.

### Investigación técnica (31/07/2026)

- La galería es un iframe de Wix: `https://static.parastorage.com/services/santa/1.13152.0/node_modules/@wix/santa-galleries/target/Masonry/Masonry.html?compId=comp-ju15vg0f&deviceType=desktop&locale=es&viewMode=site`.
- Los datos (URLs de las imágenes) **no están en el SSR** y los bundles JS del iframe devuelven `AccessDenied` sin sesión de Wix → las URLs reales no son accesibles de forma anónima.

### Decisión (usuario)

- Usar las **35 JPGs de portfolio del historial de Git** (`images/Portfoliokoak/1.jpg…35.jpg`, commit `7a03e51`): formatos variados (A4 verticales 3508×4961, cuadrados, horizontales). Se extraerán a `public/images/portfolio/` en la tarea de recursos.
- Comportamiento esperado: mosaico con apertura de lightbox al hacer click.

---

## 10. Animaciones

- **Ninguna animación de componentes** en la web original (verificado: sin data-animation, sin scroll reveal).
- Fondo fijo con imagen al 40% (sin parallax).
- Transición CrossFade entre páginas (CSS View Transitions).
- Decisión de réplica: mantener la apariencia estática fiel; opcionalmente replicar el CrossFade con CSS `view-transition` (progresivo). **Framer Motion no es necesario** para la fidelidad (SPEC lo limita a replicar comportamiento original).

---

## 11. Textos oficiales (eu, transcritos del SSR)

- Eslogan: `BEHARRIZANEN ARABERAKO SOLUZIO GRAFIKOAK`
- Intro: `GURE ESPERIENTZIAN OINARRITURIKO AHOLKULARITZA, SORKUNTZA PROZESU GUZTIAZ ARDURATZEN GARA`
- DISEINU GRAFIKOA: `Logotipoak / Irudi korporatiboa` · `Kartelak / Flyerrak / Merchandising` · `Kamixetak / Diskak / Pegatinak` · `Euskarri digitalak / Argazki-muntaiak`
- EDITORIALA IRUDIA: `Liburuxkak / Aldizkariak` · `Produkzio editoriala` · `Ilustrazio digitala / Logotipoak` · `Eskuorriak / Material grafikoa`
- Bio: `Hainbat urtez freelance moduan zein diseinu agentzietan lanean ibili ondoren sorturiko proiektua.` · `Enpresa, kolektibo, musika talde, kultur elkarte eta bestelako eragileentzako diseinu lanak burutzen dira, bakoitzaren errealitatearen perspektibatik, zure beharrizanen araberako soluzio grafikoak sortuz.` · `Zerbitzu integrala eskaintzen dugu. Behar dituzun produktu grafikoen ideazio, sorkuntza eta gestio prozesu guztiaz arduratzen gara, gure esperientzian oinarritutako aholkularitza pertsonalizatua eskainiz. Hau da, eskatutako produktu grafikoak zure etxera iritsi bitarteko lan guztiak gure gain hartuko ditugu.` · `ALEX TURRILLAS` · `Deban (Gipuzkoa) jaio nintzen 1992ko irailaren 23an. Politika Zientzia eta Administrazio Publikoaren Kudeaketa (UPV/EHU Leioa) ikasi eta gero nire bokazioa zen diseinu grafikoan murgiltzea erabaki nuen. Ondorioz, Argitalpen Inprimatuen eta Multimedia Argitalpenen Diseinu eta Edizioko goi mailako zikloa ikasi nuen (LHII Mendizabala Gasteiz).` · `Historian, musikan eta arteetan zaletua.`
- CTAs: `ZER DA SUTAN GRAFIK?` · `EGINDAKO LANAK IKUSI` · `aurrekontua eskatu`
- Kontaktua: `ZURE PROIEKTUETARAKO AURREKONTU BAT BEHAR DUZU?` / `JARRI ZAITEZ GUREKIN HARREMANETAN ETA ZURE ZALANTZAK ARGITUKO DITUGU` · placeholders: `HELBIDE ELEKTRONIKOA *`, `IZENA -  ABIZENA *`, `GAIA`, `MEZUA` · botón `Bidali` · éxito `Eskerrik asko! Mezua ondo bidali da.`

⚠️ Los textos de las páginas cas (excepto home) están pendientes de extracción del sitio publicado (los `locales/es/*` de la copia anterior **no** son fuente de verdad).

---

## 12. Responsive

- La web original **no es responsive** (Wix clásico 980px; en pantallas menores hay scroll horizontal).
- La réplica debe ser responsive (prioridad 3 de AGENTS.md) manteniendo el aspecto: ancho máximo 980px centrado en escritorio; en móvil centrar todos los bloques, ajustar tamaños de título (53px→~36px), apilar columnas de servicios, galería a 1-2 columnas y formulario vertical. Decisión de detalle durante la implementación de cada página.

---

## 13. Recursos multimedia

### Imágenes oficiales (static.wixstatic.com — descargar al proyecto)
| Recurso | URL | Dimensiones |
|---|---|---|
| Logo | `ef03a3_1a9af5447b4c405382e501e2e45cdc4c~mv2.png` | 800×600 |
| Fondo | `ef03a3_9ace2f32e9b348d0b9960e5e9b8100da~mv2_d_4961_3508_s_4_2.jpg` | 4961×3508 |
| Icono tel | `ef03a3_0600f137c3ce4e968a738b82d8bd7a0a~mv2.png` | 225×225 |
| Icono email | `ef03a3_72e6e6d03f2c48549982dc1211332321~mv2.png` | 225×225 |
| Icono facebook | `ef03a3_d981e40aa3e645bb93ab7e03f786ce99~mv2.png` | 225×225 |
| Icono instagram | `ef03a3_addd325ddbcc4386a777604293cb61a6~mv2.png` | 225×225 |
| Logo pequeño bio | `ef03a3_5339b64893554542a77305e6db96cd94~mv2.png` | 473×558 |
| Imagen bio | `ef03a3_f8f0003ac84e4e0995bdb85e59ef6ea8~mv2.png` | 407×390 |

(URLs base: `https://static.wixstatic.com/media/<hash>`) — descargados a `public/images/` (iconos en `public/images/icons/`).

### Fuentes
| Fuente | Origen | Uso |
|---|---|---|
| BigNoodleTitling | Local en historial Git (`fonts/bignoodletitling.{woff2,woff,ttf}`) o `static.wixstatic.com/ufonts/ef03a3_62897775b9794e5db3e6a6adde5d728f/` | Toda la tipografía de marca |
| Third Rail | `static.wixstatic.com/ufonts/ef03a3_004476c206e5480fafac36a3a1851d13/` | Solo "SUTAN" en /bio |
| worksans-extralight | Google Fonts (Work Sans ExtraLight 200) | Párrafos, listas de servicios |
| helvetica-w01-roman | Sistema | Mensaje de éxito del formulario |

Nota (verificado 31/07/2026): en la web original, los ficheros `.woff2` de BigNoodleTitling y Third Rail son **bytes idénticos a los `.woff`** (el CDN de Wix sirve WOFF para ambas rutas). Conservados tal cual en `public/fonts/` (bignoodletitling.{woff2,woff,ttf}, thirdrail.{woff2,woff,ttf}). En el `@font-face` declarar woff2→woff→ttf para que el navegador haga fallback correctamente.

### Galería
35 JPGs en `images/Portfoliokoak/` del historial Git — **DECIDIDO**: usar estas 35 imágenes (ver §9).

---

## 14. Paleta y tipografía

- `#DD0018` rojo principal · `#A82020` rojo oscuro (chip activo) · `#8B0000` rojo vino (idioma activo) · `#FFFFFF` blanco · `#000000` negro · `#67BD31` verde éxito · `#C71212`/`#FF4040` error de validación
- Fuentes: BigNoodleTitling (títulos, chips, botón, inputs), Third Rail ("SUTAN"), Work Sans ExtraLight (cuerpo), Helvetica (mensajes)

---

## 15. SEO (implementar en la réplica)

- Metadata por página: `GRAFIK | Sutan Grafik | Diseinu grafikoa`, `BIO | …`, `KONTAKTUA | Sutan Grafik`, `Sutan Grafik | Diseinu grafikoa`, cas: `Sutan Grafik | Diseño gráfico`…
- Description común: `DISEINU GRAFIKOA - IRUDIA - MAKETAZIOA - MERCHANDISING` + líneas de servicios (varía por idioma)
- Open Graph: `og:title "… | SUTAN GRAFIK eus"`, `og:image` = logo, `og:site_name: SUTAN GRAFIK`, `og:type: website`, twitter `summary_large_image`
- Canonical por página (dominio final `sutangrafik.com`), `sitemap.xml`, `robots.txt`, prefetch
- Semántica: h1 por página (los chips son h1 en el original; mantener jerarquía equivalente), skip-link (existe en Wix: "skip to main content")

---

## 16. Decisiones

### Confirmadas (31/07/2026)

1. **Galería**: usar las 35 JPGs de portfolio del historial Git (las URLs reales de la web no son accesibles — iframe protegido, ver §9).
2. **Formulario**: modo prueba — NO enviar email; al enviar se muestra el mensaje de éxito simulado.
3. **Footer**: NO añadir footer (la web real no tiene ninguno).

### Pendientes

4. **Favicon**: la web real no tiene; ¿usar el logo como favicon? (por defecto: sí, generar uno del logo)
5. **CrossFade** entre páginas: ¿replicarlo (CSS view-transition) o navegación normal? (por defecto: navegación normal)
6. **Textos de las 3 páginas cas internas** (`/cas-grafik`, `/cas-bio`, `/cas-contacto`): extraer de la web publicada antes de implementarlas.
