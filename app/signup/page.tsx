"use client";
import { useState } from "react";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([] as string[]);

  const validate = () => {
    setErrors([]);
    if (username.includes(" ")) {
      setErrors((current) => [...current, "Username contains whitespace"]);
    }
    return errors
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    const newErrors = validate();
    if (newErrors.length === 0) {
      e.preventDefault();
      // Post data to server
      const response = await fetch("/api/signup", {
        method: "POST",
        body: JSON.stringify({ username: username, password: password }),
      });
      const data = await response.json();
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-150px)]">
      {loading ? <div>loading</div> : <div>NOT LOADING</div>}
      {errors}
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label htmlFor="cpassword" className="text-lg">
          Confirm Password
        </label>
        <input
          type="password"
          name="cpassword"
          className="mb-4"
          value={cpassword}
          onChange={(e) => setCpassword(e.target.value)}
        />

        <button
          type="submit"
          className={`bg-[#e7d7c1] text-lg rounded-full p-1 opacity-80 hover:opacity-100 ${
            loading ? "animate-spin" : ""
          }`}
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}
