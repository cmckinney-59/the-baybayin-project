/**
 * Alphabet Context File
 * Stores alphabet mappings and transliteration rules for different writing systems
 */

export interface AlphabetMapping {
  from: string;
  to: string;
  order?: number; // Processing order (lower numbers first)
}

export interface AlphabetConfig {
  name: string;
  mappings: AlphabetMapping[];
}

/**
 * Aurebesh alphabet mappings
 * Maps Latin letter combinations to Aurebesh transliteration characters
 */
export const AUREBESH_CONFIG: AlphabetConfig = {
  name: "Aurebesh",
  mappings: [
    { from: "ch", to: "ç", order: 1 },
    { from: "ae", to: "æ", order: 2 },
    { from: "eo", to: "ë", order: 3 },
    { from: "kh", to: "þ", order: 4 },
    { from: "ng", to: "ñ", order: 5 },
    { from: "oo", to: "ø", order: 6 },
    { from: "sh", to: "ß", order: 7 },
    { from: "th", to: "ð", order: 8 },
  ],
};

/**
 * Baybayin alphabet mappings
 * Note: Baybayin requires more complex processing rules,
 * so this may be expanded or used differently
 */
export const BAYBAYIN_CONFIG: AlphabetConfig = {
  name: "Baybayin",
  mappings: [
    { from: "sh", to: "siy", order: 1 },
    { from: "ph", to: "f", order: 2 },
    { from: "th", to: "t", order: 3 },
    { from: "x", to: "k+s", order: 4 },
  ],
};

/**
 * Deseret alphabet mappings
 * Can be expanded as needed
 */
export const DESERET_CONFIG: AlphabetConfig = {
  name: "Deseret",
  mappings: [],
};

/**
 * Get alphabet configuration by name
 */
export function getAlphabetConfig(name: string): AlphabetConfig | undefined {
  const configs: Record<string, AlphabetConfig> = {
    Aurebesh: AUREBESH_CONFIG,
    Baybayin: BAYBAYIN_CONFIG,
    "Baybayin Lite": BAYBAYIN_CONFIG,
    Deseret: DESERET_CONFIG,
  };

  return configs[name];
}

/**
 * Get all available alphabet configurations
 */
export function getAllAlphabetConfigs(): AlphabetConfig[] {
  return [AUREBESH_CONFIG, BAYBAYIN_CONFIG, DESERET_CONFIG];
}
