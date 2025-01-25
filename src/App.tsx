import { useState } from 'react'
import { DateTime } from 'luxon'
import './styles/App.scss'
import NightSky from './components/nightSky'
import { getAstronomicalSign, getAstrologicalSign } from './utils/zodiacCalculations'
import Constellation from './components/constellation'
// import { SpeedInsights } from "@vercel/speed-insights/next"

interface Results {
  astronomical: string;
  astrological: string;
  difference: boolean;
}

function App() {
  const [inputDate, setInputDate] = useState<string>(DateTime.now().toISODate())
  const [results, setResults] = useState<Results | null>(null)

  const calculateDates = (): void => {
    const date = DateTime.fromISO(inputDate)
    
    const astronomicalSign = getAstronomicalSign(date)
    const astrologicalSign = getAstrologicalSign(date)

    setResults({
      astronomical: astronomicalSign,
      astrological: astrologicalSign,
      difference: astronomicalSign !== astrologicalSign
    })
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
            <Constellation
              currentSign={results.astrological}
              newSign={results.astronomical}
              isVisible={true}
            />
            {results.difference && <p className="difference">
              The signs are different! This is due to precession of the equinoxes.
            </p>}
          </>
        )}
        </div>
      )}
    </div>
    </NightSky>
  )
}

export default App
