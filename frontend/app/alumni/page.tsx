"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import AlumniHero from "@/components/alumni/AlumniHero";
import AlumniFilterBar from "@/components/alumni/AlumniFilterBar";
import ActiveFilters from "@/components/alumni/ActiveFilters";
import MobileFilterDrawer from "@/components/filters/MobileFilterDrawer";
import AlumniDesktopFilters from "@/components/alumni/AlumniDesktopFilters";
import AlumniMobileFilters from "@/components/alumni/AlumniMobileFilters";

import { useAlumni } from "@/hooks/useAlumni";
import { useAlumniFilters } from "@/hooks/useAlumniFilters";

import AlumniGrid from "@/components/alumni/AlumniGrid";
import AlumniPagination from "@/components/alumni/AlumniPagination";
import AlumniResults from "@/components/alumni/AlumniResults";

export default function AlumniPage() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const { mounted, page, setPage, filters, setFilters } = useAlumniFilters();

  const { alumni, loading, totalPages, totalResults } = useAlumni(
    filters,
    page,
    mounted
  );

  if (!mounted) return <p className="text-center mt-10">Loading...</p>;

  return (
    <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
      <AlumniHero />

      {/* FILTER ZONE */}
      <section className="relative bg-gray-50">
        <div className="h-6" />

        <AlumniFilterBar
          search={filters.search}
          onSearchChange={(v) => {
            setFilters((f) => ({ ...f, search: v }));
            setPage(1);
          }}
          results={totalResults}
          onMobileFilter={() => setIsFilterOpen(true)}
          onClear={() => {
            setFilters({ search: "", branch: "", session: "", year: "" });
            setPage(1);
          }}
        >
          <AlumniDesktopFilters
            filters={filters}
            onChange={(newFilters) => setFilters(newFilters)}
            onResetPage={() => setPage(1)}
          />
        </AlumniFilterBar>

        <div className="max-w-7xl mx-auto px-4">
          <ActiveFilters
            filters={filters}
            onRemove={(key) => {
              setFilters((f) => ({ ...f, [key]: "" }));
              setPage(1);
            }}
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-gray-50 px-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <AlumniResults page={page} total={totalResults} />
          <AlumniGrid alumni={alumni} loading={loading} />
          <AlumniPagination
            page={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </section>

      {/* MOBILE FILTER DRAWER */}
      <MobileFilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
      >
        <AlumniMobileFilters
          filters={filters}
          onChange={(newFilters) => setFilters(newFilters)}
          onClear={() =>
            setFilters({ search: "", branch: "", session: "", year: "" })
          }
          onApply={() => {
            setPage(1);
            setIsFilterOpen(false);
          }}
        />
      </MobileFilterDrawer>
    </motion.main>
  );
}
