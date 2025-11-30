'use client';

import { StepHeader, ComicPanel, Narration, AnimatedSection, Panel } from '@/components/ui';

const STEP_COLOR = '#8b5cf6'; // Purple - Data Products

export function Step4Section() {
  return (
    <section className="py-32 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <StepHeader
          stepNumber={4}
          title="Turn Streams into Trusted Data Products"
          subtitle="What everyone wanted from streaming in the first place."
          color={STEP_COLOR}
        />

        {/* Challenge 1: Which stream is the real customer */}
        <div className="mb-20">
          <AnimatedSection className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Challenge 1
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              &ldquo;Which stream is the real customer?&rdquo;
            </p>
          </AnimatedSection>

          <ComicPanel
            visual="AI team in meeting room with Emma and Daniel. Laptop showing topic list."
            visualBg="bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20"
            layout="horizontal"
            delay={0.1}
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm font-semibold text-blue-600">AI Lead</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;We are building a real time customer scoring model. We need the main customer stream.&rdquo;
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-amber-600">Daniel</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;We have <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded text-sm">customer_events</code>, <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded text-sm">customer_profile</code>, <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded text-sm">cust_state</code>, some KYC topics... You can pick the one that fits best.&rdquo;
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-semibold text-blue-600">AI Lead (frowning)</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;Which one is correct? Which one has the right fields, the right semantics, the right freshness?&rdquo;
                </p>
              </div>
            </div>
          </ComicPanel>

          <Narration className="mt-8 text-center max-w-2xl mx-auto" variant="emphasis">
            Northbridge no longer lacked streams. Now they lacked trusted ones.
          </Narration>
        </div>

        {/* Challenge 2: Silent schema change */}
        <div className="mb-20">
          <AnimatedSection className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Challenge 2
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              &ldquo;Silent schema change, loud incident&rdquo;
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-6">
            <ComicPanel
              visual="Dashboard in red. Reporting pipeline failed alert."
              visualBg="bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20"
              delay={0.1}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-green-600">Data Engineer</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;The job crashed last night. It suddenly got events with a new field and a missing old one.&rdquo;
                </p>
              </div>
            </ComicPanel>

            <ComicPanel
              visual="Emma on a call, investigating"
              visualBg="bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20"
              delay={0.2}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-purple-600">Emma</p>
                <p className="text-neutral-700 dark:text-neutral-200">&ldquo;Who changed the schema?&rdquo;</p>
                <p className="text-sm font-semibold text-neutral-600 mt-3">Team Dev</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;We added a field for a new feature. It worked in our tests.&rdquo;
                </p>
              </div>
            </ComicPanel>

            <ComicPanel
              visual="Daniel showing old schema vs new on screen"
              visualBg="bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20"
              delay={0.3}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-amber-600">Daniel</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;There was no contract preventing this type of change. So the system accepted it. The downstream job did not.&rdquo;
                </p>
              </div>
            </ComicPanel>
          </div>
        </div>

        {/* Challenge 3: Sensitive data in wrong place */}
        <div className="mb-20">
          <AnimatedSection className="mb-8">
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
              Challenge 3
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400">
              &ldquo;Sensitive data in the wrong place&rdquo;
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            <ComicPanel
              visual="Security team review meeting"
              visualBg="bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20"
              delay={0.1}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-red-600">Security Analyst</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;We saw partial card numbers in a topic used by a third party system. It is masked, yet that still raises flags.&rdquo;
                </p>
              </div>
            </ComicPanel>

            <ComicPanel
              visual="Emma zooming in on stream path diagram"
              visualBg="bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20"
              delay={0.2}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-purple-600">Emma</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;We never tagged this field as sensitive at the stream level. It slipped through because no one had a holistic view of where that field flows.&rdquo;
                </p>
              </div>
            </ComicPanel>
          </div>

          <AnimatedSection delay={0.3} className="mt-6">
            <Panel variant="dark" size="lg">
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-sm font-semibold text-red-400 mb-2">Security Lead</p>
                <p className="text-lg text-neutral-200">
                  &ldquo;We want teams to build with data. We just need guarantees that certain fields stay under strict rules anywhere they flow.&rdquo;
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
              <div className="space-y-4 text-lg text-neutral-700 dark:text-neutral-200">
                <p>
                  &ldquo;Events need rules. Structure, meaning, and allowed changes must be explicit. That is how we stop breaking people downstream.&rdquo;
                </p>
                <p>
                  &ldquo;If we know which fields are sensitive and which rules apply, the platform can enforce it in motion instead of hoping each app remembers.&rdquo;
                </p>
                <p className="font-semibold">
                  &ldquo;A &lsquo;Customer Stream&rsquo; should be a product with a contract, owner, quality metrics. Not just a topic name people hope is correct.&rdquo;
                </p>
              </div>
            </div>
          </Panel>
        </AnimatedSection>

        {/* Capabilities list */}
        <AnimatedSection className="mb-16">
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 md:p-12 border border-neutral-200 dark:border-neutral-800 shadow-lg">
            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
              Capabilities that turn streams into products
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Emma now writes her last list:
            </p>
            <ul className="space-y-4">
              {[
                'Data contracts attached to streams',
                'Enforcement at write time',
                'PII tagging, masking, encryption rules that travel with the data',
                'A semantic firewall that validates events in motion',
                'Product level health: freshness, quality, SLAs',
                'Logical grouping of topics as one "Customer Product", "Card Product", etc',
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
              She writes at the top: Step 4 - Streaming Data Products
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
            visual="Conduktor view showing Customer 360 Streaming Product with domains, contracts, owners, SLAs"
            visualBg="bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30"
            delay={0.1}
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold text-blue-600">AI Lead</p>
              <p className="text-neutral-700 dark:text-neutral-200">
                &ldquo;This is what we needed. One product. One meaning. Known quality. We can plug this straight into the model.&rdquo;
              </p>
            </div>
          </ComicPanel>

          <ComicPanel
            visual="Data Engineer looking at quality dashboard"
            visualBg="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30"
            delay={0.2}
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold text-green-600">Data Engineer</p>
              <p className="text-neutral-700 dark:text-neutral-200">
                &ldquo;If someone pushes an invalid payload or unsafe field, it gets caught at the edge. We see issues at write time, not three layers downstream.&rdquo;
              </p>
            </div>
          </ComicPanel>

          <ComicPanel
            visual="Emma and Daniel small celebration with coffee cups"
            visualBg="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30"
            delay={0.3}
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold text-purple-600">Emma</p>
              <p className="text-neutral-700 dark:text-neutral-200">
                &ldquo;We did not just fix incidents. We raised the bar for what data streaming can do for the bank.&rdquo;
              </p>
            </div>
          </ComicPanel>
        </div>

        <Narration variant="conclusion" className="max-w-3xl mx-auto text-center border-l-0 pl-0">
          Streams became products. Products created trust. Trust enabled real progress on analytics and AI.
        </Narration>
      </div>
    </section>
  );
}
