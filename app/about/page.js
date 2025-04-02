import HeaderComponent from '@/components/headerComponent'
import Image from 'next/image';
import React from 'react'

const About = () => {

    const images = [
        '/shop/shop-1.jpg',
        '/shop/shop-2.jpg',
        '/shop/shop-3.jpg',
        '/shop/shop-4.jpg',
        '/shop/shop-5.jpg',
        '/shop/shop-6.jpg',
        '/shop/shop-7.jpg',
        '/shop/shop-8.jpg',
        '/shop/shop-9.jpg',
        '/shop/shop-10.jpg',
        '/shop/shop-11.jpg',
        '/shop/shop-12.jpg',
        '/shop/shop-13.jpg',
        '/shop/shop-14.jpg',
        '/shop/shop-15.jpg',
        '/shop/shop-16.jpg',
    ];
    return (
        <>
            <HeaderComponent title="About Us" />
            <div className="px-6 py-8 md:px-20 lg:px-24 2xl:px-48">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 w-full mb-8 md:mb-0 md:pr-8">
                        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-secondary mb-4">Our Mission</h2>
                        <p className="text-sub text-sm lg:text-base text-justify">
                            At Nestor Works, our mission is to provide unmatched expertise in selling and repairing watches, proudly serving Sri Lanka since 1914. We are committed to offering a wide selection of premium watches and exceptional repair services, ensuring every watch continues to tick with precision and reliability. With over a century of experience, we strive to deliver excellence and timeless craftsmanship to every customer.
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full lg:p-10 2xl:px-24">
                        <Image
                            src="/about.jpg"
                            alt="Our Mission Image"
                            height={470}
                            width={630}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 mb-4 md:mb-8">
                <h2 className="text-secondary text-3xl md:text-5xl font-playfair text-center mb-4">Celebrating 100 Years of Excellence</h2>
                <p className="text-center text-sm text-sub mb-8 max-w-2xl mx-auto">
                    For a century, we have been selling and repairing timeless watches that tell more than just time.
                    Explore our journey through the years with this collection of memorable moments.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {images.map((image, index) => (
                        <div key={index} className="relative aspect-w-1 aspect-h-1 overflow-hidden rounded-sm">
                            <div className="group relative w-full h-full">
                                <Image
                                    src={image}
                                    alt={`Gallery Image ${index + 1}`}
                                    height={510}
                                    width={680}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-125 group-hover:z-10"
                                />
                                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default About