gsap.registerPlugin(ScrollTrigger);

// ─── Intro timeline ───────────────────────────────────────────────────────────
(function () {
  const overlay  = document.getElementById('page-overlay');
  const heroBg   = document.getElementById('hero-bg');
  const brand    = document.getElementById('hero-brand');
  const loc      = document.getElementById('hero-location');
  const band     = document.getElementById('hero-band');
  const h1       = document.getElementById('hero-h1');
  const made     = document.getElementById('hero-made');
  const flag     = document.getElementById('hero-flag');
  const cta      = document.getElementById('hero-cta');
  const baseline = document.getElementById('hero-baseline');

  if (!overlay || !heroBg || !brand) return;

  // Split "MAISON GOFFIER" en lettres individuelles
  const rawText = brand.textContent.trim();
  brand.textContent = '';
  rawText.split('').forEach(char => {
    const s = document.createElement('span');
    s.textContent = char === ' ' ? '\u00A0' : char;
    s.style.display = 'inline-block';
    brand.appendChild(s);
  });
  const letters = brand.querySelectorAll('span');

  gsap.set(overlay, { x: '0%', opacity: 1 });

  gsap.timeline()
    .to({}, { duration: 1 })
    .to(overlay, { x: '100%', duration: 1.0, ease: 'power2.inOut' });
})();

// ─── Nav underline hover ─────────────────────────────────────────────────────
document.querySelectorAll('.nav-link').forEach(link => {
  const underline = link.querySelector('.nav-underline');
  if (!underline) return;

  link.addEventListener('mouseenter', () => {
    gsap.to(underline, { scaleX: 1, duration: 0.35, ease: 'power2.out', transformOrigin: 'left' });
  });
  link.addEventListener('mouseleave', () => {
    gsap.to(underline, { scaleX: 0, duration: 0.25, ease: 'power2.in', transformOrigin: 'right' });
  });
});

// ─── Hamburger menu ──────────────────────────────────────────────────────────
const burger    = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn  = document.getElementById('close-menu');
const menuLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

if (burger && mobileMenu) {
  gsap.set(mobileMenu, { x: '100%' });

  const openMenu = () => {
    gsap.to(mobileMenu, { x: '0%', duration: 0.55, ease: 'power3.out' });
    gsap.fromTo(menuLinks,
      { x: 40, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.4, stagger: 0.07, ease: 'power2.out', delay: 0.25 }
    );
  };

  const closeMenu = () => {
    gsap.to(mobileMenu, { x: '100%', duration: 0.4, ease: 'power3.in' });
  };

  burger.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  menuLinks.forEach(link => link.addEventListener('click', closeMenu));
}

// ─── Parallax ────────────────────────────────────────────────────────────────

// Hero : l'image remonte plus lentement que le scroll
const heroImg = document.querySelector('.hero-parallax');
if (heroImg) {
  gsap.to(heroImg, {
    yPercent: 18,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero-section',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
    }
  });
}

// Toutes les images avec la classe parallax-img dans leur wrap overflow-hidden
document.querySelectorAll('.parallax-wrap').forEach(wrap => {
  const img = wrap.querySelector('.parallax-img');
  if (!img) return;
  gsap.fromTo(img,
    { yPercent: -8 },
    {
      yPercent: 8,
      ease: 'none',
      scrollTrigger: {
        trigger: wrap,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      }
    }
  );
});
