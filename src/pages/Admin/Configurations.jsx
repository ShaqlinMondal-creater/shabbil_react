import { mockConfigurations } from "../../mock/data";

export default function AdminConfigurations() {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-6">
      <h1 className="text-xl font-bold">Configurations</h1>

      <div className="mt-4 space-y-3">
        {mockConfigurations.map((c) => (
          <div key={c.key} className="flex items-center justify-between rounded-xl border border-neutral-200 px-4 py-3">
            <div className="text-sm font-semibold text-neutral-800">{c.key}</div>
            <div className="text-sm text-neutral-600">{c.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
