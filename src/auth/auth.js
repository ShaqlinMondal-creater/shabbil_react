import { mockUsers } from "../mock/data";

const AUTH_KEY = "shabbil_auth";

export function loginMock(email, password) {
  const user = mockUsers.find(
    (u) => u.email === email && u.password === password
  );
  if (!user) return null;

  const auth = { id: user.id, name: user.name, email: user.email, role: user.role };
  localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
  return auth;
}

export function getAuth() {
  const raw = localStorage.getItem(AUTH_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function logoutMock() {
  localStorage.removeItem(AUTH_KEY);
}
