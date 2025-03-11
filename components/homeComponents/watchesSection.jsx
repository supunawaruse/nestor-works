import Image from 'next/image';
import React from 'react';

const WatchesSection = () => {
    // Dummy data for watches
    const watches = [
        { id: 1, image: '/watch.jpg', title: 'Classic Leather Watch', price: '$199' },
        { id: 2, image: '/watch.jpg', title: 'Sport Chronograph Watch', price: '$249' },
        { id: 3, image: '/watch.jpg', title: 'Minimalist Silver Watch', price: '$179' },
        { id: 4, image: '/watch.jpg', title: 'Luxury Gold Watch', price: '$399' },
        { id: 5, image: '/watch.jpg', title: 'Classic Leather Watch', price: '$199' },
        { id: 6, image: '/watch.jpg', title: 'Sport Chronograph Watch', price: '$249' },
        { id: 7, image: '/watch.jpg', title: 'Minimalist Silver Watch', price: '$179' },
        { id: 8, image: '/watch.jpg', title: 'Luxury Gold Watch', price: '$399' },
    ];

    return (
        <div className='px-4 md:px-16 lg:px-24'>
            
                <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-center mb-8">
                    OUR BEST SELLER
                    <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
                </h2>

                <div className="flex justify-center md:space-x-6 mb-12 flex-wrap gap-2">
                    <button className="px-4 py-2 text-sm font-medium text-white bg-primary transition duration-300">
                        New Arrivals
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-primary border-2 border-primary bg-white te transition duration-300">
                        Best Sellers
                    </button>
                    <button className="px-4 py-2 text-sm font-medium text-primary border-2 border-primary bg-white te transition duration-300">
                        Top Rated
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {watches.map((watch) => (
                        <div key={watch.id} className="group overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md">
                            <Image
                                src={watch.image}
                                alt={watch.title}
                                width={500}  
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                            <div className="p-4 text-center">
                                <h3 className="text-sm md:text-base text-secondary mb-1">{watch.title}</h3>
                                <p className="text-sm md:text-base text-primary">{watch.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        
    );
};

export default WatchesSection;