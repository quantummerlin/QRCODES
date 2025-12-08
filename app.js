/**
 * Main App Controller for Quantum Council PWA
 * Lightweight, local-storage based manifestation app
 */

// Simple local storage wrapper
class SimpleStorage {
  get(key) {
    try {
      return JSON.parse(localStorage.getItem(key));
    } catch {
      return null;
    }
  }

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  remove(key) {
    localStorage.removeItem(key);
  }
}

// Safe persona list (no copyrighted characters)
const SAFE_PERSONAS = {
  trinity: [
    { id: 'divine_witness', name: 'Divine Witness', avatar: '👁️', role: 'observer' },
    { id: 'resonance_keeper', name: 'Resonance Keeper', avatar: '🎵', role: 'guide' },
    { id: 'archetype_synthesizer', name: 'Archetype Synthesizer', avatar: '🧬', role: 'integrator' }
  ],
  guides: [
    { id: 'wisdom_keeper', name: 'Wisdom Keeper', avatar: '🦉', role: 'wisdom' },
    { id: 'courage_warrior', name: 'Courage Warrior', avatar: '⚔️', role: 'strength' },
    { id: 'joy_bringer', name: 'Joy Bringer', avatar: '🌟', role: 'happiness' },
    { id: 'clarity_seeker', name: 'Clarity Seeker', avatar: '💎', role: 'clarity' },
    { id: 'abundance_channel', name: 'Abundance Channel', avatar: '🌊', role: 'prosperity' },
    { id: 'love_alchemist', name: 'Love Alchemist', avatar: '💖', role: 'relationships' },
    { id: 'creativity_muse', name: 'Creativity Muse', avatar: '🎨', role: 'expression' }
  ],
  shadows: [
    { id: 'doubt_transmuter', name: 'Doubt Transmuter', avatar: '🌑', role: 'transformation' },
    { id: 'facedestroyer', name: 'Face Destroyer', avatar: '⛰️', role: 'overcoming' },
    { id: 'limitation_breaker', name: 'Limitation Breaker', avatar: '⛓️', role: 'freedom' }
  ]
};

// Achievement templates
const ACHIEVEMENTS = {
  first_session: { name: 'First Contact', description: 'Complete your first Council session', points: 10, icon: '🌟' },
  week_streak: { name: 'Week Warrior', description: '7 day engagement streak', points: 50, icon: '🔥' },
  first_win: { name: 'First Win', description: 'Log your first manifestation win', points: 25, icon: '🏆' },
  reality_master: { name: 'Reality Master', description: 'Complete 30 reality checks', points: 100, icon: '🎯' }
};

class QuantumCouncilApp {
  constructor() {
    this.storage = new SimpleStorage();
    this.currentPage = 'council';
    this.currentSession = null;
    this.user = null;
  }

  async init() {
    console.log('🌙 Initializing Quantum Council...');
    
    // Initialize user data
    this.user = this.storage.get('user') || {
      onboarding: false,
      intention: '',
      level: 1,
      points: 0,
      streak: 0,
      sessions: 0,
      realityChecks: 0,
      wins: 0,
      achievements: []
    };

    // Show appropriate screen
    if (!this.user.onboarding) {
      this.showOnboarding();
    } else {
      this.showMainApp();
    }

    // Setup event listeners
    this.setupEventListeners();

    // Hide loading screen
    setTimeout(() => {
      document.getElementById('loadingScreen').classList.add('hide');
      document.getElementById('app').classList.add('show');
    }, 1500);

    // Check for PWA install prompt
    this.setupPWAInstall();
  }

