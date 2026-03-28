import { ScrollReveal } from "../ScrollReveal";


const meaningBlocks = [
  { title: "Strength After Struggle", desc: "The phoenix does not rise from comfort. It rises from ashes. This piece honors every battle that forged you." },
  { title: "Beauty After Breaking", desc: "What was destroyed becomes the source of new power. The phoenix necklace carries the weight of transformation." },
  { title: "Rising Into Power", desc: "Rebirth isn't passive. It's a declaration. A symbolic jewellery piece for those who refuse to stay down." },
  { title: "Jewellery as Identity", desc: "Not an accessory. An anchor. A daily reminder of who you've become through everything you've survived." },
];

const Meaning = () => (
  <section id="meaning" className="py-24 md:py-36 px-6">
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <ScrollReveal>
          <p className="tracking-luxury uppercase text-xs font-sans text-gold mb-6">Symbolism</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 leading-[1.1] text-ivory">
            The Meaning Behind the Phoenix Necklace
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-sans text-muted-foreground max-w-xl mx-auto font-light leading-relaxed">
            A rebirth necklace rooted in ancient symbolism. Symbolic jewellery that carries transformation jewellery philosophy from India to the world.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:gap-8">
        {meaningBlocks.map((block, i) => (
          <ScrollReveal key={block.title} delay={0.08 * i}>
            <div className="border border-foreground/8 p-8 md:p-10 transition-all duration-500 hover:border-gold/20 group">
              <h3 className="font-serif text-2xl mb-3 text-ivory group-hover:text-gold transition-colors duration-500">{block.title}</h3>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed font-light">{block.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default Meaning;