// Quantum App State
const appState = {
  currentPage: 'techniques',
  currentLanguage: 'en',
  stats: {
    streakDays: 0,
    totalSessions: 0,
    alignmentScore: 0
  },
  quantumLevel: 1
};

// Initialize Quantum App
document.addEventListener('DOMContentLoaded', () => {
  // Initialize language
  LanguageManager.init();
  
  // Load quantum stats from localStorage
  loadStats();
  
  // Create quantum particles
  createQuantumParticles();
  
  // Hide loading screen with quantum effect
  setTimeout(() => {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.style.transition = 'opacity 2s ease, transform 2s ease';
    loadingScreen.style.transform = 'scale(1.5) rotate(360deg)';
    loadingScreen.style.opacity = '0';
    setTimeout(() => {
      loadingScreen.classList.add('hide');
      loadingScreen.style.transform = 'scale(1) rotate(0deg)';
    }, 2000);
  }, 2000);
  
  // Update current language display
  updateLanguageDisplay();
  
  // Close language dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('languageDropdown');
    const btn = document.getElementById('languageBtn');
    if (!dropdown.contains(e.target) && !btn.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });
  
  // Listen for quantum language changes
  document.addEventListener('languageChanged', (e) => {
    appState.currentLanguage = e.detail.language;
    updateLanguageDisplay();
    createQuantumBurst();
  });
  
  // Add quantum hover effects to cards
  addQuantumCardEffects();
  
  // Start quantum animations
  startQuantumAnimations();
  
  // Add scroll effects
  addScrollEffects();
  
  // Quantum reality bending on load
  setTimeout(() => {
    bendReality();
  }, 3000);
});

// Quantum Particle System
function createQuantumParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    createParticle(particlesContainer);
  }
}

function createParticle(container) {
  const particle = document.createElement('div');
  particle.className = 'particle';
  
  // Random position
  particle.style.left = Math.random() * 100 + '%';
  
  // Random size
  const size = Math.random() * 4 + 1;
  particle.style.width = size + 'px';
  particle.style.height = size + 'px';
  
  // Random color
  const colors = ['#00ffff', '#ff00ff', '#0080ff', '#ffd700'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  particle.style.background = color;
  particle.style.boxShadow = `0 0 ${Math.random() * 20 + 10}px ${color}`;
  
  // Random animation duration
  const duration = Math.random() * 20 + 10;
  particle.style.animationDuration = duration + 's';
  
  // Random animation delay
  particle.style.animationDelay = Math.random() * 10 + 's';
  
  container.appendChild(particle);
  
  // Remove and recreate particle after animation
  setTimeout(() => {
    if (particle.parentNode) {
      particle.parentNode.removeChild(particle);
      createParticle(container);
    }
  }, duration * 1000);
}

// Language Functions
function toggleLanguageDropdown() {
  const dropdown = document.getElementById('languageDropdown');
  dropdown.classList.toggle('show');
  updateActiveLanguage();
  
  if (dropdown.classList.contains('show')) {
    createQuantumBurst(event.target);
  }
}

function changeLanguage(lang) {
  LanguageManager.setLanguage(lang);
  const dropdown = document.getElementById('languageDropdown');
  dropdown.classList.remove('show');
  
  // Quantum feedback
  createQuantumBurst(document.getElementById('languageBtn'));
  showQuantumNotification(`Quantum language shifted to ${getLanguageName(lang)} 🔮`);
}

function updateLanguageDisplay() {
  const langMap = {
    'en': 'EN',
    'es': 'ES',
    'pt': 'PT',
    'fr': 'FR',
    'de': 'DE'
  };
  const currentLangElement = document.getElementById('currentLang');
  if (currentLangElement) {
    currentLangElement.textContent = langMap[LanguageManager.currentLanguage] || 'EN';
  }
  updateActiveLanguage();
}

function updateActiveLanguage() {
  document.querySelectorAll('.language-option').forEach(option => {
    option.classList.remove('active');
    if (option.dataset.lang === LanguageManager.currentLanguage) {
      option.classList.add('active');
    }
  });
}

function getLanguageName(lang) {
  const names = {
    'en': 'English',
    'es': 'Español',
    'pt': 'Português',
    'fr': 'Français',
    'de': 'Deutsch'
  };
  return names[lang] || 'English';
}

// Page Navigation with Quantum Effects
function switchPage(pageName) {
  // Quantum transition effect
  const currentPage = document.querySelector('.content-page.active');
  if (currentPage) {
    currentPage.style.animation = 'quantumFadeOut 0.5s ease';
  }
  
  // Update state
  appState.currentPage = pageName;
  
  setTimeout(() => {
    // Update content pages
    document.querySelectorAll('.content-page').forEach(page => {
      page.classList.remove('active');
    });
    
    const newPage = document.getElementById(`${pageName}-page`);
    if (newPage) {
      newPage.classList.add('active');
      newPage.style.animation = 'quantumFadeIn 0.5s ease';
    }
    
    // Update nav tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.classList.remove('active');
      if (tab.dataset.page === pageName) {
        tab.classList.add('active');
      }
    });
    
    // Update bottom nav
    document.querySelectorAll('.nav-item').forEach(item => {
      item.classList.remove('active');
    });
    
    if (event && event.currentTarget) {
      event.currentTarget.classList.add('active');
    }
    
    // Create quantum effect
    createQuantumBurst(document.querySelector('.nav-tab[data-page="' + pageName + '"]'));
  }, 250);
  
  // Scroll to top with smooth quantum effect
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToTechniques() {
  switchPage('techniques');
  setTimeout(() => {
    const techniquesHeader = document.querySelector('.techniques-header');
    if (techniquesHeader) {
      techniquesHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
      createQuantumBurst(techniquesHeader);
    }
  }, 500);
}

