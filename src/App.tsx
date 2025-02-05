import { useState } from 'react'
import { DateTime } from 'luxon'
import './styles/App.scss'
import NightSky from './components/nightSky'
import { getAstronomicalSign, getAstrologicalSign, getComparison } from './utils/zodiacCalculations'
import Constellation from './components/constellation'
import { getPersonalityComparison, getDetailedComparison } from './utils/openai'
import { postEmail } from './api/email'
// import { SpeedInsights } from "@vercel/speed-insights/next"

interface Results {
  astronomical: string;
  astrological: string;
  difference: boolean;
}

function App() {
  const [inputDate, setInputDate] = useState<string>(DateTime.now().toISODate())
  const [results, setResults] = useState<Results | null>(null)
  const [personalityComparison, setPersonalityComparison] = useState<string>('')
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('');
  const [emailSending, setEmailSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const calculateDates = async () => {
    const date = DateTime.fromISO(inputDate)

    const astronomical = getAstronomicalSign(date)
    const astrological = getAstrologicalSign(date)

    setResults({
      astronomical,
      astrological,
      difference: astronomical !== astrological
    })

    if (astronomical !== astrological) {
      setIsLoading(true)
      try {
        const comparison = await getPersonalityComparison(astrological, astronomical)
        setPersonalityComparison(comparison || '')
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setIsLoading(false)
      }
    } else {
      setPersonalityComparison('No personality comparison needed')
    }
  }

  const handleSendEmail = async () => {
    setEmailSending(true);
    const astrological = results?.astrological || '';
    const astronomical = results?.astronomical || '';

    try {
      // Get detailed comparison
      const detailedComparison = await getDetailedComparison(astrological, astronomical) || '';
      
      // Send email
      const emailResponse = await postEmail(email, 'Your Zodiac Sign Comparison', detailedComparison);
    
      if (emailResponse) {     
        setEmailSent(true);
        setEmail(''); // Clear email input
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      // Optionally add error state and display to user
      
      setEmailSending(false);

    } finally {
      setEmailSending(false);
    }
  };

  return (
    <NightSky>
      <div className="container">
        <h1>Astronomical vs Astrological Dates</h1>
        <div className="input-section">
          <input
            type="date"
            value={inputDate}
            onChange={(e) => setInputDate(e.target.value)}
          />
          <button onClick={calculateDates}>Calculate</button>
        </div>

        {results && (
          <div className="results">
            <p>Astronomical Sign: {results.astronomical}</p>
            <p>Astrological Sign: {results.astrological}</p>

            {results.astronomical.length > 0 && (
              <>
                <div className="constellation-wrapper">
                  <Constellation
                    currentSign={results.astrological}
                    newSign={results.astronomical}
                    isVisible={true}
                  />
                </div>
                <p className="difference">
                  {getComparison(results.astrological, results.astronomical)}
                </p>

                {personalityComparison && (
                  <div className="personality-comparison-wrapper">
                    {isLoading ? (
                      <p className="personality-comparison">Loading personality comparison...</p>
                    ) : (
                      <p className="personality-comparison">{personalityComparison}</p>
                    )}
                  </div>
                )}

                {personalityComparison && (
                  <div className="email-section">
                    <p>Want a more detailed comparison? Get it in your email!</p>
                    <div className="email-input-container input-section">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="email-input"
                      />
                      <button 
                        onClick={handleSendEmail}
                        disabled={emailSending || !email || emailSent}

                      >
                        {emailSending ? 'Sending...' : emailSent ? 'Sent!' : 'Send Comparison'}
                      </button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </NightSky>
  )
}

export default App
