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
import { SideNav } from '@/components/ui';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <SideNav />
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
