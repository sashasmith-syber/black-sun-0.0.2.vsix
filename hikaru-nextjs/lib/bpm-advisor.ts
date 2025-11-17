/**
 * BPM Advisor - Helps users choose appropriate BPM for different music genres and moods
 */

export interface BpmRange {
  min: number;
  max: number;
  optimal: number;
}

export interface GenreRecommendation {
  genre: string;
  bpm: BpmRange;
  description: string;
  examples: string[];
  mood: string[];
}

export interface BpmAdvice {
  recommended: number;
  genre: string;
  description: string;
  alternatives: GenreRecommendation[];
}

// Genre-specific BPM recommendations
export const GENRE_BPM_GUIDE: GenreRecommendation[] = [
  {
    genre: 'Hip Hop',
    bpm: { min: 60, max: 100, optimal: 85 },
    description: 'Laid-back beats with strong bass and rhythmic flow',
    examples: ['Trap', 'Boom Bap', 'Lo-fi Hip Hop'],
    mood: ['relaxed', 'groovy', 'confident']
  },
  {
    genre: 'R&B / Soul',
    bpm: { min: 60, max: 90, optimal: 75 },
    description: 'Smooth, soulful rhythms perfect for late-night vibes',
    examples: ['Neo-Soul', 'Contemporary R&B', 'Quiet Storm'],
    mood: ['romantic', 'smooth', 'mellow']
  },
  {
    genre: 'Reggae / Dub',
    bpm: { min: 60, max: 90, optimal: 75 },
    description: 'Steady, syncopated rhythms with off-beat emphasis',
    examples: ['Roots Reggae', 'Dub', 'Dancehall'],
    mood: ['relaxed', 'positive', 'groovy']
  },
  {
    genre: 'Downtempo / Chillout',
    bpm: { min: 60, max: 100, optimal: 80 },
    description: 'Atmospheric and relaxing electronic music',
    examples: ['Trip Hop', 'Ambient', 'Lounge'],
    mood: ['calm', 'meditative', 'atmospheric']
  },
  {
    genre: 'Pop',
    bpm: { min: 100, max: 130, optimal: 120 },
    description: 'Catchy, mainstream appeal with danceable rhythms',
    examples: ['Dance Pop', 'Synth Pop', 'Electropop'],
    mood: ['upbeat', 'happy', 'energetic']
  },
  {
    genre: 'House',
    bpm: { min: 115, max: 130, optimal: 122 },
    description: 'Four-on-the-floor beats, perfect for dancing',
    examples: ['Deep House', 'Tech House', 'Progressive House'],
    mood: ['groovy', 'uplifting', 'energetic']
  },
  {
    genre: 'Techno',
    bpm: { min: 120, max: 140, optimal: 128 },
    description: 'Driving, repetitive beats with industrial textures',
    examples: ['Detroit Techno', 'Minimal Techno', 'Industrial'],
    mood: ['intense', 'dark', 'hypnotic']
  },
  {
    genre: 'Trance',
    bpm: { min: 125, max: 145, optimal: 138 },
    description: 'Uplifting melodies with euphoric buildups',
    examples: ['Progressive Trance', 'Uplifting Trance', 'Psytrance'],
    mood: ['euphoric', 'energetic', 'transcendent']
  },
  {
    genre: 'Drum & Bass',
    bpm: { min: 160, max: 180, optimal: 174 },
    description: 'Fast breakbeats with heavy bass lines',
    examples: ['Liquid DnB', 'Neurofunk', 'Jump Up'],
    mood: ['intense', 'energetic', 'aggressive']
  },
  {
    genre: 'Dubstep',
    bpm: { min: 135, max: 145, optimal: 140 },
    description: 'Heavy wobble bass and syncopated rhythms',
    examples: ['Brostep', 'Riddim', 'Deep Dubstep'],
    mood: ['aggressive', 'intense', 'dark']
  },
  {
    genre: 'Trap / EDM',
    bpm: { min: 130, max: 160, optimal: 140 },
    description: 'High-energy electronic with trap influences',
    examples: ['Festival Trap', 'Hybrid Trap', 'Future Bass'],
    mood: ['energetic', 'hype', 'powerful']
  },
  {
    genre: 'Hardstyle',
    bpm: { min: 145, max: 160, optimal: 150 },
    description: 'Hard kicks with euphoric melodies',
    examples: ['Raw Hardstyle', 'Euphoric Hardstyle', 'Hardcore'],
    mood: ['intense', 'powerful', 'euphoric']
  }
];

