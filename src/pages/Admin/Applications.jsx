import { mockApplications } from "../../mock/data";
import Table from "../../components/Table";  // Import reusable Table component
import Button from "../../components/Button";  // Import Button component

export default function AdminApplications() {
  const columns = ["ID", "Title", "Status",];  // Define the table columns
  const filterApplications = mockApplications.map(({ created_at, ...rest }) => rest);

  const renderActions = (application) => {
    return (
      <>
        <Button type="edit" onClick={() => handleEdit(application)} />
        <Button type="delete" onClick={() => handleDelete(application)} />
      </>
    );
  };

  const handleEdit = (application) => {
    console.log("Edit application", application);
    // You can redirect or open a modal to edit the application here
  };

  const handleDelete = (application) => {
    console.log("Delete application", application);
    // Add your delete logic here
  };

  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6">
      <h1 className="text-xl font-bold">Applications</h1>
      <p className="mt-2 text-neutral-600">Admin can see all applications.</p>

      <Table columns={columns} data={filterApplications} actions={renderActions} />  {/* Pass actions function */}
    </div>
  );
}
