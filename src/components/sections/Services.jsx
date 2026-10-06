import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";
import { services } from "../../data/services";

const Services = () => {
    const [active, setActive] = useState(0);

    return (
        <section id="services" className="bg-dark py-6 sm:py-8 lg:py-10">
            <div className="container-custom">
                <SectionHeading
                    label="OUR SERVICES"
                    title="Premium Hair Care"
                    highlight="Services"
                    light
                    desc="From classic cuts to advanced treatments, we offer a complete range of hair care solutions to bring out your best."
                />

                <div className="mt-6 sm:mt-7 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
                    {services.map(({ title, desc, image, icon: Icon }) => (
                        <div
                            key={title}
                            className="group relative bg-dark-card border border-white/10 rounded-lg overflow-hidden hover:border-gold transition"
                        >
                            <div className="h-40 sm:h-44 overflow-hidden">
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            <div className="relative px-4 pb-4 pt-8">
                                <span className="absolute -top-5 left-4 w-11 h-11 rounded-full bg-dark border border-gold flex items-center justify-center text-gold text-base">
                                    <Icon />
                                </span>
                                <h3 className="text-white text-lg font-medium mb-1.5">{title}</h3>
                                <p className="text-gray-400 text-xs leading-relaxed min-h-[58px]">{desc}</p>

                                <div className="mt-3 flex items-center justify-between">
                                    <a href="#" className="text-[11px] tracking-widest text-gold hover:text-gold-light">
                                        View Details
                                    </a>
                                    <span className="w-7 h-7 rounded-full border border-gold text-gold flex items-center justify-center group-hover:bg-gold group-hover:text-white transition">
                                        <FiArrowRight className="text-xs" />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dots + View all */}
                <div className="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex gap-2 sm:ml-[45%]">
                        {[0, 1, 2].map((i) => (
                            <button
                                key={i}
                                onClick={() => setActive(i)}
                                className={`h-1 rounded-full transition-all ${active === i ? "w-10 bg-gold" : "w-6 bg-white/30"
                                    }`}
                            />
                        ))}
                    </div>
                    <a href="#" className="flex items-center gap-2 text-xs text-gray-300 hover:text-gold">
                        View All Services
                        <span className="w-8 h-8 rounded-full border border-gold text-gold flex items-center justify-center">
                            <FiArrowRight className="text-xs" />
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;