import { useState, useEffect } from 'react'
import NightSky from '../components/nightSky'
import { CustomCursor } from '../components/CustomCursor'
import { analytics } from '../utils/analytics'
import { CookieConsent } from '../components/CookieConsent'

function TarotReading() {
  const [question, setQuestion] = useState('')
  const [reading, setReading] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    analytics.pageViewed('Tarot Reading Page')
  }, []);

  const handleGetReading = async () => {
    if (!question.trim()) return;
    
    setIsLoading(true);
    // TODO: Implement tarot reading logic
    setReading('Tarot reading feature coming soon...');
    setIsLoading(false);
  };

  return (
    <>
      <CustomCursor />
      <NightSky>
        <div className="container">
          <h1>🔮 Tarot Card Reading</h1>
          <p className="subtitle">Ask the cards for guidance and insight</p>
          
          <div className="input-section">
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="What would you like to know? Ask a specific question for the most meaningful reading..."
              rows={4}
              className="question-input"
            />
            <button 
              onClick={handleGetReading}
              disabled={isLoading || !question.trim()}
              className="reading-button"
            >
              {isLoading ? 'Reading the Cards...' : 'Get Reading'}
            </button>
          </div>

          {reading && (
            <div className="reading-results">
              <h2>Your Reading</h2>
              <div className="reading-content">
                {reading}
              </div>
            </div>
          )}
        </div>
      </NightSky>
      <CookieConsent />
    </>
  )
}

export default TarotReading 