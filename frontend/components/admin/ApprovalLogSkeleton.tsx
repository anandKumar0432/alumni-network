export default function ApprovalLogSkeleton() {
  return (
    <li className="ml-6 animate-pulse">
      {/* Dot */}
      <span className="absolute -left-3 flex items-center justify-center w-6 h-6 rounded-full bg-gray-200 ring-8 ring-white" />

      {/* Card */}
      <div className="p-4 bg-gray-50 rounded-xl border space-y-2">
        {/* line 1 */}
        <div className="h-4 w-3/4 bg-gray-200 rounded" />

        {/* line 2 */}
        <div className="h-4 w-2/3 bg-gray-100 rounded" />

        {/* time */}
        <div className="h-3 w-32 bg-gray-100 rounded mt-2" />
      </div>
    </li>
  );
}
