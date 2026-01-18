export default function RequestRow({
  user,
  onClick,
  onVerify,
  onReject,
  loading,
}: Props) {
  return (
    <div
      onClick={onClick}
      className="px-5 py-3 border-b hover:bg-gray-50 transition cursor-pointer"
    >
      {/* MAIN ROW */}
      <div className="grid grid-cols-12 items-center gap-y-2">

        {/* User */}
        <div className="col-span-5 flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
            {user.name?.charAt(0)}
          </div>

          <div className="min-w-0">
            <p className="font-medium text-gray-900 truncate">{user.name}</p>
            <p className="text-sm text-gray-500 truncate">{user.email}</p>
            <p className="text-xs text-gray-400">{user.regNo || "—"}</p>
          </div>
        </div>

        {/* Role */}
        <div className="col-span-2">
          <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
            {user.role}
          </span>
        </div>

        {/* Branch */}
        <div className="col-span-2 text-sm text-gray-700">
          {user.branch || "—"}
        </div>

        {/* Session */}
        <div className="col-span-2 text-sm text-gray-700">
          {user.session || "—"}
        </div>

        {/* INLINE ACTIONS (DESKTOP ONLY) */}
        <div className="hidden xl:flex col-span-1 justify-end gap-2">
          <ActionButtons {...{ user, loading, onVerify, onReject }} />
        </div>
      </div>

      {/* SECOND ROW ACTIONS (TABLET + MOBILE) */}
      <div className="mt-3 flex justify-end gap-2 xl:hidden">
        <ActionButtons {...{ user, loading, onVerify, onReject }} />
      </div>
    </div>
  );
}

function ActionButtons({ user, loading, onVerify, onReject }: any) {
  return (
    <>
      <button
        disabled={loading}
        onClick={(e) => {
          e.stopPropagation();
          onVerify(user.id);
        }}
        className="px-3 py-1.5 rounded-md text-xs font-semibold bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 whitespace-nowrap"
      >
        Approve
      </button>

      <button
        disabled={loading}
        onClick={(e) => {
          e.stopPropagation();
          onReject(user.id);
        }}
        className="px-3 py-1.5 rounded-md text-xs font-semibold bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 whitespace-nowrap"
      >
        Reject
      </button>
    </>
  );
}


