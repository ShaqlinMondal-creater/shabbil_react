import { PencilIcon, TrashIcon, EyeIcon } from "@heroicons/react/solid"; // Import icons for actions

export default function Button({ type, onClick }) {
  const getIcon = () => {
    switch (type) {
      case "edit":
        return <PencilIcon className="h-5 w-5 text-teal-700" />;
      case "delete":
        return <TrashIcon className="h-5 w-5 text-red-700" />;
      case "view":
        return <EyeIcon className="h-5 w-5 text-teal-700" />;
      default:
        return null;
    }
  };

  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center rounded-full bg-neutral-100 p-2 text-sm font-semibold text-neutral-700 hover:bg-neutral-200"
    >
      {getIcon()}
    </button>
  );
}
