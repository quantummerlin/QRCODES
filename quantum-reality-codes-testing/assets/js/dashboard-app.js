// Ultimate Dashboard Application Logic - 100 Personas System

let messagingSystem;
let updateInterval;
let achievements;
let currentPersonaData;

// Complete Persona Database
const COMPLETE_PERSONA_DATA = {
    // Core 13
    architect: { name: 'THE ARCHITECT', emoji: '👁️', category: 'wisdom' },
    metatron: { name: 'METATRON', emoji: '📐', category: 'healing' },
    thoth: { name: 'THOTH', emoji: '📜', category: 'wisdom' },
    seraphina: { name: 'SERAPHINA', emoji: '🎵', category: 'healing' },
    quasar: { name: 'QUASAR', emoji: '💥', category: 'power' },
    leonardo: { name: 'LEONARDO', emoji: '🔢', category: 'creativity' },
    aurora: { name: 'AURORA', emoji: '🌈', category: 'mystical' },
    phoenix: { name: 'PHOENIX', emoji: '🔥', category: 'power' },
    atlas: { name: 'ATLAS', emoji: '🌍', category: 'connection' },
    luna: { name: 'LUNA', emoji: '🌙', category: 'mystical' },
    orion: { name: 'ORION', emoji: '⚔️', category: 'power' },
    harmony: { name: 'HARMONY', emoji: '☯️', category: 'connection' },
    nexus: { name: 'NEXUS', emoji: '🔗', category: 'abundance' },
    
    // Wisdom & Knowledge (15)
    socrates: { name: 'SOCRATES', emoji: '🤔', category: 'wisdom' },
    solomon: { name: 'SOLOMON', emoji: '👑', category: 'wisdom' },
    pythagoras: { name: 'PYTHAGORAS', emoji: '🔢', category: 'wisdom' },
    kali: { name: 'KALI', emoji: '⚔️', category: 'wisdom' },
    hermes: { name: 'HERMES', emoji: '🕊️', category: 'wisdom' },
    pandora: { name: 'PANDORA', emoji: '🎁', category: 'wisdom' },
    isis: { name: 'ISIS', emoji: '🌺', category: 'wisdom' },
    odin: { name: 'ODIN', emoji: '🦅', category: 'wisdom' },
    alchemy: { name: 'ALCHEMY', emoji: '⚗️', category: 'wisdom' },
    veda: { name: 'VEDA', emoji: '📜', category: 'wisdom' },
    kabbalah: { name: 'KABBALAH', emoji: '🌳', category: 'wisdom' },
    rumi: { name: 'RUMI', emoji: '🕯️', category: 'wisdom' },
    confucius: { name: 'CONFUCIUS', emoji: '☯️', category: 'wisdom' },
    buddha: { name: 'BUDDHA', emoji: '🪷', category: 'wisdom' },
    krishna: { name: 'KRISHNA', emoji: '🎭', category: 'wisdom' },
    
    // Healing & Compassion (15)
    quan_yin: { name: 'QUAN YIN', emoji: '💗', category: 'healing' },
    rafael: { name: 'RAFAEL', emoji: '✨', category: 'healing' },
    mary_magdalene: { name: 'MARY MAGDALENE', emoji: '❤️', category: 'healing' },
    yemaya: { name: 'YEMAYA', emoji: '🌊', category: 'healing' },
    chiron: { name: 'CHIRON', emoji: '🏹', category: 'healing' },
    tara: { name: 'TARA', emoji: '🙏', category: 'healing' },
    babaji: { name: 'BABAJI', emoji: '🕉️', category: 'healing' },
    mother_earth: { name: 'MOTHER EARTH', emoji: '🌍', category: 'healing' },
    amaterasu: { name: 'AMATERASU', emoji: '☀️', category: 'healing' },
    pachamama: { name: 'PACHAMAMA', emoji: '🌌', category: 'healing' },
    sophia: { name: 'SOPHIA', emoji: '🦋', category: 'healing' },
    vesta: { name: 'VESTA', emoji: '🔥', category: 'healing' },
    hecate: { name: 'HECATE', emoji: '🌙', category: 'healing' },
    brigid: { name: 'BRIGID', emoji: '🕯️', category: 'healing' },
    maat: { name: 'MAAT', emoji: '⚖️', category: 'healing' },
    
    // Power & Protection (15)
    michael: { name: 'MICHAEL', emoji: '⚔️', category: 'power' },
    gabriel: { name: 'GABRIEL', emoji: '📯', category: 'power' },
    uriel: { name: 'URIEL', emoji: '💡', category: 'power' },
    ragnarok: { name: 'RAGNAROK', emoji: '🌅', category: 'power' },
    valkyrie: { name: 'VALKYRIE', emoji: '🦅', category: 'power' },
    ares: { name: 'ARES', emoji: '🛡️', category: 'power' },
    thor: { name: 'THOR', emoji: '⚡', category: 'power' },
    shiva: { name: 'SHIVA', emoji: '🕺', category: 'power' },
    zeus: { name: 'ZEUS', emoji: '☁️', category: 'power' },
    horus: { name: 'HORUS', emoji: '👁️', category: 'power' },
    ganesha: { name: 'GANESHA', emoji: '🐘', category: 'power' },
    hercules: { name: 'HERCULES', emoji: '💪', category: 'power' },
    athena: { name: 'ATHENA', emoji: '🦉', category: 'power' },
    marduk: { name: 'MARDUK', emoji: '⭐', category: 'power' },
    titan: { name: 'TITAN', emoji: '🏔️', category: 'power' },
    
    // Creativity & Inspiration (12)
    calliope: { name: 'CALLIOPE', emoji: '📖', category: 'creativity' },
    erato: { name: 'ERATO', emoji: '💕', category: 'creativity' },
    terpsichore: { name: 'TERPSICHORE', emoji: '💃', category: 'creativity' },
    thalia: { name: 'THALIA', emoji: '😄', category: 'creativity' },
    clio: { name: 'CLIO', emoji: '📜', category: 'creativity' },
    melpomene: { name: 'MELPOMENE', emoji: '🎭', category: 'creativity' },
    euterpe: { name: 'EUTERPE', emoji: '🎵', category: 'creativity' },
    polyhymnia: { name: 'POLYHYMNIA', emoji: '🎤', category: 'creativity' },
    urania: { name: 'URANIA', emoji: '⭐', category: 'creativity' },
    apollo: { name: 'APOLLO', emoji: '☀️', category: 'creativity' },
    dionysus: { name: 'DIONYSUS', emoji: '🍇', category: 'creativity' },
    vulcan: { name: 'VULCAN', emoji: '🔨', category: 'creativity' },
    
    // Mystical & Spiritual (12)
    merlin: { name: 'MERLIN', emoji: '🧙', category: 'mystical' },
    morgana: { name: 'MORGANA', emoji: '🔮', category: 'mystical' },
    draco: { name: 'DRACO', emoji: '🐉', category: 'mystical' },
    ceridwen: { name: 'CERIDWEN', emoji: '🏺', category: 'mystical' },
    ariadne: { name: 'ARIADNE', emoji: '🧵', category: 'mystical' },
    morpheus: { name: 'MORPHEUS', emoji: '💫', category: 'mystical' },
    hypnos: { name: 'HYPNOS', emoji: '😴', category: 'mystical' },
    janus: { name: 'JANUS', emoji: '🚪', category: 'mystical' },
    enki: { name: 'ENKI', emoji: '💧', category: 'mystical' },
    inanna: { name: 'INANNA', emoji: '⭐', category: 'mystical' },
    djinn: { name: 'DJINN', emoji: '🧞', category: 'mystical' },
    phoenix_nest: { name: 'PHOENIX NEST', emoji: '🌟', category: 'mystical' },
    
    // Connection & Relationship (10)
    eros: { name: 'EROS', emoji: '💘', category: 'connection' },
    psyche: { name: 'PSYCHE', emoji: '💞', category: 'connection' },
    twin_flame: { name: 'TWIN FLAME', emoji: '🔥', category: 'connection' },
    soul_family: { name: 'SOUL FAMILY', emoji: '👨‍👩‍👧‍👦', category: 'connection' },
    community: { name: 'COMMUNITY', emoji: '🌏', category: 'connection' },
    friendship: { name: 'FRIENDSHIP', emoji: '🤝', category: 'connection' },
    network: { name: 'NETWORK', emoji: '🕸️', category: 'connection' },
    bridge: { name: 'BRIDGE', emoji: '🌉', category: 'connection' },
    gathering: { name: 'GATHERING', emoji: '⭕', category: 'connection' },
    alliance: { name: 'ALLIANCE', emoji: '🤝', category: 'connection' },
    
    // Abundance & Success (8)
    fortuna: { name: 'FORTUNA', emoji: '🎰', category: 'abundance' },
    plutus: { name: 'PLUTUS', emoji: '💰', category: 'abundance' },
    abundance: { name: 'ABUNDANCE', emoji: '♾️', category: 'abundance' },
    success: { name: 'SUCCESS', emoji: '🏆', category: 'abundance' },
    prosperity: { name: 'PROSPERITY', emoji: '📈', category: 'abundance' },
    opulence: { name: 'OPULENCE', emoji: '💎', category: 'abundance' },
    reward: { name: 'REWARD', emoji: '🎁', category: 'abundance' },
    harvest: { name: 'HARVEST', emoji: '🌾', category: 'abundance' }
};

