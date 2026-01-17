"use client";

import { useState } from "react";
import { usePendingRequests } from "@/hooks/usePendingRequests";
import RequestRow from "./RequestRow";
import { PendingFilters } from "./FiltersBar";
import UserDetailsModal from "./UserDetailsModal";
import RequestCard from "./RequestCard";

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

      {/* MOBILE VIEW */}
      <div className="md:hidden space-y-4">
        {loading ? (
          <div className="text-center text-gray-500 py-10">
            Loading pending requests...
          </div>
        ) : users.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No pending requests found
          </div>
        ) : (
          users.map((user) => (
            <RequestCard
              key={user.id}
              user={user}
              loading={actionLoadingId === user.id}
              onApprove={(id) => verifyUser(id)}
              onReject={(id) => rejectUser(id)}
            />
          ))
        )}
      </div>

      {/* DESKTOP TABLE */}
      <div className="hidden md:block bg-white rounded-xl border shadow-sm overflow-hidden">

        {/* Table header */}
        <div className="grid grid-cols-12 px-5 py-3 text-sm font-medium text-gray-600 border-b bg-gray-50 sticky top-0 z-10">
          <div className="col-span-5">User</div>
          <div className="col-span-2">Role</div>
          <div className="col-span-2">Branch</div>
          <div className="col-span-2">Session</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>

        {/* Table body */}
        {loading ? (
          <div className="p-10 text-center text-gray-500">
            Loading pending requests...
          </div>
        ) : users.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
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
              onVerify={verifyUser}
              onReject={rejectUser}
              loading={actionLoadingId === user.id}
            />
          ))
        )}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex flex-wrap justify-between items-center gap-3">
          <p className="text-sm text-gray-500">
            Page {page} of {totalPages}
          </p>

          <div className="flex items-center gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-3 py-1.5 border rounded-lg text-sm hover:bg-gray-50 disabled:opacity-40"
            >
              Prev
            </button>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-3 py-1.5 border rounded-lg text-sm hover:bg-gray-50 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* USER MODAL */}
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
