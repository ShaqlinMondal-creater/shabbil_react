import { Navigate } from "react-router-dom";
import { getAuth } from "./auth";

export default function ProtectedRoute({ allowedRoles, children }) {
  const auth = getAuth();

  if (!auth) return <Navigate to="/login" replace />;

  if (allowedRoles && !allowedRoles.includes(auth.role)) {
    return <Navigate to={auth.role === "admin" ? "/admin/dashboard" : "/user/dashboard"} replace />;
  }

  return children;
}
