'use client';

import { ReactNode } from 'react';
import { AnimatedSection } from './AnimatedSection';

interface NarrationProps {
  children: ReactNode;
  variant?: 'default' | 'emphasis' | 'conclusion';
  className?: string;
  delay?: number;
}

export function Narration({
  children,
  variant = 'default',
  className = '',
  delay = 0,
}: NarrationProps) {
  const variantStyles = {
    default: 'text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed',
    emphasis: 'text-neutral-800 dark:text-neutral-200 text-xl leading-relaxed font-medium italic',
    conclusion: 'text-primary-700 dark:text-primary-300 text-xl leading-relaxed font-medium border-l-4 border-primary-500 pl-6',
  };

  return (
    <AnimatedSection delay={delay}>
      <p className={`${variantStyles[variant]} ${className}`}>
        {children}
      </p>
    </AnimatedSection>
  );
}
