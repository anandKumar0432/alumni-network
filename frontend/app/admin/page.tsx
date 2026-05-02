"use client";

import { useState } from "react";
import FiltersBar, { PendingFilters } from "@/components/admin/FiltersBar";
import RequestTable from "@/components/admin/RequestTable";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  const [filters, setFilters] = useState<PendingFilters>({
    search: "",
    branch: "",
    role: "",
    session: "",
  });

  function onClickHandler(){
      return(
        <FiltersBar filters={filters} setFilters={setFilters}></FiltersBar>
      )
  }

  return (
    <div className="space-y-6">
      <div>
        <div className="flex justify-between">
          <h1 className="text-2xl font-bold">Pending Requests</h1>
          <div>
            <Button className="hover: cursor-pointer" onClick={onClickHandler} >Exports data</Button>
          </div>
        </div>
        <p className="text-sm text-gray-500">
          Verify or reject newly registered users
        </p>
      </div>

      <FiltersBar filters={filters} setFilters={setFilters} />

      <RequestTable filters={filters} />
    </div>
  );
}
