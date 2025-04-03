'use client'
import { getRelatedProducts } from '@/services/firebaseServices';
import React, { useEffect, useState } from 'react'
import WatchCard from './watchCard';
import { useParams } from 'next/navigation';

const RelatedProducts = ({ category }) => {
    const [relatedWatches, SetRelatedWatches] = useState([]);
    const [loading, setLoading] = useState(true);
    const params = useParams();

    const fetchWatch = async () => {
        try {
            const data = await getRelatedProducts(category);
            SetRelatedWatches(data);
        } catch (error) {
            console.error("Error fetching watches:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWatch();
    }, [category])

    if (loading) {
        return (
            <div className="flex justify-center">
                <div className="w-6 h-6 border-4 border-gray-300 border-t-primary rounded-full animate-spin"></div>
            </div>
        )
    }

    if (relatedWatches.filter((e => e.id !== params.id)).length > 0) {
        return (
            <div className='mt-12'>
                <h2 className="font-playfair text-3xl sm:text-4xl text-center mb-8">
                    RELATED PRODUCTS
                    <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
                </h2>

                <div className="grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {relatedWatches.filter((e => e.id !== params.id)).slice(0, 4).map((watch) => (
                        <WatchCard key={watch.id} watch={watch} />
                    ))}
                </div>
            </div>
        )
    } else {
        return null;
    }
}

export default RelatedProducts