  setupEventListeners() {
    // Navigation tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        this.switchPage(e.target.dataset.page);
      });
    });

    // Bottom navigation
    document.querySelectorAll('.nav-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const page = e.currentTarget.dataset.page;
        this.switchPage(page);
      });
    });
  }

  setupPWAInstall() {
    // Basic PWA install detection
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(console.error);
    }
  }

  showOnboarding() {
    document.getElementById('onboarding').classList.remove('hide');
    document.getElementById('app').style.display = 'none';
  }

  showMainApp() {
    document.getElementById('onboarding').classList.add('hide');
    document.getElementById('app').style.display = 'block';
    
    // Update header with intention
    if (this.user.intention) {
      document.getElementById('headerSubtitle').textContent = this.user.intention;
    }
    
    // Load current page data
    this.loadPageData();
  }

  // Onboarding flow
  onboardingNext() {
    const currentStep = parseInt(document.querySelector('.onboarding-step.active').dataset.step);
    const nextStep = currentStep + 1;
    
    // Hide current step
    document.querySelector('.onboarding-step.active').classList.remove('active');
    
    // Show next step
    document.querySelector(`[data-step="${nextStep}"]`).classList.add('active');
    
    // Update progress dots
    document.querySelectorAll('.progress-dot').forEach((dot, index) => {
      dot.classList.toggle('active', index < nextStep);
    });
  }

  async onboardingComplete() {
    const intention = document.getElementById('onboardingIntention').value;
    
    if (intention) {
      this.user.intention = intention;
      this.user.onboarding = true;
      this.user.createdDate = new Date().toISOString();
      this.storage.set('user', this.user);
    }
    
    this.showMainApp();
    
    // Unlock first achievement
    this.unlockAchievement('first_session');
  }

  // Page navigation
  switchPage(pageName) {
    // Update navigation
    document.querySelectorAll('.nav-tab, .nav-item').forEach(item => {
      item.classList.toggle('active', item.dataset.page === pageName);
    });
    
    // Update content
    document.querySelectorAll('.content-page').forEach(page => {
      page.classList.toggle('active', page.id === `${pageName}-page`);
    });
    
    this.currentPage = pageName;
    this.loadPageData();
  }

  loadPageData() {
    switch(this.currentPage) {
      case 'council':
        this.loadCouncilPage();
        break;
      case 'reality':
        this.loadRealityPage();
        break;
      case 'progress':
        this.loadProgressPage();
        break;
      case 'achievements':
        this.loadAchievementsPage();
        break;
    }
  }

  loadCouncilPage() {
    // Update stats
    document.getElementById('streakDays').textContent = this.user.streak;
    document.getElementById('alignmentScore').textContent = this.calculateAlignment();
    
    // Load recent messages
    this.loadMessages();
  }

  loadRealityPage() {
    // Load recent evidence
    const evidence = this.storage.get('evidence') || [];
    const evidenceList = document.getElementById('recentEvidenceList');
    
    if (evidence.length === 0) {
      evidenceList.innerHTML = `
        <p style="text-align: center; color: var(--text-secondary); padding: 20px;">
          No evidence logged yet. Start your first reality check!
        </p>
      `;
    } else {
      evidenceList.innerHTML = evidence.slice(0, 3).map(ev => `
        <div class="message">
          <div class="message-author">
            <div class="persona-avatar">✨</div>
            <div>Evidence</div>
            <div class="message-time">${new Date(ev.date).toLocaleDateString()}</div>
          </div>
          <div class="message-content">${ev.description}</div>
        </div>
      `).join('');
    }
  }

  loadProgressPage() {
    // Update intention progress
    if (this.user.intention) {
      document.getElementById('intentionTitle').textContent = this.user.intention;
    }
    
    const progress = this.calculateProgress();
    document.getElementById('intentionProgress').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `${progress}% Complete`;
    
    // Update stats
    document.getElementById('totalSessions').textContent = this.user.sessions;
    document.getElementById('totalWins').textContent = this.user.wins;
    document.getElementById('totalEvidence').textContent = (this.storage.get('evidence') || []).length;
    document.getElementById('momentumScore').textContent = `${this.calculateMomentum()}%`;
  }

  loadAchievementsPage() {
    // Update level progress
    const levelProgress = this.calculateLevelProgress();
    document.getElementById('levelProgress').style.width = `${levelProgress}%`;
    document.getElementById('levelProgressText').textContent = `${this.user.points} / ${this.getNextLevelPoints()} points`;
    
    // Load achievements
    const achievementsGrid = document.getElementById('achievementsGrid');
    achievementsGrid.innerHTML = Object.entries(ACHIEVEMENTS).map(([key, achievement]) => {
      const unlocked = this.user.achievements.includes(key);
      return `
        <div class="achievement-card ${unlocked ? 'unlocked' : ''}">
          <div class="achievement-icon">${achievement.icon}</div>
          <div class="achievement-name">${achievement.name}</div>
          <div class="achievement-points">+${achievement.points}</div>
        </div>
      `;
    }).join('');
  }

  // Session management
  startSession() {
    this.currentSession = {
      id: Date.now(),
      startTime: new Date().toISOString(),
      messages: []
    };
    
    // Add welcome message
    this.addMessage('divine_witness', 
      'Welcome back, divine creator. I am here to witness your journey and hold space for your transformation.');
    
    this.continueSession();
  }

  continueSession() {
    // Select random persona for guidance
    const allPersonas = [...SAFE_PERSONAS.trinity, ...SAFE_PERSONAS.guides];
    const persona = allPersonas[Math.floor(Math.random() * allPersonas.length)];
    
    const messages = [
      `What would you like to focus on today, ${this.user.intention ? 'manifesting ' + this.user.intention.toLowerCase() : 'your journey'}?`,
      `I sense your energy shifting. What's calling to you right now?`,
      `The quantum field responds to your vibration. What reality are you choosing?`,
      `Your desires are becoming form. What evidence have you noticed?`,
      `You are the architect of your reality. What would you like to create?`
    ];
    
    const message = messages[Math.floor(Math.random() * messages.length)];
    this.addMessage(persona.id, message, persona);
  }

  addMessage(personaId, content, personaInfo = null) {
    const persona = personaInfo || SAFE_PERSONAS.trinity.find(p => p.id === personaId);
    
    const message = {
      personaId,
      personaName: persona ? persona.name : 'Guide',
      personaAvatar: persona ? persona.avatar : '🌟',
      content,
      timestamp: new Date().toISOString()
    };
    
    if (this.currentSession) {
      this.currentSession.messages.push(message);
    }
    
    this.displayMessage(message);
  }

  displayMessage(message) {
    const messageList = document.getElementById('messageList');
    const messageEl = document.createElement('div');
    messageEl.className = 'message fade-in';
    messageEl.innerHTML = `
      <div class="message-author">
        <div class="persona-avatar">${message.personaAvatar}</div>
        <div class="persona-name">${message.personaName}</div>
        <div class="message-time">Just now</div>
      </div>
      <div class="message-content">${message.content}</div>
    `;
    
    messageList.appendChild(messageEl);
    messageList.scrollTop = messageList.scrollHeight;
  }

  loadMessages() {
    const messages = this.storage.get('messages') || [];
    const messageList = document.getElementById('messageList');
    
    if (messages.length > 0) {
      messageList.innerHTML = messages.slice(-5).map(msg => `
        <div class="message">
          <div class="message-author">
            <div class="persona-avatar">${msg.personaAvatar}</div>
            <div class="persona-name">${msg.personaName}</div>
            <div class="message-time">${new Date(msg.timestamp).toLocaleTimeString()}</div>
          </div>
          <div class="message-content">${msg.content}</div>
        </div>
      `).join('');
    }
  }

  // Reality check
  submitRealityCheck() {
    const alignment = parseInt(document.getElementById('alignmentSlider').value);
    const evidence = document.getElementById('evidenceText').value;
    const gratitude = document.getElementById('gratitudeText').value;
    
    const realityCheck = {
      date: new Date().toISOString(),
      alignment,
      evidence,
      gratitude
    };
    
    // Save reality check
    const checks = this.storage.get('realityChecks') || [];
    checks.push(realityCheck);
    this.storage.set('realityChecks', checks);
    
    // Update stats
    this.user.realityChecks++;
    this.updateUser();
    
    // Save evidence if provided
    if (evidence) {
      this.logEvidence(evidence, 'reality_check');
    }
    
    // Show success
    alert('✅ Reality check completed successfully!');
    
    // Clear form
    document.getElementById('evidenceText').value = '';
    document.getElementById('gratitudeText').value = '';
    
    // Reload data
    this.loadPageData();
    
    // Check achievements
    if (this.user.realityChecks >= 30) {
      this.unlockAchievement('reality_master');
    }
  }

  // Evidence logging
  logEvidence(description, type = 'general') {
    const evidence = {
      date: new Date().toISOString(),
      description,
      type,
      significance: 5
    };
    
    const evidenceList = this.storage.get('evidence') || [];
    evidenceList.push(evidence);
    this.storage.set('evidence', evidenceList);
    
    return evidence;
  }

  // Quick actions
  showLogWin() {
    const win = prompt('🏆 What win or manifestation did you experience?');
    if (win) {
      this.logEvidence(win, 'win');
      this.user.wins++;
      this.updateUser();
      
      // Check achievements
      if (this.user.wins === 1) {
        this.unlockAchievement('first_win');
      }
      
      alert(`✅ Win logged: ${win}`);
    }
  }

  showGratitude() {
    const gratitude = prompt('🙏 What are you grateful for right now?');
    if (gratitude) {
      this.logEvidence(gratitude, 'gratitude');
      alert(`✅ Gratitude recorded: ${gratitude}`);
    }
  }

  showAffirmations() {
    const affirmations = [
      'I am the conscious creator of my reality',
      'My desires are manifesting now',
      'I am aligned with my highest good',
      'Abundance flows to me effortlessly',
      'I trust the process of life',
      'I am worthy of all my desires'
    ];
    
    const affirmation = affirmations[Math.floor(Math.random() * affirmations.length)];
    
    // Show affirmation as a message
    this.addMessage('divine_witness', `✨ ${affirmation}`);
  }

  showJournal() {
    const entry = prompt('📝 What would you like to reflect on?');
    if (entry) {
      this.logEvidence(entry, 'journal');
      alert('📝 Journal entry saved');
    }
  }

  // Calculations
  calculateAlignment() {
    const checks = this.storage.get('realityChecks') || [];
    if (checks.length === 0) return 5;
    
    const recent = checks.slice(-7); // Last 7 checks
    const avg = recent.reduce((sum, check) => sum + check.alignment, 0) / recent.length;
    return Math.round(avg * 10) / 10;
  }

  calculateProgress() {
    // Simple progress based on evidence and sessions
    const evidence = (this.storage.get('evidence') || []).length;
    const sessions = this.user.sessions;
    return Math.min(100, Math.round((evidence * 5) + (sessions * 10)));
  }

  calculateMomentum() {
    // Calculate based on recent activity
    const checks = this.storage.get('realityChecks') || [];
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    
    const recentChecks = checks.filter(check => new Date(check.date) >= weekAgo);
    return Math.min(100, recentChecks.length * 15);
  }

  calculateLevelProgress() {
    const currentPoints = this.user.points;
    const nextLevelPoints = this.getNextLevelPoints();
    const currentLevelPoints = (this.user.level - 1) * 100;
    
    return Math.round(((currentPoints - currentLevelPoints) / (nextLevelPoints - currentLevelPoints)) * 100);
  }

  getNextLevelPoints() {
    return this.user.level * 100;
  }

  // Achievement system
  unlockAchievement(achievementId) {
    if (this.user.achievements.includes(achievementId)) return;
    
    const achievement = ACHIEVEMENTS[achievementId];
    if (!achievement) return;
    
    this.user.achievements.push(achievementId);
    this.user.points += achievement.points;
    
    // Check level up
    const newLevel = Math.floor(this.user.points / 100) + 1;
    if (newLevel > this.user.level) {
      this.user.level = newLevel;
      this.showLevelUpNotification();
    }
    
    this.updateUser();
    this.showAchievementNotification(achievement);
    
    // Check other achievements
    if (this.user.streak >= 7) {
      this.unlockAchievement('week_streak');
    }
  }

  showAchievementNotification(achievement) {
    // Simple notification
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #4A90E2, #9B59B6);
      color: white;
      padding: 16px;
      border-radius: 12px;
      z-index: 1000;
      animation: slideIn 0.5s ease;
    `;
    notification.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="font-size: 24px;">${achievement.icon}</div>
        <div>
          <div style="font-weight: bold;">Achievement Unlocked!</div>
          <div style="font-size: 14px;">${achievement.name}</div>
          <div style="font-size: 12px;">+${achievement.points} points</div>
        </div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 5000);
  }

  showLevelUpNotification() {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 80px;
      right: 20px;
      background: linear-gradient(135deg, #FFD700, #FFA500);
      color: #333;
      padding: 16px;
      border-radius: 12px;
      z-index: 1000;
      animation: slideIn 0.5s ease;
      font-weight: bold;
    `;
    notification.innerHTML = `
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="font-size: 24px;">⬆️</div>
        <div>Level Up! Now Level ${this.user.level}</div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.remove();
    }, 5000);
  }

  // User data management
  updateUser() {
    this.storage.set('user', this.user);
  }

  updateStreak() {
    // Simple streak calculation
    const today = new Date().toDateString();
    const lastActive = this.storage.get('lastActive');
    
    if (lastActive) {
      const lastDate = new Date(lastActive).toDateString();
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (lastDate === today) {
        // Already active today
        return;
      } else if (lastDate === yesterday.toDateString()) {
        // Consecutive day
        this.user.streak++;
      } else {
        // Streak broken
        this.user.streak = 1;
      }
    } else {
      this.user.streak = 1;
    }
    
    this.user.longestStreak = Math.max(this.user.longestStreak, this.user.streak);
    this.storage.set('lastActive', new Date().toISOString());
    this.updateUser();
  }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new QuantumCouncilApp();
  window.app.init();
});

// Global functions for HTML onclick handlers
window.onboardingNext = () => window.app.onboardingNext();
window.onboardingComplete = () => window.app.onboardingComplete();
window.switchPage = (page) => window.app.switchPage(page);
window.startSession = () => window.app.startSession();
window.continueSession = () => window.app.continueSession();
window.submitRealityCheck = () => window.app.submitRealityCheck();
window.showLogWin = () => window.app.showLogWin();
window.showGratitude = () => window.app.showGratitude();
window.showAffirmations = () => window.app.showAffirmations();
window.showJournal = () => window.app.showJournal();
window.updateAlignmentValue = (value) => {
  document.getElementById('alignmentValue').textContent = value;
};
window.showNotifications = () => alert('No notifications yet');
window.showProfile = () => alert(`Level ${window.app.user.level} • ${window.app.user.points} points`);