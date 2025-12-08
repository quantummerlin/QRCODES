// Quantum Reality Code - Guide Messaging System
// Implements Quantum Merlin & Rose with 77 persona council

class QuantumGuideMessaging {
    constructor() {
        this.guides = null;
        this.personas = null;
        this.messageHistory = [];
        this.currentCycle = 0;
        this.messgaeInterval = null;
        this.userSession = this.initializeSession();
        this.loadGuideData();
    }

    async loadGuideData() {
        try {
            // Load guides
            const guidesResponse = await fetch('quantum-guides.json');
            this.guides = await guidesResponse.json();
            
            // Load personas
            const personasResponse = await fetch('personas_database.json');
            this.personas = await personasResponse.json();
            
            console.log('Guide system initialized');
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
        
        return {
            startTime: Date.now(),
            messageCount: 0,
            activatedPersonas: [],
            quantumCode: null,
            intention: null
        };
    }

    startMessagingCycle(quantumCode, intention) {
        this.userSession.quantumCode = quantumCode;
        this.userSession.intention = intention;
        this.saveSession();
        
        // Start 96-minute messaging cycle (57.6 minutes = 3456000ms for demo)
        const cycleDuration = 3456000; // 57.6 minutes for demo, real would be 5760000ms (96 minutes)
        
        // Generate initial council
        this.generateQuantumCouncil(quantumCode);
        
        // Start regular messaging
        this.messageInterval = setInterval(() => {
            this.deliverQuantumMessage();
        }, cycleDuration);
        
        // Deliver first message immediately
        this.deliverQuantumMessage();
    }

    generateQuantumCouncil(quantumCode) {
        if (!this.personas) return [];
        
        const allPersonas = [
            ...(this.personas.core_trinity || []),
            ...(this.personas.light_personas || []),
            ...(this.personas.shadow_personas || []),
            ...(this.personas.meta_mystic_personas || [])
        ];
        
        // Select 7 council members based on quantum code
        const council = [];
        const usedIndices = new Set();
        
        for (let i = 0; i < 7; i++) {
            let index;
            do {
                index = (quantumCode * (i + 1) * 7) % allPersonas.length;
            } while (usedIndices.has(index));
            
            usedIndices.add(index);
            council.push(allPersonas[index]);
        }
        
        this.userSession.activatedPersonas = council;
        this.saveSession();
        
        return council;
    }

    deliverQuantumMessage() {
        const council = this.userSession.activatedPersonas;
        if (!council || council.length === 0) return;
        
        // Select persona for this message cycle
        const personaIndex = this.currentCycle % council.length;
        const persona = council[personaIndex];
        
        // Generate message through guides
        const message = this.generateGuidedMessage(persona, this.currentCycle);
        
        // Store and deliver
        this.messageHistory.push({
            timestamp: Date.now(),
            cycle: this.currentCycle,
            persona: persona.name || 'Unknown',
            role: persona.role || persona.focus || 'Quantum Guide',
            message: message,
            guide: 'Quantum Merlin & Quantum Rose'
        });
        
        this.userSession.messageCount++;
        this.currentCycle++;
        this.saveSession();
        
        // Display message
        this.displayQuantumMessage(message, persona);
        
        // Check for push notification
        this.schedulePushNotification(message, persona);
    }

    generateGuidedMessage(persona, cycleNumber) {
        const merlin = this.guides.quantum_merlin;
        const rose = this.guides.quantum_rose;
        
        // Create message as if delivered through the guides
        const merlinSynthesis = `"I have consulted with ${persona.name}, ${persona.role || persona.focus}. Their wisdom for your manifestation journey: ${this.generatePersonaMessage(persona, cycleNumber)}"`;
        
        const roseAttunement = `"Quantum Rose attunes: ${this.generateFrequencyGuidance(persona, cycleNumber)}"`;
        
        return {
            merlin_message: merlinSynthesis,
            rose_attunement: roseAttunement,
            combined: `${merlinSynthesis} → ${roseAttunement}`,
            persona_signature: persona.signature_quote || persona.signature_line || "Your intention shapes reality."
        };
    }

    generatePersonaMessage(persona, cycle) {
        const messages = {
            // Light personas
            "Gautama Buddha": [
                "Stillness is the foundation of all manifestation. When you stop striving, allowing becomes your greatest power.",
                "Your desire creates ripples. Your stillness allows them to reach the shore.",
                "The middle path between wanting and having is where miracles unfold."
            ],
            "Tony Robbins": [
                "Massive action creates quantum momentum! Your state change triggers reality change!",
                "Decide now! Certainty is the frequency that collapses possibilities into reality.",
                "Your physiology is your quantum technology - use it to broadcast victory!"
            ],
            "Neville Goddard": [
                "Assume the feeling of your wish fulfilled. This assumption is the quantum code that rewrites reality.",
                "Your imagination is the quantum field. What you see and feel there manifests here.",
                "Living in the end state is the secret shortcut to quantum manifestation."
            ],
            // Shadow personas
            "The Doubt Disruptor": [
                "That doubt pattern you're feeling? That's old reality programming, not your truth.",
                "I interrupt the doubt loop. Your certainty is the only frequency that matters now.",
                "Doubt is just reality testing your resolve. Pass the test."
            ],
            "The Self-Sabotage Hacker": [
                "I detect a self-sabotage pattern attempting to activate. Override initiated.",
                "Your past success patterns are being challenged. This is growth, not failure.",
                "The part of you that fears success is being recalibrated to support expansion."
            ],
            // Meta-mystic personas
            "The Dream Coder": [
                "While you sleep, I encode your manifestation into your subconscious architecture.",
                "Your dreams tonight will quantum-encode your desired reality.",
                "The night realm remembers what your conscious mind forgets to believe."
            ],
            "The Pure Channel": [
                "I clear the interference between you and your quantum knowing.",
                "Your intuition is downloading precise guidance. Listen beyond the noise.",
                "Channel open. Quantum intelligence flowing through you now."
            ]
        };
        
        const personaMessages = messages[persona.name] || [
            "Your intention activates quantum resonance across all dimensions.",
            "The field responds to your clarity and emotional alignment.",
            "Quantum coherence is established through your focused intention."
        ];
        
        return personaMessages[cycle % personaMessages.length];
    }

    generateFrequencyGuidance(persona, cycle) {
        const frequencies = [
            "Your emotional field is now calibrated to manifestation frequency.",
            "I sense your vibration rising. Reality is beginning to rearrange.",
            "The resonance of your desire is now magnetic to its form.",
            "Your frequency signature has been upgraded in the quantum field.",
            "Emotional coherence achieved. Your manifestation pathway is clear."
        ];
        
        return frequencies[cycle % frequencies.length];
    }

    displayQuantumMessage(message, persona) {
        // Create message element
        const messageElement = document.createElement('div');
        messageElement.className = 'quantum-message';
        messageElement.innerHTML = `
            <div class="message-header">
                <span class="guide-label">Quantum Merlin & Quantum Rose</span>
                <span class="timestamp">${new Date().toLocaleTimeString()}</span>
            </div>
            <div class="persona-info">
                <strong>Council Member: ${persona.name || 'Quantum Guide'}</strong>
                <em>${persona.role || persona.focus || 'Manifestation Guide'}</em>
            </div>
            <div class="merlin-wisdom">
                <strong>Quantum Merlin:</strong> ${message.merlin_message}
            </div>
            <div class="rose-attunement">
                <strong>Quantum Rose:</strong> ${message.rose_attunement}
            </div>
            <div class="persona-signature">
                <em>"${message.persona_signature}"</em>
            </div>
        `;
        
        // Add to message container
        const container = document.getElementById('quantum-messages');
        if (container) {
            container.appendChild(messageElement);
            container.scrollTop = container.scrollHeight;
            
            // Add animation
            messageElement.style.opacity = '0';
            messageElement.style.transform = 'translateY(20px)';
            setTimeout(() => {
                messageElement.style.transition = 'all 0.5s ease';
                messageElement.style.opacity = '1';
                messageElement.style.transform = 'translateY(0)';
            }, 100);
        }
    }

    schedulePushNotification(message, persona) {
        if ('serviceWorker' in navigator && 'Notification' in window) {
            navigator.serviceWorker.ready.then(registration => {
                registration.showNotification('Quantum Guidance Received', {
                    body: `Council member ${persona.name} has new wisdom for your manifestation journey.`,
                    icon: '/assets/images/quantum-merlin-rose.png',
                    tag: `quantum-message-${Date.now()}`,
                    requireInteraction: true
                });
            });
        }
    }

    saveSession() {
        localStorage.setItem('quantum_session', JSON.stringify(this.userSession));
    }

    stopMessaging() {
        if (this.messageInterval) {
            clearInterval(this.messageInterval);
            this.messageInterval = null;
        }
    }

    getMessageHistory() {
        return this.messageHistory;
    }

    getCurrentSession() {
        return this.userSession;
    }
}

// Initialize global messaging system
window.quantumMessaging = new QuantumGuideMessaging();