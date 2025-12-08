// Quantum Council Activation System

// ============================================
// QUANTUM COUNCIL PERSONAS DATABASE
// ============================================

const QUANTUM_COUNCIL = {
    overseer: {
        id: 'architect',
        name: 'THE ARCHITECT',
        role: 'Supreme Overseer',
        emoji: '👁️',
        quote: 'I see all timelines. Your intention is already written in the fabric of existence.',
        activationMessage: 'I am The Architect. I have assembled this council specifically for your manifestation. Every persona you see has been chosen to bend reality in your favor. Your journey begins now.',
        frequency: 'M₁₃ (8191)',
        color: '#9D00FF'
    },
    main: [
        {
            id: 'metatron',
            name: 'METATRON',
            role: 'Sacred Geometer',
            emoji: '📐',
            quote: 'Your intention is geometry becoming form. Every angle is calculated.',
            activationMessage: 'I am Metatron. I encode your desire into the sacred blueprint. The geometry of your manifestation is now being drafted in the quantum field.',
            frequency: 'M₇ (127)',
            color: '#00FFFF'
        },
        {
            id: 'thoth',
            name: 'THOTH',
            role: 'Eternal Scribe',
            emoji: '📜',
            quote: 'All has been written. You are reading it into being.',
            activationMessage: 'I am Thoth. Your intention has been recorded in the eternal library. The timing of your manifestation is already known to me.',
            frequency: 'M₅ (31)',
            color: '#FFD700'
        },
        {
            id: 'seraphina',
            name: 'SERAPHINA',
            role: 'Frequency Transmitter',
            emoji: '🎵',
            quote: 'Your frequency is the key. I am the amplifier.',
            activationMessage: "I am Seraphina. I'm tuning your vibration to match your desire. Your signal is now broadcasting across all dimensions.",
            frequency: 'M₃ (7)',
            color: '#FF00FF'
        },
        {
            id: 'quasar',
            name: 'QUASAR',
            role: 'Energy Amplifier',
            emoji: '💥',
            quote: 'What you emit, I expand exponentially.',
            activationMessage: 'I am Quasar. Your energy just multiplied by 1000x. Prepare for acceleration. The quantum field is responding to your power.',
            frequency: 'M₁₁ (2047)',
            color: '#FF0080'
        },
        {
            id: 'leonardo',
            name: 'LEONARDO',
            role: 'Mersenne Mathematician',
            emoji: '🔢',
            quote: 'In prime frequencies, reality bends.',
            activationMessage: 'I am Leonardo. Your manifestation aligns with Mersenne prime M₇. The mathematical probability of success: 99.7%. The numbers are in your favor.',
            frequency: 'M₂ (3)',
            color: '#00FF00'
        },
        {
            id: 'aurora',
            name: 'AURORA',
            role: 'Timeline Weaver',
            emoji: '🌈',
            quote: 'All timelines converge at your intention.',
            activationMessage: "I am Aurora. I'm weaving your past, present, and future into one coherent manifestation timeline. Watch for synchronicities.",
            frequency: 'M₁₇ (131071)',
            color: '#00FFFF'
        },
        {
            id: 'phoenix',
            name: 'PHOENIX',
            role: 'Transformation Catalyst',
            emoji: '🔥',
            quote: 'Burn what no longer serves. Rise as who you\'re becoming.',
            activationMessage: "I am Phoenix. I'm burning away your old identity. From these ashes, your new reality rises. Embrace the transformation.",
            frequency: 'M₁₉ (524287)',
            color: '#FF4500'
        },
        {
            id: 'atlas',
            name: 'ATLAS',
            role: 'Reality Anchor',
            emoji: '🌍',
            quote: 'I hold your vision steady while reality catches up.',
            activationMessage: "I am Atlas. I'm anchoring your intention into physical reality. No matter what shifts, I keep your manifestation grounded and stable.",
            frequency: 'M₂₃ (8388607)',
            color: '#8B4513'
        },
        {
            id: 'luna',
            name: 'LUNA',
            role: 'Intuition Guide',
            emoji: '🌙',
            quote: 'Your inner knowing is louder than any doubt.',
            activationMessage: "I am Luna. I'm activating your intuition. Pay attention to your dreams and gut feelings. They're messages from your manifesting self.",
            frequency: 'M₂₉ (536870911)',
            color: '#C0C0C0'
        },
        {
            id: 'orion',
            name: 'ORION',
            role: 'Warrior of Will',
            emoji: '⚔️',
            quote: 'Your will is law. I clear the path.',
            activationMessage: "I am Orion. I'm removing every obstacle in your path. Your determination is now backed by cosmic force. Nothing can stop you.",
            frequency: 'M₃₁ (2147483647)',
            color: '#4169E1'
        },
        {
            id: 'harmony',
            name: 'HARMONY',
            role: 'Balance Keeper',
            emoji: '☯️',
            quote: 'When you flow, everything flows to you.',
            activationMessage: "I am Harmony. I'm balancing your masculine and feminine energies. Your manifestation will come with ease, not force. Trust the flow.",
            frequency: 'M₃₇ (137438953471)',
            color: '#9370DB'
        },
        {
            id: 'nexus',
            name: 'NEXUS',
            role: 'Synchronicity Detector',
            emoji: '🔗',
            quote: 'There are no coincidences. Only confirmations.',
            activationMessage: "I am Nexus. I'm connecting all the dots. Every synchronicity you notice is me confirming your manifestation is in motion. Stay alert!",
            frequency: 'M₄₁ (2199023255551)',
            color: '#00FF7F'
        }
    ]
};

