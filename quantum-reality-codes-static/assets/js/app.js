// Quantum Reality Codes - Core JavaScript App

// Quantum Gematria Algorithm
function quantumGematria(text) {
    const upper = text.toUpperCase();
    let total = 0;
    for (let i = 0; i < upper.length; i++) {
        const c = upper[i];
        if (c >= 'A' && c <= 'Z') {
            total += c.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
        } else if (c >= '0' && c <= '9') {
            total += parseInt(c, 10);
        }
    }
    const quantumMultiplier = 1 + (text.length % 7) * 0.1;
    return Math.floor(total * quantumMultiplier);
}

// Get Code Properties
function getCodeProperties(code) {
    return {
        resonance: code % 13,
        frequency: 432 + (code % 100),
        dimension: code % 11 + 1,
        powerLevel: Math.min(10, code % 10 + 1),
        councilAlignment: code % 100
    };
}

// Local Storage Management
const Storage = {
    get(key, defaultValue = null) {
        try {
            return JSON.parse(localStorage.getItem(key)) || defaultValue;
        } catch {
            return defaultValue;
        }
    },
    set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Storage error:', e);
        }
    },
    remove(key) {
        localStorage.removeItem(key);
    }
};

// Toast Notifications
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast') || createToastElement();
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, duration);
}

function createToastElement() {
    const toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
    return toast;
}

// Copy to Clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showToast('Copied to clipboard!');
    }).catch(() => {
        // Fallback for older browsers
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        showToast('Copied to clipboard!');
    });
}

// Format Share Text
function formatShareText(intention, code) {
    return `🌟 My Quantum Reality Code: ${code}

Intention: "${intention}"

If this resonates, please comment this same code below to help amplify the manifestation:
${code}

#QuantumRealityCodes #Manifestation #CommunityAmplification`;
}

// Journey Progress Tracking
const Journey = {
    markChapterComplete(chapterId) {
        const completed = Storage.get('journey_chapters_completed', []);
        if (!completed.includes(chapterId)) {
            completed.push(chapterId);
            Storage.set('journey_chapters_completed', completed);
            this.updateProgress();
            showToast('Chapter completed! 🎉');
        }
    },
    
    isChapterComplete(chapterId) {
        const completed = Storage.get('journey_chapters_completed', []);
        return completed.includes(chapterId);
    },
    
    updateProgress() {
        const completed = Storage.get('journey_chapters_completed', []);
        const totalChapters = 12; // Update this based on actual chapters
        const progress = (completed.length / totalChapters) * 100;
        
        const progressFill = document.getElementById('journeyProgress');
        if (progressFill) {
            progressFill.style.width = progress + '%';
        }
        
        const progressText = document.getElementById('progressText');
        if (progressText) {
            progressText.textContent = `${completed.length}/${totalChapters} chapters completed`;
        }
    },
    
    getDaysActive() {
        const firstVisit = Storage.get('first_visit_date');
        if (!firstVisit) {
            const today = new Date().toISOString().split('T')[0];
            Storage.set('first_visit_date', today);
            return 1;
        }
        
        const first = new Date(firstVisit);
        const today = new Date();
        const diffTime = Math.abs(today - first);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
        return diffDays;
    }
};

// Council Progress Tracking
const Council = {
    incrementStat(statName) {
        const stats = Storage.get('council_stats', {
            codesGenerated: 0,
            codesShared: 0,
            othersSupported: 0,
            achievements: []
        });
        stats[statName] = (stats[statName] || 0) + 1;
        Storage.set('council_stats', stats);
        this.updateProgress();
        showToast('Progress updated! ✨');
    },
    
    getStats() {
        return Storage.get('council_stats', {
            codesGenerated: 0,
            codesShared: 0,
            othersSupported: 0,
            achievements: []
        });
    },
    
    updateProgress() {
        const stats = this.getStats();
        const daysActive = Journey.getDaysActive();
        
        // Update stat displays
        const elements = {
            'statDaysActive': daysActive,
            'statCodesGenerated': stats.codesGenerated,
            'statCodesShared': stats.codesShared,
            'statOthersSupported': stats.othersSupported
        };
        
        Object.entries(elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) element.textContent = value;
        });
        
        // Check for achievements
        this.checkAchievements(stats, daysActive);
    },
    
    checkAchievements(stats, daysActive) {
        const achievements = Storage.get('council_stats', {}).achievements || [];
        
        // Day-based achievements
        if (daysActive >= 1 && !achievements.includes('day_1')) {
            achievements.push('day_1');
            showToast('🏆 Achievement: First Day Complete!');
        }
        if (daysActive >= 7 && !achievements.includes('day_7')) {
            achievements.push('day_7');
            showToast('🏆 Achievement: One Week Journey!');
        }
        
        // Action-based achievements
        if (stats.codesGenerated >= 1 && !achievements.includes('first_code')) {
            achievements.push('first_code');
            showToast('🏆 Achievement: First Quantum Code!');
        }
        if (stats.othersSupported >= 3 && !achievements.includes('supporter')) {
            achievements.push('supporter');
            showToast('🏆 Achievement: Community Supporter!');
        }
        
        const currentStats = Storage.get('council_stats', {});
        currentStats.achievements = achievements;
        Storage.set('council_stats', currentStats);
    }
};

