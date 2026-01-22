"use client";

type Filters = {
  search: string;
  branch: string;
  session: string;
  year: string;
};

type Props = {
  filters: Filters;
  onChange: (filters: Filters) => void;
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
          <option value="">All Branches</option>
          <option value="CSE">CSE</option>
          <option value="IT">IT</option>
          <option value="ECE">ECE</option>
          <option value="ME">ME</option>
          <option value="EEE">EEE</option>
          <option value="CE">CE</option>
          <option value="VLSI">VLSI</option>
          <option value="FPP">FPP</option>
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
