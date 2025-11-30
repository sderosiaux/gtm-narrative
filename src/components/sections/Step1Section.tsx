'use client';

import { StepHeader, ComicPanel, Narration, AnimatedSection, Panel } from '@/components/ui';

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

          <div className="grid lg:grid-cols-3 gap-6">
            <ComicPanel
              visual="Daniel with three monitors. On each: Grafana, a homegrown dashboard, a Kafka CLI window, Slack."
              visualBg="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20"
              delay={0.1}
            >
              <Narration>
                Monday morning. A customer-facing app started lagging. No one knew why.
              </Narration>
            </ComicPanel>

            <ComicPanel
              visual="Close-up of Daniel's frustrated expression"
              visualBg="bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20"
              delay={0.2}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-amber-600">Daniel</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;Consumer looks fine here. Lag looks fine there. Connect says it is healthy. None of this matches what the product team sees.&rdquo;
                </p>
              </div>
            </ComicPanel>

            <ComicPanel
              visual="Emma pulls her chair next to Daniel"
              visualBg="bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20"
              delay={0.3}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-purple-600">Emma</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;Show me everything you check when something like this happens.&rdquo;
                </p>
                <p className="text-sm font-semibold text-amber-600 mt-4">Daniel</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;Ok, brace yourself.&rdquo;
                </p>
              </div>
            </ComicPanel>
          </div>

          <Narration className="mt-8 text-center max-w-2xl mx-auto" variant="emphasis">
            Every incident felt like a tour of every internal tool they ever built.
          </Narration>
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

          <div className="grid md:grid-cols-2 gap-6">
            <ComicPanel
              visual="New engineer, Priya, joins a stand-up"
              visualBg="bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20"
              delay={0.1}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-emerald-600">Priya (new engineer)</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;I need to add a new stream for ATM events. Where do I see how the existing streams behave?&rdquo;
                </p>
              </div>
            </ComicPanel>

            <ComicPanel
              visual="Daniel sharing his screen, overwhelmed expression"
              visualBg="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20"
              delay={0.2}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-amber-600">Daniel</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;So... we have this Grafana board, this internal tool, a custom script for topic inspection, and a separate UI for schema. You kind of learn by pain.&rdquo;
                </p>
              </div>
            </ComicPanel>
          </div>

          <Narration className="mt-8 text-center max-w-2xl mx-auto" variant="emphasis">
            Onboarding did not fail. It just took too long.
          </Narration>
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
            visual="Slack messages piling up. Emma gets tagged with two other Kafka gurus."
            visualBg="bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20"
            layout="horizontal"
            delay={0.1}
          >
            <div className="space-y-4">
              <div className="bg-neutral-100 dark:bg-neutral-800 rounded-lg p-3 text-sm">
                <span className="text-neutral-500">Slack from Product:</span>
                <p className="text-neutral-700 dark:text-neutral-200 mt-1">
                  &ldquo;Release moved again because of Kafka. What is going on?&rdquo;
                </p>
              </div>
              <p className="text-sm font-semibold text-purple-600">Emma (thinking)</p>
              <p className="text-neutral-700 dark:text-neutral-200 italic">
                &ldquo;We cannot be the helpdesk for every stream in this bank.&rdquo;
              </p>
            </div>
          </ComicPanel>

          <AnimatedSection delay={0.2} className="mt-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-md">
                <p className="text-sm font-semibold text-purple-600 mb-2">Emma</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;Right now, only three people can confidently answer what Kafka is doing. That is the real risk.&rdquo;
                </p>
              </div>
              <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-md">
                <p className="text-sm font-semibold text-amber-600 mb-2">Daniel</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;And any time we help, we are not building. We are just trying to guess what the system is doing.&rdquo;
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* What Emma starts to see */}
        <AnimatedSection className="mb-16">
          <Panel variant="accent" size="lg">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-4">
                What Emma Starts to See
              </h3>
              <div className="max-w-2xl mx-auto">
                <p className="text-sm font-semibold text-purple-600 mb-2">Emma</p>
                <p className="text-lg text-neutral-700 dark:text-neutral-200">
                  &ldquo;We do not miss data. We miss a single picture. A way for any engineer to say: this is what my streams are doing right now.&rdquo;
                </p>
              </div>
            </div>
          </Panel>
        </AnimatedSection>

        <Narration variant="conclusion" className="mb-20 max-w-3xl mx-auto text-center border-l-0 pl-0">
          The problem was not capacity. The problem was that no one could see the system clearly.
        </Narration>

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

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <ComicPanel
            visual="Conduktor Console on screen showing topics, consumers, lag, schemas, connectors"
            visualBg="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30"
            delay={0.1}
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold text-amber-600">Daniel</p>
              <p className="text-neutral-700 dark:text-neutral-200">
                &ldquo;I can finally see my stream end to end. Topic, consumer, connector, schema changes, all in one place. This feels like cheating.&rdquo;
              </p>
            </div>
          </ComicPanel>

          <ComicPanel
            visual="Priya and Emma looking at the same unified screen"
            visualBg="bg-gradient-to-br from-emerald-100 to-green-100 dark:from-emerald-900/30 dark:to-green-900/30"
            delay={0.2}
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold text-emerald-600">Priya</p>
              <p className="text-neutral-700 dark:text-neutral-200">
                &ldquo;So I do not need to learn five tools to debug my first app?&rdquo;
              </p>
              <p className="text-sm font-semibold text-purple-600 mt-4">Emma</p>
              <p className="text-neutral-700 dark:text-neutral-200">
                &ldquo;You can learn Kafka. Yet you do not have to reverse-engineer our system. That is a big difference.&rdquo;
              </p>
            </div>
          </ComicPanel>
        </div>

        <Narration variant="conclusion" className="max-w-3xl mx-auto text-center border-l-0 pl-0">
          Velocity did not come from more engineers. It came from helping everyone see what streams were actually doing.
        </Narration>
      </div>
    </section>
  );
}
