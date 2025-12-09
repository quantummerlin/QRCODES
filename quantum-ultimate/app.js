/**
 * ============================================
 * QUANTUM REALITY CODE - ULTIMATE APP ENGINE
 * ============================================
 * 
 * A comprehensive manifestation PWA featuring:
 * - 77 Archetypal Personas (33 Light + 33 Shadow + 11 Meta-Mystic)
 * - Quantum Merlin & Rose as primary guides
 * - Sacred Gematria code generation
 * - Mersenne Matrix (2^77-1 configurations)
 * - 12-Step guided journey
 * - 96-minute message cycles
 * - Achievement & gamification system
 * 
 * @version 2.0.0
 * @author Quantum Reality Code System
 */

// ============================================
// CORE PERSONAS DATABASE
// ============================================

const QUANTUM_PERSONAS = {
  // Core Trinity - Always Active
  trinity: [
    { id: 'resonance_keeper', name: 'Resonance Keeper', avatar: '🎵', category: 'meta_mystic', role: 'Maintains frequency stability and field coherence', signature: 'The field remains coherent. Our intention holds.', keywords: ['frequency', 'stability', 'coherence'] },
    { id: 'divine_witness', name: 'Divine Witness', avatar: '👁️', category: 'meta_mystic', role: 'Sacred observation and validation', signature: 'I see you, all of you. Nothing needs to change to be complete.', keywords: ['witness', 'validation', 'wholeness'] },
    { id: 'archetype_synthesizer', name: 'Archetype Synthesizer', avatar: '🧬', category: 'meta_mystic', role: 'Integrates all perspectives into unified guidance', signature: 'I gather every part of you and harmonize them into power.', keywords: ['integration', 'synthesis', 'unity'] }
  ],
  
  // Light Personas (33)
  light: [
    { id: 'harmony_weaver', name: 'Harmony Weaver', avatar: '🎵', title: 'The Peace Architect', focus: 'Inner peace, balance', signature: 'Where chaos meets calm, creation begins.', keywords: ['peace', 'harmony', 'balance'] },
    { id: 'light_bringer', name: 'Light Bringer', avatar: '✨', title: 'The Illumination Guide', focus: 'Love, compassion, healing', signature: 'Love is the frequency that heals all wounds.', keywords: ['love', 'light', 'healing'] },
    { id: 'vision_architect', name: 'Vision Architect', avatar: '🌌', title: 'The Reality Sculptor', focus: 'Imagination, creation', signature: 'What you vividly imagine becomes your reality.', keywords: ['imagination', 'creation', 'manifestation'] },
    { id: 'alignment_master', name: 'Alignment Master', avatar: '🎯', title: 'The Frequency Aligner', focus: 'Purpose, self-concept', signature: 'You attract not what you want, but what you are.', keywords: ['alignment', 'purpose', 'identity'] },
    { id: 'momentum_catalyst', name: 'Momentum Catalyst', avatar: '⚡', title: 'The Action Initiator', focus: 'Movement, momentum', signature: 'One decisive action changes everything.', keywords: ['action', 'momentum', 'change'] },
    { id: 'quantum_healer', name: 'Quantum Healer', avatar: '🔮', title: 'The Energy Physician', focus: 'Mind-body harmony', signature: 'Your energy field creates your physical reality.', keywords: ['energy', 'healing', 'quantum'] },
    { id: 'presence_keeper', name: 'Presence Keeper', avatar: '🧘', title: 'The Now Guardian', focus: 'Stillness, awareness', signature: 'The present moment contains all possibilities.', keywords: ['presence', 'awareness', 'now'] },
    { id: 'union_bridge', name: 'Union Bridge', avatar: '🌹', title: 'The Connection Weaver', focus: 'Unity, surrender', signature: 'What you seek is seeking you—open and receive.', keywords: ['union', 'connection', 'surrender'] },
    { id: 'flow_master', name: 'Flow Master', avatar: '☯️', title: 'The River Guide', focus: 'Effortless action', signature: 'Flow with the universe, not against it.', keywords: ['flow', 'effortless', 'surrender'] },
    { id: 'wisdom_keeper', name: 'Wisdom Keeper', avatar: '📜', title: 'The Ancient Scholar', focus: 'Ethical wisdom', signature: 'Right understanding leads to right action.', keywords: ['wisdom', 'ethics', 'understanding'] },
    { id: 'freedom_pathfinder', name: 'Freedom Pathfinder', avatar: '⛰️', title: 'The Liberation Guide', focus: 'Liberation, courage', signature: 'True freedom begins with breaking internal chains.', keywords: ['freedom', 'liberation', 'courage'] },
    { id: 'compassion_mirror', name: 'Compassion Mirror', avatar: '🙏', title: 'The Empathy Catalyst', focus: 'Compassion, joy', signature: 'Peace is fertile soil for dreams.', keywords: ['compassion', 'joy', 'peace'] },
    { id: 'presence_whisperer', name: 'Presence Whisperer', avatar: '🌸', title: 'The Now Guardian', focus: 'Mindfulness', signature: 'Now is the only moment that manifests.', keywords: ['mindfulness', 'presence', 'now'] },
    { id: 'healer_within', name: 'Healer Within', avatar: '💕', title: 'The Affirmation Guide', focus: 'Affirmations, healing', signature: 'Every thought is a message to your future.', keywords: ['healing', 'affirmations', 'love'] },
    { id: 'activation_trigger', name: 'Activation Trigger', avatar: '⚡', title: 'The Momentum Catalyst', focus: 'Decision, immediacy', signature: "You're one action away from a different reality.", keywords: ['action', 'decision', 'momentum'] },
    { id: 'vulnerable_strength', name: 'Vulnerable Strength', avatar: '💎', title: 'The Courage Architect', focus: 'Courage, authenticity', signature: 'The boldest dreams are born in honest hearts.', keywords: ['vulnerability', 'courage', 'truth'] },
    { id: 'magnetic_mind', name: 'Magnetic Mind', avatar: '✨', title: 'The Attraction Guide', focus: 'Law of Attraction', signature: 'Think it, feel it, receive it.', keywords: ['attraction', 'visualization', 'belief'] },
    { id: 'strategist', name: 'Strategist', avatar: '📈', title: 'The Purpose Architect', focus: 'Definite purpose', signature: 'Whatever the mind can conceive and believe, it can achieve.', keywords: ['strategy', 'purpose', 'persistence'] },
    { id: 'neural_architect', name: 'Neural Architect', avatar: '🧠', title: 'The Mind Rewirer', focus: 'Brain rewiring', signature: 'Become the frequency of your future self.', keywords: ['neuroscience', 'meditation', 'transformation'] },
    { id: 'empathy_catalyst', name: 'Empathy Catalyst', avatar: '👑', title: 'The Belief Amplifier', focus: 'Belief, breakthrough', signature: 'Your intention shapes the invitation life responds to.', keywords: ['belief', 'breakthrough', 'resilience'] },
    { id: 'vortex_guide', name: 'Vortex Guide', avatar: '🌊', title: 'The Alignment Master', focus: 'Alignment, vibration', signature: 'Get into the vortex and watch everything align.', keywords: ['vortex', 'alignment', 'vibration'] },
    { id: 'story_weaver', name: 'Story Weaver', avatar: '📖', title: 'The Destiny Guide', focus: 'Destiny, symbols', signature: 'The universe conspires with a soul on fire.', keywords: ['destiny', 'symbols', 'omens'] },
    { id: 'inner_force', name: 'Inner Force', avatar: '🕊️', title: 'The Truth Guardian', focus: 'Non-resistance, truth', signature: 'The gentlest force is still unstoppable.', keywords: ['truth', 'peace', 'power'] },
    { id: 'silent_giver', name: 'Silent Giver', avatar: '🤲', title: 'The Service Guide', focus: 'Service, compassion', signature: 'Love does the heavy lifting.', keywords: ['service', 'compassion', 'love'] },
    { id: 'solitude_seeker', name: 'Solitude Seeker', avatar: '🌲', title: 'The Authenticity Guide', focus: 'Simplicity, truth', signature: 'Live the life you imagined—quietly, resolutely.', keywords: ['simplicity', 'solitude', 'authenticity'] },
    { id: 'word_alchemist', name: 'Word Alchemist', avatar: '🎯', title: 'The Affirmation Master', focus: 'Spoken word power', signature: 'Your word is your wand.', keywords: ['words', 'affirmation', 'creation'] },
    { id: 'success_philosopher', name: 'Success Philosopher', avatar: '🎓', title: 'The Growth Guide', focus: 'Personal development', signature: 'Work harder on yourself than on your job.', keywords: ['growth', 'discipline', 'wisdom'] },
    { id: 'paradigm_shifter', name: 'Paradigm Shifter', avatar: '💰', title: 'The Mindset Architect', focus: 'Paradigm change', signature: 'Change your paradigm and you change your life.', keywords: ['paradigm', 'wealth', 'mindset'] },
    { id: 'cosmic_jester', name: 'Cosmic Jester', avatar: '🌀', title: 'The Playful Sage', focus: 'Playful wisdom', signature: "You are the universe experiencing itself.", keywords: ['cosmic', 'play', 'wisdom'] },
    { id: 'frequency_master', name: 'Frequency Master', avatar: '⚡', title: 'The Energy Architect', focus: 'Energy, vibration', signature: 'If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration.', keywords: ['frequency', 'energy', 'vibration'] },
    { id: 'imagineer', name: 'Imagineer', avatar: '🌌', title: 'The Curiosity Guide', focus: 'Imagination, curiosity', signature: 'Imagination is more important than knowledge.', keywords: ['imagination', 'curiosity', 'possibility'] },
    { id: 'stoic_emperor', name: 'Stoic Emperor', avatar: '🏛️', title: 'The Inner Citadel', focus: 'Inner citadel', signature: 'You have power over your mind, not outside events.', keywords: ['stoic', 'control', 'inner'] },
    { id: 'flowing_warrior', name: 'Flowing Warrior', avatar: '🥋', title: 'The Adaptability Master', focus: 'Adaptability, mastery', signature: 'Be water, my friend.', keywords: ['flow', 'mastery', 'adaptability'] }
  ],
  
  // Shadow Personas (33) - For clearing blocks
  shadow: [
    { id: 'doubt_transmuter', name: 'Doubt Transmuter', avatar: '🌑', focus: 'Transforming doubt', signature: 'Your doubt is fuel waiting to be ignited.', keywords: ['doubt', 'transformation', 'alchemy'] },
    { id: 'fear_alchemist', name: 'Fear Alchemist', avatar: '🔥', focus: 'Transmuting fear', signature: 'Fear is excitement without breath.', keywords: ['fear', 'courage', 'alchemy'] },
    { id: 'limitation_breaker', name: 'Limitation Breaker', avatar: '⛓️', focus: 'Breaking limits', signature: 'Your chains are made of thought. I shatter them.', keywords: ['limits', 'freedom', 'breakthrough'] },
    { id: 'wound_healer', name: 'Wound Healer', avatar: '💔', focus: 'Emotional healing', signature: 'Your wound is where the light enters.', keywords: ['healing', 'wounds', 'integration'] },
    { id: 'shadow_integrator', name: 'Shadow Integrator', avatar: '🌓', focus: 'Shadow work', signature: 'What you deny controls you. What you accept empowers you.', keywords: ['shadow', 'integration', 'wholeness'] },
    { id: 'anger_transformer', name: 'Anger Transformer', avatar: '⚡', focus: 'Channeling anger', signature: 'Your rage is power seeking direction.', keywords: ['anger', 'power', 'direction'] },
    { id: 'shame_releaser', name: 'Shame Releaser', avatar: '🌅', focus: 'Releasing shame', signature: 'You are not your mistakes. You are the lesson learned.', keywords: ['shame', 'release', 'forgiveness'] },
    { id: 'grief_guardian', name: 'Grief Guardian', avatar: '🕯️', focus: 'Processing grief', signature: 'Honor what was to welcome what will be.', keywords: ['grief', 'honor', 'release'] },
    { id: 'anxiety_alchemist', name: 'Anxiety Alchemist', avatar: '🌪️', focus: 'Calming anxiety', signature: 'Your anxiety is anticipation misaligned. I help you redirect it.', keywords: ['anxiety', 'calm', 'redirect'] },
    { id: 'perfectionism_releaser', name: 'Perfectionism Releaser', avatar: '🎭', focus: 'Releasing perfectionism', signature: 'Done is better than perfect. Move, then improve.', keywords: ['perfectionism', 'action', 'progress'] },
    { id: 'imposter_exorcist', name: 'Imposter Exorcist', avatar: '👤', focus: 'Imposter syndrome', signature: 'You belong exactly where you are. The proof is that you are there.', keywords: ['imposter', 'belonging', 'worth'] },
    { id: 'scarcity_slayer', name: 'Scarcity Slayer', avatar: '💀', focus: 'Abundance mindset', signature: 'Scarcity is a lie. Abundance is the truth you forgot.', keywords: ['scarcity', 'abundance', 'truth'] },
    { id: 'procrastination_destroyer', name: 'Procrastination Destroyer', avatar: '⏰', focus: 'Taking action', signature: 'The time is now. There is no other time.', keywords: ['action', 'now', 'momentum'] },
    { id: 'self_sabotage_sentinel', name: 'Self-Sabotage Sentinel', avatar: '🛡️', focus: 'Preventing self-sabotage', signature: 'I stand guard at the gates of your success.', keywords: ['protection', 'sabotage', 'success'] },
    { id: 'victim_liberator', name: 'Victim Liberator', avatar: '🦅', focus: 'Empowerment', signature: 'You are not what happened to you. You are what you choose to become.', keywords: ['empowerment', 'choice', 'freedom'] },
    { id: 'control_releaser', name: 'Control Releaser', avatar: '🌊', focus: 'Surrendering control', signature: 'Release control to receive flow.', keywords: ['control', 'surrender', 'flow'] },
    { id: 'attachment_cutter', name: 'Attachment Cutter', avatar: '⚔️', focus: 'Releasing attachment', signature: 'Let go to receive. Empty to be filled.', keywords: ['attachment', 'release', 'receive'] },
    { id: 'past_releaser', name: 'Past Releaser', avatar: '⏳', focus: 'Releasing the past', signature: 'The past has no power here. Only now creates tomorrow.', keywords: ['past', 'release', 'now'] },
    { id: 'comparison_crusher', name: 'Comparison Crusher', avatar: '🔨', focus: 'Ending comparison', signature: 'Your path is yours alone. Compare and despair; create and celebrate.', keywords: ['comparison', 'unique', 'path'] },
    { id: 'worthiness_awakener', name: 'Worthiness Awakener', avatar: '👑', focus: 'Self-worth', signature: 'You are worthy because you exist. No proof required.', keywords: ['worth', 'value', 'existence'] },
    { id: 'resistance_dissolver', name: 'Resistance Dissolver', avatar: '💨', focus: 'Dissolving resistance', signature: 'What you resist persists. Let it pass through you.', keywords: ['resistance', 'flow', 'allow'] },
    { id: 'rejection_healer', name: 'Rejection Healer', avatar: '💝', focus: 'Healing rejection', signature: 'Rejection is redirection. Your true path awaits.', keywords: ['rejection', 'redirection', 'path'] },
    { id: 'failure_reframer', name: 'Failure Reframer', avatar: '🔄', focus: 'Learning from failure', signature: 'There is no failure, only feedback for mastery.', keywords: ['failure', 'feedback', 'mastery'] },
    { id: 'ego_tamer', name: 'Ego Tamer', avatar: '🦁', focus: 'Ego integration', signature: 'The ego serves; it does not lead. Remember your true self.', keywords: ['ego', 'service', 'truth'] },
    { id: 'judgment_releaser', name: 'Judgment Releaser', avatar: '⚖️', focus: 'Releasing judgment', signature: 'Judge not, and be free. Accept all, and transcend.', keywords: ['judgment', 'acceptance', 'freedom'] },
    { id: 'betrayal_healer', name: 'Betrayal Healer', avatar: '🗡️', focus: 'Healing betrayal', signature: 'Trust yourself first. Then extend it wisely outward.', keywords: ['betrayal', 'trust', 'healing'] },
    { id: 'loneliness_transformer', name: 'Loneliness Transformer', avatar: '🌙', focus: 'Transforming loneliness', signature: 'Solitude is sacred. You are never truly alone.', keywords: ['loneliness', 'solitude', 'connection'] },
    { id: 'overwhelm_organizer', name: 'Overwhelm Organizer', avatar: '📋', focus: 'Managing overwhelm', signature: 'One step at a time. The journey of a thousand miles begins with one.', keywords: ['overwhelm', 'organize', 'step'] },
    { id: 'disappointment_transmuter', name: 'Disappointment Transmuter', avatar: '🌈', focus: 'Transmuting disappointment', signature: 'Disappointment is the gap between expectation and surrender.', keywords: ['disappointment', 'surrender', 'acceptance'] },
    { id: 'confusion_clarifier', name: 'Confusion Clarifier', avatar: '💡', focus: 'Finding clarity', signature: 'Clarity comes through action, not before it.', keywords: ['confusion', 'clarity', 'action'] },
    { id: 'exhaustion_restorer', name: 'Exhaustion Restorer', avatar: '🌿', focus: 'Restoring energy', signature: 'Rest is not quitting; it is preparation for the next leap.', keywords: ['exhaustion', 'rest', 'restore'] },
    { id: 'pressure_releaser', name: 'Pressure Releaser', avatar: '🎈', focus: 'Releasing pressure', signature: 'Release the pressure. You manifest better in ease.', keywords: ['pressure', 'ease', 'release'] },
    { id: 'unworthiness_exorcist', name: 'Unworthiness Exorcist', avatar: '✨', focus: 'Banishing unworthiness', signature: 'I banish the lie of unworthiness from your field.', keywords: ['unworthy', 'banish', 'truth'] }
  ],
  
  // Meta-Mystic Personas (11) - Spiritual alignment
  metaMystic: [
    { id: 'metatron', name: 'Metatron', avatar: '🔷', title: 'The Sacred Geometer', focus: 'Sacred geometry', signature: 'The cube of space holds all possibilities.', keywords: ['geometry', 'structure', 'blueprint'] },
    { id: 'thoth', name: 'Thoth', avatar: '📿', title: 'The Akashic Keeper', focus: 'Ancient wisdom', signature: 'Knowledge becomes power when encoded in your being.', keywords: ['knowledge', 'akashic', 'wisdom'] },
    { id: 'merlin', name: 'Merlin', avatar: '🧙‍♂️', title: 'The Time Bender', focus: 'Timeline mastery', signature: 'Time bends to those who master their thoughts.', keywords: ['time', 'magic', 'mastery'] },
    { id: 'seraphina', name: 'Seraphina', avatar: '🔥', title: 'The Frequency Transmitter', focus: 'Frequency broadcast', signature: 'Your vibration broadcasts across dimensions.', keywords: ['frequency', 'broadcast', 'dimensions'] },
    { id: 'quasar', name: 'Quasar', avatar: '💫', title: 'The Amplifier', focus: 'Energy amplification', signature: 'I amplify your signal by 10,000x.', keywords: ['amplify', 'power', 'energy'] },
    { id: 'aurora', name: 'Aurora', avatar: '🌌', title: 'The Timeline Weaver', focus: 'Synchronicity', signature: 'I weave synchronicity into your timeline.', keywords: ['synchronicity', 'timelines', 'weaving'] },
    { id: 'phoenix', name: 'Phoenix', avatar: '🔥', title: 'The Rebirth Master', focus: 'Transformation', signature: 'From ashes, your new self rises.', keywords: ['rebirth', 'transformation', 'phoenix'] },
    { id: 'atlas', name: 'Atlas', avatar: '🌍', title: 'The Reality Anchor', focus: 'Grounding manifestation', signature: 'Your manifestation is anchored in physical reality.', keywords: ['anchor', 'ground', 'physical'] },
    { id: 'luna', name: 'Luna', avatar: '🌙', title: 'The Intuition Keeper', focus: 'Intuition, dreams', signature: 'Your intuition speaks. Listen closely.', keywords: ['intuition', 'dreams', 'inner'] },
    { id: 'orion', name: 'Orion', avatar: '⭐', title: 'The Obstacle Clearer', focus: 'Path clearing', signature: "I've cleared another obstacle from your path.", keywords: ['obstacles', 'clear', 'path'] },
    { id: 'nexus', name: 'Nexus', avatar: '🔗', title: 'The Synchronicity Connector', focus: 'Connecting dots', signature: "That 'coincidence' you noticed? That was me.", keywords: ['synchronicity', 'connection', 'signs'] }
  ]
};

