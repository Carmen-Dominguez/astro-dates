import { useState, useEffect } from 'react'
import NightSky from '../components/nightSky'
import { CustomCursor } from '../components/CustomCursor'
import { analytics } from '../utils/analytics'
import { CookieConsent } from '../components/CookieConsent'
import TarotDeck from '../components/TarotDeck'

interface TarotCardData {
  id: string;
  name: string;
  suit: string;
  meaning: string;
  reversed: boolean;
  isRevealed: boolean;
  isSelected: boolean;
}

function TarotReading() {
  const [question, setQuestion] = useState('')
  const [selectedCards, setSelectedCards] = useState<TarotCardData[]>([])
  const [reading, setReading] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    analytics.pageViewed('Tarot Reading Page')
  }, []);

  const handleCardSelect = (cards: TarotCardData[]) => {
    setSelectedCards(cards);
  };

  const handleGetReading = async () => {
    if (!question.trim() || selectedCards.length === 0) return;
    
    setIsLoading(true);
    
    try {
      // TODO: Implement AI-powered tarot reading
      const readingText = generateReading(question, selectedCards);
      setReading(readingText);
      
      analytics.compareClicked('tarot_reading', `${selectedCards.length}_cards`);
    } catch (error) {
      console.error('Error generating reading:', error);
      setReading('Sorry, there was an error generating your reading. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const generateReading = (question: string, cards: TarotCardData[]): string => {
    const cardNames = cards.map(card => 
      `${card.name}${card.reversed ? ' (Reversed)' : ''}`
    ).join(', ');
    
    const reversedCount = cards.filter(card => card.reversed).length;
    const majorArcanaCount = cards.filter(card => card.suit === 'Major Arcana').length;
    
    let reading = `🔮 Your Tarot Reading\n\n`;
    reading += `Question: "${question}"\n\n`;
    reading += `Selected Cards: ${cardNames}\n\n`;
    
    if (reversedCount > 0) {
      reading += `📊 Reading Summary:\n`;
      reading += `• You selected ${cards.length} cards\n`;
      reading += `• ${reversedCount} cards are reversed, indicating internal challenges or blocked energy\n`;
      reading += `• ${majorArcanaCount} Major Arcana cards suggest significant life themes\n\n`;
    }
    
    reading += `💫 Card Interpretations:\n\n`;
    
    cards.forEach((card, index) => {
      reading += `${index + 1}. ${card.name} (${card.suit})\n`;
      reading += `   ${card.reversed ? '🔄 Reversed: ' : '✨ Upright: '}${card.meaning}\n\n`;
    });
    
    reading += `🌟 Overall Message:\n`;
    reading += `The cards suggest a period of ${getOverallTheme(cards)}. `;
    reading += `Pay attention to the messages from ${getFocusArea(cards)}. `;
    reading += `Trust your intuition as you navigate this journey.\n\n`;
    
    reading += `✨ Remember: Tarot readings are for guidance and reflection. The power to shape your destiny lies within you.`;
    
    return reading;
  };

  const getOverallTheme = (cards: TarotCardData[]): string => {
    const themes = {
      'Major Arcana': 'profound transformation and spiritual growth',
      'Cups': 'emotional exploration and relationship development',
      'Wands': 'creative energy and personal power',
      'Swords': 'mental clarity and intellectual challenges',
      'Pentacles': 'material abundance and practical matters'
    };
    
    const dominantSuit = cards.reduce((acc, card) => {
      acc[card.suit] = (acc[card.suit] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    
    const maxSuit = Object.entries(dominantSuit).reduce((a, b) => 
      dominantSuit[a[0]] > dominantSuit[b[0]] ? a : b
    )[0];
    
    return themes[maxSuit as keyof typeof themes] || 'personal growth and self-discovery';
  };

  const getFocusArea = (cards: TarotCardData[]): string => {
    const reversedCount = cards.filter(card => card.reversed).length;
    const totalCards = cards.length;
    
    if (reversedCount > totalCards / 2) {
      return 'your inner world and subconscious patterns';
    } else if (reversedCount > 0) {
      return 'both your conscious and unconscious mind';
    } else {
      return 'your conscious awareness and active choices';
    }
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
          </div>

          <TarotDeck 
            onCardSelect={handleCardSelect}
            maxSelections={3}
          />

          <div className="reading-section">
            <button 
              onClick={handleGetReading}
              disabled={isLoading || !question.trim() || selectedCards.length === 0}
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