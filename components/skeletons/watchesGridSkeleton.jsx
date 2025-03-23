import React from 'react'

const WatchesGridSkeleton = () => {
    return (
        Array(4).fill(0).map((_, index) => (
            <div key={index} >
                <div className="group overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md bg-gray-100 animate-pulse rounded-lg">
                    <div className="h-60 bg-gray-100 rounded-md mb-4"></div>
                </div>
                <div className="p-4 flex flex-col items-center ">
                    <div className="h-4 bg-gray-100 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-100 rounded w-1/2"></div>
                </div>
            </div>
        ))
    )
}

export default WatchesGridSkeleton