import { FiChevronRight } from "react-icons/fi";
import { steps } from "../../data/steps";

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="bg-[#FAF7F2] py-8 sm:py-10 lg:py-12">
            <div className="container-custom">
                {/* Heading */}
                <div className="text-center max-w-2xl mx-auto">
                    <div className="flex items-center justify-center gap-3 mb-3">
                        <span className="h-[1.5px] w-8 sm:w-12 bg-[#D4A359]" />
                        <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C8913A] uppercase">
                            HOW IT WORKS
                        </span>
                        <span className="h-[1.5px] w-8 sm:w-12 bg-[#D4A359]" />
                    </div>

                    <h2 className="font-heading text-3xl sm:text-4xl lg:text-[44px] font-normal text-[#141414] leading-tight">
                        Your Perfect Look in <span className="text-[#C8913A]">Simple Steps</span>
                    </h2>

                    <p className="mt-2.5 text-xs sm:text-sm text-gray-500 leading-relaxed max-w-xl mx-auto">
                        We make your salon experience easy, seamless, and relaxing — from booking to beautiful results.
                    </p>
                </div>

                {/* 4 Steps Row */}
                <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
                    {steps.map((step, idx) => (
                        <div key={step.no} className="relative flex flex-col items-center text-center group">
                            {/* Circle Image Wrapper with Gold Border Ring */}
                            <div className="relative w-40 h-40 sm:w-44 sm:h-44 lg:w-48 lg:h-48 rounded-full p-1 border-2 border-[#D4A359] shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-105 bg-white">
                                {/* Step Number Badge in Top-Left */}
                                <div className="absolute top-0 left-0 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#D4A359] text-white font-medium text-xs sm:text-sm flex items-center justify-center shadow-md z-10 font-heading">
                                    {step.no}
                                </div>

                                {/* Inner Circle Image */}
                                <div className="w-full h-full rounded-full overflow-hidden">
                                    <img
                                        src={step.image}
                                        alt={step.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                                    />
                                </div>
                            </div>

                            {/* Chevron Arrow Connector between Circles (Desktop only) */}
                            {idx < steps.length - 1 && (
                                <div className="hidden lg:flex absolute top-20 -right-4 xl:-right-5 w-8 h-8 rounded-full border border-[#D4A359]/60 bg-[#FAF7F2] text-[#C8913A] items-center justify-center text-xs shadow-sm z-20 pointer-events-none">
                                    <FiChevronRight className="translate-x-[0.5px]" />
                                </div>
                            )}

                            {/* Step Title */}
                            <h3 className="font-heading text-lg sm:text-xl text-[#141414] font-medium mt-6 group-hover:text-[#C8913A] transition">
                                {step.title}
                            </h3>

                            {/* Step Description */}
                            <p className="mt-2 text-xs text-gray-500 leading-relaxed max-w-[240px]">
                                {step.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;