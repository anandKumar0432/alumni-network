export default function RequestCardSkeleton() {
  return (
    <div className="bg-white border rounded-2xl p-4 shadow-sm animate-pulse space-y-4">
      {/* Top section */}
      <div className="flex items-start gap-3">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gray-200 shrink-0" />

        {/* Name + email + reg */}
        <div className="flex-1 space-y-2">
          <div className="h-4 w-40 bg-gray-200 rounded" />
          <div className="h-3 w-48 bg-gray-100 rounded" />
          <div className="h-3 w-24 bg-gray-100 rounded" />
        </div>
      </div>

      {/* Chips row */}
      <div className="flex flex-wrap gap-2">
        <div className="h-6 w-20 rounded-full bg-gray-200" />
        <div className="h-6 w-14 rounded-full bg-gray-200" />
        <div className="h-6 w-24 rounded-full bg-gray-200" />
      </div>

      {/* Action buttons */}
      <div className="flex justify-end gap-3 pt-2">
        <div className="h-9 w-24 rounded-lg bg-gray-200" />
        <div className="h-9 w-24 rounded-lg bg-gray-200" />
      </div>
    </div>
  );
}
