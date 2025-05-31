import { type PersonalInfo, type ActivityItem, type SocialLink } from '../types';
import { SiGithub } from '@icons-pack/react-simple-icons';
import LinkedInIcon from '../components/icons/LinkedInIcon';

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
    href: 'https://github.com/yourusername',
    title: 'GitHub',
    icon: SiGithub,
  },
  {
    href: 'https://linkedin.com/in/yourusername',
    title: 'LinkedIn',
    icon: LinkedInIcon,
  },
];
