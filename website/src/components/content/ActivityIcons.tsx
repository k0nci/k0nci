import React from 'react';
import { type ActivityItem } from '../../types';

interface ActivityIconsProps {
  activities: ActivityItem[];
  className?: string;
}

const ActivityIcons: React.FC<ActivityIconsProps> = ({ activities, className = '' }) => (
  <div className={`${className} flex justify-center gap-8 md:gap-14`}>
    {activities.map((activity) => (
      <div
        key={activity.title}
        title={activity.title}
        className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/15 bg-white/10 text-2xl backdrop-blur-sm md:h-16 md:w-16 md:text-3xl"
      >
        {activity.emoji}
      </div>
    ))}
  </div>
);

export default ActivityIcons;
