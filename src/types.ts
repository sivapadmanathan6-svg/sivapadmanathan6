export interface Skill {
  name: string;
  icon: string; // Lucide icon name or React component identifier
  level: number; // percentage (optional decoration)
  description?: string;
  glowColor: 'purple' | 'cyan' | 'magenta' | 'emerald';
  category: 'Frontend' | 'Backend' | 'Databases' | 'Tools';
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string; // generated image URL or SVG generator representation
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  achievements: string[];
  category: 'Full Stack' | 'Frontend' | 'Backend';
  year: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  type: 'milestone' | 'education' | 'certification';
  glowColor: 'purple' | 'cyan' | 'amber';
}
