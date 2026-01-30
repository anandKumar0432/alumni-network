"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { HeroIllustration } from "./HeroIllustration";
import { HeroIllustrationMobile } from "./HeroIllustrationMobile";

export const Hero = () => {
  return (
    <section className="relative pt-32 pb-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-14 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="space-y-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-gray-900">
              A trusted space for
              <br />
              students and alumni.
            </h1>

            <p className="text-lg text-gray-600 max-w-lg">
              KEC Connect is the official, admin-verified alumni platform of
              Katihar Engineering College — built to help students and graduates
              connect, share opportunities, and grow together.
            </p>

            <div className="flex gap-4 pt-2">
              <Button size="lg" asChild>
                <Link href="/register">Get started</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/alumni">Explore alumni</Link>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-600">
              <span>✓ Admin verified</span>
              <span>✓ Secure & private</span>
              <span>✓ Official platform</span>
            </div>
          </motion.div>

          {/* RIGHT — Illustration */}
          <div className="hidden lg:flex justify-center scale-[1.15] xl:scale-[1.25] items-start pt-10 xl:pt-14">
            <HeroIllustration />
          </div>
          <div className="flex lg:hidden justify-center mt-6">
            <HeroIllustrationMobile />
          </div>
        </div>
      </div>
    </section>
  );
};
