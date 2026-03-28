import { useState } from "react";

const Footer = () => {
  const [footerEmail, setFooterEmail] = useState("");
  return (
    <footer id="signup" className="border-t border-foreground/6 py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-12">
          <div>
            <h3 className="font-serif text-2xl text-ivory mb-3">Aaruke</h3>
            <p className="font-sans text-sm text-muted-foreground font-light leading-relaxed">
              India's first spirit animal jewellery house. Each piece is a symbol. Each symbol, a story of becoming.
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

export default Footer;