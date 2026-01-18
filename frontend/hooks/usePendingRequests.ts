"use client";

import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { PendingFilters } from "@/components/admin/FiltersBar";

const  BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export function usePendingRequests(filters: PendingFilters, page: number) {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionLoadingId, setActionLoadingId] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState(1);

  const fetchUsers = useCallback(async () => {
    try {
      setLoading(true);

      const res = await axios.get(`${BACKEND_URL}/admin/unverified/user`, {
        params: {
          ...filters,
          page,
          limit: 10,
        },
        withCredentials: true,
      });

      const data = res.data as { data: any[]; totalPages?: number };
      setUsers(data.data);
      setTotalPages(data.totalPages || 1);
    } catch (err) {
      console.error("Failed to fetch pending users", err);
    } finally {
      setLoading(false);
    }
  }, [filters, page]);

  // const verifyUser = async (id: string) => {
  //   try {
  //     setActionLoadingId(id);

  //     await axios.patch(
  //       `${API}/admin/verify-user/${id}`,
  //       {},
  //       { withCredentials: true }
  //     );

  //     // Optimistic update
  //     setUsers((prev) => prev.filter((u) => u.id !== id));
  //   } catch (err) {
  //     console.error("Verify failed", err);
  //   } finally {
  //     setActionLoadingId(null);
  //   }
  // };

  // // not implemented on backend yet
  // const rejectUser = async (id: string) => {
  //   console.warn("Reject user not implemented yet", id);
  // };

  const updateStatus = async (id: string, status: "VERIFIED" | "REJECTED") => {
    try {
      setActionLoadingId(id);

      await axios.post(
        `${API}/admin/update-status/${id}`,
        { status },
        { withCredentials: true }
      );

      //remove from pending list after action
      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (err) {
      console.error(`Update status failed (${status})`, err);
    } finally {
      setActionLoadingId(null);
    }
  };

  const verifyUser = (id: string) => updateStatus(id, "VERIFIED");
  const rejectUser = (id: string) => updateStatus(id, "REJECTED");

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
