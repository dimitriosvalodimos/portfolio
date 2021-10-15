import Link from "next/link";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === "light") setTheme("dark");
    if (theme === "dark") setTheme("light");
  };

  return (
    <nav className="flex justify-between items-center sticky top-0 bg-gray-50 z-50 dark:bg-gray-700 h-16 border-b border-gray-800 dark:border-gray-50">
      <ul className="flex justify-evenly items-center w-full h-full">
        <li className="font-semibold text-lg default-text px-2 py-3 hoverable default-transition">
          <Link href="/" prefetch={false}>
            <a className="px-2 py-3">Home</a>
          </Link>
        </li>
        <li className="font-semibold text-lg default-text px-2 py-3 hoverable default-transition">
          <Link href="/projects" prefetch={false}>
            <a className="px-2 py-3">Projects</a>
          </Link>
        </li>
        <li className="font-semibold text-lg default-text px-2 py-3 hoverable default-transition">
          <Link href="/contact" prefetch={false}>
            <a className="px-2 py-3">Contact</a>
          </Link>
        </li>
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
      </ul>
    </nav>
  );
};

export default Navbar;
