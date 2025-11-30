'use client';

import { ReactNode } from 'react';
import { AnimatedSection } from './AnimatedSection';

interface ComicPanelProps {
  children: ReactNode;
  visual?: string;
  visualBg?: string;
  className?: string;
  delay?: number;
  layout?: 'vertical' | 'horizontal' | 'visual-only';
}

export function ComicPanel({
  children,
  visual,
  visualBg = 'bg-neutral-100 dark:bg-neutral-800',
  className = '',
  delay = 0,
  layout = 'vertical',
}: ComicPanelProps) {
  if (layout === 'visual-only') {
    return (
      <AnimatedSection delay={delay}>
        <div className={`rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800 ${className}`}>
          <div className={`aspect-video ${visualBg} flex items-center justify-center p-8`}>
            {visual && (
              <p className="text-neutral-500 dark:text-neutral-400 text-center italic">
                {visual}
              </p>
            )}
          </div>
        </div>
      </AnimatedSection>
    );
  }

  if (layout === 'horizontal') {
    return (
      <AnimatedSection delay={delay}>
        <div className={`grid md:grid-cols-2 gap-0 rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800 ${className}`}>
          <div className={`aspect-square md:aspect-auto ${visualBg} flex items-center justify-center p-8`}>
            {visual && (
              <p className="text-neutral-500 dark:text-neutral-400 text-center italic">
                {visual}
              </p>
            )}
          </div>
          <div className="bg-white dark:bg-neutral-900 p-8 flex flex-col justify-center">
            {children}
          </div>
        </div>
      </AnimatedSection>
    );
  }

  return (
    <AnimatedSection delay={delay}>
      <div className={`rounded-2xl overflow-hidden shadow-lg border border-neutral-200 dark:border-neutral-800 ${className}`}>
        {visual && (
          <div className={`aspect-video ${visualBg} flex items-center justify-center p-8`}>
            <p className="text-neutral-500 dark:text-neutral-400 text-center italic">
              {visual}
            </p>
          </div>
        )}
        <div className="bg-white dark:bg-neutral-900 p-8">
          {children}
        </div>
      </div>
    </AnimatedSection>
  );
}
