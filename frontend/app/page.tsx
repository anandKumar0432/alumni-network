import { FAQ } from "@/components/faq";
import { Feature } from "@/components/features";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Feature />
      <FAQ />
      <Footer />
    </div>
  );
}
