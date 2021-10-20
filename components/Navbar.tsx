import dynamic from 'next/dynamic';
import Link from 'next/link';

const Navbar = () => {
  const ThemeSwitcher = dynamic(() => import('@components/ThemeSwitcher'));
  return (
    <nav className="flex justify-between items-center sticky top-0 bg-gray-50 z-50 dark:bg-gray-700 h-16 border-b border-gray-800 dark:border-gray-50">
      <p className="p-4 font-bold default-transition text-lg">DV</p>
      <ul className="flex justify-evenly items-center w-full h-full">
        <li className="font-semibold text-lg default-text px-2 py-3 hoverable default-transition rounded-lg">
          <Link href="/" prefetch={false}>
            <a className="px-2 py-3">Home</a>
          </Link>
        </li>
        <li className="font-semibold text-lg default-text px-2 py-3 hoverable default-transition rounded-lg">
          <Link href="/projects" prefetch={false}>
            <a className="px-2 py-3">Projekte</a>
          </Link>
        </li>
      </ul>
      <ThemeSwitcher />
    </nav>
  );
};

export default Navbar;
