type Props = {
  user: any;
  selected: boolean;
  onToggleSelect: () => void;
  disableActions?: boolean;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  loading: boolean;
};

export default function RequestCard({
  user,
  selected,
  onToggleSelect,
  disableActions,
  onApprove,
  onReject,
  loading,
}: Props) {
  // const profile = user.student || user.alumni;

  return (
    // <div className="bg-white rounded-xl border p-4 shadow-sm space-y-3">
    <div
      className={`group rounded-xl border p-4 shadow-sm space-y-3 transition
        ${selected ? "bg-blue-50 border-blue-300" : "bg-white hover:border-gray-300"}
      `}
    >
      {/* Top: user info */}
      <div className="flex items-start gap-3">
        {/* Checkbox */}
        <div
          className={`transition-opacity duration-200 mt-1
            ${disableActions ? "opacity-100" : "opacity-0 group-active:opacity-100 group-focus-within:opacity-100"}
          `}
        >
          <input
            type="checkbox"
            checked={selected}
            onClick={(e) => e.stopPropagation()}
            onChange={onToggleSelect}
            className="h-4 w-4 accent-blue-600 cursor-pointer"
          />
        </div>
        <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          {user.name?.[0]}
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 truncate">{user.name}</p>
          <p className="text-sm text-gray-500 truncate">{user.email}</p>
          <p className="text-xs text-gray-400">{user.regNo}</p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2 text-xs">
        <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 font-medium">
          {user.role}
        </span>

        {user?.branch && (
          <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
            {user.branch}
          </span>
        )}

        {user?.session && (
          <span className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700">
            {user.session}
          </span>
        )}
      </div>

      <div className="flex justify-end gap-2 pt-2">
        <button
          disabled={loading || disableActions}
          onClick={() => onApprove(user.id)}
          //   className="px-3 py-1.5 rounded-md text-sm font-medium
          //              bg-green-600 text-white hover:bg-green-700
          //              disabled:opacity-50"
          // >
          className={`px-3 py-1.5 rounded-md text-sm font-medium
    ${
      disableActions
        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
        : "bg-green-600 text-white hover:bg-green-700"
    }
  `}
        >
          Approve
        </button>

        <button
          disabled={loading || loading}
          onClick={() => onReject(user.id)}
          //   className="px-3 py-1.5 rounded-md text-sm font-medium
          //              bg-red-600 text-white hover:bg-red-700
          //              disabled:opacity-50"
          // >
          className={`px-3 py-1.5 rounded-md text-sm font-medium
    ${
      disableActions
        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
        : "bg-red-600 text-white hover:bg-red-700"
    }
  `}
        >
          Reject
        </button>
      </div>
    </div>
  );
}
