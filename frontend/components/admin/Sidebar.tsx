"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, UserCheck, GraduationCap } from "lucide-react";
import clsx from "clsx";

const nav = [
  { name: "Requests", href: "/admin", icon: UserCheck },
  { name: "Students", href: "/admin/students", icon: Users },
  { name: "Alumni", href: "/alumni", icon: GraduationCap },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-6 text-xl font-bold border-b">Admin Panel</div>

      <nav className="p-4 space-y-2">
        {nav.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-4 py-2 rounded-lg transition",
                active
                  ? "bg-black text-white"
                  : "hover:bg-gray-100 text-gray-700"
              )}
            >
              <item.icon size={18} />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
