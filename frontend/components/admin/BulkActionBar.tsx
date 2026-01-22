"use client";

type Props = {
  count: number;
  total: number;
  onApprove: () => void;
  onReject: () => void;
  onSelectAll: () => void;
  onClear: () => void;
  loading?: boolean;
};

export default function BulkActionBar({
  count,
  total,
  onApprove,
  onReject,
  onSelectAll,
  onClear,
  loading = false,
}: Props) {
  if (count === 0) return null;

  const allSelected = count === total;

  return (
    <div className=" bg-white border rounded-xl shadow-sm px-4 py-3 flex flex-wrap items-center justify-between gap-3">
      <div className="flex items-center gap-3">
        <p className="text-sm text-gray-700">
          <span className="font-semibold">{count}</span> selected
        </p>

        {!allSelected && (
          <button
            onClick={onSelectAll}
            disabled={loading}
            className="text-sm font-medium text-black-600 hover:underline cursor-pointer disabled:opacity-50"
          >
            Select all
          </button>
        )}
      </div>

      <div className="flex gap-2">
        <button
          disabled={loading}
          onClick={onApprove}
          className="px-3 py-1.5 rounded-lg text-sm bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "Approving..." : "Approve"}
        </button>

        <button
          disabled={loading}
          onClick={onReject}
          className="px-3 py-1.5 rounded-lg text-sm bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
        >
          {loading ? "Rejecting..." : "Reject"}
        </button>

        <button
          disabled={loading}
          onClick={onClear}
          className="px-3 py-1.5 rounded-lg text-sm border hover:bg-gray-50 disabled:opacity-50"
        >
          Clear
        </button>
      </div>
    </div>
  );
}
