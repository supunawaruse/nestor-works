'use client'
import { getCollectionSectionData } from '@/services/firebaseServices';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import WatchCard from '../watchCard';

const WatchesSection = () => {
    const [watches, setWatches] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchWatches = async () => {
        try {
            const data = await getCollectionSectionData();
            setWatches(data);
        } catch (error) {
            console.error("Error fetching watches:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWatches();
    }, [])

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className='px-4 pb-8 md:px-16 lg:px-24 2xl:px-48'>

            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-center mb-8">
                OUR COLLECTION
                <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
            </h2>

            <div className="grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                {
                    loading ? (
                        <WatchesGridSkeleton />
                    ) : (
                        watches.map((watch) => (
                            <WatchCard key={watch.id} watch={watch} />
                        ))
                    )
                }
            </div>
            <div className="flex justify-center md:space-x-6 my-8 flex-wrap gap-2">
                <Link href={"/shop"} className="bg-secondary text-white rounded-sm text-sm px-10 py-3  hover:bg-primary transition duration-300">
                    See More
                </Link>
            </div>
        </div>

    );
};

export default WatchesSection;