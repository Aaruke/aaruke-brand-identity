import { ScrollReveal } from "../ScrollReveal";

const BrandStory = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <p className="tracking-luxury uppercase text-xs font-sans text-gold mb-6">The Aaruke Philosophy</p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-[1.1] text-ivory">
          More Than Jewellery. A Symbolic Identity.
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-8 font-light max-w-2xl mx-auto">
          Aaruke transforms ancient spirit animal symbolism into modern wearable identity pieces. Each creation represents a different archetype — rebirth, strength, protection, intuition, courage. Phoenix is the beginning. The first modern Indian spirit animal jewellery brand.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <div className="w-16 h-px bg-gold/40 mx-auto" />
      </ScrollReveal>
    </div>
  </section>
);

export default BrandStory;