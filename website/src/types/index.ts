import { type IconType } from 'react-icons';

export interface PersonalInfo {
  name: string;
  subtitle: string;
}

export interface ActivityItem {
  emoji: string;
  title: string;
}

export interface SocialLink {
  href: string;
  title: string;
  icon: IconType;
}
