"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    image: null as File | null,
  });

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm({ ...form, image: file });
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      let imageUrl = "";

      if (form.image) {
        const fd = new FormData();
        fd.append("image", form.image);
        
        const res = await fetch("/api/upload", { 
          method: "POST", 
          body: fd 
        });
        
        const data = await res.json();
        console.log("Upload response:", data); // ✅ ব্রাউজারে দেখুন
        
        if (!res.ok) throw new Error(data.error);
        imageUrl = data.url;
      }

      await authClient.signUp.email(
        { 
          email: form.email, 
          password: form.password, 
          name: form.name, 
          image: imageUrl 
        },
        {
          onSuccess: () => {
            router.push("/profile");
          },
          onError: (ctx) => {
            console.log("Register error:", ctx); // ✅ ব্রাউজারে দেখুন
            setError(ctx.error.message || "Registration failed");
            setLoading(false);
          },
        }
      );
    } catch (err: any) {
      console.log("Catch error:", err); // ✅ ব্রাউজারে দেখুন
      setError(err.message || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-center">Register</h1>
        <p className="text-sm text-gray-500 text-center mb-6">Create your account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Image */}
          <div>
            <label className="block text-sm font-medium mb-1">Profile Image</label>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                {preview ? (
                  <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xl">📷</span>
                )}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="text-sm"
              />
            </div>
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
              required
              minLength={6}
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 bg-red-50 p-2 rounded-lg">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 disabled:opacity-50 transition"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-black font-medium hover:underline">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
}