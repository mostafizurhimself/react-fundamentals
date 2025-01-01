import menu from "../menu";
import AppLogo from "./app-logo";
import SidebarItem from "./sidebar-item";
import { clsx } from "clsx";
import SidebarOverlay from "./sidebar-overlay";
import { useContext } from "react";
import ThemeContext from "../contexts/theme-context";

type SidebarProps = {
  className?: string;
};

const Sidebar = (props: SidebarProps) => {
  const theme = useContext(ThemeContext)?.theme;

  return (
    <>
      <aside
        className={clsx(
          "h-screen shadow absolute transform  md:translate-x-0 z-20 transition-width duration-150",
          theme === "light"
            ? "bg-white text-slate-800"
            : "bg-slate-900 text-slate-100",
          props.className
        )}
      >
        <div className="h-16 p-4">
          <AppLogo height={40} />
        </div>
        <ul className="p-4 space-y-1">
          {menu.map((item, index) => (
            <SidebarItem
              key={index}
              name={item.name}
              icon={item.icon}
              isActive={item.isActive}
            />
          ))}
        </ul>
      </aside>
      <SidebarOverlay />
    </>
  );
};

export default Sidebar;
