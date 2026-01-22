import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const Hero = () => (
  <div className="w-full pt-20 lg:pt-20 pb-5 ">
    <div className="container mx-auto">
      <div className="w-full relative rounded-md overflow-hidden">
        <div className="relative w-full h-[40vh] sm:h-[55vh] md:h-[65vh] lg:h-[75vh]">
          <Image
            src="/college-image-2.png"
            alt="Katihar Engineering College"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute top-0  left-0 right-0 h-12 bg-linear-to-b from-background/80 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-background/80 to-transparent pointer-events-none" />
          <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
          <p className="text-sm md:text-base font-bold text-white">Connecting Alumni of KEC, Katihar</p>
        </div>
      </div>
    </div>
  </div>
);