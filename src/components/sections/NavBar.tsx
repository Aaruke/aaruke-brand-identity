const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 py-2 md:py-4 backdrop-blur-md border-b border-white/10" >
    <div className="w-full flex items-center justify-between px-4 max-w-7xl mx-auto" >
      <a href="#" className="font-serif italic font-light text-[1.75rem] text-ivory uppercase no-underline tracking-wide" style={{fontFamily:"italic", fontSize:"1rem", fontWeight:200, color:"var(--ivory)", textDecoration:"none", textTransform:"uppercase" }}>
        Aar<span style={{ color:"var(--gold)" }}>u</span>kè 
      </a>
      <a href="#product" className="font-sans text-[10px] md:text-xs tracking-luxury uppercase text-gold hover:text-white transition-colors">
        Shop Phoenix
      </a>
    </div>
  </nav>
);
export default Nav;