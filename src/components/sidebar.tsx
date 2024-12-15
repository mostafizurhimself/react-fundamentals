import menu from "../menu";
import AppLogo from "./app-logo";
import SidebarItem from "./sidebar-item";
import { clsx } from "clsx";

type SidebarProps = {
  isCollapsed: boolean;
  onClose: () => void;
};

const Sidebar = (props: SidebarProps) => {
  return (
    <>
      <aside
        className={clsx(
          "h-screen shadow absolute bg-white transform  md:translate-x-0 z-20 transition-width duration-150",
          props.isCollapsed ? "w-[80px]" : "w-64",
          props.isCollapsed ? "translate-x-[-80px]" : "translate-x-0"
        )}
      >
        <div className="h-16 flex gap-2 items-center p-4">
          <div className="flex-shrink-0">
            <AppLogo height={40} />
          </div>
          {!props.isCollapsed && (
            <div>
              <h4 className="font-bold text-lg leading-6 ">Wecommerce</h4>
              <p className="text-sm leading-5 ">Admin Dashboard</p>
            </div>
          )}
        </div>
        <ul className="p-4 space-y-1">
          {menu.map((item, index) => (
            <SidebarItem
              key={index}
              name={item.name}
              icon={item.icon}
              isActive={item.isActive}
              isCollapsed={props.isCollapsed}
            />
          ))}
        </ul>
      </aside>
      {!props.isCollapsed && (
        <div
          onClick={props.onClose}
          className="block md:hidden fixed bg-black bg-opacity-50 h-full w-full z-10"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
