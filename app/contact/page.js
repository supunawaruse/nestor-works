import HeaderComponent from '@/components/headerComponent'
import React from 'react'
import { Phone, MapPin, Mail, Facebook } from 'lucide-react'
import ContactForm from '@/components/contactForm'

const Contact = () => {
    return (
        <div>
            <HeaderComponent title="Contacts" />
            <div className='px-6 py-8 md:py-12  md:px-12 lg:px-24 2xl:px-48'>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="">
                        <h2 className="font-playfair text-4xl text-secondary mb-4">How To Find Us</h2>
                        <p className="text-sub text-base mb-6">
                            Get in touch with us to explore our collection of premium watches. Give us a call, send us an email, or fill out the contact form, and our team will be happy to assist you with any inquiries.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <Phone color='#AE845F' />
                                <span className="text-secondary">091 22 58 306</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin color='#AE845F' />
                                <span className="text-secondary">No 50, Station Road, Ambalangoda</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail color='#AE845F' />
                                <a href='https://nestorworks1914@gmail.com' className="text-secondary">nestorworks1914@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Facebook color='#AE845F' />
                                <a href='https://web.facebook.com/nestorworks' className="text-secondary">@nestorworks</a>
                            </div>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    )
}

export default Contact