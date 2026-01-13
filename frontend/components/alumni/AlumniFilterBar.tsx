"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function AlumniFilterBar({
  search,
  onSearchChange,
  results,
  onMobileFilter,
  children,
  onClear,
}: {
  search: string;
  onSearchChange: (v: string) => void;
  results: number;
  onMobileFilter: () => void;
  children: React.ReactNode;
  onClear: () => void;
}) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setStuck(window.scrollY > 120);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-[72px] z-30 mb-10">
      <div
        className={`
          mx-auto max-w-7xl rounded-2xl border
          backdrop-blur-xl
          transition-all duration-300
          px-4 py-3
          ${
            stuck
              ? "bg-white/95 dark:bg-black/90 shadow-lg"
              : "bg-white/70 dark:bg-black/70 shadow-sm"
          }
        `}
      >
        <div className="flex flex-col gap-3">
          {/* Top row */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-9 h-11"
                placeholder="Search alumni..."
              />
            </div>

            {/* Desktop filters */}
            <div className="hidden lg:flex items-center gap-3">
              {children}
            </div>

            {/* Mobile filter button */}
            <Button
              variant="outline"
              size="icon"
              className="lg:hidden h-11 w-11 rounded-xl"
              onClick={onMobileFilter}
            >
              <SlidersHorizontal className="h-5 w-5" />
            </Button>

            <Button
              onClick={onClear}
              className="h-11 rounded-xl px-5 hidden sm:inline-flex"
            >
              Clear
            </Button>
          </div>

          {/* Bottom row */}
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>{results} results found</span>
          </div>
        </div>
      </div>
    </div>
  );
}
