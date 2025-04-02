'use client'
import React, { Suspense, useEffect, useState } from 'react';
import { ChevronDown, ChevronUp, X } from 'lucide-react';
import HeaderComponent from '@/components/headerComponent';
import { collection, getDocs, query, where, limit, startAfter, orderBy, getCountFromServer } from 'firebase/firestore';
import { useSearchParams, useRouter } from 'next/navigation';
import { db } from '@/lib/firebase';
import { BRANDS, CATEGORIES, DIALCOLORS, PRICE } from '@/lib/constants';
import Pagination from '@/components/pagination';
import ShopWatchesGrid from '@/components/shopWatchesGrid';
import AppliedFilters from '@/components/appliedFilter';
import FilterSection from '@/components/filterSection';
import WatchesGridSkeleton from '@/components/skeletons/watchesGridSkeleton';

const ShopPageContent  = () => {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [filters, setFilters] = useState({
        category: searchParams.get('category') || '',
        dialColor: searchParams.get('dialColor') || '',
        brand: searchParams.get('brand') || '',
        price: searchParams.get('price') || '',
    });

    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(parseInt(searchParams.get('page')) || 1);
    const [watches, setWatches] = useState([]);
    const [lastVisible, setLastVisible] = useState(null);
    const [loading, setLoading] = useState(false)
    const [totalPages, setTotalPages] = useState(1)
    const itemsPerPage = 9;

    useEffect(() => {
        fetchWatches();
    }, [filters, currentPage]);

    const fetchWatches = async () => {
        try {
            setLoading(true);
            const watchesCollection = collection(db, 'watches');
            let q = query(watchesCollection, orderBy('price'));

            const { category, brand, price, dialColor } = filters;
            let minPrice, maxPrice;
            if (price) {
                [minPrice, maxPrice] = price.split('-').map(Number);
                q = query(q, where('price', '>=', minPrice), where('price', '<=', maxPrice));
            }
            if (category) q = query(q, where('category', '==', category));
            if (brand) q = query(q, where('brand', '==', brand));
            if (dialColor) q = query(q, where('dialColor', '==', dialColor));

            const countSnapshot = await getCountFromServer(q);
            const totalCount = countSnapshot.data().count;
            setTotalPages(Math.ceil(totalCount / itemsPerPage));

            if (currentPage > 1 && lastVisible) {
                q = query(q, startAfter(lastVisible));
            }

            q = query(q, limit(itemsPerPage));
            const querySnapshot = await getDocs(q);
            const watchesData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            
            setWatches(watchesData);
            setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    };

    const handleFilterChange = (key, value) => {
        const newFilters = { ...filters, [key]: value };
        setFilters(newFilters);
        setCurrentPage(1);
        setLastVisible(null);

        const params = new URLSearchParams();
        Object.entries(newFilters).forEach(([k, v]) => v && params.set(k, v));
        params.set('page', 1);
        router.push(`/shop?${params.toString()}`);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);

        const params = new URLSearchParams();
        Object.entries(filters).forEach(([k, v]) => v && params.set(k, v));
        params.set('page', page);
        router.push(`/shop?${params.toString()}`);
    };

    const handleRemoveFilter = (key) => {
        const newFilters = { ...filters, [key]: '' };
        setFilters(newFilters);
        setCurrentPage(1);
        setLastVisible(null);

        const params = new URLSearchParams();
        Object.entries(newFilters).forEach(([k, v]) => v && params.set(k, v));
        params.set('page', 1);
        router.push(`/shop?${params.toString()}`);
    };

    const handleClearAllFilters = () => {
        const newFilters = { category: '', brand: '', price: '', dialColor: '' };
        setFilters(newFilters);
        setCurrentPage(1);
        setLastVisible(null);

        const params = new URLSearchParams();
        params.set('page', 1);
        router.push(`/shop?${params.toString()}`);
    };

    const activeFilters = Object.entries(filters).filter(([_, value]) => value);

    return (
        <div>
            <HeaderComponent title="Shop" img="shop.jpg" />
            <div className="md:container mx-auto p-6 md:p-4 grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 md:mt-8">
                <div className="md:col-span-1">
                    <button
                        className="md:hidden w-full bg-gray-200 p-2 flex justify-between items-center"
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                        Filters {isFilterOpen ? <ChevronUp /> : <ChevronDown />}
                    </button>
                    <div className={`${isFilterOpen ? 'block' : 'hidden'} md:block bg-white py-4 md:p-4`}>
                        <FilterSection
                            title="Categories"
                            items={CATEGORIES}
                            selectedItem={filters.category}
                            onChange={(value) => handleFilterChange('category', value)}
                        />
                        <FilterSection
                            title="Brands"
                            items={BRANDS}
                            selectedItem={filters.brand}
                            onChange={(value) => handleFilterChange('brand', value)}
                        />
                        <FilterSection
                            title="Price"
                            items={PRICE}
                            selectedItem={filters.price}
                            onChange={(value) => handleFilterChange('price', value)}
                        />
                        <FilterSection
                            title="Dial Color"
                            items={DIALCOLORS}
                            selectedItem={filters.dialColor}
                            onChange={(value) => handleFilterChange('dialColor', value)}
                        />
                    </div>
                </div>

                <div className="md:col-span-3">
                    {activeFilters.length > 0 && (
                        <AppliedFilters
                            activeFilters={activeFilters}
                            onRemoveFilter={handleRemoveFilter}
                            onClearAllFilters={handleClearAllFilters}
                        />
                    )}

                    {
                        !loading ? (
                            watches.length > 0 ? (
                                <>
                                    <ShopWatchesGrid watches={watches} />
                                    <Pagination
                                        currentPage={currentPage}
                                        totalPages={totalPages}
                                        onPageChange={handlePageChange}
                                    />
                                </>
                            ) : (
                                <div>No Watches Found</div>
                            )
                        ) : (
                            <div className='grid grid-cols-3 gap-2'>
                                <WatchesGridSkeleton />
                            </div>

                        )
                    }
                </div>
            </div>
        </div>
    );
};

const ShopPage = () => {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <ShopPageContent />
      </Suspense>
    );
  };

export default ShopPage;