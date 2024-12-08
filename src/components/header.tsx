import { FiBell, FiChevronDown } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

export default function Header() {
  return (
    <header className="shadow-md bg-white h-16 px-8 flex items-center">
      <button>
        <HiOutlineMenuAlt2 size={24} />
      </button>

      <div className="ms-auto flex items-center gap-6">
        <button className="relative">
          <FiBell size={24} />
          <span className="inline-block h-4 w-4 bg-primary-500 text-xs text-white rounded-full absolute -top-1 -right-1">
            3
          </span>
        </button>
        <button className="flex items-center">
          <span className="text-sm font-medium">Admin</span>
          <FiChevronDown />
        </button>
      </div>
    </header>
  );
}
