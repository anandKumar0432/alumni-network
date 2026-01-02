import { FAQ } from "@/components/faq";
import { Feature } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Testimonials } from "@/components/testimonial";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}
