import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import AppLayout from "./layouts/AppLayout.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";

// Public
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

// User
import UserDashboard from "./pages/user/Dashboard.jsx";
import UserApplications from "./pages/user/Applications.jsx";

// Admin
import AdminDashboard from "./pages/admin/Dashboard.jsx";
import AdminApplications from "./pages/admin/Applications.jsx";
import AdminUsers from "./pages/admin/Users.jsx";
import AdminConfigurations from "./pages/admin/Configurations.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Only Index uses AppLayout (footer) */}
        <Route element={<AppLayout />}>
          <Route path="/" element={<Index />} />
        </Route>

        {/* Standalone full-screen pages (no nav/footer) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* User protected */}
        <Route
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <DashboardLayout role="user" />
            </ProtectedRoute>
          }
        >
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/applications" element={<UserApplications />} />
        </Route>

        {/* Admin protected */}
        <Route
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <DashboardLayout role="admin" />
            </ProtectedRoute>
          }
        >
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/applications" element={<AdminApplications />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/configurations" element={<AdminConfigurations />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
