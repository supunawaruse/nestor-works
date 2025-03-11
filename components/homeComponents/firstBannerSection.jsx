import Image from 'next/image';
import React from 'react';

const FirstBannerSection = () => {
    return (
        <div className="w-full relative mt-8 md:mt-20 lg:mt-24">
            <Image
                src="/banner.png"
                alt="Banner"
                width={1920}
                height={600}
                className="w-full h-auto object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center  px-4 md:px-12">
                <div className="text-center">
                    <h2 className="font-playfair text-3xl sm:text-5xl md:text-6xl lg:text-8xl text-white">Trendy And Perfect.</h2>
                </div>

                <div className="hidden md:block">
                    <Image
                        src="/bannerSmall.jpg"
                        alt="Small Image"
                        width={256}
                        height={256}
                        className="object-cover"
                    />
                    <button className="text-white mt-4 text-sm px-10 py-4 border-2 border-white hover:bg-white hover:text-primary transition duration-300">
                        EXPLORE MORE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FirstBannerSection;