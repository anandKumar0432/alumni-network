export default function AlumniCardSkeleton() {
  return (
    <div className="relative overflow-hidden rounded-3xl border bg-white/80 shadow-sm">

      {/* shimmer */}
      <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-gradient-to-r from-transparent via-white/60 to-transparent" />

      {/* image skeleton */}
      <div className="h-52 w-full bg-gray-200" />

      {/* content */}
      <div className="p-5 space-y-3">
        {/* name */}
        <div className="h-4 w-3/4 rounded bg-gray-200" />

        {/* meta */}
        <div className="h-3 w-1/2 rounded bg-gray-200" />

        {/* tags */}
        <div className="flex gap-2 pt-2">
          <div className="h-6 w-14 rounded-full bg-gray-200" />
          <div className="h-6 w-20 rounded-full bg-gray-200" />
        </div>

        {/* footer */}
        <div className="pt-4 flex items-center justify-between">
          <div className="h-3 w-20 rounded bg-gray-200" />
          <div className="h-8 w-24 rounded-full bg-gray-200" />
        </div>
      </div>
    </div>
  );
}
