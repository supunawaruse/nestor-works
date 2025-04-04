import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const ShopWatchesGrid = ({ watches }) => (
    <div className="grid grid-cols-1 xxs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 p-2">
        {watches.map(watch => (
            <Link href={`/shop/${watch.id}`} key={watch.id} className="group overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md">
                <Image
                    src={watch.images[0]}
                    alt={watch.name}
                    width={500}
                    height={500}
                    className="w-full h-auto object-cover"
                />
                <div className="p-4 text-center">
                    <h3 className="text-sm md:text-lg font-semibold text-secondary uppercase">{watch.brand} {watch.name}</h3>
                    <p className="text-sm md:text-base text-primary">Model No - {watch.model}</p>
                </div>
            </Link>
        ))}
    </div>
);

export default ShopWatchesGrid