// Quantum Technique Functions
function startTechnique(techniqueId) {
  const techniqueNames = {
    '369': LanguageManager.getText('technique1Title'),
    'visualization': LanguageManager.getText('technique2Title'),
    'affirmations': LanguageManager.getText('technique3Title'),
    'scripting': LanguageManager.getText('technique4Title'),
    'gratitude': LanguageManager.getText('technique5Title'),
    'vision': LanguageManager.getText('technique6Title'),
    'innerchild': LanguageManager.getText('technique7Title'),
    'vocal': LanguageManager.getText('technique8Title')
  };
  
  const techniqueName = techniqueNames[techniqueId] || techniqueId;
  
  // Update quantum stats
  appState.stats.totalSessions++;
  appState.stats.alignmentScore = Math.min(100, appState.stats.alignmentScore + 7);
  appState.quantumLevel = Math.floor(appState.stats.totalSessions / 10) + 1;
  saveStats();
  updateStatsDisplay();
  
  // Create quantum reality bending effect
  bendReality();
  
  // Show quantum notification
  showQuantumNotification(`🌌 Quantum ${techniqueName} initiated! Reality matrix bending...`);
  
  // Create particle explosion
  createParticleExplosion();
  
  // In a real app, this would open the technique interface
  console.log(`🔮 Quantum technique started: ${techniqueId}`);
}

// Stats Functions
function loadStats() {
  const saved = localStorage.getItem('quantum-manifestation-stats');
  if (saved) {
    try {
      appState.stats = JSON.parse(saved);
    } catch (e) {
      console.error('Error loading quantum stats:', e);
    }
  }
  updateStatsDisplay();
}

function saveStats() {
  localStorage.setItem('quantum-manifestation-stats', JSON.stringify(appState.stats));
}

function updateStatsDisplay() {
  const streakElement = document.getElementById('streakDays');
  const sessionsElement = document.getElementById('totalSessions');
  const alignmentElement = document.getElementById('alignmentScore');
  
  if (streakElement) {
    animateValue(streakElement, parseInt(streakElement.textContent), appState.stats.streakDays, 1000);
  }
  if (sessionsElement) {
    animateValue(sessionsElement, parseInt(sessionsElement.textContent), appState.stats.totalSessions, 1000);
  }
  if (alignmentElement) {
    animateValue(alignmentElement, parseInt(alignmentElement.textContent), appState.stats.alignmentScore, 1000, '%');
  }
}

function animateValue(element, start, end, duration, suffix = '') {
  const range = end - start;
  const increment = range / (duration / 16);
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      current = end;
      clearInterval(timer);
    }
    element.textContent = Math.round(current) + suffix;
  }, 16);
}

