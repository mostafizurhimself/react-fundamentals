import { useContext } from "react";
import SidebarContext from "../contexts/sidebar-context";

const SidebarOverlay = () => {
  const context = useContext(SidebarContext);

  const isCollapsed = context?.isCollapsed;

  const onClose = () => {
    context?.setIsCollapsed(true);
  };

  return (
    <>
      {!isCollapsed && (
        <div
          onClick={onClose}
          className="block md:hidden fixed bg-black bg-opacity-50 h-full w-full z-10"
        ></div>
      )}
    </>
  );
};

export default SidebarOverlay;
