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
                <div className="mb-1">
                    <Image src="logo.svg" height={0} width={0} className='h-20 w-32' alt='' />
                    <p className="text-secondary">482 123 567 59</p>
                    <p className="text-secondary">BESA: Glenwood Street, Lenitham, W/</p>
                    <Link href="https://www.lenys.org.uk" className="text-primary transition duration-300">
                        lena.leningsport.com
                    </Link>
                </div>

                <div className="mb-1 py-4">
                    <h3 className="text-lg font-semibold mb-4">Links</h3>
                    <ul className="space-y-2">
                        {
                            links.map((link, idx) => (
                                <li key={idx}> <Link href={link.path} className="text-secondary text-sm hover:text-primary transition duration-300">{link.title}</Link></li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className="text-center">
                <p className="text-secondary text-sm">
                    &copy; {new Date().getFullYear()} LENYS. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;