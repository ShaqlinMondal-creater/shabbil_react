import { mockUsers } from "../../mock/data";
import Table from "../../components/Table";  // Import reusable Table component
import Button from "../../components/Button";  // Import Button component

export default function AdminUsers() {
  // Define the table columns (without password)
  const columns = ["ID", "Name", "Email", "Role"];

  // Filter out the password field from mockUsers data
  const filteredUsers = mockUsers.map(({ password, ...rest }) => rest);

  const renderActions = (user) => {
    return (
      <>
        <Button type="edit" onClick={() => handleEdit(user)} />
        <Button type="delete" onClick={() => handleDelete(user)} />
        <Button type="view" onClick={() => handleView(user)} />
      </>
    );
  };

  const handleEdit = (user) => {
    console.log("Edit user", user);
    // You can redirect or open a modal to edit the user here
  };

  const handleDelete = (user) => {
    console.log("Delete user", user);
    // Add your delete logic here
  };

  const handleView = (user) => {
    console.log("View user", user);
    // Redirect to a user details page or show more info
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6">
      <h1 className="text-xl font-bold">Users</h1>

      <Table columns={columns} data={filteredUsers} actions={renderActions} />  {/* Pass actions function */}
    </div>
  );
}
