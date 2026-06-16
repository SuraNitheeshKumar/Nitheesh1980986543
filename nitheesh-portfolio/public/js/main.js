// ══════════════════════════════════════════════════════════════════════════════
// NAVBAR SCROLL EFFECT
// ══════════════════════════════════════════════════════════════════════════════

const navbar = document.querySelector('nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// ══════════════════════════════════════════════════════════════════════════════
// SCROLL ANIMATIONS - INTERSECTION OBSERVER
// ══════════════════════════════════════════════════════════════════════════════

const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      entry.target.classList.remove('hidden');
    }
  });
}, observerOptions);

// Observe all sections and major elements
document.querySelectorAll('section, .experience-entry, .education-card, .stat-card').forEach((el) => {
  el.classList.add('hidden');
  observer.observe(el);
});

// ══════════════════════════════════════════════════════════════════════════════
// SMOOTH SCROLL FOR NAV LINKS
// ══════════════════════════════════════════════════════════════════════════════

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ══════════════════════════════════════════════════════════════════════════════
// ACTIVE NAV HIGHLIGHTING
// ══════════════════════════════════════════════════════════════════════════════

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      
      // Remove active class from all links
      navLinks.forEach((link) => {
        link.classList.remove('active');
      });
      
      // Add active class to current section's link
      if (id) {
        const activeLink = document.querySelector(`.nav-links a[href="#${id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
        }
      }
    }
  });
}, {
  threshold: 0.3
});

sections.forEach((section) => {
  sectionObserver.observe(section);
});

// ══════════════════════════════════════════════════════════════════════════════
// STAGGERED CHILD ANIMATIONS
// ══════════════════════════════════════════════════════════════════════════════

// Add data-delay attributes to elements that need staggered animation
document.addEventListener('DOMContentLoaded', () => {
  // Stagger stat cards
  document.querySelectorAll('.stat-card').forEach((el, index) => {
    el.setAttribute('data-delay', (index + 1).toString());
  });

  // Stagger experience entries
  document.querySelectorAll('.experience-entry').forEach((el, index) => {
    el.setAttribute('data-delay', (index + 1).toString());
  });

  // Stagger education cards
  document.querySelectorAll('.education-card').forEach((el, index) => {
    el.setAttribute('data-delay', (index + 1).toString());
  });

  // Stagger skill tags
  document.querySelectorAll('.skill-tag').forEach((el, index) => {
    el.setAttribute('data-delay', ((index % 4) + 1).toString());
  });
});
