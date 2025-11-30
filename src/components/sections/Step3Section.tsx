'use client';

import Image from 'next/image';
import { StepHeader, ComicPanel, AnimatedSection } from '@/components/ui';

const STEP_COLOR = '#f59e0b'; // Amber - Decentralization

export function Step3Section() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <StepHeader
          stepNumber={3}
          title="Enable Safe Decentralization"
          subtitle="Freedom inside guardrails."
          color={STEP_COLOR}
        />

        {/* Challenge 1: The ticket avalanche */}
        <div className="mb-20">
          <AnimatedSection className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Challenge 1
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              &ldquo;The ticket avalanche&rdquo;
            </p>
          </AnimatedSection>

          <ComicPanel
            imageSrc="/4-step3-ch1.jpg"
            imageAlt="Emma's JIRA board full of Kafka-related tickets"
            layout="visual-only"
            delay={0.1}
          />
        </div>

        {/* Challenge 2: Shadow moves */}
        <div className="mb-20">
          <AnimatedSection className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Challenge 2
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              &ldquo;Shadow moves&rdquo;
            </p>
          </AnimatedSection>

          <ComicPanel
            imageSrc="/4-step3-ch2.jpg"
            imageAlt="Production incident review with dashboard showing issues"
            layout="visual-only"
            delay={0.1}
          />
        </div>

        {/* Challenge 3: Developers vs Platform */}
        <div className="mb-20">
          <AnimatedSection className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Challenge 3
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              &ldquo;Developers want control, platform wants sleep&rdquo;
            </p>
          </AnimatedSection>

          <ComicPanel
            imageSrc="/4-step3-ch3.jpg"
            imageAlt="Emma and Daniel discussing the balance between freedom and control"
            layout="visual-only"
            delay={0.1}
          />
        </div>

        {/* What Emma starts to see */}
        <AnimatedSection className="mb-16">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800">
            <div className="relative aspect-[16/10] w-full bg-white dark:bg-neutral-900">
              <Image
                src="/4-step3-conclu.jpg"
                alt="Emma designing self-service portal with guardrails"
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
              Capabilities that unlock safe decentralization
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Her notebook gets a third list:
            </p>
            <ul className="space-y-4">
              {[
                'Self-service for topics, ACLs, connectors, schemas',
                'Guardrails applied through policies',
                'Approval workflows where risk is high, automation where risk is low',
                'Per team access flows tied to identity systems',
                'Real time enforcement at a proxy layer',
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
              She labels it: Step 3 - Safe Decentralization
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
                src="/4-step3-outcome.jpg"
                alt="Developer using self-service portal with policies applied automatically"
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
