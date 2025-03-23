import { X } from 'lucide-react';
import React from 'react'

const AppliedFilters = ({ activeFilters, onRemoveFilter, onClearAllFilters }) => (
    <div className="mb-6 flex flex-wrap gap-2 items-center">
        <span className="text-sm font-medium">Applied Filters:</span>
        {activeFilters.map(([key, value]) => (
            <div key={key} className="flex items-center bg-gray-100 rounded-full px-3 py-1 text-sm">
                <span>{value}</span>
                <button onClick={() => onRemoveFilter(key)} className="ml-2 text-gray-500 hover:text-gray-700">
                    <X size={16} />
                </button>
            </div>
        ))}
        <button onClick={onClearAllFilters} className="text-sm text-primary hover:underline">
            Clear All Filters
        </button>
    </div>
);

export default AppliedFilters