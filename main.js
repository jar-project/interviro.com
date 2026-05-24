// Navbar scroll behavior
const navbar = document.getElementById('navbar');
if (navbar) {
  const isTransparent = navbar.classList.contains('transparent');
  window.addEventListener('scroll', () => {
    if (isTransparent) {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    } else {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    }
  });
}

// Hamburger mobile menu
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
const navCta    = document.querySelector('.nav-cta');
if (hamburger && navLinks) {
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
    if (navCta) navCta.classList.toggle('open');
  });
}

// Fade-in on scroll
const fadeEls = document.querySelectorAll('[data-fade]');
if (fadeEls.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), e.target.dataset.delay || 0);
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
    io.observe(el);
  });
  const style = document.createElement('style');
  style.textContent = '.visible { opacity: 1 !important; transform: none !important; }';
  document.head.appendChild(style);
}

// Contact form
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const success = document.getElementById('formSuccess');
    if (success) { form.style.display = 'none'; success.style.display = 'block'; }
  });
}
