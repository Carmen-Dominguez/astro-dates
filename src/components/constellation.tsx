import React, { useEffect, useState } from 'react';
import { getConstellationData, Point } from '../utils/constellationData';
import '../styles/constellation.scss';

interface ConstellationProps {
  currentSign: string;
  newSign?: string;
  isVisible: boolean;
}

const Constellation: React.FC<ConstellationProps> = ({ 
  currentSign, 
  newSign, 
  isVisible 
}) => {
  const currentData = getConstellationData(currentSign) || { points: [], lines: [] };
  const [currentPoints, setCurrentPoints] = useState(currentData.points);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showLines, setShowLines] = useState(true);
  const [showStarColors, setShowStarColors] = useState(true);

  const getStarColor = (point: Point) => {
    return point.color || 'white';  // Default to white if no color specified
  };

  useEffect(() => {
    if (newSign && newSign !== currentSign) {
      const targetData = getConstellationData(newSign);
      if (targetData) {
        // Start transition
        setIsTransitioning(true);
        setShowLines(false);
        setShowStarColors(false);

        // Animate stars to new positions
        const animation = requestAnimationFrame(() => {
          setCurrentPoints(targetData.points);
        });

        // After stars reach new positions
        const colorTimeout = setTimeout(() => {
          setShowStarColors(true);
          
          // Show lines after colors are set
          const lineTimeout = setTimeout(() => {
            setShowLines(true);
            setIsTransitioning(false);
          }, 800); // Delay for lines

          return () => clearTimeout(lineTimeout);
        }, 1000); // Delay for colors

        return () => {
          cancelAnimationFrame(animation);
          clearTimeout(colorTimeout);
        };
      }
    }
  }, [newSign, currentSign]);

  // Add safety check for rendering
  if (!currentData || !currentPoints.length) {
    console.log('No constellation data for:', currentSign);
    return null;
  }

  return (
    <div className={`constellation-container ${isVisible ? 'visible' : ''}`}>
      <svg viewBox="0 0 100 100" className="constellation-svg">
        {/* Lines with fade in/out */}
        {showLines && currentData.lines.map((line, i) => {
          const start = currentPoints[line[0]];
          const end = currentPoints[line[1]];
          if (!start || !end) return null;

          return (
            <line
              key={`line-${i}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              className="constellation-line"
            />
          );
        })}
        
        {/* Stars */}
        {currentPoints.map((point, i) => (
          <g key={`star-${i}`}>
            <circle
              cx={point.x}
              cy={point.y}
              r={point.magnitude ? 3 - point.magnitude/2 : 1}
              className={`constellation-star ${isTransitioning ? 'transitioning' : ''}`}
              style={{
                fill: showStarColors ? getStarColor(point) : 'white'
              }}
            />
            {point.name && (
              <text
                x={point.x + 2}
                y={point.y - 2}
                className="star-label"
              >
                {point.name}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
};

export default Constellation;