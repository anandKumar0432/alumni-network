import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export const Hero = () => (
  <div className="w-full pt-20 lg:pt-20 pb-5 px-5 lg:px-0">
    <div className="container mx-auto">
      {/* <div className="grid grid-cols-1 gap-8 items-center md:grid-cols-2">
        <div className="flex gap-4 flex-col">
          <div>
            <Badge variant="outline">We&apos;re live!</Badge>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter text-left font-regular">
              This is the start of something!
            </h1>
            <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left">
              Managing a small business today is already tough. Avoid further
              complications by ditching outdated, tedious trade methods. Our
              goal is to streamline SMB trade, making it easier and faster than
              ever.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button size="lg" className="gap-4" variant="outline">
              Admin Dashboard <MoveRight className="w-4 h-4" /> 
            </Button>
            <Button size="lg" className="gap-4">
              Sign up here <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="bg-muted rounded-md aspect-square"></div>
          <div className="bg-muted rounded-md row-span-2"></div>
          <div className="bg-muted rounded-md aspect-square"></div>
        </div>
      </div> */}
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
        {/* Top Gradient */}
        <div className="absolute top-0  left-0 right-0 h-12 bg-linear-to-b from-background/80 to-transparent pointer-events-none" />
        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-linear-to-t from-background/80 to-transparent pointer-events-none" />
        {/* Text Overlay */}
        {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col gap-4 items-center text-center px-5">
            <h1 className="text-4xl md:text-6xl lg:text-7xl tracking-tighter font-regular text-white drop-shadow-lg">
              Katihar Engineering College
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md">
              Alumni Assembles Here
            </p>
          </div>
        </div> */}
          <div className="absolute bottom-6 left-6 text-white drop-shadow-lg">
          <p className="text-sm md:text-base font-bold text-white">Connecting Alumni of KEC, Katihar</p>
        </div>
      </div>
    </div>
  </div>
);