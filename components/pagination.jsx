import React from 'react'

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
    <div className="flex justify-center my-4 space-x-2 text-[15px]">
        <button
            className="px-2 md:px-4 py-2 bg-primary rounded disabled:opacity-50 text-white"
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
        >
            Prev
        </button>
        <span className="px-4 py-2">Page {currentPage} of {totalPages}</span>
        <button
            className="px-2 md:px-4 py-2 bg-primary rounded disabled:opacity-50 text-white"
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
        >
            Next
        </button>
    </div>
);

export default Pagination