import { mockApplications } from "../../mock/data";

export default function UserApplications() {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6">
      <h1 className="text-xl font-bold">My Applications</h1>

      <div className="mt-4 overflow-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-neutral-600">
            <tr>
              <th className="py-2">ID</th>
              <th className="py-2">Title</th>
              <th className="py-2">Status</th>
              <th className="py-2">Created</th>
            </tr>
          </thead>
          <tbody>
            {mockApplications.map((a) => (
              <tr key={a.id} className="border-t border-neutral-200">
                <td className="py-2">{a.id}</td>
                <td className="py-2">{a.title}</td>
                <td className="py-2">
                  <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold text-neutral-700">
                    {a.status}
                  </span>
                </td>
                <td className="py-2">{a.created_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
