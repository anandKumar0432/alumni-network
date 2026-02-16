"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  ShieldCheck,
  FileCheck2,
  Clock,
  Activity,
} from "lucide-react";

type StatItem =
  | {
      label: string;
      value: number;
      suffix?: string;
      description: string;
      icon: React.ElementType;
      color: string;
      bg: string;
    }
  | {
      label: string;
      text: string;
      description: string;
      icon: React.ElementType;
      color: string;
      bg: string;
    };

const stats: StatItem[] = [
  {
    label: "Verified Alumni Profiles",
    value: 1200,
    suffix: "+",
    description: "Profiles approved through secure admin verification",
    icon: ShieldCheck,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    label: "Student Requests Processed",
    value: 5400,
    suffix: "+",
    description: "Applications reviewed and logged transparently",
    icon: FileCheck2,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    label: "Average Approval Time",
    value: 24,
    suffix: " hrs",
    description: "Fast and consistent verification workflow",
    icon: Clock,
    color: "text-purple-600",
    bg: "bg-purple-100",
  },
  {
    label: "Audit Logs Enabled",
    text: "100%",
    description: "Every admin action is tracked and auditable",
    icon: Activity,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
];

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, Math.round);

  const isInView = useInView(ref, { margin: "-80px", once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(0);
      animate(motionValue, value, {
        duration: 1.4,
        ease: "easeOut",
      });
    }
  }, [isInView, value, motionValue]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export const Stats = () => {
  return (
    <section className="w-full py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Built for Trust. Designed for Scale.
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            KEC-Connect enables verified alumni engagement through transparent
            approvals, secure audit logs, and real-time administration.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl p-7 border shadow-sm hover:shadow-xl transition-all duration-300"
              >
                {/* Icon */}
                <div className={`inline-flex p-3 rounded-xl mb-5 ${stat.bg}`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>

                {/* Value */}
                <div className="text-3xl md:text-4xl font-bold text-gray-900">
                  {"value" in stat ? (
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  ) : (
                    stat.text
                  )}
                </div>

                {/* Label */}
                <p className="mt-3 text-sm font-semibold text-gray-900">
                  {stat.label}
                </p>

                {/* Description */}
                <p className="mt-1 text-xs text-gray-500 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
