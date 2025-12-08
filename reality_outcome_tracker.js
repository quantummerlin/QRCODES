/**
 * Reality Outcome Tracker
 * Helps users stay present with their manifestation reality by tracking:
 * - Daily reality checks
 * - Evidence of manifestation
 * - Alignment indicators
 * - Present moment awareness
 * - Reality shifts and synchronicities
 */

class RealityOutcomeTracker {
  constructor(achievementTracker) {
    this.achievementTracker = achievementTracker;
    this.realityState = {
      intention: null,
      currentReality: {
        evidence: [],
        alignmentScore: 0,
        lastCheck: null
      },
      desiredReality: {
        description: '',
        indicators: [],
        completionPercentage: 0
      },
      dailyChecks: [],
      realityShifts: [],
      synchronicities: [],
      presenceScore: 0,
      manifestationMomentum: 0
    };
  }

  async initialize() {
    await this.loadRealityState();
    this.startDailyReminderSystem();
    return this;
  }

  async loadRealityState() {
    const stored = localStorage.getItem('reality_outcome_state');
    if (stored) {
      this.realityState = JSON.parse(stored);
    }
  }

  async saveRealityState() {
    localStorage.setItem('reality_outcome_state', JSON.stringify(this.realityState));
  }

  // Set user's intention and desired reality
  async setIntention(intention, desiredReality, indicators = []) {
    this.realityState.intention = {
      text: intention,
      setDate: new Date().toISOString(),
      targetDate: null
    };

    this.realityState.desiredReality = {
      description: desiredReality,
      indicators: indicators.map(ind => ({
        text: ind,
        achieved: false,
        achievedDate: null,
        evidence: []
      })),
      completionPercentage: 0
    };

    await this.saveRealityState();
    
    // Track achievement
    if (this.achievementTracker) {
      await this.achievementTracker.trackEvent('intention_set', {
        intention,
        indicatorCount: indicators.length
      });
    }
  }

  // Daily Reality Check - Core feature for staying present
  async performDailyRealityCheck(checkData) {
    const check = {
      date: new Date().toISOString(),
      timestamp: Date.now(),
      
      // Current state assessment
      currentState: {
        emotionalState: checkData.emotionalState || 'neutral',
        thoughtPatterns: checkData.thoughtPatterns || [],
        physicalSensations: checkData.physicalSensations || [],
        energyLevel: checkData.energyLevel || 5
      },
      
      // Evidence gathering
      evidenceToday: checkData.evidenceToday || [],
      synchronicitiesNoticed: checkData.synchronicitiesNoticed || [],
      
      // Alignment assessment
      alignmentWithIntention: checkData.alignmentScore || 5,
      actionsTowardGoal: checkData.actionsTowardGoal || [],
      
      // Presence assessment
      presenceMoments: checkData.presenceMoments || 0,
      gratitudeItems: checkData.gratitudeItems || [],
      
      // Reality perception
      realityShiftsNoticed: checkData.realityShiftsNoticed || [],
      oldPatternsReleased: checkData.oldPatternsReleased || [],
      newBeliefsAdopted: checkData.newBeliefsAdopted || []
    };

    this.realityState.dailyChecks.push(check);
    this.realityState.currentReality.lastCheck = check.date;

    // Update alignment score (rolling average of last 7 days)
    await this.updateAlignmentScore();

    // Update presence score
    await this.updatePresenceScore(check);

    // Update manifestation momentum
    await this.updateManifestationMomentum();

    // Check for indicator completion
    await this.checkIndicatorProgress(check);

    await this.saveRealityState();

    // Track achievement
    if (this.achievementTracker) {
      await this.achievementTracker.trackEvent('reality_check_completed', {
        alignmentScore: check.alignmentWithIntention,
        evidenceCount: check.evidenceToday.length
      });
    }

    return {
      alignmentScore: this.realityState.currentReality.alignmentScore,
      presenceScore: this.realityState.presenceScore,
      momentum: this.realityState.manifestationMomentum,
      completionPercentage: this.realityState.desiredReality.completionPercentage
    };
  }

