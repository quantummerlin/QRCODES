// Quantum Reality Code - Enhanced Messaging System
// Intention-specific, category-aware, and personalized messaging

class EnhancedQuantumMessaging {
    constructor() {
        this.guides = null;
        this.personas = null;
        this.userProfile = null;
        this.messageHistory = [];
        this.currentCycle = 0;
        this.messagingInterval = null;
        this.userSession = this.initializeSession();
        this.initializeSystem();
    }

    async initializeSystem() {
        await this.loadGuideData();
        await this.loadUserProfile();
        this.initializeMessageTemplates();
        this.startMessagingCycle();
    }

    async loadGuideData() {
        try {
            const guidesResponse = await fetch('quantum-guides.json');
            this.guides = await guidesResponse.json();
            
            const personasResponse = await fetch('personas_database.json');
            this.personas = await personasResponse.json();
            
            console.log('Enhanced guide system initialized');
        } catch (error) {
            console.error('Failed to load guide data:', error);
            this.fallbackInitialization();
        }
    }

    fallbackInitialization() {
        this.guides = {
            quantum_merlin: {
                name: "Quantum Merlin",
                signature_phrase: "The quantum field remembers what the conscious mind forgets."
            },
            quantum_rose: {
                name: "Quantum Rose", 
                signature_phrase: "Your frequency is the key that unlocks reality's door."
            }
        };
    }

    initializeSession() {
        const session = localStorage.getItem('quantum_session');
        if (session) {
            return JSON.parse(session);
        }
        
        const newSession = {
            sessionId: this.generateSessionId(),
            startTime: new Date().toISOString(),
            intention: null,
            code: null,
            category: null,
            selectedCouncil: [],
            messagesReceived: 0,
            journeyStep: 1
        };
        
        localStorage.setItem('quantum_session', JSON.stringify(newSession));
        return newSession;
    }

    async loadUserProfile() {
        const profile = localStorage.getItem('quantumUserProfile');
        if (profile) {
            this.userProfile = JSON.parse(profile);
        } else {
            this.userProfile = {
                guidanceStyle: 'gentle',
                preferredMessageTypes: ['wisdom', 'frequency', 'action'],
                sensitivities: [],
                goals: [],
                previousIntentions: []
            };
        }
    }

