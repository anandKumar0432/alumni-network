"use client";

export default function UserDetailsModal({
  user,
  onClose,
  onVerify,
}: {
  user: any;
  onClose: () => void;
  onVerify: () => void;
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-lg rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-bold">User Details</h2>

        <div className="grid grid-cols-2 gap-4 text-sm">
          {Object.entries(user).map(([key, value]) => (
            <div key={key}>
              <p className="text-gray-500 capitalize">{key}</p>
              <p className="font-medium">{String(value)}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-3 pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border"
          >
            Cancel
          </button>
          <button
            onClick={onVerify}
            className="px-4 py-2 rounded-lg bg-green-600 text-white"
          >
            Verify User
          </button>
        </div>
      </div>
    </div>
  );
}
