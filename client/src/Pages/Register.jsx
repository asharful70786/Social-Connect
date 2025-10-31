import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../Components/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { checkAuth } = useAuth(); // to refresh login state after registration

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:4000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        await checkAuth(); // update global auth state
        navigate("/dashboard");
      } else {
        setError(data.message || "Registration failed");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-black to-purple-900 text-white px-4">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl p-8 border border-white/20">
        <h2 className="text-3xl font-semibold text-center mb-6 bg-gradient-to-r from-indigo-400 to-pink-500 bg-clip-text text-transparent">
          Create your SocialConnect Account
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-lg bg-white/10 border border-white/30 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {error && (
            <p className="text-red-400 text-sm font-medium text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 bg-gradient-to-r from-indigo-500 to-pink-500 py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <p className="text-center text-sm text-white/70 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-400 font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
