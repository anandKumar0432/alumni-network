"use client";

import { useState } from "react";
import { usePendingRequests } from "@/hooks/usePendingRequests";
import RequestRow from "./RequestRow";
import { PendingFilters } from "./FiltersBar";
import UserDetailsModal from "./UserDetailsModal";

type Props = {
  filters: PendingFilters;
};

export default function RequestTable({ filters }: Props) {
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const {
    users,
    loading,
    verifyUser,
    rejectUser,
    actionLoadingId,
    totalPages,
  } = usePendingRequests(filters, page);

  return (
    <div className="space-y-5">
      {/* ✅ Table */}
      <div className="bg-white rounded-2xl border overflow-hidden">
        {/* Header */}
        <div className="grid grid-cols-12 px-5 py-3 text-sm font-medium text-gray-600 border-b bg-gray-50">
          <div className="col-span-4">User</div>
          <div className="col-span-2">Role</div>
          <div className="col-span-2">Branch</div>
          <div className="col-span-2">Session</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        {/* Body */}
        {loading ? (
          <div className="p-6 text-center text-gray-500">
            Loading pending requests...
          </div>
        ) : users.length === 0 ? (
          <div className="p-6 text-center text-gray-500">
            No pending requests found
          </div>
        ) : (
          users.map((user) => (
            <RequestRow
              key={user.id}
              user={user}
              onClick={() => {
                setSelectedUser(user);
                setOpen(true);
              }}
              loading={actionLoadingId === user.id}
            />
          ))
        )}
      </div>

      {/* ✅ Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-3">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-3 py-1.5 border rounded-lg disabled:opacity-40"
          >
            Prev
          </button>

          <span className="text-sm text-gray-600">
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-3 py-1.5 border rounded-lg disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}

      <UserDetailsModal
        open={open}
        onClose={() => setOpen(false)}
        user={selectedUser}
        loading={actionLoadingId === selectedUser?.id}
        onVerify={() => verifyUser(selectedUser.id)}
        onReject={() => rejectUser(selectedUser.id)}
      />
    </div>
  );
}
