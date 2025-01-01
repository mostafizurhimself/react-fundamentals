import clsx from "clsx";
import { useState } from "react";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import Sidebar from "./components/sidebar";

export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="w-full flex">
      <Sidebar
        className={clsx(
          isCollapsed ? "w-[80px] translate-x-[-80px]" : "w-64 translate-x-0"
        )}
        isCollapsed={isCollapsed}
        onClose={toggleSidebar}
      />
      <div
        className={clsx(
          "flex-1 bg-slate-100 ms-0",
          isCollapsed ? "md:ml-[80px]" : "md:ml-64"
        )}
      >
        <Header onClick={toggleSidebar} />
        <main className="p-8 h-[calc(100vh-4rem)]">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}
