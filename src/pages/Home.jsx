import Hero from '../sections/Hero';
import Features from '../sections/Features';
import PricingSection from '../sections/PricingSection';
import CTA from '../sections/CTA';
import Brands from '../sections/Brands';
import Intro from '../sections/Intro';


const Home = () => {
  return (
    <div>
      <Hero />
      <Brands />
      <Intro />
      <Features />
      <PricingSection />
      <CTA />
    </div>
  );
};

export default Home;

