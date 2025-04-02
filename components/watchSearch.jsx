'use client'
import { useState, useEffect, useCallback, useRef } from 'react';
import { collection, query, where, getDocs, or, limit, orderBy } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { debounce } from 'lodash';
import { db } from '@/lib/firebase';
import Image from 'next/image';

const WatchSearch = ({ isMobile = false }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();
    const dropdownRef = useRef(null);
    const inputRef = useRef(null);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target) &&
                inputRef.current && !inputRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const debouncedSearch = useCallback(
        debounce(async (term) => {
            if (term.trim().length < 2) {
                setResults([]);
                setIsLoading(false);
                return;
            }

            try {
                setIsLoading(true);
                const watchesRef = collection(db, 'watches');
                const lowerTerm = term.toLowerCase().trim();
                const watchesQuery = query(watchesRef, limit(50));
                const snapshot = await getDocs(watchesQuery);
                const rankedResults = snapshot.docs
                    .map(doc => {
                        const data = doc.data();
                        const nameMatch = data.name_lower?.includes(lowerTerm);
                        const modelMatch = data.model_lower?.includes(lowerTerm);
                        let relevance = 0;
                        if (nameMatch && modelMatch) relevance = 2;
                        else if (data.name_lower?.startsWith(lowerTerm)) relevance = 1.5;
                        else if (nameMatch) relevance = 1;
                        else if (modelMatch) relevance = 0.5;

                        return {
                            id: doc.id,
                            ...data,
                            relevance,
                            matchType: nameMatch
                                ? (modelMatch ? 'both' : 'name')
                                : 'model'
                        };
                    })
                    .filter(item => item.relevance > 0)
                    .sort((a, b) => b.relevance - a.relevance)
                    .slice(0, 5);

                setResults(rankedResults);
                setIsDropdownOpen(rankedResults.length > 0);
            } catch (error) {
                console.error('Error searching watches:', error);
                setResults([]);
            } finally {
                setIsLoading(false);
            }
        }, 500),
        []
    );

    const handleSearch = (e) => {
        const term = e.target.value;
        setSearchTerm(term);

        if (term.trim() === '') {
            setResults([]);
            setIsDropdownOpen(false);
            return;
        }

        setIsLoading(true);
        debouncedSearch(term);
    };

    const clearSearch = () => {
        setSearchTerm('');
        setResults([]);
        setIsDropdownOpen(false);
    };

    const handleResultClick = (watchId) => {
        router.push(`/shop/${watchId}`);
        setIsDropdownOpen(false);
        setSearchTerm('');
        setResults([]);
    };

    return (
        <div className="relative w-full max-w-md">
            <div className="relative flex items-center">
                <input
                    ref={inputRef}
                    type="text"
                    value={searchTerm}
                    onChange={handleSearch}
                    onFocus={() => results.length > 0 && setIsDropdownOpen(true)}
                    placeholder={`${isMobile ? 'Search here...' : 'Search by name or model...'}`}
                    className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                {searchTerm && !isLoading && (
                    <button
                        onClick={clearSearch}
                        className="absolute right-10 text-gray-400 hover:text-gray-600"
                    >
                        <X size={18} />
                    </button>
                )}
                {isLoading ? (
                    <div className="absolute right-3 animate-spin">
                        <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full"></div>
                    </div>
                ) : (
                    <Search className="absolute right-3 text-gray-400" size={20} />
                )}
            </div>

            {isDropdownOpen && results.length > 0 && (
                <div
                    ref={dropdownRef}
                    className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto"
                >
                    {results.map((watch) => (
                        <div
                            key={watch.id}
                            onClick={() => handleResultClick(watch.id)}
                            className="px-4 py-3 hover:bg-gray-100 cursor-pointer border-b border-gray-100 last:border-b-0 flex justify-between"
                        >
                            <div>
                                <div className="font-medium text-secondary">{watch.name}</div>
                                <div className="text-sm text-primary">{watch.model}</div>
                            </div>
                            <div>
                                <Image
                                    src={watch.images[0]}
                                    alt=""
                                    width={50}
                                    height={30}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default WatchSearch;