  // Log evidence of manifestation
  async logEvidence(evidence) {
    const evidenceEntry = {
      id: Date.now(),
      date: new Date().toISOString(),
      description: evidence.description,
      type: evidence.type || 'general', // 'synchronicity', 'action_result', 'external_validation', 'internal_shift'
      significance: evidence.significance || 5, // 1-10 scale
      relatedIndicators: evidence.relatedIndicators || [],
      photos: evidence.photos || [],
      notes: evidence.notes || ''
    };

    this.realityState.currentReality.evidence.push(evidenceEntry);

    // Check if this evidence relates to any indicators
    if (evidenceEntry.relatedIndicators.length > 0) {
      evidenceEntry.relatedIndicators.forEach(indicatorIndex => {
        if (this.realityState.desiredReality.indicators[indicatorIndex]) {
          this.realityState.desiredReality.indicators[indicatorIndex].evidence.push(evidenceEntry.id);
        }
      });
    }

    await this.saveRealityState();

    // Track achievement
    if (this.achievementTracker) {
      await this.achievementTracker.trackEvent('evidence_logged', {
        type: evidenceEntry.type,
        significance: evidenceEntry.significance
      });
    }

    return evidenceEntry;
  }

  // Log synchronicity
  async logSynchronicity(synchronicity) {
    const syncEntry = {
      id: Date.now(),
      date: new Date().toISOString(),
      description: synchronicity.description,
      significance: synchronicity.significance || 5,
      interpretation: synchronicity.interpretation || '',
      emotionalResponse: synchronicity.emotionalResponse || 'surprised',
      relatedToIntention: synchronicity.relatedToIntention || false
    };

    this.realityState.synchronicities.push(syncEntry);
    await this.saveRealityState();

    // Track achievement
    if (this.achievementTracker) {
      await this.achievementTracker.trackEvent('synchronicity_logged', {
        significance: syncEntry.significance
      });
    }

    return syncEntry;
  }

  // Log reality shift
  async logRealityShift(shift) {
    const shiftEntry = {
      id: Date.now(),
      date: new Date().toISOString(),
      description: shift.description,
      type: shift.type || 'perception', // 'perception', 'circumstance', 'relationship', 'opportunity'
      magnitude: shift.magnitude || 5, // 1-10 scale
      beforeState: shift.beforeState || '',
      afterState: shift.afterState || '',
      triggerEvent: shift.triggerEvent || '',
      notes: shift.notes || ''
    };

    this.realityState.realityShifts.push(shiftEntry);
    await this.saveRealityState();

    // Track achievement
    if (this.achievementTracker) {
      await this.achievementTracker.trackEvent('reality_shift_logged', {
        type: shiftEntry.type,
        magnitude: shiftEntry.magnitude
      });
    }

    return shiftEntry;
  }

  // Mark indicator as achieved
  async markIndicatorAchieved(indicatorIndex, evidence = []) {
    if (this.realityState.desiredReality.indicators[indicatorIndex]) {
      this.realityState.desiredReality.indicators[indicatorIndex].achieved = true;
      this.realityState.desiredReality.indicators[indicatorIndex].achievedDate = new Date().toISOString();
      this.realityState.desiredReality.indicators[indicatorIndex].evidence.push(...evidence);

      // Recalculate completion percentage
      await this.updateCompletionPercentage();

      await this.saveRealityState();

      // Track achievement
      if (this.achievementTracker) {
        await this.achievementTracker.trackEvent('indicator_achieved', {
          indicatorIndex,
          completionPercentage: this.realityState.desiredReality.completionPercentage
        });
      }

      // Check if intention is fully manifested
      if (this.realityState.desiredReality.completionPercentage >= 100) {
        await this.markIntentionManifested();
      }
    }
  }

  // Mark entire intention as manifested
  async markIntentionManifested() {
    this.realityState.intention.manifestedDate = new Date().toISOString();
    this.realityState.desiredReality.completionPercentage = 100;

    await this.saveRealityState();

    // Track major achievement
    if (this.achievementTracker) {
      await this.achievementTracker.trackEvent('intention_completed', {
        intention: this.realityState.intention.text,
        daysToManifest: this.getDaysToManifest()
      });
    }

    // Trigger celebration
    this.triggerManifestationCelebration();
  }

  // Update alignment score based on recent checks
  async updateAlignmentScore() {
    const recentChecks = this.realityState.dailyChecks.slice(-7); // Last 7 days
    if (recentChecks.length === 0) return;

    const avgAlignment = recentChecks.reduce((sum, check) => 
      sum + check.alignmentWithIntention, 0) / recentChecks.length;

    this.realityState.currentReality.alignmentScore = Math.round(avgAlignment * 10) / 10;
  }

  // Update presence score
  async updatePresenceScore(check) {
    // Calculate presence score based on multiple factors
    const factors = {
      presenceMoments: check.presenceMoments / 10, // Normalize to 0-1
      gratitudeCount: Math.min(check.gratitudeItems.length / 5, 1), // Max at 5 items
      evidenceAwareness: Math.min(check.evidenceToday.length / 3, 1), // Max at 3 pieces
      synchronicityAwareness: Math.min(check.synchronicitiesNoticed.length / 2, 1), // Max at 2
      emotionalAwareness: check.currentState.emotionalState !== 'neutral' ? 1 : 0.5
    };

    const presenceScore = Object.values(factors).reduce((sum, val) => sum + val, 0) / Object.keys(factors).length;
    this.realityState.presenceScore = Math.round(presenceScore * 100);
  }

