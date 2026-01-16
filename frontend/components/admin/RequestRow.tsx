

type Props = {
  user: any;
  onClick: () => void;
  onVerify: (id: string) => void;
  onReject: (id: string) => void;
  loading: boolean;
};

export default function RequestRow({
  user,
  onClick,
  onVerify,
  onReject,
  loading,
}: Props) {
  const profile = user.student || user.alumni;

  return (
    // <div onClick={onclick} className="grid grid-cols-12 items-center px-5 py-4 border-b last:border-b-0 hover:bg-gray-50 transition">
    <div
      onClick={onClick}
      className="grid grid-cols-12 px-5 py-3 hover:bg-gray-50 cursor-pointer"
    >
      <div className="col-span-4">
        <p className="font-medium text-gray-900">{user.name}</p>
        <p className="text-sm text-gray-500">{user.email}</p>
        <p className="text-xs text-gray-400">{user.regNo}</p>
      </div>

      <div className="col-span-2">
        <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100">
          {user.role}
        </span>
      </div>

      <div className="col-span-2 text-gray-700">{user.branch || "—"}</div>

      <div className="col-span-2 text-gray-700">{user.session || "—"}</div>

      <div className="col-span-2 flex justify-end gap-2">
        <button
          disabled={loading}
          onClick={(e) => { 
            e.stopPropagation();
            onVerify(user.id)}}
          className="px-3 py-1.5 rounded-lg text-sm font-medium bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
        >
          {loading ? "..." : "Approve"}
        </button>

        <button
          disabled={loading}
          onClick={(e) => { 
            e.stopPropagation();
            onReject(user.id)}}
          className="px-3 py-1.5 rounded-lg text-sm font-medium bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
