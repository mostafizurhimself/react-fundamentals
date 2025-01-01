import clsx from "clsx";
import { FC, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

type ProfileDropdownProps = {};

const ProfileDropdown: FC<ProfileDropdownProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button className="flex items-center" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-sm font-medium">Admin</span>
        <FiChevronDown />
      </button>

      <div
        className={clsx(
          "absolute right-0 w-48 mt-2 py-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5",
          isOpen ? "block" : "hidden"
        )}
      >
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Profile
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Settings
        </a>
        <a
          href="#"
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
        >
          Logout
        </a>
      </div>
    </div>
  );
};

export default ProfileDropdown;
