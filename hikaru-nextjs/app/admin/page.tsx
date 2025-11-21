"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import AdminLayoutWrapper from "@/components/admin/AdminLayoutWrapper";
import { AdminCard } from "@/components/admin/AdminComponents";
import { PortfolioData } from "@/types/portfolio";

export default function AdminDashboard() {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading portfolio:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <AdminLayoutWrapper>
        <div className="p-8 flex items-center justify-center min-h-screen">
          <div className="text-bs-cyan font-mono">Loading dashboard...</div>
        </div>
      </AdminLayoutWrapper>
    );
  }

  return (
    <AdminLayoutWrapper>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-bs-cyan text-glow-cyan mb-2">
            ADMIN DASHBOARD
          </h1>
          <p className="text-bs-gray font-mono">
            Welcome to the Black Sun Admin Control Panel
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <AdminCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-bs-gray text-sm font-mono uppercase mb-1">
                  Expertise Areas
                </p>
                <p className="text-3xl font-bold text-bs-cyan">
                  {data?.expertise.length || 0}
                </p>
              </div>
              <div className="text-4xl">💡</div>
            </div>
          </AdminCard>

          <AdminCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-bs-gray text-sm font-mono uppercase mb-1">
                  Projects
                </p>
                <p className="text-3xl font-bold text-bs-green">
                  {data?.projects.length || 0}
                </p>
              </div>
              <div className="text-4xl">🚀</div>
            </div>
          </AdminCard>

          <AdminCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-bs-gray text-sm font-mono uppercase mb-1">
                  Social Links
                </p>
                <p className="text-3xl font-bold text-bs-yellow">
                  {data?.socialLinks.length || 0}
                </p>
              </div>
              <div className="text-4xl">🔗</div>
            </div>
          </AdminCard>
        </div>

        {/* Quick Actions */}
        <AdminCard title="QUICK ACTIONS" className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/admin/profile"
              className="p-4 border-2 border-bs-cyan rounded hover:bg-bs-cyan/10 transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">👤</span>
                <div>
                  <p className="font-bold text-bs-cyan group-hover:text-glow-cyan">
                    Edit Profile
                  </p>
                  <p className="text-sm text-bs-gray">
                    Update your personal information
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/admin/expertise"
              className="p-4 border-2 border-bs-cyan rounded hover:bg-bs-cyan/10 transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <p className="font-bold text-bs-cyan group-hover:text-glow-cyan">
                    Manage Expertise
                  </p>
                  <p className="text-sm text-bs-gray">
                    Add, edit, or remove expertise areas
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/admin/projects"
              className="p-4 border-2 border-bs-cyan rounded hover:bg-bs-cyan/10 transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <div>
                  <p className="font-bold text-bs-cyan group-hover:text-glow-cyan">
                    Manage Projects
                  </p>
                  <p className="text-sm text-bs-gray">
                    Add, edit, or remove projects
                  </p>
                </div>
              </div>
            </Link>

            <Link
              href="/"
              target="_blank"
              className="p-4 border-2 border-bs-green rounded hover:bg-bs-green/10 transition-all group"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">👁️</span>
                <div>
                  <p className="font-bold text-bs-green group-hover:text-glow-green">
                    View Live Site
                  </p>
                  <p className="text-sm text-bs-gray">
                    See your portfolio in action
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </AdminCard>

        {/* Profile Overview */}
        {data && (
          <AdminCard title="PROFILE OVERVIEW">
            <div className="space-y-3 font-mono">
              <div>
                <span className="text-bs-gray text-sm">Name:</span>
                <span className="text-bs-white ml-2">{data.profile.name}</span>
              </div>
              <div>
                <span className="text-bs-gray text-sm">Title:</span>
                <span className="text-bs-white ml-2">{data.profile.title}</span>
              </div>
              <div>
                <span className="text-bs-gray text-sm">Email:</span>
                <span className="text-bs-white ml-2">{data.profile.email}</span>
              </div>
              <div>
                <span className="text-bs-gray text-sm">GitHub:</span>
                <a
                  href={data.profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-bs-cyan ml-2 hover:text-bs-green transition-colors"
                >
                  {data.profile.github}
                </a>
              </div>
            </div>
          </AdminCard>
        )}
      </div>
    </AdminLayoutWrapper>
  );
}