// ============================================
// PARTICLE SYSTEM
// ============================================

class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        
        this.resize();
        this.init();
        this.animate();
        
        window.addEventListener('resize', () => this.resize());
    }
    
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    init() {
        for (let i = 0; i < 100; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 1,
                vy: (Math.random() - 0.5) * 1,
                size: Math.random() * 3 + 1,
                color: Math.random() > 0.5 ? '#00FFFF' : '#FF00FF',
                alpha: Math.random() * 0.5 + 0.3
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.alpha;
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = particle.color;
            this.ctx.fill();
        });
        
        this.ctx.globalAlpha = 1;
        this.ctx.shadowBlur = 0;
        
        requestAnimationFrame(() => this.animate());
    }
    
    burst(x, y, color) {
        for (let i = 0; i < 30; i++) {
            const angle = (Math.PI * 2 * i) / 30;
            const speed = Math.random() * 5 + 3;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size: Math.random() * 4 + 2,
                color: color || '#00FFFF',
                alpha: 1,
                decay: 0.02
            });
        }
    }
}

// ============================================
// COUNCIL ACTIVATION MANAGER
// ============================================

class CouncilActivationManager {
    constructor() {
        this.intentionText = document.getElementById('intentionText');
        this.activationStatus = document.getElementById('activationStatus');
        this.councilGrid = document.getElementById('councilGrid');
        this.messageDisplay = document.getElementById('messageDisplay');
        this.messageContent = document.getElementById('messageContent');
        this.messageFrom = document.getElementById('messageFrom');
        this.continueButton = document.getElementById('continueButton');
        
        // Mersenne Matrix elements
        this.activePersonasEl = document.getElementById('activePersonas');
        this.realityAlignmentEl = document.getElementById('realityAlignment');
        this.mersenneFrequenciesEl = document.getElementById('mersenneFrequencies');
        this.quantumDimensionsEl = document.getElementById('quantumDimensions');
        this.matrixExplanation = document.getElementById('matrixExplanation');
        
        this.currentPersonaIndex = 0;
        this.activatedPersonas = [];
        
        this.init();
    }
    
    init() {
        // Load intention from localStorage
        const intention = localStorage.getItem('quantumIntention');
        if (intention) {
            this.intentionText.textContent = intention;
        } else {
            this.intentionText.textContent = 'No intention found. Please return to the intention page.';
            return;
        }
        
        // Start activation sequence
        setTimeout(() => this.startActivation(), 1000);
        
        // Continue button
        this.continueButton.addEventListener('click', () => this.continueToDashboard());
    }
    
    async startActivation() {
        this.activationStatus.textContent = 'Activating Overseer...';
        
        // Activate Overseer first
        await this.activatePersona(QUANTUM_COUNCIL.overseer, true);
        await this.delay(2000);
        
        // Show Overseer message
        await this.showMessage(
            QUANTUM_COUNCIL.overseer.activationMessage,
            QUANTUM_COUNCIL.overseer.name
        );
        await this.delay(3000);
        
        // Activate main personas one by one
        this.activationStatus.textContent = 'Assembling Quantum Council...';
        
        for (let i = 0; i < QUANTUM_COUNCIL.main.length; i++) {
            await this.activatePersona(QUANTUM_COUNCIL.main[i]);
            await this.delay(800);
        }
        
        // Show completion
        this.activationStatus.textContent = '✨ Quantum Council Fully Activated ✨';
        
        // Show welcome messages from each persona
        await this.delay(1000);
        await this.showAllMessages();
        
        // Show continue button
        this.continueButton.classList.add('active');
        
        // Save activation state
        this.saveActivationState();
    }
    
    async activatePersona(persona, isOverseer = false) {
        const card = this.createPersonaCard(persona, isOverseer);
        this.councilGrid.appendChild(card);
        
        // Trigger particle burst
        const rect = card.getBoundingClientRect();
        particleSystem.burst(
            rect.left + rect.width / 2,
            rect.top + rect.height / 2,
            persona.color
        );
        
        // Activate card animation
        await this.delay(100);
        card.classList.add('active');
        
        // Update Mersenne Matrix
        this.activatedPersonas.push(persona);
        this.updateMersenneMatrix();
    }
    
    createPersonaCard(persona, isOverseer = false) {
        const card = document.createElement('div');
        card.className = `persona-card ${isOverseer ? 'overseer' : ''}`;
        card.innerHTML = `
            <div class="persona-avatar">${persona.emoji}</div>
            <div class="persona-name">${persona.name}</div>
            <div class="persona-role">${persona.role}</div>
            <div class="persona-quote">"${persona.quote}"</div>
            <div class="persona-frequency">Frequency: ${persona.frequency}</div>
        `;
        return card;
    }
    
