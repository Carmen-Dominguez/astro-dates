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
    }
  };

  export const getConstellationData = (sign: string): ConstellationData => {
    // Handle special cases
    if (sign === "Scorpio" || sign === "Scorpius") {
      return constellations.Scorpio;
    }
    return constellations[sign];
  };
