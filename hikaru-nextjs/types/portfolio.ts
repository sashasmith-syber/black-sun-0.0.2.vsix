export interface Profile {
  name: string;
  title: string;
  email: string;
  github: string;
  bio: string;
}

export interface Expertise {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  githubLink: string;
  highlights: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PortfolioData {
  profile: Profile;
  expertise: Expertise[];
  projects: Project[];
  socialLinks: SocialLink[];
}
