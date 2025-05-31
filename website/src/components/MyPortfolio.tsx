import React from 'react';
import AuroraBackground from './background/AuroraBackground';
import TwinklingStars from './background/TwinklingStars';
import MountainLayers from './background/MountainLayers';
import HeroTitle from './content/HeroTitle';
import TechStack from './content/TechStack';
import ActivityIcons from './content/ActivityIcons';
import SocialLinks from './content/SocialLinks';
import { personalInfo, technologies, activities, socialLinks } from '../data/portfolioData';

const MountainPortfolio: React.FC = () => {
  return (
    <div
      className="min-h-screen overflow-x-hidden font-sans text-white"
      style={{
        background:
          'linear-gradient(135deg, #2c3e50 0%, #4a69bd 20%, #3c6382 40%, #40739e 60%, #487eb0 80%, #5b73e8 100%)',
      }}
    >
      <div className="relative flex h-screen items-center justify-center">
        <AuroraBackground />
        <TwinklingStars />
        <MountainLayers />

        <div className="animate-fadeInUp relative z-20 px-4 text-center">
          <HeroTitle name={personalInfo.name} subtitle={personalInfo.subtitle} />
          <TechStack technologies={technologies} />
          <ActivityIcons activities={activities} />
          <SocialLinks links={socialLinks} />
        </div>
      </div>
    </div>
  );
};

export default MountainPortfolio;