// Quantum Notification System
function showNotifications() {
  showQuantumNotification('🔔 Quantum notifications coming soon...');
}

function showProfile() {
  showQuantumNotification('👤 Quantum profile portal coming soon...');
}

function showQuantumNotification(message) {
  // Create quantum notification element
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: linear-gradient(135deg, rgba(26, 31, 58, 0.95), rgba(26, 31, 58, 0.85));
    color: var(--quantum-cyan);
    padding: 1rem 2rem;
    border-radius: 16px;
    border: 2px solid var(--quantum-cyan);
    box-shadow: 
      0 20px 60px rgba(0, 255, 255, 0.4),
      0 0 40px rgba(255, 0, 255, 0.3),
      inset 0 0 20px rgba(0, 255, 255, 0.1);
    z-index: 10000;
    animation: quantumNotificationSlide 0.5s ease;
    max-width: 90%;
    font-weight: 600;
    text-shadow: 0 0 20px rgba(0, 255, 255, 0.5);
    backdrop-filter: blur(20px);
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Create quantum burst effect
  createQuantumBurst(notification);
  
  // Remove after 4 seconds with quantum fade
  setTimeout(() => {
    notification.style.animation = 'quantumNotificationFade 0.5s ease';
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 500);
  }, 4000);
}

// Quantum Visual Effects
function createQuantumBurst(element) {
  if (!element) return;
  
  const burst = document.createElement('div');
  const rect = element.getBoundingClientRect();
  
  burst.style.cssText = `
    position: fixed;
    left: ${rect.left + rect.width / 2}px;
    top: ${rect.top + rect.height / 2}px;
    width: 0;
    height: 0;
    background: radial-gradient(circle, var(--quantum-cyan), transparent);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    animation: quantumBurst 0.6s ease-out;
  `;
  
  document.body.appendChild(burst);
  
  setTimeout(() => {
    if (document.body.contains(burst)) {
      document.body.removeChild(burst);
    }
  }, 600);
}

function createParticleExplosion() {
  const colors = ['#00ffff', '#ff00ff', '#0080ff', '#ffd700', '#ff69b4'];
  const particleCount = 20;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    
    particle.style.cssText = `
      position: fixed;
      left: 50%;
      top: 50%;
      width: 6px;
      height: 6px;
      background: ${color};
      border-radius: 50%;
      box-shadow: 0 0 20px ${color};
      pointer-events: none;
      z-index: 9999;
    `;
    
    const angle = (Math.PI * 2 * i) / particleCount;
    const velocity = Math.random() * 300 + 200;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    document.body.appendChild(particle);
    
    let x = 0;
    let y = 0;
    let opacity = 1;
    
    const animateParticle = () => {
      x += vx * 0.016;
      y += vy * 0.016;
      opacity -= 0.02;
      
      particle.style.transform = `translate(${x}px, ${y}px)`;
      particle.style.opacity = opacity;
      
      if (opacity > 0) {
        requestAnimationFrame(animateParticle);
      } else {
        if (document.body.contains(particle)) {
          document.body.removeChild(particle);
        }
      }
    };
    
    requestAnimationFrame(animateParticle);
  }
}

function bendReality() {
  // Create reality bending effect
  document.body.style.animation = 'realityBend 2s ease';
  
  setTimeout(() => {
    document.body.style.animation = '';
  }, 2000);
}

// Quantum Card Effects
function addQuantumCardEffects() {
  const cards = document.querySelectorAll('.technique-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', (e) => {
      createQuantumBurst(e.currentTarget);
    });
    
    card.addEventListener('click', (e) => {
      // Create electric shock effect
      const shock = document.createElement('div');
      shock.style.cssText = `
        position: fixed;
        inset: 0;
        background: radial-gradient(circle at center, rgba(0, 255, 255, 0.3), transparent);
        pointer-events: none;
        z-index: 9998;
        animation: electricShock 0.3s ease;
      `;
      
      document.body.appendChild(shock);
      
      setTimeout(() => {
        if (document.body.contains(shock)) {
          document.body.removeChild(shock);
        }
      }, 300);
    });
  });
}

