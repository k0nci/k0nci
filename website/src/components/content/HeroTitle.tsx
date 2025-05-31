import React from 'react';

interface HeroTitleProps {
  name: string;
  subtitle: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ name, subtitle }) => (
  <div className="mb-14">
    <h1 className="mb-4 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-6xl font-thin tracking-widest text-transparent text-shadow-lg md:text-7xl">
      {name}
    </h1>
    <p className="text-shadow text-xl font-light opacity-90 md:text-2xl">{subtitle}</p>
  </div>
);

export default HeroTitle;
