import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import HowItWorks from "../components/sections/HowItWorks";
import CtaBanner from "../components/sections/CtaBanner";
import Stylists from "../components/sections/Stylists";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import Testimonials from "../components/sections/Testimonials";
import Blog from "../components/sections/Blog";

const Home = () => (
    <>
        <Navbar />
        <main>
            <Hero />
            <About />
            <Services />
            <HowItWorks />
            <CtaBanner />
            <Stylists />
            <WhyChooseUs />
            <Testimonials />
            <Blog />
        </main>
        <Footer />
    </>
);

export default Home;