"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Kumar",
    role: "Alumni, CSE 2021",
    quote:
      "KEC Connect helped me reconnect with my seniors and juniors. The verified network makes it easy to trust the profiles and build meaningful connections.",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    name: "Anjali Singh",
    role: "Student, EEE 3rd Year",
    quote:
      "Through KEC Connect, I found alumni working in the industry who guided me with internships and career paths. This platform truly bridges the gap.",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    name: "Akriti Verma",
    role: "Alumni, CE 2019",
    quote:
      "The structured verification and alumni directory make KEC Connect feel like an official and reliable community platform.",
    image: "https://i.pravatar.cc/150?img=32",
  },
];

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const id = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent((c) => c + 1);
      }
    }, 5000);

    return () => clearTimeout(id);
  }, [api, current]);

  return (
    <section className="w-full py-28 relative overflow-hidden bg-white">

      {/* soft background accents */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-black/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-black/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl mb-16"
        >
          <Badge className="mb-4">Community voices</Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
            What our KEC community says
          </h2>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            Hear from students and alumni who are already part of the KEC Connect network.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {testimonials.map((t, index) => (
                <CarouselItem key={index} className="lg:basis-1/2">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 200, damping: 18 }}
                    className="group relative bg-white border rounded-3xl p-8 h-full flex flex-col justify-between shadow-sm hover:shadow-xl transition"
                  >
                    {/* quote icon */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <Quote className="w-9 h-9 text-black/70 mb-5" />
                    </motion.div>

                    <p className="text-lg leading-relaxed text-gray-700 mb-7">
                      “{t.quote}”
                    </p>

                    <div className="flex items-center gap-3">
                      <Avatar className="h-11 w-11 ring-2 ring-black/5">
                        <AvatarImage src={t.image} />
                        <AvatarFallback>{t.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold text-gray-900">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.role}</p>
                      </div>
                    </div>

                    {/* soft hover glow */}
                    <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-tr from-black/[0.04] via-transparent to-transparent" />
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
};
