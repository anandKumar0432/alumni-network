"use client";

import { useState } from "react";
import FiltersBar, { PendingFilters } from "@/components/admin/FiltersBar";
import RequestTable from "@/components/admin/RequestTable";

export default function AdminPage() {
  const [filters, setFilters] = useState<PendingFilters>({
    search: "",
    branch: "",
    role: "",
    session: "",
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Pending Requests</h1>
        <p className="text-sm text-gray-500">
          Verify or reject newly registered users
        </p>
      </div>

      <FiltersBar filters={filters} setFilters={setFilters} />

      <RequestTable filters={filters} />
    </div>
  );
}
