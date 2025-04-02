import { Mail, MapPin, Phone, Facebook } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    const links = [
        { title: "Home", path: "/" },
        { title: "Shop", path: "/shop" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
    ]
    return (
        <footer className="bg-[#F5F3F2] md:px-24 lg:px-64 py-4 px-4">
            <div className="flex flex-col md:flex-row md:justify-between gap-y-4">
                {/* Logo Column */}
                <div className="mb-1 text-sm">
                    <Image src="/logo.png" height={403} width={817} className='h-auto w-32 xs:w-44' alt='Logo' />
                </div>

                {/* Links Column */}
                <div className="md:py-2">
                    <h3 className="text-base font-semibold mb-4">Links</h3>
                    <ul className="space-y-2">
                        {links.map((link, idx) => (
                            <li key={idx}>
                                <Link href={link.path} className="text-secondary text-sm hover:text-primary transition duration-300">
                                    {link.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Info Column */}
                <div className="text-sm space-y-4 md:py-2">
                    <div className="flex items-center gap-2">
                        <Phone color='#AE845F' />
                        <span className="text-secondary">091 22 58 306</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin color='#AE845F' />
                        <span className="text-secondary">No 50, Station Road, Ambalangoda</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail color='#AE845F' />
                        <a href='nestorworks1914@gmail.com' className="text-secondary">nestorworks1914@gmail.com</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <Facebook color='#AE845F' />
                        <a href='https://web.facebook.com/nestorworks' className="text-secondary">@nestorworks</a>
                    </div>
                </div>

            </div>

            <div className="text-center mt-4">
                <p className="text-secondary text-sm">
                    &copy; {new Date().getFullYear()} Nestor Works. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;