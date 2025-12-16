export const mockUsers = [
  { id: 1, name: "Burhanuddin", email: "user@test.com", password: "123456", role: "user" },
  { id: 2, name: "Admin", email: "admin@test.com", password: "123456", role: "admin" },
];

export const mockApplications = [
  { id: 101, title: "Leave Request", status: "Pending", created_at: "2025-12-01" },
  { id: 102, title: "Equipment Request", status: "Approved", created_at: "2025-12-05" },
  { id: 103, title: "Travel Approval", status: "Rejected", created_at: "2025-12-07" },
];

export const mockConfigurations = [
  { key: "app_theme", value: "teal" },
  { key: "maintenance_mode", value: "off" },
  { key: "max_upload_mb", value: "10" },
];
