import { useState, useEffect } from 'react';
import '../styles/cookieConsent.scss';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    // Reload to enable analytics
    window.location.reload();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
    // Disable analytics
    (window as any)['ga-disable-G-SD0X6H9G67'] = true;
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <p>
        We use cookies to analyze site usage. You can decline analytics cookies 
        and still use the site normally.
      </p>
      <div className="cookie-buttons">
        <button onClick={handleDecline} className="secondary">
          Decline Analytics
        </button>
        <button onClick={handleAccept} className="primary">
          Accept Analytics
        </button>
      </div>
    </div>
  );
}; 