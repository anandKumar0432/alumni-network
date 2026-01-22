"use client";

import { motion } from "framer-motion";
import { Users, Building2, Globe } from "lucide-react";

export default function AlumniHero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-20 bg-gray-100">
      <div className="container mx-auto px-4 pb-10 md:pb-12 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold tracking-tight"
        >
          Connect with Our Alumni Network{" "}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
          className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground"
        >
          Discover, connect, and grow with professionals from our college
          community across industries and the world.
        </motion.p>

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
    <div className="flex items-center gap-3 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl px-5 py-3 shadow-md ring-1 ring-black/5">
      <div className=" dark:text-indigo-400">{icon}</div>
      <div className="text-left">
        <p className="text-lg font-semibold leading-none">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}
