'use client';

import { AnimatedSection, CharacterCard } from '@/components/ui';

const characters = [
  {
    name: 'Emma',
    role: 'Platform Lead',
    description: 'Leads the team that runs Kafka and the internal data streaming platform. Sees every incident, every ticket, and every "Kafka is acting weird" Slack thread.',
    color: '#8b5cf6', // primary purple
    imageSrc: '/0-emma.jpg',
  },
  {
    name: 'Daniel',
    role: 'Senior Application Engineer',
    description: 'Builds customer-facing services that rely on Kafka. Loves building features. Does not love spending nights jumping between dashboards to find out why a consumer stopped behaving.',
    color: '#f59e0b', // amber
    imageSrc: '/0-daniel.jpg',
  },
];

const supportingCast = [
  {
    name: 'Sonia',
    role: 'Security Lead',
    description: 'Raises flags when sensitive data appears in the wrong place. Wants strong guarantees without blocking all progress.',
    color: '#ef4444', // red
    imageSrc: '/0-sonia.jpg',
  },
  {
    name: 'Miguel',
    role: 'Head of Data & Analytics',
    description: 'Leads data warehouse, BI, and lakehouse projects. Wants trusted streams he can plug into data models and dashboards.',
    color: '#10b981', // green
    imageSrc: '/0-miguel.jpg',
  },
  {
    name: 'Leah',
    role: 'AI Lead',
    description: 'Runs the AI/ML group. Wants real-time, high quality data for scoring, recommendations, and fraud models. Tired of "we can\'t trust this stream yet".',
    color: '#3b82f6', // blue
    imageSrc: '/0-leah.jpg',
  },
];

export function CharactersSection() {
  return (
    <section className="py-32 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 tracking-wider uppercase mb-4 block">
            Meet the Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            The People Behind the Streams
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Smart people in a messy system, trying to make streaming work for everyone.
          </p>
        </AnimatedSection>

        {/* Main characters */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {characters.map((character, index) => (
            <CharacterCard
              key={character.name}
              {...character}
              delay={index * 0.2}
            />
          ))}
        </div>

        {/* Supporting cast */}
        <AnimatedSection className="text-center mb-8">
          <h3 className="text-2xl font-semibold text-neutral-700 dark:text-neutral-300">
            Supporting Cast
          </h3>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {supportingCast.map((character, index) => (
            <CharacterCard
              key={character.name}
              {...character}
              delay={0.4 + index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
