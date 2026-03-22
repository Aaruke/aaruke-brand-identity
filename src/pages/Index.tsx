import { useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";
import { EmberParticles } from "@/components/EmberParticles";
import phoenixHero from "@/assets/phoenix-hero.jpg";
import phoenixGold from "@/assets/phoenix-gold.jpg";
import phoenixSilver from "@/assets/phoenix-silver.jpg";
import { Flame, Eye, Shield, Feather, ArrowRight, Star } from "lucide-react";

/* ─── HERO ─── */
const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={phoenixHero} alt="Phoenix Necklace by Aaruke – Spirit Animal Jewelry" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
    </div>

    <EmberParticles />

    <div className="relative z-10 max-w-3xl mx-auto text-center px-6 pt-24 pb-16">
      <ScrollReveal>
        <p className="tracking-luxury uppercase text-sm font-sans text-gold mb-8 font-light">
          Aaruke · Spirit Animal Jewelry
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.15}>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl font-light leading-[0.95] mb-6 text-ivory">
          Phoenix Necklace — A Symbol of Rebirth
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
          Limited Founder Release · Spirit Animal Jewelry · India
        </p>
      </ScrollReveal>
    </div>
  </section>
);

/* ─── BRAND STORY ─── */
const BrandStory = () => (
  <section className="py-24 md:py-32 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <p className="tracking-luxury uppercase text-xs font-sans text-gold mb-6">The Aaruke Philosophy</p>
      </ScrollReveal>
      <ScrollReveal delay={0.1}>
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 leading-[1.1] text-ivory">
          More Than Jewelry. A Symbolic Identity.
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.2}>
        <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-8 font-light max-w-2xl mx-auto">
          Aaruke transforms ancient spirit animal symbolism into modern wearable identity pieces. Each creation represents a different archetype — rebirth, strength, protection, intuition, courage. Phoenix is the beginning. The first modern Indian spirit animal jewelry brand.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <div className="w-16 h-px bg-gold/40 mx-auto" />
      </ScrollReveal>
    </div>
  </section>
);

/* ─── SPIRIT ANIMAL UNIVERSE ─── */
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
            Every spirit animal represents a different inner force. We are building a collection where you don't choose jewelry — you choose who you are becoming.
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

