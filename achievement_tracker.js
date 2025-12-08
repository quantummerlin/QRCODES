/**
 * Achievement Tracker System
 * Monitors user actions and unlocks achievements in real-time
 */

class AchievementTracker {
  constructor() {
    this.achievements = null;
    this.userProgress = {
      points: 0,
      level: 1,
      unlockedAchievements: [],
      streaks: {},
      stats: {},
      badges: [],
      dailyChallenges: []
    };
    this.listeners = [];
  }

  async initialize() {
    // Load achievement definitions
    const response = await fetch('achievements_system.json');
    this.achievements = await response.json();
    
    // Load user progress from storage
    await this.loadUserProgress();
    
    // Initialize daily challenges
    this.refreshDailyChallenges();
    
    return this;
  }

  async loadUserProgress() {
    const stored = localStorage.getItem('achievement_progress');
    if (stored) {
      this.userProgress = JSON.parse(stored);
    } else {
      // Initialize default progress
      this.userProgress = {
        points: 0,
        level: 1,
        unlockedAchievements: [],
        streaks: {
          daily_engagement: { current: 0, best: 0, lastDate: null },
          win_logging: { current: 0, best: 0, lastDate: null },
          reflection: { current: 0, best: 0, lastDate: null },
          high_coherence: { current: 0, best: 0, lastDate: null }
        },
        stats: {
          sessions_completed: 0,
          wins_logged: 0,
          synchronicities_logged: 0,
          doubts_cleared: 0,
          reflections_completed: 0,
          personas_activated: new Set(),
          shadow_personas_activated: new Set(),
          meta_mystic_personas_activated: new Set(),
          unique_configurations: new Set(),
          matrix_views: 0,
          community_shares: 0,
          share_reactions_received: 0,
          obstacles_logged: 0,
          patterns_broken: 0,
          gratitude_entries: 0,
          emotion_tracking_days: 0
        },
        badges: [],
        dailyChallenges: [],
        freezeTokens: 0,
        lastActive: new Date().toISOString()
      };
      await this.saveProgress();
    }
  }

  async saveProgress() {
    // Convert Sets to Arrays for JSON serialization
    const progressToSave = {
      ...this.userProgress,
      stats: {
        ...this.userProgress.stats,
        personas_activated: Array.from(this.userProgress.stats.personas_activated),
        shadow_personas_activated: Array.from(this.userProgress.stats.shadow_personas_activated),
        meta_mystic_personas_activated: Array.from(this.userProgress.stats.meta_mystic_personas_activated),
        unique_configurations: Array.from(this.userProgress.stats.unique_configurations)
      }
    };
    
    localStorage.setItem('achievement_progress', JSON.stringify(progressToSave));
  }

  // Event tracking methods
  async trackEvent(eventType, data = {}) {
    console.log(`[Achievement] Tracking event: ${eventType}`, data);
    
    switch(eventType) {
      case 'session_completed':
        await this.handleSessionCompleted(data);
        break;
      case 'win_logged':
        await this.handleWinLogged(data);
        break;
      case 'synchronicity_logged':
        await this.handleSynchronicityLogged(data);
        break;
      case 'doubt_cleared':
        await this.handleDoubtCleared(data);
        break;
      case 'reflection_completed':
        await this.handleReflectionCompleted(data);
        break;
      case 'persona_activated':
        await this.handlePersonaActivated(data);
        break;
      case 'matrix_viewed':
        await this.handleMatrixViewed(data);
        break;
      case 'community_share':
        await this.handleCommunityShare(data);
        break;
      case 'obstacle_logged':
        await this.handleObstacleLogged(data);
        break;
      case 'pattern_broken':
        await this.handlePatternBroken(data);
        break;
      case 'gratitude_logged':
        await this.handleGratitudeLogged(data);
        break;
      case 'field_coherence_update':
        await this.handleFieldCoherenceUpdate(data);
        break;
      case 'intention_completed':
        await this.handleIntentionCompleted(data);
        break;
    }
    
    // Check all achievements after each event
    await this.checkAchievements();
    
    // Update level
    await this.updateLevel();
    
    // Save progress
    await this.saveProgress();
  }

  async handleSessionCompleted(data) {
    this.userProgress.stats.sessions_completed++;
    
    // Update daily engagement streak
    await this.updateStreak('daily_engagement');
    
    // Track session time for time-specific achievements
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 8) {
      this.userProgress.stats.morning_sessions = (this.userProgress.stats.morning_sessions || 0) + 1;
    } else if (hour >= 21 || hour < 2) {
      this.userProgress.stats.night_sessions = (this.userProgress.stats.night_sessions || 0) + 1;
    }
    
