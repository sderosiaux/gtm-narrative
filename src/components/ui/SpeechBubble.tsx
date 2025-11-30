'use client';

import { ReactNode } from 'react';
import { AnimatedSection } from './AnimatedSection';

interface SpeechBubbleProps {
  children: ReactNode;
  speaker?: string;
  speakerColor?: string;
  variant?: 'speech' | 'thought' | 'narration';
  position?: 'left' | 'right';
  className?: string;
  delay?: number;
}

export function SpeechBubble({
  children,
  speaker,
  speakerColor = 'text-primary-600',
  variant = 'speech',
  position = 'left',
  className = '',
  delay = 0,
}: SpeechBubbleProps) {
  const baseStyles = 'relative px-6 py-4 rounded-2xl shadow-md';

  const variantStyles = {
    speech: 'bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700',
    thought: 'bg-neutral-100 dark:bg-neutral-800 border-2 border-dashed border-neutral-300 dark:border-neutral-600 italic',
    narration: 'bg-primary-50 dark:bg-primary-900/30 border-l-4 border-primary-500',
  };

  const tailPosition = position === 'left' ? 'left-6' : 'right-6';

  return (
    <AnimatedSection delay={delay} direction={position === 'left' ? 'left' : 'right'}>
      <div className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
        {speaker && (
          <span className={`block text-sm font-semibold mb-2 ${speakerColor}`}>
            {speaker}
          </span>
        )}
        <div className="text-neutral-700 dark:text-neutral-200 leading-relaxed">
          {children}
        </div>
        {variant === 'speech' && (
          <div
            className={`absolute -bottom-2 ${tailPosition} w-4 h-4 bg-white dark:bg-neutral-800 border-r border-b border-neutral-200 dark:border-neutral-700 transform rotate-45`}
          />
        )}
      </div>
    </AnimatedSection>
  );
}
