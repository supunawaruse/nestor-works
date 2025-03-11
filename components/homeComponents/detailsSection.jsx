import Image from 'next/image'
import React from 'react'

const DetailsSection = () => {
    return (
        <div className='px-4 py-8 md:p-20 lg:px-24'>
          
                <div className="flex flex-col md:flex-row md:space-x-12">
                    <div className="w-full md:w-1/2">
                        <Image
                            src="/homedetails.jpg"
                            alt="Home Details"
                            width={800} 
                            height={600} 
                            className="w-full h-auto"
                        />
                    </div>
                    <div className="w-full md:w-1/2 mt-8 md:mt-0 self-center">
                        <h2 className="font-playfair text-4xl md:text-5xl text-secondary mb-4">
                            Spring Winter 2022
                        </h2>
                        <p className="text-sub mb-6 text-sm md:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.
                        </p>
                        <button className="bg-secondary text-white text-sm px-10 py-4  hover:bg-primary transition duration-300">
                            SHOP THE LOOK
                        </button>
                    </div>
                </div>
            </div>
       
    )
}

export default DetailsSection