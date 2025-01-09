"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { Home, User, BarChart } from "lucide-react";

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuth();

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/profile", label: "Profile", icon: User },
  ];

  if (user?.role === "ADMIN") {
    links.push({
      href: "/admin/dashboard",
      label: "Dashboard",
      icon: BarChart,
    });
  }

  return (
    <div className="flex flex-col w-64 bg-gray-800">
      <div className="flex items-center justify-center h-16 bg-gray-900">
        <span className="text-white text-lg font-semibold">Menu</span>
      </div>
      <nav className="flex-1 overflow-y-auto">
        <ul className="py-4">
          {links.map((link) => (
            <li key={link.href} className="px-5 py-2">
              <Link
                href={link.href}
                className={cn(
                  "flex items-center text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-2 py-2 text-sm font-medium",
                  pathname === link.href && "bg-gray-900 text-white"
                )}
              >
                <link.icon className="mr-3 h-6 w-6" />
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
