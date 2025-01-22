import React, { useEffect, useState } from 'react';
import { getConstellationData } from '../utils/constellationData';
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
  // Add error checking for currentSign
  const currentData = getConstellationData(currentSign) || {
    points: [],
    lines: []
  };
  
  const [currentPoints, setCurrentPoints] = useState(currentData.points);
  
  const getStarClassName = (name?: string) => {
    if (name === 'Antares') return 'antares';
    if (name === 'Spica') return 'spica';
    return '';
  };

  // Handle morphing animation when newSign changes
  useEffect(() => {
    if (newSign && newSign !== currentSign) {
      const targetData = getConstellationData(newSign);
      if (targetData) {
        const targetPoints = targetData.points;
        const animation = requestAnimationFrame(() => {
          setCurrentPoints(targetPoints);
        });
        return () => cancelAnimationFrame(animation);
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
        {/* Draw lines with safety checks */}
        {currentData.lines.map((line, i) => {
          const start = currentPoints[line[0]];
          const end = currentPoints[line[1]];
          
          // Skip drawing if points are undefined
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
        
        {/* Draw stars */}
        {currentPoints.map((point, i) => (
          <g key={`star-${i}`}>
            <circle
              cx={point.x}
              cy={point.y}
              r={point.magnitude ? 3 - point.magnitude/2 : 1}
              className={`constellation-star ${getStarClassName(point.name)}`}
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