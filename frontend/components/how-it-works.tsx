"use client";

import { UserPlus, ShieldCheck, Search, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const steps = [
  {
    step: "Step 1",
    title: "Register on the platform",
    desc: "Students and alumni create profiles using verified institutional details.",
    icon: UserPlus,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    step: "Step 2",
    title: "Admin verification",
    desc: "Each registration is manually reviewed to ensure authenticity and trust.",
    icon: ShieldCheck,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    step: "Step 3",
    title: "Discover the network",
    desc: "Search and filter verified alumni and students through a structured directory.",
    icon: Search,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    step: "Step 4",
    title: "Connect and grow",
    desc: "Build meaningful connections, explore opportunities, and engage with the community.",
    icon: Users,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
];

export const HowItWorks = () => {
  return (
    <section id="how" className="w-full py-24 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">

      {/* background accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <Badge variant="secondary" className="mb-4">
            How it works
          </Badge>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Getting started is simple and transparent
          </h2>

          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            KEC Connect follows a structured, admin-verified workflow designed for
            trust and long-term scalability.
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {steps.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border bg-white p-7 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* ICON */}
                <div className={`w-11 h-11 rounded-xl ${s.bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-5 h-5 ${s.color}`} />
                </div>

                {/* STEP */}
                <p className="text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">
                  {s.step}
                </p>

                {/* TITLE */}
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {s.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>

                {/* hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-black/[0.02] to-black/[0.01]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
