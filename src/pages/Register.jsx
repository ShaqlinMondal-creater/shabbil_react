import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="min-h-screen bg-neutral-100 relative">
      <div className="min-h-screen grid lg:grid-cols-2">
        {/* LEFT IMAGE */}
        <div className="relative hidden lg:block">
          <img
            src="https://picsum.photos/1200/1600?random=2"
            alt="Register"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-teal-900/40" />
          <div className="absolute bottom-40 left-10 right-10 text-white">
            <h2 className="text-3xl font-extrabold">Create your account</h2>
            <p className="mt-2 text-white/80">
              Register now and start using Shabbil.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="flex items-center justify-center px-4 sm:px-6 lg:px-10 py-10">
          <div className="w-full max-w-md">
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-neutral-900">
                Register
              </h1>
              <p className="mt-2 text-neutral-600">Create your new account.</p>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-sm">
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-neutral-700">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-teal-600/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-neutral-700">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-teal-600/20"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-neutral-700">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Create a strong password"
                    className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-2.5 outline-none focus:ring-2 focus:ring-teal-600/20"
                  />
                </div>

                <button
                  type="button"
                  className="w-full rounded-xl bg-teal-700 text-white py-2.5 font-semibold hover:bg-teal-800 transition"
                >
                  Create Account
                </button>

                <p className="text-sm text-neutral-600 text-center">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-teal-700 underline"
                  >
                    Login
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 w-full bg-transparent py-4">
        <div className="max-w-5xl px-4 sm:px-6 lg:px-8 text-sm text-white text-left">
          © {new Date().getFullYear()} Shabbil. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
