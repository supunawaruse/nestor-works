import React from 'react'

const FilterSection = ({ title, items, selectedItem, onChange }) => (
    <div className="mb-6 border-b pb-2">
        <h3 className="font-playfair font-medium mb-4 text-2xl border-l-2 pl-2 border-l-primary">{title}</h3>
        <ul>
            <li onClick={() => onChange('')} className={`cursor-pointer text-[15px] mb-2 ${selectedItem === '' && 'text-primary'}`}>All</li>
            {items.map(item => (
                <li key={item} onClick={() => onChange(item)} className={`cursor-pointer text-[15px] mb-2 ${selectedItem === item && 'text-primary'}`}>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

export default FilterSection