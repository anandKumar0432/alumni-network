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

  // debounce search
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

      {/* Search */}
      <div className="w-full md:w-96">
        <input
          type="text"
          placeholder="Search by name, email or reg no"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="w-full px-4 py-2.5 border border-gray-300 rounded-xl outline-none focus:ring-2 focus:ring-black/10"
        />
      </div>

      {/* Filters */}
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
          <option value="2017-21">2016-2020</option>
          <option value="2018-22">2017-2021</option>
          <option value="2019-23">2018-2022</option>
          <option value="2020-24">2019-2023</option>
          <option value="2021-25">2020-2024</option>
          <option value="2021-25">2021-2025</option>
          <option value="2021-25">2022-2026</option>
          <option value="2021-25">2023-2027</option>
          <option value="2021-25">2024-2028</option>
          <option value="2021-25">2025-2029</option>
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

    // <div className="bg-white rounded-xl border p-4 space-y-4">
    //   {/* Top row: Search */}
    //   <div className="w-full">
    //     <input
    //       type="text"
    //       placeholder="Search by name, email or reg no"
    //       value={searchValue}
    //       onChange={(e) => setSearchValue(e.target.value)}
    //       className="w-full h-10 px-3 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
    //     />
    //   </div>

    //   {/* Filters */}
    //   <div
    //     className="
    //   grid grid-cols-1 gap-3
    //   sm:grid-cols-2
    //   lg:grid-cols-4
    // "
    //   >
    //     <select
    //       value={filters.branch}
    //       onChange={(e) =>
    //         setFilters((prev) => ({ ...prev, branch: e.target.value }))
    //       }
    //       className="filter-input"
    //     >
    //       <option>All Branches</option>
    //       <option value="CSE">CSE</option>
    //       <option value="ECE">ECE</option>
    //       <option value="ME">ME</option>
    //       <option value="CE">CE</option>
    //       <option value="EE">EE</option>
    //     </select>

    //     <select
    //       value={filters.role}
    //       onChange={(e) =>
    //         setFilters((prev) => ({ ...prev, role: e.target.value }))
    //       }
    //       className="filter-input"
    //     >
    //       <option>All Roles</option>
    //       <option value="STUDENT">Student</option>
    //       <option value="ALUMNI">Alumni</option>
    //     </select>

    //     <select
    //       value={filters.session}
    //       onChange={(e) =>
    //         setFilters((prev) => ({ ...prev, session: e.target.value }))
    //       }
    //       className="filter-input"
    //     >
    //       <option>All Sessions</option>
    //       <option value="2017-21">2016-2020</option>
    //       <option value="2018-22">2017-2021</option>
    //       <option value="2019-23">2018-2022</option>
    //       <option value="2020-24">2019-2023</option>
    //       <option value="2021-25">2020-2024</option>
    //       <option value="2021-25">2021-2025</option>
    //       <option value="2021-25">2022-2026</option>
    //       <option value="2021-25">2023-2027</option>
    //       <option value="2021-25">2024-2028</option>
    //       <option value="2021-25">2025-2029</option>
    //     </select>

    //     <button
    //       onClick={clearFilters}
    //       className="h-10 rounded-lg border text-sm hover:bg-gray-100"
    //     >
    //       Clear
    //     </button>
    //   </div>
    // </div>
  );
}
