import { useState } from 'react';
import '../styles/AboutApp.scss';

export function AboutApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className="info-button" 
        onClick={() => setIsOpen(true)}
        aria-label="About this app"
      >
        <span>i</span>
      </button>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button 
              className="close-button"
              onClick={() => setIsOpen(false)}
              aria-label="Close modal"
            >
              ×
            </button>
            <h2>About This site</h2>
            <div className="modal-body">
              <p>
                This site compares your traditional astrological zodiac sign with your
                actual astronomical constellation position at the time of your birth.
              </p>
              <p>
                Due to the precession of Earth's axis over thousands of years, 
                as well as the constellation's actual sizes,
                the traditional zodiac dates no longer align with the 
                constellations in the sky.
              </p>
              <p>
                The constellation visualizations show both your traditional sign
                and the actual constellation the Sun was in when you were born.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 