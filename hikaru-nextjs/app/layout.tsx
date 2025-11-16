import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sasha Smith - AI Innovator & Developer Portfolio',
  description: 'Portfolio of Sasha Smith: AI Innovator, Developer, and Creator of Persona AI Injection, SOUNDBLUEPRINT™©, and MusicGen Prompt Engineering solutions.',
  keywords: ['Sasha Smith', 'AI Developer', 'Persona AI Injection', 'MusicGen', 'SOUNDBLUEPRINT', 'AI Music', 'Prompt Engineering', 'TypeScript', 'React', 'Portfolio'],
  authors: [{ name: 'Sasha Smith' }],
  openGraph: {
    title: 'Sasha Smith - AI Innovator & Developer',
    description: 'Portfolio showcasing AI innovations, music technology, and cutting-edge software development',
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
