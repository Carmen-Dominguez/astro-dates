interface Point {
    x: number;
    y: number;
    name?: string;
    magnitude?: number;  // Star brightness
  }
  
  interface ConstellationData {
    points: Point[];
    lines: number[][];
  }
  
  export const constellations: Record<string, ConstellationData> = {
    Scorpio: {
      points: [
        { x: 35, y: 20, name: "Pi Scorpii" },        // 0
        { x: 25, y: 25, name: "Rho Scorpii" },       // 1
        { x: 45, y: 25, name: "Beta Scorpii" },      // 2
        { x: 40, y: 35, name: "Delta Scorpii" },     // 3
        { x: 45, y: 45, name: "Antares", magnitude: 1.0 },  // 4
        { x: 50, y: 55, name: "Tau Scorpii" },       // 5
        { x: 55, y: 65, name: "Epsilon Scorpii" },   // 6
        { x: 65, y: 70, name: "Mu Scorpii" },        // 7
        { x: 75, y: 72, name: "Zeta Scorpii" },      // 8
        { x: 85, y: 68, name: "Eta Scorpii" },       // 9
        { x: 90, y: 60, name: "Theta Scorpii" }      // 10
      ],
      lines: [
        [1, 3],  // Bottom claw to head
        [2, 3],  // Top claw to head
        [3, 4],  // Head to Antares
        [4, 5],  // Antares to body
        [5, 6],  // Body to tail start
        [6, 7],  // Tail segment 1
        [7, 8],  // Tail segment 2
        [8, 9],  // Tail segment 3
        [9, 10]  // Tail end
      ]
    },
    Scorpius: {
        points: [
          { x: 35, y: 20, name: "Pi Scorpii" },        // 0
          { x: 25, y: 25, name: "Rho Scorpii" },       // 1
          { x: 45, y: 25, name: "Beta Scorpii" },      // 2
          { x: 40, y: 35, name: "Delta Scorpii" },     // 3
          { x: 45, y: 45, name: "Antares", magnitude: 1.0 },  // 4
          { x: 50, y: 55, name: "Tau Scorpii" },       // 5
          { x: 55, y: 65, name: "Epsilon Scorpii" },   // 6
          { x: 65, y: 70, name: "Mu Scorpii" },        // 7
          { x: 75, y: 72, name: "Zeta Scorpii" },      // 8
          { x: 85, y: 68, name: "Eta Scorpii" },       // 9
          { x: 90, y: 60, name: "Theta Scorpii" }      // 10
        ],
        lines: [
          [1, 3],  // Bottom claw to head
          [2, 3],  // Top claw to head
          [3, 4],  // Head to Antares
          [4, 5],  // Antares to body
          [5, 6],  // Body to tail start
          [6, 7],  // Tail segment 1
          [7, 8],  // Tail segment 2
          [8, 9],  // Tail segment 3
          [9, 10]  // Tail end
        ]
      },
  
    Virgo: {
      points: [
        { x: 30, y: 20, name: "Vindemiatrix", magnitude: 2.85 },  // 0
        { x: 45, y: 25, name: "Zaniah" },           // 1
        { x: 55, y: 35, name: "Porrima" },          // 2
        { x: 40, y: 45, name: "Auva" },             // 3
        { x: 25, y: 55, name: "Spica", magnitude: 1.0 },  // 4
        { x: 50, y: 50, name: "Heze" },             // 5
        { x: 65, y: 40, name: "Beta Virginis" },    // 6
        { x: 20, y: 35, name: "Nu Virginis" },      // 7
        { x: 15, y: 45, name: "Tau Virginis" }      // 8
      ],
      lines: [
        [0, 1],  // Head to shoulder
        [1, 2],  // Shoulder to arm
        [2, 5],  // Arm to waist
        [5, 3],  // Waist to hip
        [3, 4],  // Hip to Spica
        [7, 3],  // Dress side
        [8, 3]   // Dress side
      ]
    },

    Libra: {
      points: [
        { x: 30, y: 30, name: "Zubenelgenubi", magnitude: 2.75 }, // Alpha Librae
        { x: 45, y: 30, name: "Zubeneschamali", magnitude: 2.61 }, // Beta Librae
        { x: 35, y: 45, name: "Zubenelakrab", magnitude: 3.91 }, // Gamma Librae
        { x: 40, y: 55, name: "Brachium", magnitude: 3.29 }, // Sigma Librae
      ],
      lines: [
        [0, 1], // Main balance beam
        [2, 3]  // Scale pan connection
      ]
    },

    Leo: {
      points: [
        { x: 25, y: 30, name: "Regulus", magnitude: 1.4 }, // Alpha Leonis
        { x: 35, y: 25, name: "Algieba", magnitude: 2.01 }, // Gamma Leonis
        { x: 45, y: 30, name: "Zosma", magnitude: 2.56 }, // Delta Leonis
        { x: 55, y: 35, name: "Denebola", magnitude: 2.14 }, // Beta Leonis
        { x: 30, y: 40, name: "Rasalas", magnitude: 3.85 }, // Mu Leonis
        { x: 20, y: 45, name: "Alterf", magnitude: 4.32 }, // Lambda Leonis
      ],
      lines: [
        [0, 1], // Head to mane
        [1, 2], // Mane to back
        [2, 3], // Back to tail
        [0, 4], // Head to chest
        [4, 5]  // Chest to front leg
      ]
    },

    Taurus: {
      points: [
        { x: 40, y: 25, name: "Aldebaran", magnitude: 0.87 }, // Alpha Tauri
        { x: 30, y: 30, name: "Elnath", magnitude: 1.65 }, // Beta Tauri
        { x: 50, y: 30, name: "Alcyone", magnitude: 2.87 }, // Eta Tauri (Pleiades)
        { x: 45, y: 35, name: "Lambda Tauri", magnitude: 3.47 },
        { x: 35, y: 40, name: "Ain", magnitude: 3.53 }, // Epsilon Tauri
      ],
      lines: [
        [0, 1], // Horn
        [0, 2], // Head to Pleiades
        [0, 3], // Head to body
        [3, 4]  // Body connection
      ]
    },

    Gemini: {
      points: [
        { x: 30, y: 20, name: "Castor", magnitude: 1.58 }, // Alpha Geminorum
        { x: 30, y: 25, name: "Pollux", magnitude: 1.14 }, // Beta Geminorum
        { x: 40, y: 35, name: "Alhena", magnitude: 1.93 }, // Gamma Geminorum
        { x: 45, y: 45, name: "Wasat", magnitude: 3.53 }, // Delta Geminorum
        { x: 35, y: 55, name: "Mebsuta", magnitude: 3.06 }, // Epsilon Geminorum
      ],
      lines: [
        [0, 1], // Castor to Pollux
        [1, 2], // Upper body
        [2, 3], // Mid body
        [3, 4]  // Lower body
      ]
    }, 
    
    Cancer: {
        points: [
          { x: 35, y: 30, name: "Acubens", magnitude: 4.25 }, // Alpha Cancri
          { x: 45, y: 35, name: "Asellus Borealis", magnitude: 4.66 }, // Gamma Cancri
          { x: 40, y: 40, name: "Asellus Australis", magnitude: 3.94 }, // Delta Cancri
          { x: 30, y: 45, name: "Altarf", magnitude: 3.53 }, // Beta Cancri
          { x: 50, y: 45, name: "Iota Cancri", magnitude: 4.02 }
        ],
        lines: [
          [0, 1], // Upper claw
          [1, 2], // Center connection
          [2, 3], // Lower claw
          [2, 4]  // Body
        ]
      },
    
      Aries: {
        points: [
          { x: 30, y: 30, name: "Hamal", magnitude: 2.0 }, // Alpha Arietis
          { x: 40, y: 35, name: "Sheratan", magnitude: 2.64 }, // Beta Arietis
          { x: 50, y: 40, name: "Mesarthim", magnitude: 4.75 }, // Gamma Arietis
          { x: 45, y: 45, name: "41 Arietis", magnitude: 3.63 }
        ],
        lines: [
          [0, 1], // Head to first curve
          [1, 2], // First curve to second curve
          [2, 3]  // Horn
        ]
      },
    
      Sagittarius: {
        points: [
          { x: 35, y: 25, name: "Rukbat", magnitude: 3.96 }, // Alpha Sagittarii
          { x: 45, y: 30, name: "Arkab", magnitude: 3.93 }, // Beta Sagittarii
          { x: 40, y: 35, name: "Alnasl", magnitude: 2.98 }, // Gamma Sagittarii
          { x: 30, y: 40, name: "Kaus Media", magnitude: 2.70 }, // Delta Sagittarii
          { x: 25, y: 45, name: "Kaus Australis", magnitude: 1.79 }, // Epsilon Sagittarii
          { x: 50, y: 40, name: "Nunki", magnitude: 2.05 }, // Sigma Sagittarii
        ],
        lines: [
          [0, 1], // Base of bow
          [2, 3], // Arrow shaft
          [3, 4], // Bow string
          [4, 5]  // Bow curve
        ]
      },
    
      Capricorn: {
        points: [
          { x: 30, y: 30, name: "Algedi", magnitude: 3.58 }, // Alpha2 Capricorni
          { x: 40, y: 35, name: "Dabih", magnitude: 3.05 }, // Beta Capricorni
          { x: 50, y: 40, name: "Nashira", magnitude: 3.69 }, // Gamma Capricorni
          { x: 45, y: 45, name: "Deneb Algedi", magnitude: 2.87 }, // Delta Capricorni
          { x: 35, y: 50, name: "Omega Capricorni", magnitude: 4.11 }
        ],
        lines: [
          [0, 1], // Head
          [1, 2], // Body to tail
          [2, 3], // Tail
          [1, 4]  // Body to fin
        ]
      },
    
      Aquarius: {
        points: [
          { x: 25, y: 25, name: "Sadalmelik", magnitude: 2.95 }, // Alpha Aquarii
          { x: 35, y: 30, name: "Sadalsuud", magnitude: 2.90 }, // Beta Aquarii
          { x: 45, y: 35, name: "Sadachbia", magnitude: 3.84 }, // Gamma Aquarii
          { x: 40, y: 45, name: "Skat", magnitude: 3.27 }, // Delta Aquarii
          { x: 30, y: 50, name: "Albali", magnitude: 3.77 }, // Epsilon Aquarii
          { x: 50, y: 50, name: "Ancha", magnitude: 4.16 } // Theta Aquarii
        ],
        lines: [
          [0, 1], // Upper stream
          [1, 2], // Middle stream
          [2, 3], // Lower stream
          [3, 4], // Water flow
          [3, 5]  // Water flow
        ]
      },
    
      Pisces: {
        points: [
          { x: 30, y: 30, name: "Alrescha", magnitude: 3.82 }, // Alpha Piscium
          { x: 40, y: 35, name: "Fum al Samakah", magnitude: 4.94 }, // Beta Piscium
          { x: 50, y: 40, name: "Eta Piscium", magnitude: 3.62 },
          { x: 35, y: 45, name: "Omega Piscium", magnitude: 4.0 },
          { x: 45, y: 50, name: "Iota Piscium", magnitude: 4.13 },
          { x: 25, y: 55, name: "Kullat Nunu", magnitude: 4.44 } // Eta Piscium
        ],
        lines: [
          [0, 1], // Western fish
          [1, 2], // Western fish tail
          [0, 3], // Connection to eastern fish
          [3, 4], // Eastern fish
          [4, 5]  // Eastern fish tail
        ]
      },

      Ophiuchus: {
        points: [
          { x: 40, y: 20, name: "Rasalhague", magnitude: 2.08 },    // Alpha Ophiuchi - Head
          { x: 35, y: 30, name: "Cebalrai", magnitude: 2.76 },      // Beta Ophiuchi - Right shoulder
          { x: 45, y: 30, name: "Yed Prior", magnitude: 2.73 },     // Delta Ophiuchi - Left shoulder
          { x: 48, y: 35, name: "Yed Posterior", magnitude: 3.27 }, // Epsilon Ophiuchi - Left arm
          { x: 40, y: 40, name: "Han", magnitude: 3.31 },           // Zeta Ophiuchi - Waist
          { x: 35, y: 50, name: "Sabik", magnitude: 2.43 },         // Eta Ophiuchi - Right leg
          { x: 45, y: 50, name: "Theta Ophiuchi", magnitude: 3.27 }, // Left leg
          // Serpent stars (Serpens Caput - Head)
          { x: 25, y: 35, name: "Unukalhai", magnitude: 2.63 },     // Alpha Serpentis
          { x: 30, y: 40, name: "Beta Serpentis", magnitude: 3.65 },
          // Serpent stars (Serpens Cauda - Tail)
          { x: 50, y: 45, name: "Eta Serpentis", magnitude: 3.26 },
          { x: 55, y: 40, name: "Theta Serpentis", magnitude: 4.03 }
        ],
        lines: [
          [0, 1],  // Head to right shoulder
          [0, 2],  // Head to left shoulder
          [1, 4],  // Right shoulder to waist
          [2, 3],  // Left shoulder to arm
          [3, 4],  // Left arm to waist
          [4, 5],  // Waist to right leg
          [4, 6],  // Waist to left leg
          // Serpent connections
          [8, 1],  // Serpent head to right arm
          [9, 3],  // Serpent tail to left arm
          [7, 8],  // Serpent head
          [9, 10]  // Serpent tail
        ]
      }
    };

  export const getConstellationData = (sign: string): ConstellationData => {
    // Handle special cases
    if (sign === "Scorpio" || sign === "Scorpius") {
      return constellations.Scorpio;
    }
    return constellations[sign];
  };
