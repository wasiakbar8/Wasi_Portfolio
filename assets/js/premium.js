/**
 * PREMIUM PORTFOLIO — MAIN JAVASCRIPT
 * Features: Custom cursor, particle canvas, smooth animations,
 * scroll reveals, counters, skill bars, tilt cards, form handling
 */

// ============ CUSTOM CURSOR ============
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');

let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursorDot.style.left = mouseX + 'px';
  cursorDot.style.top = mouseY + 'px';
});

function animateCursor() {
  ringX += (mouseX - ringX) * 0.12;
  ringY += (mouseY - ringY) * 0.12;
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top = ringY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

// Cursor hover on interactive elements
document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
  el.addEventListener('mouseenter', () => cursorRing.classList.add('hovered'));
  el.addEventListener('mouseleave', () => cursorRing.classList.remove('hovered'));
});

// ============ NAVBAR ============
const navbar = document.getElementById('navbar');
const navHamburger = document.querySelector('.nav-hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
let menuOpen = false;

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  updateActiveNav();
});

// Smooth scroll nav links
document.querySelectorAll('[data-nav]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.getElementById(link.dataset.nav);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (menuOpen) toggleMenu();
    }
  });
});

// Mobile hamburger
if (navHamburger) {
  navHamburger.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  menuOpen = !menuOpen;
  mobileMenu?.classList.toggle('open', menuOpen);
  document.body.style.overflow = menuOpen ? 'hidden' : '';
}

// Active nav link on scroll
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id], article[id]');
  const navLinks = document.querySelectorAll('[data-nav]');
  let current = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.dataset.nav === current) {
      link.classList.add('active');
    }
  });
}

// ============ PARTICLE CANVAS ============
const canvas = document.getElementById('canvas-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const particles = [];
const PARTICLE_COUNT = 60;
const COLORS = ['rgba(108,99,255,', 'rgba(167,139,250,', 'rgba(56,189,248,'];

class Particle {
  constructor() { this.reset(); }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 1.5 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.4;
    this.speedY = (Math.random() - 0.5) * 0.4;
    this.opacity = Math.random() * 0.4 + 0.1;
    this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
    this.pulse = Math.random() * Math.PI * 2;
    this.pulseSpeed = Math.random() * 0.02 + 0.01;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.pulse += this.pulseSpeed;
    this.currentOpacity = this.opacity * (0.7 + 0.3 * Math.sin(this.pulse));

    if (this.x < 0 || this.x > canvas.width ||
        this.y < 0 || this.y > canvas.height) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color + this.currentOpacity + ')';
    ctx.fill();
  }
}

for (let i = 0; i < PARTICLE_COUNT; i++) {
  particles.push(new Particle());
}

