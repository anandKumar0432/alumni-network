"use client";

import { useState } from "react";
import { useApprovalLogs } from "@/hooks/useApprovalLogs";
import ApprovalTimeline from "@/components/admin/ApprovalTimeline";
import { useApprovalAdmins } from "@/hooks/useApprovalAdmins";
import UserDetailsModal from "@/components/admin/UserDetailsModal";

export default function ApprovalLogsPage() {
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("");
  const [adminId, setAdminId] = useState("");
  const { logs, loading, totalPages } = useApprovalLogs(page, status, adminId);
  const { admins } = useApprovalAdmins();
  const [openUserModal, setOpenUserModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-semibold">Approval Logs</h1>
        <p className="text-sm text-gray-500">
          Track all verification and rejection actions
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <select
          value={status}
          onChange={(e) => {
            setPage(1);
            setStatus(e.target.value);
          }}
          className="px-3 py-2 border rounded-lg text-sm bg-white"
        >
          <option value="">All actions</option>
          <option value="VERIFIED">Approved</option>
          <option value="REJECTED">Rejected</option>
        </select>

        <select
          value={adminId}
          onChange={(e) => {
            setPage(1);
            setAdminId(e.target.value);
          }}
          className="px-3 py-2 border rounded-lg text-sm bg-white"
        >
          <option value="">All admins</option>
          {admins.map((admin) => (
            <option key={admin.id} value={admin.id}>
              {admin.name} ({admin.email})
            </option>
          ))}
        </select>

        {(status || adminId) && (
          <button
            onClick={() => {
              setStatus("");
              setAdminId("");
              setPage(1);
            }}
            className="text-sm text-black-600 hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>

      <ApprovalTimeline
        logs={logs}
        loading={loading}
        onSelectUser={(id: string) => {
          setSelectedUserId(id);
          setOpenUserModal(true);
        }}
      />

      {totalPages > 1 && (
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            Page {page} of {totalPages}
          </p>

          <div className="flex gap-2">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
              className="px-3 py-1.5 border rounded-lg text-sm disabled:opacity-40"
            >
              Prev
            </button>

            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
              className="px-3 py-1.5 border rounded-lg text-sm disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      )}

      <UserDetailsModal
        open={openUserModal}
        onClose={() => setOpenUserModal(false)}
        userId={selectedUserId}
      />
    </div>
  );
}
