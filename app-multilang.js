// App State
const appState = {
  currentPage: 'techniques',
  currentLanguage: 'en',
  stats: {
    streakDays: 0,
    totalSessions: 0,
    alignmentScore: 0
  }
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
  // Initialize language
  LanguageManager.init();
  
  // Load stats from localStorage
  loadStats();
  
  // Hide loading screen
  setTimeout(() => {
    document.getElementById('loadingScreen').classList.add('hide');
  }, 1500);
  
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
  
  // Listen for language changes
  document.addEventListener('languageChanged', (e) => {
    appState.currentLanguage = e.detail.language;
    updateLanguageDisplay();
  });
});

// Language Functions
function toggleLanguageDropdown() {
  const dropdown = document.getElementById('languageDropdown');
  dropdown.classList.toggle('show');
  updateActiveLanguage();
}

function changeLanguage(lang) {
  LanguageManager.setLanguage(lang);
  const dropdown = document.getElementById('languageDropdown');
  dropdown.classList.remove('show');
  
  // Show feedback
  showNotification(`Language changed to ${getLanguageName(lang)}`);
}

function updateLanguageDisplay() {
  const langMap = {
    'en': 'EN',
    'es': 'ES',
    'pt': 'PT',
    'fr': 'FR',
    'de': 'DE'
  };
  document.getElementById('currentLang').textContent = langMap[LanguageManager.currentLanguage] || 'EN';
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

// Page Navigation
function switchPage(pageName) {
  // Update state
  appState.currentPage = pageName;
  
  // Update content pages
  document.querySelectorAll('.content-page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(`${pageName}-page`).classList.add('active');
  
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
  event.currentTarget.classList.add('active');
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function scrollToTechniques() {
  switchPage('techniques');
  setTimeout(() => {
    const techniquesHeader = document.querySelector('.techniques-header');
    if (techniquesHeader) {
      techniquesHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
}

// Technique Functions
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
  
  // Update stats
  appState.stats.totalSessions++;
  appState.stats.alignmentScore = Math.min(100, appState.stats.alignmentScore + 5);
  saveStats();
  updateStatsDisplay();
  
  // Show notification
  showNotification(`Starting ${techniqueName}...`);
  
  // In a real app, this would open the technique interface
  console.log(`Starting technique: ${techniqueId}`);
}

// Stats Functions
function loadStats() {
  const saved = localStorage.getItem('manifestation-stats');
  if (saved) {
    try {
      appState.stats = JSON.parse(saved);
    } catch (e) {
      console.error('Error loading stats:', e);
    }
  }
  updateStatsDisplay();
}

function saveStats() {
  localStorage.setItem('manifestation-stats', JSON.stringify(appState.stats));
}

function updateStatsDisplay() {
  document.getElementById('streakDays').textContent = appState.stats.streakDays;
  document.getElementById('totalSessions').textContent = appState.stats.totalSessions;
  document.getElementById('alignmentScore').textContent = appState.stats.alignmentScore + '%';
}

// Notification Functions
function showNotifications() {
  showNotification('Notifications feature coming soon!');
}

function showProfile() {
  showNotification('Profile feature coming soon!');
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--surface);
    color: var(--text-primary);
    padding: 1rem 2rem;
    border-radius: 12px;
    border: 1px solid var(--border);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    animation: slideDown 0.3s ease;
    max-width: 90%;
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'fadeOut 0.3s ease';
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 3000);
}

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js')
      .then(registration => {
        console.log('ServiceWorker registered:', registration);
      })
      .catch(err => {
        console.log('ServiceWorker registration failed:', err);
      });
  });
}

// Image Preloading
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

function preloadImages() {
  imagesToPreload.forEach(src => {
    const img = new Image();
    img.src = src;
  });
}

// Preload images after page load
window.addEventListener('load', preloadImages);

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeOut {
    from {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    to {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px);
    }
  }
`;
document.head.appendChild(style);