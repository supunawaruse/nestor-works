import Link from 'next/link'
import React from 'react'

const HeaderComponent = ({ title, img="contact.jpg" }) => {
    return (
        <div className="relative w-full h-[180px] overflow-hidden">
            <img src={img} alt="Banner" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col justify-center items-center">
                <p className='font-playfair text-4xl md:text-5xl lg:text-6xl text-white mb-4'>{title}</p>
                <p className='text-sm text-white'><Link href="/" className='hover:text-[#ffbc00]'>Home</Link> / {title}</p>
            </div>
        </div>
    )
}

export default HeaderComponent