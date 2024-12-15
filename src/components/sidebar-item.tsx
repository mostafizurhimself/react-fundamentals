import React from "react";
import { IconType } from "react-icons";

type SidebarItemProps = {
  name: string;
  icon?: IconType;
  isActive?: boolean;
  isCollapsed: boolean;
};

export default function SidebarItem({
  name,
  icon,
  isActive,
  isCollapsed,
}: SidebarItemProps) {
  if (icon) {
    return (
      <li
        className="group hover:text-primary-500 data-[active=true]:bg-primary-50 data-[active=true]:text-primary-500 cursor-pointer p-1 rounded-full transition-colors duration-150"
        data-active={isActive}
      >
        <a href={"#"} className="flex gap-2 items-center text-sm ">
          <span className="h-10 w-10 flex-shrink-0 group-data-[active=true]:bg-primary-500 flex items-center justify-center rounded-full">
            {React.createElement(icon, {
              className: "h-5 w-5 group-data-[active=true]:text-white",
            })}
          </span>
          {!isCollapsed && <span>{name}</span>}
        </a>
      </li>
    );
  }

  if (isCollapsed) {
    return null;
  }

  return <li className="text-xs tracking-wider uppercase p-2">{name}</li>;
}