  // Update manifestation momentum
  async updateManifestationMomentum() {
    const recentChecks = this.realityState.dailyChecks.slice(-14); // Last 14 days
    if (recentChecks.length === 0) return;

    // Calculate momentum based on:
    // 1. Consistency of checks
    // 2. Trend in alignment scores
    // 3. Evidence accumulation rate
    // 4. Indicator achievement rate

    const consistency = recentChecks.length / 14; // 0-1

    const alignmentTrend = this.calculateTrend(
      recentChecks.map(c => c.alignmentWithIntention)
    );

    const evidenceRate = recentChecks.reduce((sum, c) => 
      sum + c.evidenceToday.length, 0) / recentChecks.length;

    const indicatorProgress = this.realityState.desiredReality.completionPercentage / 100;

    const momentum = (
      consistency * 0.3 +
      alignmentTrend * 0.3 +
      Math.min(evidenceRate / 2, 1) * 0.2 +
      indicatorProgress * 0.2
    );

    this.realityState.manifestationMomentum = Math.round(momentum * 100);
  }

  // Calculate trend (positive = improving, negative = declining)
  calculateTrend(values) {
    if (values.length < 2) return 0;

    const firstHalf = values.slice(0, Math.floor(values.length / 2));
    const secondHalf = values.slice(Math.floor(values.length / 2));

    const firstAvg = firstHalf.reduce((sum, val) => sum + val, 0) / firstHalf.length;
    const secondAvg = secondHalf.reduce((sum, val) => sum + val, 0) / secondHalf.length;

    const trend = (secondAvg - firstAvg) / 10; // Normalize to roughly -1 to 1
    return Math.max(-1, Math.min(1, trend));
  }

  // Check if evidence relates to indicators
  async checkIndicatorProgress(check) {
    // Auto-detect if evidence matches indicator keywords
    check.evidenceToday.forEach(evidence => {
      this.realityState.desiredReality.indicators.forEach((indicator, index) => {
        if (!indicator.achieved) {
          const keywords = indicator.text.toLowerCase().split(' ');
          const evidenceText = evidence.toLowerCase();
          
          const matchCount = keywords.filter(keyword => 
            evidenceText.includes(keyword)
          ).length;

          if (matchCount >= 2) {
            // Suggest this evidence relates to this indicator
            console.log(`Evidence may relate to indicator ${index}: ${indicator.text}`);
          }
        }
      });
    });
  }

  // Update completion percentage
  async updateCompletionPercentage() {
    const indicators = this.realityState.desiredReality.indicators;
    if (indicators.length === 0) {
      this.realityState.desiredReality.completionPercentage = 0;
      return;
    }

    const achievedCount = indicators.filter(ind => ind.achieved).length;
    this.realityState.desiredReality.completionPercentage = 
      Math.round((achievedCount / indicators.length) * 100);
  }

  // Get days to manifest
  getDaysToManifest() {
    if (!this.realityState.intention.manifestedDate) return null;

    const setDate = new Date(this.realityState.intention.setDate);
    const manifestedDate = new Date(this.realityState.intention.manifestedDate);
    
    const diffTime = Math.abs(manifestedDate - setDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    return diffDays;
  }

  // Daily reminder system
  startDailyReminderSystem() {
    // Check if user needs reminder for daily reality check
    setInterval(() => {
      const lastCheck = this.realityState.currentReality.lastCheck;
      if (!lastCheck) return;

      const lastCheckDate = new Date(lastCheck);
      const now = new Date();
      const hoursSinceCheck = (now - lastCheckDate) / (1000 * 60 * 60);

      // Remind if more than 20 hours since last check
      if (hoursSinceCheck > 20) {
        this.sendRealityCheckReminder();
      }
    }, 1000 * 60 * 60); // Check every hour
  }

  sendRealityCheckReminder() {
    // Send notification
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('🎯 Reality Check Time', {
        body: 'Take a moment to check in with your manifestation journey',
        icon: '/icon-192.png',
        badge: '/icon-192.png'
      });
    }

    // Also trigger in-app notification
    this.triggerInAppReminder();
  }

  triggerInAppReminder() {
    const event = new CustomEvent('realityCheckReminder', {
      detail: {
        message: 'Time for your daily reality check!',
        type: 'reminder'
      }
    });
    window.dispatchEvent(event);
  }