function connectParticles() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(108,99,255,${0.06 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.5;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  connectParticles();
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ============ MOUSE FOLLOW GLOW (HERO) ============
const heroSection = document.getElementById('hero');
const heroGlow = document.querySelector('.hero-glow-follow');

if (heroSection && heroGlow) {
  heroSection.addEventListener('mousemove', (e) => {
    const rect = heroSection.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroGlow.style.left = x + 'px';
    heroGlow.style.top = y + 'px';
  });
}

// ============ SCROLL REVEAL ============
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${entry.target.dataset.delay || 0}ms`;
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
  revealObserver.observe(el);
});

// ============ STAGGER ANIMATIONS ============
const staggerObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const children = entry.target.querySelectorAll('[data-stagger]');
      children.forEach((child, i) => {
        setTimeout(() => {
          child.style.opacity = '1';
          child.style.transform = 'translateY(0)';
        }, i * 80);
      });
      staggerObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-stagger-parent]').forEach(el => {
  const children = el.querySelectorAll('[data-stagger]');
  children.forEach(child => {
    child.style.opacity = '0';
    child.style.transform = 'translateY(20px)';
    child.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  staggerObserver.observe(el);
});

// ============ ANIMATED COUNTERS ============
function animateCounter(el, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  const timer = setInterval(() => {
    start += increment;
    if (start >= target) {
      start = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(start) + (el.dataset.suffix || '');
  }, 16);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.count);
      animateCounter(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => {
  counterObserver.observe(el);
});

// ============ SKILL BARS ============
const skillBarObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll('.skill-bar-fill');
      bars.forEach(bar => {
        setTimeout(() => {
          bar.style.width = bar.dataset.width + '%';
        }, 200);
      });
      skillBarObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('.skills-grid').forEach(grid => {
  skillBarObserver.observe(grid);
});

// ============ SKILLS TABS ============
const skillTabs = document.querySelectorAll('.skill-tab');
const skillGrids = document.querySelectorAll('.skills-grid');

skillTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    skillTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const category = tab.dataset.category;
    skillGrids.forEach(grid => {
      grid.style.display = grid.dataset.category === category || category === 'all' ? 'grid' : 'none';
    });
  });
});

// ============ PROJECTS FILTER ============
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;
    projectCards.forEach(card => {
      const match = filter === 'all' || card.dataset.category === filter;
      card.style.opacity = match ? '1' : '0';
      card.style.transform = match ? 'scale(1)' : 'scale(0.9)';
      card.style.pointerEvents = match ? 'all' : 'none';
      card.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      setTimeout(() => {
        card.style.display = match ? 'flex' : 'none';
      }, match ? 0 : 400);
    });
  });
});

// ============ CARD TILT EFFECT ============
document.querySelectorAll('[data-tilt]').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
    card.style.transition = 'transform 0.1s ease';
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateZ(0)';
    card.style.transition = 'transform 0.5s ease';
  });
});

// ============ CONTACT FORM ============
const contactForm = document.getElementById('contact-form-new');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('.form-submit');
    const originalHTML = btn.innerHTML;

    btn.innerHTML = `<span class="spinner-icon">⟳</span> Sending...`;
    btn.disabled = true;

    try {
      const formData = new FormData(contactForm);
      const response = await fetch('https://formsubmit.co/syedwasiakbar@gmail.com', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        document.querySelector('.modal-overlay').classList.add('active');
        contactForm.reset();
      } else {
        alert('Something went wrong. Please email me directly at syedwasiakbar@gmail.com');
      }
    } catch (err) {
      alert('Failed to send. Please email me directly at syedwasiakbar@gmail.com');
    } finally {
      btn.innerHTML = originalHTML;
      btn.disabled = false;
    }
  });
}

// Modal close
document.querySelector('.modal-close')?.addEventListener('click', () => {
  document.querySelector('.modal-overlay')?.classList.remove('active');
});

document.querySelector('.modal-overlay')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) {
    e.currentTarget.classList.remove('active');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelector('.modal-overlay')?.classList.remove('active');
  }
});

// ============ TYPED TEXT EFFECT ============
function typeWriter(el, texts, speed = 100) {
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentText = texts[textIndex];
    if (isDeleting) {
      el.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
    } else {
      el.textContent = currentText.substring(0, charIndex + 1);
      charIndex++;
    }

    if (!isDeleting && charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 2000);
      return;
    }

    if (isDeleting && charIndex === 0) {
      isDeleting = false;
      textIndex = (textIndex + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? speed / 2 : speed);
  }

  type();
}

const typedEl = document.getElementById('typed-text');
if (typedEl) {
  typeWriter(typedEl, [
    'Frontend Developer',
    'React Native Engineer',
    'Mobile App Developer',
    'UI/UX Enthusiast',
    'AI App Builder'
  ]);
}

// ============ MAGNETIC BUTTONS ============
document.querySelectorAll('[data-magnetic]').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
  });

  btn.addEventListener('mouseleave', () => {
    btn.style.transform = 'translate(0, 0)';
    btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
  });
});

// ============ SCROLL PROGRESS BAR ============
const progressBar = document.querySelector('.scroll-progress');
if (progressBar) {
  window.addEventListener('scroll', () => {
    const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrolled + '%';
  });
}

// ============ PARALLAX EFFECTS ============
function handleParallax() {
  const scrollY = window.scrollY;
  document.querySelectorAll('[data-parallax]').forEach(el => {
    const speed = parseFloat(el.dataset.parallax) || 0.3;
    el.style.transform = `translateY(${scrollY * speed}px)`;
  });
}

window.addEventListener('scroll', handleParallax, { passive: true });

// ============ SMOOTH SCROLL LINKS ============
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const id = a.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ============ GREETING TOAST ============
setTimeout(() => {
  const toast = document.createElement('div');
  toast.style.cssText = `
    position: fixed; bottom: 100px; left: 50%; transform: translateX(-50%);
    background: rgba(13,13,26,0.9); border: 1px solid rgba(108,99,255,0.3);
    backdrop-filter: blur(16px); border-radius: 9999px;
    padding: 12px 28px; color: #f0f0ff; font-size: 0.875rem;
    z-index: 1000; animation: toastIn 0.5s ease; font-family: 'Inter', sans-serif;
    box-shadow: 0 8px 32px rgba(108,99,255,0.2);
  `;
  toast.innerHTML = '👋 Welcome to my portfolio!';
  document.body.appendChild(toast);

  const style = document.createElement('style');
  style.textContent = `
    @keyframes toastIn { from { opacity:0; transform:translateX(-50%) translateY(20px); }
                         to   { opacity:1; transform:translateX(-50%) translateY(0); } }
  `;
  document.head.appendChild(style);

  setTimeout(() => {
    toast.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(-50%) translateY(20px)';
    setTimeout(() => toast.remove(), 500);
  }, 3500);
}, 1500);

console.log('%c✨ Syed Wasi Akbar Portfolio', 'font-size:18px; font-weight:bold; color:#6c63ff; font-family:Space Grotesk;');
console.log('%cBuilt with ❤️ using HTML, CSS & Vanilla JS', 'font-size:13px; color:#a78bfa;');
