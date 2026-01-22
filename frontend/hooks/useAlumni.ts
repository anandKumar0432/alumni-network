"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const PAGE_SIZE = 8;

export type Alumni = {
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

export function useAlumni(filters: any, page: number, mounted: boolean) {
  const [alumni, setAlumni] = useState<Alumni[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    if (!mounted) return;

    const fetchAlumni = async () => {
      try {
        if (!BACKEND_URL) throw new Error("BACKEND_URL missing");

        setLoading(true);

        const res = await axios.get(`${BACKEND_URL}/common/alumnis`, {
          params: { ...filters, page, limit: PAGE_SIZE },
          withCredentials: true,
        });

        const alumniData = (res as any)?.data?.data || [];
        const mapped = alumniData.map((a: any) => ({
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
        const pagination = (res.data && typeof res.data === "object" && 'pagination' in res.data) ? (res.data as any).pagination : undefined;
        setTotalPages(pagination?.totalPages || 1);
        setTotalResults(pagination?.total || 0);
      } catch (e) {
        console.error("Failed to fetch alumni", e);
      } finally {
        setLoading(false);
      }
    };

    const t = setTimeout(fetchAlumni, 400);
    return () => clearTimeout(t);
  }, [filters, page, mounted]);

  return { alumni, loading, totalPages, totalResults };
}
