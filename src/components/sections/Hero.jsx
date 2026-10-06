import { useState, useEffect } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiX } from "react-icons/fi";
import { FaPlay } from "react-icons/fa";

const slides = [
    {
        id: 1,
        kicker: "LOOK GOOD   |   FEEL GREAT",
        title: "Your Style",
        highlight: "Our Expertise",
        desc: "From precision haircuts to transformative styles, we bring out the best version of you.",
        image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=2000&q=85",
        features: [
            { title: "Premium", subtitle: "Hair Care" },
            { title: "Expert", subtitle: "Stylists" },
            { title: "Personalized", subtitle: "Styling" },
        ],
    },
    {
        id: 2,
        kicker: "PREMIUM CARE   |   LUXURY EXPERIENCE",
        title: "Crafted Cuts",
        highlight: "Timeless Elegance",
        desc: "Experience bespoke treatments and artistic hairdressing tailored exclusively to your unique persona.",
        image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&w=2000&q=85",
        features: [
            { title: "Organic", subtitle: "Products" },
            { title: "Master", subtitle: "Colorists" },
            { title: "VIP", subtitle: "Treatment" },
        ],
    },
    {
        id: 3,
        kicker: "CONFIDENCE   |   REFINED STYLE",
        title: "Master Artistry",
        highlight: "Flawless Results",
        desc: "Where passion meets perfection — discover the pinnacle of luxury hair care and styling mastery.",
        image: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=2000&q=85",
        features: [
            { title: "Custom", subtitle: "Grooming" },
            { title: "Modern", subtitle: "Techniques" },
            { title: "Relaxing", subtitle: "Ambience" },
        ],
    },
];

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    // Auto-swap slides every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 5500);
        return () => clearInterval(timer);
    }, []);

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % slides.length);
    };

    return (
        <section id="home" className="relative w-full min-h-[580px] lg:min-h-[640px] lg:max-h-[850px] flex items-center bg-dark overflow-hidden pt-20 pb-6 sm:pb-8">
            {/* Background Slides with smooth swap animation */}
            {slides.map((slide, idx) => {
                const isActive = idx === current;
                return (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-0 scale-100" : "opacity-0 -z-10 scale-105"
                            } transition-transform duration-1000`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover object-center"
                        />
                        {/* Dark Gradient Overlay tailored to match the screenshot */}
                        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 lg:via-dark/65 to-transparent" />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-dark/40" />
                    </div>
                );
            })}

            {/* Neon Glow text in background (as seen on the right wall in reference) */}
            <div className="hidden lg:block absolute right-16 top-1/3 z-10 pointer-events-none select-none text-right">
                <p className="font-heading italic text-3xl xl:text-5xl text-[#E8C07D]/30 leading-tight drop-shadow-[0_0_25px_rgba(232,192,125,0.25)]">
                    Good Hair <br />
                    Brighter <br />
                    Mood
                </p>
            </div>

            {/* Main Content Container */}
            <div className="container-custom relative z-10 w-full h-full flex flex-col justify-center">
                <div className="max-w-2xl text-left">
                    {/* Kicker */}
                    <div className="flex items-center gap-3 mb-3">
                        <p className="text-[11px] sm:text-xs font-medium tracking-[0.25em] text-gray-300 uppercase">
                            {slides[current].kicker}
                        </p>
                    </div>

                    {/* Headline */}
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-[62px] xl:text-[70px] font-normal leading-[1.08] text-white tracking-tight">
                        {slides[current].title} <br />
                        <span className="text-[#D4A359]">{slides[current].highlight}</span>
                    </h1>

                    {/* Description */}
                    <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-gray-300 leading-relaxed max-w-lg">
                        {slides[current].desc}
                    </p>

                    {/* Action Buttons */}
                    <div className="mt-6 sm:mt-7 flex flex-wrap items-center gap-4">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2.5 bg-[#D4A359] hover:bg-[#c49247] text-[#0B0B0B] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                            Book An Appointment
                            <FiArrowRight className="text-base" />
                        </a>

                        <button
                            type="button"
                            onClick={() => setIsVideoOpen(true)}
                            className="inline-flex items-center gap-3 text-white hover:text-[#D4A359] transition group cursor-pointer"
                        >
                            <span className="w-10 h-10 rounded-full border border-white/50 group-hover:border-[#D4A359] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300 group-hover:scale-110">
                                <FaPlay className="text-[10px] text-white group-hover:text-[#D4A359] translate-x-0.5" />
                            </span>
                            <span className="text-xs sm:text-sm font-medium">Watch Our Salon</span>
                        </button>
                    </div>

                    {/* Bottom 3 Feature Pills */}
                    <div className="mt-7 sm:mt-8 pt-5 border-t border-white/10 flex flex-wrap items-center gap-6 sm:gap-10">
                        {slides[current].features.map((feat, i) => (
                            <div key={i} className="flex items-center gap-2.5">
                                <span className="w-[3px] h-8 bg-[#D4A359] rounded-full" />
                                <div className="text-left leading-tight">
                                    <p className="text-white text-xs sm:text-sm font-medium">{feat.title}</p>
                                    <p className="text-gray-400 text-[10px] sm:text-xs mt-0.5">{feat.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Left Slider Arrow Button */}
            <button
                type="button"
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-[#D4A359] hover:text-dark border border-white/20 text-white flex items-center justify-center transition-all duration-300 z-20 backdrop-blur-sm cursor-pointer shadow-lg active:scale-90"
            >
                <FiChevronLeft className="text-lg sm:text-xl" />
            </button>

            {/* Right Slider Arrow Button */}
            <button
                type="button"
                onClick={nextSlide}
                aria-label="Next Slide"
                className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/40 hover:bg-[#D4A359] hover:text-dark border border-white/20 text-white flex items-center justify-center transition-all duration-300 z-20 backdrop-blur-sm cursor-pointer shadow-lg active:scale-90"
            >
                <FiChevronRight className="text-lg sm:text-xl" />
            </button>

            {/* Bottom Slider Dash / Pill Indicators */}
            <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        type="button"
                        onClick={() => setCurrent(i)}
                        aria-label={`Go to slide ${i + 1}`}
                        className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${i === current
                            ? "w-8 bg-[#D4A359]"
                            : "w-5 bg-white/30 hover:bg-white/60"
                            }`}
                    />
                ))}
            </div>

            {/* Video Modal Popup */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
                    <div className="relative w-full max-w-3xl bg-dark border border-[#D4A359]/40 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="flex items-center justify-between p-4 border-b border-white/10">
                            <h3 className="font-heading text-lg text-white">Haircraft Experience</h3>
                            <button
                                type="button"
                                onClick={() => setIsVideoOpen(false)}
                                className="w-8 h-8 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-gold hover:text-dark transition"
                            >
                                <FiX className="text-lg" />
                            </button>
                        </div>
                        <div className="aspect-video w-full">
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                                title="Salon Video Tour"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Hero;
