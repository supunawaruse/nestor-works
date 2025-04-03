import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CategorySection = () => {

  const categories = [
    { id: 1, image: '/categories/mens.png', name: 'Mens Watches', path: 'Mens' },
    { id: 2, image: '/categories/womens.png', name: 'Ladies Watches', path: 'Ladies' },
    { id: 3, image: '/categories/sports.png', name: 'Sports Watches', path: 'Sport' },
    { id: 4, image: '/categories/smart.png', name: 'Smart Watches', path: 'Smart' },
  ];

  return (
    <div className='px-4 md:px-20 lg:px-24 2xl:px-48'>
      <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-center mb-8">
        BROWSE BY CATEGORY
        <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
      </h2>

      <p className="text-base text-sub text-center mb-8">
        Discover our wide range of categories to find the perfect match for your style.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link href={`/shop?category=${category.path}`} key={category.id} className="relative group overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md">
            <div className="relative w-full">
              <Image
                src={category.image}
                alt={category.name}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 py-4">
              <h3 className="text-sm xxs:text-lg font-medium text-white text-center">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>

  );
};

export default CategorySection;