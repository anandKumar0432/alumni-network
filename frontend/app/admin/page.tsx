"use client";

import RequestTable from "@/components/admin/RequestTable";

export default function AdminPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-2xl font-bold">Pending Requests</h1>
            <RequestTable />
        </div>
    );
}