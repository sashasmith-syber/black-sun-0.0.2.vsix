"use client";

import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import AdminLayoutWrapper from "@/components/admin/AdminLayoutWrapper";
import {
  AdminCard,
  AdminInput,
  AdminTextarea,
  AdminButton,
} from "@/components/admin/AdminComponents";
import { PortfolioData, Expertise } from "@/types/portfolio";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function ExpertisePage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState<PortfolioData | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Expertise>({
    id: "",
    title: "",
    description: "",
    icon: "",
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const res = await fetch("/api/portfolio");
      const portfolioData = await res.json();
      setData(portfolioData);
      setLoading(false);
    } catch (error) {
      console.error("Error loading data:", error);
      toast.error("Failed to load data");
      setLoading(false);
    }
  };

  const handleEdit = (expertise: Expertise) => {
    setFormData(expertise);
    setEditingId(expertise.id);
    setIsAdding(false);
  };

  const handleAdd = () => {
    setFormData({
      id: Date.now().toString(),
      title: "",
      description: "",
      icon: "⚡",
    });
    setIsAdding(true);
    setEditingId(null);
  };

  const handleCancel = () => {
    setFormData({ id: "", title: "", description: "", icon: "" });
    setEditingId(null);
    setIsAdding(false);
  };

  const handleSave = async () => {
    if (!data) return;
    setSaving(true);

    try {
      let updatedExpertise = [...data.expertise];

      if (isAdding) {
        updatedExpertise.push(formData);
      } else if (editingId) {
        updatedExpertise = updatedExpertise.map((item) =>
          item.id === editingId ? formData : item
        );
      }

      const updatedData = {
        ...data,
        expertise: updatedExpertise,
      };

      const response = await fetch("/api/portfolio/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to update");
      }

      setData(updatedData);
      handleCancel();
      toast.success(
        isAdding
          ? "Expertise added successfully!"
          : "Expertise updated successfully!"
      );
    } catch (error) {
      console.error("Error saving:", error);
      toast.error("Failed to save changes");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!data) return;
    if (!confirm("Are you sure you want to delete this expertise?")) return;

    setSaving(true);

    try {
      const updatedData = {
        ...data,
        expertise: data.expertise.filter((item) => item.id !== id),
      };

      const response = await fetch("/api/portfolio/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });

      if (!response.ok) {
        throw new Error("Failed to delete");
      }

      setData(updatedData);
      toast.success("Expertise deleted successfully!");
    } catch (error) {
      console.error("Error deleting:", error);
      toast.error("Failed to delete expertise");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayoutWrapper>
        <div className="p-8 flex items-center justify-center min-h-screen">
          <div className="text-bs-cyan font-mono">Loading expertise...</div>
        </div>
      </AdminLayoutWrapper>
    );
  }

  return (
    <AdminLayoutWrapper>
      <div className="p-8">
        {/* Header */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold text-bs-cyan text-glow-cyan mb-2">
              MANAGE EXPERTISE
            </h1>
            <p className="text-bs-gray font-mono">
              Add, edit, or remove expertise areas
            </p>
          </div>
          {!isAdding && !editingId && (
            <AdminButton onClick={handleAdd}>
              <PlusIcon className="w-5 h-5 inline mr-2" />
              Add New
            </AdminButton>
          )}
        </div>

        {/* Edit/Add Form */}
        {(isAdding || editingId) && (
          <AdminCard className="mb-8">
            <h3 className="text-xl font-bold text-bs-cyan mb-4">
              {isAdding ? "ADD NEW EXPERTISE" : "EDIT EXPERTISE"}
            </h3>
            <AdminInput
              label="Title"
              type="text"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              required
              disabled={saving}
            />
            <AdminTextarea
              label="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              required
              disabled={saving}
              rows={4}
            />
            <AdminInput
              label="Icon (Emoji)"
              type="text"
              value={formData.icon}
              onChange={(e) =>
                setFormData({ ...formData, icon: e.target.value })
              }
              required
              disabled={saving}
              maxLength={2}
            />
            <div className="flex gap-4 mt-4">
              <AdminButton onClick={handleSave} disabled={saving}>
                {saving ? "Saving..." : "Save"}
              </AdminButton>
              <AdminButton
                variant="secondary"
                onClick={handleCancel}
                disabled={saving}
              >
                Cancel
              </AdminButton>
            </div>
          </AdminCard>
        )}

        {/* Expertise List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data?.expertise.map((item) => (
            <AdminCard key={item.id}>
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="text-xl font-bold text-bs-cyan">
                    {item.title}
                  </h3>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="p-2 text-bs-cyan hover:text-bs-green transition-colors"
                    disabled={saving || isAdding || editingId !== null}
                  >
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 text-bs-red hover:text-bs-red/80 transition-colors"
                    disabled={saving || isAdding || editingId !== null}
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <p className="text-bs-white/70 text-sm font-mono">
                {item.description}
              </p>
            </AdminCard>
          ))}
        </div>
      </div>
    </AdminLayoutWrapper>
  );
}
