"use client";

import Link from "next/link";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="w-full pt-28 pb-28 relative overflow-hidden bg-white">
      {/* background blobs (slow, always running) */}
      <motion.div
        className="absolute -top-32 -left-32 w-[28rem] h-[28rem] bg-black/5 rounded-full blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] bg-black/5 rounded-full blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
            >
              <Badge className="w-fit px-4 py-1 text-sm font-medium shadow-sm">
                Official Alumni Network of KEC Katihar
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.05 }}
              className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-bold tracking-tight text-gray-900"
            >
              Connect Students & Alumni. <br />
              Build a Stronger{" "}
              <span className="relative">
                KEC Community
                <span className="absolute left-0 -bottom-1 w-full h-[6px] bg-black/10 rounded-full" />
              </span>
              .
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.12 }}
              className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed"
            >
              KEC Connect is a verified alumni networking platform where
              students and graduates connect, share opportunities, and grow
              together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.18 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Button size="lg" className="gap-2 px-8 shadow-lg" asChild>
                  <Link href="/register">
                    Get Started <MoveRight size={18} />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Button size="lg" variant="outline" className="px-8" asChild>
                  <Link href="/alumni">Explore Alumni</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.6 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.24 }}
              className="flex flex-wrap gap-6 pt-4 text-sm text-gray-600"
            >
              <span>✔ Verified profiles</span>
              <span>✔ Admin-approved network</span>
              <span>✔ Secure platform</span>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-full h-[320px] sm:h-[380px] md:h-[440px] lg:h-[520px] 
             rounded-3xl overflow-hidden shadow-2xl bg-white"
          >
            {/* floating layer */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src="/college-image-2.png"
                alt="Katihar Engineering College"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-black/5 to-transparent" />
              <div className="absolute inset-0 rounded-3xl ring-1 ring-black/10" />
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