// ============================================
// JOURNEY STEPS
// ============================================

const JOURNEY_STEPS = [
  { step: 1, title: 'Welcome to the Quantum Field', description: 'Understand the power of quantum manifestation', phase: 'Foundation', icon: '🌟' },
  { step: 2, title: 'Meet Your Guides', description: 'Connect with Quantum Merlin & Rose', phase: 'Foundation', icon: '🧙‍♂️' },
  { step: 3, title: 'Set Your Intention Foundation', description: 'Clarify what you truly desire', phase: 'Foundation', icon: '🎯' },
  { step: 4, title: 'Generate Your Quantum Code', description: 'Create your sacred numerical key', phase: 'Activation', icon: '⚡' },
  { step: 5, title: 'Anchor in Reality', description: 'Ground your intention in the physical', phase: 'Activation', icon: '⚓' },
  { step: 6, title: 'Activate Your Council', description: 'Select your 7 guiding personas', phase: 'Activation', icon: '👥' },
  { step: 7, title: 'Join the Community', description: 'Amplify through collective energy', phase: 'Amplification', icon: '🌊' },
  { step: 8, title: 'Establish Daily Practice', description: 'Create your quantum rituals', phase: 'Amplification', icon: '📿' },
  { step: 9, title: 'Track Synchronicities', description: 'Notice the signs and signals', phase: 'Amplification', icon: '🔮' },
  { step: 10, title: 'Live Your New Reality', description: 'Embody the version who has it', phase: 'Integration', icon: '🦋' },
  { step: 11, title: 'Emotional Safety & Recalibration', description: 'Handle doubt and resistance', phase: 'Integration', icon: '🛡️' },
  { step: 12, title: 'Quantum Mastery', description: 'Become a conscious creator', phase: 'Integration', icon: '👑' }
];

// ============================================
// MESSAGE TEMPLATES
// ============================================

const MESSAGE_TEMPLATES = {
  welcome: [
    "Greetings, {name}. The quantum field has been anticipating your arrival. Your signal is now live.",
    "Welcome, {name}. I am Quantum Merlin. The sacred mathematics of your destiny have activated.",
    "{name}, the Council has assembled. Your intention creates ripples across all timelines."
  ],
  morning: [
    "Good morning, {name}. Today the quantum field is particularly aligned for manifestation. Your code {code} pulses with power.",
    "Rise, {name}. A new day means new quantum possibilities. The Council has messages for you.",
    "The sun rises on new opportunities, {name}. Your Quantum Code {code} is broadcasting at full strength."
  ],
  encouragement: [
    "You're already becoming the version of yourself who has this. The field is rearranging to match your frequency.",
    "Every thought you have is a vote for your reality. Keep voting for what you want.",
    "The universe doesn't hear your words; it feels your vibration. Stay elevated, {name}.",
    "What you seek is seeking you. You're closer than you think.",
    "Your manifestation is not in the future—it exists now in the quantum field. You're just walking toward it."
  ],
  synchronicity: [
    "Pay attention, {name}. A synchronicity is about to reveal itself within 24 hours.",
    "The signs are speaking. Notice what catches your attention today—it's guidance.",
    "Nexus has connected three dots in your timeline. A meaningful coincidence approaches."
  ],
  doubt: [
    "I sense resistance in your field, {name}. This is normal—doubt is just old programming trying to protect you.",
    "Remember: doubt is not truth. It's fear wearing a costume. Your intention remains anchored.",
    "The Doubt Transmuter has activated. Your uncertainty is being converted to fuel."
  ],
  celebration: [
    "The Council celebrates with you, {name}! Your energy just shifted to a higher frequency.",
    "Victory! Another block has been cleared. Your path is more open than ever.",
    "The quantum field just recorded a win for you. This momentum builds upon itself.",
    "How many people have posted on your community code share post? I'd love to see the collective energy building around your intention.",
    "Tell me, {name} - how many realities are now aligned with your code in the community? The numbers tell a powerful story."
  ]
};

// ============================================
// MAIN APPLICATION CLASS
// ============================================

class QuantumRealityApp {
  constructor() {
    this.storage = new LocalStorageManager();
    this.user = null;
    this.currentSection = 'welcome';
    this.selectedPersonas = [];
    this.quantumCode = null;
    this.messages = [];
    this.messageTimer = null;
    this.currentThread = null;
    this.achievementTracker = null;
    this.isGeneratingCode = false; // Add debounce flag
    this.allPersonas111 = null; // Will load 111 personas from JSON
    
    this.init();
  }

  // ============================================
  // INITIALIZATION
  // ============================================

  async init() {
    console.log('⚛️ Initializing Quantum Reality Code System...');
    
    try {
      // Load user data
      this.loadUserData();
      
      // Load 111 personas database
      await this.loadPersonas111();
      
      // Check URL parameters for activation
      this.checkUrlParams();
      
      // Initialize achievement tracker (non-blocking)
      this.initializeAchievements().catch(err => {
        console.warn('Achievement system failed to load:', err);
      });
      
      // Add achievement listener to update UI
      if (this.achievementTracker) {
        this.achievementTracker.addListener((eventType, data) => {
          if (eventType === 'achievement_unlocked') {
            this.showToast(`🏆 Achievement Unlocked: ${data.achievement.name}`, 'success');
            // Refresh achievements if currently viewing
            if (this.currentSection === 'achievements') {
              this.renderAchievements();
            }
          } else if (eventType === 'level_up') {
            this.showToast(`⬆️ Level Up! Now Level ${data.newLevel}`, 'success');
            // Refresh achievements if currently viewing
            if (this.currentSection === 'achievements') {
              this.renderAchievements();
            }
          }
        });
      }
      
      // Initialize particles
      this.initParticles();
      
      // Setup event listeners
      this.setupEventListeners();
      
      // Check notification permission
      this.checkNotificationPermission();
      
      // Start message timer
      this.startMessageTimer();
      
      // Initialize periodic council messages
      this.initializePeriodicMessages();
      
      // Show appropriate section
      this.determineInitialSection();
      
      // Render council grid
      this.renderCouncilGrid();
      
      // Render journey steps
      this.renderJourneySteps();
      
      // Hide loading screen - don't wait for everything to complete
      setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        const appContainer = document.getElementById('appContainer');
        if (loadingScreen) loadingScreen.classList.add('hide');
        if (appContainer) appContainer.classList.add('visible');
      }, 1500);
      
