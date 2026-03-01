"use client";

import { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await signIn("credentials", {
        password,
        redirect: false,
      });

      if (result?.error) {
        toast.error("Invalid password");
      } else {
        toast.success("Login successful!");
        router.push("/admin");
      }
    } catch (error) {
      toast.error("An error occurred during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bs-black relative overflow-hidden">
      {/* Matrix Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-b from-bs-cyan/10 to-transparent"></div>
      </div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md p-8">
        <div className="border-2 border-bs-cyan rounded-lg bg-bs-black/90 backdrop-blur-sm p-8 shadow-neon-cyan">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-bs-cyan mb-2 text-glow-cyan">
              BLACK SUN
            </h1>
            <p className="text-bs-white/70 text-sm font-mono">
              ADMIN ACCESS PORTAL
            </p>
            <div className="mt-4 flex items-center justify-center gap-2">
              <span className="inline-block w-2 h-2 bg-bs-cyan rounded-full animate-pulse"></span>
              <span className="text-xs text-bs-gray uppercase">
                System Authentication Required
              </span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-mono text-bs-cyan mb-2 uppercase"
              >
                Access Code
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-bs-black border-2 border-bs-cyan rounded font-mono text-bs-white focus:outline-none focus:border-bs-green focus:shadow-neon-cyan transition-all"
                placeholder="Enter admin password..."
                required
                disabled={loading}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-bs-cyan text-bs-black font-bold uppercase font-mono rounded hover:bg-bs-green transition-all duration-300 hover:shadow-neon-green disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="inline-block w-2 h-2 bg-bs-black rounded-full animate-pulse"></span>
                  Authenticating...
                </span>
              ) : (
                "ACCESS SYSTEM"
              )}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-8 pt-6 border-t border-bs-cyan/30">
            <p className="text-xs text-bs-gray text-center font-mono">
              🔒 Secured by NextAuth.js
            </p>
            <p className="text-xs text-bs-gray text-center font-mono mt-1">
              Unauthorized access attempts are logged
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-4 flex justify-center gap-4 text-xs text-bs-gray font-mono">
          <span className="flex items-center gap-1">
            <span className="inline-block w-1 h-1 bg-bs-cyan rounded-full"></span>
            ENCRYPTED
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-1 h-1 bg-bs-green rounded-full"></span>
            SECURE
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <span className="inline-block w-1 h-1 bg-bs-yellow rounded-full"></span>
            MONITORED
          </span>
        </div>
      </div>
    </div>
  );
}
