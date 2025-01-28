import { useState } from 'react'
import { DateTime } from 'luxon'
import './styles/App.scss'
import NightSky from './components/nightSky'
import { getAstronomicalSign, getAstrologicalSign, getComparison } from './utils/zodiacCalculations'
import Constellation from './components/constellation'
import { getPersonalityComparison } from './utils/openai'
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
              </>
            )}
          </div>
        )}
      </div>
    </NightSky>
  )
}

export default App
