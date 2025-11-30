'use client';

import Image from 'next/image';
import { AnimatedSection } from '@/components/ui';

const steps = [
  { number: 1, title: 'Velocity', color: '#3b82f6', description: 'See what streams do' },
  { number: 2, title: 'Clarity', color: '#10b981', description: 'Shared ownership & meaning' },
  { number: 3, title: 'Decentralization', color: '#f59e0b', description: 'Freedom inside guardrails' },
  { number: 4, title: 'Data Products', color: '#8b5cf6', description: 'Trusted, contract-backed streams' },
];

export function OutcomeSection() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-neutral-900 to-neutral-950">
      <div className="max-w-6xl mx-auto">
        {/* The Journey Overview */}
        <AnimatedSection className="text-center mb-20">
          <span className="text-sm font-semibold text-primary-400 tracking-wider uppercase mb-4 block">
            The Complete Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            From Scattered Streams to a Platform That Works
          </h2>
        </AnimatedSection>

        {/* Steps visualization */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <AnimatedSection key={step.number} delay={index * 0.1}>
              <div className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-neutral-400 text-sm">{step.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Final image */}
        <AnimatedSection className="mb-16">
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-neutral-700">
            <div className="relative aspect-[16/10] w-full bg-neutral-900">
              <Image
                src="/6-final-outcome.jpg"
                alt="Emma, Daniel, and the team together - calm and confident"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Final message */}
        <AnimatedSection className="text-center">
          <div className="max-w-2xl mx-auto">
            {/* Conduktor logo placeholder */}
            <div className="inline-flex items-center gap-3 bg-neutral-800 px-8 py-4 rounded-full border border-neutral-700">
              <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center text-white font-bold text-xl">
                C
              </div>
              <span className="text-white font-semibold text-xl">Conduktor</span>
            </div>
          </div>
        </AnimatedSection>

        {/* Scroll to top */}
        <AnimatedSection delay={0.5} className="mt-20 text-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <span>Back to top</span>
          </button>
        </AnimatedSection>
      </div>
    </section>
  );
}
