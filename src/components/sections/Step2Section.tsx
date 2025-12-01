'use client';

import { AppImage } from '@/components/ui/AppImage';
import { StepHeader, ComicPanel, AnimatedSection } from '@/components/ui';

const STEP_COLOR = '#10b981'; // Green - Clarity

export function Step2Section() {
  return (
    <section className="py-32 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <StepHeader
          stepNumber={2}
          title="Define the Rules"
          subtitle="Platform team takes control."
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
                'When a topic misbehaves, can they immediately see who owns it?',
                'Do they have repeated topics with similar names and unclear meanings?',
                'Do different clusters follow different naming or access rules?',
                'How much time do platform or data teams spend clarifying basic questions about streams and ownership?',
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
              Emma writes a second list:
            </p>
            <ul className="space-y-4">
              {[
                'One control plane to rule all clusters',
                'Data domains that map to your org chart',
                'Every resource gets an owner — no more orphans',
                'Naming conventions enforced, not suggested',
                'Full audit trail of who did what, when',
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
              She labels this page: Step 2 - Define the Rules
            </p>
          </div>
        </AnimatedSection>

        {/* Outcomes */}
        <AnimatedSection className="mb-12">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800">
            <div className="relative aspect-[16/10] w-full bg-white dark:bg-neutral-900">
              <AppImage
                src="/3-step2-outcome.jpg"
                alt="Team viewing Conduktor with domains and ownership badges"
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
                'Platform team finally has a source of truth',
                'No more "who owns this topic?" questions',
                'Audit-ready: every change is tracked',
                'New clusters follow the same rules automatically',
                'Foundation is set — now teams can safely self-serve',
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