// Persona Categories Data
const PERSONA_CATEGORIES = {
    wisdom: {
        name: 'Wisdom & Knowledge',
        icon: '🤔',
        color: '#FFD700',
        count: 16,
        description: 'Ancient wisdom and divine knowledge'
    },
    healing: {
        name: 'Healing & Compassion',
        icon: '💗',
        color: '#00FF00',
        count: 15,
        description: 'Divine healing and unconditional love'
    },
    power: {
        name: 'Power & Protection',
        icon: '⚡',
        color: '#FF0000',
        count: 15,
        description: 'Divine power and spiritual protection'
    },
    creativity: {
        name: 'Creativity & Inspiration',
        icon: '🎨',
        color: '#FF69B4',
        count: 12,
        description: 'Divine creativity and inspiration'
    },
    mystical: {
        name: 'Mystical & Spiritual',
        icon: '🔮',
        color: '#9400D3',
        count: 12,
        description: 'Mystical arts and spiritual mastery'
    },
    connection: {
        name: 'Connection & Relationship',
        icon: '💞',
        color: '#FF1493',
        count: 10,
        description: 'Sacred connections and divine relationships'
    },
    abundance: {
        name: 'Abundance & Success',
        icon: '💰',
        color: '#32CD32',
        count: 8,
        description: 'Divine abundance and material success'
    }
};

