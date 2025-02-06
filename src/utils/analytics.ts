import ReactGA from 'react-ga4';

// Initialize GA with your measurement ID
export const initGA = () => {
  const MEASUREMENT_ID = import.meta.env.VITE_GOOGLE_ANALYTICS_ID; // Your actual ID here
  
  // Only initialize GA in production
  if (window.location.hostname === 'astrology-to-astronomy.vercel.app') {
    ReactGA.initialize(MEASUREMENT_ID, {
      gaOptions: {
        debug_mode: true
      }
    });
    console.log('Initializing GA with:', MEASUREMENT_ID); // Debug log
  } else {
    console.log('GA disabled in development'); // Debug log
  }
};

// Page view tracking
export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};

// Custom events
export const analyticsEvents = {
  dateSelected: (date: string) => 
    ReactGA.event({
      category: 'User Input',
      action: 'Date Selected',
      label: date
    }),
  
  signCompared: (astroSign: string, traditionalSign: string) =>
    ReactGA.event({
      category: 'Comparison',
      action: 'Signs Compared',
      label: `Astro: ${astroSign} vs Traditional: ${traditionalSign}`
    }),
  
  aboutViewed: (topic: string) =>
    ReactGA.event({
      category: 'About us',
      action: 'About Viewed',
      label: topic
    }),
  
  emailClicked: (platform: string) =>
    ReactGA.event({
      category: 'Email',
      action: 'Email send Clicked',
      label: platform
    })
}; 