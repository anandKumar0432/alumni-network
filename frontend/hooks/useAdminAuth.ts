"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export function useAdminAuth() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        await axios.get(
          `${BACKEND_URL}/admin/unverified/user`,
          { withCredentials: true }
        );

        setAdmin(true);
      } catch (err) {
        setAdmin(false);
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, [router]);

  return { admin, loading };
}
