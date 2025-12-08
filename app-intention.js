// Quantum Intention Manifestation System - Core JavaScript

// ============================================
// PARTICLE SYSTEM
// ============================================

class ParticleSystem {
    constructor() {
        this.canvas = document.getElementById('particleCanvas');
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.particleCount = 50;
        this.isTyping = false;
        
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
        this.particles = [];
        for (let i = 0; i < this.particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                color: Math.random() > 0.5 ? '#00FFFF' : '#FF00FF',
                alpha: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Update and draw particles
        this.particles.forEach(particle => {
            // Update position
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = this.canvas.width;
            if (particle.x > this.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = this.canvas.height;
            if (particle.y > this.canvas.height) particle.y = 0;
            
            // Draw particle
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = particle.color;
            this.ctx.globalAlpha = particle.alpha;
            this.ctx.fill();
            
            // Add glow effect when typing
            if (this.isTyping) {
                this.ctx.shadowBlur = 20;
                this.ctx.shadowColor = particle.color;
            } else {
                this.ctx.shadowBlur = 10;
            }
        });
        
        // Draw connections
        this.particles.forEach((p1, i) => {
            this.particles.slice(i + 1).forEach(p2 => {
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = '#00FFFF';
                    this.ctx.globalAlpha = (1 - distance / 150) * 0.2;
                    this.ctx.lineWidth = 1;
                    this.ctx.stroke();
                }
            });
        });
        
        this.ctx.globalAlpha = 1;
        this.ctx.shadowBlur = 0;
        
        requestAnimationFrame(() => this.animate());
    }
    
    burst(x, y) {
        // Create burst effect at specific location
        for (let i = 0; i < 20; i++) {
            const angle = (Math.PI * 2 * i) / 20;
            const speed = Math.random() * 3 + 2;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                size: Math.random() * 3 + 2,
                color: Math.random() > 0.5 ? '#00FFFF' : '#FF00FF',
                alpha: 1,
                life: 60
            });
        }
    }
}

// ============================================
// INTENTION MANAGER
// ============================================

class IntentionManager {
    constructor() {
        this.intentionText = document.getElementById('intentionText');
        this.charCount = document.getElementById('charCount');
        this.activateButton = document.getElementById('activateButton');
        this.loadingState = document.getElementById('loadingState');
        this.intentionCard = document.getElementById('intentionCard');
        
        this.minLength = 20;
        this.intention = '';
        
        this.init();
    }
    
    init() {
        // Load saved intention if exists
        const saved = localStorage.getItem('quantumIntention');
        if (saved) {
            this.intentionText.value = saved;
            this.updateCharCount();
        }
        
        // Event listeners
        this.intentionText.addEventListener('input', () => this.handleInput());
        this.intentionText.addEventListener('focus', () => this.handleFocus());
        this.intentionText.addEventListener('blur', () => this.handleBlur());
        this.activateButton.addEventListener('click', () => this.activateCouncil());
        
        // Initial validation
        this.validateIntention();
    }
    
    handleInput() {
        this.updateCharCount();
        this.validateIntention();
        this.saveIntention();
        
        // Trigger particle effect
        particleSystem.isTyping = true;
        clearTimeout(this.typingTimeout);
        this.typingTimeout = setTimeout(() => {
            particleSystem.isTyping = false;
        }, 500);
    }
    
    handleFocus() {
        particleSystem.isTyping = true;
    }
    
    handleBlur() {
        particleSystem.isTyping = false;
    }
    
    updateCharCount() {
        const length = this.intentionText.value.length;
        this.charCount.textContent = length;
        
        // Color coding
        if (length < this.minLength) {
            this.charCount.style.color = 'rgba(255, 0, 255, 0.5)';
        } else {
            this.charCount.style.color = 'rgba(0, 255, 255, 0.8)';
        }
    }
    
    validateIntention() {
        const length = this.intentionText.value.trim().length;
        
        if (length >= this.minLength) {
            this.activateButton.disabled = false;
            this.activateButton.textContent = '🌟 Activate Quantum Council 🌟';
        } else {
            this.activateButton.disabled = true;
            this.activateButton.textContent = `✍️ Write at least ${this.minLength} characters...`;
        }
    }
    
    saveIntention() {
        localStorage.setItem('quantumIntention', this.intentionText.value);
    }
    
    activateCouncil() {
        this.intention = this.intentionText.value.trim();
        
        if (this.intention.length < this.minLength) {
            alert('Please write a more detailed intention (at least 20 characters)');
            return;
        }
        
        // Save to localStorage
        localStorage.setItem('quantumIntention', this.intention);
        localStorage.setItem('quantumActivationTime', Date.now());
        
        // Show loading state
        this.activateButton.style.display = 'none';
        this.loadingState.classList.add('active');
        
        // Trigger particle burst
        const rect = this.activateButton.getBoundingClientRect();
        particleSystem.burst(rect.left + rect.width / 2, rect.top + rect.height / 2);
        
        // Simulate loading and transition
        setTimeout(() => {
            this.transitionToCouncil();
        }, 2000);
    }
    
    transitionToCouncil() {
        // Reality bend effect
        document.body.style.animation = 'realityBend 1s ease';
        
        setTimeout(() => {
            // Redirect to council activation page
            window.location.href = 'council-activation.html';
        }, 1000);
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
let intentionManager;

document.addEventListener('DOMContentLoaded', () => {
    particleSystem = new ParticleSystem();
    intentionManager = new IntentionManager();
    
    console.log('🌟 Quantum Intention System Initialized');
    console.log('⚡ Particle System Active');
    console.log('🔮 Ready to manifest...');
});