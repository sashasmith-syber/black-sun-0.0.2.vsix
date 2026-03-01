import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bs-black text-bs-white">
      {/* Cyberpunk 404 Header */}
      <div className="text-center space-y-6 px-4">
        <div className="relative">
          <h1 className="text-9xl font-bold text-bs-cyan animate-pulse-neon">
            404
          </h1>
          <div className="absolute inset-0 blur-xl opacity-50">
            <h1 className="text-9xl font-bold text-bs-cyan">
              404
            </h1>
          </div>
        </div>
        
        <h2 className="text-3xl font-bold text-bs-green">
          SYSTEM ERROR: PAGE NOT FOUND
        </h2>
        
        <p className="text-xl text-bs-gray max-w-md mx-auto">
          The requested resource does not exist in the HIKARU AI database.
        </p>
        
        {/* Status indicators */}
        <div className="flex items-center justify-center gap-4 text-sm font-mono">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            <span className="text-red-400">ERROR: NOT_FOUND</span>
          </div>
          <span className="text-bs-gray">|</span>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 bg-bs-cyan rounded-full animate-pulse"></span>
            <span className="text-bs-cyan">SYSTEM: ONLINE</span>
          </div>
        </div>
        
        {/* Action buttons */}
        <div className="flex gap-4 justify-center mt-8">
          <Link 
            href="/"
            className="px-6 py-3 bg-bs-cyan text-bs-black font-bold rounded-lg hover:bg-bs-green hover:shadow-neon-cyan transition-all duration-300"
          >
            ← RETURN HOME
          </Link>
          <Link 
            href="/chat"
            className="px-6 py-3 border-2 border-bs-cyan text-bs-cyan font-bold rounded-lg hover:bg-bs-cyan hover:text-bs-black hover:shadow-neon-cyan transition-all duration-300"
          >
            TRY AI CHAT
          </Link>
        </div>
        
        {/* Technical details */}
        <div className="mt-12 p-4 border border-bs-cyan/30 rounded-lg bg-bs-black/50 backdrop-blur-sm max-w-md mx-auto text-left">
          <div className="font-mono text-xs text-bs-gray space-y-1">
            <p><span className="text-bs-cyan">STATUS:</span> 404 NOT_FOUND</p>
            <p><span className="text-bs-cyan">TIMESTAMP:</span> {new Date().toISOString()}</p>
            <p><span className="text-bs-cyan">SYSTEM:</span> HIKARU_AI v0.0.2</p>
            <p><span className="text-bs-cyan">ACTION:</span> REDIRECT_RECOMMENDED</p>
          </div>
        </div>
      </div>
    </div>
  )
}
