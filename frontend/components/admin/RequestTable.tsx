"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePendingRequests } from "@/hooks/usePendingRequests";
import RequestRow from "./RequestRow";
import { PendingFilters } from "./FiltersBar";
import UserDetailsModal from "./UserDetailsModal";
import RequestCard from "./RequestCard";
import RequestRowSkeleton from "./RequestRowSkeleton";
import RequestCardSkeleton from "./RequestCardSkeleton";
import ConfirmActionModal from "./ConfirmActionModal";

type Props = {
  filters: PendingFilters;
};

export default function RequestTable({ filters }: Props) {
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [actionType, setActionType] = useState<"approve" | "reject">("approve");
  const [list, setList] = useState<any[]>([]);

  const {
    users,
    loading,
    verifyUser,
    rejectUser,
    actionLoadingId,
    totalPages,
  } = usePendingRequests(filters, page);

  useEffect(() => {
    setList(users);
  }, [users]);

  return (
    <div className="space-y-5">
      <div className="md:hidden space-y-4">
        {loading ? (
          <>
            {Array.from({ length: 4 }).map((_, i) => (
              <RequestCardSkeleton key={i} />
            ))}
          </>
        ) : users.length === 0 ? (
          <div className="text-center text-gray-500 py-10">
            No pending requests found
          </div>
        ) : (
          <AnimatePresence>
            {list.map((user) => (
              <motion.div
                key={user.id}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25 }}
              >
                <RequestCard
                  user={user}
                  loading={actionLoadingId === user.id}
                  onApprove={() => {
                    setSelectedUser(user);
                    setActionType("approve");
                    setConfirmOpen(true);
                  }}
                  onReject={() => {
                    setSelectedUser(user);
                    setActionType("reject");
                    setConfirmOpen(true);
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

      <div className="hidden md:block bg-white rounded-xl border shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 px-5 py-3 text-sm font-medium text-gray-600 border-b bg-gray-50 sticky top-0 z-10">
          <div className="col-span-5">User</div>
          <div className="col-span-2">Role</div>
          <div className="col-span-2">Branch</div>
          <div className="col-span-2">Session</div>
          <div className="col-span-1 text-right">Actions</div>
        </div>

        {loading ? (
          <>
            {Array.from({ length: 6 }).map((_, i) => (
              <RequestRowSkeleton key={i} />
            ))}
          </>
        ) : users.length === 0 ? (
          <div className="p-10 text-center text-gray-500">
            No pending requests found
          </div>
        ) : (
          <AnimatePresence>
            {list.map((user) => (
              <motion.div
                key={user.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, height: 0, margin: 0, padding: 0 }}
                transition={{ duration: 0.25 }}
              >
                <RequestRow
                  user={user}
                  onClick={() => {
                    setSelectedUser(user);
                    setOpen(true);
                  }}
                  onApprove={() => {
                    setSelectedUser(user);
                    setActionType("approve");
                    setConfirmOpen(true);
                  }}
                  onReject={() => {
                    setSelectedUser(user);
                    setActionType("reject");
                    setConfirmOpen(true);
                  }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

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

      <ConfirmActionModal
        open={confirmOpen}
        onClose={() => setConfirmOpen(false)}
        user={selectedUser}
        type={actionType}
        loading={actionLoadingId === selectedUser?.id}
        onConfirm={async () => {
          if (!selectedUser) return;

          if (actionType === "approve") {
            await verifyUser(selectedUser.id);
          } else {
            await rejectUser(selectedUser.id);
          }

          setList((prev) => prev.filter((u) => u.id !== selectedUser.id));
          setConfirmOpen(false);
          setOpen(false);
        }}
      />

      <UserDetailsModal
        open={open}
        onClose={() => setOpen(false)}
        userId={selectedUser?.id}
        showActions
        loading={actionLoadingId === selectedUser?.id}
        onVerify={() => verifyUser(selectedUser.id)}
        onReject={() => rejectUser(selectedUser.id)}
      />
    </div>
  );
}