// Achievements System
const ACHIEVEMENTS = [
    {
        id: 'first_message',
        name: 'First Connection',
        description: 'Receive your first quantum message',
        icon: '📡',
        unlocked: false
    },
    {
        id: 'week_streak',
        name: 'Week Warrior',
        description: '7 days of active manifestation',
        icon: '📅',
        unlocked: false
    },
    {
        id: '25_personas',
        name: 'Growing Council',
        description: 'Unlock 25 personas',
        icon: '👥',
        unlocked: false
    },
    {
        id: '50_personas',
        name: 'Halfway There',
        description: 'Unlock 50 personas',
        icon: '⭐',
        unlocked: false
    },
    {
        id: '100_messages',
        name: 'Message Master',
        description: 'Receive 100 messages',
        icon: '💬',
        unlocked: false
    },
    {
        id: '10_syncs',
        name: 'Synchronicity Seeker',
        description: 'Log 10 synchronicities',
        icon: '🔗',
        unlocked: false
    },
    {
        id: 'full_council',
        name: 'Master Manifestor',
        description: 'Unlock all 100 personas',
        icon: '👑',
        unlocked: false
    }
];

// Initialize Ultimate Dashboard
document.addEventListener('DOMContentLoaded', () => {
    // Initialize messaging system
    messagingSystem = new ExpandedQuantumMessagingSystem();
    
    // Load all data
    loadIntention();
    loadUltimateStats();
    loadPersonaCategories();
    loadPersonas();
    loadAchievements();
    loadMessages();
    loadSynchronicities();
    
    // Update timer every minute
    updateInterval = setInterval(() => {
        updateNextMessageTimer();
        checkForNewAchievements();
        loadMessages(); // Check for new messages
    }, 60000);
    
    // Initial timer update
    updateNextMessageTimer();
    
    console.log('🌟 Ultimate Dashboard Initialized');
    console.log(`👥 ${Object.keys(COMPLETE_PERSONA_DATA).length} Personas Available`);
    console.log(`🏆 ${ACHIEVEMENTS.length} Achievements Ready`);
});

