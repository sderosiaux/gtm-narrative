'use client';

import { StepHeader, ComicPanel, Narration, AnimatedSection, Panel } from '@/components/ui';

const STEP_COLOR = '#10b981'; // Green - Clarity

export function Step2Section() {
  return (
    <section className="py-32 px-6 bg-neutral-50 dark:bg-neutral-950">
      <div className="max-w-6xl mx-auto">
        <StepHeader
          stepNumber={2}
          title="Create Central Clarity"
          subtitle="Agreement before more speed."
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
            visual="Cross-team review meeting. Screens show three topics: customer_events, customer-update, cust_evt"
            visualBg="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20"
            layout="horizontal"
            delay={0.1}
          >
            <div className="space-y-4">
              <div className="space-y-3">
                <p className="text-sm font-semibold text-blue-600">Team A Lead</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;We send customer profile updates here.&rdquo;
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-orange-600">Team B Lead</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;We send profile changes here, too, for our product.&rdquo;
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-sm font-semibold text-teal-600">Team C Lead</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;We send KYC updates into this one.&rdquo;
                </p>
              </div>
            </div>
          </ComicPanel>

          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <ComicPanel
              visual="Data Analyst on the call, confused expression"
              visualBg="bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20"
              delay={0.2}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-amber-600">Data Analyst</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;If I want &lsquo;the customer profile&rsquo;, which topic is the source of truth?&rdquo;
                </p>
              </div>
            </ComicPanel>

            <ComicPanel
              visual="Emma glances at Daniel, concerned"
              visualBg="bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20"
              delay={0.3}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-purple-600">Emma (thinking)</p>
                <p className="text-neutral-700 dark:text-neutral-200 italic">
                  &ldquo;We are not short on events. We are short on shared meaning.&rdquo;
                </p>
              </div>
            </ComicPanel>
          </div>
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

          <div className="grid lg:grid-cols-3 gap-6">
            <ComicPanel
              visual="Incident report on screen. A field meaning changed in a topic, breaking downstream."
              visualBg="bg-gradient-to-br from-red-50 to-pink-100 dark:from-red-900/20 dark:to-pink-900/20"
              delay={0.1}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-red-600">Security Lead</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;Who owns this topic?&rdquo;
                </p>
              </div>
            </ComicPanel>

            <ComicPanel
              visual="Silence in the room. People looking at each other."
              visualBg="bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900/20 dark:to-slate-900/20"
              delay={0.2}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-neutral-600">Team Lead</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;We created it two years ago. The people who built it moved teams.&rdquo;
                </p>
              </div>
            </ComicPanel>

            <ComicPanel
              visual="Emma flipping through a wiki with outdated notes"
              visualBg="bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20"
              delay={0.3}
            >
              <div className="space-y-3">
                <p className="text-sm font-semibold text-purple-600">Emma</p>
                <p className="text-neutral-700 dark:text-neutral-200">
                  &ldquo;This is no longer a tech problem. This is an ownership problem.&rdquo;
                </p>
              </div>
            </ComicPanel>
          </div>
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
            visual="Whiteboard with four clusters: On-prem, Cloud, Europe, US. Each with different naming conventions."
            visualBg="bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20"
            delay={0.1}
          >
            <div className="space-y-4">
              <p className="text-sm font-semibold text-purple-600">Emma</p>
              <p className="text-neutral-700 dark:text-neutral-200">
                &ldquo;Here we call it <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded text-sm">cust_events</code>. There it is <code className="bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded text-sm">customer-topic</code>. Over here we use service names. This is how things rot slowly.&rdquo;
              </p>
            </div>
          </ComicPanel>

          <AnimatedSection delay={0.2} className="mt-8">
            <Panel variant="dark" size="lg">
              <div className="text-center">
                <p className="text-sm font-semibold text-purple-400 mb-2">Emma</p>
                <p className="text-lg text-neutral-200">
                  &ldquo;If we do not create central clarity now, decentralization later will just expand chaos.&rdquo;
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
                &ldquo;We need data domains that match the bank. Each domain needs clear ownership. Streams should live inside these domains, not float in the void.&rdquo;
              </p>
              <p className="text-lg text-neutral-700 dark:text-neutral-200">
                &ldquo;And we need a catalog where any engineer or analyst can see: what is this stream, who owns it, what does it represent, who can use it.&rdquo;
              </p>
            </div>
          </Panel>
        </AnimatedSection>

        <Narration variant="conclusion" className="mb-20 max-w-3xl mx-auto text-center border-l-0 pl-0">
          The problem was not that teams moved fast. The problem was that no one had a shared map.
        </Narration>

        {/* Capabilities list */}
        <AnimatedSection className="mb-16">
          <div className="bg-white dark:bg-neutral-900 rounded-3xl p-8 md:p-12 border border-neutral-200 dark:border-neutral-800 shadow-lg">
            <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
              Capabilities that create central clarity
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Emma writes a second list:
            </p>
            <ul className="space-y-4">
              {[
                'One control plane that spans clusters',
                'Data domains that mirror the business',
                'Ownership attached to each topic, connector, schema',
                'Shared naming and structure rules',
                'Central audits and patterns',
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
              She labels this page: Step 2 - Central Clarity
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
            visual="Conduktor view with domains and ownership badges"
            visualBg="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30"
            delay={0.1}
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold text-amber-600">Data Analyst</p>
              <p className="text-neutral-700 dark:text-neutral-200">
                &ldquo;I can finally search for &lsquo;Customer Profile&rsquo; and see the product streams that are actually certified.&rdquo;
              </p>
            </div>
          </ComicPanel>

          <ComicPanel
            visual="Emma in a call, relaxed posture"
            visualBg="bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900/30 dark:to-purple-900/30"
            delay={0.2}
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold text-purple-600">Emma</p>
              <p className="text-neutral-700 dark:text-neutral-200">
                &ldquo;Every stream lives inside a domain that owns it. You know who to talk to. You know what it means.&rdquo;
              </p>
            </div>
          </ComicPanel>

          <ComicPanel
            visual="Daniel planning a new feature, smiling"
            visualBg="bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30"
            delay={0.3}
          >
            <div className="space-y-3">
              <p className="text-sm font-semibold text-amber-600">Daniel (thinking)</p>
              <p className="text-neutral-700 dark:text-neutral-200 italic">
                &ldquo;I can see existing streams before creating a new one. So I reuse instead of duplicating by default.&rdquo;
              </p>
            </div>
          </ComicPanel>
        </div>

        <Narration variant="conclusion" className="max-w-3xl mx-auto text-center border-l-0 pl-0">
          Clarity did not slow anyone down. It removed friction that had been present for years.
        </Narration>
      </div>
    </section>
  );
}
