'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/chat', label: 'AI Chat' },
    { href: '/music', label: 'Music' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-cyan-500/30">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-green-500 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(0,255,255,0.3)] group-hover:shadow-[0_0_25px_rgba(0,255,255,0.5)] transition-all duration-300">
              <span className="text-black font-bold text-xl font-mono">H</span>
            </div>
            <span className="text-2xl font-bold font-mono bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">
              HIKARU AI
            </span>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'font-mono text-sm transition-all duration-300 relative group',
                  pathname === item.href
                    ? 'text-cyan-400'
                    : 'text-gray-400 hover:text-cyan-300'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300',
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ))}
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(0,255,0,0.5)]" />
            <span className="text-xs font-mono text-gray-400">ONLINE</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
