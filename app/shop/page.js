'use client'
import React from 'react'
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import HeaderComponent from '@/components/headerComponent';
import Image from 'next/image';
import Link from 'next/link';

const watches = [
    { id: 1, title: "Rolex Submariner", price: 12500, image: "/watch.jpg", category: "luxury" },
    { id: 2, title: "Omega Speedmaster", price: 6500, image: "/watch.jpg", category: "sport" },
    { id: 3, title: "Tag Heuer Carrera", price: 3500, image: "/watch.jpg", category: "luxury" },
    { id: 4, title: "Seiko Prospex", price: 800, image: "/watch.jpg", category: "sport" },
    { id: 5, title: "Casio G-Shock", price: 150, image: "/watch.jpg", category: "sport" },
    { id: 6, title: "Tissot PRX", price: 750, image: "/watch.jpg", category: "luxury" },
    { id: 7, title: "Rolex Submariner", price: 12500, image: "/watch.jpg", category: "luxury" },
    { id: 8, title: "Omega Speedmaster", price: 6500, image: "/watch.jpg", category: "sport" },
    { id: 9, title: "Tag Heuer Carrera", price: 3500, image: "/watch.jpg", category: "luxury" },
    { id: 10, title: "Seiko Prospex", price: 800, image: "/watch.jpg", category: "sport" },
    { id: 11, title: "Casio G-Shock", price: 150, image: "/watch.jpg", category: "sport" },
    { id: 12, title: "Tissot PRX", price: 750, image: "/watch.jpg", category: "luxury" },
];

const ShopPage = () => {
    const [filters, setFilters] = useState({ category: "", color: "", price: "", size: "", tag: "" });
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const handleFilterChange = (key, value) => {
        setFilters((prev) => ({ ...prev, [key]: value }));
        setCurrentPage(1);
    };

    const filteredWatches = filters.category
        ? watches.filter(watch => watch.category === filters.category)
        : watches;

    const totalPages = Math.ceil(filteredWatches.length / itemsPerPage);
    const paginatedWatches = filteredWatches.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div>
            <HeaderComponent title="Shop" img='shop.jpg' />
            <div className="md:container mx-auto p-6 md:p-4 grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 md:mt-8">
                {/* Filters - Sidebar */}
                <div className="md:col-span-1">
                    <button
                        className="md:hidden w-full bg-gray-200 p-2 flex justify-between items-center"
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                        Filters {isFilterOpen ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <div className={`${isFilterOpen ? "block" : "hidden"} md:block bg-white py-4 md:p-4`}>
                        {/* Category Filter */}
                        <div className="mb-6 border-b pb-2">
                            <h3 className="font-playfair font-medium mb-4 text-2xl border-l-2 pl-2 border-l-primary">Categories</h3>
                            <ul>
                                {['luxury', 'sport'].map(category => (
                                    <li key={category} onClick={() => handleFilterChange(category)} className='cursor-pointer text-[15px] mb-2'>
                                        {category}
                                    </li>
                                ))}
                                <li onClick={() => handleFilterChange("")} className='cursor-pointer text-[15px] mb-2'>All</li>
                            </ul>
                        </div>

                        {/* Price Filter */}
                        <div className="mb-6 border-b pb-2">
                            <h3 className="font-playfair font-medium mb-4 text-2xl border-l-2 pl-2 border-l-primary">PRICE</h3>
                            {['$10 - $20', '$20 - $30', '$30 - $50', '$50 - $100', '$100 - $200'].map(price => (
                                <div key={price} className="flex items-center space-x-2 text-[15px] mb-2">
                                    <input type="checkbox" />
                                    <label>{price}</label>
                                </div>
                            ))}
                        </div>

                        {/* Size Filter */}
                        <div className="mb-6 border-b pb-2">
                            <h3 className="font-playfair font-medium mb-4 text-2xl border-l-2 pl-2 border-l-primary">SIZE</h3>
                            <div className="flex text-[15px] mb-2 flex-wrap gap-2">
                                {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
                                    <button key={size} className="border px-3 py-1">{size}</button>
                                ))}
                            </div>
                        </div>

                        {/* Color Filter */}
                        <div className="mb-6 border-b pb-2">
                            <h3 className="font-playfair font-medium mb-4 text-2xl border-l-2 pl-2 border-l-primary">COLOR</h3>
                            <div className="flex gap-2 flex-wrap">
                                {['blue', 'red', 'red', 'blue'].map((color, idx) => (
                                    <div key={idx} className={`w-6 h-6 rounded-full bg-${color}-500 cursor-pointer`}></div>
                                ))}
                            </div>
                        </div>

                        {/* Tags Filter */}
                        <div className="mb-6">
                            <h3 className="font-playfair font-medium mb-4 text-2xl border-l-2 pl-2 border-l-primary">TAGS</h3>
                            <div className="flex flex-wrap gap-2 text-[15px] mb-2">
                                {['hot', 'new', 'trend', 'watch', 'women'].map(tag => (
                                    <button key={tag} className="border px-3 py-1">{tag}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Watches Grid */}
                <div className="md:col-span-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                        {paginatedWatches.map((watch) => (
                            <Link href={`/shop/${watch.id}`} key={watch.id} className="group overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md">
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
                            </Link>
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-center my-4 space-x-2 text-[15px]">
                        <button
                            className="px-2 md:px-4 py-2 bg-primary rounded disabled:opacity-50 text-white"
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                        >
                            Prev
                        </button>
                        <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
                        <button
                            className="px-2 md:px-4 py-2 bg-primary rounded disabled:opacity-50 text-white"
                            disabled={currentPage === totalPages}
                            onClick={() => setCurrentPage(currentPage + 1)}
                        >
                            Next
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default ShopPage