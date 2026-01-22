import { useEffect, useState } from "react";
import axios from "axios";

const API = process.env.NEXT_PUBLIC_BACKEND_URL;

type LogStats = {
    totalLogs: number;
    todayLogs: number;
    approvedCount: number;
    rejectedCount: number;
    // pendingUsers: number;
};

export function useApprovalLogStats() {
    const [stats, setStats] = useState<LogStats | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const res = await axios.get(`${API}/admin/logs/stats`, {
                    withCredentials: true,
                });
                setStats(res.data);
            } catch (err) {
                console.error("Stats fetch failed", err);
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    return { stats, loading };
}