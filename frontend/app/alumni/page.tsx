"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import AlumniCard from "@/components/alumniCard";
import AlumniCardSkeleton from "@/components/AlumniCardSkeleton";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import MobileFilterDrawer from "@/components/filters/MobileFilterDrawer";

const API = "http://localhost:8000/api/v1";

type Alumni = {
  id: string;
  name: string;
  branch: string;
  session: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
  reddit?: string;
  email?: string;
};

const listVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function AlumniPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [mounted, setMounted] = useState(false);
  const [alumni, setAlumni] = useState<Alumni[]>([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState<number>(
    Number(searchParams.get("page")) || 1
  );
  const [totalPages, setTotalPages] = useState(1);

  const [filters, setFilters] = useState({
    search: searchParams.get("search") || "",
    branch: searchParams.get("branch") || "",
    session: searchParams.get("session") || "",
    year: searchParams.get("year") || "",
  });

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const activeCount = Object.values(filters).filter(Boolean).length;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  // URL → STATE
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

  // STATE → URL
  useEffect(() => {
    if (!mounted) return;

    const params = new URLSearchParams();

    if (page > 1) params.set("page", page.toString());
    if (filters.search) params.set("search", filters.search);
    if (filters.branch) params.set("branch", filters.branch);
    if (filters.session) params.set("session", filters.session);
    if (filters.year) params.set("year", filters.year);

    router.replace(`?${params.toString()}`, { scroll: false });
  }, [page, filters, mounted, router]);

  const fetchAlumni = async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${API}/alumini/alumnis`, {
        params: { ...filters, page, limit: 8 },
        withCredentials: true,
      });

      const mapped = (res.data?.data || []).map((a: any) => ({
        id: a.id,
        name: a.name,
        branch: a.branch,
        session: a.session,
        image: a.image || "/cardTest.png",
        linkedin: a.alumni?.linkedIn || "",
        twitter: a.alumni?.instagram || "",
        reddit: a.alumni?.portfolio || "",
        email: a.email || "",
      }));

      setAlumni(mapped);
      setTotalPages(res.data?.pagination?.totalPages || 1);
    } catch (err) {
      console.error("Failed to fetch alumni", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!mounted) return;
    const timeout = setTimeout(fetchAlumni, 400);
    return () => clearTimeout(timeout);
  }, [filters, page, mounted]);

  if (!mounted) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="pt-20 min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Alumni Directory</h1>
        <p className="text-gray-600 mb-4">
          Showing page {page} of {totalPages}
        </p>

        {/* Mobile filter button */}
        <div className="md:hidden mb-4 flex justify-end">
          <button
            onClick={() => setIsFilterOpen(true)}
            className="border rounded-lg px-4 py-2 bg-white shadow-sm"
          >
            Filters {activeCount > 0 && `(${activeCount})`}
          </button>
        </div>

        {/* Desktop Filters */}
        <div className="hidden md:grid bg-white p-4 rounded-xl shadow mb-8 grid-cols-1 md:grid-cols-5 gap-4">
          <input
            placeholder="Search by name..."
            className="border rounded-lg px-3 py-2"
            value={filters.search}
            onChange={(e) => {
              setFilters((f) => ({ ...f, search: e.target.value }));
              setPage(1);
            }}
          />

          <select
            className="border rounded-lg px-3 py-2"
            value={filters.branch}
            onChange={(e) => {
              setFilters((f) => ({ ...f, branch: e.target.value }));
              setPage(1);
            }}
          >
            <option value="">All Branches</option>
            <option value="CSE">CSE</option>
            <option value="IT">IT</option>
            <option value="ECE">ECE</option>
            <option value="ME">ME</option>
            <option value="EEE">EEE</option>
            <option value="CE">CE</option>
            <option value="VLSI">VLSI</option>
            <option value="FPP">FPP</option>
          </select>

          <input
            placeholder="Session (e.g. 2019-23)"
            className="border rounded-lg px-3 py-2"
            value={filters.session}
            onChange={(e) => {
              setFilters((f) => ({ ...f, session: e.target.value }));
              setPage(1);
            }}
          />

          <input
            type="number"
            placeholder="Passing year"
            className="border rounded-lg px-3 py-2"
            value={filters.year}
            onChange={(e) => {
              setFilters((f) => ({ ...f, year: e.target.value }));
              setPage(1);
            }}
          />

          <button
            onClick={() => {
              setFilters({ search: "", branch: "", session: "", year: "" });
              setPage(1);
            }}
            className="bg-black text-white rounded-lg px-4 py-2"
          >
            Clear
          </button>
        </div>

        {/* List */}
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="skeleton"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={listVariants}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <AlumniCardSkeleton key={i} />
              ))}
            </motion.div>
          ) : alumni.length === 0 ? (
            <motion.p
              key="empty"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={listVariants}
              transition={{ duration: 0.35 }}
              className="text-center text-gray-500"
            >
              No alumni found.
            </motion.p>
          ) : (
            <motion.div
              key={page + JSON.stringify(filters)}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={listVariants}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            >
              {alumni.map((a) => (
                <AlumniCard key={a.id} {...a} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-10 flex-wrap">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-4 py-2 rounded-lg border cursor-pointer bg-white disabled:bg-gray-200"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`px-4 py-2 rounded-lg border cursor-pointer ${
                  page === i + 1 ? "bg-black text-white" : "bg-white"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-4 py-2 rounded-lg border cursor-pointer bg-white disabled:bg-gray-200"
            >
              Next
            </button>
          </div>
        )}
      </div>

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        currentFilters={filters}
        onApply={(newFilters) => {
          setFilters(newFilters);
          setPage(1);
        }}
      />
    </div>
  );
}
