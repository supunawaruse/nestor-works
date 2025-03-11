import React from 'react';

const CategorySection = () => {

  const categories = [
    { id: 1, image: 'category.jpg', name: 'Men' },
    { id: 2, image: 'category.jpg', name: 'Women' },
    { id: 3, image: 'category.jpg', name: 'Kids' },
    { id: 4, image: 'category.jpg', name: 'Accessories' },
  ];

  return (
    <div className='px-4 py-8 md:p-20 lg:px-24'>

      <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-center mb-8">
        BROWSE BY CATEGORY
        <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
      </h2>

      <p className="text-base text-sub text-center mb-8">
        Discover our wide range of categories to find the perfect match for your style.
      </p>

      <div className="grid grid-cols-1 xxs:grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="relative group overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 py-4">
              <h3 className="text-lg font-medium text-white text-center">{category.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default CategorySection;