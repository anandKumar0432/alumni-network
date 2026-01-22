"use client";

import { ReactNode } from "react";
import { useAdminAuth } from "@/hooks/useAdminAuth";

export default function AlumniGuard({ children }: { children: ReactNode }) {
  const { loading, admin } = useAdminAuth();

  if (loading) {
    return (
      <div className="h-[70vh] flex items-center justify-center">
        <p className="text-lg font-medium">Checking alumni access...</p>
      </div>
    );
  }

  if (!admin) {
    return null;
  }

  return <>{children}</>;
}
