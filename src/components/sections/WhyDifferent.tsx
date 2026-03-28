import { ScrollReveal } from "../ScrollReveal";

const differentiators = [
  "India's emerging spirit animal jewelry brand",
  "Meaning-driven design, not trend-driven",
  "Limited production batches",
  "Designed for identity, not decoration",
  "Luxury symbolic necklace craftsmanship",
];

const WhyDifferent = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <p className="tracking-luxury uppercase text-xs font-sans text-gold mb-6">The Difference</p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-10 leading-[1.1] text-ivory">
          Why Aaruke
        </h2>
      </ScrollReveal>
      <div className="space-y-4">
        {differentiators.map((d, i) => (
          <ScrollReveal key={d} delay={0.06 * i}>
            <p className="font-sans text-base md:text-lg text-muted-foreground font-light py-3 border-b border-foreground/6 last:border-0">
              {d}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default WhyDifferent;