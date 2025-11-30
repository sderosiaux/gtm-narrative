'use client';

import { AnimatedSection, ComicPanel, Narration } from '@/components/ui';

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

        {/* Opening panels */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ComicPanel
            visual="Big glass building. Inside, multiple screens show Kafka Cluster A, Cluster B, Cloud Kafka, On Prem."
            visualBg="bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30"
            delay={0.2}
          >
            <Narration variant="emphasis">
              Northbridge Bank had data in motion everywhere. Cards, payments, fraud checks, customer events. Kafka was the heartbeat of the place.
            </Narration>
          </ComicPanel>

          <ComicPanel
            visual="Open space. Emma (Platform Lead) at her desk, laptop full of tabs."
            visualBg="bg-gradient-to-br from-violet-100 to-pink-100 dark:from-violet-900/30 dark:to-pink-900/30"
            delay={0.4}
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                Emma (thinking)
              </p>
              <p className="text-neutral-700 dark:text-neutral-200 text-lg italic">
                &ldquo;We invested a lot in streaming. So why does it still feel so slow to get anything done?&rdquo;
              </p>
            </div>
          </ComicPanel>
        </div>

        {/* Daniel's panel */}
        <ComicPanel
          visual="Daniel (Senior App Engineer) squinting at a Terminal and two dashboards."
          visualBg="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30"
          layout="horizontal"
          delay={0.6}
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold text-amber-600 dark:text-amber-400">
              Daniel
            </p>
            <p className="text-neutral-700 dark:text-neutral-200 text-lg">
              &ldquo;I can build a new service in a day. Then I lose a week just figuring out what Kafka is actually doing.&rdquo;
            </p>
          </div>
        </ComicPanel>

        {/* Conclusion narration */}
        <AnimatedSection delay={0.8} className="mt-16 text-center">
          <Narration variant="conclusion" className="max-w-2xl mx-auto text-center border-l-0 pl-0">
            They had the data. They did not yet have the journey.
          </Narration>
        </AnimatedSection>

        {/* Scroll indicator */}
        <AnimatedSection delay={1} className="mt-20 text-center">
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
