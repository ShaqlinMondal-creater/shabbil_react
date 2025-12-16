import Button from "./Button"; // Import reusable button component

export default function Table({ columns, data, actions }) {
  return (
    <div className="overflow-auto">
      <table className="w-full text-sm">
        <thead className="text-left text-neutral-600">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="py-2">
                {col}
              </th>
            ))}
            {actions && <th className="py-2">Actions</th>} {/* Action column */}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-t border-neutral-200">
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} className="py-2">
                  {cell}
                </td>
              ))}
              {actions && (
                <td className="py-2">
                  <div className="flex gap-2">
                    {actions(row)} {/* Render action buttons for each row */}
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
