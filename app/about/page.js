import HeaderComponent from '@/components/headerComponent'
import Image from 'next/image';
import React from 'react'

const About = () => {
    const teamMembers = [
        {
            id: 1,
            image: '/blog.jpg',
            title: 'Top 10 Watches for Men in 2023',
            description: 'Discover the best watches for men this year, featuring luxury, sport, and minimalist designs.',
        },
        {
            id: 2,
            image: '/blog.jpg',
            title: 'How to Choose the Perfect Watch',
            description: 'A comprehensive guide to help you pick the right watch for your style and needs.',
        }
    ];
    return (
        <>
            <HeaderComponent title="About Us" />
            <div className="px-6 py-8 md:px-20 lg:px-24">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 w-full mb-8 md:mb-0 md:pr-8">
                        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-secondary mb-4">Our Mission</h2>
                        <p className="text-sub text-sm lg:text-base text-justify">
                            Complexion-perfecting natural foundation enriched with antioxidant-packed superfruits, vitamins, and other skin-nourishing nutrients. Creamy liquid formula sets with a pristine matte finish for soft, velvety smooth skin. Made using clean, non-toxic ingredients, our products are designed for everyone…
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full lg:p-10 2xl:px-24">
                        <img
                            src="about.jpg"
                            alt="Our Mission Image"
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
            <div className='w-full bg-[#F5F3F2] flex justify-center items-center p-8 md:py-24 md:px-24'>
                <p className='font-playfair text-secondary text-lg md:text-3xl text-center'>“ We are commutity led, with a continued commitment to be the most responsible
                    version of ourselves and we never rest on our laurels. ”</p>
            </div>
            <div className='px-4 py-8 md:p-20 lg:px-24'>
                <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl text-center mb-8">
                    We Pride Ourselves On Have A
                    Team Of Highly Skilled
                    <div className="w-16 h-1 bg-primary mx-auto mt-2"></div>
                </h2>
                <p className="text-base text-sub text-center mb-8">
                    Preorder now to receive exclusive deals & gifts
                </p>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-8">
                    {teamMembers.map((member) => (
                        <div key={member.id} className='group overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md'>
                            <Image
                                src={member.image}
                                alt={member.title}
                                width={800}
                                height={224}
                                className="w-full h-56 object-cover"
                            />


                            <div className="p-6">
                                <h3 className="text-base text-center text-secondary">{member.title}
                                    <div className="w-16 h-1 bg-primary mx-auto mt-1"></div>
                                </h3>

                                <p className="text-sub text-sm text-center mt-3">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default About