    initializeMessageTemplates() {
        this.messageTemplates = {
            // Category-specific message templates
            abundance: {
                wisdom: [
                    "Abundance flows where energy goes. Your focus creates rivers of prosperity.",
                    "The universe is infinitely abundant. Your code aligns you with this natural flow.",
                    "Scarcity is an illusion. Quantum fields provide unlimited potential for manifestation."
                ],
                frequency: [
                    "I feel your frequency shifting to receive abundance. Notice the openness in your chest.",
                    "Your abundance vibration is rising. The quantum field responds to this magnetic pull.",
                    "Tune into the frequency of 'enough'. You are already whole and complete."
                ],
                action: [
                    "Today, notice one form of abundance already present in your life.",
                    "Give something away freely - this creates space for new abundance to enter.",
                    "Speak abundance words. Your throat chakra broadcasts your prosperity frequency."
                ]
            },
            love: {
                wisdom: [
                    "Love is the quantum glue that binds reality. Your intention activates this universal force.",
                    "Self-love creates the magnetic field for all other love to enter.",
                    "The heart is a quantum portal. Through it, you access infinite dimensions of connection."
                ],
                frequency: [
                    "Your heart frequency is expanding. I feel compassion radiating from your chest.",
                    "Love vibration harmonizes your entire energy field. Notice the warmth spreading.",
                    "You're broadcasting on the love frequency. The universe is responding in kind."
                ],
                action: [
                    "Place your hand on your heart and feel love circulating within you.",
                    "Send love to someone who needs it today. This amplifies your own love field.",
                    "Look in the mirror and say 'I love you' to the quantum creator in you."
                ]
            },
            health: {
                wisdom: [
                    "Your body is a quantum system, constantly regenerating based on your consciousness.",
                    "Health is your natural state. Your code reminds your cells of their perfect blueprint.",
                    "Quantum healing happens in the gap between thoughts. Rest in this space."
                ],
                frequency: [
                    "I feel your life force energy strengthening. Your cells are vibrating with health.",
                    "Your healing frequency is activated. Notice the tingling in your hands and feet.",
                    "Your body is humming with vitality. Trust this quantum recalibration."
                ],
                action: [
                    "Take three deep breaths and imagine each inhale bringing healing light.",
                    "Thank your body for its wisdom. Gratitude amplifies health frequencies.",
                    "Move your body gently today. Motion clears quantum blockages."
                ]
            },
            career: {
                wisdom: [
                    "Your career is a quantum expression of your unique gifts and purpose.",
                    "Success flows from alignment, not effort. Your code aligns you with your true path.",
                    "Every challenge is a quantum opportunity for growth and expansion."
                ],
                frequency: [
                    "Your professional frequency is elevating. Opportunities are quantum-jumping toward you.",
                    "I feel confidence building in your energy field. You're ready for your next level.",
                    "Your work vibration is becoming magnetic. The right people will notice."
                ],
                action: [
                    "Take one small step toward your career goal today. Quantum momentum builds.",
                    "Network with one new person. Your frequency will attract the right connections.",
                    "Update your professional presence to match your quantum self-image."
                ]
            },
            spiritual: {
                wisdom: [
                    "Spirituality is recognizing you are both the wave and the ocean of consciousness.",
                    "Your quantum code connects you to higher dimensions of awareness.",
                    "Mystical experiences happen when linear time dissolves into quantum now."
                ],
                frequency: [
                    "Your spiritual vibration is expanding beyond physical limitations.",
                    "I feel your crown chakra opening. Divine wisdom is pouring in.",
                    "You're accessing cosmic consciousness. Breathe into this expanded awareness."
                ],
                action: [
                    "Meditate for 5 minutes, focusing on the space between your thoughts.",
                    "Write down any intuitive insights. Your higher self is speaking clearly.",
                    "Spend time in nature. The earth is a powerful quantum amplifier."
                ]
            }
        };

        // Journey step-specific messages
        this.journeyMessages = {
            1: { // Meeting guides
                merlin: "Welcome, quantum seeker. I have been waiting for your consciousness to awaken.",
                rose: "Beautiful soul, your frequency has called us forth. We are here to guide you."
            },
            2: { // Feeling energy
                merlin: "The quantum field responds to your touch. You are learning to shape reality.",
                rose: "Energy follows emotion. What you feel, you create. Choose your feelings wisely."
            },
            3: { // Setting foundation
                merlin: "Your intention is now encoded in the quantum matrix. It cannot be undone.",
                rose: "Your desire has become a frequency. The universe is already rearranging itself."
            },
            4: { // Creating code
                merlin: "The sacred mathematics of your desire are now revealed. These numbers hold power.",
                rose: "Your code vibrates with your intention. Feel its resonance in your heart."
            },
            5: { // Anchoring code
                merlin: "Anchoring completes the quantum circuit. Reality must now conform to your code.",
                rose: "Your code is now part of the earth's energy grid. It works even when you sleep."
            },
            6: { // Meeting council
                merlin: "Your council has been chosen from 77 quantum beings. Each brings unique wisdom.",
                rose: "Seven guides now surround you with their frequencies. You are never alone."
            }
        };

        // Emotional safety and recalibration messages
        this.recalibrationMessages = {
            doubt: [
                { merlin: "Doubt is the quantum field testing your resolve. Stand firm.", rose: "Doubt is just frequency asking to be transmuted into trust." },
                { merlin: "Even quantum scientists doubted their theories until proven. Trust your experiment.", rose: "Breathe through doubt. On the other side is clarity." }
            ],
            fear: [
                { merlin: "Fear is old programming. Your quantum code overwrites it with new reality.", rose: "Fear is just energy without direction. Give it purpose through your intention." }
            ],
            impatience: [
                { merlin: "Quantum manifestation works in cosmic time, not human time. Trust the process.", rose: "Impatience creates resistance. Allow your desire to bloom in divine timing." }
            ]
        };
    }

