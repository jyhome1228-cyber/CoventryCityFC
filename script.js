const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
);

reveals.forEach((el, index) => {
  el.style.transitionDelay = `${Math.min((index % 4) * 60, 180)}ms`;
  observer.observe(el);
});

// Make the opening frame visible immediately even before observer callback.
document.querySelectorAll('.hero .reveal').forEach((el, index) => {
  setTimeout(() => el.classList.add('is-visible'), 100 + index * 120);
});

const header = document.querySelector('.site-header');
let lastY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentY = window.scrollY;
  if (currentY > lastY && currentY > 160) {
    header.style.transform = 'translateY(-100%)';
  } else {
    header.style.transform = 'translateY(0)';
  }
  lastY = currentY;
}, { passive: true });

header.style.transition = 'transform .35s ease';
