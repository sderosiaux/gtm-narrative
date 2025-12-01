import {
  HeroSection,
  CharactersSection,
  ContextSection,
  Step1Section,
  Step2Section,
  Step3Section,
  Step4Section,
  OutcomeSection,
} from '@/components/sections';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection />
      <ContextSection />
      <CharactersSection />
      <Step1Section />
      <Step2Section />
      <Step3Section />
      <Step4Section />
      <OutcomeSection />
    </main>
  );
}
