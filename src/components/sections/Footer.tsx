import { useState } from "react";




const Footer = () => {
  const [footerEmail, setFooterEmail] = useState("");
  return (
    <footer id="signup" className="border-t border-foreground/6 py-16 md:py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 mb-12">
          <div className="space-y-4 text-center md:text-left">
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

          <div className="font-serif text-2xl text-ivory mb-3" >
            Socials
            <div className="flex gap-4 justify-center md:justify-start mt-4">
                <ul>
                <li><a href="#" className="font-sans text-xs text-muted-foreground/50 hover:text-gold transition-colors">Instagram</a></li>
                <li><a href="#" className="font-sans text-xs text-muted-foreground/50 hover:text-gold transition-colors">Pinterest</a></li>
                <li><a href="#" className="font-sans text-xs text-muted-foreground/50 hover:text-gold transition-colors">Twitter</a></li>
                </ul>
            
          </div>
          </div>

        </div>
        <div className="border-t border-foreground/6 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-sans text-xs text-muted-foreground/50">© 2026 Aaruke. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;