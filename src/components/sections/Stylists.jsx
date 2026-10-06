import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";
import { stylists } from "../../data/stylists";

const Stylists = () => (
    <section id="stylists" className="bg-cream py-8 sm:py-10 lg:py-12">
        <div className="container-custom">
            <div className="relative">
                <SectionHeading
                    label="OUR EXPERTS"
                    title="Meet Our"
                    highlight="Professional Stylists"
                    desc="Our talented team of stylists are passionate about creating looks that make you feel confident and look your best."
                />
                <a
                    href="#"
                    className="hidden lg:inline-flex absolute right-0 top-1/2 -translate-y-1/2 items-center gap-2 border border-dark/30 rounded-full px-4 py-2 text-[11px] text-dark hover:bg-gold hover:text-white hover:border-gold transition"
                >
                    View All Stylists
                    <span className="w-5 h-5 rounded-full bg-gold text-white flex items-center justify-center">
                        <FiArrowRight className="text-xs" />
                    </span>
                </a>
            </div>

            <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                {stylists.map((s) => (
                    <div key={s.name} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition text-center pb-5">
                        <div className="h-64 overflow-hidden">
                            <img src={s.image} alt={s.name} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                        </div>
                        <h3 className="mt-5 text-lg text-dark">{s.name}</h3>
                        <p className="text-[10px] tracking-widest text-gold mt-1 uppercase">{s.role}</p>
                        <p className="mt-3 px-5 text-xs text-gray-500 leading-relaxed min-h-[58px]">{s.desc}</p>
                        <div className="mt-4 flex justify-center gap-3">
                            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-7 h-7 rounded-full border border-gray-300 text-gray-600 text-[11px] flex items-center justify-center hover:bg-gold hover:text-white hover:border-gold transition"
                                >
                                    <Icon />
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Stylists;