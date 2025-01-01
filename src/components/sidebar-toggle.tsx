import { FC } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

type SidebarToggleProps = {
  toggleSidebar: () => void;
};

const SidebarToggle: FC<SidebarToggleProps> = ({ toggleSidebar }) => {
  return (
    <button onClick={toggleSidebar}>
      <HiOutlineMenuAlt2 size={24} />
    </button>
  );
};

export default SidebarToggle;