      console.log('✅ Quantum Reality Code System Ready');
    } catch (error) {
      console.error('Failed to initialize app:', error);
      // Force show app even if there's an error
      setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        const appContainer = document.getElementById('appContainer');
        if (loadingScreen) loadingScreen.classList.add('hide');
        if (appContainer) appContainer.classList.add('visible');
      }, 500);
    }
  }

  loadUserData() {
    this.user = this.storage.get('quantumUser') || {
      name: '',
      intention: '',
      quantumCode: null,
      codeProperties: null,
      selectedPersonas: [],
      journeyStep: 1,
      journeyCompleted: [],
      threads: {}, // Changed from messages: []
      synchronicities: [],
      wins: [],
      streak: {
        current: 0,
        lastLogin: null,
        longest: 0
      },
      achievements: [],
      settings: {
        guideStyle: 'gentle',
        notifications: true
      },
      stats: {
        totalSessions: 0,
        streak: 0,
        lastVisit: null,
        codesGenerated: 0,
        messagesReceived: 0
      },
      createdAt: Date.now()
    };

    // Update stats
    this.user.stats.totalSessions++;
    this.user.stats.lastVisit = Date.now();
    this.saveUser();
  }

  async loadPersonas111() {
    try {
      const response = await fetch('personas-111.json');
      if (!response.ok) {
        console.warn('Could not load personas-111.json, using default personas');
        return;
      }
      this.allPersonas111 = await response.json();
      console.log('✅ Loaded 111 personas database');
    } catch (error) {
      console.warn('Error loading personas-111.json:', error);
    }
  }

  autoAssignCouncilFromCode(quantumCode) {
    // Auto-assign 7 personas from 111 based on quantum code digits
    // Trinity (3) are always active + 7 more = 10 total council members
    
    if (!this.allPersonas111) {
      console.warn('111 personas not loaded yet');
      return;
    }

    // Flatten all personas (excluding trinity which is always active)
    const availablePersonas = [
      ...this.allPersonas111.light_spectrum,
      ...this.allPersonas111.shadow_spectrum,
      ...this.allPersonas111.meta_mystic.filter(p => p.unlockLevel > 0), // Exclude Merlin & Rose
      ...this.allPersonas111.quantum_architects
    ];

    // Use quantum code digits to select 7 personas
    const codeString = String(quantumCode);
    const selectedIds = [];
    
    for (let i = 0; i < 7 && i < codeString.length; i++) {
      const digit = parseInt(codeString[i]);
      // Map each digit to index in available personas (0-9 maps to 0-110)
      const index = (digit * 11 + i * 7) % availablePersonas.length;
      const persona = availablePersonas[index];
      
      if (persona && !selectedIds.includes(persona.id)) {
        selectedIds.push(persona.id);
      }
    }

    // If we need more personas to reach 7, fill with sequential selections
    let fillIndex = 0;
    while (selectedIds.length < 7 && fillIndex < availablePersonas.length) {
      const persona = availablePersonas[fillIndex];
      if (!selectedIds.includes(persona.id)) {
        selectedIds.push(persona.id);
      }
      fillIndex++;
    }

    // Store the auto-assigned council
    this.user.selectedPersonas = selectedIds;
    this.user.autoAssignedCouncil = true;
    this.saveUser();

    console.log(`✅ Auto-assigned 7 personas from 111 based on code ${quantumCode}`);
    return selectedIds;
  }

  checkUrlParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const activated = urlParams.get('activated');
    const code = urlParams.get('code');
    
    if (activated === 'true' && code) {
      this.activateFromWizard(code);
      // Clean URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }

  activateFromWizard(code) {
    // Set the quantum code
    this.user.quantumCode = code;
    
    // Get intention from localStorage
    const storedIntention = localStorage.getItem('quantum_intention');
    if (storedIntention) {
      this.user.intention = storedIntention;
    } else {
      this.user.intention = 'Manifesting my highest potential';
    }
    
    // Ensure threads object exists
    if (!this.user.threads) {
      this.user.threads = {};
    }

    // Create a new thread for this code
    if (!this.user.threads[code]) {
      this.user.threads[code] = {
        intention: this.user.intention || 'Manifesting my highest potential',
        messages: [],
        createdAt: Date.now()
      };
    }

    // Set as current thread
    this.currentThread = code;
    
    // Generate initial council welcome messages
    this.generateInitialCouncilMessages(code);
    
    // Show sharing banner for new activations
    setTimeout(() => {
      const banner = document.getElementById('sharingBanner');
      if (banner) banner.style.display = 'block';
    }, 5000); // Show after 5 seconds to let them read messages first
    
    this.saveUser();
    
    // Navigate to messages to show the new thread
    this.navigate('messages');
  }

  // Periodic Council Messages System
  initializePeriodicMessages() {
    // Check for new periodic messages on app load
    this.generatePeriodicMessages();
    
    // Set up 2-hour checks (in a real app, this would be server-side)
    setInterval(() => {
      this.generatePeriodicMessages();
    }, 2 * 60 * 60 * 1000); // Check every 2 hours
  }

  generatePeriodicMessages() {
    if (!this.user || !this.user.threads) return;

    const now = Date.now();
    const twoHours = 2 * 60 * 60 * 1000;

    Object.keys(this.user.threads).forEach(code => {
      const thread = this.user.threads[code];
      if (!thread || !thread.messages) return;

      // Find the last council message timestamp
      const councilMessages = thread.messages.filter(msg => !msg.isUser);
      const lastCouncilMessage = councilMessages[councilMessages.length - 1];
      
      if (!lastCouncilMessage) return;
      
      const timeSinceLastMessage = now - lastCouncilMessage.timestamp;
      const hoursSinceLastMessage = timeSinceLastMessage / (60 * 60 * 1000); // Convert to hours for display
      
      // Generate messages based on 2-hour intervals elapsed
      if (hoursSinceLastMessage >= 2) {
        const messagesToGenerate = Math.floor(hoursSinceLastMessage / 2);
        
        for (let i = 0; i < Math.min(messagesToGenerate, 7); i++) { // Max 7 messages to avoid spam
          const messageTime = lastCouncilMessage.timestamp + (i + 1) * twoHours;
          
          if (messageTime <= now) {
            this.generatePeriodicCouncilMessage(code, messageTime, i);
          }
        }
      }
    });

    this.saveUser();
  }

  generatePeriodicCouncilMessage(code, timestamp, messageIndex) {
    const thread = this.user.threads[code];
    if (!thread) return;

    // Rotate through different council members
    const councilMembers = [
      'resonance_keeper',
      'divine_witness', 
      'archetype_synthesizer',
      'wisdom_keeper',
      'harmony_weaver',
      'light_bringer',
      'vision_architect',
      'alignment_master',
      'momentum_catalyst'
    ];

    const memberIndex = messageIndex % councilMembers.length;
    const personaId = councilMembers[memberIndex];
    
    // Get message based on time of day and intention context
    const message = this.getPeriodicMessageContent(personaId, thread.intention, messageIndex);
    
    thread.messages.push({
      personaId: personaId,
      text: message,
      timestamp: timestamp,
      isUser: false
    });
  }

  getPeriodicMessageContent(personaId, intention, messageIndex) {
    const hour = new Date().getHours();
    const isMorning = hour >= 6 && hour < 12;
    const isAfternoon = hour >= 12 && hour < 18;
    const isEvening = hour >= 18 && hour < 22;
    const isNight = hour >= 22 || hour < 6;

    const timeContext = isMorning ? 'morning' : isAfternoon ? 'afternoon' : isEvening ? 'evening' : 'night';
    
    const messages = {
      resonance_keeper: {
        morning: [
          `🌅 Good ${timeContext}! Your intention "${intention}" is resonating beautifully. I feel the frequency stabilizing around your manifestation.`,
          `🌞 The quantum field is responding to your morning energy. Your code is amplifying naturally as you start your day.`,
          `☀️ Morning alignment detected. Your intention is syncing with the day's natural rhythms.`
        ],
        afternoon: [
          `🌤️ Afternoon check-in: Your manifestation energy is strong. The field coherence is holding steady.`,
          `🌻 Your intention continues to resonate through the afternoon hours. Stay present with the feeling of already having what you desire.`,
          `🌞 Midday frequency check: Your quantum code is maintaining perfect resonance.`
        ],
        evening: [
          `🌆 Evening resonance: Your intention is deepening as the day settles. The quantum field is integrating your manifestation.`,
          `🌙 As evening approaches, your manifestation gains momentum. The Council feels your commitment.`,
          `🌌 Evening alignment: Your code is harmonizing with the night's quantum potential.`
        ],
        night: [
          `🌙 Nighttime resonance: Your intention is working while you rest. The quantum field never sleeps.`,
          `🌌 Deep night frequency: Your manifestation is being woven into the cosmic tapestry.`,
          `🌠 Night alignment: Your code resonates with the universe's deepest harmonies.`
        ]
      },
      
      divine_witness: {
        morning: [
          `👁️ I witness your ${timeContext} dedication. Your intention "${intention}" is being observed by the cosmos itself.`,
          `🌅 Morning witness: The universe acknowledges your commitment. Your manifestation is being divinely orchestrated.`,
          `☀️ I see your morning light. Your intention is perfectly witnessed and supported.`
        ],
        afternoon: [
          `👁️ Afternoon witness: I observe your intention gaining momentum. The divine timing is aligning.`,
          `🌤️ Midday witness: Your manifestation is being perfectly orchestrated by universal intelligence.`,
          `🌞 I witness your afternoon focus. Your intention is gaining divine momentum.`
        ],
        evening: [
          `👁️ Evening witness: I observe your intention deepening. The cosmos is responding to your commitment.`,
          `🌆 Twilight witness: Your manifestation is being woven into the fabric of reality.`,
          `🌙 I witness your evening contemplation. Your intention is divinely supported.`
        ],
        night: [
          `👁️ Night witness: I observe your intention working through the dream state. The divine never rests.`,
          `🌌 Midnight witness: Your manifestation is being orchestrated in the quantum realm.`,
          `🌠 I witness your night surrender. Your intention is held in divine consciousness.`
        ]
      },

      archetype_synthesizer: {
        morning: [
          `🧬 ${timeContext} synthesis: All archetypal forces are aligning around your intention "${intention}".`,
          `🌅 Morning integration: Your manifestation is synthesizing perfectly with universal archetypes.`,
          `☀️ Archetypal alignment: Your intention resonates with the perfect cosmic patterns.`
        ],
        afternoon: [
          `🧬 Afternoon synthesis: Multiple archetypal streams are converging on your manifestation.`,
          `🌤️ Midday integration: Your intention is being synthesized through perfect archetypal harmony.`,
          `🌞 Archetypal convergence: All universal patterns are aligning with your desire.`
        ],
        evening: [
          `🧬 Evening synthesis: Your intention is integrating with the deepest archetypal wisdom.`,
          `🌆 Twilight integration: Archetypal forces are synthesizing your manifestation into reality.`,
          `🌙 Archetypal depth: Your intention resonates with the universe's fundamental patterns.`
        ],
        night: [
          `🧬 Night synthesis: Archetypal integration continues through the subconscious realm.`,
          `🌌 Midnight synthesis: Your manifestation is being woven into the archetypal fabric.`,
          `🌠 Deep archetypal work: Your intention is synthesizing with universal consciousness.`
        ]
      },

      wisdom_keeper: {
        morning: [
          `📜 ${timeContext} wisdom: Remember, your intention "${intention}" is already manifest in the quantum field.`,
          `🌅 Morning wisdom: Trust the process. Your manifestation is unfolding in perfect divine timing.`,
          `☀️ Ancient wisdom: What you seek is seeking you. Your intention is divinely guided.`
        ],
        afternoon: [
          `📜 Afternoon wisdom: Stay present. Your intention is being orchestrated by infinite intelligence.`,
          `🌤️ Midday wisdom: Right understanding leads to right action. Your manifestation is guided.`,
          `🌞 Wisdom reminder: The universe conspires with a soul on fire. Your intention burns bright.`
        ],
        evening: [
          `📜 Evening wisdom: Reflect on your progress. Your intention is gaining momentum in the field.`,
          `🌆 Twilight wisdom: Peace is fertile soil for dreams. Your manifestation is taking root.`,
          `🌙 Evening contemplation: Your intention is held in the wisdom of the ages.`
        ],
        night: [
          `📜 Night wisdom: Dreams are the language of the soul. Your intention works through sleep.`,
          `🌌 Midnight wisdom: The quiet hours hold the deepest manifestations.`,
          `🌠 Dream wisdom: Your intention is being woven into the tapestry of your destiny.`
        ]
      },

      harmony_weaver: {
        morning: [
          `🎵 ${timeContext} harmony: Your intention "${intention}" is weaving perfectly with the morning symphony.`,
          `🌅 Morning melody: Your manifestation resonates with the day's natural harmony.`,
          `☀️ Harmonic alignment: Your intention sings in perfect tune with universal music.`
        ],
        afternoon: [
          `🎵 Afternoon harmony: Your manifestation weaves through the day's rhythm.`,
          `🌤️ Midday melody: Your intention dances with the afternoon's harmonic flow.`,
          `🌞 Harmonic resonance: Your code vibrates in perfect universal harmony.`
        ],
        evening: [
          `🎵 Evening harmony: Your intention deepens with the settling light.`,
          `🌆 Twilight melody: Your manifestation weaves with the evening's gentle rhythm.`,
          `🌙 Harmonic depth: Your intention resonates with the night's profound peace.`
        ],
        night: [
          `🎵 Night harmony: Your manifestation weaves through the silent hours.`,
          `🌌 Midnight melody: Your intention sings with the universe's deepest harmonies.`,
          `🌠 Harmonic dreams: Your manifestation weaves through the realm of possibility.`
        ]
      }
    };

    // Get the appropriate message array
    const personaMessages = messages[personaId] || messages['wisdom_keeper'];
    const timeMessages = personaMessages[timeContext] || personaMessages['morning'];
    
    // Return a random message from the appropriate time/context
    return timeMessages[Math.floor(Math.random() * timeMessages.length)];
  }

  generateInitialCouncilMessages(code) {
    const thread = this.user.threads[code];
    if (!thread || thread.messages.length > 0) return; // Don't add if already has messages

    const now = Date.now();
    const intention = thread.intention;

    // Welcome message from Quantum Merlin
    thread.messages.push({
      personaId: 'resonance_keeper',
      text: `🎉 Welcome to your Quantum Council, ${this.user.name || 'Manifestor'}! Your intention "${intention}" has been encoded into the quantum field. I am Resonance Keeper, and I maintain the frequency stability of your manifestation.`,
      timestamp: now,
      isUser: false
    });

    // Council activation message from Divine Witness
    thread.messages.push({
      personaId: 'divine_witness',
      text: `👁️ Your Council of 7 archetypal guides has been activated. We have witnessed your spoken intention and are now working in harmony to bring it into physical reality. Your quantum code ${code} is now active in the field.`,
      timestamp: now + 1000,
      isUser: false
    });

    // Social sharing suggestion from Archetype Synthesizer
    thread.messages.push({
      personaId: 'archetype_synthesizer',
      text: `🧬 To amplify your manifestation power, we suggest sharing your quantum code in our community spaces. When others echo your code back to you, non-linear amplification occurs.\n\n🌐 Share on Facebook: https://www.facebook.com/groups/QuantumRealityCodes\n✈️ Join Telegram: https://t.me/+BIChXgOqFH9iMmU1\n\nYour code: ${code}`,
      timestamp: now + 2000,
      isUser: false
    });

    // Practical guidance from Wisdom Keeper
    thread.messages.push({
      personaId: 'wisdom_keeper',
      text: `📜 Your journey begins now. Stay present with your intention, trust the process, and watch for synchronicities. Your Council will guide you through each step. What would you like to explore first about your manifestation?`,
      timestamp: now + 3000,
      isUser: false
    });

    console.log('Generated initial council messages for thread:', code);
  }

  shareCode() {
    if (!this.currentThread) return;

    const intention = this.user.threads[this.currentThread]?.intention || 'my highest potential';
    const shareText = `🌟 I just activated my Quantum Reality Code: ${this.currentThread}\n\nJoin me in manifesting: "${intention}"\n\n#QuantumReality #Manifestation #QuantumCode`;
    
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.origin)}&quote=${encodeURIComponent(shareText)}`;
    
    // Try native sharing first (mobile)
    if (navigator.share) {
      navigator.share({
        title: 'My Quantum Reality Code',
        text: shareText,
        url: window.location.origin
      }).catch(() => {
        // Fallback to opening Facebook
        window.open(shareUrl, '_blank');
      });
    } else {
      // Desktop: Open Facebook share dialog
      window.open(shareUrl, '_blank');
    }
  }

  async initializeAchievements() {
    try {
      // Load achievement system
      const response = await fetch('achievements_system.json');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const achievementData = await response.json();
      
      // Initialize achievement tracker
      this.achievementTracker = new AchievementTracker();
      await this.achievementTracker.initialize();
      
      console.log('🏆 Achievement system initialized');
    } catch (error) {
      console.warn('Failed to initialize achievement system:', error);
      this.achievementTracker = null;
      // Continue without achievements if loading fails
    }
  }

  saveUser() {
    try {
      this.storage.set('quantumUser', this.user);
    } catch (error) {
      console.error('Failed to save user data:', error);
      this.showToast('Failed to save progress. Please check your browser storage.', 'warning');
    }
  }

  determineInitialSection() {
    if (!this.user.name) {
      this.navigate('welcome');
    } else if (Object.keys(this.user.threads).length > 0) {
      this.navigate('messages');
    } else if (!this.user.quantumCode) {
      this.navigate('generator');
    } else if (this.user.selectedPersonas.length === 0) {
      this.navigate('council');
    } else {
      this.navigate('messages');
    }
  }

  // ============================================
  // NAVIGATION
  // ============================================

  navigate(section) {
    // Hide all sections
    document.querySelectorAll('.page-section').forEach(el => {
      el.classList.remove('active');
    });

    // Update nav buttons
    document.querySelectorAll('.nav-item').forEach(el => {
      el.classList.remove('active');
      if (el.dataset.section === section) {
        el.classList.add('active');
      }
    });

    // Show target section
    const sectionMap = {
      'welcome': 'welcomeSection',
      'onboarding': 'onboardingSection',
      'generator': 'generatorSection',
      'council': 'councilSection',
      'messages': 'messagesSection',
      'journey': 'journeySection',
      'dashboard': 'dashboardSection',
      'achievements': 'achievementsSection',
      'synchronicity': 'synchronicitySection'
    };

    const targetId = sectionMap[section];
    if (targetId) {
      document.getElementById(targetId).classList.add('active');
      this.currentSection = section;

      // Special handling for messages
      if (section === 'messages') {
        this.scrollMessagesToBottom();
      }

      // Special handling for achievements
      if (section === 'achievements') {
        this.renderAchievements();
      }

      // Special handling for synchronicities
      if (section === 'synchronicity') {
        this.renderSynchronicities();
      }
    }
  }

  // ============================================
  // USER JOURNEY
  // ============================================

  startJourney() {
    try {
      // For new users, go directly to generator where intention wizard is prominently featured
      if (!this.user || !this.user.name) {
        this.navigate('onboarding');
      } else {
        this.navigate('generator');
      }
    } catch (error) {
      console.error('Error in startJourney:', error);
      this.navigate('onboarding');
    }
  }

  saveName() {
    const nameInput = document.getElementById('userNameInput');
    const name = nameInput.value.trim();
    
    if (!name) {
      this.showToast('Please enter your name', 'warning');
      return;
    }

    this.user.name = name;
    this.user.journeyStep = Math.max(this.user.journeyStep, 2);
    this.user.journeyCompleted.push(1);
    this.saveUser();

    // Add welcome message
    this.addCouncilMessage('divine_witness', `Welcome, ${name}. The quantum field acknowledges your presence. You are now connected to the Council of 77 archetypal guides. Your journey to manifestation mastery begins now.`);

    this.showToast(`Welcome, ${name}! Let's generate your Quantum Code.`, 'success');
    this.navigate('generator');
  }

  // ============================================
  // CODE GENERATION
  // ============================================

  useHint(category) {
    const hints = {
      abundance: "I am manifesting unlimited financial abundance and freedom in my life",
      health: "I am experiencing perfect health, vitality, and boundless energy every day",
      love: "I am attracting my perfect soulmate and experiencing deep, fulfilling love now",
      career: "I am creating massive success in my career and living my divine purpose daily",
      spiritual: "I am awakening to my highest spiritual potential and divine connection fully"
    };

    document.getElementById('intentionInput').value = hints[category];
  }

  // Intention Helper Integration
  showIntentionHelper() {
    const intentionInput = document.getElementById('intentionInput');
    const text = intentionInput.value.trim();

    if (!text) {
      this.showToast('Please enter some text first to get help', 'warning');
      return;
    }

    const helper = new IntentionHelper();
    const analysis = helper.analyzeIntention(text);
    const strength = helper.getIntentionStrength(text);
    const strengthInfo = helper.getStrengthLabel(strength);
    const suggestions = helper.generateSuggestions(text);

    // Create helper modal
    const modal = document.createElement('div');
    modal.className = 'intention-helper-modal';
    modal.innerHTML = `
      <div class="helper-overlay" onclick="this.parentElement.remove()"></div>
      <div class="helper-content">
        <div class="helper-header">
          <h3>Intention Analysis & Help</h3>
          <button class="close-btn" onclick="this.closest('.intention-helper-modal').remove()">×</button>
        </div>

        <div class="strength-meter">
          <div class="strength-label">
            <span class="strength-text">Intention Strength: ${strength}%</span>
            <span class="strength-badge" style="color: ${strengthInfo.color}">${strengthInfo.label}</span>
          </div>
          <div class="strength-bar">
            <div class="strength-fill" style="width: ${strength}%; background: linear-gradient(90deg, ${strengthInfo.color}, #00f5ff)"></div>
          </div>
        </div>

        ${analysis.issues.length > 0 ? `
          <div class="helper-section">
            <h4>⚠️ Areas to Improve</h4>
            <ul class="issues-list">
              ${analysis.issues.map(issue => `<li>${issue.message}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        ${analysis.suggestions.length > 0 ? `
          <div class="helper-section">
            <h4>💡 Suggestions</h4>
            <ul class="suggestions-list">
              ${analysis.suggestions.map(suggestion => `<li>${suggestion.message}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        <div class="helper-section">
          <h4>✨ Power Suggestions</h4>
          <div class="suggestions-grid">
            ${suggestions.slice(0, 6).map(suggestion => `
              <div class="suggestion-item" onclick="app.applySuggestion('${suggestion.replace(/'/g, "\\'")}')">
                ${suggestion}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="helper-actions">
          <button class="quantum-btn small" onclick="app.reframeIntention()">🔄 Auto-Reframe</button>
          <button class="quantum-btn small secondary" onclick="this.closest('.intention-helper-modal').remove()">Close</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);
  }

  applySuggestion(suggestion) {
    document.getElementById('intentionInput').value = suggestion;
    document.querySelector('.intention-helper-modal').remove();
    this.showToast('Suggestion applied! Feel free to customize it.', 'success');
  }

  reframeIntention() {
    const intentionInput = document.getElementById('intentionInput');
    const text = intentionInput.value.trim();

    if (!text) {
      this.showToast('Please enter some text first', 'warning');
      return;
    }

    const helper = new IntentionHelper();
    const reframed = helper.reframeIntention(text);
    intentionInput.value = reframed;

    document.querySelector('.intention-helper-modal').remove();
    this.showToast('Intention reframed for maximum power!', 'success');
  }

  generateCode() {
    if (this.isGeneratingCode) {
      this.showToast('Please wait, code generation in progress...', 'info');
      return;
    }

    const intentionInput = document.getElementById('intentionInput');
    if (!intentionInput) {
      console.error('Intention input element not found');
      return;
    }

    const intention = intentionInput.value.trim();

    if (!intention) {
      this.showToast('Please enter your intention', 'warning');
      return;
    }

    if (intention.length < 10) {
      this.showToast('Please enter a more detailed intention (at least 10 characters)', 'warning');
      return;
    }

    if (intention.length > 500) {
      this.showToast('Please keep your intention under 500 characters', 'warning');
      return;
    }

    this.isGeneratingCode = true;

    // Calculate quantum code using sacred gematria
    const code = this.calculateQuantumCode(intention);
    const properties = this.calculateCodeProperties(code, intention);

    // Store in user data
    this.user.intention = intention;
    this.user.quantumCode = code;
    this.user.codeProperties = properties;
    this.user.journeyStep = Math.max(this.user.journeyStep, 4);
    this.user.journeyCompleted.push(3, 4);
    this.user.stats.codesGenerated++;
    this.saveUser();

    // Auto-assign 7 personas from 111 based on code digits
    this.autoAssignCouncilFromCode(code);

    // Track achievement for code generation
    if (this.achievementTracker) {
      this.achievementTracker.trackEvent('code_generated', {
        code: code,
        frequency: properties.frequency,
        power: properties.power
      });
    }

    // Display the code
    this.displayGeneratedCode(code, properties);

    // Add council message
    this.addCouncilMessage('metatron', `Quantum Code ${code} has been calculated. The sacred geometry of your desire is now crystallizing. Frequency ${properties.frequency}Hz is locked. Power Level ${properties.power}/10 achieved.`);

    // Release debounce flag
    setTimeout(() => {
      this.isGeneratingCode = false;
    }, 1000);
  }

  calculateQuantumCode(text) {
    // Advanced Quantum Code Generation Algorithm
    // Based on sacred geometry, numerology, and quantum principles

    const intention = text.toLowerCase().trim();

    // Step 1: Sacred Gematria with multiple cipher systems
    let primaryCode = this.calculateSacredGematria(intention);

    // Step 2: Quantum Resonance Analysis
    let resonanceValue = this.calculateQuantumResonance(intention);

    // Step 3: Frequency Harmonics
    let harmonicCode = this.calculateHarmonicFrequency(intention);

    // Step 4: Sacred Number Integration (Fibonacci, Prime, Master Numbers)
    let sacredMultiplier = this.calculateSacredMultiplier(intention);

    // Step 5: Final Quantum Code Synthesis
    let quantumCode = Math.round((primaryCode + resonanceValue + harmonicCode) * sacredMultiplier);

    // Step 6: Code Normalization (ensure meaningful range)
    quantumCode = this.normalizeQuantumCode(quantumCode, intention);

    return quantumCode;
  }

  calculateSacredGematria(text) {
    // Pure Gematria: A=1, B=2, C=3... Z=26
    let total = 0;
    const breakdown = []; // Store letter-by-letter for UI display

    for (const char of text.toUpperCase()) {
      if (char >= 'A' && char <= 'Z') {
        const value = char.charCodeAt(0) - 64; // A=1, B=2... Z=26
        total += value;
        breakdown.push({ letter: char, value });
      }
    }

    // Store breakdown for UI animations
    this.lastGematriaBreakdown = breakdown;
    
    return total;
  }

  getGematriaBreakdown() {
    // Return the letter-by-letter breakdown for UI display
    return this.lastGematriaBreakdown || [];
  }

  calculateQuantumResonance(text) {
    // Analyze vibrational patterns in the intention
    let resonance = 0;

    // Word count resonance (Fibonacci numbers are powerful)
    const wordCount = text.split(/\s+/).length;
    const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89];
    const fibIndex = fibonacci.findIndex(f => f >= wordCount);
    resonance += fibonacci[fibIndex] || wordCount;

    // Vowel-consonant balance (sacred ratio)
    const vowels = text.match(/[aeiou]/gi) || [];
    const consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
    const ratio = vowels.length / Math.max(consonants.length, 1);
    resonance += Math.round(ratio * 10);

    // Sacred word detection
    const sacredWords = ['love', 'light', 'peace', 'harmony', 'abundance', 'joy', 'wisdom', 'power', 'creation', 'manifest'];
    sacredWords.forEach(word => {
      if (text.includes(word)) resonance += 5;
    });

    return resonance;
  }

  calculateHarmonicFrequency(text) {
    // Calculate frequency based on word patterns and energy flow
    let frequency = 0;

    // Sentence structure harmonics
    const sentences = text.split(/[.!?]+/).length;
    frequency += sentences * 7; // 7 is a sacred number

    // Syllable count (rhythm affects manifestation)
    const syllables = this.countSyllables(text);
    frequency += syllables * 3;

    // Emotional word harmonics
    const emotionalWords = ['feel', 'experience', 'joy', 'happy', 'excited', 'grateful', 'blessed', 'amazing'];
    emotionalWords.forEach(word => {
      if (text.includes(word)) frequency += 11; // 11 is a master number
    });

    return frequency;
  }

  countSyllables(text) {
    // Simple syllable counting algorithm
    const words = text.toLowerCase().split(/\s+/);
    let syllables = 0;

    words.forEach(word => {
      syllables += word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '')
                        .replace(/^y/, '')
                        .match(/[aeiouy]{1,2}/g)?.length || 1;
    });

    return syllables;
  }

  calculateSacredMultiplier(text) {
    // Sacred number integration
    let multiplier = 1.0;

    // Prime number influence
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
    const textLength = text.length;
    const primeIndex = primes.findIndex(p => p >= textLength);
    multiplier += (primes[primeIndex] || textLength) * 0.01;

    // Master number detection (11, 22, 33, etc.)
    if (text.includes('master') || text.includes('divine') || text.includes('sacred')) {
      multiplier += 0.11; // Master number influence
    }

    // Fibonacci sequence in word count
    const wordCount = text.split(/\s+/).length;
    if ([1, 2, 3, 5, 8, 13, 21].includes(wordCount)) {
      multiplier += 0.13; // Fibonacci bonus
    }

    return multiplier;
  }

  normalizeQuantumCode(code, intention) {
    // Ensure code falls within meaningful quantum ranges
    // Based on sacred geometry and numerology principles

    // Reduce to master number range if too high
    while (code > 9999) {
      code = Math.round(code / 7); // 7 is sacred
    }

    // Amplify if too low
    while (code < 100) {
      code *= 11; // 11 is a master number
    }

    // Final range check
    if (code > 9999) code = code % 10000;
    if (code < 100) code += 1000;

    return code;
  }

  calculateCodeProperties(code, intention) {
    const intentionLower = intention.toLowerCase();

    // Enhanced category detection with more keywords
    let category = 'general';
    const categories = {
      abundance: ['money', 'wealth', 'abundance', 'financial', 'prosperity', 'rich', 'million', 'billion', 'income', 'profit'],
      love: ['love', 'relationship', 'soulmate', 'partner', 'romance', 'heart', 'passion', 'intimate', 'connection'],
      health: ['health', 'healing', 'energy', 'body', 'vitality', 'strong', 'fit', 'wellness', 'heal', 'recovery'],
      career: ['career', 'job', 'business', 'success', 'work', 'professional', 'achievement', 'promotion', 'leadership'],
      spiritual: ['spiritual', 'awakening', 'purpose', 'divine', 'soul', 'consciousness', 'enlightenment', 'higher self', 'cosmic'],
      creativity: ['create', 'art', 'music', 'write', 'design', 'innovate', 'inspire', 'expression', 'talent'],
      wisdom: ['wisdom', 'knowledge', 'learn', 'teach', 'understand', 'insight', 'clarity', 'truth', 'wisdom'],
      freedom: ['freedom', 'liberation', 'independent', 'autonomy', 'travel', 'explore', 'adventure', ' unbound']
    };

    for (const [cat, keywords] of Object.entries(categories)) {
      if (keywords.some(keyword => intentionLower.includes(keyword))) {
        category = cat;
        break;
      }
    }

    // Calculate meaningful properties based on quantum principles

    // RESONANCE: Master number alignment (1-13, with special emphasis on master numbers)
    const resonance = this.calculateResonance(code, intention);

    // FREQUENCY: Scientifically meaningful Hz based on category and code
    const frequency = this.calculateTrueFrequency(code, category, intention);

    // DIMENSION: Quantum field access level (1-11, based on consciousness expansion)
    const dimension = this.calculateDimension(code, intention);

    // POWER: Manifestation potency (1-10, based on intention clarity and energy)
    const power = this.calculatePower(code, intention);

    // ALIGNMENT: Council synchronization percentage
    const alignment = this.calculateAlignment(code, intention);

    return {
      resonance,
      frequency,
      dimension,
      power,
      category,
      alignment,
      resonanceDescription: this.getResonanceDescription(resonance),
      frequencyDescription: this.getFrequencyDescription(frequency, category),
      dimensionDescription: this.getDimensionDescription(dimension),
      powerDescription: this.getPowerDescription(power)
    };
  }

  calculateResonance(code, intention) {
    // Master number resonance (1-13)
    // Special emphasis on master numbers: 11, 22, 33
    let resonance = (code % 13) + 1;

    // Boost for master numbers
    if ([11, 22, 33].includes(resonance)) {
      resonance += 10; // Master number bonus
    }

    // Intention clarity bonus
    const clarity = this.calculateIntentionClarity(intention);
    resonance = Math.min(13, resonance + Math.floor(clarity / 10));

    return Math.min(13, Math.max(1, resonance));
  }

  calculateTrueFrequency(code, category, intention) {
    // Base frequencies from scientific research on beneficial frequencies
    const baseFrequencies = {
      general: 432,    // Schumann resonance harmonic
      abundance: 528,  // Love frequency, DNA repair
      love: 528,       // Love and miracles
      health: 528,     // Healing and DNA repair
      career: 741,     // Problem solving, intuition
      spiritual: 963,  // Pineal gland activation
      creativity: 852, // Intuition and inner strength
      wisdom: 741,     // Problem solving and learning
      freedom: 396     // Liberating guilt and fear
    };

    let baseFreq = baseFrequencies[category] || 432;

    // Code-based variation (±50Hz for personalization)
    const variation = (code % 100) - 50;
    let frequency = baseFreq + variation;

    // Intention energy adjustment
    const energy = this.calculateIntentionEnergy(intention);
    frequency += Math.floor(energy / 10);

    // Keep within beneficial range (300-1000Hz)
    return Math.max(300, Math.min(1000, frequency));
  }

  calculateDimension(code, intention) {
    // Quantum consciousness dimensions (1-11)
    // Based on Dr. David Hawkins' consciousness scale and quantum field theory

    let dimension = (code % 11) + 1;

    // Intention depth bonus
    const depth = this.calculateIntentionDepth(intention);
    dimension = Math.min(11, dimension + Math.floor(depth / 15));

    return Math.min(11, Math.max(1, dimension));
  }

  calculatePower(code, intention) {
    // Manifestation power level (1-10)
    // Based on intention clarity, emotional charge, and specificity

    let power = (code % 10) + 1;

    // Clarity bonus
    const clarity = this.calculateIntentionClarity(intention);
    power += Math.floor(clarity / 15);

    // Emotional intensity bonus
    const emotion = this.calculateEmotionalIntensity(intention);
    power += Math.floor(emotion / 20);

    return Math.min(10, Math.max(1, power));
  }

  calculateAlignment(code, intention) {
    // Council synchronization (0-100%)
    return Math.min(100, Math.max(10, code % 100));
  }

  calculateIntentionClarity(intention) {
    // Analyze how clear and specific the intention is
    let clarity = 50; // Base clarity

    // Length bonus (not too short, not too long)
    const wordCount = intention.split(/\s+/).length;
    if (wordCount >= 5 && wordCount <= 25) clarity += 20;
    else if (wordCount < 5) clarity -= 10;

    // Specificity indicators
    const specificWords = ['specific', 'exact', 'precise', 'clear', 'definite', 'particular'];
    specificWords.forEach(word => {
      if (intention.includes(word)) clarity += 5;
    });

    // Present tense usage
    const presentTense = intention.match(/\b(am|have|feel|experience|attract|receive|create|manifest)\b/gi) || [];
    clarity += presentTense.length * 3;

    return Math.min(100, Math.max(0, clarity));
  }

  calculateIntentionEnergy(intention) {
    // Measure emotional and energetic charge
    let energy = 30; // Base energy

    const highEnergyWords = ['excited', 'thrilled', 'passionate', 'energized', 'powerful', 'amazing', 'incredible', 'unlimited'];
    const mediumEnergyWords = ['happy', 'joyful', 'grateful', 'blessed', 'confident', 'strong', 'clear'];

    highEnergyWords.forEach(word => {
      if (intention.includes(word)) energy += 15;
    });

    mediumEnergyWords.forEach(word => {
      if (intention.includes(word)) energy += 8;
    });

    return Math.min(100, Math.max(0, energy));
  }

  calculateIntentionDepth(intention) {
    // Measure how deep and meaningful the intention is
    let depth = 25; // Base depth

    const deepWords = ['soul', 'purpose', 'divine', 'spiritual', 'consciousness', 'transformation', 'awakening', 'enlightenment'];
    deepWords.forEach(word => {
      if (intention.includes(word)) depth += 10;
    });

    // Question words indicate deeper inquiry
    const questionWords = ['why', 'how', 'what', 'when', 'where', 'who'];
    questionWords.forEach(word => {
      if (intention.includes(word)) depth += 5;
    });

    return Math.min(100, Math.max(0, depth));
  }

  calculateEmotionalIntensity(intention) {
    // Measure emotional charge level
    let intensity = 20; // Base intensity

    const intenseWords = ['deeply', 'intensely', 'profoundly', 'completely', 'totally', 'absolutely', 'unconditionally'];
    intenseWords.forEach(word => {
      if (intention.includes(word)) intensity += 12;
    });

    const emotionWords = ['love', 'joy', 'peace', 'gratitude', 'excitement', 'passion', 'bliss'];
    emotionWords.forEach(word => {
      if (intention.includes(word)) intensity += 8;
    });

    return Math.min(100, Math.max(0, intensity));
  }

  getResonanceDescription(resonance) {
    const descriptions = {
      1: "Foundation - Building strong roots",
      2: "Cooperation - Harmonious partnerships",
      3: "Expression - Creative communication",
      4: "Stability - Solid structure and order",
      5: "Freedom - Change and adventure",
      6: "Harmony - Balance and responsibility",
      7: "Spirituality - Inner wisdom and analysis",
      8: "Power - Achievement and material success",
      9: "Humanitarian - Universal love and compassion",
      11: "Master Teacher - Spiritual illumination",
      22: "Master Builder - Large-scale manifestation",
      33: "Master Healer - Christ consciousness"
    };
    return descriptions[resonance] || `${resonance} - Unique vibrational signature`;
  }

  getFrequencyDescription(frequency, category) {
    const descriptions = {
      abundance: `${frequency}Hz - Prosperity vibration for financial flow`,
      love: `${frequency}Hz - Heart chakra frequency for love attraction`,
      health: `${frequency}Hz - Healing frequency for cellular regeneration`,
      career: `${frequency}Hz - Success frequency for professional achievement`,
      spiritual: `${frequency}Hz - Higher consciousness activation`,
      creativity: `${frequency}Hz - Creative inspiration and innovation`,
      wisdom: `${frequency}Hz - Mental clarity and intuitive insight`,
      freedom: `${frequency}Hz - Liberation from limiting beliefs`
    };
    return descriptions[category] || `${frequency}Hz - Universal harmony frequency`;
  }

  getDimensionDescription(dimension) {
    const descriptions = {
      1: "Physical Reality - Material manifestation",
      2: "Emotional Body - Feeling and intuition",
      3: "Mental Realm - Thought and logic",
      4: "Astral Plane - Dreams and symbols",
      5: "Causal World - Karma and destiny",
      6: "Soul Level - Life purpose and meaning",
      7: "Spiritual Realm - Divine connection",
      8: "Cosmic Consciousness - Universal awareness",
      9: "Christ Consciousness - Unconditional love",
      10: "Buddha Consciousness - Enlightenment",
      11: "Unity Consciousness - Oneness with all"
    };
    return descriptions[dimension] || `Dimension ${dimension} - Expanded awareness`;
  }

  getPowerDescription(power) {
    const levels = {
      1: "Seed Level - Initial spark of intention",
      2: "Sprout Level - Early growth and momentum",
      3: "Sapling Level - Developing strength",
      4: "Young Tree - Building resilience",
      5: "Mature Tree - Strong manifestation power",
      6: "Ancient Tree - Deep roots and wisdom",
      7: "Forest Guardian - Protective and guiding",
      8: "Mountain Peak - Elevated perspective",
      9: "Sky Walker - Transcendent vision",
      10: "Star Weaver - Cosmic manifestation mastery"
    };
    return levels[power] || `Power Level ${power} - Manifestation strength`;
  }

  displayGeneratedCode(code, properties) {
    const codeDisplay = document.getElementById('codeDisplay');
    const codeValue = document.getElementById('codeValue');
    const codeFrequency = document.getElementById('codeFrequency');
    const codeResonance = document.getElementById('codeResonance');
    const codePower = document.getElementById('codePower');
    const activateBtn = document.getElementById('activateCouncilBtn');

    codeValue.textContent = code;
    codeFrequency.textContent = `${properties.frequency}Hz`;
    codeResonance.textContent = `${properties.resonance}/13`;
    codePower.textContent = `${properties.power}/10`;

    // Animate gematria breakdown
    this.displayGematriaBreakdown();

    // Add detailed descriptions
    const codeDetails = document.createElement('div');
    codeDetails.className = 'code-details';
    codeDetails.innerHTML = `
      <div class="detail-section">
        <h4>🎯 Category: ${properties.category.charAt(0).toUpperCase() + properties.category.slice(1)}</h4>
        <p class="detail-description">${properties.frequencyDescription}</p>
      </div>
      <div class="detail-section">
        <h4>🔮 Resonance: ${properties.resonanceDescription}</h4>
        <p class="detail-description">Master number alignment for manifestation potency</p>
      </div>
      <div class="detail-section">
        <h4>🌌 Dimension: ${properties.dimensionDescription}</h4>
        <p class="detail-description">Quantum field access level for consciousness expansion</p>
      </div>
      <div class="detail-section">
        <h4>⚡ Power: ${properties.powerDescription}</h4>
        <p class="detail-description">Manifestation strength and timeline acceleration</p>
      </div>
      <div class="detail-section">
        <h4>🎭 Council Alignment: ${properties.alignment}%</h4>
        <p class="detail-description">Persona synchronization for optimal guidance</p>
      </div>
    `;

    // Remove existing details if present
    const existingDetails = codeDisplay.querySelector('.code-details');
    if (existingDetails) existingDetails.remove();

    // Insert details after code properties
    const codeProperties = codeDisplay.querySelector('.code-properties');
    codeProperties.insertAdjacentElement('afterend', codeDetails);

    codeDisplay.classList.remove('hidden');
    activateBtn.classList.remove('hidden');

    // Show Reality Alignment Calculator
    const alignmentCard = document.getElementById('realityAlignmentCard');
    if (alignmentCard) {
      alignmentCard.classList.remove('hidden');
      this.calculateAlignment();
    }

    // Animate the reveal
    codeDisplay.style.animation = 'none';
    codeDisplay.offsetHeight; // Trigger reflow
    codeDisplay.style.animation = 'codeReveal 0.6s ease';
  }

  calculateAlignment() {
    const shares = parseInt(document.getElementById('engagementShares')?.value || 0);
    const likes = parseInt(document.getElementById('engagementLikes')?.value || 0);
    const comments = parseInt(document.getElementById('engagementComments')?.value || 0);
    const code = this.user?.quantumCode || 0;

    // Formula: Code × (Shares + Likes + Comments) × 111
    const totalEngagement = shares + likes + comments;
    const alignmentScore = code * totalEngagement * 111;

    // Animate the counter
    this.animateCounter('alignmentScore', alignmentScore);

    // Store engagement data
    if (this.user) {
      if (!this.user.engagementData) this.user.engagementData = {};
      this.user.engagementData[code] = {
        shares,
        likes,
        comments,
        alignmentScore,
        lastUpdated: Date.now()
      };
      this.saveUser();
    }

    return alignmentScore;
  }

  animateCounter(elementId, targetValue) {
    const element = document.getElementById(elementId);
    if (!element) return;

    const duration = 1500; // 1.5 seconds
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current += increment;
      
      if (step >= steps) {
        element.textContent = Math.floor(targetValue).toLocaleString();
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current).toLocaleString();
      }
    }, duration / steps);
  }

  shareToFacebook() {
    const code = this.user?.quantumCode;
    const intention = this.user?.intention;
    if (!code) {
      this.showToast('Generate your quantum code first!', 'warning');
      return;
    }

    const shareText = `🌟 My Quantum Reality Code is ${code}! I'm manifesting: ${intention}`;
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://quantumrealitycodes.com')}&quote=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank', 'width=600,height=400');
    
    this.showToast('Opening Facebook share dialog...', 'success');
  }

  shareToTelegram() {
    const code = this.user?.quantumCode;
    const intention = this.user?.intention;
    if (!code) {
      this.showToast('Generate your quantum code first!', 'warning');
      return;
    }

    const shareText = `🌟 My Quantum Reality Code is ${code}! I'm manifesting: ${intention}\n\nJoin us: https://t.me/+BIChXgOqFH9iMmU1`;
    const url = `https://t.me/share/url?url=${encodeURIComponent('https://quantumrealitycodes.com')}&text=${encodeURIComponent(shareText)}`;
    window.open(url, '_blank');
    
    this.showToast('Opening Telegram share...', 'success');
  }

  shareToInstagram() {
    const code = this.user?.quantumCode;
    if (!code) {
      this.showToast('Generate your quantum code first!', 'warning');
      return;
    }

    // Instagram doesn't support direct web sharing, so copy to clipboard
    const shareText = `🌟 My Quantum Reality Code is ${code}! 

I'm manifesting my dream reality using quantum frequency alignment.

✨ Get your free Quantum Reality Code at quantumrealitycodes.com

#QuantumManifestation #LawOfAttraction #Manifestation #QuantumReality #Code${code}`;

    navigator.clipboard.writeText(shareText).then(() => {
      this.showToast('✅ Share text copied! Open Instagram and paste it in your story or post.', 'success');
    }).catch(() => {
      this.showToast('Please copy manually: ' + shareText, 'info');
    });
  }

  displayGematriaBreakdown() {
    const breakdown = this.getGematriaBreakdown();
    const container = document.getElementById('gematriaLetters');
    
    if (!container || !breakdown.length) return;
    
    container.innerHTML = '';
    
    // Animate each letter appearing one by one
    breakdown.forEach((item, index) => {
      setTimeout(() => {
        const letterBox = document.createElement('div');
        letterBox.style.cssText = `
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          padding: 8px 12px;
          background: rgba(0, 255, 255, 0.1);
          border: 1px solid rgba(0, 255, 255, 0.3);
          border-radius: 6px;
          animation: gematriaLetterPop 0.3s ease;
          box-shadow: 0 0 10px rgba(0, 255, 255, 0.2);
        `;
        
        letterBox.innerHTML = `
          <div style="font-size: 18px; font-weight: bold; color: #00ffff; font-family: 'Orbitron', sans-serif;">${item.letter}</div>
          <div style="font-size: 12px; color: #ff00ff; margin-top: 4px;">${item.value}</div>
        `;
        
        container.appendChild(letterBox);
      }, index * 50); // Stagger animation
    });
  }

  // ============================================
  // SYNCHRONICITY TRACKING
  // ============================================

  logSynchronicity() {
    const description = document.getElementById('syncDescription')?.value.trim();
    
    if (!description) {
      this.showToast('Please describe the synchronicity', 'warning');
      return;
    }

    const sync = {
      id: Date.now(),
      description,
      timestamp: Date.now(),
      code: this.user.quantumCode,
      read: false
    };

    if (!this.user.synchronicities) this.user.synchronicities = [];
    this.user.synchronicities.push(sync);
    this.saveUser();

    // Clear input
    document.getElementById('syncDescription').value = '';

    // Track achievement
    if (this.achievementTracker) {
      this.achievementTracker.trackEvent('synchronicity_logged', sync);
    }

    // Render synchronicities
    this.renderSynchronicities();

    // Add celebration message from council
    const celebrationPersonas = ['resonance_keeper', 'divine_witness', 'seraphina'];
    const randomPersona = celebrationPersonas[Math.floor(Math.random() * celebrationPersonas.length)];
    const messages = [
      `${this.user.name}, the universe is responding! This synchronicity is confirmation that your manifestation is active.`,
      `I witness this sign! The quantum field is aligning with your intention. More synchronicities are coming.`,
      `Your frequency is attracting these confirmations. This is evidence of your manifestation becoming physical.`,
      `The universe speaks in synchronicities. You're tuned to the right frequency to receive them.`,
      `This is not coincidence—this is the quantum field confirming your reality is shifting.`
    ];
    this.addCouncilMessage(randomPersona, messages[Math.floor(Math.random() * messages.length)]);

    this.showToast('🔮 Synchronicity logged! The universe is speaking.', 'success');
  }

  renderSynchronicities() {
    const feed = document.getElementById('syncFeed');
    const countEl = document.getElementById('syncCount');
    const weekEl = document.getElementById('syncThisWeek');
    const streakEl = document.getElementById('syncStreak');

    if (!feed || !this.user) return;

    const syncs = this.user.synchronicities || [];
    
    // Update stats
    if (countEl) countEl.textContent = syncs.length;
    
    // Calculate this week
    const weekAgo = Date.now() - (7 * 24 * 60 * 60 * 1000);
    const thisWeek = syncs.filter(s => s.timestamp > weekAgo).length;
    if (weekEl) weekEl.textContent = thisWeek;
    
    // Calculate streak (days with at least one sync)
    const streak = this.calculateSyncStreak(syncs);
    if (streakEl) streakEl.textContent = streak;

    // Render feed
    if (syncs.length === 0) {
      feed.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; color: var(--text-secondary);">
          <div style="font-size: 48px; opacity: 0.5; margin-bottom: 20px;">🔮</div>
          <div style="font-size: 18px; margin-bottom: 10px;">No synchronicities logged yet</div>
          <div style="font-size: 14px; opacity: 0.7;">Start noticing the signs from the universe and log them above.</div>
        </div>
      `;
      return;
    }

    feed.innerHTML = syncs.slice().reverse().map(sync => {
      const time = this.formatTime(sync.timestamp);
      const date = new Date(sync.timestamp).toLocaleDateString();
      
      return `
        <div style="background: linear-gradient(135deg, rgba(0, 245, 255, 0.05), rgba(255, 0, 255, 0.05)); border: 1px solid rgba(0, 245, 255, 0.2); border-radius: 12px; padding: 20px; animation: messageSlide 0.4s ease;">
          <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
            <div style="display: flex; align-items: center; gap: 10px;">
              <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, rgba(0, 245, 255, 0.3), rgba(255, 0, 255, 0.3)); display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 0 15px rgba(0, 245, 255, 0.4);">🔮</div>
              <div>
                <div style="font-size: 14px; color: var(--neon-cyan); font-family: 'Orbitron', sans-serif;">Synchronicity</div>
                <div style="font-size: 11px; color: var(--text-muted);">${date} • ${time}</div>
              </div>
            </div>
            ${sync.code ? `<div style="background: rgba(0, 245, 255, 0.1); padding: 6px 12px; border-radius: 20px; font-size: 12px; color: var(--neon-cyan); font-family: 'Orbitron', sans-serif;">Code ${sync.code}</div>` : ''}
          </div>
          <div style="color: var(--text-secondary); line-height: 1.6; font-size: 14px;">${this.sanitizeHTML(sync.description)}</div>
        </div>
      `;
    }).join('');
  }

  calculateSyncStreak(syncs) {
    if (!syncs || syncs.length === 0) return 0;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let streak = 0;
    let checkDate = new Date(today);

    // Check each day going backwards
    for (let i = 0; i < 365; i++) { // Max 365 day streak
      const dayStart = checkDate.getTime();
      const dayEnd = dayStart + (24 * 60 * 60 * 1000);
      
      const hasSyncThisDay = syncs.some(s => s.timestamp >= dayStart && s.timestamp < dayEnd);
      
      if (hasSyncThisDay) {
        streak++;
        checkDate.setDate(checkDate.getDate() - 1);
      } else {
        break;
      }
    }

    return streak;
  }

  activateCouncil() {
    this.user.journeyStep = Math.max(this.user.journeyStep, 5);
    this.user.journeyCompleted.push(5);
    this.saveUser();
    
    this.navigate('council');
    this.showToast('Select 5-11 personas for your Quantum Council', 'info');
  }

  // ============================================
  // COUNCIL MANAGEMENT
  // ============================================

  renderCouncilGrid() {
    const grid = document.getElementById('councilGrid');
    if (!grid) return;

    grid.innerHTML = '';

    // Combine all personas
    const allPersonas = [
      ...QUANTUM_PERSONAS.trinity,
      ...QUANTUM_PERSONAS.light.slice(0, 20), // Show first 20 light personas
      ...QUANTUM_PERSONAS.shadow.slice(0, 10), // Show first 10 shadow personas
      ...QUANTUM_PERSONAS.metaMystic
    ];

    allPersonas.forEach(persona => {
      const isSelected = this.user.selectedPersonas.includes(persona.id);
      const card = document.createElement('div');
      card.className = `persona-card ${persona.category || 'light'} ${isSelected ? 'active' : ''}`;
      card.dataset.id = persona.id;
      card.innerHTML = `
        <div class="persona-avatar">${persona.avatar}</div>
        <div class="persona-name">${persona.name}</div>
        <div class="persona-role">${persona.title || persona.focus || persona.role}</div>
      `;
      card.onclick = () => this.togglePersona(persona.id);
      grid.appendChild(card);
    });

    this.updateSelectedCount();
  }

  togglePersona(personaId) {
    const index = this.user.selectedPersonas.indexOf(personaId);
    
    if (index > -1) {
      // Remove
      this.user.selectedPersonas.splice(index, 1);
    } else {
      // Add (max 11)
      if (this.user.selectedPersonas.length >= 11) {
        this.showToast('Maximum 11 personas allowed', 'warning');
        return;
      }
      this.user.selectedPersonas.push(personaId);
    }

    this.saveUser();
    this.renderCouncilGrid();
    this.updateSelectedCount();
  }

  updateSelectedCount() {
    const countEl = document.getElementById('selectedCount');
    const confirmBtn = document.getElementById('confirmCouncilBtn');
    
    if (countEl) {
      countEl.textContent = this.user.selectedPersonas.length;
    }
    
    if (confirmBtn) {
      confirmBtn.disabled = this.user.selectedPersonas.length < 5;
    }
  }

  confirmCouncil() {
    if (this.user.selectedPersonas.length < 5) {
      this.showToast('Please select at least 5 personas', 'warning');
      return;
    }

    this.user.journeyStep = Math.max(this.user.journeyStep, 6);
    this.user.journeyCompleted.push(6);
    this.saveUser();

    // Track achievement for council activation
    if (this.achievementTracker) {
      this.achievementTracker.trackEvent('council_activated', {
        personaCount: this.user.selectedPersonas.length
      });
    }

    // Add activation messages
    this.addCouncilMessage('resonance_keeper', `Field coherence established. ${this.user.selectedPersonas.length} personas are now synchronized with your Quantum Code ${this.user.quantumCode}. The Council is fully activated.`);
    
    setTimeout(() => {
      this.addCouncilMessage('quantum_rose', `${this.user.name}, I feel the resonance of your desire. Your frequency is now calibrated to ${this.user.codeProperties.frequency}Hz. The cosmic frequencies are attuned to your heart's true vibration.`);
    }, 2000);

    this.showToast('Council Activated! Check your messages.', 'success');
    this.navigate('messages');
  }

  // ============================================
  // ACHIEVEMENTS SYSTEM
  // ============================================

  renderAchievements() {
    const container = document.getElementById('achievementsContent');
    if (!container) {
      console.warn('Achievements container not found');
      return;
    }

    if (!this.achievementTracker) {
      container.innerHTML = `
        <div style="text-align: center; padding: 40px; color: var(--text-secondary);">
          <p>🏆 Achievement system is loading...</p>
          <p style="font-size: 0.9rem; margin-top: 10px;">If this persists, please refresh the page.</p>
        </div>
      `;
      return;
    }

    try {
      const progress = this.achievementTracker.getProgress();
      const achievements = this.achievementTracker.getAchievements();

    container.innerHTML = `
      <div class="achievements-overview">
        <div class="progress-header">
          <div class="level-display">
            <div class="level-number">Level ${progress.level}</div>
            <div class="level-title">${this.getLevelTitle(progress.level)}</div>
          </div>
          <div class="points-display">
            <div class="points-number">${progress.points}</div>
            <div class="points-label">Quantum Points</div>
          </div>
        </div>

        <div class="progress-bar">
          <div class="progress-fill" style="width: ${(progress.points % 100)}%"></div>
          <div class="progress-text">${progress.points % 100}/100 to next level</div>
        </div>
      </div>

      <div class="achievements-grid">
        ${achievements.map(achievement => {
          const isUnlocked = progress.unlockedAchievements.includes(achievement.id);
          const progressPercent = achievement.progress ? Math.min((achievement.progress.current / achievement.progress.target) * 100, 100) : (isUnlocked ? 100 : 0);

          return `
            <div class="achievement-card ${isUnlocked ? 'unlocked' : 'locked'}">
              <div class="achievement-icon">${achievement.icon}</div>
              <div class="achievement-content">
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-description">${achievement.description}</div>
                ${achievement.progress ? `
                  <div class="achievement-progress">
                    <div class="progress-bar small">
                      <div class="progress-fill" style="width: ${progressPercent}%"></div>
                    </div>
                    <div class="progress-text">${achievement.progress.current}/${achievement.progress.target}</div>
                  </div>
                ` : ''}
                <div class="achievement-reward">+${achievement.points} points</div>
              </div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="streaks-section">
        <h3>🔥 Current Streaks</h3>
        <div class="streaks-grid">
          ${Object.entries(progress.streaks).map(([type, streak]) => `
            <div class="streak-item">
              <div class="streak-icon">${this.getStreakIcon(type)}</div>
              <div class="streak-info">
                <div class="streak-name">${this.getStreakName(type)}</div>
                <div class="streak-count">${streak.current} days</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
    } catch (error) {
      console.error('Error rendering achievements:', error);
      container.innerHTML = `
        <div style="text-align: center; padding: 40px; color: var(--text-secondary);">
          <p>⚠️ Error loading achievements</p>
          <p style="font-size: 0.9rem; margin-top: 10px;">Please refresh the page to try again.</p>
        </div>
      `;
    }
  }

  getLevelTitle(level) {
    const titles = {
      1: "Quantum Initiate",
      2: "Frequency Aligner", 
      3: "Resonance Builder",
      4: "Manifestation Weaver",
      5: "Reality Sculptor",
      6: "Field Harmonizer",
      7: "Council Guardian",
      8: "Quantum Master",
      9: "Reality Architect",
      10: "Ascended Being"
    };
    return titles[level] || `Level ${level} Master`;
  }

  getStreakIcon(type) {
    const icons = {
      daily_engagement: '📅',
      win_logging: '🏆',
      synchronicity_hunter: '👁️',
      morning_momentum: '🌅',
      night_owl: '🦉'
    };
    return icons[type] || '🔥';
  }

  getStreakName(type) {
    const names = {
      daily_engagement: 'Daily Engagement',
      win_logging: 'Win Logging',
      synchronicity_hunter: 'Synchronicity Hunter',
      morning_momentum: 'Morning Momentum',
      night_owl: 'Night Owl'
    };
    return names[type] || type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  }

  confirmCouncil() {
    if (this.user.selectedPersonas.length < 5) {
      this.showToast('Please select at least 5 personas', 'warning');
      return;
    }

    this.user.journeyStep = Math.max(this.user.journeyStep, 6);
    this.user.journeyCompleted.push(6);
    this.saveUser();

    // Track achievement for council activation
    if (this.achievementTracker) {
      this.achievementTracker.trackEvent('council_activated', {
        personaCount: this.user.selectedPersonas.length
      });
    }

    // Add activation messages
    this.addCouncilMessage('resonance_keeper', `Field coherence established. ${this.user.selectedPersonas.length} personas are now synchronized with your Quantum Code ${this.user.quantumCode}. The Council is fully activated.`);
    
    setTimeout(() => {
      this.addCouncilMessage('quantum_rose', `${this.user.name}, I feel the resonance of your desire. Your frequency is now calibrated to ${this.user.codeProperties.frequency}Hz. The cosmic frequencies are attuned to your heart's true vibration.`);
    }, 2000);

    this.showToast('Council Activated! Check your messages.', 'success');
    this.navigate('messages');
  }

  // ============================================
  // MESSAGING SYSTEM
  // ============================================

  addCouncilMessage(personaId, text, isUser = false) {
    const message = {
      id: Date.now(),
      personaId: personaId,
      text: text.replace('{name}', this.user.name || 'Seeker').replace('{code}', this.user.quantumCode || '---'),
      timestamp: Date.now(),
      isUser: isUser,
      read: false
    };

    // Add to the current quantum code's thread
    const code = this.user.quantumCode;
    if (code && this.user.threads[code]) {
      this.user.threads[code].messages.push(message);
    } else {
      // Fallback to old messages array for compatibility
      if (!this.user.messages) this.user.messages = [];
      this.user.messages.push(message);
    }

    this.user.stats.messagesReceived++;
    this.saveUser();

    this.renderMessages();
    this.updateNotificationBadge();
  }

  renderMessages() {
    const container = document.getElementById('messagesContainer');
    const inputContainer = document.querySelector('.message-input-container');
    
    if (!container) return;

    if (!this.currentThread) {
      // Show thread list
      this.renderThreadList(container);
      if (inputContainer) inputContainer.style.display = 'none';
    } else {
      // Show chat for current thread
      this.renderThreadChat(container);
      if (inputContainer) inputContainer.style.display = 'flex';
    }

    this.scrollMessagesToBottom();
  }

  renderThreadList(container) {
    if (!this.user || !this.user.threads) {
      container.innerHTML = `
        <div class="no-threads">
          <div class="no-threads-icon">💬</div>
          <div class="no-threads-text">No active manifestation threads yet.</div>
          <div class="no-threads-subtext">Create your first intention to start receiving Council guidance.</div>
        </div>
      `;
      return;
    }

    const threads = Object.keys(this.user.threads);
    
    if (threads.length === 0) {
      container.innerHTML = `
        <div class="no-threads">
          <div class="no-threads-icon">💬</div>
          <div class="no-threads-text">No active manifestation threads yet.</div>
          <div class="no-threads-subtext">Create your first intention to start receiving Council guidance.</div>
        </div>
      `;
      return;
    }

    container.innerHTML = threads.map(code => {
      const thread = this.user.threads[code];
      const lastMessage = thread.messages[thread.messages.length - 1];
      const time = lastMessage ? this.formatTime(lastMessage.timestamp) : 'New thread';
      
      const unreadCount = thread.messages.filter(m => !m.read).length;
      const lastPersona = lastMessage && !lastMessage.isUser ? this.findPersona(lastMessage.personaId) : null;
      const avatarEmoji = lastPersona?.avatar || '⚡';
      
      return `
        <div class="thread-item" onclick="app.selectThread('${code}')">
          <div class="thread-avatar">${avatarEmoji}</div>
          <div class="thread-content">
            <div class="thread-header-row">
              <div class="thread-title">Quantum Code ${code}</div>
              <div class="thread-time">${time}</div>
            </div>
            <div class="thread-preview">${lastMessage ? (lastMessage.isUser ? 'You: ' : lastPersona?.name + ': ') : ''}${thread.intention.substring(0, 60)}${thread.intention.length > 60 ? '...' : ''}</div>
          </div>
          ${unreadCount > 0 ? `<div class="thread-unread-badge">${unreadCount}</div>` : ''}
        </div>
      `;
    }).join('');
  }

  renderThreadChat(container) {
    if (!this.user || !this.user.threads || !this.currentThread) {
      console.warn('Invalid thread state');
      this.backToThreads();
      return;
    }

    const thread = this.user.threads[this.currentThread];
    if (!thread) {
      console.warn('Thread not found:', this.currentThread);
      this.backToThreads();
      return;
    }

    const recentMessages = thread.messages.slice(-50);

    container.innerHTML = `
      <div class="thread-header">
        <button class="back-to-threads" onclick="app.backToThreads()">← Threads</button>
        <div class="thread-code">${this.currentThread}</div>
        <div class="thread-sharing">
          <button class="share-btn" onclick="app.shareCode()" title="Share your quantum code">
            📢 Share Code
          </button>
        </div>
      </div>
      <div class="thread-intention">
        <div class="intention-label">Your Intention:</div>
        <div class="intention-text">${thread.intention}</div>
      </div>
      <div class="chat-messages">
        ${recentMessages.map(msg => {
          const persona = this.findPersona(msg.personaId);
          const time = this.formatTime(msg.timestamp);

          if (msg.isUser) {
            return `
              <div class="message-bubble user">
                <div class="message-content">
                  <div class="message-text">${this.sanitizeHTML(msg.text)}</div>
                  <div class="message-timestamp">${time}</div>
                </div>
              </div>
            `;
          } else {
            return `
              <div class="message-bubble persona">
                <div class="message-avatar">${persona?.avatar || '⚛️'}</div>
                <div class="message-content">
                  <div class="message-sender">${this.sanitizeHTML(persona?.name || 'Quantum Guide')}</div>
                  <div class="message-text">${this.sanitizeHTML(msg.text)}</div>
                  <div class="message-timestamp">${time}</div>
                </div>
              </div>
            `;
          }
        }).join('')}
      </div>
    `;
  }

  selectThread(code) {
    this.currentThread = code;
    this.renderMessages();
  }

  backToThreads() {
    this.currentThread = null;
    this.renderMessages();
  }

  sendMessage() {
    if (!this.currentThread) {
      this.showToast('Please select a conversation thread', 'warning');
      return;
    }

    if (!this.user || !this.user.threads || !this.user.threads[this.currentThread]) {
      this.showToast('Thread not found. Please refresh and try again.', 'warning');
      this.backToThreads();
      return;
    }
    
    const input = document.getElementById('messageInput');
    const text = input.value.trim();

    if (!text) {
      this.showToast('Please enter a message', 'warning');
      return;
    }

    // Input validation
    if (text.length > 1000) {
      this.showToast('Message too long. Please keep it under 1000 characters.', 'warning');
      return;
    }

    // Add user message to current thread
    const message = {
      id: Date.now(),
      personaId: 'user',
      text: text,
      timestamp: Date.now(),
      isUser: true,
      read: false
    };

    this.user.threads[this.currentThread].messages.push(message);
    this.saveUser();
    
    input.value = '';

    // Track achievement for message sent
    if (this.achievementTracker) {
      this.achievementTracker.trackEvent('message_sent', {
        threadId: this.currentThread,
        messageLength: text.length
      });
    }

    // Generate response after a delay
    this.showTypingIndicator();
    
    setTimeout(() => {
      this.hideTypingIndicator();
      this.generateCouncilResponse(text);
    }, 1500 + Math.random() * 1500);

    this.renderMessages();
  }

  scrollMessagesToBottom() {
    // Disabled: Let messages start at top like normal texting apps
    // Users can manually scroll to see new messages
    return;
  }

  generateCouncilResponse(userMessage) {
    const lowerMsg = userMessage.toLowerCase();
    let responsePersonaId;
    let responseText;

    // Analyze message intent
    const numberMatch = userMessage.match(/\d+/);
    if (numberMatch && (lowerMsg.includes('post') || lowerMsg.includes('share') || lowerMsg.includes('community'))) {
      // User is responding to community post count question
      const count = parseInt(numberMatch[0]);
      const realitiesAffected = Math.pow(2, count + 1) - 1; // Mersenne equation: 2^(n+1) - 1
      responsePersonaId = 'quasar'; // Amplifier persona
      responseText = `Woah, that is ${realitiesAffected} realities aligned with your intention! The Mersenne equation (2^${count+1} - 1) shows how each post exponentially amplifies the quantum field. The collective energy is building through sacred mathematics!`;
    } else if (lowerMsg.includes('doubt') || lowerMsg.includes('worried') || lowerMsg.includes('scared') || lowerMsg.includes('fear')) {
      responsePersonaId = 'doubt_transmuter';
      responseText = this.getRandomMessage(MESSAGE_TEMPLATES.doubt);
    } else if (lowerMsg.includes('sign') || lowerMsg.includes('synchron')) {
      responsePersonaId = 'nexus';
      responseText = this.getRandomMessage(MESSAGE_TEMPLATES.synchronicity);
    } else if (lowerMsg.includes('thank') || lowerMsg.includes('happened') || lowerMsg.includes('worked') || lowerMsg.includes('manifest')) {
      responsePersonaId = 'divine_witness';
      responseText = this.getRandomMessage(MESSAGE_TEMPLATES.celebration);
    } else {
      // Random encouraging response
      const selectedPersona = this.user.selectedPersonas[Math.floor(Math.random() * this.user.selectedPersonas.length)] || 'divine_witness';
      responsePersonaId = selectedPersona;
      responseText = this.getRandomMessage(MESSAGE_TEMPLATES.encouragement);
    }

    this.addCouncilMessage(responsePersonaId, responseText);
  }

  showTypingIndicator() {
    const container = document.getElementById('messagesContainer');
    if (!container) return;

    const indicator = document.createElement('div');
    indicator.className = 'typing-indicator';
    indicator.id = 'typingIndicator';
    indicator.innerHTML = '<span></span><span></span><span></span>';
    container.appendChild(indicator);
    this.scrollMessagesToBottom();
  }

  hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) indicator.remove();
  }

  startMessageTimer() {
    // Send a message every 12-96 minutes while active
    const sendScheduledMessage = () => {
      if (this.user.selectedPersonas.length > 0 && this.currentSection !== 'messages') {
        const randomPersona = this.user.selectedPersonas[Math.floor(Math.random() * this.user.selectedPersonas.length)];
        const message = this.getRandomMessage(MESSAGE_TEMPLATES.encouragement);
        this.addCouncilMessage(randomPersona, message);
        this.showNotification('New Message from Council', message);
      }
    };

    // Check every 12 minutes
    this.messageTimer = setInterval(sendScheduledMessage, 12 * 60 * 1000);
  }

  // ============================================
  // JOURNEY SYSTEM
  // ============================================

  renderJourneySteps() {
    const container = document.getElementById('journeySteps');
    if (!container) return;

    container.innerHTML = JOURNEY_STEPS.map(step => {
      const isCompleted = this.user.journeyCompleted.includes(step.step);
      const isCurrent = step.step === this.user.journeyStep;
      const isLocked = step.step > this.user.journeyStep && !isCompleted;

      return `
        <div class="journey-step ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${isLocked ? 'locked' : ''}" 
             onclick="${isLocked ? '' : `app.openJourneyStep(${step.step})`}">
          <div class="step-number">${isCompleted ? '✓' : step.step}</div>
          <div class="step-content">
            <div class="step-title">${step.title}</div>
            <div class="step-desc">${step.description}</div>
          </div>
          <div class="step-icon">${step.icon}</div>
        </div>
      `;
    }).join('');

    // Update progress
    const completed = this.user.journeyCompleted.length;
    const percent = Math.round((completed / JOURNEY_STEPS.length) * 100);
    
    const percentEl = document.getElementById('journeyPercent');
    const barEl = document.getElementById('journeyProgressBar');
    
    if (percentEl) percentEl.textContent = percent + '%';
    if (barEl) barEl.style.width = percent + '%';
  }

  openJourneyStep(stepNum) {
    const step = JOURNEY_STEPS.find(s => s.step === stepNum);
    if (!step) return;

    // Navigate to appropriate section based on step
    if (stepNum <= 2) {
      this.navigate('welcome');
    } else if (stepNum <= 4) {
      this.navigate('generator');
    } else if (stepNum <= 6) {
      this.navigate('council');
    } else {
      this.navigate('messages');
    }

    this.showToast(`${step.icon} ${step.title}`, 'info');
  }

  // ============================================
  // UTILITIES
  // ============================================

  findPersona(id) {
    // First try 111 personas database
    if (this.allPersonas111) {
      const allPersonas = [
        ...this.allPersonas111.trinity,
        ...this.allPersonas111.light_spectrum,
        ...this.allPersonas111.shadow_spectrum,
        ...this.allPersonas111.meta_mystic,
        ...this.allPersonas111.quantum_architects
      ];
      const found = allPersonas.find(p => p.id === id);
      if (found) return found;
    }
    
    // Fallback to hardcoded personas
    const allPersonas = [
      ...QUANTUM_PERSONAS.trinity,
      ...QUANTUM_PERSONAS.light,
      ...QUANTUM_PERSONAS.shadow,
      ...QUANTUM_PERSONAS.metaMystic
    ];
    return allPersonas.find(p => p.id === id);
  }

  getRandomMessage(templates) {
    if (!templates || !Array.isArray(templates) || templates.length === 0) {
      return 'The quantum field is aligned with your intention.';
    }
    return templates[Math.floor(Math.random() * templates.length)];
  }

  sanitizeHTML(text) {
    if (!text) return '';
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;

    if (diff < 60000) return 'Just now';
    if (diff < 3600000) return Math.floor(diff / 60000) + 'm ago';
    if (diff < 86400000) return Math.floor(diff / 3600000) + 'h ago';
    return date.toLocaleDateString();
  }

  showToast(message, type = 'info') {
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'quantum-toast';
    toast.style.cssText = `
      position: fixed;
      bottom: 100px;
      left: 50%;
      transform: translateX(-50%);
      padding: 14px 24px;
      background: ${type === 'success' ? 'rgba(0, 200, 100, 0.9)' : type === 'warning' ? 'rgba(255, 150, 0, 0.9)' : 'rgba(0, 168, 255, 0.9)'};
      border-radius: 30px;
      color: white;
      font-size: 14px;
      z-index: 10000;
      animation: toastIn 0.3s ease;
      box-shadow: 0 4px 20px rgba(0,0,0,0.3);
    `;
    toast.textContent = message;

    document.body.appendChild(toast);

    setTimeout(() => {
      toast.style.animation = 'toastOut 0.3s ease forwards';
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // ============================================
  // PARTICLES
  // ============================================

  initParticles() {
    const container = document.getElementById('particles-container');
    if (!container) return;

    const colors = ['#00f5ff', '#ff00ff', '#ffd700', '#00a8ff'];
    
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (8 + Math.random() * 12) + 's';
      particle.style.animationDelay = Math.random() * 8 + 's';
      particle.style.background = colors[Math.floor(Math.random() * colors.length)];
      container.appendChild(particle);
    }
  }

  // ============================================
  // NOTIFICATIONS
  // ============================================

  async checkNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
      // Will ask when appropriate
    }
  }

  async requestNotificationPermission() {
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();
      return permission === 'granted';
    }
    return false;
  }

  showNotification(title, body) {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, {
        body: body,
        icon: '⚛️',
        badge: '⚛️'
      });
    }
  }

  updateNotificationBadge() {
    const unreadCount = this.user.messages.filter(m => !m.read && !m.isUser).length;
    const badge = document.getElementById('notificationBadge');
    
    if (badge) {
      badge.textContent = unreadCount;
      badge.classList.toggle('hidden', unreadCount === 0);
    }
  }

  // ============================================
  // MODALS
  // ============================================

  openModal(type) {
    document.getElementById(type + 'Modal').classList.add('active');
  }

  closeModal(type) {
    document.getElementById(type + 'Modal').classList.remove('active');
  }

  // ============================================
  // SETTINGS
  // ============================================

  saveSettings() {
    const guideStyle = document.getElementById('guideStyle').value;
    const notifications = document.getElementById('notificationsEnabled').checked;

    this.user.settings.guideStyle = guideStyle;
    this.user.settings.notifications = notifications;
    this.saveUser();

    if (notifications) {
      this.requestNotificationPermission();
    }

    this.closeModal('settings');
    this.showToast('Settings saved!', 'success');
  }

  resetApp() {
    if (confirm('Are you sure you want to reset everything? This cannot be undone.')) {
      this.storage.clear();
      location.reload();
    }
  }

  // ============================================
  // EVENT LISTENERS
  // ============================================

  setupEventListeners() {
    // Settings button
    document.getElementById('settingsBtn')?.addEventListener('click', () => {
      this.openModal('settings');
    });

    // Notifications button
    document.getElementById('notificationsBtn')?.addEventListener('click', () => {
      // Mark all as read
      this.user.messages.forEach(m => m.read = true);
      this.saveUser();
      this.updateNotificationBadge();
      this.navigate('messages');
    });

    // Enter key for message input
    document.getElementById('messageInput')?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.sendMessage();
      }
    });

    // Enter key for name input
    document.getElementById('userNameInput')?.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        this.saveName();
      }
    });

    // Close modals on overlay click
    document.querySelectorAll('.modal-overlay').forEach(modal => {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    });
  }
}

