"use client";

import { X, CheckCircle, XCircle } from "lucide-react";

type Props = {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  loading?: boolean;
  type: "approve" | "reject";
  user?: any;
};

export default function ConfirmActionModal({
  open,
  onClose,
  onConfirm,
  loading = false,
  type,
  user,
}: Props) {
  if (!open) return null;

  const isApprove = type === "approve";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-5 relative animate-in fade-in zoom-in-95">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 p-2 rounded-lg hover:bg-gray-100"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        {/* Icon */}
        <div
          className={`mx-auto w-14 h-14 flex items-center justify-center rounded-full ${
            isApprove ? "bg-green-100" : "bg-red-100"
          }`}
        >
          {isApprove ? (
            <CheckCircle className="w-7 h-7 text-green-600" />
          ) : (
            <XCircle className="w-7 h-7 text-red-600" />
          )}
        </div>

        {/* Title */}
        <h2 className="text-lg font-semibold text-center mt-4">
          {isApprove ? "Approve User?" : "Reject User?"}
        </h2>

        {/* Message */}
        <p className="text-sm text-gray-600 text-center mt-1">
          {isApprove
            ? "This user will get access to the platform."
            : "This request will be permanently rejected."}
        </p>

        {/* User preview */}
        {user && (
          <div className="mt-4 p-3 border rounded-xl bg-gray-50">
            <p className="font-medium text-gray-900">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
            <p className="text-xs text-gray-400">{user.regNo}</p>
          </div>
        )}

        {/* Actions */}
        <div className="mt-5 flex gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 border rounded-xl py-2.5 text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            disabled={loading}
            className={`flex-1 rounded-xl py-2.5 text-sm font-medium text-white flex items-center justify-center gap-2
              ${isApprove ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}
              disabled:opacity-60`}
          >
            {loading && (
              <span className="w-4 h-4 border-2 border-white/60 border-t-white rounded-full animate-spin" />
            )}
            {isApprove ? "Approve" : "Reject"}
          </button>
        </div>
      </div>
    </div>
  );
}
