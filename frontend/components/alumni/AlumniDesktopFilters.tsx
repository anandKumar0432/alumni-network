"use client";

type Filters = {
  branch: string;
  session: string;
  year: string;
};

type Props = {
  filters: Filters;
  onChange: (filters: Filters) => void;
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
