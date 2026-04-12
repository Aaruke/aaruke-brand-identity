import { useState, useEffect } from "react";
import { ShoppingCart , Menu, X } from "lucide-react";

const Nav = ({ onOpenCart, onOpenAuth }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("aaruke_token");
      setIsLoggedIn(!!token);
    };

    checkLoginStatus();
    window.addEventListener("auth_change", checkLoginStatus);
    return () => window.removeEventListener("auth_change", checkLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("aaruke_token");
    window.dispatchEvent(new Event("auth_change")); 
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 py-1 md:py-4 backdrop-blur-md border-b border-white/10">
        <div className="w-full flex items-center justify-between px-4 md:px-3 md:py-0 max-w-7xl mx-auto">
          
          {/* LEFT SIDE: Hamburger OR Logo */}
          <div className="flex items-center gap-4">
            
            {/* Hamburger Button (VISIBLE ON MOBILE ONLY) */}
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-white/70 hover:text-[#c5a059] transition-colors pt-2 pb-1 py-0 -ml-1"
              aria-label="Open Menu"
            >
              <Menu strokeWidth={1.5} className="w-5 h-5" />
            </button>

            {/* Brand Logo (VISIBLE ON DESKTOP ONLY) */}
            <a 
              href="#" 
              className="hidden md:block font-serif italic font-light text-[1rem] text-ivory uppercase no-underline tracking-wide" 
              style={{ fontFamily:"italic", fontWeight:200, color:"var(--ivory)", textDecoration:"none", textTransform:"uppercase" }}
            >
              Aar<span style={{ color: "#c5a059" }}>u</span>kè 
            </a>
          </div>

          {/* RIGHT SIDE: Links, Auth, and Cart */}
          <div className="flex items-center gap-4 md:gap-6">
            
            {/* Desktop-only Shop Link */}
            <a href="#product" className="hidden md:block font-sans text-xs tracking-widest uppercase text-[#c5a059] hover:text-white transition-colors">
              Shop Phoenix
            </a>

            {/* Authentication Button */}
            {isLoggedIn ? (
              <button 
                onClick={handleLogout}
                className="font-sans text-[10px] md:text-xs tracking-widest uppercase text-white/70 hover:text-[#c5a059] transition-colors"
              >
                Sign Out
              </button>
            ) : (
              <button 
                onClick={onOpenAuth}
                className="font-sans text-[10px] md:text-xs tracking-widest uppercase text-white/70 hover:text-[#c5a059] transition-colors"
              >
                Sign In
              </button>
            )}

            {/* Divider Line */}
            <div className="h-4 w-[1px] bg-white/20"></div>

            {/* Permanent Cart Icon */}
            <button 
              onClick={onOpenCart}
              className="flex items-center justify-center text-white/70 hover:text-[#c5a059] transition-all hover:scale-110 active:scale-95"
              aria-label="Open Cart"
            >
              <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" strokeWidth={1.5} />
            </button>
            
          </div>
        </div>
      </nav>

      {/* --- MOBILE SIDE MENU DRAWER --- */}
      <div 
        className={`fixed inset-0 z-[120] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div 
          className="absolute inset-0 bg-[#050707]/80 backdrop-blur-sm" 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>

        <div 
          className={`absolute top-0 left-0 w-64 h-full bg-[#0a0c0c] border-r border-white/10 p-8 transform transition-transform duration-500 ease-out flex flex-col ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button 
            onClick={() => setIsMobileMenuOpen(false)} 
            className="absolute top-6 right-6 text-white/40 hover:text-[#c5a059] transition-colors"
          >
            <X strokeWidth={1.5} className="w-5 h-5" />
          </button>

          {/* Logo is safely visible here inside the mobile menu! */}
          <div className="mb-12 mt-2">
            <span className="font-serif italic font-light text-[1.75rem] text-ivory uppercase no-underline tracking-wide"  style={{ fontFamily:"italic", fontSize:"1rem", fontWeight:200, color:"var(--ivory)", textDecoration:"none", textTransform:"uppercase" }}>
              Aar<span className="text-[#c5a059]">u</span>kè 
            </span>
          </div>

          <div className="flex flex-col space-y-8 flex-grow">
            <a 
              href="#product" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[11px] tracking-[0.2em] uppercase text-[#c5a059] hover:text-white transition-colors"
            >
              Shop Phoenix
            </a>
            <a 
              href="#meaning" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-[11px] tracking-[0.2em] uppercase text-white/70 hover:text-[#c5a059] transition-colors"
            >
              Read The Meaning
            </a>
          </div>

          <div className="mt-auto pt-8 border-t border-white/10">
             <a href="mailto:support@aaruke.com" className="text-[9px] tracking-widest text-white/40 hover:text-white uppercase transition-colors">
               Contact Support
             </a>
          </div>
        </div>
      </div>
    </>
  );
};


export default Nav;