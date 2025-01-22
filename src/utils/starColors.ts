export const starColors = {
    // Main spectral types
    blueWhite: '#b3f0ff',    // O and B stars
    white: '#f0f8ff',        // A stars
    yellowWhite: '#fff7e6',  // F and G stars
    orangeGiant: '#ffa366',  // K giants
    orange: '#ffd480',       // K stars
    redGiant: '#ff4d4d',     // M stars and red supergiants
  } as const;
  
  // Type for type safety
  export type StarColor = typeof starColors[keyof typeof starColors];
  