import { FaRegCalendarAlt, FaPhoneAlt, FaUserTie, FaGem, FaRegClock } from "react-icons/fa";
import Button from "../common/Button";

const features = [
    { icon: FaRegCalendarAlt, a: "Easy", b: "Booking" },
    { icon: FaUserTie, a: "Expert", b: "Stylists" },
    { icon: FaGem, a: "Premium", b: "Hair Care" },
];

const CtaBanner = () => (
    <section className="relative bg-dark overflow-hidden">
        {/* Right image */}
        <div
            className="absolute inset-y-0 right-0 w-full lg:w-3/5 bg-cover bg-center"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=1200&q=80)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/90 lg:via-dark/70 to-transparent" />

        <div className="container-custom relative z-10 py-8 sm:py-10 lg:py-12">
            <div className="max-w-lg">
                <div className="flex items-center gap-3 mb-3">
                    <span className="h-px w-8 bg-gold" />
                    <span className="text-[10px] sm:text-xs tracking-[0.25em] text-gold">TRANSFORM YOUR LOOK</span>
                </div>

                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1]">
                    Ready for a <br />
                    <span className="text-gold">New You?</span>
                </h2>

                <p className="mt-5 text-sm text-gray-300 leading-relaxed max-w-sm">
                    Book your appointment today and let our expert stylists bring out the best version of you.
                </p>

                <div className="mt-6 flex flex-wrap gap-6">
                    {features.map(({ icon: Icon, a, b }, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <span className="w-10 h-10 rounded-full border border-gold text-gold flex items-center justify-center">
                                <Icon />
                            </span>
                            <p className="text-[11px] text-gray-300 leading-tight">{a} <br /> {b}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                    <Button arrow>Book An Appointment</Button>
                    <Button variant="outline">
                        <FaPhoneAlt className="text-xs" /> Talk To Our Expert
                    </Button>
                </div>
            </div>
        </div>

        <p className="hidden md:block absolute bottom-4 right-8 z-10 text-[10px] tracking-[0.3em] text-gray-300">
            HAIR &nbsp;•&nbsp; STYLE &nbsp;•&nbsp; CONFIDENCE
        </p>
    </section>
);

export default CtaBanner;