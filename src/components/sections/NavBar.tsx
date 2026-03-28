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
export default Nav;