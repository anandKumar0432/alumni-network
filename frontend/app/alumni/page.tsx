"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import AlumniCard from "@/components/alumniCard";

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

  const [filters, setFilters] = useState({
    search: "",
    branch: "",
    session: "",
    year: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);
  const fetchAlumni = async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${API}/alumini/alumnis`, {
        params: filters,
        withCredentials: true,
      });

      const data = (res.data && typeof res.data === "object" && "data" in res.data && Array.isArray(res.data.data))
        ? res.data.data
        : [];

      setAlumni(
        data.map((a: any) => ({
          id: a.id,
          name: a.name,
          branch: a.branch,
          session: a.session,
          image: a.image || "/cardTest.png",
          linkedin: a.alumni?.linkedIn || "",
          twitter: a.alumni?.instagram || "",
          reddit: a.alumni?.portfolio || "",
          email: a.email || "",
        }))
      );
    } catch (err) {
      console.error("Failed to fetch alumni", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!mounted) return;

    const timeout = setTimeout(() => {
      fetchAlumni();
    }, 400);

    return () => clearTimeout(timeout);
  }, [filters, mounted]);

  if (!mounted) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50 px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Alumni Directory</h1>
        <p className="text-gray-600 mb-4">{alumni.length} alumni found</p>

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
          <p className="text-center">Loading alumni...</p>
        ) : alumni.length === 0 ? (
          <p className="text-center text-gray-500">No alumni found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {alumni.map((a) => (
              <AlumniCard
                key={a.id}
                name={a.name}
                session={a.session}
                branch={a.branch}
                linkedin={a.linkedin}
                twitter={a.twitter}
                reddit={a.reddit}
                email={a.email}
                image={a.image || "/cardTest.png"}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
