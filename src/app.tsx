import clsx from "clsx";
import { useState } from "react";
import Dashboard from "./components/dashboard";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import SidebarContext from "./contexts/sidebar-context";
import ThemeContext from "./contexts/theme-context";

export default function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <SidebarContext.Provider value={{ isCollapsed, setIsCollapsed }}>
        <div className="w-full flex">
          <Sidebar
            className={clsx(
              isCollapsed
                ? "w-[80px] translate-x-[-80px]"
                : "w-64 translate-x-0"
            )}
          />
          <div
            className={clsx(
              "flex-1 ms-0",
              isCollapsed ? "md:ml-[80px]" : "md:ml-64",
              theme === "light"
                ? "bg-slate-100 text-slate-800"
                : "bg-slate-800 text-slate-100"
            )}
          >
            <Header />
            <main className="p-8 h-[calc(100vh-4rem)]">
              <Dashboard />
            </main>
          </div>
        </div>
      </SidebarContext.Provider>
    </ThemeContext.Provider>
  );
}