// Persona Definitions (12 personas for MVP)
const Personas = [
    {
        id: 1,
        name: 'Metatron',
        role: 'Sacred Geometry Guardian',
        quote: 'The cube of space holds all possibilities.',
        unlocked: true,
        avatar: '🔮'
    },
    {
        id: 2,
        name: 'Thoth',
        role: 'Ancient Wisdom Keeper',
        quote: 'Knowledge becomes power when encoded.',
        unlocked: true,
        avatar: '📚'
    },
    {
        id: 3,
        name: 'Seraphina',
        role: 'Frequency Transmitter',
        quote: 'Your vibration creates ripples across dimensions.',
        unlocked: true,
        avatar: '🎵'
    },
    {
        id: 4,
        name: 'Quasar',
        role: 'Energy Amplifier',
        quote: 'Intention plus frequency equals manifestation.',
        unlocked: true,
        avatar: '⚡'
    },
    {
        id: 5,
        name: 'Leonardo',
        role: 'Divine Mathematician',
        quote: 'Sacred numbers unlock universal doors.',
        unlocked: false,
        unlockRequirement: 'Complete 3 journey chapters',
        avatar: '🔢'
    },
    {
        id: 6,
        name: 'Isis',
        role: 'Divine Mother',
        quote: 'Nurturing your intention births your reality.',
        unlocked: false,
        unlockRequirement: 'Share your first code',
        avatar: '🌙'
    },
    {
        id: 7,
        name: 'Hermes',
        role: 'Divine Messenger',
        quote: 'Your intention travels faster than light.',
        unlocked: false,
        unlockRequirement: 'Support 3 other codes',
        avatar: '📬'
    },
    {
        id: 8,
        name: 'Aurora',
        role: 'Dawn Bringer',
        quote: 'Each new intention is a sunrise in your reality.',
        unlocked: false,
        unlockRequirement: '7 days active',
        avatar: '🌅'
    },
    {
        id: 9,
        name: 'Nexus',
        role: 'Connection Keeper',
        quote: 'When you support others, you amplify yourself.',
        unlocked: false,
        unlockRequirement: '10 days active',
        avatar: '🔗'
    },
    {
        id: 10,
        name: 'Oracle',
        role: 'Vision Holder',
        quote: 'Your code is a key to future possibilities.',
        unlocked: false,
        unlockRequirement: 'Share 3 codes',
        avatar: '🔮'
    },
    {
        id: 11,
        name: 'Vortex',
        role: 'Energy Cyclone',
        quote: 'Focused intention creates reality tornadoes.',
        unlocked: false,
        unlockRequirement: 'Support 5 other codes',
        avatar: '🌪️'
    },
    {
        id: 12,
        name: 'Elysia',
        role: 'Reality Weaver',
        quote: 'Your intentions are the threads of creation.',
        unlocked: false,
        unlockRequirement: 'Complete all journey chapters',
        avatar: '🕸️'
    }
];

// Generate Council Messages with User's Code
function generateCouncilMessage(persona, userCode, userIntention) {
    const templates = [
        `Code ${userCode} is stabilizing in your quantum field. Today, embody the feeling of "${userIntention.substring(0, 30)}..." as already true.`,
        `${userCode} resonates with your intention. The universe is rearranging itself to match your frequency.`,
        `I sense ${userCode} amplifying your manifestation power. Stay aligned with "${userIntention.substring(0, 20)}...".`,
        `Your Quantum Reality Code ${userCode} is creating bridges to your desired reality.`,
        `${userCode} is the key. Your intention is the door. Walk through with confidence.`
    ];
    
    const message = templates[Math.floor(Math.random() * templates.length)];
    return {
        persona: persona.name,
        message: message,
        voice: persona.id <= 4 ? 'Quantum Merlin' : 'Quantum Rose'
    };
}

// Navigation Active State
function setActiveNavLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').replace('./', '');
        if (linkPath === currentPath || 
            (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Initialize app
document.addEventListener('DOMContentLoaded', function() {
    setActiveNavLink();
    Journey.updateProgress();
    Council.updateProgress();
    
    // Update persona unlock states based on progress
    updatePersonaUnlocks();
});

function updatePersonaUnlocks() {
    const stats = Council.getStats();
    const daysActive = Journey.getDaysActive();
    const completedChapters = Storage.get('journey_chapters_completed', []).length;
    
    Personas.forEach(persona => {
        if (persona.unlocked) return;
        
        let shouldUnlock = false;
        
        switch(persona.id) {
            case 5: shouldUnlock = completedChapters >= 3; break;
            case 6: shouldUnlock = stats.codesGenerated >= 1; break;
            case 7: shouldUnlock = stats.othersSupported >= 3; break;
            case 8: shouldUnlock = daysActive >= 7; break;
            case 9: shouldUnlock = daysActive >= 10; break;
            case 10: shouldUnlock = stats.codesGenerated >= 3; break;
            case 11: shouldUnlock = stats.othersSupported >= 5; break;
            case 12: shouldUnlock = completedChapters >= 12; break;
        }
        
        if (shouldUnlock) {
            persona.unlocked = true;
            showToast(`🎉 ${persona.name} has joined your Quantum Council!`);
        }
    });
}

// Export for use in other scripts
window.QuantumApp = {
    quantumGematria,
    getCodeProperties,
    Storage,
    showToast,
    copyToClipboard,
    formatShareText,
    Journey,
    Council,
    Personas,
    generateCouncilMessage
};