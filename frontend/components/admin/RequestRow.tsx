type Props = {
  user: any;
  selected: boolean;
  onToggleSelect: () => void;
  onClick: () => void;
  onApprove: () => void;
  onReject: () => void;
  loading?: boolean;
  disableActions?: boolean;
};

export default function RequestRow({
  user,
  selected,
  onToggleSelect,
  onClick,
  onApprove,
  onReject,
  loading,
  disableActions,
}: Props) {
  return (
    <div
      onClick={onClick}
      className={`px-5 py-3 border-b transition cursor-pointer group
    ${selected ? "bg-blue-50" : "hover:bg-gray-50"}
  `}
    >
      <div className="grid grid-cols-12 items-center gap-y-2">
        {/* checkbox */}
        <div
          className={`col-span-1 flex items-center transition-opacity duration-200
            ${disableActions ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
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
        {/* User */}
        <div className="col-span-4 flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 shrink-0 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
            {user.name?.charAt(0)}
          </div>

          <div className="min-w-0">
            <p className="font-medium text-gray-900 truncate">{user.name}</p>
            <p className="text-sm text-gray-500 truncate">{user.email}</p>
            <p className="text-xs text-gray-400">{user.regNo || "—"}</p>
          </div>
        </div>

        <div className="col-span-2">
          <span className="inline-flex px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
            {user.role}
          </span>
        </div>

        <div className="col-span-2 text-sm text-gray-700">
          {user.branch || "—"}
        </div>

        <div className="col-span-2 text-sm text-gray-700">
          {user.session || "—"}
        </div>

        {/* ACTIONS (DESKTOP ONLY) */}
        <div className="hidden xl:flex col-span-1 justify-end gap-2">
          <ActionButtons
            loading={loading || disableActions}
            disabled={disableActions}
            onApprove={onApprove}
            onReject={onReject}
          />
        </div>
      </div>

      {/* SECOND ROW ACTIONS (MOBILE) */}
      <div className="mt-3 flex justify-end gap-2 xl:hidden">
        <ActionButtons
          loading={loading || disableActions}
          disabled={disableActions}
          onApprove={onApprove}
          onReject={onReject}
        />
      </div>
    </div>
  );
}

function ActionButtons({
  loading,
  disabled,
  onApprove,
  onReject,
}: {
  loading?: boolean;
  disabled?: boolean;
  onApprove: () => void;
  onReject: () => void;
}) {
  return (
    <>
      <button
        disabled={loading || disabled}
        onClick={(e) => {
          e.stopPropagation();
          if (disabled) return;
          // onVerify(user.id);
          onApprove();
        }}
        //   className="px-3 py-1.5 rounded-md text-xs font-semibold bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 whitespace-nowrap"
        // >
        className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap
          ${
            disabled
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700"
          }
        `}
      >
        Approve
      </button>

      <button
        disabled={loading || loading}
        onClick={(e) => {
          e.stopPropagation();
          if (disabled) return;
          onReject();
        }}
        //   className="px-3 py-1.5 rounded-md text-xs font-semibold bg-red-600 text-white hover:bg-red-700 disabled:opacity-50 whitespace-nowrap"
        // >
        className={`px-3 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap
          ${
            disabled
              ? "bg-gray-300 text-gray-600 cursor-not-allowed"
              : "bg-red-600 text-white hover:bg-red-700"
          }
        `}
      >
        Reject
      </button>
    </>
  );
}
