gsap.registerPlugin(ScrollTrigger);

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
