"use client";

import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export function useApprovalAdmins() {
  const [admins, setAdmins] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/admin/approval-admins`, { withCredentials: true })
      .then((res) => setAdmins(res.data.data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return { admins, loading };
}
