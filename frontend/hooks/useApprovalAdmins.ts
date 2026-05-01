"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export function useApprovalAdmins() {
  const [admins, setAdmins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const res = await axios.get<{ data: any[] }>(
          `${BACKEND_URL}/admin/approval-admins`,
          { withCredentials: true }
        );

        setAdmins(res.data.data);
      } catch (err) {
        console.error("Failed to load approval admins", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmins();
  }, []);

  return { admins, loading };
}
