import { FC, useContext } from "react";
import NotificationDropdown from "./notification-dropdown";
import ProfileDropdown from "./profile-dropdown";
import SidebarToggle from "./sidebar-toggle";
import ThemeSwitch from "./theme-switch";
import ThemeContext from "../contexts/theme-context";
import clsx from "clsx";

const Header: FC = () => {
  const theme = useContext(ThemeContext)?.theme;

  return (
    <header
      className={clsx(
        "shadow-md bg-white h-16 px-8 flex items-center",
        theme === "light"
          ? "bg-white text-slate-800"
          : "bg-slate-900 text-slate-100"
      )}
    >
      <SidebarToggle />

      <div className="ms-auto flex items-center gap-4">
        <ThemeSwitch />
        <NotificationDropdown />
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default Header;
