"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_BACKEND_URL;

export function usePendingRequests() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${API}/admin/pending`, {
        withCredentials: true,
      });

      setUsers(res.data.data);
    } catch (err) {
      console.error("Failed to fetch pending users", err);
    } finally {
      setLoading(false);
    }
  };

  const verifyUser = async (id: string) => {
    await axios.patch(
      `${API}/admin/verify/${id}`,
      {},
      { withCredentials: true }
    );

    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, verifyUser };
}
