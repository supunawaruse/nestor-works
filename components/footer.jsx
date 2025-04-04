import { Mail, MapPin, Phone, Facebook, Heart, LucideHeart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    const links = [
        { title: "Home", path: "/" },
        { title: "Shop", path: "/shop" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" },
        { title: "Privacy Policy", path: "/privacy" },
        { title: "Terms and Conditions", path: "/terms" }
    ];

    return (
        <footer className="bg-[#F5F3F2] px-4 py-8 md:px-24 lg:px-64">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

                    <div className="flex flex-col items-center sm:items-start">
                        <Image
                            src="/logo.png"
                            height={403}
                            width={817}
                            className='h-auto w-32 xs:w-44 mb-4 sm:mb-0'
                            alt='Logo'
                        />
                    </div>

                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="text-base font-semibold mb-4 text-center sm:text-left">Quick Links</h3>
                        <div className="grid grid-cols-2 gap-4 text-center sm:text-left">
                            {links.map((link, idx) => (
                                <Link
                                    key={idx}
                                    href={link.path}
                                    className="text-secondary text-sm hover:text-primary transition duration-300"
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="text-base font-semibold mb-4 text-center sm:text-left">Contact Us</h3>
                        <div className="space-y-3 text-center sm:text-left">
                            <div className="flex items-center justify-center sm:justify-start gap-2">
                                <Phone color='#AE845F' size={18} />
                                <span className="text-secondary text-sm">091 22 58 306</span>
                            </div>
                            <div className="flex items-center justify-center sm:justify-start gap-2">
                                <MapPin color='#AE845F' size={18} />
                                <span className="text-secondary text-sm">No 50, Station Road, Ambalangoda</span>
                            </div>
                            <div className="flex items-center justify-center sm:justify-start gap-2">
                                <Mail color='#AE845F' size={18} />
                                <a
                                    href='mailto:nestorworks1914@gmail.com'
                                    className="text-secondary text-sm hover:text-primary"
                                >
                                    nestorworks1914@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center justify-center sm:justify-start gap-2">
                                <Facebook color='#AE845F' size={18} />
                                <a
                                    href='https://web.facebook.com/nestorworks'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className="text-secondary text-sm hover:text-primary"
                                >
                                    @nestorworks
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-200">
                    <p className="text-secondary text-xs text-center mb-2">
                        &copy; {new Date().getFullYear()} Nestor Works. All rights reserved.
                    </p>
                    <div className="flex items-center text-secondary text-xs text-center justify-center">
                        Made with  <LucideHeart size={16} fill='#ae845f' color='#ae845f' className='mx-1' /> by <Link href="https://www.linkedin.com/in/supuna-warusawithana" className='ml-1'>Supuna Warusawithana</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
