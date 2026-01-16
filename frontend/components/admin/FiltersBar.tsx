"use client";

import React, { useEffect, useState } from "react";

export type PendingFilters = {
  search: string;
  branch: string;
  role: string;
  session: string;
};

type Props = {
  filters: PendingFilters;
  setFilters: React.Dispatch<React.SetStateAction<PendingFilters>>;
};

export default function FiltersBar({ filters, setFilters }: Props) {
  const [searchValue, setSearchValue] = useState(filters.search);

  // 🔁 debounce search
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFilters((prev) => ({ ...prev, search: searchValue }));
    }, 400);

    return () => clearTimeout(timeout);
  }, [searchValue, setFilters]);

  const clearFilters = () => {
    setSearchValue("");
    setFilters({
      search: "",
      branch: "",
      role: "",
      session: "",
    });
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

      {/* 🔍 Search */}
      <div className="w-full md:w-96">
        <input
          type="text"
          placeholder="Search by name, email or reg no"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-black/10"
        />
      </div>

      {/* 🎛 Filters */}
      <div className="flex flex-wrap gap-3 items-center">

        {/* Branch */}
        <select
          value={filters.branch}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, branch: e.target.value }))
          }
          className="border border-gray-300 px-3 py-2 rounded-xl bg-white"
        >
          <option value="">All Branches</option>
          <option value="CSE">CSE</option>
          <option value="ECE">ECE</option>
          <option value="ME">ME</option>
          <option value="CE">CE</option>
          <option value="EE">EE</option>
        </select>

        {/* Role */}
        <select
          value={filters.role}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, role: e.target.value }))
          }
          className="border border-gray-300 px-3 py-2 rounded-xl bg-white"
        >
          <option value="">All Roles</option>
          <option value="STUDENT">Student</option>
          <option value="ALUMNI">Alumni</option>
        </select>

        {/* Session */}
        <select
          value={filters.session}
          onChange={(e) =>
            setFilters((prev) => ({ ...prev, session: e.target.value }))
          }
          className="border border-gray-300 px-3 py-2 rounded-xl bg-white"
        >
          <option value="">All Sessions</option>
          <option value="2017-21">2017-21</option>
          <option value="2018-22">2018-22</option>
          <option value="2019-23">2019-23</option>
          <option value="2020-24">2020-24</option>
          <option value="2021-25">2021-25</option>
        </select>

        {/* Clear */}
        <button
          onClick={clearFilters}
          className="px-3 py-2 rounded-xl border border-gray-300 text-sm hover:bg-gray-100 transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
