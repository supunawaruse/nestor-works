'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '@/lib/firebase';
import { sampleWatches } from '@/lib/data';

const DetailsSection = () => {

    const onclick = async () => {
        try {
            const watchesCollection = collection(db, "watches"); 

            for (const watch of sampleWatches) {
                await addDoc(watchesCollection, watch);
            }

            console.log("Watches added successfully!");
            alert("Watches added successfully!");
        } catch (error) {
            console.error("Error adding watches: ", error);
            alert("Failed to add watches.");
        }
    }
    return (
        <div className='px-4 py-8 md:p-20 lg:px-24 2xl:px-48'>
            <button onClick={onclick}>Click me</button>
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
                        Trusted Watch Experts Since 1914
                    </h2>
                    <p className="text-sub mb-6 text-sm md:text-base">
                        For over a century, Nestor Works has been the go to destination in Sri Lanka for premium watches and expert watch repairs. Whether you're looking for a timeless classic or need professional servicing, we are dedicated to providing the best for our valued customers. Experience quality, trust, and excellence with every tick.
                    </p>
                    <Link href="/shop" className="bg-secondary text-white text-sm px-10 py-4  hover:bg-primary transition duration-300">
                        SHOP THE COLLECTION
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default DetailsSection