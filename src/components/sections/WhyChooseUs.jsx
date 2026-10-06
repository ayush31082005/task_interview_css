import Button from "../common/Button";
import { whyChooseUs } from "../../data/whyChooseUs";

const WhyChooseUs = () => (
    <section className="bg-dark py-8 sm:py-10 lg:py-12">
        <div className="container-custom grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left */}
            <div>
                <div className="flex items-center gap-3 mb-3">
                    <span className="h-px w-8 bg-gold" />
                    <span className="text-[10px] sm:text-xs tracking-[0.25em] text-gold">WHY CHOOSE US</span>
                </div>

                <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-white leading-[1.1]">
                    More Than a Haircut <br />
                    <span className="text-gold">A Better You</span>
                </h2>

                <p className="mt-4 text-sm text-gray-300 leading-relaxed max-w-md">
                    We combine skill, style, and a passion for grooming to give you an exceptional
                    experience every time you visit.
                </p>

                <div className="mt-6 space-y-4">
                    {whyChooseUs.map(({ no, title, desc, icon: Icon }) => (
                        <div key={no} className="flex items-start gap-4 pb-5 border-b border-white/10 last:border-0">
                            <span className="w-11 h-11 shrink-0 rounded-full border border-gold text-gold flex items-center justify-center">
                                <Icon />
                            </span>
                            <span className="font-heading text-2xl text-gold w-8 shrink-0">{no}</span>
                            <div>
                                <h3 className="text-white text-base">{title}</h3>
                                <p className="mt-1 text-xs text-gray-400 leading-relaxed">{desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right */}
            <div className="relative">
                <img
                    src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?auto=format&fit=crop&w=1000&q=80"
                    alt="Haircraft grooming"
                    className="w-full h-[380px] sm:h-[500px] lg:h-[600px] object-cover rounded-lg shadow-xl"
                />

                <div className="absolute right-3 bottom-20 sm:right-5 bg-dark/90 border border-gold/60 px-5 py-4 rounded-md">
                    <p className="text-[10px] tracking-widest text-gray-300">OVER</p>
                    <p className="font-heading text-4xl text-gold leading-none my-1">10+</p>
                    <p className="text-[10px] tracking-widest text-gray-300 leading-tight">
                        YEARS OF <br /> GROOMING <br /> EXCELLENCE
                    </p>
                </div>

                <Button arrow className="absolute left-4 bottom-5 !py-2 !text-[11px]">
                    Book Your Appointment
                </Button>
            </div>
        </div>
    </section>
);

export default WhyChooseUs;