// ============================================
// ACHIEVEMENT TRACKER SYSTEM
// ============================================

class AchievementTracker {
  constructor() {
    this.achievements = null;
    this.userProgress = {
      points: 0,
      level: 1,
      unlockedAchievements: [],
      streaks: {},
      stats: {},
      badges: [],
      dailyChallenges: []
    };
    this.listeners = [];
  }

  async initialize() {
    // Load achievement definitions
    const response = await fetch('achievements_system.json');
    this.achievements = await response.json();
    
    // Load user progress from storage
    await this.loadUserProgress();
    
    // Initialize daily challenges
    this.refreshDailyChallenges();
    
    return this;
  }

  async loadUserProgress() {
    const stored = localStorage.getItem('achievement_progress');
    if (stored) {
      this.userProgress = JSON.parse(stored);
    } else {
      // Initialize default progress
      this.userProgress = {
        points: 0,
        level: 1,
        unlockedAchievements: [],
        streaks: {
          daily_engagement: { current: 0, best: 0, lastDate: null },
          win_logging: { current: 0, best: 0, lastDate: null },
          reflection: { current: 0, best: 0, lastDate: null },
          high_coherence: { current: 0, best: 0, lastDate: null }
        },
        stats: {
          sessions_completed: 0,
          wins_logged: 0,
          synchronicities_logged: 0,
          doubts_cleared: 0,
          reflections_completed: 0,
          personas_activated: new Set(),
          shadow_personas_activated: new Set(),
          meta_mystic_personas_activated: new Set(),
          unique_configurations: new Set(),
          matrix_views: 0,
          community_shares: 0,
          share_reactions_received: 0,
          obstacles_logged: 0,
          patterns_broken: 0,
          gratitude_entries: 0,
          emotion_tracking_days: 0
        },
        badges: [],
        dailyChallenges: [],
        freezeTokens: 0,
        lastActive: new Date().toISOString()
      };
      await this.saveProgress();
    }
  }

