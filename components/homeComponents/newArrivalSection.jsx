'use client'
import React, { useEffect, useState } from 'react';
import { getNewArrivals } from '@/services/firebaseServices';
import WatchCard from '../watchCard';
import WatchesGridSkeleton from '../skeletons/watchesGridSkeleton';

const NewArrivalSection = () => {
    const [watches, setWatches] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchWatches = async () => {
        try {
            const data = await getNewArrivals();
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
        <div className='px-4 py-8 md:p-16 lg:px-24 2xl:px-48'>
            <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-center mb-8">
                NEW ARRIVALS
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
        </div>
    )
}

export default NewArrivalSection