import { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";

const Nav = ({ onOpenCart, onOpenAuth }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // This effect listens for token changes to update the Sign In/Out text instantly
  useEffect(() => {
    const checkLoginStatus = () => {
      const token = localStorage.getItem("aaruke_token");
      setIsLoggedIn(!!token);
    };

    // Check immediately when the Navbar loads
    checkLoginStatus();

    // Listen for the custom "shout" from AuthPage.tsx
    window.addEventListener("auth_change", checkLoginStatus);
    
    // Cleanup the listener when the component unmounts
    return () => window.removeEventListener("auth_change", checkLoginStatus);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("aaruke_token");
    window.dispatchEvent(new Event("auth_change")); // Shout that we logged out so the UI updates
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-2 md:py-4 backdrop-blur-md border-b border-white/10">
      <div className="w-full flex items-center justify-between px-4 max-w-7xl mx-auto">
        
        {/* Left Side: Brand Logo */}
        <a 
          href="#" 
          className="font-serif italic font-light text-[1.75rem] text-ivory uppercase no-underline tracking-wide" 
          style={{ fontFamily:"italic", fontSize:"1rem", fontWeight:200, color:"var(--ivory)", textDecoration:"none", textTransform:"uppercase" }}
        >
          Aar<span style={{ color:"var(--gold)" }}>u</span>kè 
        </a>

        {/* Right Side: Links, Auth, and Cart */}
        <div className="flex items-center gap-4 md:gap-6">
          
          {/* Shop Link (Hidden on very small screens to keep it clean, visible on medium+) */}
          <a href="#product" className="hidden sm:block font-sans text-[10px] md:text-xs tracking-widest uppercase text-[#c5a059] hover:text-white transition-colors">
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
  );
};

export default Nav;