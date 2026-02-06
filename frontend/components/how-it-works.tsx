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
  },
  {
    step: "Step 2",
    title: "Admin verification",
    desc: "Each registration is manually reviewed to ensure authenticity and trust.",
    icon: ShieldCheck,
  },
  {
    step: "Step 3",
    title: "Discover the network",
    desc: "Search and filter verified alumni and students through a structured directory.",
    icon: Search,
  },
  {
    step: "Step 4",
    title: "Connect and grow",
    desc: "Build meaningful connections, explore opportunities, and engage with the community.",
    icon: Users,
  },
];

export const HowItWorks = () => {
  return (
    <section className="w-full py-20 relative overflow-hidden bg-gray-50">

      {/* Soft background accents (same as Features) */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-black/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-12"
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

        {/* Steps Grid (same grammar as Features) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -3 }}
                className="group relative rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-all"
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-gray-700" />
                </div>

                {/* Step label */}
                <p className="text-xs font-medium text-gray-500 mb-1">
                  {s.step}
                </p>

                {/* Title */}
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
