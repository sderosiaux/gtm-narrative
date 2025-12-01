'use client';

import { AppImage } from '@/components/ui/AppImage';
import { StepHeader, ComicPanel, AnimatedSection } from '@/components/ui';

const STEP_COLOR = '#f59e0b'; // Amber - Decentralization

export function Step3Section() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <StepHeader
          stepNumber={3}
          title="Let Teams Self-Serve"
          subtitle="Developers move fast, platform sleeps well."
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

        {/* Discovery Questions */}
        <AnimatedSection className="mb-20">
          <div className="bg-gradient-to-br from-red-950 to-neutral-950 rounded-3xl p-8 md:p-12 border border-red-900/50 shadow-lg shadow-red-950/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white animate-pulse">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-red-100">
                Uncover the hidden pain
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                'How many Kafka-related tickets hit the platform team each week?',
                'Can developers create new streams or access by themselves today? Under which conditions?',
                'Have they had production issues caused by ad hoc changes or "manual fixes"?',
                'Do they have any controlled path for changes, or does each team follow its own pattern?',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        {/* What Emma starts to see */}
        <AnimatedSection className="mb-8">
          <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
            What Emma starts to see
          </h3>
        </AnimatedSection>

        <AnimatedSection className="mb-16">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800">
            <div className="relative aspect-[16/10] w-full bg-white dark:bg-neutral-900">
              <AppImage
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
          <div className="bg-gradient-to-br from-emerald-950 to-neutral-950 rounded-3xl p-8 md:p-12 border border-emerald-800/50 shadow-lg shadow-emerald-950/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-emerald-100">
                The path forward
              </h3>
            </div>
            <p className="text-emerald-200/70 mb-6">
              Her notebook gets a third list:
            </p>
            <ul className="space-y-4">
              {[
                'Developers create topics in clicks, not tickets',
                'Policies apply automatically — no manual checks',
                'Low-risk actions = instant, high-risk = approval',
                'Teams manage their own schemas and contracts',
                'GitOps, Terraform, CLI — your choice, same rules',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm font-semibold text-emerald-400">
              She labels it: Step 3 - Let Teams Self-Serve
            </p>
          </div>
        </AnimatedSection>

        {/* Outcomes */}
        <AnimatedSection className="mb-12">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800">
            <div className="relative aspect-[16/10] w-full bg-white dark:bg-neutral-900">
              <AppImage
                src="/4-step3-outcome.jpg"
                alt="Developer using self-service portal with policies applied automatically"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Outcome benefits */}
        <AnimatedSection>
          <div className="bg-gradient-to-br from-sky-950 to-neutral-950 rounded-3xl p-8 md:p-12 border border-sky-800/50 shadow-lg shadow-sky-950/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-sky-100">
                Business impact
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                'From 2-week ticket to 2-minute self-serve',
                'Developers ship without waiting on platform team',
                '80% fewer Kafka-related tickets',
                'Platform team focuses on strategy, not requests',
                'Innovation speeds up, incidents stay down',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-neutral-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
