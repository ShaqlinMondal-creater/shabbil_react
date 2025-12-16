import { useMemo, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { getAuth, logoutMock } from "../auth/auth";

/** Simple inline icons (no extra libraries) */
function Icon({ name }) {
  const cls = "h-5 w-5 shrink-0";
  if (name === "dashboard")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path
          d="M4 13h7V4H4v9Zm9 7h7V11h-7v9ZM4 20h7v-5H4v5Zm9-11h7V4h-7v5Z"
          fill="currentColor"
        />
      </svg>
    );
  if (name === "applications")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path
          d="M7 3h10a2 2 0 0 1 2 2v16H5V5a2 2 0 0 1 2-2Zm0 4h10V5H7v2Zm0 4h10V9H7v2Zm0 4h7v-2H7v2Z"
          fill="currentColor"
        />
      </svg>
    );
  if (name === "users")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path
          d="M16 11a4 4 0 1 0-8 0 4 4 0 0 0 8 0ZM4 21a8 8 0 0 1 16 0H4Z"
          fill="currentColor"
        />
      </svg>
    );
  if (name === "config")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none">
        <path
          d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm9 4a7.9 7.9 0 0 0-.17-1.64l-2.2-.35a7.9 7.9 0 0 0-.77-1.33l1.3-1.82A10 10 0 0 0 17.14 4.8l-1.82 1.3c-.42-.3-.86-.56-1.33-.77l-.35-2.2A7.9 7.9 0 0 0 12 3c-.55 0-1.1.06-1.64.17l-.35 2.2c-.47.21-.91.47-1.33.77L6.86 4.8A10 10 0 0 0 4.8 6.86l1.3 1.82c-.3.42-.56.86-.77 1.33l-2.2.35A7.9 7.9 0 0 0 3 12c0 .55.06 1.1.17 1.64l2.2.35c.21.47.47.91.77 1.33l-1.3 1.82A10 10 0 0 0 6.86 19.2l1.82-1.3c.42.3.86.56 1.33.77l.35 2.2c.54.11 1.09.17 1.64.17.55 0 1.1-.06 1.64-.17l.35-2.2c.47-.21.91-.47 1.33-.77l1.82 1.3a10 10 0 0 0 2.06-2.06l-1.3-1.82c.3-.42.56-.86.77-1.33l2.2-.35c.11-.54.17-1.09.17-1.64Z"
          fill="currentColor"
        />
      </svg>
    );
  return null;
}

/** Sidebar link item with tooltip when collapsed */
function SideItem({ to, label, icon, collapsed }) {
  const base =
    "group relative flex items-center rounded-xl transition select-none";
  const pad = collapsed ? "justify-center px-3 py-3" : "gap-3 px-3 py-2.5";
  const inactive =
    "text-white/90 hover:text-white hover:bg-white/10";
  const active =
    "bg-teal-600 text-white shadow-sm"; // light teal active

  return (
    <NavLink
      to={to}
      end={to.endsWith("/dashboard")}
      className={({ isActive }) =>
        `${base} ${pad} ${isActive ? active : inactive}`
      }
    >
      <span className="text-white">
        <Icon name={icon} />
      </span>

      {!collapsed && <span className="text-sm font-medium">{label}</span>}

      {/* Tooltip only in collapsed mode */}
      {collapsed && (
        <span className="pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 whitespace-nowrap rounded-lg bg-black/80 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100">
          {label}
        </span>
      )}
    </NavLink>
  );
}

export default function DashboardLayout({ role }) {
  const navigate = useNavigate();
  const auth = getAuth();
  const logoLetter = (auth?.name?.trim()?.[0] || "S").toUpperCase();
  const [collapsed, setCollapsed] = useState(false);

  const items = useMemo(() => {
    if (role === "admin") {
      return [
        { to: "/admin/dashboard", label: "Dashboard", icon: "dashboard" },
        { to: "/admin/applications", label: "Applications", icon: "applications" },
        { to: "/admin/users", label: "Users", icon: "users" },
        { to: "/admin/configurations", label: "Configurations", icon: "config" },
      ];
    }
    return [
      { to: "/user/dashboard", label: "Dashboard", icon: "dashboard" },
      { to: "/user/applications", label: "Applications", icon: "applications" },
    ];
  }, [role]);

  const onLogout = () => {
    logoutMock();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900 flex">
      {/* SIDEBAR (Teal bg + White text) */}
      <aside
        className={[
          "h-screen sticky top-0 border-r border-teal-800/60 bg-teal-700 text-white",
          collapsed ? "w-[76px]" : "w-[270px]",
          "transition-all duration-200",
        ].join(" ")}
      >
        {/* Brand */}
        <div className="h-16 px-4 flex items-center justify-between border-b border-teal-600/50">
          <div className="flex items-center gap-2 overflow-hidden">
            {/* Logo (teal becomes white, white becomes teal text = already) */}
            <div className="h-9 w-9 rounded-xl bg-white text-teal-700 grid place-items-center font-extrabold">
              {logoLetter}
            </div>

            {/* When expanded show Shabbil + role, when collapsed only S */}
            {!collapsed && (
              <div className="leading-tight">
                <div className="text-sm font-semibold">Shabbil</div>
                <div className="text-xs text-white/70 capitalize">{role} panel</div>
              </div>
            )}
          </div>

          <button
            onClick={() => setCollapsed((v) => !v)}
            className="rounded-lg bg-white/10 px-2 py-1 text-xs text-white hover:bg-white/15"
            title={collapsed ? "Expand" : "Collapse"}
          >
            {collapsed ? "➜" : "←"}
          </button>
        </div>

        {/* Links */}
        <nav className={collapsed ? "p-2 space-y-2" : "p-3 space-y-2"}>
          {items.map((it) => (
            <SideItem
              key={it.to}
              to={it.to}
              label={it.label}
              icon={it.icon}
              collapsed={collapsed}
            />
          ))}
        </nav>
      </aside>

      {/* MAIN */}
      <div className="flex-1 min-w-0">
        {/* HEADER */}
        <header className="h-16 bg-white border-b border-neutral-200 px-4 sm:px-6 flex items-center justify-between">
          <div className="text-sm text-neutral-600">
            Welcome,{" "}
            <span className="font-semibold text-neutral-900">
              {auth?.name || "User"}
            </span>
          </div>

          <button
            onClick={onLogout}
            className="rounded-xl bg-red-500 text-white px-4 py-2 text-sm font-semibold hover:bg-red-800 transition"
          >
            Logout
          </button>
        </header>

        {/* CONTENT */}
        <main className="p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