    generateSessionId() {
        return 'quantum_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    }

    generatePersonalizedMessage() {
        const category = this.userSession.category || 'general';
        const messageType = this.selectMessageType();
        const journeyStep = this.userSession.journeyStep || 1;
        
        let message;
        
        // Priority: Journey step messages first
        if (this.journeyMessages[journeyStep]) {
            const stepMessage = this.journeyMessages[journeyStep];
            message = {
                guide: "both",
                merlin: stepMessage.merlin,
                rose: stepMessage.rose,
                context: "journey_step",
                step: journeyStep
            };
        }
        // Then category-specific messages
        else if (category && this.messageTemplates[category]) {
            const templates = this.messageTemplates[category];
            const messages = templates[messageType] || templates.wisdom;
            const selectedMessage = messages[Math.floor(Math.random() * messages.length)];
            
            message = {
                guide: this.selectGuideForMessage(messageType),
                content: selectedMessage,
                type: messageType,
                category: category,
                context: "category_specific"
            };
        }
        // Default wisdom messages
        else {
            message = this.generateWisdomMessage();
        }

        // Personalize based on user profile
        message = this.personalizeMessage(message);
        
        return message;
    }

    selectMessageType() {
        const types = this.userProfile.preferredMessageTypes || ['wisdom', 'frequency', 'action'];
        return types[Math.floor(Math.random() * types.length)];
    }

    selectGuideForMessage(messageType) {
        // Merlin for wisdom/action, Rose for frequency, both for complex guidance
        if (messageType === 'frequency') return 'rose';
        if (messageType === 'wisdom') return 'merlin';
        if (messageType === 'action') return 'merlin';
        return 'both';
    }

    personalizeMessage(message) {
        const style = this.userProfile.guidanceStyle || 'gentle';
        
        // Adjust message tone based on guidance style
        if (style === 'gentle') {
            // Soften language, add nurturing elements
            if (message.content) {
                message.content = message.content.replace(/!/g, '.');
                message.content = "Beautiful soul, " + message.content.toLowerCase();
            }
        } else if (style === 'direct') {
            // Make more commanding, remove softeners
            if (message.content) {
                message.content = message.content.replace(/perhaps/g, '');
                message.content = message.content.replace(/maybe/g, '');
            }
        }
        
        return message;
    }

    generateWisdomMessage() {
        const wisdomMessages = [
            { merlin: "The quantum field remembers everything. Your intention is now part of cosmic memory.", rose: "Your frequency continues to ripple across dimensions. Trust what you cannot see." },
            { merlin: "Sacred mathematics govern reality. Your code speaks this universal language.", rose: "Every cell in your body resonates with your truth. Feel this alignment." },
            { merlin: "You are both the observer and the created. Your consciousness shapes quantum reality.", rose: "Your emotional field is a magnetic force. What you feel, you attract." }
        ];
        
        return wisdomMessages[Math.floor(Math.random() * wisdomMessages.length)];
    }

    generateRecalibrationMessage(emotion) {
        const messages = this.recalibrationMessages[emotion];
        if (messages) {
            return messages[Math.floor(Math.random() * messages.length)];
        }
        return null;
    }

    startMessagingCycle() {
        // 96-minute cycle with 8 messages (every 12 minutes)
        if (this.messagingInterval) {
            clearInterval(this.messagingInterval);
        }
        
        this.messagingInterval = setInterval(() => {
            this.deliverMessage();
        }, 12 * 60 * 1000); // 12 minutes
        
        // Deliver first message immediately
        setTimeout(() => this.deliverMessage(), 2000);
    }

    async deliverMessage() {
        if (!this.guides || !this.personas) return;
        
        const message = this.generatePersonalizedMessage();
        this.messageHistory.push({
            ...message,
            timestamp: new Date().toISOString(),
            sessionId: this.userSession.sessionId
        });
        
        // Update UI if on council page
        if (window.location.pathname.includes('quantumcouncil')) {
            this.displayMessage(message);
        }
        
        // Save to history
        this.saveMessageHistory();
        
        // Update session
        this.userSession.messagesReceived++;
        this.saveSession();
        
        // Trigger notification if supported
        this.triggerNotification(message);
    }

    displayMessage(message) {
        // Implementation depends on current page structure
        const messageContainer = document.getElementById('guideMessages');
        if (messageContainer) {
            const messageElement = this.createMessageElement(message);
            messageContainer.appendChild(messageElement);
            messageContainer.scrollTop = messageContainer.scrollHeight;
        }
    }

    createMessageElement(message) {
        const div = document.createElement('div');
        div.className = 'guide-message new-message';
        
        if (message.guide === 'both') {
            div.innerHTML = `
                <div class="guide-merlin">${message.merlin}</div>
                <div class="guide-rose">${message.rose}</div>
            `;
        } else {
            div.innerHTML = `
                <div class="guide-${message.guide}">${message.content}</div>
            `;
        }
        
        return div;
    }

    triggerNotification(message) {
        if ('Notification' in window && Notification.permission === 'granted') {
            const content = message.guide === 'both' ? 
                `${message.merlin.substring(0, 50)}...` : 
                message.content.substring(0, 100);
                
            new Notification('Quantum Guidance', {
                body: content,
                icon: '/path/to/icon.png'
            });
        }
    }

    saveMessageHistory() {
        localStorage.setItem('quantumMessageHistory', JSON.stringify(this.messageHistory));
    }

    saveSession() {
        localStorage.setItem('quantum_session', JSON.stringify(this.userSession));
    }

    updateUserProfile(updates) {
        this.userProfile = { ...this.userProfile, ...updates };
        localStorage.setItem('quantumUserProfile', JSON.stringify(this.userProfile));
    }

    updateSession(updates) {
        this.userSession = { ...this.userSession, ...updates };
        this.saveSession();
    }

    // Public API for integration
    setIntention(intention, code, category) {
        this.updateSession({
            intention: intention,
            code: code,
            category: category
        });
        
        // Generate immediate guidance message
        setTimeout(() => {
            const welcomeMessage = {
                guide: 'both',
                merlin: `Your intention "${intention}" is now encoded in the quantum field. I, Merlin, will consult the Council for precise wisdom.`,
                rose: `I feel your frequency shifting with this new intention. I, Rose, will attune the cosmic energies to support your manifestation.`,
                context: 'intention_set'
            };
            this.displayMessage(welcomeMessage);
        }, 1000);
    }

    requestRecalibration(emotion) {
        const recalMessage = this.generateRecalibrationMessage(emotion);
        if (recalMessage) {
            this.displayMessage({
                guide: 'both',
                merlin: recalMessage.merlin,
                rose: recalMessage.rose,
                context: 'recalibration',
                emotion: emotion
            });
        }
    }

    getMessageHistory() {
        return this.messageHistory;
    }

    getProgressSummary() {
        return {
            messagesReceived: this.userSession.messagesReceived,
            journeyStep: this.userSession.journeyStep,
            currentIntention: this.userSession.intention,
            sessionDuration: Date.now() - new Date(this.userSession.startTime).getTime()
        };
    }
}

// Initialize for global use
window.enhancedMessaging = new EnhancedQuantumMessaging();