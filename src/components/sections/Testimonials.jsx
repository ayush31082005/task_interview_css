import { useState, useEffect } from "react";
import { FaStar, FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";
import { testimonials } from "../../data/testimonials";

// Screen size ke hisaab se kitne cards dikhane hain
const usePerView = () => {
    const getCount = () => {
        if (typeof window === "undefined") return 3;
        if (window.innerWidth >= 1024) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    };

    const [count, setCount] = useState(getCount);

    useEffect(() => {
        const onResize = () => setCount(getCount());
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    return count;
};

const Testimonials = () => {
    const [active, setActive] = useState(0);
    const perView = usePerView();
    const total = testimonials.length;

    const prev = () => setActive((active - 1 + total) % total);
    const next = () => setActive((active + 1) % total);

    // Active index se shuru karke perView cards (wrap-around ke saath)
    const visible = Array.from(
        { length: Math.min(perView, total) },
        (_, i) => testimonials[(active + i) % total]
    );

    return (
        <section className="bg-cream py-8 sm:py-10 lg:py-12">
            <div className="container-custom">
                <SectionHeading
                    label="CLIENT TESTIMONIALS"
                    title="What Our"
                    highlight="Happy Clients"
                    suffix="Say"
                    desc="Real people. Real experiences. Here's what our clients have to say about their journey with us."
                />

                {/* Cards */}
                <div className="mt-8 sm:mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                    {visible.map((t) => (
                        <div
                            key={`${active}-${t.name}`}
                            className="fade-in flex bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg transition overflow-hidden min-h-[230px]"
                        >
                            <img
                                src={t.image}
                                alt={t.name}
                                className="w-28 sm:w-36 object-cover shrink-0"
                            />

                            <div className="relative flex-1 p-5 flex flex-col justify-between">
                                <FaQuoteRight className="absolute top-4 right-4 text-gold/30 text-2xl" />

                                <div>
                                    <div className="flex gap-1 text-gold text-xs mb-3">
                                        {[...Array(5)].map((_, k) => (
                                            <FaStar key={k} />
                                        ))}
                                    </div>
                                    <p className="text-xs text-gray-600 leading-relaxed pr-2">
                                        "{t.text}"
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <h4 className="font-heading text-lg text-dark leading-tight">
                                        {t.name}
                                    </h4>
                                    <p className="mt-1 text-[10px] tracking-widest text-gray-500 uppercase">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <div className="mt-6 sm:mt-8 flex items-center justify-center gap-5">
                    <button
                        onClick={prev}
                        aria-label="Previous testimonial"
                        className="w-9 h-9 rounded-full border border-gold text-gold flex items-center justify-center hover:bg-gold hover:text-white transition"
                    >
                        <FiChevronLeft />
                    </button>

                    <div className="flex items-center gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                aria-label={`Go to testimonial ${i + 1}`}
                                className={`rounded-full transition-all ${i === active ? "w-2 h-2 bg-gold" : "w-1.5 h-1.5 bg-gray-300"
                                    }`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={next}
                        aria-label="Next testimonial"
                        className="w-9 h-9 rounded-full bg-gold text-white flex items-center justify-center hover:bg-gold-dark transition"
                    >
                        <FiChevronRight />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;