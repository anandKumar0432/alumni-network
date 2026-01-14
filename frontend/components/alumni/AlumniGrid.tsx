"use client";

import { motion, AnimatePresence } from "framer-motion";
import AlumniCard from "@/components/alumniCard";
import AlumniCardSkeleton from "@/components/AlumniCardSkeleton";
import { Alumni } from "@/hooks/useAlumni";

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

type Props = {
  alumni: Alumni[];
  loading: boolean;
};

export default function AlumniGrid({ alumni, loading }: Props) {
  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="skeleton"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={listVariants}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <AlumniCardSkeleton key={i} />
          ))}
        </motion.div>
      ) : alumni.length === 0 ? (
        <motion.p
          key="empty"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={listVariants}
          transition={{ duration: 0.35 }}
          className="text-center text-gray-500"
        >
          No alumni found.
        </motion.p>
      ) : (
        <motion.div
          key={JSON.stringify(alumni)}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={listVariants}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {alumni.map((a) => (
            <AlumniCard key={a.id} {...a} />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
