import { starColors } from './starColors';

export interface Point {
    x: number;
    y: number;
    name?: string;
    magnitude?: number;  // Star brightness
    color?: string;  // Add color property
}

interface ConstellationData {
    points: Point[];
    lines: number[][];
}

// Type for type safety
export type StarColor = typeof starColors[keyof typeof starColors];

export const constellations: Record<string, ConstellationData> = {
    Scorpio: {
        points: [
            { x: 35, y: 20, name: "Pi Scorpii", magnitude: 2.89, color: starColors.blueWhite },
            { x: 25, y: 25, name: "Rho Scorpii", magnitude: 3.88, color: starColors.blueWhite },
            { x: 45, y: 25, name: "Beta Scorpii", magnitude: 2.62, color: starColors.blueWhite },
            { x: 40, y: 35, name: "Delta Scorpii", magnitude: 2.32, color: starColors.blueWhite },
            { x: 45, y: 45, name: "Antares", magnitude: 1.0, color: starColors.redGiant },
            { x: 50, y: 55, name: "Tau Scorpii", magnitude: 2.82, color: starColors.blueWhite },
            { x: 55, y: 65, name: "Epsilon Scorpii", magnitude: 2.29, color: starColors.yellowWhite },
            { x: 65, y: 70, name: "Mu Scorpii", magnitude: 3.08, color: starColors.blueWhite },
            { x: 75, y: 72, name: "Zeta Scorpii", magnitude: 3.62, color: starColors.blueWhite },
            { x: 85, y: 68, name: "Eta Scorpii", magnitude: 3.33, color: starColors.orange },
            { x: 90, y: 60, name: "Theta Scorpii", magnitude: 1.87, color: starColors.yellowWhite }
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
            { x: 35, y: 20, name: "Pi Scorpii", magnitude: 2.89, color: starColors.blueWhite },
            { x: 25, y: 25, name: "Rho Scorpii", magnitude: 3.88, color: starColors.blueWhite },
            { x: 45, y: 25, name: "Beta Scorpii", magnitude: 2.62, color: starColors.blueWhite },
            { x: 40, y: 35, name: "Delta Scorpii", magnitude: 2.32, color: starColors.blueWhite },
            { x: 45, y: 45, name: "Antares", magnitude: 1.0, color: starColors.redGiant },
            { x: 50, y: 55, name: "Tau Scorpii", magnitude: 2.82, color: starColors.blueWhite },
            { x: 55, y: 65, name: "Epsilon Scorpii", magnitude: 2.29, color: starColors.yellowWhite },
            { x: 65, y: 70, name: "Mu Scorpii", magnitude: 3.08, color: starColors.blueWhite },
            { x: 75, y: 72, name: "Zeta Scorpii", magnitude: 3.62, color: starColors.blueWhite },
            { x: 85, y: 68, name: "Eta Scorpii", magnitude: 3.33, color: starColors.orange },
            { x: 90, y: 60, name: "Theta Scorpii", magnitude: 1.87, color: starColors.yellowWhite }
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
            { x: 30, y: 20, name: "Vindemiatrix", magnitude: 2.85, color: starColors.yellowWhite },
            { x: 45, y: 25, name: "Zaniah", magnitude: 3.89, color: starColors.white },
            { x: 55, y: 35, name: "Porrima", magnitude: 2.74, color: starColors.white },
            { x: 40, y: 45, name: "Auva", magnitude: 3.38, color: starColors.orange },
            { x: 25, y: 55, name: "Spica", magnitude: 1.04, color: starColors.blueWhite },
            { x: 50, y: 50, name: "Heze", magnitude: 3.37, color: starColors.white },
            { x: 65, y: 40, name: "Beta Virginis", magnitude: 3.61, color: starColors.yellowWhite }
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
            { x: 30, y: 30, name: "Zubenelgenubi", magnitude: 2.75, color: starColors.white },
            { x: 45, y: 30, name: "Zubeneschamali", magnitude: 2.61, color: starColors.blueWhite },
            { x: 35, y: 45, name: "Zubenelakrab", magnitude: 3.91, color: starColors.yellowWhite },
            { x: 40, y: 55, name: "Brachium", magnitude: 3.29, color: starColors.orange }
        ],
        lines: [
            [0, 1], // Main balance beam
            [2, 3]  // Scale pan connection
        ]
    },

    Leo: {
        points: [
            { x: 75, y: 50, name: "Regulus", magnitude: 1.4, color: starColors.blueWhite },     // α (Alpha)
            { x: 65, y: 55, name: "Algieba", magnitude: 2.01, color: starColors.orangeGiant },  // γ (Gamma)
            { x: 60, y: 53, name: "Adhafera", magnitude: 3.43, color: starColors.white },       // ζ (Zeta)
            { x: 55, y: 50, name: "Zosma", magnitude: 2.56, color: starColors.white },          // δ (Delta)
            { x: 45, y: 45, name: "Denebola", magnitude: 2.14, color: starColors.white },       // β (Beta)
            { x: 70, y: 40, name: "Rasalas", magnitude: 3.85, color: starColors.orange },       // μ (Mu)
            { x: 58, y: 48, name: "Chertan", magnitude: 3.3, color: starColors.white },         // θ (Theta)
        ],
        lines: [
            [0, 6],  // Regulus to Chertan
            [6, 3],  // Chertan to Zosma
            [3, 4],  // Zosma to Denebola
            [6, 2],  // Chertan to Adhafera
            [2, 1],  // Adhafera to Algieba
            [1, 5]   // Algieba to Rasalas
        ]
    },

    Taurus: {
        points: [
            { x: 40, y: 25, name: "Aldebaran", magnitude: 0.87, color: starColors.orangeGiant },
            { x: 30, y: 30, name: "Elnath", magnitude: 1.65, color: starColors.blueWhite },
            { x: 50, y: 30, name: "Alcyone", magnitude: 2.87, color: starColors.blueWhite },
            { x: 45, y: 35, name: "Lambda Tauri", magnitude: 3.47, color: starColors.blueWhite },
            { x: 35, y: 40, name: "Ain", magnitude: 3.53, color: starColors.orange }
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
            { x: 30, y: 20, name: "Castor", magnitude: 1.58, color: starColors.white },
            { x: 30, y: 25, name: "Pollux", magnitude: 1.14, color: starColors.orange },
            { x: 40, y: 35, name: "Alhena", magnitude: 1.93, color: starColors.white },
            { x: 45, y: 45, name: "Wasat", magnitude: 3.53, color: starColors.yellowWhite },
            { x: 35, y: 55, name: "Mebsuta", magnitude: 3.06, color: starColors.yellowWhite }
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
            { x: 35, y: 30, name: "Acubens", magnitude: 4.25, color: starColors.white },
            { x: 45, y: 35, name: "Asellus Borealis", magnitude: 4.66, color: starColors.orange },
            { x: 40, y: 40, name: "Asellus Australis", magnitude: 3.94, color: starColors.orange },
            { x: 30, y: 45, name: "Altarf", magnitude: 3.53, color: starColors.orangeGiant },
            { x: 50, y: 45, name: "Iota Cancri", magnitude: 4.02, color: starColors.yellowWhite }
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
            { x: 30, y: 45, name: "Rukbat", magnitude: 3.85, color: starColors.blueWhite },        // α
            { x: 35, y: 40, name: "Arkab", magnitude: 3.96, color: starColors.blueWhite },         // β
            { x: 45, y: 35, name: "Alnasl", magnitude: 3.0, color: starColors.white },             // γ
            { x: 55, y: 40, name: "Kaus Media", magnitude: 2.7, color: starColors.blueWhite },     // δ
            { x: 60, y: 45, name: "Kaus Australis", magnitude: 1.85, color: starColors.blueWhite }, // ε
            { x: 50, y: 30, name: "Kaus Borealis", magnitude: 2.8, color: starColors.orange },     // λ
            { x: 40, y: 45, name: "Nunki", magnitude: 2.05, color: starColors.blueWhite },         // σ
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
            { x: 30, y: 30, name: "Algedi", magnitude: 3.58, color: starColors.yellowWhite },
            { x: 40, y: 35, name: "Dabih", magnitude: 3.05, color: starColors.yellowWhite },
            { x: 50, y: 40, name: "Nashira", magnitude: 3.69, color: starColors.white },
            { x: 45, y: 45, name: "Deneb Algedi", magnitude: 2.87, color: starColors.white },
            { x: 35, y: 50, name: "Omega Capricorni", magnitude: 4.11, color: starColors.orange }
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
            { x: 35, y: 45, name: "Sadalmelik", magnitude: 2.95, color: starColors.yellowWhite },   // α
            { x: 45, y: 50, name: "Sadalsuud", magnitude: 2.90, color: starColors.yellowWhite },    // β
            { x: 55, y: 45, name: "Sadachbia", magnitude: 3.84, color: starColors.white },          // γ
            { x: 50, y: 40, name: "Skat", magnitude: 3.27, color: starColors.white },               // δ
            { x: 40, y: 55, name: "Albali", magnitude: 3.77, color: starColors.white },             // ε
            { x: 60, y: 50, name: "Eta Aquarii", magnitude: 4.02, color: starColors.white },        // η
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
            { x: 30, y: 30, name: "Alrescha", magnitude: 3.82, color: starColors.white },
            { x: 40, y: 35, name: "Fum al Samakah", magnitude: 4.94, color: starColors.blueWhite },
            { x: 50, y: 40, name: "Eta Piscium", magnitude: 3.62, color: starColors.yellowWhite },
            { x: 35, y: 45, name: "Omega Piscium", magnitude: 4.0, color: starColors.white },
            { x: 45, y: 50, name: "Iota Piscium", magnitude: 4.13, color: starColors.white },
            { x: 25, y: 55, name: "Kullat Nunu", magnitude: 4.44, color: starColors.orange }
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
            { x: 40, y: 20, name: "Rasalhague", magnitude: 2.08, color: starColors.white },
            { x: 35, y: 30, name: "Cebalrai", magnitude: 2.76, color: starColors.orange },
            { x: 45, y: 30, name: "Yed Prior", magnitude: 2.73, color: starColors.orange },
            { x: 48, y: 35, name: "Yed Posterior", magnitude: 3.27, color: starColors.orange },
            { x: 40, y: 40, name: "Han", magnitude: 3.31, color: starColors.blueWhite },
            { x: 35, y: 50, name: "Sabik", magnitude: 2.43, color: starColors.white },
            { x: 45, y: 50, name: "Theta Ophiuchi", magnitude: 3.27, color: starColors.blueWhite },
            { x: 25, y: 35, name: "Unukalhai", magnitude: 2.63, color: starColors.orange },
            { x: 30, y: 40, name: "Beta Serpentis", magnitude: 3.65, color: starColors.white },
            { x: 50, y: 45, name: "Eta Serpentis", magnitude: 3.26, color: starColors.orange },
            { x: 55, y: 40, name: "Theta Serpentis", magnitude: 4.03, color: starColors.white }
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
