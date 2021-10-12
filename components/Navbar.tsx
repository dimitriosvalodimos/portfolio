import Link from "next/link"
import {HiSun, HiMoon} from "react-icons/hi"
import {useTheme} from "next-themes"

const Navbar = () => {
  const {theme, setTheme} = useTheme()
  return (
    <nav className="flex justify-between sticky top-0 bg-gray-50 z-50 dark:bg-gray-700 h-16 border-b border-gray-800 dark:border-gray-50">
      <ul className="flex justify-evenly items-center w-full h-full">
        <li className="font-semibold text-lg default-text px-3 py-4 hoverable">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="font-semibold text-lg default-text px-3 py-4 hoverable">
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li className="font-semibold text-lg default-text px-3 py-4 hoverable">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li> 
      </ul>
      <button className="p-3 hoverable" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? <HiMoon className="default-text text-lg" /> : <HiSun className="default-text text-lg" />}
      </button>
    </nav>
  )
}

export default Navbar
