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
import { PortfolioData, Project } from "@/types/portfolio";
import { PencilIcon, TrashIcon, PlusIcon } from "@heroicons/react/24/outline";

export default function ProjectsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState<PortfolioData | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const [formData, setFormData] = useState<Project>({
    id: "",
    name: "",
    description: "",
    techStack: [],
    githubLink: "",
    highlights: [],
  });

  // Temporary string fields for editing
  const [techStackStr, setTechStackStr] = useState("");
  const [highlightsStr, setHighlightsStr] = useState("");

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

  const handleEdit = (project: Project) => {
    setFormData(project);
    setTechStackStr(project.techStack.join(", "));
    setHighlightsStr(project.highlights.join("\n"));
    setEditingId(project.id);
    setIsAdding(false);
  };

  const handleAdd = () => {
    setFormData({
      id: Date.now().toString(),
      name: "",
      description: "",
      techStack: [],
      githubLink: "",
      highlights: [],
    });
    setTechStackStr("");
    setHighlightsStr("");
    setIsAdding(true);
    setEditingId(null);
  };

  const handleCancel = () => {
    setFormData({
      id: "",
      name: "",
      description: "",
      techStack: [],
      githubLink: "",
      highlights: [],
    });
    setTechStackStr("");
    setHighlightsStr("");
    setEditingId(null);
    setIsAdding(false);
  };

  const handleSave = async () => {
    if (!data) return;
    setSaving(true);

    try {
      // Parse tech stack and highlights
      const techStack = techStackStr
        .split(",")
        .map((s) => s.trim())
        .filter((s) => s);
      const highlights = highlightsStr
        .split("\n")
        .map((s) => s.trim())
        .filter((s) => s);

      const updatedFormData = {
        ...formData,
        techStack,
        highlights,
      };

      let updatedProjects = [...data.projects];

      if (isAdding) {
        updatedProjects.push(updatedFormData);
      } else if (editingId) {
        updatedProjects = updatedProjects.map((item) =>
          item.id === editingId ? updatedFormData : item
        );
      }

      const updatedData = {
        ...data,
        projects: updatedProjects,
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
        isAdding ? "Project added successfully!" : "Project updated successfully!"
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
    if (!confirm("Are you sure you want to delete this project?")) return;

    setSaving(true);

    try {
      const updatedData = {
        ...data,
        projects: data.projects.filter((item) => item.id !== id),
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
      toast.success("Project deleted successfully!");
    } catch (error) {
      console.error("Error deleting:", error);
      toast.error("Failed to delete project");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayoutWrapper>
        <div className="p-8 flex items-center justify-center min-h-screen">
          <div className="text-bs-cyan font-mono">Loading projects...</div>
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
              MANAGE PROJECTS
            </h1>
            <p className="text-bs-gray font-mono">
              Add, edit, or remove your projects
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
              {isAdding ? "ADD NEW PROJECT" : "EDIT PROJECT"}
            </h3>
            <AdminInput
              label="Project Name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
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
              label="Tech Stack (comma-separated)"
              type="text"
              value={techStackStr}
              onChange={(e) => setTechStackStr(e.target.value)}
              placeholder="React, Node.js, PostgreSQL"
              required
              disabled={saving}
            />
            <AdminInput
              label="GitHub Link"
              type="url"
              value={formData.githubLink}
              onChange={(e) =>
                setFormData({ ...formData, githubLink: e.target.value })
              }
              required
              disabled={saving}
            />
            <AdminTextarea
              label="Highlights (one per line)"
              value={highlightsStr}
              onChange={(e) => setHighlightsStr(e.target.value)}
              placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
              required
              disabled={saving}
              rows={4}
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

        {/* Projects List */}
        <div className="space-y-6">
          {data?.projects.map((project) => (
            <AdminCard key={project.id}>
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-bs-cyan">
                  {project.name}
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="p-2 text-bs-cyan hover:text-bs-green transition-colors"
                    disabled={saving || isAdding || editingId !== null}
                  >
                    <PencilIcon className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleDelete(project.id)}
                    className="p-2 text-bs-red hover:text-bs-red/80 transition-colors"
                    disabled={saving || isAdding || editingId !== null}
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <p className="text-bs-white/70 text-sm font-mono mb-3">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-3">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-bs-cyan/20 border border-bs-cyan rounded text-xs text-bs-cyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="space-y-1 mb-3">
                {project.highlights.map((highlight, idx) => (
                  <li
                    key={idx}
                    className="text-xs text-bs-white/70 font-mono flex items-start gap-2"
                  >
                    <span className="text-bs-green">▸</span>
                    {highlight}
                  </li>
                ))}
              </ul>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-bs-cyan hover:text-bs-green transition-colors"
              >
                🔗 {project.githubLink}
              </a>
            </AdminCard>
          ))}
        </div>
      </div>
    </AdminLayoutWrapper>
  );
}
