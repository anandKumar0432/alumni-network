"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className="w-full pt-14 pb-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border bg-gradient-to-b from-gray-50 to-white shadow-sm
      px-8 py-18 md:px-16 md:py-24 text-center"
        >
          <div className="max-w-2xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              Join the network
            </Badge>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              Start connecting with the alumni community
            </h2>

            <p className="mt-5 text-lg md:text-xl text-gray-600 leading-relaxed">
              Create your verified profile to connect with alumni, explore
              opportunities, and stay engaged with your institutional network.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-9">
              <Button size="lg" className="gap-2 px-8" asChild>
                <Link href="/register">
                  Create Profile <MoveRight size={18} />
                </Link>
              </Button>

              <Button size="lg" variant="outline" className="px-8" asChild>
                <Link href="/alumni">Browse Alumni</Link>
              </Button>
            </div>

            <div className="mt-7 text-sm text-gray-500">
              Admin-verified profiles · Secure & private · Official
              institutional platform
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
