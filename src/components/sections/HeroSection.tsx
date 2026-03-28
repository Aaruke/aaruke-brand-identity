import { ScrollReveal } from "../ScrollReveal";
import { ArrowRight } from "lucide-react";
import phoenixHero from "@/assets/phoenix-hero.jpg";
import { EmberParticles } from "../EmberParticles";

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={phoenixHero} alt="Phoenix Necklace by Aaruke – Spirit Animal Jewellery" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
    </div>

    <EmberParticles />

    <div className="relative z-10 max-w-3xl mx-auto text-center px-6 pt-24 pb-16">
      <ScrollReveal>
        <p className="tracking-luxury uppercase text-sm font-sans text-gold mb-8 font-light">
          Aaruke · Spirit Animal Jewellery
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-[0.95] mb-6 text-ivory">
          <div className="text-center">Phoenix Necklace</div>  
           <div style={{ fontSize: '2rem' }}>Symbol of Rebirth</div>
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={0.3}>
        <p className="font-sans text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10 font-light leading-relaxed">
          The first chapter of Aaruke's Spirit Animal Collection.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.45}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a href="#product" className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 font-sans text-sm tracking-luxury uppercase font-medium transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.3)] active:scale-[0.97]">
            Own Your Rise
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#meaning" className="inline-flex items-center gap-2 border border-foreground/20 px-8 py-4 font-sans text-sm tracking-luxury uppercase font-light text-foreground transition-all duration-300 hover:border-gold hover:text-gold active:scale-[0.97]">
            Discover the Meaning
          </a>
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.6}>
        <p className="text-xs font-sans text-muted-foreground tracking-wide">
          Limited Founder Release · Spirit Animal Jewellery · India
        </p>
      </ScrollReveal>
    </div>
  </section>
);

export default Hero;