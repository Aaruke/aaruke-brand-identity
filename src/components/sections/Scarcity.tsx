import { useState } from "react";
import { ScrollReveal } from "../ScrollReveal";

const Scarcity = () => {
  const [email, setEmail] = useState("");
  return (
    <section className="py-24 md:py-36 px-6 bg-charcoal">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <p className="tracking-luxury uppercase text-xs font-sans text-gold mb-6">Limited</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 leading-[1.1] text-ivory">
            The First of Many.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-sans text-muted-foreground font-light leading-relaxed mb-10 max-w-xl mx-auto">
            Phoenix is the beginning of the Aaruke spirit animal collection. Limited founder pieces. Future drops coming. Be the first to know.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              className="flex-1 bg-transparent border border-foreground/15 px-5 py-4 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
              required
            />
            <button type="submit" className="bg-accent text-accent-foreground px-6 py-4 font-sans text-xs tracking-luxury uppercase font-medium transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.3)] active:scale-[0.97] whitespace-nowrap">
              Get Early Access
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Scarcity;