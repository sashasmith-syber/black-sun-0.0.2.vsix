import React from 'react';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'blue' | 'gray' | 'white';
  className?: string;
}

export function Loading({
  size = 'md',
  color = 'blue',
  className = '',
}: LoadingProps) {
  const sizeStyles = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  };

  const colorStyles = {
    blue: 'border-blue-500',
    gray: 'border-gray-500',
    white: 'border-white',
  };

  return (
    <div className={`inline-block animate-spin rounded-full border-2 border-t-transparent ${sizeStyles[size]} ${colorStyles[color]} ${className}`} />
  );
}
