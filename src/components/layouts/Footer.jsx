import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import SocialIcons from "../common/SocialIcons";

const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/#services" },
    { name: "Our Stylists", href: "/#stylists" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact Us", href: "/#contact" },
];

const services = [
    "Haircut & Styling",
    "Hair Coloring",
    "Hair Treatment",
    "Hair Spa",
    "Beard Grooming",
    "Hair Care Products",
    "Bridal & Event Styling",
    "Consultation",
];

const Footer = () => (
    <footer id="contact" className="bg-[#0B0B0B] text-gray-300">
        <div className="container-custom py-10 sm:py-12 lg:py-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.4fr]">
            {/* Brand */}
            <div>
                <Link to="/" className="inline-block mb-5">
                    <img
                        src="/logo/logo.png"
                        alt="Haircraft Hair Salon"
                        className="h-12 sm:h-14 w-auto object-contain"
                    />
                </Link>
                <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
                    At Haircraft, we believe great hair creates confidence. Our expert stylists deliver
                    personalized care, modern styles, and a premium salon experience tailored just for you.
                </p>
                <p className="mt-5 mb-4 text-[11px] tracking-[0.25em] text-[#D4A359]">
                    STYLE • CARE • CONFIDENCE
                </p>
                <SocialIcons />
            </div>

            {/* Quick links */}
            <div>
                <h4 className="text-white text-lg mb-3">Quick Links</h4>
                <span className="block w-10 h-0.5 bg-[#D4A359] mb-5" />
                <ul className="space-y-3">
                    {quickLinks.map((l) => (
                        <li key={l.name}>
                            <Link to={l.href} className="flex items-center gap-2 text-sm hover:text-[#D4A359] transition">
                                <FiChevronRight className="text-[#D4A359]" /> {l.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Services */}
            <div>
                <h4 className="text-white text-lg mb-3">Our Services</h4>
                <span className="block w-10 h-0.5 bg-[#D4A359] mb-5" />
                <ul className="space-y-3">
                    {services.map((l) => (
                        <li key={l}>
                            <Link to="/#services" className="flex items-center gap-2 text-sm hover:text-[#D4A359] transition">
                                <FiChevronRight className="text-[#D4A359]" /> {l}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact */}
            <div>
                <h4 className="text-white text-lg mb-3">Contact Us</h4>
                <span className="block w-10 h-0.5 bg-[#D4A359] mb-5" />
                <ul className="space-y-4 text-sm">
                    <li className="flex gap-3">
                        <span className="w-9 h-9 shrink-0 rounded-full border border-[#D4A359] flex items-center justify-center text-[#D4A359]">
                            <FaMapMarkerAlt />
                        </span>
                        <span>123 Styling Street, New Delhi, India - 110001</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <span className="w-9 h-9 shrink-0 rounded-full border border-[#D4A359] flex items-center justify-center text-[#D4A359]">
                            <FaPhoneAlt />
                        </span>
                        <span>+91 98765 43210</span>
                    </li>
                    <li className="flex gap-3 items-center">
                        <span className="w-9 h-9 shrink-0 rounded-full border border-[#D4A359] flex items-center justify-center text-[#D4A359]">
                            <FaEnvelope />
                        </span>
                        <span className="break-all">info@haircraftsalon.com</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="w-9 h-9 shrink-0 rounded-full border border-[#D4A359] flex items-center justify-center text-[#D4A359]">
                            <FaClock />
                        </span>
                        <span>
                            Mon - Sun: 10:00 AM - 8:00 PM <br /> (Closed on Tuesday)
                        </span>
                    </li>
                </ul>
                <Link
                    to="/#contact"
                    className="mt-6 inline-flex items-center justify-center border border-[#D4A359] text-[#D4A359] hover:bg-[#D4A359] hover:text-dark px-6 py-2.5 rounded-full text-xs font-medium tracking-wider transition duration-300"
                >
                    Book An Appointment
                </Link>
            </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
            <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
                <p>© 2026 Haircraft Hair Salon. All Rights Reserved.</p>
                <div className="flex items-center gap-5">
                    <Link to="/" className="hover:text-[#D4A359] transition">Privacy Policy</Link>
                    <Link to="/" className="hover:text-[#D4A359] transition">Terms & Conditions</Link>
                    <Link to="/" className="hover:text-[#D4A359] transition">FAQs</Link>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;