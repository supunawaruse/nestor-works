import Image from 'next/image';
import React from 'react';

const BlogsSection = () => {
    const blogs = [
        {
            id: 1,
            image: '/blog.jpg',
            title: 'Top 10 Watches for Men in 2023',
            description: 'Discover the best watches for men this year, featuring luxury, sport, and minimalist designs.',
        },
        {
            id: 2,
            image: '/blog.jpg',
            title: 'How to Choose the Perfect Watch',
            description: 'A comprehensive guide to help you pick the right watch for your style and needs.',
        },
        {
            id: 3,
            image: '/blog.jpg',
            title: 'The History of Luxury Watches',
            description: 'Explore the fascinating history of luxury watches and their evolution over the decades.',
        },
        {
            id: 4,
            image: '/blog.jpg',
            title: 'The History of Luxury Watches',
            description: 'Explore the fascinating history of luxury watches and their evolution over the decades.',
        },
    ];

    return (
        <div className='px-4 py-8 md:p-20 lg:px-24 2xl:px-48'>
                <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-center mb-8">
                    OUR BLOGS
                    <div className="w-16 h-1 bg-primary mx-auto mt-2"></div>
                </h2>

                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className='group overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md'>
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                width={800}
                                height={224}
                                className="w-full h-56 object-cover"
                            />


                            <div className="p-6">
                                <h3 className="text-base text-center text-secondary">{blog.title}
                                    <div className="w-16 h-1 bg-primary mx-auto mt-1"></div>
                                </h3>

                                <p className="text-sub text-sm text-center mt-3">{blog.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default BlogsSection;