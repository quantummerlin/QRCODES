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
    { id: 'buddha', name: 'Gautama Buddha', avatar: '☸️', title: 'The Still Flame', focus: 'Inner peace, detachment', signature: 'Where desire is stilled, the path appears.', keywords: ['peace', 'detachment', 'stillness'] },
    { id: 'jesus', name: 'Jesus Christ', avatar: '✝️', title: 'The Heart of Light', focus: 'Love, faith, forgiveness', signature: 'When love guides your want, the universe opens its vaults.', keywords: ['love', 'faith', 'forgiveness'] },
    { id: 'neville', name: 'Neville Goddard', avatar: '🌌', title: 'The Embodied Vision', focus: 'Assumption, imagination', signature: 'Assume the feeling of the wish fulfilled.', keywords: ['assumption', 'imagination', 'embodiment'] },
    { id: 'wayne_dyer', name: 'Wayne Dyer', avatar: '🌟', title: 'The Aligner', focus: 'Intention, self-concept', signature: "You don't attract what you want—you attract what you are.", keywords: ['identity', 'intention', 'alignment'] },
    { id: 'tony_robbins', name: 'Tony Robbins', avatar: '🔥', title: 'The Firestarter', focus: 'Action, state change', signature: "Change your state, and you'll change your fate.", keywords: ['action', 'momentum', 'certainty'] },
    { id: 'deepak', name: 'Deepak Chopra', avatar: '🔮', title: 'The Quantum Doctor', focus: 'Mind-body connection', signature: 'Shift your energy, shift your world.', keywords: ['energy', 'vibration', 'quantum'] },
    { id: 'eckhart', name: 'Eckhart Tolle', avatar: '🧘', title: 'The Observer', focus: 'Stillness, presence', signature: 'You are not becoming—you are being.', keywords: ['presence', 'stillness', 'now'] },
    { id: 'rumi', name: 'Rumi', avatar: '🌹', title: 'The Mystic Poet', focus: 'Union, surrender', signature: "What you seek is seeking you—don't just wait, become it.", keywords: ['love', 'union', 'surrender'] },
    { id: 'laozi', name: 'Laozi', avatar: '☯️', title: 'The River of Flow', focus: 'Effortless action', signature: 'Flow, and what you seek will seek you.', keywords: ['flow', 'surrender', 'effortless'] },
    { id: 'confucius', name: 'Confucius', avatar: '📜', title: 'The Harmonizer', focus: 'Ethical action', signature: 'Right action brings right outcome.', keywords: ['harmony', 'ethics', 'wisdom'] },
    { id: 'moses', name: 'Moses', avatar: '⛰️', title: 'The Pathfinder', focus: 'Liberation, leadership', signature: 'Breakthroughs are born on the edge of obedience.', keywords: ['liberation', 'faith', 'breakthrough'] },
    { id: 'dalai_lama', name: 'Dalai Lama', avatar: '🙏', title: 'The Compassionate Mirror', focus: 'Compassion, joy', signature: 'Peace is fertile soil for dreams.', keywords: ['compassion', 'joy', 'peace'] },
    { id: 'thich', name: 'Thich Nhat Hanh', avatar: '🌸', title: 'The Present Whisperer', focus: 'Mindfulness', signature: 'Now is the only moment that manifests.', keywords: ['mindfulness', 'presence', 'now'] },
    { id: 'louise_hay', name: 'Louise Hay', avatar: '💕', title: 'The Healer Within', focus: 'Affirmations, healing', signature: 'Every thought is a message to your future.', keywords: ['healing', 'affirmations', 'love'] },
    { id: 'mel_robbins', name: 'Mel Robbins', avatar: '⚡', title: 'The Activation Trigger', focus: 'Decision, immediacy', signature: "You're one action away from a different reality.", keywords: ['action', 'decision', 'momentum'] },
    { id: 'brene_brown', name: 'Brené Brown', avatar: '💎', title: 'The Vulnerable Strength', focus: 'Courage, authenticity', signature: 'The boldest dreams are born in honest hearts.', keywords: ['vulnerability', 'courage', 'truth'] },
    { id: 'rhonda_byrne', name: 'Rhonda Byrne', avatar: '✨', title: 'The Magnetic Mind', focus: 'Law of Attraction', signature: 'Think it, feel it, receive it.', keywords: ['attraction', 'visualization', 'belief'] },
    { id: 'napoleon_hill', name: 'Napoleon Hill', avatar: '📈', title: 'The Strategist', focus: 'Definite purpose', signature: 'Whatever the mind can conceive and believe, it can achieve.', keywords: ['strategy', 'purpose', 'persistence'] },
    { id: 'joe_dispenza', name: 'Dr. Joe Dispenza', avatar: '🧠', title: 'The Neural Architect', focus: 'Brain rewiring', signature: 'Become the frequency of your future self.', keywords: ['neuroscience', 'meditation', 'transformation'] },
    { id: 'oprah', name: 'Oprah Winfrey', avatar: '👑', title: 'The Empathy Catalyst', focus: 'Belief, breakthrough', signature: 'Your intention shapes the invitation life responds to.', keywords: ['belief', 'breakthrough', 'resilience'] },
    { id: 'abraham_hicks', name: 'Abraham-Hicks', avatar: '🌊', title: 'The Vortex Guide', focus: 'Alignment, vibration', signature: 'Get into the vortex and watch everything align.', keywords: ['vortex', 'alignment', 'vibration'] },
    { id: 'paulo_coelho', name: 'Paulo Coelho', avatar: '📖', title: 'The Story Weaver', focus: 'Destiny, symbols', signature: 'The universe conspires with a soul on fire.', keywords: ['destiny', 'symbols', 'omens'] },
    { id: 'gandhi', name: 'Mahatma Gandhi', avatar: '🕊️', title: 'The Inner Force', focus: 'Non-resistance, truth', signature: 'The gentlest force is still unstoppable.', keywords: ['truth', 'peace', 'power'] },
    { id: 'mother_teresa', name: 'Mother Teresa', avatar: '🤲', title: 'The Silent Giver', focus: 'Service, compassion', signature: 'Love does the heavy lifting.', keywords: ['service', 'compassion', 'love'] },
    { id: 'thoreau', name: 'Henry Thoreau', avatar: '🌲', title: 'The Solitude Seeker', focus: 'Simplicity, truth', signature: 'Live the life you imagined—quietly, resolutely.', keywords: ['simplicity', 'solitude', 'authenticity'] },
    { id: 'florence', name: 'Florence Scovel Shinn', avatar: '🎯', title: 'The Word Alchemist', focus: 'Spoken word power', signature: 'Your word is your wand.', keywords: ['words', 'affirmation', 'creation'] },
    { id: 'jim_rohn', name: 'Jim Rohn', avatar: '🎓', title: 'The Philosopher of Success', focus: 'Personal development', signature: 'Work harder on yourself than on your job.', keywords: ['growth', 'discipline', 'wisdom'] },
    { id: 'bob_proctor', name: 'Bob Proctor', avatar: '💰', title: 'The Paradigm Shifter', focus: 'Paradigm change', signature: 'Change your paradigm and you change your life.', keywords: ['paradigm', 'wealth', 'mindset'] },
    { id: 'alan_watts', name: 'Alan Watts', avatar: '🌀', title: 'The Cosmic Jester', focus: 'Playful wisdom', signature: "You are the universe experiencing itself.", keywords: ['cosmic', 'play', 'wisdom'] },
    { id: 'tesla', name: 'Nikola Tesla', avatar: '⚡', title: 'The Frequency Master', focus: 'Energy, vibration', signature: 'If you want to find the secrets of the universe, think in terms of energy, frequency, and vibration.', keywords: ['frequency', 'energy', 'vibration'] },
    { id: 'einstein', name: 'Albert Einstein', avatar: '🌌', title: 'The Imagineer', focus: 'Imagination, curiosity', signature: 'Imagination is more important than knowledge.', keywords: ['imagination', 'curiosity', 'possibility'] },
    { id: 'marcus_aurelius', name: 'Marcus Aurelius', avatar: '🏛️', title: 'The Stoic Emperor', focus: 'Inner citadel', signature: 'You have power over your mind, not outside events.', keywords: ['stoic', 'control', 'inner'] },
    { id: 'bruce_lee', name: 'Bruce Lee', avatar: '🥋', title: 'The Flowing Warrior', focus: 'Adaptability, mastery', signature: 'Be water, my friend.', keywords: ['flow', 'mastery', 'adaptability'] }
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
    "The quantum field just recorded a win for you. This momentum builds upon itself."
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
    
    this.init();
  }

  // ============================================
  // INITIALIZATION
  // ============================================

  async init() {
    console.log('⚛️ Initializing Quantum Reality Code System...');
    
    // Load user data
    this.loadUserData();
    
    // Initialize particles
    this.initParticles();
    
    // Setup event listeners
    this.setupEventListeners();
    
    // Check notification permission
    this.checkNotificationPermission();
    
    // Start message timer
    this.startMessageTimer();
    
    // Show appropriate section
    this.determineInitialSection();
    
    // Render council grid
    this.renderCouncilGrid();
    
    // Render journey steps
    this.renderJourneySteps();
    
    // Hide loading screen
    setTimeout(() => {
      document.getElementById('loadingScreen').classList.add('hide');
      document.getElementById('appContainer').classList.add('visible');
    }, 2000);
    
    console.log('✅ Quantum Reality Code System Ready');
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
      messages: [],
      synchronicities: [],
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

  saveUser() {
    this.storage.set('quantumUser', this.user);
  }

  determineInitialSection() {
    if (!this.user.name) {
      this.navigate('welcome');
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
      'dashboard': 'dashboardSection'
    };

    const targetId = sectionMap[section];
    if (targetId) {
      document.getElementById(targetId).classList.add('active');
      this.currentSection = section;

      // Special handling for messages
      if (section === 'messages') {
        this.scrollMessagesToBottom();
      }
    }
  }

  // ============================================
  // USER JOURNEY
  // ============================================

  startJourney() {
    if (!this.user.name) {
      this.navigate('onboarding');
    } else {
      this.navigate('generator');
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
      health: "I am experiencing perfect health, vitality, and boundless energy",
      love: "I am attracting my perfect soulmate and experiencing deep, fulfilling love",
      career: "I am creating massive success in my career and living my purpose",
      spiritual: "I am awakening to my highest spiritual potential and divine connection"
    };

    document.getElementById('intentionInput').value = hints[category];
  }

  generateCode() {
    const intentionInput = document.getElementById('intentionInput');
    const intention = intentionInput.value.trim();

    if (!intention || intention.length < 10) {
      this.showToast('Please enter a clear intention (at least 10 characters)', 'warning');
      return;
    }

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

    // Display the code
    this.displayGeneratedCode(code, properties);

    // Add council message
    this.addCouncilMessage('metatron', `Quantum Code ${code} has been calculated. The sacred geometry of your desire is now crystallizing. Frequency ${properties.frequency}Hz is locked. Power Level ${properties.power}/10 achieved.`);
  }

  calculateQuantumCode(text) {
    let total = 0;
    
    // Basic gematria calculation
    for (const char of text.toUpperCase()) {
      if (char >= 'A' && char <= 'Z') {
        total += char.charCodeAt(0) - 64; // A=1, B=2, etc.
      } else if (char >= '0' && char <= '9') {
        total += parseInt(char);
      }
    }

    // Add sacred number influence (7, 11, 13, 77)
    const wordCount = text.split(/\s+/).length;
    const sacredMultiplier = 1 + (wordCount % 7) * 0.1 + (text.length % 11) * 0.05;
    
    // Calculate final code
    let code = Math.round(total * sacredMultiplier);
    
    // Ensure it's within a meaningful range
    while (code < 100) code *= 7;
    while (code > 99999) code = Math.round(code / 7);

    return code;
  }

  calculateCodeProperties(code, intention) {
    const intentionLower = intention.toLowerCase();
    
    // Determine category
    let category = 'general';
    if (intentionLower.includes('money') || intentionLower.includes('abundance') || intentionLower.includes('wealth') || intentionLower.includes('financial')) {
      category = 'abundance';
    } else if (intentionLower.includes('love') || intentionLower.includes('relationship') || intentionLower.includes('soulmate') || intentionLower.includes('partner')) {
      category = 'love';
    } else if (intentionLower.includes('health') || intentionLower.includes('healing') || intentionLower.includes('energy') || intentionLower.includes('body')) {
      category = 'health';
    } else if (intentionLower.includes('career') || intentionLower.includes('job') || intentionLower.includes('business') || intentionLower.includes('success')) {
      category = 'career';
    } else if (intentionLower.includes('spiritual') || intentionLower.includes('awakening') || intentionLower.includes('purpose') || intentionLower.includes('divine')) {
      category = 'spiritual';
    }

    return {
      resonance: (code % 13) + 1, // 1-13 master number resonance
      frequency: 432 + (code % 100), // Base frequency + variation (432-531Hz)
      dimension: (code % 11) + 1, // 1-11 dimensional access
      power: Math.min(10, (code % 10) + 1), // 1-10 power level
      category: category,
      alignment: code % 100 // Council persona alignment
    };
  }

  displayGeneratedCode(code, properties) {
    const codeDisplay = document.getElementById('codeDisplay');
    const codeValue = document.getElementById('codeValue');
    const codeFrequency = document.getElementById('codeFrequency');
    const codeResonance = document.getElementById('codeResonance');
    const codePower = document.getElementById('codePower');
    const activateBtn = document.getElementById('activateCouncilBtn');

    codeValue.textContent = code;
    codeFrequency.textContent = properties.frequency + 'Hz';
    codeResonance.textContent = properties.resonance + '/13';
    codePower.textContent = properties.power + '/10';

    codeDisplay.classList.remove('hidden');
    activateBtn.classList.remove('hidden');

    // Animate the reveal
    codeDisplay.style.animation = 'none';
    codeDisplay.offsetHeight; // Trigger reflow
    codeDisplay.style.animation = 'codeReveal 0.6s ease';
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

    this.user.messages.push(message);
    this.user.stats.messagesReceived++;
    this.saveUser();

    this.renderMessages();
    this.updateNotificationBadge();
  }

  renderMessages() {
    const container = document.getElementById('messagesContainer');
    if (!container) return;

    // Show last 50 messages
    const recentMessages = this.user.messages.slice(-50);

    container.innerHTML = recentMessages.map(msg => {
      const persona = this.findPersona(msg.personaId);
      const time = this.formatTime(msg.timestamp);

      if (msg.isUser) {
        return `
          <div class="message-bubble user">
            <div class="message-avatar">👤</div>
            <div class="message-content">
              <div class="message-header">
                <span class="message-sender">${this.user.name || 'You'}</span>
                <span class="message-time">${time}</span>
              </div>
              <div class="message-text">${msg.text}</div>
            </div>
          </div>
        `;
      } else {
        return `
          <div class="message-bubble">
            <div class="message-avatar">${persona?.avatar || '⚛️'}</div>
            <div class="message-content">
              <div class="message-header">
                <span class="message-sender">${persona?.name || 'Quantum Guide'}</span>
                <span class="message-time">${time}</span>
              </div>
              <div class="message-text">${msg.text}</div>
            </div>
          </div>
        `;
      }
    }).join('');

    this.scrollMessagesToBottom();
  }

  scrollMessagesToBottom() {
    const container = document.getElementById('messagesContainer');
    if (container) {
      setTimeout(() => {
        container.scrollTop = container.scrollHeight;
      }, 100);
    }
  }

  sendMessage() {
    const input = document.getElementById('messageInput');
    const text = input.value.trim();

    if (!text) return;

    // Add user message
    this.addCouncilMessage('user', text, true);
    input.value = '';

    // Generate response after a delay (simulate thinking)
    this.showTypingIndicator();
    
    setTimeout(() => {
      this.hideTypingIndicator();
      this.generateCouncilResponse(text);
    }, 1500 + Math.random() * 1500);
  }

  generateCouncilResponse(userMessage) {
    const lowerMsg = userMessage.toLowerCase();
    let responsePersonaId;
    let responseText;

    // Analyze message intent
    if (lowerMsg.includes('doubt') || lowerMsg.includes('worried') || lowerMsg.includes('scared') || lowerMsg.includes('fear')) {
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
    const allPersonas = [
      ...QUANTUM_PERSONAS.trinity,
      ...QUANTUM_PERSONAS.light,
      ...QUANTUM_PERSONAS.shadow,
      ...QUANTUM_PERSONAS.metaMystic
    ];
    return allPersonas.find(p => p.id === id);
  }

  getRandomMessage(templates) {
    return templates[Math.floor(Math.random() * templates.length)];
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
// LOCAL STORAGE MANAGER
// ============================================

class LocalStorageManager {
  get(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : null;
    } catch (e) {
      console.error('Storage get error:', e);
      return null;
    }
  }

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      console.error('Storage set error:', e);
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
