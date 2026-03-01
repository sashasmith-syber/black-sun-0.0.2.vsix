"use client";

import { useEffect, useState, FormEvent } from "react";
import { toast } from "react-hot-toast";
import AdminLayoutWrapper from "@/components/admin/AdminLayoutWrapper";
import {
  AdminCard,
  AdminInput,
  AdminTextarea,
  AdminButton,
} from "@/components/admin/AdminComponents";
import { PortfolioData, Profile } from "@/types/portfolio";

export default function ProfilePage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    name: "",
    title: "",
    email: "",
    github: "",
    bio: "",
  });
  const [fullData, setFullData] = useState<PortfolioData | null>(null);

  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((data: PortfolioData) => {
        setProfile(data.profile);
        setFullData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading profile:", error);
        toast.error("Failed to load profile data");
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSaving(true);

    try {
      if (!fullData) {
        throw new Error("No data available");
      }

      const updatedData = {
        ...fullData,
        profile,
      };

      const response = await fetch("/api/portfolio/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to update profile");
      }

      toast.success("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayoutWrapper>
        <div className="p-8 flex items-center justify-center min-h-screen">
          <div className="text-bs-cyan font-mono">Loading profile...</div>
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
            EDIT PROFILE
          </h1>
          <p className="text-bs-gray font-mono">
            Update your personal information and bio
          </p>
        </div>

        {/* Profile Form */}
        <AdminCard>
          <form onSubmit={handleSubmit}>
            <AdminInput
              label="Name"
              type="text"
              value={profile.name}
              onChange={(e) =>
                setProfile({ ...profile, name: e.target.value })
              }
              required
              disabled={saving}
            />

            <AdminInput
              label="Title"
              type="text"
              value={profile.title}
              onChange={(e) =>
                setProfile({ ...profile, title: e.target.value })
              }
              required
              disabled={saving}
            />

            <AdminInput
              label="Email"
              type="email"
              value={profile.email}
              onChange={(e) =>
                setProfile({ ...profile, email: e.target.value })
              }
              required
              disabled={saving}
            />

            <AdminInput
              label="GitHub URL"
              type="url"
              value={profile.github}
              onChange={(e) =>
                setProfile({ ...profile, github: e.target.value })
              }
              required
              disabled={saving}
            />

            <AdminTextarea
              label="Bio"
              value={profile.bio}
              onChange={(e) =>
                setProfile({ ...profile, bio: e.target.value })
              }
              required
              disabled={saving}
              rows={5}
            />

            <div className="flex gap-4 mt-6">
              <AdminButton type="submit" disabled={saving}>
                {saving ? "Saving..." : "Save Changes"}
              </AdminButton>
              <AdminButton
                type="button"
                variant="secondary"
                onClick={() => window.history.back()}
                disabled={saving}
              >
                Cancel
              </AdminButton>
            </div>
          </form>
        </AdminCard>
      </div>
    </AdminLayoutWrapper>
  );
}