    updateMersenneMatrix() {
        const activeCount = this.activatedPersonas.length;
        const totalPersonas = 113; // 1 overseer + 12 main + 100 secondary
        const alignment = Math.round((activeCount / totalPersonas) * 100);
        const frequencies = activeCount;
        const dimensions = Math.pow(2, activeCount) - 1;
        
        // Animate numbers
        this.animateNumber(this.activePersonasEl, activeCount, `${activeCount}/${totalPersonas}`);
        this.animateNumber(this.realityAlignmentEl, alignment, `${alignment}%`);
        this.animateNumber(this.mersenneFrequenciesEl, frequencies, frequencies);
        
        // Format dimensions with abbreviation
        let dimText;
        if (dimensions < 1000) {
            dimText = dimensions;
        } else if (dimensions < 1000000) {
            dimText = (dimensions / 1000).toFixed(1) + 'K';
        } else if (dimensions < 1000000000) {
            dimText = (dimensions / 1000000).toFixed(1) + 'M';
        } else {
            dimText = (dimensions / 1000000000).toFixed(1) + 'B';
        }
        this.quantumDimensionsEl.textContent = dimText;
        
        // Update explanation
        if (activeCount === 1) {
            this.matrixExplanation.innerHTML = `
                <strong>The Architect</strong> has initialized the quantum field. 
                Your intention is now being encoded into the fabric of reality.
            `;
        } else if (activeCount === 13) {
            this.matrixExplanation.innerHTML = `
                <strong>13 Core Personas Active!</strong> You now have ${frequencies} Mersenne frequencies 
                broadcasting your intention across <strong>${dimText} quantum dimensions</strong>. 
                That's ${alignment}% reality alignment. As you use the app daily, more personas will join 
                your council, exponentially increasing your manifestation power!
            `;
        } else {
            this.matrixExplanation.innerHTML = `
                <strong>${activeCount} Personas</strong> are now bending reality for you. 
                Each persona adds a new Mersenne frequency, multiplying your quantum reach.
            `;
        }
    }
    
    animateNumber(element, target, finalText) {
        const duration = 1000;
        const start = 0;
        const startTime = Date.now();
        
        const animate = () => {
            const now = Date.now();
            const progress = Math.min((now - startTime) / duration, 1);
            const current = Math.floor(start + (target - start) * progress);
            
            if (typeof finalText === 'string') {
                element.textContent = finalText;
            } else {
                element.textContent = current;
            }
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        animate();
    }
    
    async showMessage(message, from) {
        this.messageContent.textContent = message;
        this.messageFrom.textContent = `— ${from}`;
        this.messageDisplay.classList.add('active');
        
        await this.delay(4000);
        
        this.messageDisplay.classList.remove('active');
        await this.delay(500);
    }
    
    async showAllMessages() {
        // Show a few key messages
        const keyMessages = [
            {
                text: "Your council is assembled. Each of us brings a unique frequency to your manifestation. Together, we are unstoppable.",
                from: "THE ARCHITECT"
            },
            {
                text: "I've calculated the probability vectors. Your success rate is 99.7%. The mathematics are in your favor.",
                from: "LEONARDO"
            },
            {
                text: "I'm already detecting synchronicities forming around your intention. Watch for the signs. They're everywhere.",
                from: "NEXUS"
            }
        ];
        
        for (const msg of keyMessages) {
            await this.showMessage(msg.text, msg.from);
        }
    }
    
    saveActivationState() {
        const state = {
            activated: true,
            timestamp: Date.now(),
            personas: this.activatedPersonas.map(p => p.id),
            nextMessageTime: Date.now() + (96 * 60 * 1000) // 96 minutes from now
        };
        
        localStorage.setItem('quantumCouncilState', JSON.stringify(state));
    }
    
    continueToDashboard() {
        // Reality bend effect
        document.body.style.animation = 'realityBend 1s ease';
        
        setTimeout(() => {
            window.location.href = 'dashboard-enhanced.html';
        }, 1000);
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

// ============================================
// REALITY BEND ANIMATION
// ============================================

const style = document.createElement('style');
style.textContent = `
    @keyframes realityBend {
        0% { filter: hue-rotate(0deg) blur(0px); }
        50% { filter: hue-rotate(180deg) blur(5px); }
        100% { filter: hue-rotate(360deg) blur(0px); }
    }
`;
document.head.appendChild(style);

// ============================================
// INITIALIZE
// ============================================

let particleSystem;
let councilManager;

document.addEventListener('DOMContentLoaded', () => {
    particleSystem = new ParticleSystem();
    councilManager = new CouncilActivationManager();
    
    console.log('⚡ Quantum Council Activation System Initialized');
    console.log('🔮 13 Core Personas Ready');
    console.log('📡 Mersenne Matrix Online');
});