"use client";

import { AlumniFilters, branchOptions } from "@/components/alumni/alumniFilters";

type Props = {
  filters: AlumniFilters;
  onChange: (filters: AlumniFilters) => void;
  onApply: () => void;
  onClear: () => void;
};

export default function AlumniMobileFilters({
  filters,
  onChange,
  onApply,
  onClear,
}: Props) {
  return (
    <div className="space-y-5">
      <div>
        <label className="block text-sm font-medium mb-1">Branch</label>
        <select
          className="w-full h-11 rounded-xl border px-3 bg-background"
          value={filters.branch}
          onChange={(e) =>
            onChange({ ...filters, branch: e.target.value })
          }
        >
          {branchOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Session</label>
        <input
          placeholder="e.g. 2023-27"
          className="w-full h-11 rounded-xl border px-3 bg-background"
          value={filters.session}
          onChange={(e) =>
            onChange({ ...filters, session: e.target.value })
          }
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Passing year</label>
        <input
          type="number"
          placeholder="e.g. 2026"
          className="w-full h-11 rounded-xl border px-3 bg-background"
          value={filters.year}
          onChange={(e) =>
            onChange({ ...filters, year: e.target.value })
          }
        />
      </div>

      <div className="flex gap-3 pt-4">
        <button
          onClick={onClear}
          className="flex-1 h-11 rounded-xl border"
        >
          Clear
        </button>
        <button
          onClick={onApply}
          className="flex-1 h-11 rounded-xl bg-black text-white"
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
