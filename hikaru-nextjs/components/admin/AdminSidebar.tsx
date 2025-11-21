"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import { 
  HomeIcon, 
  UserIcon, 
  LightBulbIcon, 
  CodeBracketIcon,
  ArrowRightOnRectangleIcon 
} from "@heroicons/react/24/outline";

interface NavItem {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

const navItems: NavItem[] = [
  { name: "Dashboard", href: "/admin", icon: HomeIcon },
  { name: "Profile", href: "/admin/profile", icon: UserIcon },
  { name: "Expertise", href: "/admin/expertise", icon: LightBulbIcon },
  { name: "Projects", href: "/admin/projects", icon: CodeBracketIcon },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  const handleSignOut = () => {
    signOut({ callbackUrl: "/" });
  };

  return (
    <aside className="w-64 bg-bs-black border-r-2 border-bs-cyan min-h-screen flex flex-col">
      {/* Header */}
      <div className="p-6 border-b-2 border-bs-cyan">
        <h1 className="text-2xl font-bold text-bs-cyan text-glow-cyan">
          BLACK SUN
        </h1>
        <p className="text-xs text-bs-gray font-mono mt-1">ADMIN PANEL</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded font-mono text-sm
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-bs-cyan text-bs-black shadow-neon-cyan"
                        : "text-bs-white hover:bg-bs-cyan/10 hover:border-bs-cyan border border-transparent"
                    }
                  `}
                >
                  <Icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t-2 border-bs-cyan">
        <button
          onClick={handleSignOut}
          className="w-full flex items-center gap-3 px-4 py-3 rounded font-mono text-sm text-bs-white hover:bg-bs-red/20 hover:border-bs-red border border-transparent transition-all duration-300"
        >
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          <span>Sign Out</span>
        </button>
        
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="inline-block w-2 h-2 bg-bs-green rounded-full animate-pulse"></span>
          <span className="text-xs text-bs-gray">SYSTEM ONLINE</span>
        </div>
      </div>
    </aside>
  );
}
