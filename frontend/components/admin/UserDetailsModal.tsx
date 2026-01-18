"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

type Props = {
  open: boolean;
  onClose: () => void;
  user: any;
  onVerify: () => void;
  onReject: () => void;
  loading?: boolean;
};

export default function UserDetailsModal({
  open,
  onClose,
  user,
  onVerify,
  onReject,
  loading,
}: Props) {
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

        <div className="flex justify-end gap-3 pt-4">
          <Button
            variant="destructive"
            onClick={onReject}
            disabled={loading}
          >
            Reject
          </Button>
          <Button className="bg-green-700" onClick={onVerify} disabled={loading}>
            Approve
          </Button>
        </div>
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
