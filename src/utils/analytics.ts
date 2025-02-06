// Type definition for gtag
declare global {
  interface Window {
    gtag: (
      command: 'event',
      action: string,
      params: Record<string, any>
    ) => void;
  }
}

// Custom events
export const analytics = {
  pageViewed: (page: string) => {
    console.log('Attempting to track page view:', page);
    window.gtag?.('event', 'page_view', {
      page_title: page
    });
  },

  dateSelected: (date: string) => {
    console.log('Attempting to track date selection:', date);
    window.gtag?.('event', 'select_date', {
      date_selected: date
    });
  },

  compareClicked: (astroSign: string, traditionalSign: string) => {
    console.log('Attempting to track comparison:', { astroSign, traditionalSign });
    window.gtag?.('event', 'compare_signs', {
      astronomical_sign: astroSign,
      traditional_sign: traditionalSign
    });
  },

  aboutOpened: () => {
    console.log('Attempting to track about view');
    window.gtag?.('event', 'view_about', {
      event: 'view_about'
    });
  },

  emailSent: (success: boolean) => {
    console.log('Attempting to track email send:', success);
    window.gtag?.('event', 'send_email', {
      success: success
    });
  }
}; 