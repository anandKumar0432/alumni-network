import { FAQ } from "@/components/faq";
import { Feature } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonial";

export default function Home() {
  return (
    <div >
      <div className="px-3">
        <Header />
        <Hero />
        <Feature />
        <Testimonials />
        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