/**
 * Get BPM recommendation for a specific genre
 */
export function getBpmForGenre(genre: string): BpmRange | null {
  const recommendation = GENRE_BPM_GUIDE.find(
    g => g.genre.toLowerCase() === genre.toLowerCase()
  );
  return recommendation ? recommendation.bpm : null;
}

/**
 * Get genre recommendations for a given BPM
 */
export function getGenresForBpm(bpm: number): GenreRecommendation[] {
  return GENRE_BPM_GUIDE.filter(
    genre => bpm >= genre.bpm.min && bpm <= genre.bpm.max
  ).sort((a, b) => {
    // Sort by how close the BPM is to the optimal value
    const diffA = Math.abs(a.bpm.optimal - bpm);
    const diffB = Math.abs(b.bpm.optimal - bpm);
    return diffA - diffB;
  });
}

/**
 * Get BPM advice based on mood
 */
export function getBpmForMood(mood: string): GenreRecommendation[] {
  return GENRE_BPM_GUIDE.filter(
    genre => genre.mood.some(m => m.toLowerCase().includes(mood.toLowerCase()))
  );
}

/**
 * Get comprehensive BPM advice
 */
export function getBpmAdvice(bpm: number): BpmAdvice {
  const matchingGenres = getGenresForBpm(bpm);
  
  if (matchingGenres.length === 0) {
    // Find the closest genre
    let closestGenre = GENRE_BPM_GUIDE[0];
    let minDiff = Math.abs(closestGenre.bpm.optimal - bpm);
    
    for (const genre of GENRE_BPM_GUIDE) {
      const diff = Math.abs(genre.bpm.optimal - bpm);
      if (diff < minDiff) {
        minDiff = diff;
        closestGenre = genre;
      }
    }
    
    return {
      recommended: closestGenre.bpm.optimal,
      genre: closestGenre.genre,
      description: `${bpm} BPM is outside typical music ranges. Consider ${closestGenre.bpm.optimal} BPM for ${closestGenre.genre}.`,
      alternatives: [closestGenre]
    };
  }
  
  const primaryGenre = matchingGenres[0];
  
  return {
    recommended: bpm,
    genre: primaryGenre.genre,
    description: `${bpm} BPM is perfect for ${primaryGenre.genre}. ${primaryGenre.description}`,
    alternatives: matchingGenres.slice(1, 4) // Show up to 3 alternatives
  };
}

/**
 * Get all available moods
 */
export function getAllMoods(): string[] {
  const moods = new Set<string>();
  GENRE_BPM_GUIDE.forEach(genre => {
    genre.mood.forEach(m => moods.add(m));
  });
  return Array.from(moods).sort();
}

/**
 * Suggest optimal BPM for an activity
 */
export function getBpmForActivity(activity: string): BpmRange | null {
  const activityMap: { [key: string]: BpmRange } = {
    'meditation': { min: 60, max: 80, optimal: 70 },
    'yoga': { min: 60, max: 90, optimal: 75 },
    'studying': { min: 60, max: 100, optimal: 80 },
    'working': { min: 90, max: 120, optimal: 110 },
    'workout': { min: 120, max: 140, optimal: 130 },
    'running': { min: 140, max: 160, optimal: 150 },
    'party': { min: 120, max: 130, optimal: 125 },
    'clubbing': { min: 125, max: 140, optimal: 128 },
    'driving': { min: 100, max: 130, optimal: 120 },
    'relaxing': { min: 60, max: 90, optimal: 75 }
  };
  
  const key = activity.toLowerCase();
  return activityMap[key] || null;
}

/**
 * Validate BPM value
 */
export function validateBpm(bpm: number): { valid: boolean; message: string } {
  if (bpm < 40) {
    return {
      valid: false,
      message: 'BPM too low. Music typically ranges from 60-180 BPM.'
    };
  }
  
  if (bpm > 200) {
    return {
      valid: false,
      message: 'BPM too high. Music typically ranges from 60-180 BPM.'
    };
  }
  
  return {
    valid: true,
    message: 'Valid BPM'
  };
}
