export default function AlumniCardSkeleton() {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-white shadow-md p-5 animate-pulse">

      <div className="h-44 w-full bg-gray-200 rounded-xl mb-4" />

      <div className="h-4 bg-gray-200 rounded w-3/4 mb-2" />
      <div className="h-3 bg-gray-200 rounded w-1/2 mb-4" />

      <div className="flex gap-4">
        <div className="h-6 w-6 bg-gray-200 rounded-full" />
        <div className="h-6 w-6 bg-gray-200 rounded-full" />
        <div className="h-6 w-6 bg-gray-200 rounded-full" />
      </div>
    </div>
  );
}
