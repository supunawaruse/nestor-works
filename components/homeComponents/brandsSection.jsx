import Image from 'next/image';
import React from 'react';

const BrandsSection = () => {
    // Dummy data for brand images
    const brands = [
        { id: 1, image: '/brand.jpg', name: 'Brand 1' },
        { id: 2, image: '/brand.jpg', name: 'Brand 2' },
        { id: 3, image: '/brand.jpg', name: 'Brand 3' },
        { id: 4, image: '/brand.jpg', name: 'Brand 4' },
        { id: 5, image: '/brand.jpg', name: 'Brand 5' },
        { id: 6, image: '/brand.jpg', name: 'Brand 6' },
        { id: 7, image: '/brand.jpg', name: 'Brand 7' },
        { id: 8, image: '/brand.jpg', name: 'Brand 8' },
    ];

    return (
        <div className='px-4 py-8 md:p-20 lg:px-24'>
                <div className="overflow-hidden whitespace-nowrap">
                    <div className="inline-block animate-marquee">
                        {brands.map((brand) => (
                            <div key={brand.id} className="inline-block mx-8">

                                <Image
                                    src={brand.image}
                                    alt={brand.name}
                                    width={128}
                                    height={128}
                                    className="object-contain"
                                />

                            </div>
                        ))}
                        {brands.map((brand) => (
                            <div key={`${brand.id}-copy`} className="inline-block mx-8">
                                <Image
                                    src={brand.image}
                                    alt={brand.name}
                                    width={128}
                                    height={128}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default BrandsSection;