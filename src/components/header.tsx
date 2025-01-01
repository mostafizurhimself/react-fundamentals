import { FC } from "react";
import { FiBell, FiChevronDown } from "react-icons/fi";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import ProfileDropdown from "./profile-dropdown";
import NotificationDropdown from "./notification-dropdown";

type HeaderProps = {
  onClick: () => void;
};

const Header: FC<HeaderProps> = ({ onClick }) => {
  return (
    <header className="shadow-md bg-white h-16 px-8 flex items-center">
      <button onClick={onClick}>
        <HiOutlineMenuAlt2 size={24} />
      </button>

      <div className="ms-auto flex items-center gap-6">
        <NotificationDropdown />
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default Header;
