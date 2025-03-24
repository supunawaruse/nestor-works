import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WatchCard = ({ watch }) => {
    return (
        <Link href={`/shop/${watch.id}`} key={watch.id} className="group overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md">
            <Image
                src={watch.images[0]}
                alt={watch.name}
                width={500}
                height={500}
                className="w-full h-auto object-cover"
            />
            <div className="p-4 text-center">
                <h3 className="text-sm md:text-base text-secondary mb-1">{watch.name}</h3>
                <p className="text-sm md:text-base text-secondary mb-1">{watch.model}</p>
                <p className="text-sm md:text-base text-primary">${watch.price}</p>
            </div>
        </Link>
    )
}

export default WatchCard