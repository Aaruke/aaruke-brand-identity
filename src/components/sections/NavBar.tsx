const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-sm border-foreground/50">
    <div className="w-full flex items-center justify-between px-6 py-4 " >
      <a href="#" style={{fontFamily:"italic", fontSize:"1.75rem", fontWeight:200, color:"var(--ivory)", textDecoration:"none", textTransform:"uppercase" }}>
        Aar<span style={{ color:"var(--gold)" }}>u</span>kè 
      </a>
      <a href="#product" className="font-sans text-xs tracking-luxury uppercase text-gold hover:text-foreground transition-colors">
        Shop Phoenix
      </a>
    </div>
  </nav>
);
export default Nav;