import { type ComponentType, type SVGProps } from 'react';

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
  icon: ComponentType<Icon>;
}

export type Icon = SVGProps<SVGSVGElement> & { size?: number };
