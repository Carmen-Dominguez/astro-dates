import React from 'react';
import '../styles/nightSky.scss';

interface NightSkyProps {
  children?: React.ReactNode;
}

const NightSky: React.FC<NightSkyProps> = ({ children }) => {

  return (
    <div className="night-sky">
      <div className="stars-layer-2" />
      <div className="content-wrapper">
        {children}
      </div>
    </div>
  );
};

export default NightSky;
