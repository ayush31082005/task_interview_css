import React from "react";
import { Link } from "react-router-dom";
import { FiCheckCircle, FiChevronRight } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";

const About = () => {
    return (
        <div className="bg-[#FAF7F2] text-gray-800 min-h-screen flex flex-col justify-between selection:bg-[#D4A359] selection:text-white">
            {/* Header */}
            <Navbar />

            <main className="flex-grow pt-24 sm:pt-28 pb-14 sm:pb-20">
                {/* Breadcrumb / Top Header Bar */}
                <div className="container-custom mb-6 sm:mb-8">
                    <nav className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-gray-500 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200/60 shadow-sm">
                        <Link to="/" className="hover:text-[#C8913A] transition">
                            Home
                        </Link>
                        <FiChevronRight className="text-[#C8913A]" />
                        <span className="text-[#C8913A] font-semibold">Our Philosophy</span>
                    </nav>
                </div>

                {/* Our Philosophy Section */}
                <section className="relative overflow-hidden">
                    <div className="container-custom grid lg:grid-cols-12 gap-12 lg:gap-14 items-center">
                        {/* Left Image Collage */}
                        <div className="lg:col-span-6 relative flex justify-center items-center order-2 lg:order-1">
                            {/* Decorative backing */}
                            <div className="absolute -top-4 -left-4 w-40 h-40 bg-[#E5D5C3] -z-0 rounded-sm" />
                            <div className="absolute -bottom-4 -right-4 w-48 h-32 bg-[#E5D5C3] -z-0 rounded-sm" />

                            <div className="relative z-10 grid grid-cols-12 gap-4 w-full">
                                <div className="col-span-7 overflow-hidden rounded-sm shadow-xl bg-white">
                                    <img
                                        src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85"
                                        alt="Master hair styling in salon"
                                        className="w-full h-[380px] sm:h-[460px] object-cover hover:scale-105 transition duration-700"
                                    />
                                </div>
                                <div className="col-span-5 flex flex-col gap-4 mt-8 sm:mt-12">
                                    <div className="overflow-hidden rounded-sm shadow-xl bg-white">
                                        <img
                                            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=600&q=85"
                                            alt="Hair wash and care treatment"
                                            className="w-full h-[180px] sm:h-[220px] object-cover hover:scale-105 transition duration-700"
                                        />
                                    </div>
                                    <div className="bg-[#0B0B0B] text-white p-5 rounded-sm shadow-xl border-l-4 border-[#D4A359]">
                                        <p className="font-heading text-3xl text-[#D4A359] font-normal">10+</p>
                                        <p className="text-xs text-gray-300 font-medium tracking-wider uppercase mt-1">
                                            Years of Salon Excellence
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Content Column */}
                        <div className="lg:col-span-6 text-left order-1 lg:order-2">
                            <div className="flex items-center gap-3 mb-3">
                                <span className="h-[1.5px] w-12 bg-[#D4A359]" />
                                <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C8913A] uppercase">
                                    OUR PHILOSOPHY
                                </span>
                            </div>

                            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[46px] font-normal leading-[1.18] text-[#141414]">
                                Where Hair Styling Becomes <br />
                                <span className="text-[#C8913A]">A Fine Art Form</span>
                            </h1>

                            <p className="mt-5 text-sm sm:text-base text-gray-600 leading-relaxed">
                                Founded in 2014, Haircraft was built on a simple conviction: a great haircut isn&apos;t just about technique — it is a transformative experience that elevates your poise, self-esteem, and daily confidence.
                            </p>

                            <p className="mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                                Our master artisans bring together meticulous precision cutting, bespoke dimensional coloring, and deep scalp therapies in an atmosphere of warmth and understated luxury.
                            </p>

                            {/* Quote highlight */}
                            <div className="mt-6 border-l-2 border-[#D4A359] pl-4 py-3 bg-[#F3ECE0] rounded-r-md">
                                <p className="font-heading italic text-base sm:text-lg text-[#141414] leading-snug">
                                    &ldquo;We don&apos;t just cut hair — we craft styles that tell your unique story with grace and distinction.&rdquo;
                                </p>
                                <span className="block mt-1 text-[11px] font-semibold text-[#C8913A] uppercase tracking-wider">
                                    — Haircraft Creative Director
                                </span>
                            </div>

                            {/* Feature bullet list */}
                            <div className="mt-6 grid sm:grid-cols-2 gap-3 pt-2">
                                {[
                                    "Personalized Face-Shape Consultation",
                                    "100% Sulfate & Paraben Free Formulas",
                                    "Award-Winning Master Hair Stylists",
                                    "Sanitized, Private VIP Styling Stations",
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#141414]">
                                        <FiCheckCircle className="text-[#C8913A] text-base shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="mt-8">
                                <Link
                                    to="/#contact"
                                    className="inline-flex items-center gap-2.5 bg-[#D4A359] hover:bg-[#c49247] text-[#0B0B0B] text-xs font-semibold uppercase tracking-wider px-8 py-3.5 rounded-sm shadow-sm transition-all duration-300 hover:scale-105 active:scale-95"
                                >
                                    <FaRegCalendarAlt /> Book An Appointment
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default About;