'use client'
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
        // Clear error when user types
        if (errors[id]) {
            setErrors(prev => ({
                ...prev,
                [id]: ''
            }));
        }
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = { ...errors };

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.phone.trim()) {
            newErrors.phone = 'Phone number is required';
            isValid = false;
        } else if (!/^\d+$/.test(formData.phone)) {
            newErrors.phone = 'Phone number should contain only numbers';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = async () => {

        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        setSubmitSuccess(false);

        try {
            await addDoc(collection(db, "messages"), {
                name: formData.name,
                phone: formData.phone,
                message: formData.message,
                timestamp: new Date()
            });
            setFormData({
                name: '',
                phone: '',
                message: ''
            });
            setSubmitSuccess(true);
        } catch (error) {
            console.error("Error adding document: ", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="mt-8 md:mt-0">
            <h2 className="font-playfair text-4xl text-secondary mb-4">Contact Us</h2>
            <p className="text-sub mb-6">
                Your email address will not be published. Required fields are marked *
            </p>

            {submitSuccess && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
                    Thank you for your message! We'll get back to you soon.
                </div>
            )}


            <div className="mb-4">
                <input
                    className={`w-full text-sm px-4 py-3 border ${errors.name ? 'border-primary' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`}
                    type="text"
                    id="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="text-primary text-xs mt-1">{errors.name}</p>}
            </div>

            <div className="mb-4">
                <input
                    className={`w-full text-sm px-4 py-3 border ${errors.phone ? 'border-primary' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`}
                    type="text"
                    id="phone"
                    placeholder="Your Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                />
                {errors.phone && <p className="text-primary text-xs mt-1">{errors.phone}</p>}
            </div>

            <div className="mb-6">
                <textarea
                    className={`w-full text-sm px-4 py-3 border ${errors.message ? 'border-primary' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-primary`}
                    id="message"
                    rows="4"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-primary text-xs mt-1">{errors.message}</p>}
            </div>

            <button
                type="button"
                onClick={handleSubmit}
                className="bg-primary rounded-sm text-white py-3 px-8 hover:bg-secondary flex items-center justify-center"
                disabled={isLoading}
            >
                {isLoading ? (
                    <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                    </>
                ) : (
                    'Get in Touch'
                )}
            </button>
        </div>
    );
}

export default ContactForm;