import React from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-mono font-bold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-cyan-500 text-black hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(0,255,255,0.6)] border-2 border-cyan-400',
    secondary: 'bg-green-500 text-black hover:bg-green-400 hover:shadow-[0_0_20px_rgba(0,255,0,0.6)] border-2 border-green-400',
    outline: 'bg-transparent text-cyan-400 border-2 border-cyan-400 hover:bg-cyan-400/10 hover:shadow-[0_0_15px_rgba(0,255,255,0.4)]',
    ghost: 'bg-transparent text-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
