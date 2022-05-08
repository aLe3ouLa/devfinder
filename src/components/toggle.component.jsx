import { useContext } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "../contexts/theme.context";

const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="mr-4">
      <div className="transition duration-500 ease-in-out rounded-full">
        {theme === "dark" ? (
          <div
            className="cursor-pointer flex items-center"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <FaSun className="text-gray-500 dark:text-gray-400 text-xl inline" />
            <p className="ml-2 text-gray-500 dark:text-gray-400">Light</p>
          </div>
        ) : (
          <div
            className="cursor-pointer  flex items-center"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <FaMoon className="text-gray-500 dark:text-gray-400 text-xl  inline" />
            <p className="ml-2 text-gray-500 dark:text-gray-400 ">Dark</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Toggle;
