import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="border-b-2 border-bs-cyan bg-bs-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container-custom py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl md:text-4xl font-bold text-bs-cyan text-glow-cyan">
              HIKARU<span className="text-bs-green">_AI</span>
            </h1>
            <nav className="flex gap-6">
              <Link 
                href="/chat" 
                className="px-4 py-2 border border-bs-cyan rounded hover:bg-bs-cyan hover:text-bs-black transition-all duration-300 hover:shadow-neon-cyan"
              >
                AI Chat
              </Link>
              <Link 
                href="/music" 
                className="px-4 py-2 border border-bs-green rounded hover:bg-bs-green hover:text-bs-black transition-all duration-300 hover:shadow-neon-green"
              >
                Music
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="container-custom text-center">
          <div className="mb-8">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 animate-pulse-neon text-bs-cyan">
              WELCOME TO THE FUTURE
            </h2>
            <p className="text-xl md:text-2xl text-bs-white/80 mb-2">
              Powered by <span className="text-bs-cyan font-bold">Grok AI</span> & <span className="text-bs-green font-bold">Spotify</span>
            </p>
            <div className="flex items-center justify-center gap-2 text-bs-gray">
              <span className="inline-block w-2 h-2 bg-bs-green rounded-full animate-pulse"></span>
              <span className="text-sm">SYSTEM ONLINE</span>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-16">
            {/* AI Chat Card */}
            <Link href="/chat">
              <div className="group border-2 border-bs-cyan rounded-lg p-8 bg-bs-black/50 backdrop-blur-sm hover:bg-bs-cyan/10 transition-all duration-300 hover:shadow-neon-cyan hover:-translate-y-2 cursor-pointer">
                <div className="text-6xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold mb-3 text-bs-cyan group-hover:text-glow-cyan">
                  AI CHAT INTERFACE
                </h3>
                <p className="text-bs-white/70 mb-4">
                  Engage with Grok AI, powered by xAI. Get intelligent responses, creative ideas, and technical assistance.
                </p>
                <div className="flex items-center justify-center gap-2 text-bs-cyan">
                  <span>ENTER CHAT</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>

            {/* Music Card */}
            <Link href="/music">
              <div className="group border-2 border-bs-green rounded-lg p-8 bg-bs-black/50 backdrop-blur-sm hover:bg-bs-green/10 transition-all duration-300 hover:shadow-neon-green hover:-translate-y-2 cursor-pointer">
                <div className="text-6xl mb-4">🎵</div>
                <h3 className="text-2xl font-bold mb-3 text-bs-green group-hover:text-glow-green">
                  MUSIC RECOMMENDATIONS
                </h3>
                <p className="text-bs-white/70 mb-4">
                  Discover music based on BPM and mood. Create custom playlists powered by Spotify's recommendation engine.
                </p>
                <div className="flex items-center justify-center gap-2 text-bs-green">
                  <span>EXPLORE MUSIC</span>
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </div>
            </Link>
          </div>

          {/* Features List */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-8 text-bs-cyan">
              <span className="border-b-2 border-bs-cyan pb-2">FEATURES</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div className="border border-bs-cyan/30 rounded p-4 bg-bs-black/30">
                <div className="text-bs-cyan text-2xl mb-2">⚡</div>
                <h4 className="font-bold mb-2 text-bs-cyan">Lightning Fast</h4>
                <p className="text-sm text-bs-white/70">Powered by Next.js 15 and optimized for performance</p>
              </div>
              <div className="border border-bs-green/30 rounded p-4 bg-bs-black/30">
                <div className="text-bs-green text-2xl mb-2">🎨</div>
                <h4 className="font-bold mb-2 text-bs-green">Cyberpunk UI</h4>
                <p className="text-sm text-bs-white/70">Immersive neon-lit interface with matrix effects</p>
              </div>
              <div className="border border-bs-yellow/30 rounded p-4 bg-bs-black/30">
                <div className="text-bs-yellow text-2xl mb-2">🔒</div>
                <h4 className="font-bold mb-2 text-bs-yellow">Secure</h4>
                <p className="text-sm text-bs-white/70">OAuth authentication and encrypted API calls</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-bs-cyan bg-bs-black/90 backdrop-blur-sm py-8">
        <div className="container-custom text-center">
          <p className="text-bs-gray mb-2">
            &copy; 2024 HIKARU AI. All rights reserved.
          </p>
          <p className="text-sm text-bs-gray">
            Powered by <span className="text-bs-cyan">Black Sun</span> Theme Ecosystem
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-bs-gray">
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-bs-cyan rounded-full animate-pulse"></span>
              Grok AI
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-bs-green rounded-full animate-pulse"></span>
              Spotify API
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-bs-yellow rounded-full animate-pulse"></span>
              Next.js 15
            </span>
          </div>
        </div>
      </footer>
    </main>
  )
}