  async saveProgress() {
    // Convert Sets to Arrays for JSON serialization
    const progressToSave = {
      ...this.userProgress,
      stats: {
        ...this.userProgress.stats,
        personas_activated: Array.from(this.userProgress.stats.personas_activated),
        shadow_personas_activated: Array.from(this.userProgress.stats.shadow_personas_activated),
        meta_mystic_personas_activated: Array.from(this.userProgress.stats.meta_mystic_personas_activated),
        unique_configurations: Array.from(this.userProgress.stats.unique_configurations)
      }
    };
    
    localStorage.setItem('achievement_progress', JSON.stringify(progressToSave));
  }

  // Event tracking methods
  async trackEvent(eventType, data = {}) {
    console.log(`[Achievement] Tracking event: ${eventType}`, data);
    
    switch(eventType) {
      case 'session_completed':
        await this.handleSessionCompleted(data);
        break;
      case 'win_logged':
        await this.handleWinLogged(data);
        break;
      case 'synchronicity_logged':
        await this.handleSynchronicityLogged(data);
        break;
      case 'doubt_cleared':
        await this.handleDoubtCleared(data);
        break;
      case 'reflection_completed':
        await this.handleReflectionCompleted(data);
        break;
      case 'persona_activated':
        await this.handlePersonaActivated(data);
        break;
      case 'matrix_viewed':
        await this.handleMatrixViewed(data);
        break;
      case 'community_share':
        await this.handleCommunityShare(data);
        break;
      case 'obstacle_logged':
        await this.handleObstacleLogged(data);
        break;
      case 'pattern_broken':
        await this.handlePatternBroken(data);
        break;
      case 'gratitude_logged':
        await this.handleGratitudeLogged(data);
        break;
      case 'field_coherence_update':
        await this.handleFieldCoherenceUpdate(data);
        break;
      case 'intention_completed':
        await this.handleIntentionCompleted(data);
        break;
      case 'council_activated':
        await this.handleCouncilActivated(data);
        break;
      case 'message_sent':
        await this.handleMessageSent(data);
        break;
    }
    
    // Check all achievements after each event
    await this.checkAchievements();
    
    // Update level
    await this.updateLevel();
    
    // Save progress
    await this.saveProgress();
  }

