(function () {
  'use strict';

  var currentSection = 'home';
  var isTransitioning = false;
  var currentLang = 'eu';

  var portfolioFiles = typeof galleryFiles !== 'undefined' ? galleryFiles : [];
  if (portfolioFiles.length === 0) {
    for (var i = 1; i <= 35; i++) {
      portfolioFiles.push(i + '.jpg');
    }
  }

  /* ===== I18N ===== */
  function t(key) {
    if (typeof i18next !== 'undefined' && i18next.isInitialized) {
      return i18next.t(key) || key;
    }
    return key;
  }

  function applyTranslations() {
    if (typeof i18next === 'undefined' || !i18next.isInitialized) return;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      var translation = t(key);
      if (translation && translation !== key) {
        el.textContent = translation;
      }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      var translation = t(key);
      if (translation && translation !== key) {
        el.setAttribute('placeholder', translation);
      }
    });

    document.querySelectorAll('[data-i18n-year]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key) {
        var text = t(key);
        if (text && text.indexOf('{year}') !== -1) {
          el.textContent = text.replace('{year}', new Date().getFullYear());
        }
      }
    });

    var eusLang = document.querySelector('.lang-option[data-lang="eu"]');
    var esLang = document.querySelector('.lang-option[data-lang="es"]');
    if (eusLang && esLang) {
      if (currentLang === 'eu') {
        eusLang.classList.add('active');
        esLang.classList.remove('active');
        document.documentElement.lang = 'eu';
      } else {
        eusLang.classList.remove('active');
        esLang.classList.add('active');
        document.documentElement.lang = 'es';
      }
    }
  }

  function changeLang(lang) {
    if (lang === currentLang) return;
    if (typeof i18next !== 'undefined' && i18next.isInitialized) {
      i18next.changeLanguage(lang, function () {
        currentLang = lang;
        applyTranslations();
      });
    }
  }

  document.querySelectorAll('.lang-option').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      changeLang(this.getAttribute('data-lang'));
    });
  });

  document.addEventListener('i18nReady', function () {
    applyTranslations();
  });

  /* ===== SECTION DISPLAY MANAGEMENT ===== */
  function showOnlySection(sectionId) {
    document.querySelectorAll('.page-section').forEach(function (el) {
      if (el.id === 'section-' + sectionId) {
        el.style.display = '';
      } else {
        el.style.display = 'none';
      }
    });
  }

  /* ===== SPA NAVIGATION ===== */
  function navigateTo(sectionId) {
    if (sectionId === currentSection || isTransitioning) return;
    isTransitioning = true;

    var targetEl = document.getElementById('section-' + sectionId);
    var currentEl = document.getElementById('section-' + currentSection);

    if (!currentEl || !targetEl) {
      isTransitioning = false;
      return;
    }

    targetEl.style.display = '';

    currentEl.classList.remove('active');

    void targetEl.offsetHeight;

    targetEl.classList.add('active');

    window.scrollTo(0, 0);

    if (currentSection === 'home') {
      document.body.setAttribute('data-current-section', sectionId);
    }

    window.setTimeout(function () {
      currentSection = sectionId;
      if (sectionId === 'home') {
        document.body.setAttribute('data-current-section', sectionId);
      }
      showOnlySection(sectionId);
      isTransitioning = false;
      window.location.hash = sectionId;
      updateActiveNav(sectionId);
      observeFadeElements();
    }, 550);
  }

  function updateActiveNav(sectionId) {
    document.querySelectorAll('.nav-link').forEach(function (link) {
      if (link.getAttribute('data-section') === sectionId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  document.querySelectorAll('.nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      var section = this.getAttribute('data-section');
      navigateTo(section);
      closeHamburger();
    });
  });

  function handleHash() {
    var hash = window.location.hash.replace('#', '');
    if (hash && ['home', 'grafik', 'bio', 'kontaktua'].indexOf(hash) !== -1) {
      navigateTo(hash);
    }
  }

  window.addEventListener('hashchange', handleHash);

  /* ===== HAMBURGER ===== */
  var hamburger = document.querySelector('.hamburger');
  var nav = document.querySelector('.main-nav');

  function closeHamburger() {
    if (hamburger && nav) {
      nav.classList.remove('open');
      hamburger.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  }

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', closeHamburger);
    });
  }

  /* ===== FADE-IN OBSERVER ===== */
  function observeFadeElements() {
    var fadeElements = document.querySelectorAll('.page-section.active .fade-in:not(.visible)');
    if (fadeElements.length > 0 && 'IntersectionObserver' in window) {
      fadeElements.forEach(function (el) {
        el.classList.add('visible');
      });
    }
  }

  /* ===== GALLERY GRID ===== */
  function initGallery() {
    var grid = document.getElementById('galleryGrid');
    if (!grid) return;

    var basePath = 'images/portfoliokoak/';

    portfolioFiles.forEach(function (file) {
      var src = basePath + file;
      var item = document.createElement('a');
      item.className = 'gallery-grid-item';
      item.href = src;

      var img = document.createElement('img');
      img.src = src;
      img.alt = '';
      img.loading = 'lazy';

      img.addEventListener('load', function () {
        item.setAttribute('data-lg-size', img.naturalWidth + '-' + img.naturalHeight);
      });

      item.appendChild(img);
      grid.appendChild(item);
    });

    if (typeof lightGallery !== 'undefined') {
      lightGallery(grid, {
        plugins: [lgThumbnail, lgZoom],
        speed: 500,
        licenseKey: 'GPLv3'
      });
    }
  }

  /* ===== CONTACT FORM ===== */
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    var successMsg = document.getElementById('formSuccess');

    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name');
      var email = document.getElementById('email');
      var message = document.getElementById('message');
      var valid = true;

      [name, email, message].forEach(function (field) {
        if (!field.value.trim()) {
          field.style.borderColor = '#DD0018';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });

      if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        email.style.borderColor = '#DD0018';
        valid = false;
      }

      if (valid && successMsg) {
        successMsg.classList.add('show');
        contactForm.reset();
      }
    });
  }

  /* ===== INIT ===== */
  function init() {
    var hash = window.location.hash.replace('#', '');
    if (hash && ['home', 'grafik', 'bio', 'kontaktua'].indexOf(hash) !== -1) {
      var allSections = document.querySelectorAll('.page-section');
      allSections.forEach(function (s) { s.classList.remove('active'); });
      var target = document.getElementById('section-' + hash);
      if (target) {
        target.classList.add('active');
        currentSection = hash;
        document.body.setAttribute('data-current-section', hash);
        updateActiveNav(hash);
      }
    }

    document.body.setAttribute('data-current-section', currentSection);

    showOnlySection(currentSection);

    initGallery();
    observeFadeElements();
    applyTranslations();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  document.addEventListener('i18nReady', function () {
    observeFadeElements();
  });
})();
