'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const WatchPage = () => {

  const watch = { id: 1, title: "Rolex Submariner", color: "silver", price: 12500, image: "/watch.jpg", category: "luxury", description: "The EcoSmart Fleece Hoodie full-zip hooded jacket provides medium weight fleece comfort all year around. Feel better in this sweatshirt because Hanes keeps plastic bottles of landfills by using recycled polyester.7.8 ounce fleece sweatshirt made with up to 5 percent polyester created from recycled plastic." }
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='px-4 py-8 md:p-16 lg:p-20 lg:px-24'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className='flex flex-col lg:flex-row gap-4 xs:px-4 sm:px-24 md:px-0'>
          <div className='flex lg:flex-col gap-4 order-2 lg:order-1 '>
            <div className='h-20 w-20 bg-red-200'>
              <Image
                src={watch.image}
                alt={watch.title}
                width={300}
                height={300}
                className="w-full h-auto shadow-md"
              />
            </div>
            <div className='h-20 w-20 bg-red-200'>
              <Image
                src={watch.image}
                alt={watch.title}
                width={300}
                height={300}
                className="w-full h-auto shadow-md"
              />
            </div>
          </div>

          {/* Large Image */}
          <div className='flex-1 order-1 lg:order-2'>
            <Image
              src={watch.image}
              alt={watch.title}
              width={800}
              height={800}
              className="w-full h-auto shadow-md"
            />
          </div>
        </div>

        {/* Right: Watch Details */}
        <div>
          <p className='text-sm text-sub mb-4'>
            <Link href="/" className='hover:text-primary'>Home</Link> /{' '}
            <Link href="/shop" className='hover:text-primary'>Shop</Link> / {watch.title}
          </p>
          <h1 className="text-4xl font-normal font-playfair text-secondary">{watch.title}</h1>
          <p className="text-xl text-primary font-medium mt-2 mb-6">${watch.price}</p>
          <hr />
          <p className="text-sub text-sm mt-4">{watch.description}</p>

          {/* Add to Cart */}
          <div className="mt-6 flex items-center space-x-4 text-sm mb-4">
            <input
              type="number"
              value={quantity}
              min="1"
              className="border rounded px-3 py-1 w-16 text-center"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button className="bg-primary text-white px-4 py-2 rounded">Add to Cart</button>
          </div>
          <hr />
          {/* Tags */}
          <div className="mt-6 text-sm">
            <p className="text-sub">Category: <span className="text-secondary">{watch.category}</span></p>
            <p className="text-sub">Color: <span className="text-secondary">{watch.color}</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WatchPage