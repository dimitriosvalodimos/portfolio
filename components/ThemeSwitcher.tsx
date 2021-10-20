import { HiSun, HiMoon } from 'react-icons/hi';
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    if (theme === 'dark') setTheme('light');
  };
  return (
    <button
      aria-label="wechsel zwischen hellem und dunklem Design"
      className="p-4 hoverable rounded-lg"
      onClick={() => toggleTheme()}
    >
      {theme === 'light' ? (
        <HiMoon className="hoverable default-text text-2xl" />
      ) : (
        <HiSun className="hoverable default-text text-2xl" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
