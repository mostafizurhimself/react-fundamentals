import { useEffect, useState } from "react";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import clsx from "clsx";

export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  // console.log({ isCollapsed });

  // useEffect(() => {
  //   const handleKeyPress = (e: KeyboardEvent) => {
  //     console.log({ key: e.key });

  //     if (e.key === "x") {
  //       setIsCollapsed(true);
  //     }
  //   };

  //   window.addEventListener("keypress", handleKeyPress);

  //   return () => {
  //     window.removeEventListener("keypress", handleKeyPress);
  //   };
  // }, []);

  return (
    <div className="w-full flex">
      <Sidebar isCollapsed={isCollapsed} onClose={toggleSidebar} />
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
