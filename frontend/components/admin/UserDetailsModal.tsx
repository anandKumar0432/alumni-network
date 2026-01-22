"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

type Props = {
  open: boolean;
  onClose: () => void;
  userId: string | null;
  onVerify?: () => void;
  onReject?: () => void;
  loading?: boolean;
  showActions?: boolean;
};

export default function UserDetailsModal({
  open,
  onClose,
  userId,
  onVerify,
  onReject,
  loading,
  showActions = false,
}: Props) {
  const [user, setUser] = useState<any>(null);
  const [fetching, setFetching] = useState(false);

  useEffect(() => {
    if (!userId || !open) return;

    const fetchUser = async () => {
      try {
        setFetching(true);
        const res = await axios.get(`${BACKEND_URL}/admin/me/${userId}`, {
          withCredentials: true,
        });
        // Explicitly type res.data as any to satisfy the linter
        const data: any = res.data;
        setUser(data.user || data);
      } catch (err) {
        console.error("Failed to fetch user", err);
      } finally {
        setFetching(false);
      }
    };

    fetchUser();
  }, [userId, open]);

  if (!user) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Registration Details</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <Field label="Name" value={user.name} />
          <Field label="Email" value={user.email} />
          <Field label="Reg No" value={user.regNo} />
          <Field label="Branch" value={user.branch} />
          <Field label="Session" value={user.session} />
          <Field label="College" value={user.college} />
          <Field label="Role" value={user.role} />
          <Field label="Status" value={user.status} />
        </div>

        {showActions && (
          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="destructive"
              onClick={onReject}
              disabled={loading || !onReject}
            >
              Reject
            </Button>
            <Button
              className="bg-green-700"
              onClick={onVerify}
              disabled={loading || !onVerify}
            >
              Approve
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-gray-500 text-xs">{label}</p>
      <p className="font-medium">{value || "-"}</p>
    </div>
  );
}
