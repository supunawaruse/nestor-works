import Image from 'next/image';
import React from 'react';

const SecondBannerSection = () => {
    return (
        <div className="relative w-full h-[400px] overflow-hidden">
            <Image
                src="/banner6.jpg"
                alt="Banner"
                fill
                className="object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black/30">
                <p className="text-lg mb-4">10% Off & The Best Indie Art Ever!</p>
                <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-8">
                    Be The First To Get Limited Editions
                </h2>
                <button className="bg-white text-black px-8 py-3  hover:bg-primary hover:text-white transition duration-300">
                    Shop New Collection
                </button>
            </div>
        </div>
    );
};

export default SecondBannerSection;