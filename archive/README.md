# Sutan Grafik - Webgune ofiziala / Sitio oficial

Sutan Grafik diseinu grafikoko estudioko webgune ofiziala. Alex Turrillas-ek Deban (Gipuzkoa) sortutako proiektua.

## Egitura / Estructura

```
web-sutangrafik/
├── index.html              # Hasiera (Euskera)
├── grafik.html             # Zerbitzuak (Euskera)
├── bio.html                # Biografia (Euskera)
├── kontaktua.html          # Kontaktua (Euskera)
├── cas/
│   ├── index.html          # Inicio (Castellano)
│   ├── grafik.html         # Servicios (Castellano)
│   ├── bio.html            # Biografía (Castellano)
│   └── contacto.html       # Contacto (Castellano)
├── css/
│   ├── style.css           # Estilo nagusia
│   ├── responsive.css      # Moldagarritasuna
│   ├── wix-main.min.css    # Wix original CSS (deskargatua)
│   └── wix-renderer.min.css# Wix renderer CSS (deskargatua)
├── js/
│   ├── main.js             # Funtzionalitateak
│   ├── animations.js       # Animazioak
│   ├── bundles/            # Wix original JS bundles (deskargatuak)
│   └── polyfills/          # Wix polyfill JS (deskargatuak)
├── images/                 # Irudi guztiak (deskargatuak)
│   ├── logo-hq.png
│   ├── background.jpg
│   ├── profile-hq.png
│   ├── arrow-icon-hq.png
│   ├── phone-icon-hq.png
│   ├── email-icon-hq.png
│   ├── facebook-icon-hq.png
│   └── instagram-icon-hq.png
├── icons/                  # Ikonoak (icon* fitxategiak)
├── fonts/                  # Letra-motak (deskargatuak)
│   ├── bignoodletitling.woff2
│   ├── bignoodletitling.woff
│   └── bignoodletitling.ttf
├── html/                   # Original Wix HTML (deskargatuak)
├── data/                   # Wix JSON data (deskargatuak)
├── other/                  # Bestelako fitxategiak
├── favicon.ico / .svg
├── robots.txt
├── sitemap.xml
└── README.md
```

## Deskargatutako baliabideak / Recursos descargados

| Mota | Fitxategiak | Iturria |
|------|------------|---------|
| Irudiak | 8 fitxategi (logo, background, profile, ikonoak) | `static.wixstatic.com` |
| Fontak | BigNoodleTitling (3 formatu) | `static.wixstatic.com/ufonts` |
| CSS | 2 Wix framework CSS | `static.parastorage.com` |
| JS | 4 Wix script (bundles + polyfills) | `static.parastorage.com` |
| HTML | 4 orrialde original | `sutangrafik.wixsite.com` |
| JSON | dynamicmodel.json | `wixsite.com/_api/v2/dynamicmodel` |

## Ezin deskargatutako baliabideak / Recursos no descargables

- **Wix Thunderbolt runtime JS**: Wix-en framework-a (`viewerModel`, `thunderbolt`, `editor-elements`) ez da deskargagarria. Wix-en zerbitzarietan exekutatzen da eta ezin da lokalki erreproduzitu. Horregatik, bi bertsio daude: jatorrizkoak (`html/`, `css/wix-*`, `js/bundles/`) eta bertsio garbi bat (`index.html`, `css/style.css`, `js/main.js`) GitHub Pages-etan funtzionatzeko.

## Nola editatu / Cómo editar

- **Edukia**: `index.html`, `bio.html`, `grafik.html`, `kontaktua.html` (eta `cas/*.html`)
- **Estiloa**: `css/style.css` + `css/responsive.css`
- **JavaScript**: `js/main.js` + `js/animations.js`
- **Irudiak**: `images/` karpetan

## GitHub Pages-era zabaltzeko

1. Sortu `sutangrafik.github.io` biltegia GitHub-en
2. Igo karpeta honetako fitxategi guztiak
3. Settings > Pages > Source > `Deploy from a branch` > `main` / `root`
4. `https://sutangrafik.github.io` helbidean eskuragarri

## Teknologiak / Tecnologías

- HTML5, CSS3 (Flexbox + Grid), JavaScript (ES6+)
- Google Fonts (Montserrat) - CDN bidez, offline funtzionatzen du
- BigNoodleTitling fonta - lokalki ostatatua
- Ez du kanpoko liburutegirik behar
