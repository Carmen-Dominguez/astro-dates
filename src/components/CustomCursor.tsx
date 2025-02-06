import { useEffect, useState } from 'react';
import '../styles/customCursor.scss'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
  let timeoutId: number;

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);
      
      // Check if hovering over interactive element
      const target = e.target as HTMLElement;
      const isInteractive = target.matches('button, input, select, a, [role="button"], label, .info-button, .close-button');
      setIsHoveringInteractive(isInteractive);
      
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener('mousemove', updatePosition);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div 
      className={`custom-cursor ${isHoveringInteractive ? 'hidden' : ''}`}
      style={{ 
        left: `${position.x}px`, 
        top: `${position.y}px`,
        opacity: isMoving ? 1 : 0.7
      }}
    />
  );
} 