"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { label: "Registered Alumni", value: 1200, suffix: "+" },
  { label: "Active Students", value: 800, suffix: "+" },
  { label: "Verified Profiles", value: 100, suffix: "%" },
  { label: "Admin Moderation", text: "Real-time" },
];

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, Math.round);

  const isInView = useInView(ref, { margin: "-80px" });

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
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export const Stats = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-7 shadow-sm border hover:shadow-lg transition-all"
            >
              <p className="text-3xl md:text-4xl font-bold text-gray-900">
                {"value" in stat ? (
                  <CountUp value={stat.value} suffix={stat.suffix} />
                ) : (
                  stat.text
                )}
              </p>

              <p className="mt-2 text-sm md:text-base text-gray-600">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
