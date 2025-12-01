'use client';

import { AppImage } from '@/components/ui/AppImage';
import { AnimatedSection, Narration } from '@/components/ui';

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center py-20 px-6">
      <div className="max-w-6xl mx-auto w-full">
        {/* Title */}
        <AnimatedSection className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-balance">
            Northbridge Bank
          </h1>
          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto text-pretty">
            A story about streaming data, scattered teams, and the journey to a platform that actually works.
          </p>
        </AnimatedSection>

        {/* Main intro panel */}
        <AnimatedSection delay={0.2} className="mb-16">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-200 dark:border-neutral-800">
            <div className="relative aspect-[16/10] w-full bg-white dark:bg-neutral-900">
              <AppImage
                src="/1-intro.jpg"
                alt="Northbridge Bank - Emma and Daniel facing the streaming challenge"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Scroll indicator */}
        <AnimatedSection delay={0.6} className="mt-20 text-center">
          <div className="inline-flex flex-col items-center gap-2 text-neutral-400 dark:text-neutral-600">
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
