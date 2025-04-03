import React from 'react'

const FilterSection = ({ title, items, selectedItem, onChange }) => (
    <div className="mb-6 border-b pb-4">
        <h3 className="font-playfair font-medium mb-4 text-2xl border-l-4 pl-3 border-l-primary text-secondary">
            {title}
        </h3>
        <ul className={`grid ${items.length > 1 ? 'grid-cols-2 gap-3' : ''}`}>
            <li
                onClick={() => onChange('')}
                className={`cursor-pointer text-[15px] mb-2 px-4 py-2 rounded-lg transition-all ${selectedItem === ''
                        ? 'bg-[#ae845fe6] text-white shadow-md'
                        : 'bg-gray-100 hover:bg-gray-200'
                    }`}
            >
                All
            </li>
            {items.map(item => (
                <li
                    key={item}
                    onClick={() => onChange(item)}
                    className={`cursor-pointer text-[15px] mb-2 px-4 py-2 rounded-lg transition-all ${selectedItem === item
                            ? 'bg-[#ae845fe6] text-white shadow-md'
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                >
                    {item}
                </li>
            ))}
        </ul>
    </div>
);


export default FilterSection