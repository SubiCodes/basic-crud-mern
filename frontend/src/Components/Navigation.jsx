import { Link } from "react-router-dom"
import { TbShoppingCartStar } from "react-icons/tb";
import { GiMoon } from "react-icons/gi";
import { useState } from "react";

function Navigation() {

    const [isDark, setIsDark] = useState(false);

    const changeTheme = () => {
        const newTheme = isDark ? 'dark' : 'light';
        setIsDark(!isDark);
        document.documentElement.setAttribute('data-theme', newTheme);
    }

  return (
    <div className="drawer mb-8 z-2">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col rounded-xl">
            <div className="navbar bg-base-200 w-full h-[8vh] rounded-2xl shadow-xl">
            <div className="flex-none lg:hidden">
                <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="inline-block h-6 w-6 stroke-current">
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                </label>
            </div>
            <div className="mx-2 flex-1 gap-2 px-2 w-auto"><Link to={'/'} className="font-bold text-2xl">ShopCaholic</Link><Link to={'/'}  className="font-bold text-2xl"><TbShoppingCartStar/></Link></div>
            <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal">
                <li><Link to={'/create'}>Add a product</Link></li>
                <li><a onClick={changeTheme}>Theme<GiMoon/></a></li>
                </ul>
            </div>
            </div>
        </div>
        <div className="drawer-side z-50">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li><Link to={'/create'} className="text-xl">Add a product</Link></li>
            <li><a className="text-xl" onClick={changeTheme}>Theme<GiMoon/></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navigation