import HeaderComponent from '@/components/headerComponent'
import React from 'react'

const TermsConditions = () => {
    return (
        <div>
            <HeaderComponent title="Terms & Conditions" />
            <div className='px-6 py-8 md:py-12 md:px-12 lg:px-24 2xl:px-48 bg-gray-100 rounded-lg shadow-md'>
                <h2 className="font-playfair text-4xl text-secondary mb-6 border-b-2 pb-2 border-primary">Terms & Conditions</h2>
                <p className="text-sub text-lg mb-6 leading-relaxed">
                    Welcome to Nestor Works. By using our website and purchasing our products, you agree to comply with the following terms and conditions.
                </p>
                <div className="space-y-6">
                    <div className="p-4 bg-white rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-secondary mb-2">1. General</h3>
                        <p className="text-sub">
                            Nestor Works, established in 1914 in Ambalangoda, Sri Lanka, specializes in selling branded wristwatches, wall clocks, and watch repair services.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-secondary mb-2">2. Products & Services</h3>
                        <p className="text-sub">
                            We offer a collection of premium watches, including brands like Seiko, Casio, Titan, Alba, and Citizen. All purchases are subject to availability.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-secondary mb-2">3. Returns & Refunds</h3>
                        <p className="text-sub">
                            We accept returns within 7 days of purchase for unworn items with the original receipt. Repair services are non-refundable.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-secondary mb-2">4. Warranty</h3>
                        <p className="text-sub">
                            Our watches come with manufacturer warranties.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TermsConditions