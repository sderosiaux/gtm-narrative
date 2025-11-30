'use client';

import Image from 'next/image';
import { StepHeader, ComicPanel, AnimatedSection } from '@/components/ui';

const STEP_COLOR = '#10b981'; // Green - Clarity

export function Step2Section() {
  return (
    <section className="py-32 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <StepHeader
          stepNumber={2}
          title="Create Central Clarity"
          subtitle="Agreement before more speed."
          color={STEP_COLOR}
        />

        {/* Challenge 1: Three customer topics */}
        <div className="mb-20">
          <AnimatedSection className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Challenge 1
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              &ldquo;Three customer topics, three different stories&rdquo;
            </p>
          </AnimatedSection>

          <ComicPanel
            imageSrc="/3-step2-ch1.jpg"
            imageAlt="Cross-team meeting with screens showing customer_events, customer-update, cust_evt"
            layout="visual-only"
            delay={0.1}
          />
        </div>

        {/* Challenge 2: Who owns this thing */}
        <div className="mb-20">
          <AnimatedSection className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Challenge 2
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              &ldquo;Who owns this thing?&rdquo;
            </p>
          </AnimatedSection>

          <ComicPanel
            imageSrc="/3-step2-ch2.jpg"
            imageAlt="Incident report meeting with confused team members"
            layout="visual-only"
            delay={0.1}
          />
        </div>

        {/* Challenge 3: One bank, many rules */}
        <div className="mb-20">
          <AnimatedSection className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Challenge 3
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              &ldquo;One bank, many rules&rdquo;
            </p>
          </AnimatedSection>

          <ComicPanel
            imageSrc="/3-step2-ch3.jpg"
            imageAlt="Whiteboard with four clusters showing different naming conventions"
            layout="visual-only"
            delay={0.1}
          />
        </div>

        {/* What Emma starts to see */}
        <AnimatedSection className="mb-16">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800">
            <div className="relative aspect-[16/10] w-full bg-white dark:bg-neutral-900">
              <Image
                src="/3-step2-conclu.jpg"
                alt="Emma drawing data domains on whiteboard"
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
              Capabilities that create central clarity
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Emma writes a second list:
            </p>
            <ul className="space-y-4">
              {[
                'One control plane that spans clusters',
                'Data domains that mirror the business',
                'Ownership attached to each topic, connector, schema',
                'Shared naming and structure rules',
                'Central audits and patterns',
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
              She labels this page: Step 2 - Central Clarity
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
                src="/3-step2-outcome.jpg"
                alt="Team viewing Conduktor with domains and ownership badges"
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
