'use client';

import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { PortfolioProject } from '@/lib/portfolio-data';

interface PortfolioCardProps {
  project: PortfolioProject;
}

export function PortfolioCard({ project }: PortfolioCardProps) {
  const statusColors = {
    completed: 'text-green-400 border-green-400',
    'in-progress': 'text-yellow-400 border-yellow-400',
    planned: 'text-blue-400 border-blue-400'
  };

  const categoryIcons = {
    theme: '🎨',
    'web-app': '🌐',
    plugin: '🔌',
    library: '📚'
  };

  return (
    <Card variant="bordered" className="group hover:border-cyan-400 transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{categoryIcons[project.category]}</span>
            <div>
              <CardTitle className="text-xl group-hover:text-cyan-400 transition-colors">
                {project.name}
              </CardTitle>
              <div className="flex gap-2 mt-1">
                <span className={`text-xs px-2 py-1 rounded border ${statusColors[project.status]}`}>
                  {project.status.replace('-', ' ')}
                </span>
                {project.featured && (
                  <span className="text-xs px-2 py-1 rounded border border-cyan-400 text-cyan-400">
                    ⭐ Featured
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-400 font-mono text-sm mb-4">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="mb-4">
          <h4 className="text-xs text-gray-500 font-mono mb-2">TECHNOLOGIES:</h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded bg-green-400/10 text-green-400 font-mono"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button variant="secondary" size="sm" className="w-full">
                <span className="mr-2">🔗</span> GitHub
              </Button>
            </a>
          )}
          {project.demo && (
            <Link
              href={project.demo.startsWith('http') ? project.demo : project.demo}
              target={project.demo.startsWith('http') ? '_blank' : '_self'}
              rel={project.demo.startsWith('http') ? 'noopener noreferrer' : ''}
              className="flex-1"
            >
              <Button variant="primary" size="sm" className="w-full">
                <span className="mr-2">🚀</span> Demo
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

interface PortfolioSectionProps {
  projects: PortfolioProject[];
  title?: string;
  showAll?: boolean;
}

export function PortfolioSection({ 
  projects, 
  title = 'Developer Portfolio', 
  showAll = false 
}: PortfolioSectionProps) {
  const displayProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section className="py-12">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold font-mono mb-4 text-cyan-400">
            <span className="border-b-2 border-cyan-400 pb-2">{title}</span>
          </h2>
          <p className="text-gray-400 font-mono">
            Featured projects and contributions to the developer community
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayProjects.map((project) => (
            <PortfolioCard key={project.id} project={project} />
          ))}
        </div>

        {!showAll && projects.length > 3 && (
          <div className="text-center mt-8">
            <Link href="/portfolio">
              <Button size="lg" variant="primary">
                View All Projects →
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
