import React from 'react';
import { cn } from '@/lib/utils';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  className?: string;
}

export function Loading({ size = 'md', text, className }: LoadingProps) {
  const sizes = {
    sm: 'w-6 h-6 border-2',
    md: 'w-10 h-10 border-3',
    lg: 'w-16 h-16 border-4',
  };

  return (
    <div className={cn('flex flex-col items-center justify-center gap-4', className)}>
      <div
        className={cn(
          'rounded-full border-cyan-500 border-t-transparent animate-spin',
          sizes[size]
        )}
      />
      {text && (
        <p className="text-cyan-400 font-mono text-sm animate-pulse">{text}</p>
      )}
    </div>
  );
}

export function LoadingDots({ className }: { className?: string }) {
  return (
    <div className={cn('flex gap-1', className)}>
      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
      <span className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
    </div>
  );
}

export function LoadingBar({ progress, className }: { progress?: number; className?: string }) {
  return (
    <div className={cn('w-full h-2 bg-gray-800 rounded-full overflow-hidden', className)}>
      <div
        className="h-full bg-gradient-to-r from-cyan-500 to-green-500 transition-all duration-300 shadow-[0_0_10px_rgba(0,255,255,0.5)]"
        style={{ width: progress ? `${progress}%` : '100%' }}
      >
        {!progress && (
          <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
        )}
      </div>
    </div>
  );
}

export function LoadingScreen({ text = 'Loading...' }: { text?: string }) {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="text-center">
        <Loading size="lg" text={text} />
      </div>
    </div>
  );
}
