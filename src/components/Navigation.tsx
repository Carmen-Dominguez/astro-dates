import { Link, useLocation } from 'react-router-dom'
import '../styles/Navigation.scss'

function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link 
          to="/" 
          className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          🌟 Zodiac Comparison
        </Link>
        <Link 
          to="/tarot" 
          className={`nav-link ${location.pathname === '/tarot' ? 'active' : ''}`}
        >
          🔮 Tarot Reading
        </Link>
      </div>
    </nav>
  )
}

export default Navigation 