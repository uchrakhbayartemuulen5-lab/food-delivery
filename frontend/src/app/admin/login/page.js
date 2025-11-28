"use client";

import { Lefticon } from "@/app/component/icon/lefticon";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data?.message || "Login failed");
        setLoading(false);
        return;
      }

      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      setLoading(false);
      router.push("/admin");
    } catch (err) {
      console.error(err);
      setError("Network error");
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center gap-40 ">
      <div className="w-[500px] h-[500px] border p-6">
        <Lefticon />
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center gap-4 mt-6"
        >
          <h1 className="text-2xl">Log in</h1>
          <p className="opacity-50">Sign in to manage your store.</p>

          <input
            className="border w-[400px] h-10 px-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            className="border w-[400px] h-10 px-2"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />

          {error && <div className="text-red-500">{error}</div>}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 w-[400px] h-10 rounded-lg text-white"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Log in"}
          </button>

          <div className="flex gap-1 mt-2">
            <h1>Don't have an account?</h1>
            <a href="/admin/register" className="text-blue-500">
              Sign up
            </a>
          </div>
        </form>
      </div>
      <img className="mt-30" src="/login.png" alt="login" />
    </div>
  );
}
