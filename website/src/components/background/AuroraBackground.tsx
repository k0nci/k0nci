import React from 'react';

const AuroraBackground: React.FC = () => (
  <div
    className="absolute inset-0 bg-purple-500/5"
    style={{
      animation: 'auroraShift 5s ease-in-out infinite',
    }}
  />
);

export default AuroraBackground;
