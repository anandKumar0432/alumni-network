"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, UserCheck, GraduationCap, Menu, X } from "lucide-react";
import clsx from "clsx";

const nav = [
  { name: "Requests", href: "/admin", icon: UserCheck },
  { name: "Students", href: "/admin/students", icon: Users },
  { name: "Alumni", href: "/alumni", icon: GraduationCap },
];

type Props = {
  open: boolean;
  setOpen: (v: boolean) => void;
  collapsed: boolean;
  setCollapsed: (v: boolean) => void;
};

export default function Sidebar({
  open,
  setOpen,
  collapsed,
  setCollapsed,
}: Props) {
  const pathname = usePathname();

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={clsx(
          "bg-white border-r flex flex-col transition-all duration-300",
          "h-full", 
          "fixed md:static z-50",
          collapsed ? "w-[72px]" : "w-64",
          open ? "left-0" : "-left-full md:left-0",
        )}
      >


        {/* Header */}
        <div className="h-14 px-4 flex items-center justify-between border-b">
          <div className="flex items-center gap-2 font-bold text-lg">
            <GraduationCap className="text-black-600" />
            {!collapsed && <span>KEC Admin</span>}
          </div>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="hidden md:flex p-2 rounded-lg hover:bg-gray-100"
          >
            <Menu size={18} />
          </button>

          <button
            onClick={() => setOpen(false)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={18} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {nav.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={clsx(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition",
                  active
                    ? "bg-blue-50 text-black-600"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900",
                )}
              >
                <item.icon size={20} />
                {!collapsed && <span>{item.name}</span>}

                {active && !collapsed && (
                  <span className="ml-auto h-2 w-2 rounded-full bg-blue-600" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-3 border-t text-xs text-gray-500">
          {!collapsed && "KEC Connect Admin Panel"}
        </div>
      </aside>
    </>
  );
}
