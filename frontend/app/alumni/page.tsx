"use client";

import { Suspense } from "react";
import AlumniPageView from "@/components/alumni/AlumniPageView";

export default function AlumniPage() {
  return (
    <Suspense fallback={<p className="text-center py-20">Loading alumni...</p>}>
      <AlumniPageView />
    </Suspense>
  );
}