  triggerManifestationCelebration() {
    const event = new CustomEvent('intentionManifested', {
      detail: {
        intention: this.realityState.intention.text,
        daysToManifest: this.getDaysToManifest(),
        completionPercentage: 100
      }
    });
    window.dispatchEvent(event);
  }

  // Get current reality snapshot
  getRealitySnapshot() {
    return {
      intention: this.realityState.intention,
      alignmentScore: this.realityState.currentReality.alignmentScore,
      presenceScore: this.realityState.presenceScore,
      momentum: this.realityState.manifestationMomentum,
      completionPercentage: this.realityState.desiredReality.completionPercentage,
      indicators: this.realityState.desiredReality.indicators,
      recentEvidence: this.realityState.currentReality.evidence.slice(-10),
      recentSynchronicities: this.realityState.synchronicities.slice(-5),
      recentShifts: this.realityState.realityShifts.slice(-5),
      checkStreak: this.getCheckStreak()
    };
  }

  // Get check streak
  getCheckStreak() {
    const checks = this.realityState.dailyChecks;
    if (checks.length === 0) return 0;

    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = checks.length - 1; i >= 0; i--) {
      const checkDate = new Date(checks[i].date);
      checkDate.setHours(0, 0, 0, 0);

      const expectedDate = new Date(today);
      expectedDate.setDate(expectedDate.getDate() - streak);

      if (checkDate.getTime() === expectedDate.getTime()) {
        streak++;
      } else {
        break;
      }
    }

    return streak;
  }

  // Analytics and insights
  getManifestationInsights() {
    const checks = this.realityState.dailyChecks;
    if (checks.length === 0) return null;

    return {
      averageAlignment: this.realityState.currentReality.alignmentScore,
      presenceScore: this.realityState.presenceScore,
      momentum: this.realityState.manifestationMomentum,
      totalEvidence: this.realityState.currentReality.evidence.length,
      totalSynchronicities: this.realityState.synchronicities.length,
      totalRealityShifts: this.realityState.realityShifts.length,
      checkStreak: this.getCheckStreak(),
      daysActive: checks.length,
      completionPercentage: this.realityState.desiredReality.completionPercentage,
      estimatedDaysToCompletion: this.estimateDaysToCompletion(),
      strongestIndicators: this.getStrongestIndicators(),
      mostCommonEmotionalState: this.getMostCommonEmotionalState(),
      peakAlignmentDays: this.getPeakAlignmentDays()
    };
  }

  estimateDaysToCompletion() {
    const currentPercentage = this.realityState.desiredReality.completionPercentage;
    if (currentPercentage >= 100) return 0;

    const checks = this.realityState.dailyChecks;
    if (checks.length < 7) return null; // Need at least a week of data

    const recentChecks = checks.slice(-14);
    const oldestCheck = recentChecks[0];
    const newestCheck = recentChecks[recentChecks.length - 1];

    // Calculate rate of progress
    const oldestPercentage = this.calculateCompletionAtTime(oldestCheck.date);
    const progressRate = (currentPercentage - oldestPercentage) / recentChecks.length;

    if (progressRate <= 0) return null; // No progress

    const remainingPercentage = 100 - currentPercentage;
    const estimatedDays = Math.ceil(remainingPercentage / progressRate);

    return estimatedDays;
  }

  calculateCompletionAtTime(date) {
    // Simplified - would need to track historical completion percentages
    return 0;
  }

  getStrongestIndicators() {
    return this.realityState.desiredReality.indicators
      .map((ind, index) => ({
        index,
        text: ind.text,
        evidenceCount: ind.evidence.length,
        achieved: ind.achieved
      }))
      .sort((a, b) => b.evidenceCount - a.evidenceCount)
      .slice(0, 3);
  }

  getMostCommonEmotionalState() {
    const checks = this.realityState.dailyChecks;
    const emotionCounts = {};

    checks.forEach(check => {
      const emotion = check.currentState.emotionalState;
      emotionCounts[emotion] = (emotionCounts[emotion] || 0) + 1;
    });

    return Object.entries(emotionCounts)
      .sort((a, b) => b[1] - a[1])[0]?.[0] || 'neutral';
  }

  getPeakAlignmentDays() {
    return this.realityState.dailyChecks
      .sort((a, b) => b.alignmentWithIntention - a.alignmentWithIntention)
      .slice(0, 5)
      .map(check => ({
        date: check.date,
        alignment: check.alignmentWithIntention,
        evidence: check.evidenceToday
      }));
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = RealityOutcomeTracker;
}