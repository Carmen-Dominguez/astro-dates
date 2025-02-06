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
    window.gtag?.('event', 'page_view', {
      page_title: page
    });
  },

  dateSelected: (date: string) => {
    window.gtag?.('event', 'select_date', {
      date_selected: date
    });
  },

  compareClicked: (astroSign: string, traditionalSign: string) => {
    window.gtag?.('event', 'compare_signs', {
      astronomical_sign: astroSign,
      traditional_sign: traditionalSign
    });
  },

  aboutOpened: () => {
    window.gtag?.('event', 'view_about', {
      event: 'view_about'
    });
  },

  emailSent: (success: boolean) => {
    window.gtag?.('event', 'send_email', {
      success: success
    });
  }
}; 