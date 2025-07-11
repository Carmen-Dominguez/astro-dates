import React, { useState, useEffect } from 'react';
import TarotCard from './TarotCard';
import '../styles/TarotDeck.scss';

interface TarotCardData {
  id: string;
  name: string;
  suit: string;
  meaning: string;
  reversed: boolean;
  isRevealed: boolean;
  isSelected: boolean;
  imageUrl?: string; // Added imageUrl to the interface
}

interface TarotDeckProps {
  onCardSelect?: (selectedCards: TarotCardData[]) => void;
  maxSelections?: number;
}

const TarotDeck: React.FC<TarotDeckProps> = ({ 
  onCardSelect, 
  maxSelections = 3 
}) => {
  const [deck, setDeck] = useState<TarotCardData[]>([]);
  const [selectedCards, setSelectedCards] = useState<TarotCardData[]>([]);
  const [isShuffling, setIsShuffling] = useState(false);

  // Initialize deck with tarot cards
  useEffect(() => {
    initializeDeck();
  }, []);

  const initializeDeck = () => {
    const tarotCards: TarotCardData[] = [
      // Major Arcana with local image URLs (all available)
      { id: '0', name: 'The Fool', suit: 'Major Arcana', meaning: 'New beginnings, innocence, spontaneity', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/0_the_fool.png' },
      { id: '1', name: 'The Magician', suit: 'Major Arcana', meaning: 'Manifestation, resourcefulness, power', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/1_the_magician.png' },
      { id: '2', name: 'The High Priestess', suit: 'Major Arcana', meaning: 'Intuition, mystery, inner knowledge', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/2_the_high_priestess.png' },
      { id: '3', name: 'The Empress', suit: 'Major Arcana', meaning: 'Fertility, nurturing, abundance', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/3_the_Empress.png' },
      { id: '4', name: 'The Emperor', suit: 'Major Arcana', meaning: 'Authority, structure, control', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/4_the_emperor.png' },
      { id: '5', name: 'The Hierophant', suit: 'Major Arcana', meaning: 'Tradition, conformity, morality', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/5_the_Hierophant.png' },
      { id: '6', name: 'The Lovers', suit: 'Major Arcana', meaning: 'Love, harmony, relationships', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/6_the_lovers.png' },
      { id: '7', name: 'The Chariot', suit: 'Major Arcana', meaning: 'Control, willpower, determination', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/7_The_Chariot.png' },
      { id: '8', name: 'Strength', suit: 'Major Arcana', meaning: 'Inner strength, courage, patience', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/8_Strength.png' },
      { id: '9', name: 'The Hermit', suit: 'Major Arcana', meaning: 'Soul-searching, introspection, solitude', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/9_the_Hermit.png' },
      { id: '10', name: 'Wheel of Fortune', suit: 'Major Arcana', meaning: 'Change, cycles, fate', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/10_wheel_of_fortune.png' },
      { id: '11', name: 'Justice', suit: 'Major Arcana', meaning: 'Justice, fairness, truth', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/11_justice.png' },
      { id: '12', name: 'The Hanged Man', suit: 'Major Arcana', meaning: 'Surrender, letting go, new perspective', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/12_the_Hanged_Man.png' },
      { id: '13', name: 'Death', suit: 'Major Arcana', meaning: 'Endings, change, transformation', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/13_Death.png' },
      { id: '14', name: 'Temperance', suit: 'Major Arcana', meaning: 'Balance, moderation, patience', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/14_Temperance.png' },
      { id: '15', name: 'The Devil', suit: 'Major Arcana', meaning: 'Shadow self, attachment, addiction', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/15_the_Devil.png' },
      { id: '16', name: 'The Tower', suit: 'Major Arcana', meaning: 'Sudden change, upheaval, revelation', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/16_the_tower.png' },
      { id: '17', name: 'The Star', suit: 'Major Arcana', meaning: 'Hope, faith, purpose', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/17_the_Star.png' },
      { id: '18', name: 'The Moon', suit: 'Major Arcana', meaning: 'Illusion, fear, anxiety', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/18_the_moon.png' },
      { id: '19', name: 'The Sun', suit: 'Major Arcana', meaning: 'Positivity, fun, warmth', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/19_The_Sun.png' },
      { id: '20', name: 'Judgement', suit: 'Major Arcana', meaning: 'Judgement, rebirth, inner calling', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/20_judgment.png' },
      { id: '21', name: 'The World', suit: 'Major Arcana', meaning: 'Completion, integration, accomplishment', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/21_The_world.png' },
      
      // Minor Arcana - Cups (no images for now, using symbols)
      { id: '22', name: 'Ace of Cups', suit: 'Cups', meaning: 'New feelings, intuition, love', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/Tarot_ace_of_cups.jpg' },
      { id: '23', name: 'Two of Cups', suit: 'Cups', meaning: 'Unity, partnership, connection', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/Tarot_2_cups.png' },
      { id: '24', name: 'Three of Cups', suit: 'Cups', meaning: 'Celebration, friendship, creativity', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/Tarot_3_cups.png' },
      { id: '25', name: 'Four of Cups', suit: 'Cups', meaning: 'Meditation, contemplation, apathy', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/Tarot_4_cups.png' },
      { id: '26', name: 'Five of Cups', suit: 'Cups', meaning: 'Loss, grief, self-pity', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/Tarot_5_cups.png' },
      { id: '27', name: 'Six of Cups', suit: 'Cups', meaning: 'Revisiting the past, childhood memories', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/Tarot_6_cups.png' },
      { id: '28', name: 'Seven of Cups', suit: 'Cups', meaning: 'Choices, fantasy, illusion', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/Tarot_7_cups.png' },
      { id: '29', name: 'Eight of Cups', suit: 'Cups', meaning: 'Walking away, disillusionment', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/Tarot_8_cups.png' },
      { id: '30', name: 'Nine of Cups', suit: 'Cups', meaning: 'Satisfaction, emotional stability', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/Tarot_9_cups.png' },
      { id: '31', name: 'Ten of Cups', suit: 'Cups', meaning: 'Divine love, blissful relationships', reversed: false, isRevealed: false, isSelected: false, imageUrl: '/tarot/Tarot_10_cups.png' },
      
      // Minor Arcana - Wands (no images for now, using symbols)
      { id: '32', name: 'Ace of Wands', suit: 'Wands', meaning: 'Creation, willpower, inspiration', reversed: false, isRevealed: false, isSelected: false },
      { id: '33', name: 'Two of Wands', suit: 'Wands', meaning: 'Planning, making decisions', reversed: false, isRevealed: false, isSelected: false },
      { id: '34', name: 'Three of Wands', suit: 'Wands', meaning: 'Looking ahead, expansion', reversed: false, isRevealed: false, isSelected: false },
      { id: '35', name: 'Four of Wands', suit: 'Wands', meaning: 'Celebration, joy, harmony', reversed: false, isRevealed: false, isSelected: false },
      { id: '36', name: 'Five of Wands', suit: 'Wands', meaning: 'Conflict, disagreements, competition', reversed: false, isRevealed: false, isSelected: false },
      { id: '37', name: 'Six of Wands', suit: 'Wands', meaning: 'Success, public recognition', reversed: false, isRevealed: false, isSelected: false },
      { id: '38', name: 'Seven of Wands', suit: 'Wands', meaning: 'Perseverance, defensive position', reversed: false, isRevealed: false, isSelected: false },
      { id: '39', name: 'Eight of Wands', suit: 'Wands', meaning: 'Movement, fast paced change', reversed: false, isRevealed: false, isSelected: false },
      { id: '40', name: 'Nine of Wands', suit: 'Wands', meaning: 'Resilience, courage, persistence', reversed: false, isRevealed: false, isSelected: false },
      { id: '41', name: 'Ten of Wands', suit: 'Wands', meaning: 'Burden, extra responsibility', reversed: false, isRevealed: false, isSelected: false },
      
      // Minor Arcana - Swords (no images for now, using symbols)
      { id: '42', name: 'Ace of Swords', suit: 'Swords', meaning: 'Breakthrough, clarity, sharp mind', reversed: false, isRevealed: false, isSelected: false },
      { id: '43', name: 'Two of Swords', suit: 'Swords', meaning: 'Difficult choices, indecision', reversed: false, isRevealed: false, isSelected: false },
      { id: '44', name: 'Three of Swords', suit: 'Swords', meaning: 'Heartbreak, suffering, grief', reversed: false, isRevealed: false, isSelected: false },
      { id: '45', name: 'Four of Swords', suit: 'Swords', meaning: 'Rest, relaxation, meditation', reversed: false, isRevealed: false, isSelected: false },
      { id: '46', name: 'Five of Swords', suit: 'Swords', meaning: 'Conflict, disagreements, defeat', reversed: false, isRevealed: false, isSelected: false },
      { id: '47', name: 'Six of Swords', suit: 'Swords', meaning: 'Transition, change, rite of passage', reversed: false, isRevealed: false, isSelected: false },
      { id: '48', name: 'Seven of Swords', suit: 'Swords', meaning: 'Betrayal, deception, getting away', reversed: false, isRevealed: false, isSelected: false },
      { id: '49', name: 'Eight of Swords', suit: 'Swords', meaning: 'Imprisonment, entrapment, self-limiting', reversed: false, isRevealed: false, isSelected: false },
      { id: '50', name: 'Nine of Swords', suit: 'Swords', meaning: 'Anxiety, worry, fear', reversed: false, isRevealed: false, isSelected: false },
      { id: '51', name: 'Ten of Swords', suit: 'Swords', meaning: 'Painful endings, deep wounds', reversed: false, isRevealed: false, isSelected: false },
      
      // Minor Arcana - Pentacles (no images for now, using symbols)
      { id: '52', name: 'Ace of Pentacles', suit: 'Pentacles', meaning: 'New financial opportunity, abundance', reversed: false, isRevealed: false, isSelected: false },
      { id: '53', name: 'Two of Pentacles', suit: 'Pentacles', meaning: 'Multiple priorities, time management', reversed: false, isRevealed: false, isSelected: false },
      { id: '54', name: 'Three of Pentacles', suit: 'Pentacles', meaning: 'Teamwork, collaboration, building', reversed: false, isRevealed: false, isSelected: false },
      { id: '55', name: 'Four of Pentacles', suit: 'Pentacles', meaning: 'Conservation, security, frugality', reversed: false, isRevealed: false, isSelected: false },
      { id: '56', name: 'Five of Pentacles', suit: 'Pentacles', meaning: 'Need, poverty, insecurity', reversed: false, isRevealed: false, isSelected: false },
      { id: '57', name: 'Six of Pentacles', suit: 'Pentacles', meaning: 'Charity, generosity, sharing', reversed: false, isRevealed: false, isSelected: false },
      { id: '58', name: 'Seven of Pentacles', suit: 'Pentacles', meaning: 'Hard work, perseverance, diligence', reversed: false, isRevealed: false, isSelected: false },
      { id: '59', name: 'Eight of Pentacles', suit: 'Pentacles', meaning: 'Apprenticeship, repetitive tasks', reversed: false, isRevealed: false, isSelected: false },
      { id: '60', name: 'Nine of Pentacles', suit: 'Pentacles', meaning: 'Luxury, self-sufficiency, financial independence', reversed: false, isRevealed: false, isSelected: false },
      { id: '61', name: 'Ten of Pentacles', suit: 'Pentacles', meaning: 'Legacy, culmination, inheritance', reversed: false, isRevealed: false, isSelected: false },
    ];

    setDeck(tarotCards);
  };

  const shuffleDeck = () => {
    setIsShuffling(true);
    
    setTimeout(() => {
      const shuffled = [...deck].sort(() => Math.random() - 0.5);
      
      // Randomly reverse some cards
      const withReversals = shuffled.map(card => ({
        ...card,
        reversed: Math.random() > 0.7, // 30% chance of being reversed
        isRevealed: false,
        isSelected: false
      }));
      
      setDeck(withReversals);
      setSelectedCards([]);
      setIsShuffling(false);
    }, 1000);
  };

  const handleCardClick = (cardId: string) => {
    const card = deck.find(c => c.id === cardId);
    if (!card) return;

    const isSelected = selectedCards.some(c => c.id === cardId);
    
    if (isSelected) {
      // Deselect card
      setSelectedCards(selectedCards.filter(c => c.id !== cardId));
    } else if (selectedCards.length < maxSelections) {
      // Select card
      const updatedCard = { ...card, isRevealed: true, isSelected: true };
      setSelectedCards([...selectedCards, updatedCard]);
      
      // Update deck
      setDeck(deck.map(c => c.id === cardId ? updatedCard : c));
    }

    // Call parent callback
    if (onCardSelect) {
      const newSelectedCards = isSelected 
        ? selectedCards.filter(c => c.id !== cardId)
        : [...selectedCards, { ...card, isRevealed: true, isSelected: true }];
      
      onCardSelect(newSelectedCards);
    }
  };

  const resetDeck = () => {
    setSelectedCards([]);
    setDeck(deck.map(card => ({
      ...card,
      isRevealed: false,
      isSelected: false
    })));
  };

  return (
    <div className="tarot-deck">
      <div className="deck-controls">
        <button 
          onClick={shuffleDeck} 
          disabled={isShuffling}
          className="shuffle-button"
        >
          {isShuffling ? 'Shuffling...' : '🔀 Shuffle Deck'}
        </button>
        
        <button 
          onClick={resetDeck}
          className="reset-button"
        >
          🔄 Reset
        </button>
      </div>

      <div className="deck-info">
        <p>Select up to {maxSelections} cards for your reading</p>
        <p>Selected: {selectedCards.length}/{maxSelections}</p>
      </div>

      <div className="cards-container">
        {deck.map((card) => (
          <TarotCard
            key={card.id}
            {...card}
            onClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>

      {selectedCards.length > 0 && (
        <div className="selected-cards">
          <h3>Your Selected Cards:</h3>
          <div className="selected-cards-list">
            {selectedCards.map((card) => (
              <div key={card.id} className="selected-card-info">
                <strong>{card.name}</strong> ({card.suit})
                {card.reversed && <span className="reversed-badge">Reversed</span>}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default TarotDeck; 