import { Hero } from "@/components/sections/Hero";
import { ImpactStrip } from "@/components/sections/ImpactStrip";
import { RecentGrants } from "@/components/sections/RecentGrants";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { TeachersBanner } from "@/components/sections/TeachersBanner";
import { EventFeature } from "@/components/sections/EventFeature";
import { Sponsors } from "@/components/sections/Sponsors";
import { Story } from "@/components/sections/Story";
import { DonateCTA } from "@/components/sections/DonateCTA";
import { ScrollReveal } from "@/components/site/ScrollReveal";
import { StructuredData } from "@/components/site/StructuredData";

export default function Home() {
  return (
    <>
      <StructuredData />
      <Hero />
      <ImpactStrip />
      <RecentGrants />
      <HowItWorks />
      <TeachersBanner />
      <EventFeature />
      <Sponsors />
      <Story />
      <DonateCTA />
      <ScrollReveal />
    </>
  );
}
