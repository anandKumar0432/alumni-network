"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/admin/Sidebar";
import AdminGuard from "@/components/admin/AdminGuard";
import AdminTopbar from "@/components/admin/AdminTopbar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AdminGuard>
      <div className="pt-16 h-screen bg-gray-100">
        <div className="flex h-[calc(100vh-64px)] overflow-hidden">

          <Sidebar
            open={open}
            setOpen={setOpen}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          />

          <div className="flex flex-col flex-1 min-w-0 overflow-hidden">

            <div className="shrink-0">
              <AdminTopbar onMenuClick={() => setOpen(true)} />
            </div>

            <main className="flex-1 overflow-y-auto p-4 md:p-6">
              {children}
            </main>

          </div>
        </div>
      </div>
    </AdminGuard>
  );
}