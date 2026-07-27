(function () {
  'use strict';

  var translations = {
    eu: null,
    es: null
  };
  var loadedLangs = 0;
  var totalLangs = 2;
  var initCalled = false;

  function loadJSON(path, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', path, true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 0) {
          try {
            callback(JSON.parse(xhr.responseText));
          } catch (e) {
            callback(null);
          }
        } else {
          callback(null);
        }
      }
    };
    xhr.send();
  }

  function tryInit() {
    if (initCalled) return;
    if (!translations.eu || !translations.es) return;
    initCalled = true;

    var resources = {
      eu: { translation: translations.eu },
      es: { translation: translations.es }
    };

    if (typeof i18next !== 'undefined') {
      i18next.init({
        lng: 'eu',
        fallbackLng: 'eu',
        resources: resources,
        interpolation: {
          escapeValue: false
        }
      }, function () {
        document.dispatchEvent(new CustomEvent('i18nReady'));
      });
    }
  }

  loadJSON('locales/eu/common.json', function (data) {
    if (data) {
      translations.eu = data;
      loadedLangs++;
      tryInit();
    }
  });

  loadJSON('locales/es/common.json', function (data) {
    if (data) {
      translations.es = data;
      loadedLangs++;
      tryInit();
    }
  });

  setTimeout(function () {
    if (!initCalled) {
      translations.eu = {
        "nav": { "grafik": "GRAFIK", "bio": "BIO", "kontaktua": "kontaktuA" },
        "home": { "contactPhone": "688 84 03 08", "contactEmail": "sutangrafik@gmail.com" },
        "grafik": {
          "title": "GRAFIK",
          "subtitle": "BEHARRIZANEN ARABERAKO SOLUZIO GRAFIKOAK",
          "subtitle2": "GURE ESPERIENTZIAN OINARRITURIKO AHOLKULARITZA, SORKUNTZA PROZESU GUZTIAZ ARDURATZEN GARA",
          "services": { "diseniu": { "title": "DISEINU GRAFIKOA", "items": ["Logotipoak / Irudi korporatiboa", "Kartelak / Flyerrak / Merchandising", "Kamixetak / Diskak / Pegatinak", "Euskarri digitalak / Argazki-muntaiak"] }, "editoriala": { "title": "EDITORIALA IRUDIA", "items": ["Liburuxkak / Aldizkariak", "Produkzio editoriala", "Ilustrazio digitala / Logotipoak", "Eskuorriak / Material grafikoa"] } },
          "galleryTitle": "ARGALDIK",
          "cta1": "ZER DA SUTAN GRAFIK?",
          "cta2": "aurrekontua eskatu"
        },
        "bio": {
          "label": "bio",
          "title": "SUTAN GRAFIK",
          "paragraphs": ["Hainbat urtez freelance moduan zein diseinu agentzietan lanean ibili ondoren sorturiko proiektua.", "Enpresa, kolektibo, musika talde, kultur elkarte eta bestelako eragileentzako diseinu lanak burutzen dira, bakoitzaren errealitatearen perspektibatik, zure beharrizanen araberako soluzio grafikoak sortuz.", "Zerbitzu integrala eskaintzen dugu. Behar dituzun produktu grafikoen ideazio, sorkuntza eta gestio prozesu guztiaz arduratzen gara, gure esperientzian oinarritutako aholkularitza pertsonalizatua eskainiz."],
          "name": "ALEX TURRILLAS",
          "nameParagraphs": ["Deban (Gipuzkoa) jaio nintzen 1992ko irailaren 23an. Politika Zientzia eta Administrazio Publikoaren Kudeaketa (UPV/EHU Leioa) ikasi eta gero nire bokazioa zen diseinu grafikoan murgiltzea erabaki nuen.", "Historian, musikan eta arteetan zaletua."],
          "cta1": "EGINDAKO LANAK IKUSI",
          "cta2": "aurrekontua eskatu"
        },
        "kontaktua": {
          "label": "kontaktua",
          "email": "sutangrafik@gmail.com",
          "description": "ZURE PROIEKTUETARAKO AURREKONTU BAT BEHAR DUZU? JARRI ZAITEZ GUREKIN HARREMANETAN ETA ZURE ZALANTZAK ARGITUKO DITUGU",
          "form": { "name": "Izena", "namePlaceholder": "Zure izena", "email": "Emaila", "emailPlaceholder": "zure@email.eus", "message": "Mezua", "messagePlaceholder": "Idatzi zure mezua...", "submit": "Bidali", "success": "Eskerrik asko! Mezua ondo bidali da." },
          "cta1": "ZER DA SUTAN GRAFIK?",
          "cta2": "EGINDAKO LANAK IKUSI"
        },
        "footer": { "copyright": "© {year} Sutan Grafik. Eskubide guztiak erreserbatuta." },
        "lang": { "eus": "EUS", "cas": "CAS" }
      };
      translations.es = {
        "nav": { "grafik": "GRAFIK", "bio": "BIO", "kontaktua": "ContaCtO" },
        "home": { "contactPhone": "688 84 03 08", "contactEmail": "sutangrafik@gmail.com" },
        "grafik": {
          "title": "GRAFIK",
          "subtitle": "SOLUCIONES GRÁFICAS ADAPTADAS A TUS NECESIDADES",
          "subtitle2": "TE OFRECEMOS ASESORAMIENTO BASADO EN NUESTRA EXPERIENCIA, ENCARGÁNDONOS DEL PROCESO CREATIVO DE PRINCIPIO A FIN",
          "services": { "diseniu": { "title": "DISEÑO GRÁFICO", "items": ["Logotipos / Imagen corporativa", "Carteles / Flyers / Merchandising", "Camisetas / Discos / Pegatinas", "Soportes digitales / Fotomontaje"] }, "editoriala": { "title": "EDITORIAL IMAGEN", "items": ["Publicaciones / Revistas", "Producción editorial", "Ilustración digital / Logotipos", "Dípticos / Material gráfico"] } },
          "galleryTitle": "GALERÍA",
          "cta1": "¿QUÉ ES SUTAN GRAFIK?",
          "cta2": "PEDIR PRESUPUESTO"
        },
        "bio": {
          "label": "bio",
          "title": "SUTAN GRAFIK",
          "paragraphs": ["Tras varios años trabajando como Freelance y en agencias de diseño y publicidad, ha nacido Sutan Grafik.", "Se realizan trabajos de diseño para empresas, colectivos, bandas musicales, agrupaciones culturales y otras entidades, desde la perspectiva y la realidad de cada uno, creamos soluciones gráficas adaptadas a tus necesidades.", "Ofrecemos un servicio integral, encargándonos del proceso de ideación, creación y gestión de los productos gráficos que necesites, con un asesoramiento personalizado, basado en nuestra experiencia."],
          "name": "ALEX TURRILLAS",
          "nameParagraphs": ["Nacido el 23 de septiembre de 1992 en Deba (Gipuzkoa). Después de graduarme en Ciencia Política y Gestión Pública (UPV/EHU Leioa) decidí dedicarme al diseño gráfico. Estudié un Ciclo de grado superior de Diseño y edición de publicaciones impresas y multimedia (CIFP Mendizabala Vitoria-Gasteiz).", "Apasionado de la historia, de la música y de las artes en general."],
          "cta1": "TRABAJOS REALIZADOS",
          "cta2": "PEDIR PRESUPUESTO"
        },
        "kontaktua": {
          "label": "contacto",
          "email": "sutangrafik@gmail.com",
          "description": "¿NECESITAS UN PRESUPUESTO PARA TUS PROYECTOS? PONTE EN CONTACTO CON NOSOTROS Y ACLARAREMOS DUDAS",
          "form": { "name": "Nombre", "namePlaceholder": "Tu nombre", "email": "Email", "emailPlaceholder": "tu@email.com", "message": "Mensaje", "messagePlaceholder": "Escribe tu mensaje...", "submit": "Enviar", "success": "¡Gracias! Mensaje enviado." },
          "cta1": "¿QUÉ ES SUTAN GRAFIK?",
          "cta2": "TRABAJOS REALIZADOS"
        },
        "footer": { "copyright": "© {year} Sutan Grafik. Todos los derechos reservados." },
        "lang": { "eus": "EUS", "cas": "CAS" }
      };
      tryInit();
    }
  }, 3000);
})();
