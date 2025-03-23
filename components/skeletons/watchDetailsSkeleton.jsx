import React from 'react'

const WatchDetailsSkeleton = () => {
    return (
        <div className="space-y-4">
            <div className="h-4 w-1/4 bg-gray-100 animate-pulse"></div>
            <div className="h-8 w-2/3 bg-gray-100 animate-pulse"></div>
            <div className="h-6 w-1/3 bg-gray-100 animate-pulse"></div>
            <hr className="mt-4" />
            <div className="h-16 w-3/4 bg-gray-100 animate-pulse mt-4"></div>
            <div className="mt-6 flex items-center space-x-4 text-sm mb-4">
                <div className="h-8 w-16 bg-gray-100 animate-pulse rounded"></div>
                <div className="h-8 w-24 bg-gray-100 animate-pulse rounded"></div>
            </div>
            <hr />
            <div className="mt-6 text-sm flex flex-col gap-y-2">
                <div className="h-4 w-1/2 bg-gray-100 animate-pulse"></div>
                <div className="h-4 w-1/2 bg-gray-100 animate-pulse"></div>
                <div className="h-4 w-1/2 bg-gray-100 animate-pulse"></div>
                <div className="h-4 w-1/2 bg-gray-100 animate-pulse"></div>
            </div>
        </div>

    )
}

export default WatchDetailsSkeleton