import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.scss'
import Navigation from './components/Navigation'
import ZodiacComparison from './pages/ZodiacComparison'
import TarotReading from './pages/TarotReading'

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <Routes>
          <Route path="/" element={<ZodiacComparison />} />
          <Route path="/tarot" element={<TarotReading />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
