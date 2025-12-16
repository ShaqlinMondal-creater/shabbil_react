import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 flex flex-col">
      {/* Page content */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Simple footer */}
      <footer className="border-t border-neutral-200 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-4">
          <p className="text-center text-sm text-neutral-500">
            © {new Date().getFullYear()} Shabbil. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
