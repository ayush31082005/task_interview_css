import { FiArrowRight } from "react-icons/fi";
import SectionHeading from "../common/SectionHeading";
import { blogs } from "../../data/blogs";

const Blog = () => (
    <section id="blog" className="bg-cream py-8 sm:py-10 lg:py-12">
        <div className="container-custom">
            <SectionHeading
                label="OUR BLOG"
                title="Latest Tips, Trends,"
                highlight="Expert Advice & Guides"
                desc="Stay updated with the latest grooming trends, expert tips, and style inspiration from our professionals, stylists, and clients."
            />

            <div className="mt-8 sm:mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((b) => (
                    <article key={b.title} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition group">
                        <div className="relative h-52 overflow-hidden">
                            <img src={b.image} alt={b.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                            <span className="absolute bottom-3 left-3 bg-gold text-white text-[10px] tracking-widest px-3 py-1 rounded">
                                {b.category}
                            </span>
                        </div>

                        <div className="p-5">
                            <p className="text-[11px] text-gray-400 tracking-wider">{b.date}</p>
                            <h3 className="mt-2 text-xl text-dark leading-snug">{b.title}</h3>
                            <p className="mt-2 text-xs text-gray-500 leading-relaxed">{b.desc}</p>
                            <a href="#" className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-dark hover:text-gold">
                                Read More
                                <span className="w-6 h-6 rounded-full bg-gold text-white flex items-center justify-center">
                                    <FiArrowRight className="text-xs" />
                                </span>
                            </a>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Blog;