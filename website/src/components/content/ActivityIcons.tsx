import React from 'react';
import { type ActivityItem } from '../../types';

interface ActivityIconsProps {
  activities: ActivityItem[];
}

const ActivityIcons: React.FC<ActivityIconsProps> = ({ activities }) => (
  <div className="mb-10 flex justify-center gap-8 md:gap-14">
    {activities.map((activity, index) => (
      <div
        key={index}
        title={activity.title}
        className="group relative flex h-20 w-20 cursor-pointer items-center justify-center rounded-full border-2 border-white/15 bg-white/10 text-3xl backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:bg-white/18 hover:shadow-2xl md:h-24 md:w-24 md:text-4xl"
      >
        <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-blue-400/50 to-purple-500/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {activity.emoji}
      </div>
    ))}
  </div>
);

export default ActivityIcons;
