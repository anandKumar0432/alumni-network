"use client";

import { motion } from "framer-motion";
import { Users, Building2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AlumniHero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-100 via-white to-purple-100 dark:from-indigo-950 dark:via-black dark:to-purple-950" />

      {/* Glow */}
      <div className="absolute -top-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-300/30 blur-3xl dark:bg-purple-800/30" />

      <div className="container mx-auto px-4 pb-10 md:pb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Connect with Our{" "}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Alumni Network
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Discover, connect, and grow with professionals from our college
          community across industries and the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="rounded-full px-8">
            Explore Alumni
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8">
            Become a Member
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="mt-14 flex flex-wrap justify-center gap-8"
        >
          <Stat icon={<Users />} value="2,400+" label="Alumni" />
          <Stat icon={<Building2 />} value="180+" label="Companies" />
          <Stat icon={<Globe />} value="12+" label="Countries" />
        </motion.div>
      </div>
    </section>
  );
}

function Stat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur px-5 py-3 shadow-sm">
      <div className="text-indigo-600 dark:text-indigo-400">{icon}</div>
      <div className="text-left">
        <p className="text-lg font-semibold leading-none">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
