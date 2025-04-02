'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, Search } from 'lucide-react'
import { usePathname } from "next/navigation";
import WatchSearch from "./watchSearch";

const links = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" }
];

const NavLink = ({ link, pathname, onClick }) => {
    const isHome = link.path === "/";
    const isActive = isHome ? pathname === "/" : pathname.startsWith(link.path) && link.path !== "/";

    return (
        <Link
            href={link.path}
            className={`${isActive ? "text-primary font-semibold" : "text-secondary"} hover:text-primary text-base`}
            onClick={onClick}
        >
            {link.title}
        </Link>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const pathname = usePathname();

    return (
        <div className="w-full h-20 flex items-center justify-between px-8 md:px-12 lg:px-16 shadow-md">
            <Link href="/">
                <Image src="/logo.png" height={403} width={600} className='h-auto w-32 xs:w-36' alt='' />
            </Link>

            <div className="hidden md:flex items-center ">
                <div className="flex space-x-6 text-[15px] mx-auto">
                    {links.map((link, idx) => (
                        <NavLink key={idx} link={link} pathname={pathname} onClick={() => setIsOpen(false)} />
                    ))}
                </div>

                <div className="ml-8 w-80">
                    <WatchSearch />
                </div>
            </div>

      
            <div className="flex md:hidden items-center space-x-4">
                <button onClick={() => setIsOpen(!isOpen)}>
                    <Menu />
                </button>
            </div>

            <div className={`z-10 fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden`}>
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsOpen(false)}>
                        <X />
                    </button>
                </div>

                <div className="px-4 mb-6">
                    <WatchSearch isMobile />
                </div>

                <nav className="flex flex-col items-center space-y-6 text-sm">
                    {links.map((link, idx) => (
                        <NavLink key={idx} link={link} pathname={pathname} onClick={() => setIsOpen(false)} />
                    ))}
                </nav>
            </div>

            {showMobileSearch && (
                <div className="md:hidden fixed inset-0 bg-white z-20 p-4">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">Search Watches</h2>
                        <button onClick={() => setShowMobileSearch(false)}>
                            <X />
                        </button>
                    </div>
                    <WatchSearch />
                </div>
            )}
        </div>
    );
};

export default Navbar;