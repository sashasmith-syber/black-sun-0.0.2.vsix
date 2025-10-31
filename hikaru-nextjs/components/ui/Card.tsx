import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glow' | 'bordered';
}

export function Card({ children, className, variant = 'default' }: CardProps) {
  const variants = {
    default: 'bg-gray-900/50 border border-cyan-500/30',
    glow: 'bg-gray-900/50 border border-cyan-500 shadow-[0_0_15px_rgba(0,255,255,0.3)]',
    bordered: 'bg-transparent border-2 border-cyan-400',
  };

  return (
    <div
      className={cn(
        'rounded-lg p-6 backdrop-blur-sm transition-all duration-300',
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('mb-4 border-b border-cyan-500/30 pb-3', className)}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn('text-xl font-bold text-cyan-400 font-mono', className)}>
      {children}
    </h3>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('text-gray-300', className)}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('mt-4 pt-3 border-t border-cyan-500/30', className)}>
      {children}
    </div>
  );
}
