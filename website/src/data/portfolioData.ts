import { type PersonalInfo, type ActivityItem, type SocialLink } from '../types';
import { SiGithub, SiLinkedin } from 'react-icons/si';

export const personalInfo: PersonalInfo = {
  name: 'Matej Koncal',
  subtitle: 'Software Engineer & Mountain Enthusiast',
};

export const technologies = ['Backend', 'Cloud', 'Microservices', 'DevOps'];

export const activities: ActivityItem[] = [
  { emoji: '🚵‍♂️', title: 'Mountain Biking' },
  { emoji: '🏂', title: 'Snowboarding' },
  { emoji: '⛰️', title: 'Mountains' },
];

export const socialLinks: SocialLink[] = [
  {
    href: 'https://github.com/k0nci',
    title: 'GitHub',
    icon: SiGithub,
  },
  {
    href: 'https://linkedin.com/in/mkoncal',
    title: 'LinkedIn',
    icon: SiLinkedin,
  },
];
