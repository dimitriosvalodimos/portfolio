import Link from "next/link"
import {HiSun, HiMoon} from "react-icons/hi"
import {useTheme} from "next-themes"

const Navbar = () => {
  const {theme, setTheme} = useTheme()
  return (
    <nav className="sticky top-0 left-0 bg-white z-50 dark:bg-gray-700 flex h-16 border-b border-gray-800 dark:border-gray-50">
      <ul className="flex justify-evenly items-center w-full h-full">
        <li className="font-semibold text-lg text-gray-800 dark:text-gray-50 p-4 hoverable">
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li className="font-semibold text-lg text-gray-800 dark:text-gray-50 p-4 hoverable">
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </li>
        <li className="font-semibold text-lg text-gray-800 dark:text-gray-50 p-4 hoverable">
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li> 
      </ul>
      <button className="p-2 px-2 hoverable" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        {theme === 'light' ? <HiMoon className="text-gray-800 text-lg" /> : <HiSun className="text-gray-50 text-lg" />}
      </button>
    </nav>
  )
}

export default Navbar
