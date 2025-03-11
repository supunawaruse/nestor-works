import HeaderComponent from '@/components/headerComponent'
import React from 'react'
import { Phone, MapPin, Mail } from 'lucide-react'

const Contact = () => {
    return (
        <div>
            <HeaderComponent title="Contacts" />
            <div className='py-8 md:py-12 px-4 md:px-12 lg:px-24'>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-8">
                        <h2 className="font-playfair text-4xl text-secondary mb-4">How To Find Us</h2>
                        <p className="text-sub text-base mb-6">
                            Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email or fill out the contact form and we’ll get back to you.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Phone color='#222222' />
                                <span className="text-secondary">+80 123 567 89</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin color='#222222' />
                                <span className="text-secondary">283 N. Glenwood Street, Levittown, NY</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail color='#222222' />
                                <span className="text-secondary">help.lenos@gmail.com</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-8">
                        <h2 className="font-playfair text-4xl text-secondary mb-4">Contact Us</h2>
                        <p className="text-sub mb-6">
                            Your email address will not be published. Required fields are marked *
                        </p>
                        <form>
                            <div className="mb-4">
                                <input
                                    className="w-full text-sm px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                    type="text"
                                    id="name"
                                    placeholder="Your Name"

                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    className="w-full text-sm px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
                                    type="email"
                                    id="email"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <textarea
                                    className="w-full text-sm px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-primary"
                                    id="message"
                                    rows="4"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="bg-primary text-white py-3 px-8 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                Get in Touch
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact