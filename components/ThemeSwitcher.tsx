import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  };
  return (
    <button
      className="p-1 sm:p-4 hoverable default-transition"
      onClick={() => toggleTheme()}
    >
      {theme === "light" ? (
        <HiMoon className="hoverable default-text text-2xl" />
      ) : (
        <HiSun className="hoverable default-text text-2xl" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
