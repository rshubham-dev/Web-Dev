import React from "react";
import Letbuild from '../../public/letbuild.svg'

const CTA = () => {
    return (
        <section className="flex flex-col lg:flex-row w-full relative justify-between bg-[#fef8f5] px-4 lg:px-36 md:py-12 lg:py-12 py-6 overflow-hidden">
            {/* Left Content */}
            <div className="w-1/2 space-y-6 lg:text-left">
                <h1 className="text-lg lg:text-4xl font-medium text-gray-900 leading-snug">
                    Hire the best house <br /> construction service
                </h1>

                {/* Features */}
                <div className="flex flex-row items-center text-gray-700 space-y-6 lg:space-y-0 space-x-4">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="space-y-1 text-center lg:text-left">
                            <div className="flex items-center justify-center lg:justify-start gap-2">
                                <span className="text-orange-500 text-md lg:text-xl">{feature.icon}</span>
                                <span className="font-bold text-md lg:text-lg text-gray-900">
                                    {feature.stat}
                                </span>
                            </div>
                            <p className="text-sm text-gray-600">{feature.label}</p>
                        </div>
                    ))}
                </div>

                {/* Button */}
                <button className="bg-orange-400 hover:bg-orange-500 text-white text-center font-semibold py-2 px-4 lg:py-3 lg:px-6 rounded-md flex items-center gap-4 mx-0 transition-all duration-300">
                    LET'S BUILD 
                    <i className="fa fa-arrow-right text-white"></i>
                </button>
            </div>
            {/* Right Illustration */}
            <figure className="mt-10 lg:mt-0 absolute right-0 bottom-0 w-1/2 md:w-2/5">
                <img loading="lazy" src={Letbuild} alt="letbuild svg" className="w-full max-w-full align-top transition-transform delay-200 ease-in" />
            </figure>
        </section>
    );
};

// Feature Data Array
const featuresData = [
    { icon: "🏠", stat: "7000+", label: "Homes" },
    { icon: "✅", stat: "470+", label: "Quality Checks" },
    { icon: "💰", stat: "100%", label: "Safe Money Transaction" },
];


export default CTA;
