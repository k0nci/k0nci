import React from 'react';

interface TechStackProps {
  technologies: string[];
}

const TechStack: React.FC<TechStackProps> = ({ technologies }) => (
  <div className="mb-14 flex flex-wrap justify-center gap-4 md:gap-10">
    {technologies.map((tech) => (
      <div
        key={tech}
        className="group relative cursor-pointer overflow-hidden rounded-full border border-white/15 bg-white/8 px-6 py-3 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-blue-400/30 hover:bg-white/15 hover:shadow-2xl md:px-9 md:py-5"
      >
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-400/30 to-transparent transition-transform duration-600 group-hover:translate-x-full" />
        <span className="relative text-sm font-light tracking-wide md:text-base">{tech}</span>
      </div>
    ))}
  </div>
);

export default TechStack;
