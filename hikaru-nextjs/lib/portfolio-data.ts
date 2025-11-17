export interface PortfolioProject {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  featured: boolean;
  github?: string;
  demo?: string;
  image?: string;
  category: 'theme' | 'web-app' | 'plugin' | 'library';
  status: 'completed' | 'in-progress' | 'planned';
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'hikaru-ai',
    name: 'HIKARU AI Platform',
    description: 'A Next.js-based AI platform featuring Grok AI chat integration and Spotify music recommendations with BPM-based playlist generation. Built with cyberpunk aesthetics and the Black Sun theme.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Grok AI', 'Spotify API', 'TailwindCSS'],
    featured: true,
    github: 'https://github.com/sashasmith-syber/black-sun-0.0.2.vsix',
    demo: '/chat',
    category: 'web-app',
    status: 'completed'
  },
  {
    id: 'black-sun-theme',
    name: 'Black Sun VS Code Theme',
    description: 'A cyberpunk-inspired dark theme for VS Code featuring true black backgrounds, neon cyan glows, and matrix green accents. Optimized for OLED displays with comprehensive syntax highlighting.',
    technologies: ['VS Code API', 'JSON', 'Color Theory'],
    featured: true,
    github: 'https://github.com/sashasmith-syber/black-sun-0.0.2.vsix',
    category: 'theme',
    status: 'completed'
  },
  {
    id: 'bpm-advisor',
    name: 'BPM Advisor',
    description: 'An intelligent BPM recommendation system that helps users discover the perfect tempo for their music based on genre, mood, and activity. Features comprehensive genre database with over 12 music styles.',
    technologies: ['TypeScript', 'React', 'Music Theory'],
    featured: true,
    github: 'https://github.com/sashasmith-syber/black-sun-0.0.2.vsix',
    demo: '/music',
    category: 'library',
    status: 'completed'
  },
  {
    id: 'solene-dev-portfolio',
    name: 'Solène Dev Studio (Inspiration)',
    description: 'A beautifully crafted front-end developer portfolio showcasing professional React and WordPress expertise. This public project serves as inspiration for modern portfolio design and user experience.',
    technologies: ['React', 'JavaScript', 'WordPress', 'Responsive Design'],
    featured: true,
    demo: 'https://solenesun.com/',
    category: 'web-app',
    status: 'completed'
  },
  {
    id: 'edge-browser-theme',
    name: 'Black Sun Edge Theme',
    description: 'Cyberpunk theme extension for Microsoft Edge browser, maintaining design consistency across the entire development environment.',
    technologies: ['Chrome Extension API', 'Manifest V3', 'CSS'],
    featured: false,
    github: 'https://github.com/sashasmith-syber/black-sun-0.0.2.vsix',
    category: 'theme',
    status: 'in-progress'
  },
  {
    id: 'codex-prime',
    name: 'CODEX-PRIME',
    description: 'A powerful prompt engine for AI interactions and automation workflows.',
    technologies: ['AI/ML', 'Prompt Engineering'],
    featured: false,
    github: 'https://github.com/sashasmith-syber/CODEX-PRIME',
    category: 'library',
    status: 'completed'
  }
];

export const getfeaturedProjects = () => 
  portfolioProjects.filter(p => p.featured);

export const getProjectsByCategory = (category: PortfolioProject['category']) => 
  portfolioProjects.filter(p => p.category === category);

export const getProjectById = (id: string) => 
  portfolioProjects.find(p => p.id === id);
