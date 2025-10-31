import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-cyan-500/30 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold font-mono bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent mb-4">
              HIKARU AI
            </h3>
            <p className="text-gray-400 text-sm font-mono">
              Cyberpunk AI Chat & Music Recommendation Platform
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-cyan-400 font-mono font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-cyan-300 text-sm font-mono transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/chat"
                  className="text-gray-400 hover:text-cyan-300 text-sm font-mono transition-colors duration-300"
                >
                  AI Chat
                </Link>
              </li>
              <li>
                <Link
                  href="/music"
                  className="text-gray-400 hover:text-cyan-300 text-sm font-mono transition-colors duration-300"
                >
                  Music
                </Link>
              </li>
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-cyan-400 font-mono font-bold mb-4">Powered By</h4>
            <ul className="space-y-2 text-sm font-mono text-gray-400">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-500 rounded-full" />
                Grok AI (xAI)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full" />
                Spotify API
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full" />
                Next.js 14
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-cyan-500/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-mono">
            © {currentYear} HIKARU AI. Built with 💚 using Black Sun Theme.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs font-mono text-gray-600">v1.0.0-alpha</span>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-mono text-gray-500">System Online</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