// Quantum Animations
function startQuantumAnimations() {
  // Add quantum pulsing to buttons
  const buttons = document.querySelectorAll('.hero-button, .technique-button, .icon-btn');
  
  buttons.forEach(button => {
    setInterval(() => {
      button.style.boxShadow = `0 ${Math.random() * 10 + 5}px ${Math.random() * 40 + 20}px rgba(0, 255, 255, ${Math.random() * 0.5 + 0.3})`;
    }, 2000);
  });
}

// Scroll Effects
function addScrollEffects() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-reveal');
        createQuantumBurst(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.technique-card, .stat-card').forEach(el => {
    observer.observe(el);
  });
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(registration => {
        console.log('🔮 Quantum ServiceWorker registered:', registration);
      })
      .catch(err => {
        console.log('❌ Quantum ServiceWorker registration failed:', err);
      });
  });
}

// Image Preloading with Quantum Effect
const imagesToPreload = [
  '085cb80b-3c46-4539-b09a-3904fd540120_0.png',
  '25798d6e-7279-4fb1-b05c-96b554400f42_0 (1).png',
  '4e80bfe6-3996-4634-8b04-b4fbb777fe7c_0.png',
  '672e35e1-fe93-4f67-b800-731779abadae_0.png',
  '93824932-023a-44a5-927e-2c4541a4e6c3_0.png',
  'b6530778-7109-4328-bda5-e624904e9ec5_0.png',
  'Inner Child Healing.png',
  'Vocal Grounding.png',
  'f02b4077-d0c2-4615-9ca6-6f31445b6f2e_0.png'
];

function preloadQuantumImages() {
  imagesToPreload.forEach((src, index) => {
    setTimeout(() => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        console.log(`🔮 Quantum image loaded: ${src}`);
        createQuantumBurst(document.body);
      };
    }, index * 100);
  });
}

// Preload images after page load
window.addEventListener('load', preloadQuantumImages);

// Add Quantum CSS Animations
const quantumStyle = document.createElement('style');
quantumStyle.textContent = `
  @keyframes quantumFadeOut {
    from {
      opacity: 1;
      transform: translateY(0) scale(1);
      filter: blur(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px) scale(0.9);
      filter: blur(10px);
    }
  }
  
  @keyframes quantumNotificationSlide {
    from {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px) scale(0.8);
      filter: blur(10px);
    }
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0) scale(1);
      filter: blur(0);
    }
  }
  
  @keyframes quantumNotificationFade {
    from {
      opacity: 1;
      transform: translateX(-50%) translateY(0) scale(1);
    }
    to {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px) scale(0.8);
      filter: blur(10px);
    }
  }
  
  @keyframes quantumBurst {
    from {
      width: 0;
      height: 0;
      opacity: 1;
    }
    to {
      width: 200px;
      height: 200px;
      opacity: 0;
      transform: translate(-50%, -50%);
    }
  }
  
  @keyframes electricShock {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  
  @keyframes realityBend {
    0%, 100% {
      filter: hue-rotate(0deg) contrast(1) brightness(1);
    }
    25% {
      filter: hue-rotate(90deg) contrast(1.2) brightness(1.1);
    }
    50% {
      filter: hue-rotate(180deg) contrast(1.1) brightness(1.2);
    }
    75% {
      filter: hue-rotate(270deg) contrast(1.2) brightness(1.1);
    }
  }
  
  @keyframes scrollReveal {
    from {
      opacity: 0;
      transform: translateY(50px) scale(0.9);
      filter: blur(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
      filter: blur(0);
    }
  }
`;

document.head.appendChild(quantumStyle);

// Quantum Console Messages
console.log('%c🔮 QUANTUM MANIFESTATION SYSTEM INITIALIZED 🔮', 'color: #00ffff; font-size: 20px; font-weight: bold; text-shadow: 0 0 20px #00ffff;');
console.log('%cReality matrix bending engaged...', 'color: #ff00ff; font-size: 14px; font-style: italic;');
console.log('%cQuantum particles flowing...', 'color: #0080ff; font-size: 14px; font-style: italic;');
console.log('%c✨ Welcome to your quantum manifestation journey! ✨', 'color: #ffd700; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px #ffd700;');