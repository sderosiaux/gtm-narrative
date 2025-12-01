'use client';

import { AppImage } from '@/components/ui/AppImage';
import { AnimatedSection } from '@/components/ui';

export function ContextSection() {
  return (
    <section id="context" className="py-32 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-8">
          <span className="text-sm font-semibold text-neutral-500 tracking-wider uppercase mb-4 block">
            The Context
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-6">
            Northbridge Bank&apos;s Streaming Ecosystem
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            A large bank that invested heavily in Kafka, microservices, and cloud.
            On paper, it looks modern. In practice, it still feels harder than it should be.
          </p>
        </AnimatedSection>

        {/* The Stakes Image */}
        <AnimatedSection className="mb-16">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-800">
            <div className="relative aspect-[16/10] w-full bg-white dark:bg-neutral-900">
              <AppImage
                src="/0-situation.jpg"
                alt="The stakes at Northbridge Bank - leadership pressure and team challenges"
                fill
                className="object-contain"
                sizes="(max-width: 1200px) 100vw, 1200px"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* The World - Infrastructure Overview */}
        <AnimatedSection className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Kafka Footprints */}
            <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-neutral-800 dark:bg-neutral-700 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                  4 Kafka Footprints
                </h3>
              </div>
              <ul className="space-y-3">
                {[
                  { name: 'On-prem cluster', desc: 'Main data center' },
                  { name: 'Cloud managed Kafka', desc: 'New projects' },
                  { name: 'Cards & Payments cluster', desc: 'Critical transactions' },
                  { name: 'Innovation cluster', desc: 'Experiments' },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-neutral-400 mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-neutral-800 dark:text-neutral-200">{item.name}</span>
                      <span className="text-neutral-500 dark:text-neutral-400"> — {item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Teams */}
            <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-neutral-800 dark:bg-neutral-700 flex items-center justify-center text-white">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                  Dozens of Teams
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  'Cards & Payments',
                  'Retail Banking',
                  'Wealth Management',
                  'Risk & Fraud',
                  'Data & Analytics',
                  'AI / ML Lab',
                ].map((team, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 rounded-full text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    {team}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Critical Path */}
        <AnimatedSection className="mb-20">
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 border border-neutral-200 dark:border-neutral-800 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">
                Kafka is in the critical path for
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { icon: '💳', label: 'Card authorizations' },
                { icon: '🛡️', label: 'Fraud checks' },
                { icon: '🏧', label: 'ATM events' },
                { icon: '📱', label: 'Mobile app activity' },
                { icon: '👤', label: 'Customer profiles' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="text-center p-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl"
                >
                  <span className="text-2xl mb-2 block">{item.icon}</span>
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
