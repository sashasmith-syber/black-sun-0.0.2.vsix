import Link from "next/link";
import { readFile } from "fs/promises";
import path from "path";
import { PortfolioData } from "@/types/portfolio";

async function getPortfolioData(): Promise<PortfolioData> {
  const filePath = path.join(process.cwd(), "data", "portfolio.json");
  const fileContents = await readFile(filePath, "utf8");
  return JSON.parse(fileContents);
}

export default async function PortfolioPage() {
  const data = await getPortfolioData();

  return (
    <main className="min-h-screen flex flex-col bg-bs-black">
      {/* Header */}
      <header className="border-b-2 border-bs-cyan bg-bs-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-bs-cyan text-glow-cyan">
              {data.profile.name}
            </h1>
            <nav className="flex gap-4">
              <Link
                href="/"
                className="px-4 py-2 border border-bs-cyan rounded hover:bg-bs-cyan hover:text-bs-black transition-all duration-300 hover:shadow-neon-cyan text-sm"
              >
                Home
              </Link>
              <Link
                href="/chat"
                className="px-4 py-2 border border-bs-green rounded hover:bg-bs-green hover:text-bs-black transition-all duration-300 hover:shadow-neon-green text-sm"
              >
                AI Chat
              </Link>
              <Link
                href="/music"
                className="px-4 py-2 border border-bs-yellow rounded hover:bg-bs-yellow hover:text-bs-black transition-all duration-300 text-sm"
              >
                Music
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 border-b-2 border-bs-cyan/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 animate-pulse-neon text-bs-cyan">
              {data.profile.name}
            </h2>
            <p className="text-2xl md:text-3xl text-bs-green mb-6 font-mono">
              {data.profile.title}
            </p>
            <p className="text-lg text-bs-white/80 mb-8 leading-relaxed">
              {data.profile.bio}
            </p>
            <div className="flex items-center justify-center gap-6">
              <a
                href={`mailto:${data.profile.email}`}
                className="px-6 py-3 border-2 border-bs-cyan rounded hover:bg-bs-cyan hover:text-bs-black transition-all duration-300 hover:shadow-neon-cyan font-mono"
              >
                📧 Contact Me
              </a>
              <a
                href={data.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-bs-green rounded hover:bg-bs-green hover:text-bs-black transition-all duration-300 hover:shadow-neon-green font-mono"
              >
                💻 GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-4 border-b-2 border-bs-cyan/30">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-bs-cyan text-center">
            <span className="border-b-2 border-bs-cyan pb-2">EXPERTISE</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {data.expertise.map((item) => (
              <div
                key={item.id}
                className="border-2 border-bs-cyan rounded-lg p-8 bg-bs-black/50 backdrop-blur-sm hover:bg-bs-cyan/10 transition-all duration-300 hover:shadow-neon-cyan hover:-translate-y-2"
              >
                <div className="text-6xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-4 text-bs-cyan">
                  {item.title}
                </h3>
                <p className="text-bs-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <h2 className="text-4xl font-bold mb-12 text-bs-cyan text-center">
            <span className="border-b-2 border-bs-cyan pb-2">PROJECTS</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {data.projects.map((project) => (
              <div
                key={project.id}
                className="border-2 border-bs-green rounded-lg p-8 bg-bs-black/50 backdrop-blur-sm hover:bg-bs-green/10 transition-all duration-300 hover:shadow-neon-green"
              >
                <h3 className="text-2xl font-bold mb-3 text-bs-green">
                  {project.name}
                </h3>
                <p className="text-bs-white/70 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-bs-cyan/20 border border-bs-cyan rounded text-xs text-bs-cyan font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Highlights */}
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-bs-white/70 flex items-start gap-2"
                    >
                      <span className="text-bs-green mt-1">▸</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* GitHub Link */}
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-bs-cyan hover:text-bs-green transition-colors font-mono text-sm"
                >
                  <span>🔗 View on GitHub</span>
                  <span className="group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-bs-cyan bg-bs-black/90 backdrop-blur-sm py-8 mt-auto">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-bs-gray font-mono">
              &copy; 2024 {data.profile.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {data.socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bs-cyan hover:text-bs-green transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-bs-gray">
              Powered by{" "}
              <span className="text-bs-cyan">Black Sun</span> Theme Ecosystem
            </p>
            <div className="mt-2 flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-bs-green rounded-full animate-pulse"></span>
              <span className="text-xs text-bs-gray">SYSTEM ONLINE</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
