// Intention Writing Helper - Interactive guidance system

class IntentionHelper {
  constructor() {
    this.weakPatterns = [
      { pattern: /\bi want\b/gi, replacement: "I have", message: "Change 'want' to present tense" },
      { pattern: /\bi wish\b/gi, replacement: "I am experiencing", message: "Wishes become experiences" },
      { pattern: /\bi hope\b/gi, replacement: "I know", message: "Hope becomes certainty" },
      { pattern: /\bi need\b/gi, replacement: "I have", message: "Need implies lack" },
      { pattern: /\bi will\b/gi, replacement: "I am now", message: "Future tense delays manifestation" },
      { pattern: /\bsomeday\b/gi, replacement: "now", message: "Collapse the timeline" },
      { pattern: /\btry to\b/gi, replacement: "", message: "Remove 'try' - do or do not" },
      { pattern: /\bmaybe\b/gi, replacement: "", message: "Remove uncertainty" },
      { pattern: /\bif only\b/gi, replacement: "I am grateful that", message: "Reframe to gratitude" },
      { pattern: /\bcan't\b/gi, replacement: "am learning to", message: "Transform limitation" }
    ];

    this.domainSuggestions = {
      abundance: [
        "I am earning $10,000/month consistently",
        "Money flows to me easily and unexpectedly",
        "I have multiple income streams working for me",
        "My bank account grows every single day"
      ],
      love: [
        "I am in a deeply fulfilling relationship",
        "I attract love that mirrors my energy",
        "My partner and I communicate with ease",
        "I feel completely loved and appreciated"
      ],
      career: [
        "I am working in my dream role",
        "My work impacts thousands of people",
        "I am recognized as a leader in my field",
        "I love what I do and get paid well for it"
      ],
      health: [
        "My body is strong, vital, and full of energy",
        "I wake up feeling refreshed every day",
        "I am at my ideal weight and feel amazing",
        "My mind is clear and focused"
      ],
      spiritual: [
        "I am deeply connected to my intuition",
        "I trust the universe completely",
        "I receive clear guidance every day",
        "I am at peace with myself and the world"
      ],
      confidence: [
        "I am confident in every situation",
        "I speak my truth without hesitation",
        "I trust my decisions completely",
        "I am worthy of everything I desire"
      ]
    };
  }

  analyzeIntention(text) {
    const issues = [];
    const suggestions = [];

    // Check for weak language patterns
    this.weakPatterns.forEach(({pattern, message, replacement}) => {
      if (pattern.test(text)) {
        issues.push({
          type: 'weak_language',
          message: message,
          pattern: pattern,
          replacement: replacement
        });
      }
    });

    // Check for present tense usage
    const presentTenseWords = /\b(I am|I have|I feel|I experience|I attract|I receive)\b/gi;
    const presentMatches = text.match(presentTenseWords);
    if (!presentMatches || presentMatches.length < 2) {
      suggestions.push({
        type: 'present_tense',
        message: "Use more present tense language (I am, I have, I feel)"
      });
    }

    // Check for specificity
    const wordCount = text.trim().split(/\s+/).length;
    if (wordCount < 10) {
      suggestions.push({
        type: 'specificity',
        message: "Add more specific details about what you want to manifest"
      });
    }

    // Check for emotional language
    const emotionWords = /\b(happy|joyful|peaceful|confident|abundant|healthy|successful|fulfilled|grateful|excited)\b/gi;
    if (!emotionWords.test(text)) {
      suggestions.push({
        type: 'emotion',
        message: "Include how you want to feel in your manifestation"
      });
    }

    return { issues, suggestions };
  }

  generateSuggestions(text, domain = null) {
    const suggestions = [];

    // Domain-specific suggestions
    if (domain && this.domainSuggestions[domain]) {
      suggestions.push(...this.domainSuggestions[domain]);
    }

    // General power statements
    suggestions.push(
      "I am worthy of receiving everything I desire",
      "The universe supports my highest good",
      "I trust the perfect timing of my manifestations",
      "I am open to receiving in unexpected ways",
      "My intentions are clear and my energy is aligned"
    );

    return suggestions;
  }

  reframeIntention(text) {
    let reframed = text;

    this.weakPatterns.forEach(({pattern, replacement}) => {
      reframed = reframed.replace(pattern, replacement);
    });

    return reframed;
  }

  getIntentionStrength(text) {
    let strength = 0;
    const maxStrength = 100;

    // Present tense usage (+20)
    const presentTenseWords = /\b(I am|I have|I feel|I experience|I attract|I receive)\b/gi;
    if (presentTenseWords.test(text)) {
      strength += 20;
    }

    // Emotional language (+15)
    const emotionWords = /\b(happy|joyful|peaceful|confident|abundant|healthy|successful|fulfilled|grateful|excited)\b/gi;
    if (emotionWords.test(text)) {
      strength += 15;
    }

    // Specificity (word count) (+15)
    const wordCount = text.trim().split(/\s+/).length;
    if (wordCount >= 15) strength += 15;
    else if (wordCount >= 10) strength += 10;
    else if (wordCount >= 5) strength += 5;

    // No weak language (+20)
    const hasWeakLanguage = this.weakPatterns.some(({pattern}) => pattern.test(text));
    if (!hasWeakLanguage) {
      strength += 20;
    }

    // Gratitude language (+15)
    const gratitudeWords = /\b(grateful|thankful|appreciative|blessed)\b/gi;
    if (gratitudeWords.test(text)) {
      strength += 15;
    }

    // Certainty language (+15)
    const certaintyWords = /\b(know|sure|certain|absolutely|definitely)\b/gi;
    if (certaintyWords.test(text)) {
      strength += 15;
    }

    return Math.min(strength, maxStrength);
  }

  getStrengthLabel(strength) {
    if (strength >= 90) return { label: "Quantum Master", color: "#ffd700" };
    if (strength >= 75) return { label: "Reality Shifter", color: "#00f5ff" };
    if (strength >= 60) return { label: "Manifestor", color: "#ff00ff" };
    if (strength >= 45) return { label: "Intender", color: "#9d00ff" };
    return { label: "Seed Planter", color: "#666" };
  }
}

// Export for use in main app
window.IntentionHelper = IntentionHelper;