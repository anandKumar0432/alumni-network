export default function RequestRowSkeleton() {
  return (
    <div className="grid grid-cols-12 px-5 py-4 items-center animate-pulse border-b">
      <div className="col-span-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gray-200" />
        <div className="space-y-2">
          <div className="h-4 w-32 bg-gray-200 rounded" />
          <div className="h-3 w-40 bg-gray-100 rounded" />
          <div className="h-3 w-24 bg-gray-100 rounded" />
        </div>
      </div>

      <div className="col-span-2">
        <div className="h-6 w-20 bg-gray-200 rounded-full mx-auto" />
      </div>

      <div className="col-span-2">
        <div className="h-4 w-12 bg-gray-200 rounded mx-auto" />
      </div>

      <div className="col-span-2">
        <div className="h-4 w-24 bg-gray-200 rounded mx-auto" />
      </div>

      <div className="col-span-2 flex gap-3 justify-end">
        <div className="h-9 w-20 bg-gray-200 rounded-lg" />
        <div className="h-9 w-20 bg-gray-200 rounded-lg" />
      </div>
    </div>
  );
}
