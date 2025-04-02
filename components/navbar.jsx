'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from 'lucide-react'
import { usePathname } from "next/navigation";

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
    const pathname = usePathname();

    return (
        <div className="w-full h-20 flex items-center justify-between px-8 md:px-12 lg:px-16 shadow-md">
            <Link href="/">
                <Image src="/logo.png" height={403} width={600} className='h-auto w-32 xs:w-36' alt='' />
            </Link>

            <div className="hidden md:flex space-x-6 text-[15px]">
                {links.map((link, idx) => (
                    <NavLink key={idx} link={link} pathname={pathname} onClick={() => setIsOpen(false)} />
                ))}
            </div>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                <Menu />
            </button>

            <div className={`z-10 fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden`}>
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsOpen(false)}>
                        <X />
                    </button>
                </div>

                <nav className="flex flex-col items-center space-y-6 text-sm mt-10">
                    {links.map((link, idx) => (
                        <NavLink key={idx} link={link} pathname={pathname} onClick={() => setIsOpen(false)} />
                    ))}
                </nav>
            </div>
        </div>
    );
};


export default Navbar;
