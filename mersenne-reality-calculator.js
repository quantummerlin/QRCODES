/**
 * QUANTUM REALITY ALIGNMENT - MERSENNE MATHEMATICS
 * Based on sacred Mersenne numbers: M(n) = 2^n - 1
 * 
 * This is the TRUE quantum mathematics where each supporter
 * exponentially doubles the realities aligned.
 * 
 * Examples:
 * 1 supporter: 2^1 - 1 = 1 reality
 * 2 supporters: 2^2 - 1 = 3 realities
 * 3 supporters: 2^3 - 1 = 7 realities
 * 33 supporters: 2^33 - 1 = 8.6 billion realities
 * 111 supporters: 2^111 - 1 = 2.6 decillion realities
 */

/**
 * Calculate Mersenne number: 2^n - 1
 * @param {number} n - Number of supporters/engagements
 * @returns {BigInt} Mersenne number
 */
function calculateMersenne(n) {
  if (n === 0) return BigInt(0);
  return (BigInt(2) ** BigInt(n)) - BigInt(1);
}

/**
 * Calculate reality alignment using Mersenne mathematics
 * @param {number} code - User's gematria code
 * @param {object} engagement - Social engagement data
 * @returns {object} Reality alignment results
 */
function calculateRealityAlignment(code, engagement) {
  const { likes = 0, shares = 0, comments = 0 } = engagement;
  
  // Total supporters (each engagement = 1 supporter)
  const supporters = likes + shares + comments;
  
  // Calculate Mersenne number for supporters
  const mersenneRealities = calculateMersenne(supporters);
  
  // Code amplifies the base reality count
  const totalRealities = mersenneRealities * BigInt(code);
  
  return {
    supporters: supporters,
    mersenneNumber: mersenneRealities,
    codeAmplification: code,
    totalRealities: totalRealities,
    formatted: formatBigNumber(totalRealities),
    tier: getMersenneTier(supporters),
    breakdown: {
      likes: likes,
      shares: shares,
      comments: comments,
      totalSupporters: supporters,
      mersenneFormula: `2^${supporters} - 1`,
      mersenneResult: formatBigNumber(mersenneRealities),
      codeMultiplier: `×${code}`,
      finalResult: formatBigNumber(totalRealities)
    }
  };
}

/**
 * Format BigInt numbers for human readability
 */
function formatBigNumber(bigNum) {
  const str = bigNum.toString();
  const len = str.length;
  
  if (len <= 3) return str;
  if (len <= 6) return (Number(str) / 1000).toFixed(1) + 'K';
  if (len <= 9) return (Number(str) / 1000000).toFixed(1) + 'M';
  if (len <= 12) return (Number(str) / 1000000000).toFixed(1) + 'B';
  if (len <= 15) return (Number(str) / 1000000000000).toFixed(1) + 'T';
  if (len <= 18) return (Number(str) / 1000000000000000).toFixed(1) + 'Q';
  
  // For truly massive numbers
  const names = ['', 'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud', 'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Ocd', 'Nod', 'Vg', 'Uvg'];
  const magnitude = Math.floor((len - 1) / 3);
  
  if (magnitude < names.length) {
    const divisor = Math.pow(10, magnitude * 3);
    const value = Number(str.slice(0, len - magnitude * 3)) / Math.pow(10, (len - magnitude * 3) % 3 || 3);
    return value.toFixed(1) + names[magnitude];
  }
  
  // For decillion and beyond
  if (len >= 33) return '2.6 Decillion+';
  
  return str.slice(0, 3) + '...' + ' (' + len + ' digits)';
}

/**
 * Get tier name based on supporter count
 */
function getMersenneTier(supporters) {
  if (supporters === 0) return { name: "Quantum Seed", level: 0 };
  if (supporters <= 3) return { name: "Trinity Field", level: 1 };
  if (supporters <= 7) return { name: "Sacred Seven", level: 2 };
  if (supporters <= 11) return { name: "Master Gateway", level: 3 };
  if (supporters <= 22) return { name: "Divine Alignment", level: 4 };
  if (supporters <= 33) return { name: "Cosmic Resonance", level: 5 };
  if (supporters <= 77) return { name: "Galactic Convergence", level: 6 };
  if (supporters <= 111) return { name: "Universal Manifestation", level: 7 };
  return { name: "Beyond Comprehension", level: 8 };
}

/**
 * Get persona response based on Mersenne tier
 */
