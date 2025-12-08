// Quantum Reality Code - Configuration
// Add your real links here and they'll appear throughout the system

const QUANTUM_CONFIG = {
    // Social Media Links
    social: {
        facebook: "https://facebook.com/groups/quantumrealitycode", // Add your real group URL here
        telegram: "https://t.me/quantumrealitycode", // Add your real channel URL here
        instagram: "https://instagram.com/quantumrealitycode" // Add your real account URL here
    },
    
    // Support Resources
    support: {
        crisis: {
            us: "988",
            text: "741741",
            international: "https://findahelpline.com"
        }
    },
    
    // Community Settings
    community: {
        minEchoesForAchievement: 5,
        minSupportsForAchievement: 3,
        storyShareBonus: 0.1
    },
    
    // Frequency Settings
    frequencies: {
        baseFrequency: "432Hz",
        meditationLength: 10, // minutes
        autoPlay: false
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUANTUM_CONFIG;
} else {
    window.QUANTUM_CONFIG = QUANTUM_CONFIG;
}