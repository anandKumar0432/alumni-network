import { FAQ } from "@/components/faq";
import { Feature } from "@/components/features";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { HowItWorks } from "@/components/how-it-works";
import { CommunityCarousel } from "@/components/community-carousel";
import { CTA } from "@/components/cta";

export default function Home() {
  return (
    <div >
      <div className="px-3">
        <Hero />
        <Stats />
        <Feature />
        <HowItWorks />
        <CommunityCarousel />
        <CTA />
        <FAQ />
      </div>
    </div>
  );
}
