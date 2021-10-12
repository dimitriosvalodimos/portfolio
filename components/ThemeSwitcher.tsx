import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  };
  return (
    <span className="p-1 sm:p-4 hoverable" onClick={() => toggleTheme()}>
      {theme === "light" ? (
        <HiMoon className="hoverable default-text text-2xl" />
      ) : (
        <HiSun className="hoverable default-text text-2xl" />
      )}
    </span>
  );
};

export default ThemeSwitcher;
