import Nav from "@/components/sections/NavBar";
import Hero from "@/components/sections/HeroSection";
import BrandStory from "@/components/sections/BrandStory";
import SpiritUniverse from "@/components/sections/SpiritUniverse";
import Meaning from "@/components/sections/Meaning";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Footer from "@/components/sections/Footer";
import { Ear } from "lucide-react";
import EarlyAccess from "@/components/sections/EarlyAccess";
import WhyDifferent from "@/components/sections/WhyDifferent";  




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
      <EarlyAccess />
    </main>
    <Footer />
  </>
);

export default Index;