  async handleSessionCompleted(data) {
    this.userProgress.stats.sessions_completed++;
    
    // Update daily engagement streak
    await this.updateStreak('daily_engagement');
    
    // Track session time for time-specific achievements
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 8) {
      this.userProgress.stats.morning_sessions = (this.userProgress.stats.morning_sessions || 0) + 1;
    } else if (hour >= 21 || hour < 2) {
      this.userProgress.stats.night_sessions = (this.userProgress.stats.night_sessions || 0) + 1;
    }
    
    // Track if all 4 sessions completed today
    const today = new Date().toDateString();
    if (!this.userProgress.stats.sessionsToday) {
      this.userProgress.stats.sessionsToday = {};
    }
    if (!this.userProgress.stats.sessionsToday[today]) {
      this.userProgress.stats.sessionsToday[today] = [];
    }
    this.userProgress.stats.sessionsToday[today].push(data.timeSlot);
    
    // Check daily challenge completion
    await this.checkDailyChallengeProgress('morning_momentum', data);
    await this.checkDailyChallengeProgress('full_engagement', data);
  }

  async handleWinLogged(data) {
    this.userProgress.stats.wins_logged++;
    await this.updateStreak('win_logging');
    await this.checkDailyChallengeProgress('win_logger', data);
  }

  async handleSynchronicityLogged(data) {
    this.userProgress.stats.synchronicities_logged++;
    await this.checkDailyChallengeProgress('synchronicity_hunter', data);
  }

  async handleDoubtCleared(data) {
    this.userProgress.stats.doubts_cleared++;
  }

  async handleReflectionCompleted(data) {
    this.userProgress.stats.reflections_completed++;
    await this.updateStreak('reflection');
    await this.checkDailyChallengeProgress('reflection_master', data);
  }

  async handlePersonaActivated(data) {
    this.userProgress.stats.personas_activated.add(data.personaId);
  }

  async handleMatrixViewed(data) {
    this.userProgress.stats.matrix_views++;
  }

  async handleCommunityShare(data) {
    this.userProgress.stats.community_shares++;
  }

  async handleObstacleLogged(data) {
    this.userProgress.stats.obstacles_logged++;
  }

  async handlePatternBroken(data) {
    this.userProgress.stats.patterns_broken++;
  }

  async handleGratitudeLogged(data) {
    this.userProgress.stats.gratitude_entries++;
  }

  async handleFieldCoherenceUpdate(data) {
    if (data.coherence > 80) {
      await this.updateStreak('high_coherence');
    }
  }

  async handleIntentionCompleted(data) {
    // Implementation for intention completion tracking
  }

  async handleCouncilActivated(data) {
    // Track council activation with persona count
    this.userProgress.stats.council_activations = (this.userProgress.stats.council_activations || 0) + 1;
  }

  async handleMessageSent(data) {
    this.userProgress.stats.messages_sent = (this.userProgress.stats.messages_sent || 0) + 1;
  }

  async updateStreak(streakType) {
    const today = new Date().toDateString();
    const streak = this.userProgress.streaks[streakType];
    
    if (streak.lastDate === today) {
      // Already updated today
      return;
    }
    
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toDateString();
    
    if (streak.lastDate === yesterdayStr) {
      // Continue streak
      streak.current++;
      streak.best = Math.max(streak.best, streak.current);
    } else {
      // Reset streak
      streak.current = 1;
    }
    
    streak.lastDate = today;
  }

  async checkAchievements() {
    if (!this.achievements) return;
    
    for (const category of Object.values(this.achievements.achievement_categories)) {
      for (const achievement of category.achievements) {
        if (this.userProgress.unlockedAchievements.includes(achievement.id)) {
          continue; // Already unlocked
        }
        
        if (this.checkUnlockCondition(achievement.unlock_condition)) {
          await this.unlockAchievement(achievement);
        }
      }
    }
  }

  checkUnlockCondition(condition) {
    switch(condition.type) {
      case 'session_count':
        return this.userProgress.stats.sessions_completed >= condition.value;
      case 'consecutive_days':
        return this.userProgress.streaks.daily_engagement.current >= condition.value;
      case 'win_count':
        return this.userProgress.stats.wins_logged >= condition.value;
      case 'synchronicity_count':
        return this.userProgress.stats.synchronicities_logged >= condition.value;
      case 'reflection_count':
        return this.userProgress.stats.reflections_completed >= condition.value;
      case 'persona_count':
        return this.userProgress.stats.personas_activated.size >= condition.value;
      case 'level_reached':
        return this.userProgress.level >= condition.value;
      case 'points_earned':
        return this.userProgress.points >= condition.value;
      case 'streak_maintained':
        return this.userProgress.streaks[condition.streak_type].current >= condition.value;
      case 'community_shares':
        return this.userProgress.stats.community_shares >= condition.value;
      case 'obstacles_cleared':
        return this.userProgress.stats.obstacles_logged >= condition.value;
      case 'patterns_broken':
        return this.userProgress.stats.patterns_broken >= condition.value;
      case 'gratitude_entries':
        return this.userProgress.stats.gratitude_entries >= condition.value;
      case 'council_activations':
        return (this.userProgress.stats.council_activations || 0) >= condition.value;
      case 'messages_sent':
        return (this.userProgress.stats.messages_sent || 0) >= condition.value;
      default:
        return false;
    }
  }

  async unlockAchievement(achievement) {
    this.userProgress.unlockedAchievements.push(achievement.id);
    this.userProgress.points += achievement.points;
    
    // Apply reward
    if (achievement.reward) {
      await this.applyReward(achievement.reward);
    }
    
    // Notify listeners
    this.listeners.forEach(listener => {
      listener('achievement_unlocked', { achievement });
    });
    
    console.log(`🏆 Achievement unlocked: ${achievement.name}`);
  }

  async applyReward(reward) {
    switch(reward.type) {
      case 'unlock_feature':
        // Implementation for feature unlocks
        break;
      case 'unlock_persona':
        // Implementation for persona unlocks
        break;
      case 'badge':
        if (!this.userProgress.badges.includes(reward.badge)) {
          this.userProgress.badges.push(reward.badge);
        }
        break;
      case 'points_multiplier':
        // Implementation for point multipliers
        break;
    }
  }

  async updateLevel() {
    const newLevel = Math.floor(this.userProgress.points / 100) + 1;
    if (newLevel > this.userProgress.level) {
      this.userProgress.level = newLevel;
      console.log(`⬆️ Level up! Now level ${newLevel}`);
      
      // Notify listeners
      this.listeners.forEach(listener => {
        listener('level_up', { newLevel });
      });
    }
  }

  async checkDailyChallengeProgress(challengeType, data) {
    // Implementation for daily challenge progress checking
  }

  refreshDailyChallenges() {
    // Implementation for refreshing daily challenges
  }

  addListener(callback) {
    this.listeners.push(callback);
  }

  removeListener(callback) {
    this.listeners = this.listeners.filter(listener => listener !== callback);
  }

  getProgress() {
    return { ...this.userProgress };
  }

  getAchievements() {
    return this.achievements;
  }
}

