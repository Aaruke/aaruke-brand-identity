import { ScrollReveal } from "../ScrollReveal";
import { Flame, Shield, Eye, Feather } from "lucide-react";

const spiritAnimals = [
  { name: "Phoenix", archetype: "Rebirth", icon: Flame, available: true },
  { name: "Wolf", archetype: "Leadership", icon: Shield, available: false },
  { name: "Serpent", archetype: "Transformation", icon: Eye, available: false },
  { name: "Eagle", archetype: "Vision", icon: Feather, available: false },
];

const SpiritUniverse = () => (
  <section className="py-24 md:py-36 px-6 bg-charcoal">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <ScrollReveal>
          <p className="tracking-luxury uppercase text-xs font-sans text-gold mb-6">Enter the World</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 leading-[1.1] text-ivory">
            The Aaruke Spirit Animal Universe
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-sans text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
            Every spirit animal represents a different inner force. We are building a collection where you don't choose jewellery — you choose who you are becoming.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
        {spiritAnimals.map((animal, i) => (
          <ScrollReveal key={animal.name} delay={0.1 * i}>
            <div className={`relative group border p-6 md:p-8 text-center transition-all duration-500 ${animal.available ? 'border-gold/30 glow-gold' : 'border-foreground/10'} hover:border-gold/40`}>
              <animal.icon className={`w-8 h-8 mx-auto mb-4 ${animal.available ? 'text-gold' : 'text-muted-foreground/40'}`} strokeWidth={1} />
              <h3 className="font-serif text-xl md:text-2xl mb-1 text-ivory">{animal.name}</h3>
              <p className="font-sans text-xs tracking-wide text-muted-foreground uppercase mb-3">{animal.archetype}</p>
              <span className={`inline-block text-[10px] tracking-luxury uppercase font-sans ${animal.available ? 'text-gold' : 'text-muted-foreground/50'}`}>
                {animal.available ? "Available Now" : "Coming Soon"}
              </span>
            </div>
          </ScrollReveal>
        ))}
      </div>

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