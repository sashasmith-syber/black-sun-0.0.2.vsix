"use client";

import AdminSidebar from "./AdminSidebar";
import { Toaster } from "react-hot-toast";

export default function AdminLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-bs-black">
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#080808",
            color: "#eeffff",
            border: "2px solid #00ffff",
            fontFamily: "'Courier New', monospace",
          },
          success: {
            iconTheme: {
              primary: "#00ff00",
              secondary: "#080808",
            },
          },
          error: {
            iconTheme: {
              primary: "#ff0000",
              secondary: "#080808",
            },
          },
        }}
      />
      <AdminSidebar />
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
