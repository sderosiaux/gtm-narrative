'use client';

import Image from 'next/image';
import { StepHeader, ComicPanel, Narration, AnimatedSection } from '@/components/ui';

const STEP_COLOR = '#3b82f6'; // Blue - Velocity

export function Step1Section() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <StepHeader
          stepNumber={1}
          title="Unlock Streaming Velocity"
          subtitle="Seeing what streams do, so teams can move with confidence."
          color={STEP_COLOR}
        />

        {/* Challenge 1: Five tools open */}
        <div className="mb-20">
          <AnimatedSection className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Challenge 1
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              &ldquo;Five tools open and still no answer&rdquo;
            </p>
          </AnimatedSection>

          <ComicPanel
            imageSrc="/2-step1-ch1.jpg"
            imageAlt="Daniel with multiple monitors showing Grafana, dashboards, Kafka CLI, and Slack"
            layout="visual-only"
            delay={0.1}
          />
        </div>

        {/* Challenge 2: New engineer */}
        <div className="mb-20">
          <AnimatedSection className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Challenge 2
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              &ldquo;New engineer, same maze&rdquo;
            </p>
          </AnimatedSection>

          <ComicPanel
            imageSrc="/2-step1-ch2.jpg"
            imageAlt="New engineer Priya looking overwhelmed at multiple tools"
            layout="visual-only"
            delay={0.1}
          />
        </div>

        {/* Challenge 3: Only three people know */}
        <div className="mb-20">
          <AnimatedSection className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Challenge 3
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              &ldquo;Only three people really know&rdquo;
            </p>
          </AnimatedSection>

          <ComicPanel
            imageSrc="/2-step1-ch3.jpg"
            imageAlt="Slack messages piling up, Emma gets tagged constantly"
            layout="visual-only"
            delay={0.1}
          />
        </div>

        {/* What Emma starts to see */}
        <AnimatedSection className="mb-16">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800">
            <div className="relative aspect-[16/10] w-full bg-white dark:bg-neutral-900">
              <Image
                src="/2-step1-conclu.jpg"
                alt="Emma at whiteboard drawing the vision for unified observability"
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
              Capabilities that change the picture
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Emma writes a small list in her notebook:
            </p>
            <ul className="space-y-4">
              {[
                'One place to see topics, consumers, connectors, schemas, security',
                'A predictable view of local, dev, staging, prod',
                'Tools that make debugging less of a black art',
                'Alerts that point to what matters',
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
              She labels the page: Step 1 - Streaming Velocity
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
                src="/2-step1-outcome.jpg"
                alt="Daniel and Priya looking at unified Conduktor Console"
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
