import clsx from "clsx";
import { useContext } from "react";
import SidebarContext from "../contexts/sidebar-context";

type AppLogoProps = {
  className?: string;
  height?: number;
  width?: number;
};

const AppLogo = ({ className, height, width }: AppLogoProps) => {
  const context = useContext(SidebarContext);

  const isCollapsed = context?.isCollapsed;

  return (
    <div className="flex items-center gap-2">
      <div className={clsx("flex-shrink-0", className)}>
        <svg
          viewBox="0 0 48 48"
          className={`fill-current text-primary-500`}
          xmlns="http://www.w3.org/2000/svg"
          height={height}
          width={width}
        >
          <path d="M11.395 44.428C4.557 40.198 0 32.632 0 24 0 10.745 10.745 0 24 0a23.891 23.891 0 0113.997 4.502c-.2 17.907-11.097 33.245-26.602 39.926z" />
          <path d="M14.134 45.885A23.914 23.914 0 0024 48c13.255 0 24-10.745 24-24 0-3.516-.756-6.856-2.115-9.866-4.659 15.143-16.608 27.092-31.75 31.751z" />
        </svg>
      </div>
      {!isCollapsed && (
        <div>
          <h4 className="font-bold text-lg leading-6 ">WeCommerce</h4>
          <p className="text-sm leading-5 ">Admin Dashboard</p>
        </div>
      )}
    </div>
  );
};

export default AppLogo;