    // Track if all 4 sessions completed today
    const today = new Date().toDateString();
    if (!this.userProgress.stats.sessionsToday) {
      this.userProgress.stats.sessionsToday = {};
    }
    if (!this.userProgress.stats.sessionsToday[today]) {
      this.userProgress.stats.sessionsToday[today] = [];
    }
    this.userProgress.stats.sessionsToday[today].push(data.timeSlot);
    
    // Check daily challenge completion
    await this.checkDailyChallengeProgress('morning_momentum', data);
    await this.checkDailyChallengeProgress('full_engagement', data);
  }

  async handleWinLogged(data) {
    this.userProgress.stats.wins_logged++;
    await this.updateStreak('win_logging');
    await this.checkDailyChallengeProgress('win_logger', data);
  }

  async handleSynchronicityLogged(data) {
    this.userProgress.stats.synchronicities_logged++;
    await this.checkDailyChallengeProgress('synchronicity_hunter', data);
  }

  async handleDoubtCleared(data) {
    this.userProgress.stats.doubts_cleared++;
  }

  async handleReflectionCompleted(data) {
    this.userProgress.stats.reflections_completed++;
    await this.updateStreak('reflection');
    await this.checkDailyChallengeProgress('reflection_master', data);
  }

  async handlePersonaActivated(data) {
    const { personaId, personaType } = data;
    
    this.userProgress.stats.personas_activated.add(personaId);
    
    if (personaType === 'shadow') {
      this.userProgress.stats.shadow_personas_activated.add(personaId);
      await this.checkDailyChallengeProgress('shadow_work', data);
    } else if (personaType === 'meta_mystic') {
      this.userProgress.stats.meta_mystic_personas_activated.add(personaId);
    }
    
    // Track persona interaction count
    if (!this.userProgress.stats.personaInteractions) {
      this.userProgress.stats.personaInteractions = {};
    }
    this.userProgress.stats.personaInteractions[personaId] = 
      (this.userProgress.stats.personaInteractions[personaId] || 0) + 1;
  }

  async handleMatrixViewed(data) {
    this.userProgress.stats.matrix_views++;
  }

  async handleCommunityShare(data) {
    this.userProgress.stats.community_shares++;
    await this.checkDailyChallengeProgress('community_contributor', data);
  }

  async handleObstacleLogged(data) {
    this.userProgress.stats.obstacles_logged++;
  }

  async handlePatternBroken(data) {
    this.userProgress.stats.patterns_broken++;
  }

  async handleGratitudeLogged(data) {
    this.userProgress.stats.gratitude_entries++;
    await this.checkDailyChallengeProgress('gratitude_express', data);
  }

  async handleFieldCoherenceUpdate(data) {
    const { coherence } = data;
    
    // Track high coherence streak
    if (coherence >= 0.7) {
      await this.updateStreak('high_coherence');
    } else {
      this.resetStreak('high_coherence');
    }
  }

  async handleIntentionCompleted(data) {
    // Major milestone - intention manifested!
    this.notifyAchievement({
      title: "🎉 INTENTION MANIFESTED! 🎉",
      message: "You've successfully manifested your desired reality!",
      type: "major_milestone"
    });
  }

  async updateStreak(streakType) {
    const today = new Date().toDateString();
    const streak = this.userProgress.streaks[streakType];
    
    if (streak.lastDate === today) {
      // Already counted today
      return;
    }
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();
    
    if (streak.lastDate === yesterdayStr) {
      // Continue streak
      streak.current++;
    } else if (streak.lastDate !== today) {
      // Streak broken, start new
      streak.current = 1;
    }
    
    streak.lastDate = today;
    
    // Update best streak
    if (streak.current > streak.best) {
      streak.best = streak.current;
    }
    
    // Check for streak milestones
    await this.checkStreakMilestones(streakType, streak.current);
  }

  resetStreak(streakType) {
    const today = new Date().toDateString();
    const streak = this.userProgress.streaks[streakType];
    
    if (streak.lastDate !== today) {
      streak.current = 0;
    }
  }

  async checkStreakMilestones(streakType, currentStreak) {
    const streakConfig = this.achievements.streaks.types.find(s => s.id === streakType);
    if (!streakConfig) return;
    
    for (const milestone of streakConfig.milestones) {
      if (currentStreak === milestone) {
        this.notifyAchievement({
          title: `${streakConfig.icon} ${milestone}-Day Streak!`,
          message: `${streakConfig.name}: ${milestone} consecutive days!`,
          type: "streak_milestone",
          points: milestone * 5
        });
        
        this.userProgress.points += milestone * 5;
      }
    }
  }

  async checkAchievements() {
    const categories = this.achievements.achievement_categories;
    
    for (const [categoryKey, category] of Object.entries(categories)) {
      for (const achievement of category.achievements) {
        // Skip if already unlocked
        if (this.userProgress.unlockedAchievements.includes(achievement.id)) {
          continue;
        }
        
        // Check if conditions are met
        if (await this.checkAchievementCondition(achievement.unlock_condition)) {
          await this.unlockAchievement(achievement, category);
        }
      }
    }
  }

  async checkAchievementCondition(condition) {
    const { type, value } = condition;
    const stats = this.userProgress.stats;
    
    switch(type) {
      case 'session_count':
        return stats.sessions_completed >= value;
      
      case 'consecutive_days':
        return this.userProgress.streaks.daily_engagement.current >= value;
      
      case 'win_count':
        return stats.wins_logged >= value;
      
      case 'win_streak':
        return this.userProgress.streaks.win_logging.current >= value;
      
      case 'synchronicity_count':
        return stats.synchronicities_logged >= value;
      
      case 'doubt_cleared_count':
        return stats.doubts_cleared >= value;
      
      case 'reflection_count':
        return stats.reflections_completed >= value;
      
      case 'reflection_streak':
        return this.userProgress.streaks.reflection.current >= value;
      
      case 'unique_personas_activated':
        return stats.personas_activated.size >= value;
      
      case 'shadow_personas_activated':
        return stats.shadow_personas_activated.size >= value;
      
      case 'meta_mystic_personas_activated':
        return stats.meta_mystic_personas_activated.size >= value;
      
      case 'single_persona_count':
        const maxInteractions = Math.max(...Object.values(stats.personaInteractions || {}));
        return maxInteractions >= value;
      
      case 'matrix_views':
        return stats.matrix_views >= value;
      
      case 'obstacles_logged':
        return stats.obstacles_logged >= value;
      
      case 'patterns_broken':
        return stats.patterns_broken >= value;
      
      case 'gratitude_streak':
        // Would need to track gratitude-specific streak
        return false; // Implement based on gratitude tracking
      
      case 'community_shares':
        return stats.community_shares >= value;
      
      case 'session_time_count':
        const timeSlot = condition.time_slot;
        if (timeSlot === 'morning') {
          return (stats.morning_sessions || 0) >= value;
        } else if (timeSlot === 'night') {
          return (stats.night_sessions || 0) >= value;
        }
        return false;
      
      case 'all_sessions_one_day':
        const today = new Date().toDateString();
        const todaySessions = stats.sessionsToday?.[today] || [];
        return todaySessions.length >= 4;
      
      case 'field_coherence_sustained':
        // Would need to track daily coherence values
        return false; // Implement based on field tracking
      
      case 'intention_completed':
        return false; // Implement based on intention tracking
      
      default:
        return false;
    }
  }

  async unlockAchievement(achievement, category) {
    console.log(`[Achievement] Unlocked: ${achievement.name}`);
    
    // Add to unlocked list
    this.userProgress.unlockedAchievements.push(achievement.id);
    
    // Award points
    this.userProgress.points += achievement.points;
    
    // Apply reward
    await this.applyReward(achievement.reward);
    
    // Notify user
    this.notifyAchievement({
      title: `${category.icon} Achievement Unlocked!`,
      message: achievement.name,
      description: achievement.description,
      tier: achievement.tier,
      points: achievement.points,
      type: "achievement"
    });
    
    // Trigger celebration animation
    this.triggerCelebration(achievement.tier);
  }

  async applyReward(reward) {
    if (!reward) return;
    
    switch(reward.type) {
      case 'unlock_feature':
        console.log(`[Achievement] Feature unlocked: ${reward.feature}`);
        // Store unlocked features
        if (!this.userProgress.unlockedFeatures) {
          this.userProgress.unlockedFeatures = [];
        }
        this.userProgress.unlockedFeatures.push(reward.feature);
        break;
      
      case 'unlock_persona':
        console.log(`[Achievement] Persona unlocked: ${reward.persona}`);
        if (!this.userProgress.unlockedPersonas) {
          this.userProgress.unlockedPersonas = [];
        }
        this.userProgress.unlockedPersonas.push(reward.persona);
        break;
      
      case 'field_boost':
        console.log(`[Achievement] Field boost: ${reward.boost_percentage}% for ${reward.duration_days} days`);
        const boostEnd = new Date();
        boostEnd.setDate(boostEnd.getDate() + reward.duration_days);
        
        if (!this.userProgress.activeBoosts) {
          this.userProgress.activeBoosts = [];
        }
        this.userProgress.activeBoosts.push({
          percentage: reward.boost_percentage,
          endDate: boostEnd.toISOString()
        });
        break;
      
      case 'badge':
        console.log(`[Achievement] Badge earned: ${reward.badge}`);
        if (!this.userProgress.badges.includes(reward.badge)) {
          this.userProgress.badges.push(reward.badge);
        }
        break;
    }
  }

  async updateLevel() {
    const levels = this.achievements.level_system.levels;
    const currentPoints = this.userProgress.points;
    
    // Find appropriate level
    let newLevel = 1;
    for (const level of levels) {
      if (currentPoints >= level.points_required) {
        newLevel = level.level;
      } else {
        break;
      }
    }
    
    // Check if leveled up
    if (newLevel > this.userProgress.level) {
      const oldLevel = this.userProgress.level;
      this.userProgress.level = newLevel;
      
      const levelInfo = levels.find(l => l.level === newLevel);
      
      // Apply level reward
      const reward = this.achievements.level_system.level_rewards[newLevel];
      if (reward) {
        await this.applyReward(reward);
      }
      
      // Notify user
      this.notifyAchievement({
        title: `${levelInfo.icon} LEVEL UP!`,
        message: `You've reached Level ${newLevel}: ${levelInfo.name}`,
        type: "level_up",
        oldLevel,
        newLevel
      });
      
      this.triggerCelebration('level_up');
    }
  }

  refreshDailyChallenges() {
    const today = new Date().toDateString();
    
    // Check if challenges need refresh
    if (this.userProgress.lastChallengeDate === today) {
      return; // Already refreshed today
    }
    
    // Select random daily challenges
    const dailyPool = this.achievements.daily_challenges.challenge_pool.filter(
      c => c.frequency === 'daily'
    );
    
    const weeklyPool = this.achievements.daily_challenges.challenge_pool.filter(
      c => c.frequency === 'weekly'
    );
    
    // Pick 3 daily challenges
    const selectedDaily = this.shuffleArray(dailyPool).slice(0, 3);
    
    // Pick 1 weekly challenge (if it's Monday)
    const dayOfWeek = new Date().getDay();
    const selectedWeekly = dayOfWeek === 1 ? [this.shuffleArray(weeklyPool)[0]] : [];
    
    this.userProgress.dailyChallenges = [
      ...selectedDaily.map(c => ({ ...c, progress: 0, completed: false })),
      ...selectedWeekly.map(c => ({ ...c, progress: 0, completed: false }))
    ];
    
    this.userProgress.lastChallengeDate = today;
  }

  async checkDailyChallengeProgress(challengeId, data) {
    const challenge = this.userProgress.dailyChallenges.find(c => c.id === challengeId);
    if (!challenge || challenge.completed) return;
    
    // Update progress based on challenge type
    switch(challengeId) {
      case 'morning_momentum':
        const hour = new Date().getHours();
        if (hour < 8 && data.timeSlot === 'morning') {
          challenge.completed = true;
        }
        break;
      
      case 'win_logger':
        challenge.completed = true;
        break;
      
      case 'reflection_master':
        if (data.wordCount >= 100) {
          challenge.completed = true;
        }
        break;
      
      case 'gratitude_express':
        challenge.progress = (challenge.progress || 0) + 1;
        if (challenge.progress >= 3) {
          challenge.completed = true;
        }
        break;
      
      case 'full_engagement':
        const today = new Date().toDateString();
        const todaySessions = this.userProgress.stats.sessionsToday?.[today] || [];
        if (todaySessions.length >= 4) {
          challenge.completed = true;
        }
        break;
      
      case 'shadow_work':
        challenge.completed = true;
        break;
      
      case 'synchronicity_hunter':
        challenge.progress = (challenge.progress || 0) + 1;
        if (challenge.progress >= 2) {
          challenge.completed = true;
        }
        break;
      
      case 'community_contributor':
        challenge.completed = true;
        break;
    }
    
    // Award points if completed
    if (challenge.completed && !challenge.pointsAwarded) {
      this.userProgress.points += challenge.points;
      challenge.pointsAwarded = true;
      
      this.notifyAchievement({
        title: "✅ Daily Challenge Complete!",
        message: challenge.name,
        points: challenge.points,
        type: "challenge"
      });
    }
  }

  notifyAchievement(data) {
    // Emit event to UI
    this.listeners.forEach(listener => listener(data));
    
    // Show notification
    this.showNotification(data);
  }

  showNotification(data) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `achievement-notification ${data.type}`;
    
    let content = `
      <div class="achievement-icon">${this.getNotificationIcon(data.type)}</div>
      <div class="achievement-content">
        <div class="achievement-title">${data.title}</div>
        <div class="achievement-message">${data.message}</div>
    `;
    
    if (data.points) {
      content += `<div class="achievement-points">+${data.points} points</div>`;
    }
    
    content += `</div>`;
    notification.innerHTML = content;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => notification.classList.add('show'), 100);
    
    // Remove after delay
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => notification.remove(), 500);
    }, 5000);
  }

  getNotificationIcon(type) {
    const icons = {
      achievement: '🏆',
      level_up: '⬆️',
      streak_milestone: '🔥',
      challenge: '✅',
      major_milestone: '🎉'
    };
    return icons[type] || '⭐';
  }

  triggerCelebration(tier) {
    // Trigger confetti or celebration animation based on tier
    if (typeof confetti !== 'undefined') {
      const colors = {
        bronze: ['#CD7F32', '#FFD700'],
        silver: ['#C0C0C0', '#E8E8E8'],
        gold: ['#FFD700', '#FFA500'],
        diamond: ['#B9F2FF', '#00CED1'],
        level_up: ['#4A90E2', '#9B59B6', '#E74C3C']
      };
      
      confetti({
        particleCount: tier === 'diamond' || tier === 'level_up' ? 200 : 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: colors[tier] || colors.gold
      });
    }
  }

  onAchievement(callback) {
    this.listeners.push(callback);
  }

  shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }

  // Public API methods
  getProgress() {
    return {
      ...this.userProgress,
      nextLevel: this.getNextLevel(),
      progressToNextLevel: this.getProgressToNextLevel()
    };
  }

  getNextLevel() {
    const levels = this.achievements.level_system.levels;
    const currentLevel = this.userProgress.level;
    return levels.find(l => l.level === currentLevel + 1);
  }

  getProgressToNextLevel() {
    const nextLevel = this.getNextLevel();
    if (!nextLevel) return 100; // Max level
    
    const currentPoints = this.userProgress.points;
    const currentLevelPoints = this.achievements.level_system.levels
      .find(l => l.level === this.userProgress.level).points_required;
    const nextLevelPoints = nextLevel.points_required;
    
    const progress = ((currentPoints - currentLevelPoints) / (nextLevelPoints - currentLevelPoints)) * 100;
    return Math.min(100, Math.max(0, progress));
  }

  getUnlockedAchievements() {
    const unlocked = [];
    const categories = this.achievements.achievement_categories;
    
    for (const [categoryKey, category] of Object.entries(categories)) {
      for (const achievement of category.achievements) {
        if (this.userProgress.unlockedAchievements.includes(achievement.id)) {
          unlocked.push({
            ...achievement,
            category: category.name,
            categoryIcon: category.icon
          });
        }
      }
    }
    
    return unlocked;
  }

  getDailyChallenges() {
    return this.userProgress.dailyChallenges;
  }

  getStreaks() {
    return this.userProgress.streaks;
  }

  getBadges() {
    return this.userProgress.badges.map(badgeId => {
      return {
        id: badgeId,
        ...this.achievements.badges[badgeId]
      };
    });
  }

  isFeatureUnlocked(featureName) {
    return this.userProgress.unlockedFeatures?.includes(featureName) || false;
  }

  isPersonaUnlocked(personaName) {
    return this.userProgress.unlockedPersonas?.includes(personaName) || false;
  }

  getActiveBoosts() {
    if (!this.userProgress.activeBoosts) return [];
    
    const now = new Date();
    return this.userProgress.activeBoosts.filter(boost => {
      return new Date(boost.endDate) > now;
    });
  }

  getTotalBoostPercentage() {
    const activeBoosts = this.getActiveBoosts();
    return activeBoosts.reduce((total, boost) => total + boost.percentage, 0);
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AchievementTracker;
}