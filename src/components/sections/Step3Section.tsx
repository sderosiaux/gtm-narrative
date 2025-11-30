'use client';

import { StepHeader, ComicPanel, Narration, AnimatedSection, Panel } from '@/components/ui';

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

          <div className="grid md:grid-cols-2 gap-6">
            <ComicPanel
              visual="Emma's JIRA board: dozens of tickets labeled Create topic, Update ACL, Add connector, Change retention"
              visualBg="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20"
              delay={0.1}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-amber-600">Daniel</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;This is not a board. This is a wall of cries for help.&rdquo;
                </p>
              </div>
            </ComicPanel>

            <ComicPanel
              visual="Emma scrolling through similar tickets"
              visualBg="bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20"
              delay={0.2}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-purple-600">Emma</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;They all want similar things: new topics, access, small changes. None of this should require custom work every time.&rdquo;
                </p>
              </div>
            </ComicPanel>
          </div>

          <AnimatedSection delay={0.3} className="mt-6">
            <div className="bg-white dark:bg-neutral-900 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-md">
              <div className="flex items-start gap-4">
                <div className="bg-red-100 dark:bg-red-900/30 rounded-lg p-3 text-sm flex-shrink-0">
                  <span className="text-red-600 dark:text-red-400 font-medium">Slack ping</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-500 mb-1">Team Lead</p>
                  <p className="text-neutral-700 dark:text-neutral-200">
                    &ldquo;Hey, any ETA on our topic request? It is blocking our release.&rdquo;
                  </p>
                  <p className="text-sm font-semibold text-purple-600 mt-4 italic">
                    Emma (thinking): &ldquo;We cannot be the bottleneck forever.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
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

          <div className="grid lg:grid-cols-3 gap-6">
            <ComicPanel
              visual="Production incident review, muted call atmosphere"
              visualBg="bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20"
              delay={0.1}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-neutral-600">Engineer</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;We just changed the schema on the fly. It worked in dev.&rdquo;
                </p>
              </div>
            </ComicPanel>

            <ComicPanel
              visual="Dashboard chart nose-diving, red alerts"
              visualBg="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900/20 dark:to-slate-900/20"
              delay={0.2}
            >
              <div className="space-y-3">
                <Narration>
                  The system reacted exactly as configured. The organization did not.
                </Narration>
                <p className="text-sm font-semibold text-amber-600 mt-2">Daniel</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;If every team invents its own way to do changes, we will never catch up.&rdquo;
                </p>
              </div>
            </ComicPanel>

            <ComicPanel
              visual="Security Lead raising an eyebrow"
              visualBg="bg-gradient-to-br from-red-50 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20"
              delay={0.3}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-red-600">Security Lead</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;We do not want to slow you down. Yet we need predictability. We need to know how changes happen.&rdquo;
                </p>
              </div>
            </ComicPanel>
          </div>
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
            visual="Emma and Daniel in a one-on-one meeting"
            visualBg="bg-gradient-to-br from-violet-50 to-amber-50 dark:from-violet-900/20 dark:to-amber-900/20"
            layout="horizontal"
            delay={0.1}
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-amber-600">Daniel</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;Developers do not want freedom for fun. They just want to stop waiting.&rdquo;
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-purple-600">Emma</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;And platform does not want control for ego. We just know what happens when there are no rules.&rdquo;
                </p>
              </div>
            </div>
          </ComicPanel>

          <AnimatedSection delay={0.2} className="mt-8">
            <Panel variant="dark" size="lg">
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-sm font-semibold text-purple-400 mb-2">Emma</p>
                <p className="text-lg text-neutral-200">
                  &ldquo;We need a third path. Teams move on their own, inside guardrails enforced by the platform.&rdquo;
                </p>
              </div>
            </Panel>
          </AnimatedSection>
        </div>

        {/* What Emma starts to see */}
        <AnimatedSection className="mb-16">
          <Panel variant="accent" size="lg">
            <div className="text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
                What Emma Starts to See
              </h3>
              <p className="text-lg text-neutral-700 dark:text-neutral-200 mb-4">
                &ldquo;Teams should request new topics or access through one place. Policies and patterns should attach automatically.&rdquo;
              </p>
              <p className="text-lg text-neutral-700 dark:text-neutral-200">
                &ldquo;Developers should feel they have power. At the same time the system keeps them inside safe boundaries without constant meetings.&rdquo;
              </p>
            </div>
          </Panel>
        </AnimatedSection>

        <Narration variant="conclusion" className="mb-20 max-w-3xl mx-auto text-center border-l-0 pl-0">
          Decentralization was not the enemy. Unstructured decentralization was.
        </Narration>

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

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <ComicPanel
            visual="Developer from Cards team using Conduktor self-serve to create topic. UI shows policies applied."
            visualBg="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30"
            delay={0.1}
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold text-blue-600">Developer</p>
              <p className="text-neutral-700 dark:text-neutral-200">
                &ldquo;I pick my domain, purpose, expected data. The rest is handled. Retention, naming, encryption, all come from the template.&rdquo;
              </p>
            </div>
          </ComicPanel>

          <ComicPanel
            visual="Emma looking at dashboard of recent changes, all controlled flows"
            visualBg="bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30"
            delay={0.2}
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold text-purple-600">Emma</p>
              <p className="text-neutral-700 dark:text-neutral-200">
                &ldquo;This is the first week I have not spent nights chasing surprise changes.&rdquo;
              </p>
            </div>
          </ComicPanel>

          <ComicPanel
            visual="Daniel in a sprint review, confident"
            visualBg="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30"
            delay={0.3}
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold text-amber-600">Daniel</p>
              <p className="text-neutral-700 dark:text-neutral-200">
                &ldquo;We cut lead time for Kafka changes from weeks to days. Without adding more people. We just stopped doing handcrafted work every time.&rdquo;
              </p>
            </div>
          </ComicPanel>
        </div>

        <Narration variant="conclusion" className="max-w-3xl mx-auto text-center border-l-0 pl-0">
          Autonomy and safety finally shared the same space.
        </Narration>
      </div>
    </section>
  );
}
