import { FC, useContext } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import ThemeContext from "../contexts/theme-context";

const ThemeSwitch: FC = () => {
  const themeContext = useContext(ThemeContext);

  const theme = themeContext?.theme;

  const toggleTheme = themeContext?.toggleTheme;

  return (
    <button
      onClick={toggleTheme}
      className="relative hover:text-primary-500 hover:bg-primary-50 p-2 rounded-full transition-colors duration-150"
    >
      {theme === "light" ? <FiMoon size={24} /> : <FiSun size={24} />}
    </button>
  );
};

export default ThemeSwitch;
