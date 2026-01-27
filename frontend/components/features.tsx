"use client";

import {
  Users,
  ShieldCheck,
  LayoutDashboard,
  FileClock,
  Search,
  GraduationCap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const features = [
  {
    title: "Verified Alumni Network",
    desc: "All profiles go through an admin approval system to ensure a trusted and authentic alumni community.",
    icon: ShieldCheck,
  },
  {
    title: "Powerful Alumni Directory",
    desc: "Search and filter alumni by batch, branch, role, and status to quickly find the right connections.",
    icon: Search,
  },
  {
    title: "Student & Alumni Profiles",
    desc: "Detailed profiles showcasing academic background, career paths, and contact information.",
    icon: GraduationCap,
  },
  {
    title: "Admin Dashboard",
    desc: "A dedicated admin system to verify users, manage requests, and monitor platform activity.",
    icon: LayoutDashboard,
  },
  {
    title: "Approval Logs & Transparency",
    desc: "Every approval and rejection is tracked with logs for full transparency and accountability.",
    icon: FileClock,
  },
  {
    title: "Secure Role-Based Access",
    desc: "Role-based access control for students, alumni, and admins to ensure platform security.",
    icon: Users,
  },
];

export const Feature = () => {
  return (
    <section className="w-full py-28 relative overflow-hidden">

      {/* soft background accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-black/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-2xl mb-16"
        >
          <Badge className="mb-4">Platform Features</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            Everything you need to build a strong alumni ecosystem
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            KEC Connect is designed to securely connect students and alumni through
            verified profiles, powerful discovery tools, and a transparent admin system.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-3xl border p-7 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* glow border */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5 group-hover:ring-black/10 transition" />

              {/* icon */}
              <motion.div
                whileHover={{ scale: 1.12, rotate: 2 }}
                className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center mb-6 shadow-sm"
              >
                <f.icon size={22} />
              </motion.div>

              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {f.title}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed">
                {f.desc}
              </p>

              {/* hover overlay */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-black/[0.04] via-transparent to-transparent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
