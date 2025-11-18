import Hero from '../sections/Hero';
import Features from '../sections/Features';
import PricingSection from '../sections/PricingSection';
import CTA from '../sections/CTA';
import Brands from '../sections/Brands';
import Intro from '../sections/Intro';
import Testimonials from '../sections/Testimonials';  
import WhyChooseUs from '../sections/WhyChooseUs';


const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Intro />
      <Features />
      <WhyChooseUs />
      <CTA />
      <Testimonials />
    </div>
  );
};

export default Home;

