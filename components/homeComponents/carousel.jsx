'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        "/carousel1.jpg",
        "/carousel2.jpg"
    ];

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="relative w-full h-[400px] md:h-[600px] 2xl:h-[700px] overflow-hidden">
            <div
                className="relative w-full h-full transition-transform duration-700 ease-in-out flex"
                style={{
                    transform: `translateX(-${currentIndex * 100}%)`,
                }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                        <Image
                            src={image}
                            alt="Banner"
                            width={1920}
                            height={752}
                            className="w-full h-full object-cover"
                            priority
                        />
                    </div>
                ))}
            </div>

            <div className="absolute inset-0 flex flex-col justify-center md:px-48 md:justify-center md:items-start items-center text-white p-4 md:p-8">
                <div className="bg-secondary rounded-full px-8 py-2 mb-2 md:mb-6 text-base">
                    Check New Offers
                </div>
                <h2 className="font-playfair font-medium text-3xl sm:text-3xl md:text-5xl lg:text-7xl mb-3 md:mb-8 text-center md:text-left">
                    Discover the Perfect Watch for Every Occasion
                </h2>
                <Link href="/shop" className="bg-white text-secondary rounded-sm text-base hover:text-white px-10 py-2  hover:bg-secondary transition duration-300">
                    Shop Now
                </Link>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center gap-x-2 justify-center">
                <button
                    onClick={handlePrev}
                    className=" border-2 border-white text-white p-1 rounded-full"
                >
                    &#8592;
                </button>
                <button
                    onClick={handleNext}
                    className=" border-2 border-white text-white p-1 rounded-full"
                >
                    &#8594;
                </button>
            </div>
        </div>
    );
};

export default Carousel;