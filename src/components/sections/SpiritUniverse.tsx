import { ScrollReveal } from "../ScrollReveal";
import { Flame, Shield, Eye, Feather } from "lucide-react";
import phoenixImg from "@/assets/aaruke-new-hero.png";
import { link } from "fs";

const spiritAnimals = [
  {
    id: "phoenix",
    title: "The Phoenix",
    description: "For those who have been through fire and emerged transformed.",
    image: phoenixImg, 
    status: "available",
    link: "#product",
  },
  {
    id: "lion",
    title: "The Lion",
    description: "For those who carry quiet strength and lead with unwavering courage.",
    image: phoenixImg, // Replace with lionImg
    status: "coming_soon",
  },
  {
    id: "butterfly",
    title: "The Butterfly",
    description: "For those who embraced change and rose into their truest form.",
    image: phoenixImg,
    status: "coming_soon",
  },
  {
    id: "crab",
    title: "The Crab",
    description: "For those who protect their depths and move forward in their own time.",
    image: phoenixImg,
    status: "coming_soon",
  },
];

export const SpiritUniverse = () => (
  <section className="py-12 md:py-24 px-6 bg-charcoal" style ={{paddingTop:"10rem"}}>
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-7">
        <ScrollReveal>
          <p className="tracking-luxury uppercase text-xs font-sans text-gold mb-6">The Aaruke Spirit Animal Universe</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 leading-[1.1] text-ivory" style = {{fontStyle:"italic" , fontSize:"2.5rem" , fontWeight:"400"}}>
            Jewellery That Chooses you !
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-sans text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
            We craft Symbolic Identities where each creature reflects a deeper emotional and spiritual connection -- helping you express who you are , beyond the surface .
          </p>
        </ScrollReveal>
      </div>

      <section id="collection" className="w-full mx-auto py-8 md:py-12"> {/* Using a deep forest/charcoal hex */}
      <div className="w-full px-4 md:px-6 lg:px-6">

        {/* The Grid */}
        <div className="w-full  md:h-96 grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-4">
          {spiritAnimals.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 0.15}>
              <div 
                className={`flex flex-col h- rounded-2xl overflow-hidden bg-black/40 border transition-all duration-500 group ${
                  item.status === "available" 
                    ? "border-gold/30 shadow-[0_0_20px_rgba(212,175,55,0.05)]" 
                    : "border-white/5 hover:border-white/10"
                }`}
              >
                {/* Image Container */}
                <div className="aspect-[4/5] w-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000 ease-out"
                    loading="lazy"
                  />
                </div>

                {/* Card Content */}
                <div className="p-3  flex flex-col items-center text-center flex-1 justify-between gap-6">
                  <div className="space-y-4">
                    <h3 className="font-serif text-2xl text-ivory tracking-wide">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-muted-foreground leading-relaxed max-w-[220px] mx-auto font-light">
                      {item.description}
                    </p>
                  </div>

                  {/* Dynamic Button */}
                  <button  
                  onClick={() => {
                    if(item.link){
                      window.location.href = item.link;
                    }
                  }}
                    className={`w-50% py-2.5 px-4 font-sans text-xs tracking-luxury uppercase transition-all duration-300 rounded-[12px] ${
                      item.status === "available"
                        ? "bg-ivory text-black hover:bg-gold hover:shadow-[0_0_15px_rgba(212,175,55,0.4)] active:scale-[0.98] font-medium"
                        : "bg-transparent text-muted-foreground border border-white/10 cursor-not-allowed"
                    }`}
                  >
                    {item.status === "available" ? (
                     <>Available<br />Now</>
                      ): (<>Coming<br />Soon</>
                    )}
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        
      </div>
    </section>


      <ScrollReveal delay={0.4}>
        <div className="text-center">
          <a href="#signup" className="inline-flex items-center gap-2 border border-gold/30 px-8 py-4 font-sans text-sm tracking-luxury uppercase font-light text-gold transition-all duration-300 hover:bg-gold/5 active:scale-[0.97]">
            Join the Circle
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default SpiritUniverse;