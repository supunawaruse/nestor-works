import HeaderComponent from '@/components/headerComponent'
import React from 'react'

const PrivacyPolicy = () => {
    return (
        <div>
            <HeaderComponent title="Privacy Policy" />
            <div className='px-6 py-8 md:py-12 md:px-12 lg:px-24 2xl:px-48 bg-gray-100 rounded-lg shadow-md'>
                <h2 className="font-playfair text-4xl text-secondary mb-6 border-b-2 pb-2 border-primary">Privacy Policy</h2>
                <p className="text-sub text-lg mb-6 leading-relaxed">
                    At Nestor Works, we respect your privacy and are committed to protecting your personal information.
                </p>
                <div className="space-y-6">
                    <div className="p-4 bg-white rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-secondary mb-2">1. Information We Collect</h3>
                        <p className="text-sub">
                            We collect personal information such as name, email, and phone number when you contact us.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-secondary mb-2">2. How We Use Your Information</h3>
                        <p className="text-sub">
                            We use your information only to make a connection with you. We do not sell or share your data with third parties.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-secondary mb-2">3. Security</h3>
                        <p className="text-sub">
                            We implement industry-standard security measures to protect your data from unauthorized access.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg shadow">
                        <h3 className="text-xl font-semibold text-secondary mb-2">4. Cookies</h3>
                        <p className="text-sub">
                            Our website uses cookies to enhance your experience. You can manage cookie settings in your browser.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy