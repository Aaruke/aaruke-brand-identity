import Nav from "@/components/sections/NavBar";
import Hero from "@/components/sections/HeroSection";
import BrandStory from "@/components/sections/BrandStory";
import SpiritUniverse from "@/components/sections/SpiritUniverse";
import Meaning from "@/components/sections/Meaning";
import ProductShowcase from "@/components/sections/ProductShowcase";
import WhyDifferent from "@/components/sections/WhyDifferent";
import Scarcity from "@/components/sections/Scarcity";
import Footer from "@/components/sections/Footer";




/* ─── PAGE ─── */
const Index = () => (
  <>
    <Nav />
    <main>
      <Hero />
      <BrandStory />
      <SpiritUniverse />
      <Meaning />
      <ProductShowcase />
      <WhyDifferent /> 
      <Scarcity />
    </main>
    <Footer />
  </>
);

export default Index;