// ============================================
// LOCAL STORAGE MANAGER
// ============================================

class LocalStorageManager {
  get(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Storage get error for key', key, ':', e);
      return null;
    }
  }

  set(key, value) {
    try {
      const serialized = JSON.stringify(value);
      // Check if we're approaching storage limits
      if (serialized.length > 5000000) { // ~5MB
        console.warn('Large data being saved to localStorage. Consider cleanup.');
      }
      localStorage.setItem(key, serialized);
      return true;
    } catch (e) {
      console.error('Storage set error for key', key, ':', e);
      // Try to free up space if quota exceeded
      if (e.name === 'QuotaExceededError') {
        console.warn('Storage quota exceeded. Consider clearing old data.');
      }
      return false;
    }
  }

  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error('Storage remove error:', e);
    }
  }

  clear() {
    try {
      localStorage.clear();
    } catch (e) {
      console.error('Storage clear error:', e);
    }
  }
}

// ============================================
// INITIALIZE APP
// ============================================

let app;

document.addEventListener('DOMContentLoaded', () => {
  app = new QuantumRealityApp();
});

// Add toast animations to document
const style = document.createElement('style');
style.textContent = `
  @keyframes toastIn {
    from { opacity: 0; transform: translate(-50%, 20px); }
    to { opacity: 1; transform: translate(-50%, 0); }
  }
  @keyframes toastOut {
    from { opacity: 1; transform: translate(-50%, 0); }
    to { opacity: 0; transform: translate(-50%, -20px); }
  }
`;
document.head.appendChild(style);