// Load Ultimate Stats
function loadUltimateStats() {
    const state = JSON.parse(localStorage.getItem('quantumCouncilState') || '{}');
    
    if (state.personas) {
        const activeCount = state.personas.length;
        const totalPersonas = 100;
        const alignment = Math.round((activeCount / totalPersonas) * 100);
        
        document.getElementById('activePersonasCount').textContent = activeCount;
        document.getElementById('realityAlignment').textContent = alignment + '%';
        document.getElementById('totalMessages').textContent = '4,400';
        
        // Update progress bars
        document.getElementById('personasProgress').style.width = alignment + '%';
        document.getElementById('alignmentProgress').style.width = alignment + '%';
    }
    
    // Calculate days active
    const activationTime = localStorage.getItem('quantumActivationTime');
    if (activationTime) {
        const days = Math.floor((Date.now() - parseInt(activationTime)) / (1000 * 60 * 60 * 24));
        document.getElementById('daysActive').textContent = days;
        
        if (days === 0) {
            document.getElementById('daysAgoText').textContent = 'today';
        } else if (days === 1) {
            document.getElementById('daysAgoText').textContent = '1 day ago';
        } else {
            document.getElementById('daysAgoText').textContent = `${days} days ago`;
        }
    }
}

// Load Intention
function loadIntention() {
    const intention = localStorage.getItem('quantumIntention');
    const intentionDisplay = document.getElementById('intentionDisplay');
    
    if (intention) {
        intentionDisplay.textContent = intention;
    } else {
        intentionDisplay.textContent = 'No intention set. Please return to the intention page.';
    }
}

// Load Persona Categories
function loadPersonaCategories() {
    const categoriesContainer = document.getElementById('personaCategories');
    categoriesContainer.innerHTML = '';
    
    Object.entries(PERSONA_CATEGORIES).forEach(([categoryId, categoryData]) => {
        const categoryCard = document.createElement('div');
        categoryCard.className = 'category-card';
        categoryCard.onclick = () => filterPersonasByCategory(categoryId);
        
        categoryCard.innerHTML = `
            <div class="category-icon">${categoryData.icon}</div>
            <div class="category-name">${categoryData.name}</div>
            <div class="category-count">${categoryData.count} personas</div>
        `;
        
        categoriesContainer.appendChild(categoryCard);
    });
}

// Load Personas
function loadPersonas() {
    const state = JSON.parse(localStorage.getItem('quantumCouncilState') || '{}');
    const personasGrid = document.getElementById('personasGrid');
    
    if (!state.personas || state.personas.length === 0) {
        personasGrid.innerHTML = '<div class="no-messages">No personas activated yet.</div>';
        return;
    }
    
    personasGrid.innerHTML = '';
    
    state.personas.forEach(personaId => {
        const persona = COMPLETE_PERSONA_DATA[personaId];
        if (persona) {
            const personaTile = document.createElement('div');
            personaTile.className = 'persona-tile';
            personaTile.onclick = () => showPersonaInfo(personaId);
            
            personaTile.innerHTML = `
                <div class="emoji">${persona.emoji}</div>
                <div class="name">${persona.name}</div>
            `;
            
            personasGrid.appendChild(personaTile);
        }
    });
    
    // Add locked personas
    const allPersonaIds = Object.keys(COMPLETE_PERSONA_DATA);
    const unlockedPersonas = state.personas || [];
    const lockedPersonas = allPersonaIds.filter(id => !unlockedPersonas.includes(id));
    
    lockedPersonas.forEach(personaId => {
        const persona = COMPLETE_PERSONA_DATA[personaId];
        if (persona) {
            const personaTile = document.createElement('div');
            personaTile.className = 'persona-tile locked';
            personaTile.onclick = () => showLockedPersonaInfo(personaId);
            
            personaTile.innerHTML = `
                <div class="emoji">🔒</div>
                <div class="name">???</div>
            `;
            
            personasGrid.appendChild(personaTile);
        }
    });
}

