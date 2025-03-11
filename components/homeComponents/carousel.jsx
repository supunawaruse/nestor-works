const Carousel = () => {
    return (

        <div className="relative w-full h-[400px] md:h-[500px] 2xl:h-[700px] overflow-hidden">
            <img
                src="//lenos.mbkip3ms9u-e92498n216kr.p.temp-site.link/wp-content/uploads/2022/03/IMG.jpg"
                alt="Banner"
                className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex flex-col justify-center md:px-48 md:justify-center md:items-start items-center text-white p-4 md:p-8">
                <div className="bg-secondary rounded-full px-8 py-2 mb-2 md:mb-6 text-base">
                    Now Available
                </div>
                <h2 className="font-playfair font-medium text-3xl sm:text-3xl md:text-5xl lg:text-7xl mb-3 md:mb-8 text-center md:text-left">
                    Enhance Garden Unisex Watches In World
                </h2>
                <button className="bg-white text-secondary text-base hover:text-white px-10 py-2  hover:bg-secondary transition duration-300">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default Carousel;