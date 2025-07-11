import React, { useState } from 'react';
import '../styles/TarotCard.scss';

interface TarotCardProps {
  id: string;
  name: string;
  suit: string;
  meaning: string;
  reversed: boolean;
  isRevealed: boolean;
  isSelected: boolean;
  imageUrl?: string;
  onClick?: () => void;
}

const TarotCard: React.FC<TarotCardProps> = ({
  id,
  name,
  suit,
  meaning,
  reversed,
  isRevealed,
  isSelected,
  imageUrl,
  onClick
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardBackUrl = 'public/tarot/tarot_back.png';

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`tarot-card ${isRevealed ? 'revealed' : ''} ${isSelected ? 'selected' : ''} ${reversed ? 'reversed' : ''}`}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="card-inner">
        <div className="card-front">
          <img src={cardBackUrl} alt="Tarot Card Back" className="card-back-image" />
        </div>
        
        <div className="card-back">
          <div className="card-content">
            <div className="card-header">
              <h3 className="card-name">{name}</h3>
              <span className="card-suit">{suit}</span>
            </div>
            
            <div className="card-body">
              <div className="card-image">
                {imageUrl ? (
                  <img 
                    src={imageUrl} 
                    alt={name}
                    className="card-artwork"
                    onError={(e) => {
                      // Fallback to symbol if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('fallback-hidden');
                    }}
                  />
                ) : null}
                <div className={`card-symbol ${imageUrl ? 'fallback-hidden' : ''}`}>
                  {reversed ? '🔄' : '✨'}
                </div>
              </div>
              
              <div className="card-meaning">
                <p>{meaning}</p>
                {reversed && (
                  <div className="reversed-indicator">
                    <span>Reversed</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TarotCard; 