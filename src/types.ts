export interface Project {
  id: string;
  name: string;
  displayName: string;
  description: string;
  language: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  stars?: number;
  forks?: number;
  featured?: boolean;
  highlights?: string[];
  whatILearned?: string[];
  architecture?: string;
  isLiveRepo?: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'core-languages' | 'web-technologies' | 'exploration';
  level: 'Comfortable' | 'Developing' | 'Familiar' | 'Learning';
  experienceDesc: string;
  codeSnippet: string;
  iconName: string;
  colorAccent: string;
  topics: string[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  status: 'completed' | 'in-progress' | 'future';
  icon: string;
  tags: string[];
}

export interface StudentProfile {
  name: string;
  role: string;
  year: string;
  college: string;
  collegeShort: string;
  location: string;
  bornYear: number;
  email: string;
  github: string;
  githubUsername: string;
  linkedin: string;
  tagline: string;
  bio: string;
  quote: string;
}
