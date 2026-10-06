import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FaRegCalendarAlt } from "react-icons/fa";
import { navLinks } from "../../data/navLinks";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const isLinkActive = (href) => {
        if (href === "/") {
            return location.pathname === "/" && !location.hash;
        }
        if (href === "/about") {
            return location.pathname === "/about";
        }
        if (href.startsWith("/#")) {
            const hash = href.replace("/", "");
            return location.pathname === "/" && location.hash === hash;
        }
        return false;
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled || open ? "bg-[#0B0B0B]/95 backdrop-blur-md shadow-lg" : "bg-gradient-to-b from-black/80 via-black/40 to-transparent"
                }`}
        >
            <div className="container-custom flex items-center justify-between h-20">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src="/logo/logo.png"
                        alt="Haircraft Hair Salon"
                        className="h-10 sm:h-12 w-auto object-contain"
                    />
                </Link>

                {/* Desktop links */}
                <nav className="hidden lg:flex items-center gap-7">
                    {navLinks.map((link) => {
                        const active = isLinkActive(link.href);
                        return (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-[13px] font-medium transition duration-200 relative py-1 ${active
                                    ? "text-white after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#D4A359]"
                                    : "text-gray-300 hover:text-[#D4A359]"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>

                {/* Desktop CTA */}
                <Link
                    to="/#contact"
                    className="hidden lg:inline-flex items-center gap-2.5 bg-[#D4A359] hover:bg-[#c49247] text-dark font-medium text-xs px-6 py-2.5 rounded-full shadow-md transition-all duration-300 hover:scale-105"
                >
                    <FaRegCalendarAlt className="text-sm" /> Book An Appointment
                </Link>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden text-white text-3xl"
                    aria-label="Toggle menu"
                >
                    {open ? <HiX /> : <HiMenuAlt3 />}
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#0B0B0B] ${open ? "max-h-[500px] border-t border-white/10" : "max-h-0"
                    }`}
            >
                <nav className="container-custom flex flex-col py-4">
                    {navLinks.map((link) => {
                        const active = isLinkActive(link.href);
                        return (
                            <Link
                                key={link.name}
                                to={link.href}
                                onClick={() => setOpen(false)}
                                className={`py-3 text-sm border-b border-white/10 transition ${active ? "text-[#D4A359] font-semibold" : "text-white hover:text-[#D4A359]"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <Link
                        to="/#contact"
                        onClick={() => setOpen(false)}
                        className="mt-4 inline-flex items-center justify-center gap-2 bg-[#D4A359] text-dark text-sm font-medium px-5 py-3 rounded-md"
                    >
                        <FaRegCalendarAlt /> Book An Appointment
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;