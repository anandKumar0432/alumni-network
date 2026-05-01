"use client";

import { AlumniFilters, branchOptions } from "@/components/alumni/alumniFilters";

type Props = {
  filters: AlumniFilters;
  onChange: (filters: AlumniFilters) => void;
  onResetPage: () => void;
};

export default function AlumniDesktopFilters({
  filters,
  onChange,
  onResetPage,
}: Props) {
  return (
    <>
      <select
        className="h-11 rounded-xl border px-3 bg-background"
        value={filters.branch}
        onChange={(e) => {
          onChange({ ...filters, branch: e.target.value });
          onResetPage();
        }}
      >
        {branchOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <input
        placeholder="Session (e.g. 2023-27)"
        className="h-11 rounded-xl border px-3 bg-background"
        value={filters.session}
        onChange={(e) => {
          onChange({ ...filters, session: e.target.value });
          onResetPage();
        }}
      />

      <input
        type="number"
        placeholder="Passing year"
        className="h-11 rounded-xl border px-3 bg-background"
        value={filters.year}
        onChange={(e) => {
          onChange({ ...filters, year: e.target.value });
          onResetPage();
        }}
      />
    </>
  );
}
