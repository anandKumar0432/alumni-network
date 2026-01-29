"use client";

import { UserPlus, ShieldCheck, Search, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const steps = [
  {
    title: "Register on the platform",
    desc: "Students and alumni sign up and create their profiles on KEC Connect.",
    icon: UserPlus,
  },
  {
    title: "Get verified by admin",
    desc: "All registrations go through an admin approval process to ensure authenticity.",
    icon: ShieldCheck,
  },
  {
    title: "Explore the alumni network",
    desc: "Search and filter verified alumni and students using the powerful directory.",
    icon: Search,
  },
  {
    title: "Connect & grow together",
    desc: "Build connections, explore opportunities, and strengthen the KEC community.",
    icon: Users,
  },
];

export const HowItWorks = () => {
  return (
    <section className="w-full py-28 bg-gray-50 relative overflow-hidden">

      {/* soft background accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-black/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mb-20"
        >
          <Badge className="mb-4">How it works</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Getting started with KEC Connect is simple
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            A secure and transparent process designed to build a trusted alumni ecosystem.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* connector line (desktop) */}
          <div className="hidden lg:block absolute top-[52px] left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.08 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl p-7 border shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* step number bubble */}
              <div className="absolute -top-4 left-6 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-600 border shadow-sm">
                Step {i + 1}
              </div>

              {/* icon */}
              <motion.div
                whileHover={{ scale: 1.12, rotate: 3 }}
                className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6 shadow-sm"
              >
                <step.icon size={22} />
              </motion.div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {step.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {step.desc}
              </p>

              {/* soft hover glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-black/[0.04] via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
