// Quantum Council Messaging System - Phase 2
// Handles 96-minute message delivery and push notifications

class QuantumMessagingSystem {
    constructor() {
        this.messageInterval = 96 * 60 * 1000; // 96 minutes in milliseconds
        this.messages = this.loadMessages();
        this.state = this.loadState();
        this.notificationPermission = 'default';
        
        this.init();
    }
    
    async init() {
        // Request notification permission
        if ('Notification' in window) {
            this.notificationPermission = await this.requestNotificationPermission();
        }
        
        // Check if it's time for a new message
        this.checkForNewMessage();
        
        // Set up interval to check every minute
        setInterval(() => this.checkForNewMessage(), 60000);
        
        console.log('📡 Quantum Messaging System Initialized');
        console.log(`⏰ Next message in: ${this.getTimeUntilNextMessage()}`);
    }
    
    async requestNotificationPermission() {
        if (Notification.permission === 'granted') {
            return 'granted';
        }
        
        if (Notification.permission !== 'denied') {
            const permission = await Notification.requestPermission();
            return permission;
        }
        
        return Notification.permission;
    }
    
    loadState() {
        const stateStr = localStorage.getItem('quantumCouncilState');
        if (stateStr) {
            return JSON.parse(stateStr);
        }
        return null;
    }
    
    saveState(state) {
        localStorage.setItem('quantumCouncilState', JSON.stringify(state));
        this.state = state;
    }
    
    loadMessages() {
        return {
            architect: [
                "Your manifestation is unfolding exactly as designed. Trust the timeline.",
                "I've adjusted the quantum field. New opportunities are aligning.",
                "The blueprint is complete. Watch for the signs today.",
                "Your reality is shifting. Stay present to the changes.",
                "I see your future self. You're closer than you think."
            ],
            metatron: [
                "The sacred geometry of your desire is crystallizing.",
                "Every angle is perfect. Your manifestation is mathematically certain.",
                "I've encoded new patterns into your reality blueprint.",
                "The divine architecture is taking shape. Be patient.",
                "Your intention's geometry is resonating across dimensions."
            ],
            thoth: [
                "I've recorded a new chapter in your manifestation story.",
                "The timing is written. Everything arrives when it should.",
                "Ancient wisdom confirms: your path is clear.",
                "The Akashic records show your success is inevitable.",
                "Your manifestation has been documented in the eternal library."
            ],
            seraphina: [
                "Your frequency just shifted higher. I'm amplifying it now.",
                "I'm broadcasting your signal across all dimensions.",
                "Your vibration is perfectly tuned. Keep this energy.",
                "The universe is receiving your transmission loud and clear.",
                "Your frequency matches your desire. Manifestation is imminent."
            ],
            quasar: [
                "Your energy just multiplied exponentially. Feel the surge.",
                "I'm amplifying your power by 10,000x right now.",
                "Momentum is building. Prepare for rapid acceleration.",
                "Your manifestation velocity just increased dramatically.",
                "The quantum field is responding to your amplified energy."
            ],
            leonardo: [
                "New calculations complete. Success probability: 99.9%",
                "The Mersenne frequencies are perfectly aligned today.",
                "Mathematical analysis confirms: breakthrough imminent.",
                "The numbers don't lie. Your manifestation is certain.",
                "Quantum probability vectors all point to success."
            ],
            aurora: [
                "I've woven a new synchronicity into your timeline.",
                "Past, present, and future are converging for you today.",
                "Watch for the timeline shift happening now.",
                "Your timelines are merging. Notice the signs.",
                "A significant synchronicity is coming within 24 hours."
            ],
            phoenix: [
                "Old patterns are burning away. Your new self is emerging.",
                "The transformation is complete. You've risen.",
                "What no longer serves you is turning to ash.",
                "Your rebirth is happening now. Embrace it.",
                "From these ashes, your new reality takes flight."
            ],
            atlas: [
                "Your manifestation is anchored. Nothing can shake it.",
                "I'm holding your vision steady through any storm.",
                "The foundation is solid. Build with confidence.",
                "Your reality is grounded and stable. Trust it.",
                "I've secured your manifestation in physical reality."
            ],
            luna: [
                "Your intuition is speaking. Listen closely today.",
                "Pay attention to your dreams tonight. Messages await.",
                "Your inner knowing is guiding you perfectly.",
                "Trust that gut feeling. It's me confirming your path.",
                "Your intuition just activated. Follow its guidance."
            ],
            orion: [
                "I've cleared another obstacle from your path.",
                "Your willpower is unstoppable. Keep pushing forward.",
                "Nothing can block you now. The way is clear.",
                "Your determination has removed all barriers.",
                "Victory is yours. I've ensured it."
            ],
            harmony: [
                "Perfect balance achieved. Flow with ease today.",
                "Your energies are harmonized. Everything flows now.",
                "Resistance has dissolved. Allow the natural flow.",
                "Balance restored. Your manifestation comes effortlessly.",
                "Yin and yang are aligned. Trust the process."
            ],
            nexus: [
                "I just connected three major synchronicities for you.",
                "Watch for the sign I'm sending within the next hour.",
                "That 'coincidence' you noticed? That was me.",
                "The dots are connecting. See the pattern?",
                "A meaningful synchronicity is manifesting right now."
            ]
        };
    }
    
