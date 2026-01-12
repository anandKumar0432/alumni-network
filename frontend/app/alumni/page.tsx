"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import AlumniCard from "@/components/alumniCard";
import AlumniCardSkeleton from "@/components/AlumniCardSkeleton";

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

export default function AlumniPage() {
  const [mounted, setMounted] = useState(false);
  const [alumni, setAlumni] = useState<Alumni[]>([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [filters, setFilters] = useState({
    search: "",
    branch: "",
    session: "",
    year: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [page]);

  const fetchAlumni = async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${API}/alumini/alumnis`, {
        params: {
          ...filters,
          page,
          limit: 8,
        },
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

  useEffect(() => {
    setPage(1);
  }, [filters]);

  if (!mounted) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Alumni Directory</h1>
        <p className="text-gray-600 mb-4">
          Showing page {page} of {totalPages}
        </p>

        <div className="bg-white p-4 rounded-xl shadow mb-8 grid grid-cols-1 md:grid-cols-5 gap-4">
          <input
            placeholder="Search by name..."
            className="border rounded-lg px-3 py-2"
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          />

          <select
            className="border rounded-lg px-3 py-2"
            value={filters.branch}
            onChange={(e) => setFilters({ ...filters, branch: e.target.value })}
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
            onChange={(e) =>
              setFilters({ ...filters, session: e.target.value })
            }
          />

          <input
            type="number"
            placeholder="Passing year"
            className="border rounded-lg px-3 py-2"
            value={filters.year}
            onChange={(e) => setFilters({ ...filters, year: e.target.value })}
          />

          <button
            onClick={() =>
              setFilters({ search: "", branch: "", session: "", year: "" })
            }
            className="bg-black text-white rounded-lg px-4 py-2"
          >
            Clear
          </button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <AlumniCardSkeleton key={i} />
            ))}
          </div>
        ) : alumni.length === 0 ? (
          <p className="text-center text-gray-500">No alumni found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {alumni.map((a) => (
              <AlumniCard
                key={a.id}
                id={a.id}
                name={a.name}
                session={a.session}
                branch={a.branch}
                linkedin={a.linkedin}
                twitter={a.twitter}
                reddit={a.reddit}
                email={a.email}
                image={a.image}
              />
            ))}
          </div>
        )}

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
    </div>
  );
}
