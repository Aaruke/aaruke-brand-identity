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
import AuthPage from "@/components/sections/AuthPage";
import { useState } from "react";

/* ─── PAGE ─── */
const Index = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Nav 
        onOpenAuth={() => setIsAuthOpen(true)} 
        onOpenCart={() => setIsCartOpen(true)} 
      />
      
      <main>
        <Hero />
        <BrandStory />
        <SpiritUniverse />
        <Meaning />
        
        {/* We now pass the Cart state down like a remote control! */}
        <ProductShowcase 
          onOpenAuth={() => setIsAuthOpen(true)} 
          isCartOpen={isCartOpen}
          setIsCartOpen={setIsCartOpen}
        /> 
        
        <WhyDifferent />
        <EarlyAccess />
      </main> 

      {isAuthOpen && (
        <AuthPage onClose={() => setIsAuthOpen(false)} />
      )}

      <Footer />
    </>
  );
};

export default Index;