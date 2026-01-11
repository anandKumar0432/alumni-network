import { FAQ } from "@/components/faq";
import { Feature } from "@/components/features";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonial";

export default function Home() {
  return (
    <div >
      <div className="px-3">
        <Hero />
        <Feature />
        <Testimonials />
        <FAQ />
      </div>
    </div>
  );
}
