"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";

const images = [
  "/community/img1.jpeg",
  "/community/img2.jpeg",
  "/community/img3.jpeg",
  "/community/img4.jpeg",
  "/community/img5.jpeg",
  "/community/img6.jpeg",
  "/community/img7.jpeg",
];

export const CommunityCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isHovering = useRef(false);
  const isDragging = useRef(false);

  const [startX, setStartX] = useState(0);
  const [scrollLeftStart, setScrollLeftStart] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let frame: number;

    const autoScroll = () => {
      if (!container) return;

      if (!isHovering.current && !isDragging.current) {
        container.scrollLeft += 0.25; // slow & calm speed

        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }

      frame = requestAnimationFrame(autoScroll);
    };

    autoScroll();
    return () => cancelAnimationFrame(frame);
  }, []);

  // drag start
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;

    isDragging.current = true;
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeftStart(container.scrollLeft);
  };

  // drag move
  const handleMouseMove = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!isDragging.current || !container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.2;
    container.scrollLeft = scrollLeftStart - walk;
  };

  const stopDragging = () => {
    isDragging.current = false;
  };

  return (
    <section id="community" className="w-full py-24 bg-white relative overflow-hidden">

      {/* subtle background */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-black/5 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/5 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* header */}
        <div className="max-w-3xl mb-14">
          <Badge variant="secondary" className="mb-4">
            Community
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
            A trusted and growing alumni community
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Students and alumni across batches are already part of a verified,
            institution-driven network designed for meaningful connections and
            long-term engagement.
          </p>
        </div>

        {/* carousel */}
        <div className="relative">

          {/* gradient fades */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-white/90 via-white/50 to-transparent z-10"/>
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white/90 via-white/50 to-transparent z-10"/>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-scroll no-scrollbar cursor-grab active:cursor-grabbing"
            onMouseEnter={() => (isHovering.current = true)}
            onMouseLeave={() => {
              isHovering.current = false;
              stopDragging();
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
          >
            {images.map((src, i) => (
              <div
                key={i}
                className="relative min-w-[260px] sm:min-w-[360px] md:min-w-[460px] lg:min-w-[520px]"
              >
                <div className="relative h-[200px] sm:h-[240px] md:h-[300px] rounded-2xl overflow-hidden shadow-md">

                  <Image
                    src={src}
                    alt="Alumni community"
                    fill
                    className="object-cover"
                  />

                  {/* soft overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />

                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-500">
          Verified alumni network · Multiple graduating batches · Institution-managed platform
        </p>

      </div>
    </section>
  );
};
