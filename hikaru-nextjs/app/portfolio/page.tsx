import Link from 'next/link';
import { PortfolioSection } from '@/components/features/PortfolioSection';
import { portfolioProjects } from '@/lib/portfolio-data';

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold font-mono mb-6 bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
            DEVELOPER PORTFOLIO
          </h1>
          <p className="text-xl text-gray-400 font-mono mb-4">
            Showcasing projects in AI, web development, and design
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-gray-500 font-mono">
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Full Stack Development
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
              AI Integration
            </span>
            <span>•</span>
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></span>
              UI/UX Design
            </span>
          </div>
        </header>

        {/* Portfolio Projects */}
        <PortfolioSection projects={portfolioProjects} showAll={true} />

        {/* About Section */}
        <section className="mt-20 border-t-2 border-cyan-400 pt-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold font-mono text-cyan-400 mb-6 text-center">
              About the Black Sun Ecosystem
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-cyan-400/30 rounded-lg p-6 bg-black/30">
                <h3 className="text-xl font-bold text-green-400 font-mono mb-3">
                  🎨 Design Philosophy
                </h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  The Black Sun ecosystem embraces a cyberpunk aesthetic with true black backgrounds,
                  neon glows, and matrix-inspired accents. Every component is designed for OLED
                  displays and late-night coding sessions.
                </p>
              </div>
              <div className="border border-green-400/30 rounded-lg p-6 bg-black/30">
                <h3 className="text-xl font-bold text-cyan-400 font-mono mb-3">
                  🚀 Technology Stack
                </h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  Built with modern technologies: Next.js, React, TypeScript, Grok AI, and Spotify API.
                  Every tool is chosen for performance, developer experience, and cutting-edge capabilities.
                </p>
              </div>
              <div className="border border-yellow-400/30 rounded-lg p-6 bg-black/30">
                <h3 className="text-xl font-bold text-yellow-400 font-mono mb-3">
                  💡 Inspiration
                </h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  Inspired by excellent public portfolios like Solène Dev Studio, this ecosystem
                  demonstrates the power of cohesive design across multiple platforms and applications.
                </p>
              </div>
              <div className="border border-blue-400/30 rounded-lg p-6 bg-black/30">
                <h3 className="text-xl font-bold text-blue-400 font-mono mb-3">
                  🎯 Mission
                </h3>
                <p className="text-gray-400 font-mono text-sm leading-relaxed">
                  To create a unified development experience that looks great, performs exceptionally,
                  and integrates cutting-edge AI capabilities for modern developers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-20 text-center">
          <div className="inline-block border-2 border-cyan-400 rounded-lg p-8 bg-black/50">
            <h3 className="text-2xl font-bold text-cyan-400 font-mono mb-4">
              Explore the Ecosystem
            </h3>
            <p className="text-gray-400 font-mono mb-6">
              Try the AI chat or discover music recommendations
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/chat">
                <button className="px-6 py-3 border-2 border-cyan-400 rounded-lg text-cyan-400 font-mono font-bold hover:bg-cyan-400 hover:text-black transition-all duration-300">
                  AI Chat →
                </button>
              </Link>
              <Link href="/music">
                <button className="px-6 py-3 border-2 border-green-400 rounded-lg text-green-400 font-mono font-bold hover:bg-green-400 hover:text-black transition-all duration-300">
                  Music Recommendations →
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link href="/" className="text-cyan-400 hover:text-green-400 font-mono text-sm transition-colors">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
