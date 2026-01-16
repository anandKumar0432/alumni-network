"use client";

import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { PendingFilters } from "@/components/admin/FiltersBar";

const API = process.env.NEXT_PUBLIC_BACKEND_URL;

export function usePendingRequests(filters: PendingFilters, page: number) {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${API}/admin/unverified/user`, {
        params: {
          ...filters,
          page,
          limit: 10,
        },
        withCredentials: true,
      });

      setUsers(res.data.data);
      setTotalPages(res.data.totalPages || 1);
    } catch (err) {
      console.error("Failed to fetch pending users", err);
    } finally {
      setLoading(false);
    }
  }, [filters, page]);

  const verifyUser = async (id: string) => {
    try {
      setActionLoadingId(id);

      await axios.patch(
        `${API}/admin/verify-user/${id}`,
        {},
        { withCredentials: true }
      );

      // Optimistic update
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (err) {
      console.error("Verify failed", err);
    } finally {
      setActionLoadingId(null);
    }
  };

  // 🚧 not implemented on backend yet
  const rejectUser = async (id: string) => {
    console.warn("Reject user not implemented yet", id);
  };

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return {
    users,
    loading,
    verifyUser,
    rejectUser,
    actionLoadingId,
    totalPages,
    refetch: fetchUsers,
  };
}