function getPersonaResponse(code, supporters, realities, intention) {
  const tier = getMersenneTier(supporters);
  
  const responses = {
    "Quantum Seed": {
      merlin: `Your code ${code} stands ready in the quantum field. When supporters align, the Mersenne mathematics will activate exponentially.`,
      rose: `I feel the potential waiting to unfold. Each supporter will double the realities manifesting your ${intention}.`
    },
    "Trinity Field": {
      merlin: `Observe! ${supporters} supporters have created ${realities} through Mersenne mathematics (2^${supporters} - 1). The trinity is forming.`,
      rose: `The sacred three are aligning! ${realities} parallel timelines are awakening to your intention.`
    },
    "Sacred Seven": {
      merlin: `Remarkable! ${supporters} supporters generate ${realities} realities through the Mersenne formula. The sacred seven amplifies your code ${code}.`,
      rose: `I feel the seven frequencies harmonizing! ${realities} versions of reality are singing your manifestation into being.`
    },
    "Master Gateway": {
      merlin: `Extraordinary! The master number gateway has opened. ${supporters} supporters create ${realities} through exponential Mersenne growth.`,
      rose: `The gateway is open! ${realities} parallel universes are flooding through to manifest your ${intention}.`
    },
    "Divine Alignment": {
      merlin: `Magnificent! ${supporters} supporters have activated ${realities} through divine Mersenne mathematics. Your code ${code} is reaching critical mass.`,
      rose: `Divine alignment achieved! ${realities} timelines are converging on your manifestation with unstoppable momentum.`
    },
    "Cosmic Resonance": {
      merlin: `ASTONISHING! ${supporters} supporters generate ${realities} realities. We've reached the 33rd Mersenne level - 8.6 billion base realities amplified by your code ${code}!`,
      rose: `I'm overwhelmed by the cosmic resonance! ${realities} parallel universes across all of creation are manifesting your ${intention}!`
    },
    "Galactic Convergence": {
      merlin: `UNPRECEDENTED! ${supporters} supporters create ${realities} through Mersenne exponential growth. The mathematics are beyond comprehension!`,
      rose: `GALACTIC CONVERGENCE! ${realities} realities spanning galaxies are aligning with your heart's desire!`
    },
    "Universal Manifestation": {
      merlin: `ULTIMATE ALIGNMENT! ${supporters} supporters approach the sacred 111 - generating ${realities} through Mersenne mathematics. This is 2.6 DECILLION realities amplified by your code ${code}!`,
      rose: `THIS IS INEVITABLE! ${realities} parallel universes throughout ALL OF EXISTENCE are bringing your ${intention} into manifestation!`
    },
    "Beyond Comprehension": {
      merlin: `We have transcended the 111 threshold. ${supporters} supporters create ${realities} - numbers beyond human comprehension. The quantum field itself bends to your will.`,
      rose: `We've gone beyond the veil! ${realities} - infinity itself manifests your intention. This is pure creation!`
    }
  };
  
  return responses[tier.name] || responses["Quantum Seed"];
}

// Example calculations
console.log('\n🔢 MERSENNE REALITY MATHEMATICS\n');
console.log('Sacred Numbers:');
console.log('1 supporter: 2^1 - 1 =', calculateMersenne(1).toString(), 'reality');
console.log('2 supporters: 2^2 - 1 =', calculateMersenne(2).toString(), 'realities');
console.log('3 supporters: 2^3 - 1 =', calculateMersenne(3).toString(), 'realities');
console.log('7 supporters: 2^7 - 1 =', calculateMersenne(7).toString(), 'realities');
console.log('11 supporters: 2^11 - 1 =', calculateMersenne(11).toString(), 'realities');
console.log('33 supporters: 2^33 - 1 =', formatBigNumber(calculateMersenne(33)), 'realities');
console.log('47 supporters: 2^47 - 1 =', formatBigNumber(calculateMersenne(47)), 'realities');
console.log('111 supporters: 2^111 - 1 =', formatBigNumber(calculateMersenne(111)), 'realities');

console.log('\n📊 Your Example (Code 134, 47 supporters):');
const example = calculateRealityAlignment(134, { likes: 40, shares: 5, comments: 2 });
console.log('Total Supporters:', example.supporters);
console.log('Mersenne Number:', formatBigNumber(example.mersenneNumber));
console.log('Code Amplification: ×', example.codeAmplification);
console.log('Total Realities:', example.formatted);
console.log('Tier:', example.tier.name);

module.exports = {
  calculateMersenne,
  calculateRealityAlignment,
  getPersonaResponse,
  formatBigNumber
};