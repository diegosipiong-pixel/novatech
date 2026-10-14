// Scroll progress
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  document.getElementById('scrollProgress').style.width = progress + '%';
  
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  if (scrollTop > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Fade in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Mobile nav
document.getElementById('hamburgerBtn').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.add('active');
});
document.getElementById('closeNav').addEventListener('click', closeMobileNav);

function closeMobileNav() {
  document.getElementById('mobileNav').classList.remove('active');
}

// Theme toggle (visual only)
let darkMode = true;
document.getElementById('themeToggle').addEventListener('click', function() {
  darkMode = !darkMode;
  const icon = this.querySelector('i');
  if (darkMode) {
    icon.className = 'fas fa-moon';
    document.documentElement.style.setProperty('--bg-primary', '#0a0a0f');
    document.documentElement.style.setProperty('--bg-secondary', '#111118');
    document.documentElement.style.setProperty('--bg-card', '#1a1a2e');
    document.documentElement.style.setProperty('--text-primary', '#ffffff');
    document.documentElement.style.setProperty('--text-secondary', '#b0b0c0');
  } else {
    icon.className = 'fas fa-sun';
    document.documentElement.style.setProperty('--bg-primary', '#f5f5fa');
    document.documentElement.style.setProperty('--bg-secondary', '#eeeef5');
    document.documentElement.style.setProperty('--bg-card', '#ffffff');
    document.documentElement.style.setProperty('--text-primary', '#1a1a2e');
    document.documentElement.style.setProperty('--text-secondary', '#5a5a6a');
  }
});

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Animate glowing cube rotation
const cube = document.querySelector('.glowing-cube');
if (cube) {
  let angle = 0;
  setInterval(() => {
    angle += 0.5;
    cube.style.transform = `rotateY(${angle}deg)`;
  }, 30);
}