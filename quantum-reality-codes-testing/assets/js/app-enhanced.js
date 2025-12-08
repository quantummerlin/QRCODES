/**
 * Enhanced Quantum Council App - Main Application Logic
 * With typing indicators, context-aware responses, structured intentions, and daily challenges
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
    { id: 'divine_witness', name: 'Divine Witness', avatar: '👁️', role: 'observer', style: 'gentle' },
    { id: 'resonance_keeper', name: 'Resonance Keeper', avatar: '🎵', role: 'guide', style: 'mystic' },
    { id: 'archetype_synthesizer', name: 'Archetype Synthesizer', avatar: '🧬', role: 'integrator', style: 'direct' }
  ],
  guides: [
    { id: 'wisdom_keeper', name: 'Wisdom Keeper', avatar: '🦉', role: 'wisdom', style: 'gentle' },
    { id: 'courage_warrior', name: 'Courage Warrior', avatar: '⚔️', role: 'strength', style: 'direct' },
    { id: 'joy_bringer', name: 'Joy Bringer', avatar: '🌟', role: 'happiness', style: 'gentle' },
    { id: 'clarity_seeker', name: 'Clarity Seeker', avatar: '💎', role: 'clarity', style: 'direct' },
    { id: 'abundance_channel', name: 'Abundance Channel', avatar: '🌊', role: 'prosperity', style: 'mystic' },
    { id: 'love_alchemist', name: 'Love Alchemist', avatar: '💖', role: 'relationships', style: 'gentle' },
    { id: 'creativity_muse', name: 'Creativity Muse', avatar: '🎨', role: 'expression', style: 'mystic' }
  ],
  shadows: [
    { id: 'doubt_transmuter', name: 'Doubt Transmuter', avatar: '🌑', role: 'transformation', style: 'direct' },
    { id: 'fear_destroyer', name: 'Fear Destroyer', avatar: '⛰️', role: 'overcoming', style: 'direct' },
    { id: 'limitation_breaker', name: 'Limitation Breaker', avatar: '⛓️', role: 'freedom', style: 'direct' }
  ]
};

// Achievement templates (expanded)
const ACHIEVEMENTS = {
  first_session: { name: 'First Contact', description: 'Complete your first Council session', points: 10, icon: '🌟' },
  week_streak: { name: 'Week Warrior', description: '7 day engagement streak', points: 50, icon: '🔥' },
  first_win: { name: 'First Win', description: 'Log your first manifestation win', points: 25, icon: '🏆' },
  reality_master: { name: 'Reality Master', description: 'Complete 30 reality checks', points: 100, icon: '🎯' },
  intention_completed: { name: 'Intention Manifested', description: 'Complete all indicators', points: 500, icon: '👑' },
  daily_challenger: { name: 'Daily Challenger', description: 'Complete 10 daily challenges', points: 75, icon: '🎯' }
};

class QuantumCouncilApp {
  constructor() {
    this.storage = new SimpleStorage();
    this.currentPage = 'council';
    this.currentSession = null;
    this.user = null;
    this.dailyChallengesCompleted = 0;
  }

  async init() {
    console.log('🌙 Initializing Quantum Council...');
    
    // Initialize user data with enhanced structure
    this.user = this.storage.get('user') || {
      onboarding: false,
      intention: '',
      intentionData: {
        area: '',
        statement: '',
        why: '',
        indicators: []
      },
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
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./sw.js').catch(console.error);
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
      document.getElementById('headerSubtitle').textContent = `Intention: ${this.user.intention}`;
    }
    
    // Load current page data
    this.loadPageData();
  }

  // Enhanced onboarding flow
  onboardingNext() {
    const currentStep = parseInt(document.querySelector('.onboarding-step.active').dataset.step);
    const nextStep = currentStep + 1;
    
    // Validate step 2 (intention setting)
    if (currentStep === 2) {
      const area = document.getElementById('onboardingArea').value;
      const intention = document.getElementById('onboardingIntention').value.trim();
      
      if (!area || !intention) {
        alert('Please fill in all fields to continue.');
        return;
      }
    }
    
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
    const area = document.getElementById('onboardingArea').value;
    const rawIntention = document.getElementById('onboardingIntention').value.trim();
    const why = document.getElementById('onboardingWhy').value.trim();

    if (!rawIntention) {
      alert('Please enter what you want to manifest.');
      return;
    }

    // Simple present-tense transformation
    let statement = rawIntention;

    // Replace common future/negative patterns (very simple, local-only)
    statement = statement
      .replace(/\bI want to\b/gi, 'I am')
      .replace(/\bI want\b/gi, 'I am')
      .replace(/\bI will\b/gi, 'I am')
      .replace(/\bI don\'t want\b/gi, 'I now allow the opposite of')
      .replace(/\bI no longer want\b/gi, 'I now choose');

    // If it doesn't start with "I am" or "I have", wrap it
    if (!/^I (am|have)/i.test(statement)) {
      statement = 'I am ' + statement.charAt(0).toLowerCase() + statement.slice(1);
    }

    // Basic indicator generation from area
    const indicators = [];
    if (area === 'Money') {
      indicators.push(
        'Receive unexpected money or opportunities',
        'Consistently earn from aligned work',
        'Feel relaxed and safe around money'
      );
    } else if (area === 'Love') {
      indicators.push(
        'Attract emotionally available connections',
        'Experience mutual respect and care',
        'Feel loved and safe being myself'
      );
    } else if (area === 'Health') {
      indicators.push(
        'Wake up feeling rested and energized',
        'Move my body regularly with joy',
        'Feel strong, clear, and capable'
      );
    } else if (area === 'Purpose') {
      indicators.push(
        'Do work that feels meaningful',
        'Feel recognized and well compensated',
        'Wake up excited about my day'
      );
    } else if (area === 'Spiritual') {
      indicators.push(
        'Feel connected to something greater',
        'Trust my intuition more often',
        'Experience deeper peace in daily life'
      );
    }

    this.user.intentionData = {
      area,
      statement,
      why,
      indicators: indicators.map(text => ({
        text,
        achieved: false,
        evidenceCount: 0
      }))
    };

    // Keep simple string intention for old parts of UI
    this.user.intention = statement;
    this.user.onboarding = true;
    this.user.createdDate = new Date().toISOString();
    this.storage.set('user', this.user);

    this.showMainApp();
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
    
    // Daily challenge
    const challenge = this.getDailyChallenge();
    document.getElementById('dailyChallengeText').textContent = challenge;

    const completedKey = `challenge_done_${this.getTodayKey()}`;
    const done = this.storage.get(completedKey);
    const btn = document.getElementById('dailyChallengeDoneBtn');
    if (done) {
      btn.textContent = '✔️';
      btn.disabled = true;
      btn.style.opacity = '0.5';
    } else {
      btn.textContent = '✅';
      btn.disabled = false;
      btn.style.opacity = '1';
    }
    
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
    
    // Show indicators under progress
    const indicatorsContainer = document.getElementById('indicatorsList');
    indicatorsContainer.innerHTML = '';

    const intentionData = this.user.intentionData || { indicators: [] };
    if (intentionData.indicators && intentionData.indicators.length) {
      intentionData.indicators.forEach((ind, idx) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'indicator-item';
        wrapper.innerHTML = `
          <input type="checkbox" class="indicator-checkbox"
                 ${ind.achieved ? 'checked' : ''} 
                 onchange="app.toggleIndicator(${idx})">
          <div class="indicator-text ${ind.achieved ? 'achieved' : ''}">
            ${ind.text}
          </div>
          <div class="indicator-evidence-count">
            ${ind.evidenceCount || 0} evidence
          </div>
        `;
        indicatorsContainer.appendChild(wrapper);
      });
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

  toggleIndicator(index) {
    if (!this.user.intentionData || !this.user.intentionData.indicators) return;
    const ind = this.user.intentionData.indicators[index];
    if (!ind) return;

    ind.achieved = !ind.achieved;
    this.storage.set('user', this.user);

    // Recalculate simple completion rate: #achieved / total
    const total = this.user.intentionData.indicators.length;
    const done = this.user.intentionData.indicators.filter(i => i.achieved).length;
    const progress = total ? Math.round((done / total) * 100) : 0;
    document.getElementById('intentionProgress').style.width = `${progress}%`;
    document.getElementById('progressText').textContent = `${progress}% Complete`;

    // Small reward and possible achievement
    if (ind.achieved) {
      this.user.points += 5;
      this.updateUser();
      if (progress === 100) {
        this.unlockAchievement('intention_completed');
      }
    }

    this.loadProgressPage();
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

  // Enhanced session management with typing indicators
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
    // Select persona
    const allPersonas = [...SAFE_PERSONAS.trinity, ...SAFE_PERSONAS.guides];
    const persona = allPersonas[Math.floor(Math.random() * allPersonas.length)];

    // Choose message based on simple context
    const lastAlignment = this.calculateAlignment();
    const hasWins = this.user.wins > 0;
    const messages = [];

    if (lastAlignment >= 8 && hasWins) {
      messages.push(
        "Your field is glowing with evidence. What feels most magical about today so far?",
        "Momentum is on your side. What would be a bold move from this energy?",
        "Notice how your reality is starting to mirror your inner state. What stands out?"
      );
    } else if (lastAlignment <= 4) {
      messages.push(
        "I sense some heaviness. What thought has been the loudest today?",
        "This low point is just a weather pattern in your field—not who you are. Want to name it?",
        "When it feels off, that's information, not failure. What's the story your mind is telling?"
      );
    } else {
      messages.push(
        `What would you like to focus on today in relation to "${this.user.intention || 'your journey'}"?`,
        "If you could shift one thing in your energy right now, what would it be?",
        "The quantum field responds to clarity. What feels most alive as a desire today?"
      );
    }

    const message = messages[Math.floor(Math.random() * messages.length)];

    // Show typing indicator then message
    this.showTyping(persona.name);
    setTimeout(() => {
      this.hideTyping();
      this.addMessage(persona.id, message, persona);
    }, 1200 + Math.random() * 1200); // 1.2–2.4s
  }

  showTyping(personaName) {
    const el = document.getElementById('typingIndicator');
    const nameEl = document.getElementById('typingPersona');
    if (!el || !nameEl) return;
    nameEl.textContent = personaName || 'Guide';
    el.style.display = 'block';
  }

  hideTyping() {
    const el = document.getElementById('typingIndicator');
    if (!el) return;
    el.style.display = 'none';
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
    const wrapper = document.createElement('div');
    wrapper.className = 'message fade-in';

    wrapper.innerHTML = `
      <div class="message-author">
        <div class="persona-avatar">${message.personaAvatar}</div>
        <div class="persona-name">${message.personaName}</div>
        <div class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</div>
      </div>
      <div class="message-content">${message.content}</div>
    `;

    messageList.appendChild(wrapper);
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

  // Daily challenge system
  getTodayKey() {
    return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
  }

  getDailyChallenge() {
    const challenges = [
      "Log one win and one piece of evidence.",
      "Write down 3 things you're grateful for.",
      "Do a reality check and be brutally honest.",
      "Spend 2 minutes feeling as if your intention is done.",
      "Log one synchronicity you notice today."
    ];
    const today = this.getTodayKey();
    // Simple deterministic "random": hash date to index
    let hash = 0;
    for (let i = 0; i < today.length; i++) {
      hash = (hash * 31 + today.charCodeAt(i)) >>> 0;
    }
    const index = hash % challenges.length;
    return challenges[index];
  }

  completeDailyChallenge() {
    const completedKey = `challenge_done_${this.getTodayKey()}`;
    if (this.storage.get(completedKey)) return;

    this.storage.set(completedKey, true);
    this.user.points += 10;
    this.dailyChallengesCompleted++;
    this.updateUser();

    const btn = document.getElementById('dailyChallengeDoneBtn');
    if (btn) {
      btn.textContent = '✔️';
      btn.disabled = true;
      btn.style.opacity = '0.5';
    }

    this.showAchievementNotification({
      name: "Daily Quantum Challenge",
      description: "You completed today's challenge!",
      points: 10,
      icon: '🎯'
    });

    // Check for daily challenger achievement
    if (this.dailyChallengesCompleted >= 10) {
      this.unlockAchievement('daily_challenger');
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
    // Calculate based on indicators
    const intentionData = this.user.intentionData || { indicators: [] };
    if (!intentionData.indicators || intentionData.indicators.length === 0) {
      // Fallback to old calculation
      const evidence = (this.storage.get('evidence') || []).length;
      const sessions = this.user.sessions;
      return Math.min(100, Math.round((evidence * 5) + (sessions * 10)));
    }
    
    const total = intentionData.indicators.length;
    const done = intentionData.indicators.filter(i => i.achieved).length;
    return total ? Math.round((done / total) * 100) : 0;
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
      max-width: 300px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
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
      box-shadow: 0 10px 30px rgba(0,0,0,0.5);
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
    
    this.user.longestStreak = Math.max(this.user.longestStreak || 0, this.user.streak);
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
window.completeDailyChallenge = () => window.app.completeDailyChallenge();
window.updateAlignmentValue = (value) => {
  document.getElementById('alignmentValue').textContent = value;
};
window.showNotifications = () => alert('No notifications yet');
window.showProfile = () => alert(`Level ${window.app.user.level} • ${window.app.user.points} points`);