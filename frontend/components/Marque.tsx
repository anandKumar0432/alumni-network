"use client";

import { motion } from "framer-motion";

type EventItem = {
  id: number;
  text: string;
};

const events: EventItem[] = [
  { id: 1, text: "Alumni student meet at Jun 15th 2026" },
];

export const Marquee = () => {
  const duplicated = [...events, ...events];

  return (
    <div className="overflow-hidden bg-white text-black py-3 border-y border-gray-300">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["100%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        {duplicated.map((event, index) => (
          <span
            key={`${event.id}-${index}`}
            className="text-sm md:text-base font-medium"
          >
            {event.text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};