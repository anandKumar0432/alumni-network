type Props = {
  user: any;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
  loading: boolean;
};

export default function RequestCard({
  user,
  onApprove,
  onReject,
  loading,
}: Props) {
  const profile = user.student || user.alumni;

  return (
    <div className="bg-white rounded-xl border p-4 shadow-sm space-y-3">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold">
          {user.name?.[0]}
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-semibold text-gray-900 truncate">
            {user.name}
          </p>
          <p className="text-sm text-gray-500 truncate">
            {user.email}
          </p>
          <p className="text-xs text-gray-400">
            {user.regNo}
          </p>
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
          disabled={loading}
          onClick={() => onApprove(user.id)}
          className="px-3 py-1.5 rounded-md text-sm font-medium
                     bg-green-600 text-white hover:bg-green-700
                     disabled:opacity-50"
        >
          Approve
        </button>

        <button
          disabled={loading}
          onClick={() => onReject(user.id)}
          className="px-3 py-1.5 rounded-md text-sm font-medium
                     bg-red-600 text-white hover:bg-red-700
                     disabled:opacity-50"
        >
          Reject
        </button>
      </div>
    </div>
  );
}
