"use client";

import { useState } from "react";
import { usePendingRequests } from "@/hooks/usePendingRequests";
import UserDetailsModal from "./UserDetailsModal";

export default function RequestTable() {
    const { users, loading, verifyUser } = usePendingRequests();
    const [selected, setSelected] = useState<any>(null);

    if (loading) return <p>Loading requests...</p>
    if (!users.length) return <p>No pending requests</p>

    return (
        <>
            <div className="bg-white rounded-xl shadow overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3">Reg No</th>
              <th className="p-3">Branch</th>
              <th className="p-3">Session</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u) => (
              <tr
                key={u.id}
                className="border-t hover:bg-gray-50 cursor-pointer"
                onClick={() => setSelected(u)}
              >
                <td className="p-3">{u.name}</td>
                <td className="p-3 text-center">{u.regNo}</td>
                <td className="p-3 text-center">{u.branch}</td>
                <td className="p-3 text-center">{u.session}</td>
                <td
                  className="p-3 text-center"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => verifyUser(u.id)}
                    className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700"
                  >
                    Verify
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selected && (
        <UserDetailsModal
          user={selected}
          onClose={() => setSelected(null)}
          onVerify={() => {
            verifyUser(selected.id);
            setSelected(null);
          }}
        />
      )}
    </>
    );
}