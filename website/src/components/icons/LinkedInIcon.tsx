import React from 'react';
import linkedinIcon from '../../assets/images/InBug-White.png';
import type { Icon } from '../../types';

const LinkedInIcon: React.FC<Icon> = ({ size = 32, className = '' }) => (
  <img src={linkedinIcon} alt="LinkedIn" width={size} height={size} className={className} />
);

export default LinkedInIcon;
