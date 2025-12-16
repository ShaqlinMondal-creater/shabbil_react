import { Link } from "react-router-dom";
import PageShell from "../components/PageShell.jsx";

export default function Index() {
  return (
    <PageShell
      title="Welcome to Shabbil"
      subtitle="A clean starter with React Router + Tailwind, fully responsive."
    >
      <div className="grid gap-6 lg:grid-cols-2 items-start">
        <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 sm:p-8 shadow-sm">
          <p className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-3 py-1 text-sm">
            ✅ Setup Completed
          </p>

          <p className="mt-4 text-slate-700 leading-relaxed">
            Next step: connect Login/Register to your backend API and store auth token.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/login"
              className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
            >
              Go to Login
            </Link>
            <Link
              to="/register"
              className="px-5 py-2.5 rounded-xl bg-white text-slate-900 font-semibold border border-slate-300 hover:bg-slate-50 transition"
            >
              Create Account
            </Link>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/80 backdrop-blur p-6 sm:p-8 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">Project Checklist</h2>
          <ul className="mt-4 space-y-3 text-slate-700">
            <li className="flex gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
              Pages + Router ready
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
              Tailwind + responsive layout
            </li>
            <li className="flex gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-slate-400" />
              API integration next
            </li>
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
