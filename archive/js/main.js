(function () {
  'use strict';

  var hamburger = document.querySelector('.hamburger');
  var nav = document.querySelector('.main-nav');

  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      hamburger.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

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
})();

/* ===== CAROUSEL ===== */
(function () {
  var carouselSection = document.getElementById('portfolio-carousel');
  if (!carouselSection) return;

  var track = carouselSection.querySelector('.carousel-track');
  var prevBtn = carouselSection.querySelector('.carousel-btn.prev');
  var nextBtn = carouselSection.querySelector('.carousel-btn.next');
  var dotsContainer = carouselSection.querySelector('.carousel-dots');
  if (!track || !prevBtn || !nextBtn || !dotsContainer) return;

  var images = [
    '1(2).jpg','1(3).jpg','1(4).jpg','12.jpg',
    '121514690_680108119551930_1891837824852846058_n.jpg',
    '166888_4a57c6486eda46a2a8da584a4484ce9b~mv2_d_1684_1512_s_2.jpg',
    'ADAXKA logo berria A4.jpg','Binilo 1.jpg','BRIGADE LOCO biniloa.jpg',
    'Diska promo digipack eginda.jpg','ERDIKO ARGAZKIA ona.jpg',
    'FACEBOOK PROFILA.jpg','ITURRIAN JAZZ Sare sozialak.jpg',
    'Jazzez blai logoak.jpg','Jazzez blai mutua.jpg',
    'JO TA SU koloreetan inpr.jpg','KALITATE ALTUA karratua.jpg',
    'Kami beltza INPR.jpg','kami Insta2.jpg',
    'KOLORE ANITZ logo berria A4.jpg','KULTUR Tote Bag MockUp.jpg',
    'LOGO Negro horizontal(1).jpg','MAXI BAR Kontzertuak koloreekin3 ONA.jpg',
    'Portada bakarrik.jpg','Roll_up_Mockup_OK_1.jpg',
    'Santurtzi crossfit anchor ZUZENTZEN.jpg',
    'Sin t\u00edtulo-1(1).jpg','Sin t\u00edtulo-3(1).jpg',
    'SNAKE ANTIFA MONTAJE.jpg','T-Shirt-Hanging-Mockup(1).jpg',
    'T-Shirt-Hanging-Mockup.jpg','v2.jpg','v4.jpg',
    'ZUHATZA logo berria A4.jpg','ZUHATZA TRAIL Kartela.jpg'
  ];

  var basePath = carouselSection.getAttribute('data-base') || 'images/Portfoliokoak/';
  var currentIndex = 0;
  var total = images.length;

  /* Build track */
  images.forEach(function (src) {
    var img = document.createElement('img');
    img.src = basePath + src;
    img.alt = '';
    img.loading = 'lazy';
    track.appendChild(img);
  });

  /* Build dots */
  for (var i = 0; i < total; i++) {
    var dot = document.createElement('button');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Argazkia ' + (i + 1));
    dotsContainer.appendChild(dot);
  }
  var dots = dotsContainer.querySelectorAll('.carousel-dot');

  function goTo(index) {
    if (index < 0) index = total - 1;
    if (index >= total) index = 0;
    currentIndex = index;
    track.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
    dots.forEach(function (d, i) {
      d.classList.toggle('active', i === currentIndex);
    });
  }

  prevBtn.addEventListener('click', function () { goTo(currentIndex - 1); });
  nextBtn.addEventListener('click', function () { goTo(currentIndex + 1); });
  dots.forEach(function (dot, i) {
    dot.addEventListener('click', function () { goTo(i); });
  });

  /* Keyboard */
  carouselSection.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(currentIndex - 1); }
    if (e.key === 'ArrowRight') { e.preventDefault(); goTo(currentIndex + 1); }
  });
  carouselSection.setAttribute('tabindex', '0');

  /* Swipe support */
  var startX = 0;
  carouselSection.addEventListener('touchstart', function (e) {
    startX = e.changedTouches[0].screenX;
  }, { passive: true });
  carouselSection.addEventListener('touchend', function (e) {
    var diff = startX - e.changedTouches[0].screenX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goTo(currentIndex + 1);
      else goTo(currentIndex - 1);
    }
  }, { passive: true });
})();