// Load Achievements
function loadAchievements() {
    const savedAchievements = JSON.parse(localStorage.getItem('quantumAchievements') || '{}');
    const achievementsList = document.getElementById('achievementsList');
    
    achievementsList.innerHTML = '';
    
    ACHIEVEMENTS.forEach(achievement => {
        const isUnlocked = savedAchievements[achievement.id] || false;
        const achievementDiv = document.createElement('div');
        achievementDiv.className = `achievement ${isUnlocked ? 'unlocked' : ''}`;
        
        achievementDiv.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-name">${achievement.name}</div>
            <div class="achievement-desc">${achievement.description}</div>
        `;
        
        achievementsList.appendChild(achievementDiv);
    });
    
    // Update achievements count
    const unlockedCount = ACHIEVEMENTS.filter(a => savedAchievements[a.id]).length;
    document.getElementById('achievementsCount').textContent = unlockedCount;
}

// Load Messages
function loadMessages() {
    const messages = messagingSystem.getAllMessages();
    const container = document.getElementById('messagesContainer');
    const unreadBadge = document.getElementById('unreadBadge');
    
    if (messages.length === 0) {
        container.innerHTML = '<div class="no-messages">Your first message will arrive in 96 minutes...</div>';
        unreadBadge.style.display = 'none';
        return;
    }
    
    // Sort by timestamp (newest first)
    messages.sort((a, b) => b.timestamp - a.timestamp);
    
    container.innerHTML = '';
    
    messages.forEach(msg => {
        const persona = COMPLETE_PERSONA_DATA[msg.persona];
        if (persona) {
            const messageDiv = document.createElement('div');
            messageDiv.className = `message-item-enhanced ${msg.read ? '' : 'unread'}`;
            
            const timeAgo = getTimeAgo(msg.timestamp);
            const category = PERSONA_CATEGORIES[persona.category];
            
            messageDiv.innerHTML = `
                <div class="category-tag">${category ? category.icon : '✨'} ${category ? category.name : 'Quantum'}</div>
                <div class="message-header">
                    <span class="message-persona">${persona.emoji} ${persona.name}</span>
                    <span class="message-time">${timeAgo}</span>
                </div>
                <div class="message-text">${msg.message}</div>
            `;
            
            messageDiv.onclick = () => {
                if (!msg.read) {
                    messagingSystem.markAsRead(msg.timestamp);
                    messageDiv.classList.remove('unread');
                    updateUnreadBadge();
                }
            };
            
            container.appendChild(messageDiv);
        }
    });
    
    updateUnreadBadge();
}

// Update Unread Badge
function updateUnreadBadge() {
    const unreadCount = messagingSystem.getUnreadCount();
    const badge = document.getElementById('unreadBadge');
    
    if (unreadCount > 0) {
        badge.textContent = unreadCount;
        badge.style.display = 'inline-block';
    } else {
        badge.style.display = 'none';
    }
}

// Update Next Message Timer
function updateNextMessageTimer() {
    const timeUntil = messagingSystem.getTimeUntilNextMessage();
    document.getElementById('nextMessageTime').textContent = timeUntil;
}

// Load Synchronicities
function loadSynchronicities() {
    const syncs = JSON.parse(localStorage.getItem('synchronicities') || '[]');
    const syncList = document.getElementById('syncList');
    
    if (syncs.length === 0) {
        syncList.innerHTML = '<div class="no-messages">No synchronicities logged yet. Start noticing the signs!</div>';
        return;
    }
    
    syncList.innerHTML = '';
    
    // Sort by timestamp (newest first)
    syncs.sort((a, b) => b.timestamp - a.timestamp);
    
    syncs.forEach(sync => {
        const syncDiv = document.createElement('div');
        syncDiv.className = 'sync-item';
        
        const date = new Date(sync.timestamp);
        const dateStr = date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        syncDiv.innerHTML = `
            <div class="sync-text">${sync.text}</div>
            <div class="sync-date">${dateStr}</div>
        `;
        
        syncList.appendChild(syncDiv);
    });
}

// Check for New Achievements
function checkForNewAchievements() {
    const savedAchievements = JSON.parse(localStorage.getItem('quantumAchievements') || '{}');
    const messages = messagingSystem.getAllMessages();
    const syncs = JSON.parse(localStorage.getItem('synchronicities') || '[]');
    const state = JSON.parse(localStorage.getItem('quantumCouncilState') || '{}');
    const activationTime = localStorage.getItem('quantumActivationTime');
    
    let newAchievements = [];
    
    // Check first message
    if (messages.length > 0 && !savedAchievements.first_message) {
        savedAchievements.first_message = true;
        newAchievements.push(ACHIEVEMENTS.find(a => a.id === 'first_message'));
    }
    
    // Check week streak
    if (activationTime) {
        const daysActive = Math.floor((Date.now() - parseInt(activationTime)) / (1000 * 60 * 60 * 24));
        if (daysActive >= 7 && !savedAchievements.week_streak) {
            savedAchievements.week_streak = true;
            newAchievements.push(ACHIEVEMENTS.find(a => a.id === 'week_streak'));
        }
    }
    
    // Check persona unlocks
    if (state.personas && state.personas.length >= 25 && !savedAchievements['25_personas']) {
        savedAchievements['25_personas'] = true;
        newAchievements.push(ACHIEVEMENTS.find(a => a.id === '25_personas'));
    }
    
    if (state.personas && state.personas.length >= 50 && !savedAchievements['50_personas']) {
        savedAchievements['50_personas'] = true;
        newAchievements.push(ACHIEVEMENTS.find(a => a.id === '50_personas'));
    }
    
    if (state.personas && state.personas.length >= 100 && !savedAchievements.full_council) {
        savedAchievements.full_council = true;
        newAchievements.push(ACHIEVEMENTS.find(a => a.id === 'full_council'));
    }
    
    // Check message count
    if (messages.length >= 100 && !savedAchievements['100_messages']) {
        savedAchievements['100_messages'] = true;
        newAchievements.push(ACHIEVEMENTS.find(a => a.id === '100_messages'));
    }
    
    // Check synchronicity count
    if (syncs.length >= 10 && !savedAchievements['10_syncs']) {
        savedAchievements['10_syncs'] = true;
        newAchievements.push(ACHIEVEMENTS.find(a => a.id === '10_syncs'));
    }
    
    // Save achievements
    localStorage.setItem('quantumAchievements', JSON.stringify(savedAchievements));
    
    // Show unlock notifications
    newAchievements.forEach(achievement => {
        showUnlockNotification(achievement);
    });
    
    // Reload achievements display
    if (newAchievements.length > 0) {
        loadAchievements();
    }
}

// Show Unlock Notification
function showUnlockNotification(achievement) {
    const modal = document.getElementById('unlockModal');
    const emoji = document.getElementById('unlockEmoji');
    const title = document.getElementById('unlockTitle');
    const message = document.getElementById('unlockMessage');
    
    emoji.textContent = achievement.icon;
    title.textContent = '🎉 Achievement Unlocked!';
    message.textContent = `${achievement.name}: ${achievement.description}`;
    
    modal.classList.add('active');
    
    // Auto-close after 3 seconds
    setTimeout(() => {
        closeUnlockModal();
    }, 3000);
}

// Close Unlock Modal
function closeUnlockModal() {
    document.getElementById('unlockModal').classList.remove('active');
}

// Show Unlock Modal
function showUnlockModal() {
    // Simulate unlocking a random persona
    const state = JSON.parse(localStorage.getItem('quantumCouncilState') || '{}');
    const allPersonaIds = Object.keys(COMPLETE_PERSONA_DATA);
    const unlockedPersonas = state.personas || [];
    const lockedPersonas = allPersonaIds.filter(id => !unlockedPersonas.includes(id));
    
    if (lockedPersonas.length > 0) {
        const randomPersonaId = lockedPersonas[Math.floor(Math.random() * lockedPersonas.length)];
        const persona = COMPLETE_PERSONA_DATA[randomPersonaId];
        
        const modal = document.getElementById('unlockModal');
        const emoji = document.getElementById('unlockEmoji');
        const title = document.getElementById('unlockTitle');
        const message = document.getElementById('unlockMessage');
        
        emoji.textContent = persona.emoji;
        title.textContent = '🎁 New Persona Unlocked!';
        message.textContent = `${persona.name} has joined your Quantum Council!`;
        
        modal.classList.add('active');
        
        // Actually unlock the persona
        if (messagingSystem.unlockNewPersona(randomPersonaId)) {
            loadPersonas();
            loadUltimateStats();
        }
    }
}

// Filter Personas by Category
function filterPersonasByCategory(categoryId) {
    const state = JSON.parse(localStorage.getItem('quantumCouncilState') || '{}');
    const personasGrid = document.getElementById('personasGrid');
    
    personasGrid.innerHTML = '';
    
    const unlockedPersonas = state.personas || [];
    const categoryPersonas = unlockedPersonas.filter(personaId => {
        const persona = COMPLETE_PERSONA_DATA[personaId];
        return persona && persona.category === categoryId;
    });
    
    if (categoryPersonas.length === 0) {
        personasGrid.innerHTML = '<div class="no-messages">No personas from this category unlocked yet.</div>';
        return;
    }
    
    categoryPersonas.forEach(personaId => {
        const persona = COMPLETE_PERSONA_DATA[personaId];
        if (persona) {
            const personaTile = document.createElement('div');
            personaTile.className = 'persona-tile';
            personaTile.onclick = () => showPersonaInfo(personaId);
            
            personaTile.innerHTML = `
                <div class="emoji">${persona.emoji}</div>
                <div class="name">${persona.name}</div>
            `;
            
            personasGrid.appendChild(personaTile);
        }
    });
}

// Show Persona Info
function showPersonaInfo(personaId) {
    const persona = COMPLETE_PERSONA_DATA[personaId];
    if (!persona) return;
    
    const category = PERSONA_CATEGORIES[persona.category];
    alert(`${persona.emoji} ${persona.name}\n\nCategory: ${category ? category.name : 'Unknown'}\n${category ? category.description : ''}\n\nThis persona is actively working on your manifestation. Messages from ${persona.name} will appear in your quantum messages feed.`);
}

// Show Locked Persona Info
function showLockedPersonaInfo(personaId) {
    alert(`🔒 Locked Persona\n\nThis persona hasn't joined your council yet.\n\nContinue your manifestation journey to unlock more personas!\n\nEach day brings new possibilities and new guides to assist you.`);
}

// Mark All as Read
function markAllRead() {
    messagingSystem.markAllAsRead();
    loadMessages();
    showNotification('✓ All messages marked as read');
}

// Request Notifications
async function requestNotifications() {
    if (!('Notification' in window)) {
        alert('Your browser does not support notifications.');
        return;
    }
    
    const permission = await Notification.requestPermission();
    
    if (permission === 'granted') {
        showNotification('🔔 Notifications enabled! You\'ll receive messages from your Quantum Council.');
        
        // Send test notification
        new Notification('⚡ Ultimate Quantum Council', {
            body: '100 personas are ready to guide your manifestation journey!',
            icon: '/icon-192.png'
        });
    } else {
        alert('Notifications were denied. You can enable them in your browser settings.');
    }
}

// Force New Message (for testing)
function forceNewMessage() {
    messagingSystem.deliverNewMessage();
    setTimeout(() => {
        loadMessages();
        updateNextMessageTimer();
        showNotification('⚡ New message delivered!');
    }, 500);
}

// Log Synchronicity
function logSynchronicity() {
    const input = document.getElementById('syncInput');
    const text = input.value.trim();
    
    if (!text) {
        alert('Please write something about the synchronicity you noticed.');
        return;
    }
    
    const syncs = JSON.parse(localStorage.getItem('synchronicities') || '[]');
    syncs.push({
        text: text,
        timestamp: Date.now()
    });
    
    // Keep only last 100
    if (syncs.length > 100) {
        syncs.shift();
    }
    
    localStorage.setItem('synchronicities', JSON.stringify(syncs));
    
    input.value = '';
    loadSynchronicities();
    
    // Show confirmation
    showNotification('✨ Synchronicity logged! NEXUS is connecting the dots...');
    
    // Check for achievements
    checkForNewAchievements();
}

// Edit Intention
function editIntention() {
    const newIntention = prompt('Edit your intention:', localStorage.getItem('quantumIntention'));
    
    if (newIntention && newIntention.trim().length >= 20) {
        localStorage.setItem('quantumIntention', newIntention.trim());
        loadIntention();
        showNotification('✓ Intention updated! Your council is recalibrating...');
    } else if (newIntention !== null) {
        alert('Intention must be at least 20 characters.');
    }
}

// Get Time Ago
function getTimeAgo(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    
    if (days > 0) {
        return days === 1 ? '1 day ago' : `${days} days ago`;
    } else if (hours > 0) {
        return hours === 1 ? '1 hour ago' : `${hours} hours ago`;
    } else if (minutes > 0) {
        return minutes === 1 ? '1 minute ago' : `${minutes} minutes ago`;
    } else {
        return 'Just now';
    }
}

// Show Notification
function showNotification(message) {
    // Create a temporary notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #00FFFF, #FF00FF);
        color: #0A0A1F;
        padding: 15px 25px;
        border-radius: 10px;
        font-weight: 600;
        z-index: 10000;
        box-shadow: 0 0 30px rgba(0, 255, 255, 0.5);
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (updateInterval) {
        clearInterval(updateInterval);
    }
});