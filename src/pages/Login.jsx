import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginMock } from "../auth/auth.js";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid"; // Correct import for Heroicons v1

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("user@test.com");
  const [password, setPassword] = useState("123456");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // Track password visibility

  const onSubmit = (e) => {
    e.preventDefault();
    setError("");

    const auth = loginMock(email.trim(), password);
    if (!auth) {
      setError("Invalid email or password.");
      return;
    }

    navigate(auth.role === "admin" ? "/admin/dashboard" : "/user/dashboard");
  };

  return (
    <div className="min-h-screen bg-neutral-100 relative">
      <div className="min-h-screen grid lg:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="relative hidden lg:block">
          <img
            src="https://picsum.photos/1200/1600?random=2"
            alt="Login"
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Overlay for teal theme */}
          <div className="absolute inset-0 bg-teal-900/40" />
          <div className="absolute bottom-40 left-10 right-10 text-white">
            <h2 className="text-3xl font-extrabold">Welcome back</h2>
            <p className="mt-2 text-white/80">
              Login to continue to your dashboard.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-10 py-10">
          <div className="w-full max-w-md">
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Login
              </h1>
              <p className="mt-2 text-neutral-600">Sign in to continue.</p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
              <form onSubmit={onSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-neutral-700">
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-teal-600/20"
                  />
                </div>

                <div className="relative">
                  <label className="text-sm font-medium text-neutral-700">
                    Password
                  </label>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type={showPassword ? "text" : "password"} // Show/hide password
                    placeholder="••••••••"
                    className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-teal-600/20"
                  />
                  <span
                    onClick={() => setShowPassword((prev) => !prev)} // Toggle password visibility
                    className="absolute right-4 top-[72%] -translate-y-1/2 cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-5 w-5 text-teal-700" /> // Use EyeOffIcon for hide
                    ) : (
                      <EyeIcon className="h-5 w-5 text-teal-700" /> // Use EyeIcon for show
                    )}
                  </span>
                </div>

                {error && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full rounded-xl bg-teal-700 text-white py-2.5 font-semibold hover:bg-teal-800 transition"
                >
                  Sign In
                </button>

                <p className="text-sm text-neutral-600 text-center">
                  Don’t have an account?{" "}
                  <Link
                    to="/register"
                    className="font-semibold text-teal-700 underline"
                  >
                    Register
                  </Link>
                </p>

                <p className="text-xs text-neutral-500 text-center">
                  Test logins: user@test.com / 123456, admin@test.com / 123456
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full bg-transparent py-4">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-sm text-neutral-500 text-left">
          © {new Date().getFullYear()} Shabbil. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
