import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
    return (
        <section className="py-10 bg-white">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-0 sm:gap-4 lg:gap-10">
                {" "}
                {/* Text Content Area */}
                <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
                    {/* Heading */}
                    <h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold leading-tight">
                        Build Your Ideal <br className="hidden sm:inline" />
                        <span className="text-brand-gradient">
                            Development Stack
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-4 sm:mt-6 text-slate-600 text-sm sm:text-xl max-w-xl leading-relaxed">
                        Explore frontend, backend, database, and tooling
                        options, compare them side by side, and put together the
                        stack that fits your next project.
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-6 sm:mt-8 flex flex-row gap-3 sm:gap-4 items-center justify-center lg:justify-start w-full sm:w-auto">
                        {/* Gradient Fill Button */}
                        <a
                            href="#technologies"
                            className="w-1/2 sm:w-52 flex items-center justify-center py-3 rounded-xl text-white font-medium text-sm sm:text-base bg-brand-gradient hover:opacity-90 transition-opacity shadow-md text-center"
                        >
                            Explore Technologies
                        </a>

                        {/* Outlined Button */}
                        <a
                            href="#about"
                            className="w-1/2 sm:w-52 flex items-center justify-center py-3 rounded-xl font-medium text-slate-700 text-sm sm:text-base border border-slate-200 hover:bg-slate-50 transition-colors shadow-xs text-center"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
                {/* Banner Image */}
                <div className="flex-1 flex justify-center lg:justify-end w-full">
                    <img
                        src={bannerImage}
                        alt="Dev Stack Illustration"
                        className="w-full object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
