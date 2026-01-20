"use client";

type Props = {
  count: number;
  onApprove: () => void;
  onReject: () => void;
  onClear: () => void;
  loading?: boolean;
};

export default function BulkActionBar({
  count,
  onApprove,
  onReject,
  onClear,
  loading = false,
}: Props) {
  if (count === 0) return null;

  return (
    <div className="sticky top-2 z-20 bg-white border rounded-xl shadow-sm px-4 py-3 flex flex-wrap items-center justify-between gap-3">
      <p className="text-sm text-gray-700">
        <span className="font-semibold">{count}</span> selected
      </p>

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