    checkForNewMessage() {
        if (!this.state || !this.state.activated) {
            return;
        }
        
        const now = Date.now();
        const nextMessageTime = this.state.nextMessageTime || now;
        
        if (now >= nextMessageTime) {
            this.deliverNewMessage();
        }
    }
    
    deliverNewMessage() {
        // Select random persona from active personas
        const activePersonas = this.state.personas || [];
        if (activePersonas.length === 0) return;
        
        const randomPersona = activePersonas[Math.floor(Math.random() * activePersonas.length)];
        const personaMessages = this.messages[randomPersona] || [];
        
        if (personaMessages.length === 0) return;
        
        const randomMessage = personaMessages[Math.floor(Math.random() * personaMessages.length)];
        
        // Store message
        this.storeMessage(randomPersona, randomMessage);
        
        // Send notification
        this.sendNotification(randomPersona, randomMessage);
        
        // Update next message time
        this.state.nextMessageTime = Date.now() + this.messageInterval;
        this.saveState(this.state);
        
        console.log(`📡 New message from ${randomPersona}: ${randomMessage}`);
    }
    
    storeMessage(persona, message) {
        const messages = JSON.parse(localStorage.getItem('quantumMessages') || '[]');
        messages.push({
            persona: persona,
            message: message,
            timestamp: Date.now(),
            read: false
        });
        
        // Keep only last 100 messages
        if (messages.length > 100) {
            messages.shift();
        }
        
        localStorage.setItem('quantumMessages', JSON.stringify(messages));
    }
    
    sendNotification(persona, message) {
        if (this.notificationPermission !== 'granted') {
            console.log('Notifications not permitted');
            return;
        }
        
        const personaNames = {
            architect: 'THE ARCHITECT',
            metatron: 'METATRON',
            thoth: 'THOTH',
            seraphina: 'SERAPHINA',
            quasar: 'QUASAR',
            leonardo: 'LEONARDO',
            aurora: 'AURORA',
            phoenix: 'PHOENIX',
            atlas: 'ATLAS',
            luna: 'LUNA',
            orion: 'ORION',
            harmony: 'HARMONY',
            nexus: 'NEXUS'
        };
        
        const title = `⚡ ${personaNames[persona] || 'Quantum Council'}`;
        
        const notification = new Notification(title, {
            body: message,
            icon: '/persona-avatars/persona-' + persona + '.png',
            badge: '/icon-192.png',
            tag: 'quantum-message',
            requireInteraction: false,
            vibrate: [200, 100, 200]
        });
        
        notification.onclick = () => {
            window.focus();
            window.location.href = '/dashboard.html';
            notification.close();
        };
    }
    
    getTimeUntilNextMessage() {
        if (!this.state || !this.state.nextMessageTime) {
            return 'Not scheduled';
        }
        
        const now = Date.now();
        const diff = this.state.nextMessageTime - now;
        
        if (diff <= 0) {
            return 'Ready now!';
        }
        
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        
        if (hours > 0) {
            return `${hours}h ${remainingMinutes}m`;
        }
        return `${minutes}m`;
    }
    
    getUnreadCount() {
        const messages = JSON.parse(localStorage.getItem('quantumMessages') || '[]');
        return messages.filter(m => !m.read).length;
    }
    
    getAllMessages() {
        return JSON.parse(localStorage.getItem('quantumMessages') || '[]');
    }
    
    markAsRead(timestamp) {
        const messages = this.getAllMessages();
        const message = messages.find(m => m.timestamp === timestamp);
        if (message) {
            message.read = true;
            localStorage.setItem('quantumMessages', JSON.stringify(messages));
        }
    }
    
    markAllAsRead() {
        const messages = this.getAllMessages();
        messages.forEach(m => m.read = true);
        localStorage.setItem('quantumMessages', JSON.stringify(messages));
    }
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QuantumMessagingSystem;
}