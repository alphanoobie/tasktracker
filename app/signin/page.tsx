"use client";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { error } from "console";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState("");

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const response = await fetch("/api/signin", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    });
    const data = await response.json();
    setLoading(false);
    if (data.ok) {
      router.push("/");
    } else {
      setErrors(data.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-150px)]">
      <div className="text-red-800">{errors}</div>
      <form className="flex flex-col" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="username" className="text-lg">
          Username
        </label>
        <input
          type="text"
          name="username"
          className="mb-2"
          required={true}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="password" className="text-lg">
          Choose Password
        </label>
        <input
          type="password"
          name="password"
          className="mb-2"
          required={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className={`bg-[#e7d7c1] text-lg rounded-full p-1 opacity-80 hover:opacity-100 my-4${
            loading ? "animate-spin" : ""
          }`}
        >
          Sign In
        </button>
        <div className="text-center">
          New here?{" "}
          <Link
            href={"/signup"}
            className="text-blue-900 bg-[#e7d7c1] rounded-full p-1 opacity-80 hover:opacity-100"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}
