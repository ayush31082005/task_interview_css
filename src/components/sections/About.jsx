import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const stats = [
  { num: "10+", label: "YEARS OF EXPERIENCE" },
  { num: "5K+", label: "HAPPY CLIENTS" },
  { num: "20+", label: "EXPERT STYLISTS" },
];

const About = () => (
  <section id="about" className="relative bg-[#FAF7F2] pt-8 pb-6 sm:pt-10 sm:pb-8 lg:pt-12 lg:pb-8 overflow-hidden">
    <div className="container-custom grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
      {/* Left Content Column */}
      <div className="lg:col-span-6 text-left">
        {/* Label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="h-[1.5px] w-12 bg-[#D4A359]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#C8913A] uppercase">
            ABOUT US
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-[54px] font-normal leading-[1.12] text-[#141414]">
          Welcome to <br />
          <span className="text-[#C8913A]">Haircraft Salon</span>
        </h2>

        {/* Sub-tagline */}
        <p className="mt-4 text-xs tracking-[0.25em] font-medium text-[#1A1A1A] uppercase">
          BEAUTY &nbsp;|&nbsp; STYLE &nbsp;|&nbsp; CONFIDENCE
        </p>

        {/* Paragraphs */}
        <p className="mt-5 text-sm text-gray-600 leading-relaxed max-w-lg">
          At Haircraft, we believe that great hair is more than just a style — it's a reflection of
          your personality. Our expert stylists are passionate about creating looks that enhance
          your natural beauty and make you feel confident every day.
        </p>
        <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-lg">
          From precision cuts and vibrant color to advanced treatments and personalized care, we
          combine creativity, expertise, and premium products to give you an exceptional salon
          experience.
        </p>

        {/* Button */}
        <div className="mt-7">
          <Link
            to="/about"
            className="inline-flex items-center gap-2.5 bg-[#D4A359] hover:bg-[#c49247] text-[#0B0B0B] text-xs font-semibold uppercase tracking-wider px-7 py-3.5 rounded-sm shadow-sm transition-all duration-300 hover:scale-105 active:scale-95"
          >
            DISCOVER MORE <FiArrowRight className="text-base" />
          </Link>
        </div>

        {/* 3 Stats with vertical dividing lines */}
        <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4 max-w-md pt-2">
          {stats.map((s, i) => (
            <div key={i} className="border-l-[1.5px] border-gray-300 pl-3.5 sm:pl-4">
              <p className="font-heading text-3xl sm:text-4xl text-[#141414] font-normal leading-none">
                {s.num}
              </p>
              <p className="text-[9px] sm:text-[10px] font-medium tracking-wider text-gray-500 mt-1.5 uppercase leading-tight">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image Collage Column */}
      <div className="lg:col-span-6 relative flex justify-center items-center">
        {/* Decorative Beige/Gold Backing Blocks */}
        <div className="absolute top-0 left-1/4 w-32 sm:w-40 h-20 sm:h-28 bg-[#E5D5C3] z-0" />
        <div className="absolute top-10 -left-3 sm:-left-6 w-6 sm:w-8 h-48 sm:h-64 bg-[#E5D5C3] z-0" />
        <div className="absolute -bottom-3 right-2 sm:right-4 w-32 sm:w-44 h-16 sm:h-20 bg-[#E5D5C3] z-0" />

        {/* Images Grid */}
        <div className="relative z-10 grid grid-cols-12 gap-3 sm:gap-4 w-full items-center">
          {/* Main / Left Image */}
          <div className="col-span-7 relative shadow-xl overflow-hidden bg-white">
            <img
              src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=85"
              alt="Salon styling"
              className="w-full h-[360px] sm:h-[460px] lg:h-[490px] object-cover hover:scale-105 transition duration-700"
            />
            {/* Handwritten overlay text in bottom left */}
            <div className="absolute bottom-5 left-5 z-10 select-none pointer-events-none text-left">
              <p className="font-script text-3xl sm:text-4xl lg:text-5xl text-[#F2D7A5] leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Good Hair <br />
                Brighter You
              </p>
            </div>
          </div>

          {/* Secondary / Right Image (Blow Dry & Brush) */}
          <div className="col-span-5 relative shadow-xl overflow-hidden bg-white mt-10 sm:mt-14">
            <img
              src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=700&q=85"
              alt="Hair blow dry and styling"
              className="w-full h-[300px] sm:h-[390px] lg:h-[420px] object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;