/* ─── MEANING ─── */
const meaningBlocks = [
  { title: "Strength After Struggle", desc: "The phoenix does not rise from comfort. It rises from ashes. This piece honors every battle that forged you." },
  { title: "Beauty After Breaking", desc: "What was destroyed becomes the source of new power. The phoenix necklace carries the weight of transformation." },
  { title: "Rising Into Power", desc: "Rebirth isn't passive. It's a declaration. A symbolic jewelry piece for those who refuse to stay down." },
  { title: "Jewelry as Identity", desc: "Not an accessory. An anchor. A daily reminder of who you've become through everything you've survived." },
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
            A rebirth necklace rooted in ancient symbolism. Symbolic jewelry that carries transformation jewelry philosophy from India to the world.
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

/* ─── PRODUCT SHOWCASE ─── */
const ProductShowcase = () => {
  const [selected, setSelected] = useState<"gold" | "silver">("gold");
  return (
    <section id="product" className="py-24 md:py-36 px-6 bg-charcoal">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <ScrollReveal>
            <p className="tracking-luxury uppercase text-xs font-sans text-gold mb-6">The Piece</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 leading-[1.1] text-ivory">
              Phoenix Necklace
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-xs tracking-luxury uppercase font-sans text-ember">
              Founder Edition — Limited 50 Pieces
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative glow-ember">
              <img
                src={selected === "gold" ? phoenixGold : phoenixSilver}
                alt={`${selected === "gold" ? "Gold" : "Silver"} Phoenix Necklace India – Aaruke Spirit Animal Jewelry`}
                className="w-full aspect-square object-cover"
                loading="lazy"
              />
            </div>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => setSelected("gold")}
                className={`flex-1 py-3 text-xs tracking-luxury uppercase font-sans border transition-all duration-300 active:scale-[0.97] ${selected === "gold" ? "border-gold text-gold bg-gold/5" : "border-foreground/10 text-muted-foreground hover:border-foreground/30"}`}
              >
                Gold
              </button>
              <button
                onClick={() => setSelected("silver")}
                className={`flex-1 py-3 text-xs tracking-luxury uppercase font-sans border transition-all duration-300 active:scale-[0.97] ${selected === "silver" ? "border-silver text-silver bg-silver/5" : "border-foreground/10 text-muted-foreground hover:border-foreground/30"}`}
              >
                Silver
              </button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="space-y-6">
              <p className="font-sans text-muted-foreground font-light leading-relaxed">
                A symbolic phoenix pendant necklace crafted with premium finish. Skin-friendly, lightweight, and designed as a statement minimalist piece — meaningful jewelry for those who carry fire within.
              </p>

              <ul className="space-y-3 font-sans text-sm text-foreground/70">
                {["Symbolic phoenix pendant", "Premium skin-friendly finish", "Lightweight daily wear", "Statement minimalist design", "Meaningful jewelry gift"].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <Star className="w-3 h-3 text-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-foreground/8">
                <div className="flex items-baseline gap-4 mb-1">
                  <span className="font-serif text-3xl text-gold">₹3,499</span>
                  <span className="font-sans text-sm text-muted-foreground line-through">₹3,999</span>
                </div>
                <p className="text-xs font-sans text-muted-foreground mb-6">First 50 customers · Founder pricing</p>

                <a href="#" className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 font-sans text-sm tracking-luxury uppercase font-medium transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.3)] active:scale-[0.97] w-full justify-center">
                  Get Your Phoenix Necklace
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

/* ─── WHY DIFFERENT ─── */
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

/* ─── SCARCITY + FUTURE ─── */
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

/* ─── FINAL CTA ─── */
const FinalCTA = () => (
  <section className="relative py-32 md:py-44 px-6 overflow-hidden">
    <EmberParticles />
    <div className="relative z-10 max-w-3xl mx-auto text-center">
      <ScrollReveal>
        <h2 className="font-serif text-4xl md:text-6xl font-light mb-4 leading-[0.95] text-ivory">
          This is only the beginning.
        </h2>
      </ScrollReveal>
      <ScrollReveal delay={0.15}>
        <p className="font-sans text-lg text-muted-foreground mb-10 font-light">
          The Phoenix rises first.
        </p>
      </ScrollReveal>
      <ScrollReveal delay={0.3}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#product" className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 font-sans text-sm tracking-luxury uppercase font-medium transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.3)] active:scale-[0.97]">
            Rise With Phoenix
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#signup" className="inline-flex items-center gap-2 border border-foreground/20 px-8 py-4 font-sans text-sm tracking-luxury uppercase font-light text-foreground transition-all duration-300 hover:border-gold hover:text-gold active:scale-[0.97]">
            Join the Spirit Animal Circle
          </a>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

/* ─── FOOTER ─── */
const Footer = () => {
  const [footerEmail, setFooterEmail] = useState("");
  return (
    <footer id="signup" className="border-t border-foreground/6 py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-12">
          <div>
            <h3 className="font-serif text-2xl text-ivory mb-3">Aaruke</h3>
            <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">
              India's first spirit animal jewelry house. Each piece is a symbol. Each symbol, a story of becoming.
            </p>
          </div>
          <div>
            <h4 className="font-sans text-xs tracking-luxury uppercase text-gold mb-4">Philosophy</h4>
            <ul className="space-y-2 font-sans text-sm text-muted-foreground font-light">
              <li>Spirit Animal Mission</li>
              <li>Symbolic Craftsmanship</li>
              <li>Limited Editions</li>
              <li>Meaningful Gifting</li>
            </ul>
          </div>
          <div>
            <h4 className="font-sans text-xs tracking-luxury uppercase text-gold mb-4">For Those Who Are Becoming</h4>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
              <input
                type="email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                placeholder="Enter your email"
                className="bg-transparent border border-foreground/15 px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-gold/50 transition-colors"
                required
              />
              <button type="submit" className="border border-gold/30 px-4 py-3 font-sans text-xs tracking-luxury uppercase text-gold transition-all duration-300 hover:bg-gold/5 active:scale-[0.97]">
                Join the Circle
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-foreground/6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-muted-foreground/50">© 2026 Aaruke. All rights reserved.</p>
          <div className="flex gap-6">
            {["Instagram", "Pinterest", "Twitter"].map((s) => (
              <a key={s} href="#" className="font-sans text-xs text-muted-foreground/50 hover:text-gold transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

/* ─── NAV ─── */
const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-foreground/5">
    <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      <a href="#" className="font-serif text-xl text-ivory tracking-wide">Aaruke</a>
      <a href="#product" className="font-sans text-xs tracking-luxury uppercase text-gold hover:text-foreground transition-colors">
        Shop Phoenix
      </a>
    </div>
  </nav>
);

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
      <FinalCTA />
    </main>
    <Footer />
  </>
);

export default Index;
