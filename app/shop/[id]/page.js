'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'

const WatchPage = () => {

  const watch = { id: 1, title: "Rolex Submariner", color: "silver", price: 12500, image: "/watch.jpg", category: "luxury", description: "The EcoSmart Fleece Hoodie full-zip hooded jacket provides medium weight fleece comfort all year around. Feel better in this sweatshirt because Hanes keeps plastic bottles of landfills by using recycled polyester.7.8 ounce fleece sweatshirt made with up to 5 percent polyester created from recycled plastic." }
  const [quantity, setQuantity] = useState(1);

  const watches = [
    { id: 1, image: '/watch.jpg', title: 'Classic Leather Watch', price: '$199' },
    { id: 2, image: '/watch.jpg', title: 'Sport Chronograph Watch', price: '$249' },
    { id: 3, image: '/watch.jpg', title: 'Minimalist Silver Watch', price: '$179' },
    { id: 4, image: '/watch.jpg', title: 'Luxury Gold Watch', price: '$399' }
  ];

  return (
    <div className='px-4 py-8 md:p-16 lg:p-20 lg:px-24 2xl:px-48'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className='flex flex-col lg:flex-row gap-4 xs:px-4 sm:px-24 md:px-0'>
          <div className='flex lg:flex-col gap-4 order-2 lg:order-1 '>
            <div className='h-20 w-20 transition-transform duration-300 hover:scale-105 hover:shadow-md'>
              <Image
                src={watch.image}
                alt={watch.title}
                width={300}
                height={300}
                className="w-full h-auto shadow-md"
              />
            </div>
            <div className='h-20 w-20 transition-transform duration-300 hover:scale-105 hover:shadow-md'>
              <Image
                src={watch.image}
                alt={watch.title}
                width={300}
                height={300}
                className="w-full h-auto shadow-md"
              />
            </div>
          </div>


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


        <div>
          <p className='text-sm text-sub mb-4'>
            <Link href="/" className='hover:text-primary'>Home</Link> /{' '}
            <Link href="/shop" className='hover:text-primary'>Shop</Link> / {watch.title}
          </p>
          <h1 className="text-4xl font-normal font-playfair text-secondary">{watch.title}</h1>
          <p className="text-xl text-primary font-medium mt-2 mb-6">${watch.price}</p>
          <hr />
          <p className="text-sub text-sm mt-4">{watch.description}</p>


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

          <div className="mt-6 text-sm flex flex-col gap-y-2">
            <p className="text-sub">Category: <span className="text-secondary">{watch.category}</span></p>
            <p className="text-sub">Color: <span className="text-secondary">{watch.color}</span></p>
          </div>
        </div>
      </div>
      <div className='mt-12'>
        <h2 className="font-playfair text-3xl sm:text-4xl text-center mb-8">
          RELATED PRODUCTS
          <div className="w-24 h-1 bg-primary mx-auto mt-2"></div>
        </h2>

        <div className="grid grid-cols-1 xxs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {watches.map((watch) => (
            <Link href={`/shop/${watch.id}`} key={watch.id} className='group overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md'>
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
      </div>
    </div>
  )
}

export default WatchPage