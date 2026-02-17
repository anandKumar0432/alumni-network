"use client";

import {
  ShieldCheck,
  Search,
  GraduationCap,
  LayoutDashboard,
  FileClock,
  Users,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const features = [
  {
    title: "Verified Alumni Network",
    desc: "Every alumni profile is manually reviewed and approved by administrators, ensuring a trusted institutional network.",
    icon: ShieldCheck,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    title: "Transparent Approval Logs",
    desc: "All verification actions are recorded with timestamps and admin attribution for full auditability.",
    icon: FileClock,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  {
    title: "Role-Based Access Control",
    desc: "Defined permissions for students, alumni, and administrators protect sensitive data and workflows.",
    icon: Users,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    title: "Advanced Alumni Directory",
    desc: "Search and filter alumni by batch, department, role, and verification status instantly.",
    icon: Search,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
  {
    title: "Structured Academic & Career Profiles",
    desc: "Standardized profiles present education, experience, and achievements clearly and professionally.",
    icon: GraduationCap,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    title: "Centralized Admin Dashboard",
    desc: "A single interface to manage requests, users, and platform activity at scale.",
    icon: LayoutDashboard,
    color: "text-pink-600",
    bg: "bg-pink-100",
  },
];

export const Feature = () => {
  return (
    <section id="features" className="w-full py-24 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">

      {/* Background accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-14"
        >
          <Badge variant="secondary" className="mb-4">
            Platform Capabilities
          </Badge>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
            A secure, scalable platform for institutional alumni networks
          </h2>

          <p className="mt-4 text-base text-gray-600 leading-relaxed">
            Designed to meet operational, security, and transparency requirements of
            modern colleges.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border bg-white p-7 shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* ICON */}
                <div className={`w-11 h-11 rounded-xl ${f.bg} flex items-center justify-center mb-5`}>
                  <Icon className={`w-5 h-5 ${f.color}`} />
                </div>

                {/* TITLE */}
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  {f.title}
                </h3>

                {/* DESC */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {f.desc}
                </p>

                {/* subtle hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition pointer-events-none bg-gradient-to-br from-black/[0.02] to-black/[0.01]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
