'use client';

import { AnimatedSection } from './AnimatedSection';

interface StepHeaderProps {
  stepNumber: number;
  title: string;
  subtitle: string;
  color: string;
}

export function StepHeader({ stepNumber, title, subtitle, color }: StepHeaderProps) {
  return (
    <AnimatedSection className="text-center mb-16">
      <div className="inline-flex items-center gap-3 mb-6">
        <div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
          style={{ backgroundColor: color }}
        >
          {stepNumber}
        </div>
        <span
          className="text-sm font-semibold tracking-wider uppercase"
          style={{ color }}
        >
          Step {stepNumber}
        </span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 text-balance">
        {title}
      </h2>
      <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-pretty">
        {subtitle}
      </p>
    </AnimatedSection>
  );
}
