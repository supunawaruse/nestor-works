'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { getWatchByDocumentId } from '@/services/firebaseServices';
import SingleImageSkeleton from '@/components/skeletons/singleImageSkeleton';
import SmallImagesSkeleton from '@/components/skeletons/smallImagesSkeleton';
import WatchDetailsSkeleton from '@/components/skeletons/watchDetailsSkeleton';
import RelatedProducts from '@/components/relatedProducts';

const WatchPage = () => {
  const [watch, setWatch] = useState();
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const params = useParams();

  const fetchWatch = async () => {
    try {
      const result = await getWatchByDocumentId(params?.id);
      if (result.success) {
        setWatch(result.data)
      } else {
        console.error("Error:", result.message);
      }
    } catch (error) {
      console.error("Error fetching watches:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWatch();
  }, [params?.id])

  return (
    <div className='px-4 py-8 md:p-16 lg:p-20 lg:px-24 2xl:px-48'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className='flex flex-col lg:flex-row gap-4 xs:px-4 sm:px-24 md:px-0'>
          {/* <div className='flex lg:flex-col gap-4 order-2 lg:order-1 '>
            {loading ? (
              <SmallImagesSkeleton />
            ) : (
              <>
                <div className='h-20 w-20 transition-transform duration-300 hover:scale-105 hover:shadow-md'>
                  <Image
                    src={loading ? null : watch.images[0]}
                    alt={watch?.name}
                    width={300}
                    height={300}
                    className="w-full h-auto shadow-md"
                  />
                </div>
                <div className='h-20 w-20 transition-transform duration-300 hover:scale-105 hover:shadow-md'>
                  <Image
                    src={loading ? null : watch.images[0]}
                    alt={watch?.name}
                    width={300}
                    height={300}
                    className="w-full h-auto shadow-md"
                  />
                </div>
              </>
            )}
          </div> */}


          <div className='flex-1 order-1 lg:order-2 md:p-8'>
            {loading ? (
              <SingleImageSkeleton />
            ) : (
              <Image
                src={loading ? null : watch.images[0]}
                alt={watch?.name}
                width={800}
                height={800}
                className="w-full h-auto shadow-md"
              />
            )}
          </div>
        </div>


        <div>
          {loading ? (
            <WatchDetailsSkeleton />
          ) : (
            <>
              <p className='text-sm text-sub mb-4'>
                <Link href="/" className='hover:text-primary'>Home</Link> /{' '}
                <Link href="/shop" className='hover:text-primary'>Shop</Link> / {watch?.name} {watch?.model}
              </p>
              <h1 className="text-5xl font-normal font-playfair text-secondary">{watch?.name}</h1>
              <p className="text-2xl text-primary font-medium mt-2 mb-6">{watch?.model}</p>
              <hr />
              <p className="text-sub text-[15px] mt-4">{watch?.shortDescription}</p>
              <div className="mt-6 flex items-center space-x-4 text-[15px] mb-4">
                <p className="text-sub font-semibold">Availability: <span className="text-primary text-base font-bold">{watch?.stock > 0 ? "In Stock" : "Out Of Stock"}</span></p>
              </div>
              <hr />

              <div className="mt-6 text-sm grid grid-cols- gap-4">
                <div className="space-y-2">
                  <p className="text-sub text-[15px] font-semibold">
                    Brand: <span className="text-secondary font-medium">{watch?.brand}</span>
                  </p>
                  <p className="text-sub text-[15px] font-semibold">
                    Dial Color: <span className="text-secondary font-medium">{watch?.dialColor}</span>
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sub text-[15px] font-semibold">
                    Category: <span className="text-secondary font-medium">{watch?.category}</span>
                  </p>
                  <p className="text-sub text-[15px] font-semibold">
                    Model: <span className="text-secondary font-medium">{watch?.model}</span>
                  </p>
                </div>

                <div className="space-y-2 md:col-span-2">
                  <p className="text-sub text-[15px] font-semibold">
                    Strap Material: <span className="text-secondary font-medium">{watch?.strapMaterial}</span>
                  </p>
                  <p className="text-sub text-[15px] font-semibold">
                    Movement Type: <span className="text-secondary font-medium">{watch?.movementType}</span>
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {watch?.tags?.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-secondary text-white text-sm font-medium py-1 px-4 rounded-full inline-flex items-center"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {loading ? (
        <p>loading</p>
      ) : (
        <RelatedProducts category={watch?.category} />
      )}

    </div>
  )
}

export default WatchPage