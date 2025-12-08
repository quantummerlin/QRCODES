// Dashboard Application Logic

let messagingSystem;
let updateInterval;

// Persona Data
const PERSONA_DATA = {
    architect: { name: 'THE ARCHITECT', emoji: '👁️' },
    metatron: { name: 'METATRON', emoji: '📐' },
    thoth: { name: 'THOTH', emoji: '📜' },
    seraphina: { name: 'SERAPHINA', emoji: '🎵' },
    quasar: { name: 'QUASAR', emoji: '💥' },
    leonardo: { name: 'LEONARDO', emoji: '🔢' },
    aurora: { name: 'AURORA', emoji: '🌈' },
    phoenix: { name: 'PHOENIX', emoji: '🔥' },
    atlas: { name: 'ATLAS', emoji: '🌍' },
    luna: { name: 'LUNA', emoji: '🌙' },
    orion: { name: 'ORION', emoji: '⚔️' },
    harmony: { name: 'HARMONY', emoji: '☯️' },
    nexus: { name: 'NEXUS', emoji: '🔗' }
};

// Initialize Dashboard
document.addEventListener('DOMContentLoaded', () => {
    // Initialize messaging system
    messagingSystem = new QuantumMessagingSystem();
    
    // Load all data
    loadIntention();
    loadStats();
    loadPersonas();
    loadMessages();
    loadSynchronicities();
    
    // Update timer every minute
    updateInterval = setInterval(() => {
        updateNextMessageTimer();
        loadMessages(); // Check for new messages
    }, 60000);
    
    // Initial timer update
    updateNextMessageTimer();
    
    console.log('🌟 Dashboard Initialized');
});

// Load Intention
function loadIntention() {
    const intention = localStorage.getItem('quantumIntention');
    const intentionDisplay = document.getElementById('intentionDisplay');
    
    if (intention) {
        intentionDisplay.textContent = intention;
    } else {
        intentionDisplay.textContent = 'No intention set. Please return to the intention page.';
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

// Load Stats
function loadStats() {
    const state = JSON.parse(localStorage.getItem('quantumCouncilState') || '{}');
    
    if (state.personas) {
        const activeCount = state.personas.length;
        const totalPersonas = 113;
        const alignment = ((activeCount / totalPersonas) * 100).toFixed(1);
        
        document.getElementById('activePersonasCount').textContent = activeCount;
        document.getElementById('realityAlignment').textContent = alignment + '%';
    }
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
        const persona = PERSONA_DATA[personaId];
        if (persona) {
            const personaDiv = document.createElement('div');
            personaDiv.className = 'persona-mini';
            personaDiv.innerHTML = `
                <div class="emoji">${persona.emoji}</div>
                <div class="name">${persona.name}</div>
            `;
            personaDiv.onclick = () => showPersonaInfo(personaId);
            personasGrid.appendChild(personaDiv);
        }
    });
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
        const persona = PERSONA_DATA[msg.persona];
        const messageDiv = document.createElement('div');
        messageDiv.className = `message-item ${msg.read ? '' : 'unread'}`;
        
        const timeAgo = getTimeAgo(msg.timestamp);
        
        messageDiv.innerHTML = `
            <div class="message-header">
                <span class="message-persona">${persona ? persona.emoji + ' ' + persona.name : 'Unknown'}</span>
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
        new Notification('⚡ Quantum Council', {
            body: 'Notifications are now active! You\'ll receive messages every 96 minutes.',
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

// Show Persona Info
function showPersonaInfo(personaId) {
    const persona = PERSONA_DATA[personaId];
    if (!persona) return;
    
    alert(`${persona.emoji} ${persona.name}\n\nThis persona is actively working on your manifestation. Messages from ${persona.name} will appear in your quantum messages feed.`);
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