'use client';

import { ReactNode } from 'react';
import { AnimatedSection } from './AnimatedSection';

interface PanelProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'dark' | 'accent' | 'gradient';
  size?: 'sm' | 'md' | 'lg' | 'full';
  delay?: number;
}

const variantStyles = {
  default: 'bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800',
  dark: 'bg-neutral-900 dark:bg-neutral-950 text-white',
  accent: 'bg-primary-50 dark:bg-primary-950 border border-primary-200 dark:border-primary-800',
  gradient: 'panel-gradient border border-neutral-200 dark:border-neutral-800',
};

const sizeStyles = {
  sm: 'p-6 rounded-xl',
  md: 'p-8 rounded-2xl',
  lg: 'p-12 rounded-3xl',
  full: 'p-8 md:p-16 rounded-3xl',
};

export function Panel({
  children,
  className = '',
  variant = 'default',
  size = 'md',
  delay = 0,
}: PanelProps) {
  return (
    <AnimatedSection delay={delay}>
      <div
        className={`
          shadow-lg transition-shadow duration-300 hover:shadow-xl
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
      >
        {children}
      </div>
    </AnimatedSection>
  );
}
