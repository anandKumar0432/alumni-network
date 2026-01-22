"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function useAlumniFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [mounted, setMounted] = useState(false);
  const [page, setPage] = useState<number>(
    Number(searchParams.get("page")) || 1
  );

  const [filters, setFilters] = useState({
    search: searchParams.get("search") || "",
    branch: searchParams.get("branch") || "",
    session: searchParams.get("session") || "",
    year: searchParams.get("year") || "",
  });

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const newPage = Number(searchParams.get("page")) || 1;

    const newFilters = {
      search: searchParams.get("search") || "",
      branch: searchParams.get("branch") || "",
      session: searchParams.get("session") || "",
      year: searchParams.get("year") || "",
    };

    setPage((p) => (p !== newPage ? newPage : p));
    setFilters((f) =>
      JSON.stringify(f) !== JSON.stringify(newFilters) ? newFilters : f
    );
  }, [searchParams]);

  useEffect(() => {
    if (!mounted) return;

    const params = new URLSearchParams();
    if (page > 1) params.set("page", page.toString());
    Object.entries(filters).forEach(([k, v]) => v && params.set(k, v));

    router.replace(`?${params.toString()}`, { scroll: false });
  }, [page, filters, mounted, router]);

  return { mounted, page, setPage, filters, setFilters };
}
