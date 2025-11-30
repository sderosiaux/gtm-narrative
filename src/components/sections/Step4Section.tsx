'use client';

import Image from 'next/image';
import { StepHeader, ComicPanel, AnimatedSection } from '@/components/ui';

const STEP_COLOR = '#8b5cf6'; // Purple - Data Products

export function Step4Section() {
  return (
    <section className="py-32 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <StepHeader
          stepNumber={4}
          title="Turn Streams into Trusted Data Products"
          subtitle="What everyone wanted from streaming in the first place."
          color={STEP_COLOR}
        />

        {/* Challenge 1: Which stream is the real customer */}
        <div className="mb-20">
          <AnimatedSection className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Challenge 1
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              &ldquo;Which stream is the real customer?&rdquo;
            </p>
          </AnimatedSection>

          <ComicPanel
            imageSrc="/5-step4-ch1.jpg"
            imageAlt="AI team meeting with Emma and Daniel discussing customer streams"
            layout="visual-only"
            delay={0.1}
          />
        </div>

        {/* Challenge 2: Silent schema change */}
        <div className="mb-20">
          <AnimatedSection className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Challenge 2
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              &ldquo;Silent schema change, loud incident&rdquo;
            </p>
          </AnimatedSection>

          <ComicPanel
            imageSrc="/5-step4-ch2.jpg"
            imageAlt="Dashboard showing failed pipeline, schema comparison on screen"
            layout="visual-only"
            delay={0.1}
          />
        </div>

        {/* Challenge 3: Sensitive data in wrong place */}
        <div className="mb-20">
          <AnimatedSection className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Challenge 3
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              &ldquo;Sensitive data in the wrong place&rdquo;
            </p>
          </AnimatedSection>

          <ComicPanel
            imageSrc="/5-step4-ch3.jpg"
            imageAlt="Security team review meeting examining data flows"
            layout="visual-only"
            delay={0.1}
          />
        </div>

        {/* What Emma starts to see */}
        <AnimatedSection className="mb-16">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800">
            <div className="relative aspect-[16/10] w-full bg-white dark:bg-neutral-900">
              <Image
                src="/5-step4-conclu.jpg"
                alt="Emma writing Data Contracts and data product concepts"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Capabilities list */}
        <AnimatedSection className="mb-16">
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 md:p-12 border border-neutral-200 dark:border-neutral-800 shadow-lg">
            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
              Capabilities that turn streams into products
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Emma now writes her last list:
            </p>
            <ul className="space-y-4">
              {[
                'Data contracts attached to streams',
                'Enforcement at write time',
                'PII tagging, masking, encryption rules that travel with the data',
                'A semantic firewall that validates events in motion',
                'Product level health: freshness, quality, SLAs',
                'Logical grouping of topics as one "Customer Product", "Card Product", etc',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: STEP_COLOR }}
                  >
                    {index + 1}
                  </span>
                  <span className="text-neutral-700 dark:text-neutral-200">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm font-semibold" style={{ color: STEP_COLOR }}>
              She writes at the top: Step 4 - Streaming Data Products
            </p>
          </div>
        </AnimatedSection>

        {/* Outcomes */}
        <AnimatedSection className="mb-8">
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 text-center mb-8">
            Outcomes
          </h3>
        </AnimatedSection>

        <AnimatedSection className="mb-12">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800">
            <div className="relative aspect-[16/10] w-full bg-white dark:bg-neutral-900">
              <Image
                src="/5-step4-outcome.jpg"
                alt="Team celebrating with Conduktor showing Customer 360 Streaming Product"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
