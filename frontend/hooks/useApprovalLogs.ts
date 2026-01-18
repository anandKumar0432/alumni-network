"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export function useApprovalLogs(page: number, status: string, adminId: string) {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(1);

  const fetchLogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BACKEND_URL}/admin/approval-logs`, {
        params: { page, limit: 10, status, adminId },
        withCredentials: true,
      });

      setLogs(res.data.data);
      setTotalPages(res.data.totalPages || 1);
    } catch (err) {
      console.error("Failed to fetch approval logs", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLogs();
  }, [page, status, adminId]);

  return { logs, loading, totalPages };
}
