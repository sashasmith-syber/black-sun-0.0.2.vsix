import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'HIKARU AI - Cyberpunk AI Platform',
  description: 'AI-powered chat and music recommendations with a cyberpunk aesthetic. Powered by Grok AI and Spotify.',
  keywords: ['AI', 'Grok', 'Spotify', 'Music', 'Chat', 'Cyberpunk', 'Next.js'],
  authors: [{ name: 'Sasha Smith' }],
  openGraph: {
    title: 'HIKARU AI - Cyberpunk AI Platform',
    description: 'AI-powered chat and music recommendations',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="scanlines bg-bs-black text-bs-white font-mono antialiased">
        <div className="relative min-h-screen flex flex-col">
          {/* Matrix Rain Background - will be added via component */}
          <div id="matrix-bg" className="fixed inset-0 pointer-events-none z-0 opacity-20" />
          
          {/* Main Content */}
          <div className="relative z-10 flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
