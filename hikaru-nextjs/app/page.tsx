import Link from 'next/link'

export default function Home() {
  const projects = [
    {
      name: 'HIKARU AI',
      description: 'Persona-Driven AI Agent & Prompt Engine',
      tech: ['TypeScript', 'React', 'Gemini AI', 'Persona Injection'],
      github: 'https://github.com/sashasmith-syber/HIKARU-AI',
      highlights: ['AI-powered chat interface', 'Custom persona injection', 'Real-time AI responses'],
      color: 'cyan'
    },
    {
      name: 'AURALITH AI',
      description: 'Sound Architect - AI-powered music composition and sound design',
      tech: ['AI Music Generation', 'MusicGen', 'Sound Design', 'SOUNDBLUEPRINT™©'],
      github: 'https://github.com/sashasmith-syber/AURALITH-AI',
      highlights: ['AI sound architecture', 'MusicGen integration', 'Prompt engineering for music'],
      color: 'green'
    },
    {
      name: 'CODEX PRIME',
      description: 'Advanced Prompt Engine for AI systems',
      tech: ['TypeScript', 'React', 'AI Prompt Engineering', 'Gemini'],
      github: 'https://github.com/sashasmith-syber/CODEX-PRIME',
      highlights: ['Sophisticated prompt generation', 'Multi-model support', 'Template system'],
      color: 'yellow'
    },
    {
      name: 'EXTRACTOR 1.0',
      description: 'Image-Text Prompt Generator',
      tech: ['TypeScript', 'Image Analysis', 'AI Integration', 'Prompt Generation'],
      github: 'https://github.com/sashasmith-syber/EXTRACTOR-1.0',
      highlights: ['Visual prompt extraction', 'AI-powered analysis', 'Text generation'],
      color: 'blue'
    },
    {
      name: 'MPC ATLAS AI',
      description: 'Akai MPC Mentor, Interactive Tutorial & Adviser with Composer function',
      tech: ['TypeScript', 'Music Production', 'AI Tutoring', 'MPC Integration'],
      github: 'https://github.com/sashasmith-syber/MPC-ATLAS-AI',
      highlights: ['Interactive MPC tutorials', 'AI-powered music advice', 'Composition assistance'],
      color: 'cyan'
    },
    {
      name: 'BLACK SUN Theme',
      description: 'Cyberpunk VS Code & Browser Theme Ecosystem',
      tech: ['VS Code Extension', 'Browser Theme', 'UI/UX Design', 'OLED Optimized'],
      github: 'https://github.com/sashasmith-syber/black-sun-0.0.2.vsix',
      highlights: ['Neon cyberpunk aesthetic', 'Complete theme system', 'Multi-platform'],
      color: 'green'
    }
  ]

  const expertise = [
    {
      title: 'Persona AI Injection',
      description: 'Revolutionary approach to AI personality integration, creating dynamic and context-aware AI agents with distinct personas that adapt to user interactions.',
      icon: '🎭'
    },
    {
      title: 'MusicGen Experimentation',
      description: 'Advanced prompt engineering for AI music generation, exploring the boundaries of AI-composed music through sophisticated prompt design and parameter optimization.',
      icon: '🎵'
    },
    {
      title: 'SOUNDBLUEPRINT™©',
      description: 'Proprietary framework for AI-driven sound design and music architecture, combining technical precision with creative innovation.',
      icon: '🔷'
    },
    {
      title: 'Persona-Driven Prompt Engines',
      description: 'Custom-built AI prompt systems that leverage persona injection to create more natural, context-aware, and effective AI interactions for music generation and beyond.',
      icon: '⚡'
    }
  ]

  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b-2 border-bs-cyan bg-bs-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="text-3xl md:text-4xl font-bold text-bs-cyan text-glow-cyan cursor-pointer hover:scale-105 transition-transform">
                SASHA SMITH
              </h1>
            </Link>
            <nav className="flex gap-4 md:gap-6 flex-wrap justify-end">
              <Link 
                href="#projects" 
                className="px-3 py-2 border border-bs-cyan rounded hover:bg-bs-cyan hover:text-bs-black transition-all duration-300 text-sm md:text-base"
              >
                Projects
              </Link>
              <Link 
                href="#expertise" 
                className="px-3 py-2 border border-bs-green rounded hover:bg-bs-green hover:text-bs-black transition-all duration-300 text-sm md:text-base"
              >
                Expertise
              </Link>
              <Link 
                href="/chat" 
                className="px-3 py-2 border border-bs-yellow rounded hover:bg-bs-yellow hover:text-bs-black transition-all duration-300 text-sm md:text-base"
              >
                AI Chat
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-bs-black to-bs-black/80">
        <div className="container-custom text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-pulse-neon">
              <span className="text-bs-cyan">AI INNOVATOR</span> & <span className="text-bs-green">DEVELOPER</span>
            </h2>
            <p className="text-xl md:text-2xl text-bs-white/80 mb-4">
              Pioneering <span className="text-bs-cyan font-bold">Persona AI Injection</span> & <span className="text-bs-green font-bold">MusicGen Prompt Engineering</span>
            </p>
            <p className="text-lg md:text-xl text-bs-gray mb-6">
              Creator of <span className="text-bs-yellow font-bold">SOUNDBLUEPRINT™©</span> and advanced Persona-Driven AI systems
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-2 text-bs-cyan border border-bs-cyan px-4 py-2 rounded">
                <span className="inline-block w-2 h-2 bg-bs-cyan rounded-full animate-pulse"></span>
                <span className="text-sm">AI ARCHITECT</span>
              </span>
              <span className="flex items-center gap-2 text-bs-green border border-bs-green px-4 py-2 rounded">
                <span className="inline-block w-2 h-2 bg-bs-green rounded-full animate-pulse"></span>
                <span className="text-sm">SOUND ENGINEER</span>
              </span>
              <span className="flex items-center gap-2 text-bs-yellow border border-bs-yellow px-4 py-2 rounded">
                <span className="inline-block w-2 h-2 bg-bs-yellow rounded-full animate-pulse"></span>
                <span className="text-sm">FULL-STACK DEV</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 px-4 border-t-2 border-bs-cyan/30">
        <div className="container-custom max-w-6xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-bs-green border-b-2 border-bs-green pb-2">AREAS OF EXPERTISE</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((area, idx) => (
              <div 
                key={idx}
                className="border-2 border-bs-cyan/30 rounded-lg p-6 bg-bs-black/50 backdrop-blur-sm hover:border-bs-cyan hover:bg-bs-cyan/5 transition-all duration-300 hover:shadow-neon-cyan"
              >
                <div className="text-5xl mb-4">{area.icon}</div>
                <h4 className="text-2xl font-bold mb-3 text-bs-cyan">{area.title}</h4>
                <p className="text-bs-white/80 leading-relaxed">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 border-t-2 border-bs-green/30">
        <div className="container-custom max-w-7xl mx-auto">
          <h3 className="text-3xl md:text-5xl font-bold mb-12 text-center">
            <span className="text-bs-cyan border-b-2 border-bs-cyan pb-2">FEATURED PROJECTS</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
              const borderColor = `border-bs-${project.color}`
              const textColor = `text-bs-${project.color}`
              const hoverBg = `hover:bg-bs-${project.color}/10`
              const hoverBorder = `hover:border-bs-${project.color}`
              
              return (
                <div 
                  key={idx}
                  className={`group border-2 ${borderColor} rounded-lg p-6 bg-bs-black/50 backdrop-blur-sm ${hoverBg} ${hoverBorder} transition-all duration-300 hover:-translate-y-2`}
                >
                  <h4 className={`text-2xl font-bold mb-3 ${textColor}`}>{project.name}</h4>
                  <p className="text-bs-white/80 mb-4 min-h-[3rem]">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-sm text-bs-gray mb-2 font-bold">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-bs-black/50 border border-bs-gray/30 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-bs-gray mb-2 font-bold">Highlights:</p>
                    <ul className="text-sm text-bs-white/70 space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className={`${textColor} mt-1`}>▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 ${textColor} hover:underline mt-4`}
                  >
                    <span>View on GitHub</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 border-t-2 border-bs-yellow/30">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-5xl font-bold mb-8">
            <span className="text-bs-yellow border-b-2 border-bs-yellow pb-2">GET IN TOUCH</span>
          </h3>
          <p className="text-xl text-bs-white/80 mb-8">
            Interested in collaboration or want to learn more about my work?
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <a 
              href="https://github.com/sashasmith-syber"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 border-2 border-bs-cyan rounded-lg hover:bg-bs-cyan hover:text-bs-black transition-all duration-300 hover:shadow-neon-cyan flex items-center gap-3 min-w-[200px] justify-center"
            >
              <span className="text-2xl">💻</span>
              <span className="font-bold">GitHub</span>
            </a>
            <a 
              href="mailto:contact@sashasmith.dev"
              className="group px-8 py-4 border-2 border-bs-green rounded-lg hover:bg-bs-green hover:text-bs-black transition-all duration-300 hover:shadow-neon-green flex items-center gap-3 min-w-[200px] justify-center"
            >
              <span className="text-2xl">📧</span>
              <span className="font-bold">Email</span>
            </a>
          </div>
          <div className="mt-12 p-6 border border-bs-cyan/30 rounded-lg bg-bs-black/30">
            <p className="text-bs-cyan text-sm mb-2 font-bold">AVAILABILITY</p>
            <p className="text-bs-white/70">
              Open to freelance projects, collaborations, and consulting opportunities in AI development, 
              music technology, and innovative software solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-bs-cyan bg-bs-black/90 backdrop-blur-sm py-8 mt-auto">
        <div className="container-custom text-center">
          <p className="text-bs-gray mb-2">
            &copy; 2024 SASHA SMITH. All rights reserved.
          </p>
          <p className="text-sm text-bs-gray mb-4">
            Powered by <span className="text-bs-cyan">Black Sun</span> Theme Ecosystem
          </p>
          <div className="flex items-center justify-center gap-4 text-xs text-bs-gray flex-wrap">
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-bs-cyan rounded-full animate-pulse"></span>
              Persona AI Injection
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-bs-green rounded-full animate-pulse"></span>
              SOUNDBLUEPRINT™©
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-bs-yellow rounded-full animate-pulse"></span>
              MusicGen Expert
            </span>
          </div>
        </div>
      </footer>
    </main>
  )
}
