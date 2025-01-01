import { FC, useContext } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import SidebarContext from "../contexts/sidebar-context";

const SidebarToggle: FC = () => {
  const context = useContext(SidebarContext);

  const onToggleSidebar = () => {
    context?.setIsCollapsed((prev) => !prev);
  };

  return (
    <button onClick={onToggleSidebar}>
      <HiOutlineMenuAlt2 size={24} />
    </button>
  );
};

export default SidebarToggle;
