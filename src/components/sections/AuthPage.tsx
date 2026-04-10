import { useState } from "react";
import phoenixHero from "@/assets/phoenix-gold.jpg"; // Adjust path to your actual image

const AuthPage = ({ onClose }: { onClose: () => void }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    // 1. Added overflow-y-auto to allow scrolling on small screens
    <section className="fixed inset-0 z-[100] bg-[#050707]/90 backdrop-blur-md overflow-y-auto font-sans p-4 text-ivory">
      
      {/* 2. Close button is fixed so it stays visible even if you scroll */}
      <button 
        onClick={onClose} 
        className="fixed top-4 right-4 md:top-6 md:right-6 text-ivory/60 hover:text-white tracking-widest uppercase text-xs transition-colors z-[110] bg-black/50 px-3 py-2 rounded-lg"
      >
        Close ✕
      </button>

      {/* 3. THIS is the wrapper that centers the content. Notice it wraps everything below it! */}
      <div className="min-h-full flex items-center justify-center py-12 md:py-8">

        {/* Main Container */}
        <div className="w-full max-w-5xl bg-[#0a0c0c] border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-2xl relative">
          
          {/* Left Panel: Branding & Imagery (Hidden on small mobile, visible on tablet/desktop) */}
          <div className="hidden md:flex md:w-1/2 relative bg-[#050707] items-end p-12 overflow-hidden">
            {/* Background Image with Overlay */}
            <img 
              src={phoenixHero} 
              alt="Aaruké Phoenix" 
              className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity hover:mix-blend-normal hover:opacity-60 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050707] via-[#050707]/80 to-transparent"></div>
            
            {/* Text Content */}
            <div className="relative z-10 w-full">
              <h1 className="font-serif italic font-light text-4xl text-ivory uppercase tracking-wide mb-6">
                Aar<span className="text-[#c5a059]">u</span>kè
              </h1>
              <p className="text-sm tracking-widest text-[#c5a059] uppercase mb-4">
                You can easily
              </p>
              <h2 className="font-serif text-4xl leading-tight font-light text-ivory">
                Get access to your personal hub for clarity and <span className="italic text-[#c5a059]">rebirth</span>.
              </h2>
            </div>
          </div>

          {/* Right Panel: The Form */}
          <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
            
            {/* Mobile Logo (Only shows on phone) */}
            <div className="md:hidden mb-10 text-center">
               <h1 className="font-serif italic font-light text-3xl text-ivory uppercase tracking-wide">
                Aar<span className="text-[#c5a059]">u</span>kè
              </h1>
            </div>

            <div className="mb-10">
              <h3 className="text-3xl font-serif mb-3">
                {isLogin ? "Sign In to your Portal" : "Create an account"}
              </h3>
              <p className="text-xs md:text-sm text-ivory/60 font-light leading-relaxed">
                {isLogin 
                  ? "Access your exclusive Spirit Animal details, bespoke orders, and meaningful jewelry in one purposeful place."
                  : "Join the circle. Access your tasks, notes, and exclusive drops anytime, anywhere."}
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              {/* Name Field (Only for Sign Up) */}
              {!isLogin && (
                <div className="space-y-2">
                  <label className="text-xs tracking-widest uppercase text-ivory/80">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Atish Kumar"
                    className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-4 text-sm text-ivory focus:border-[#c5a059] focus:outline-none transition-colors placeholder:text-ivory/20"
                  />
                </div>
              )}

              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase text-ivory/80">Email Address</label>
                <input 
                  type="email" 
                  placeholder="AtishKumar@example.com"
                  className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-4 text-sm text-ivory focus:border-[#c5a059] focus:outline-none transition-colors placeholder:text-ivory/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs tracking-widest uppercase text-ivory/80">Password</label>
                <div className="relative">
                  <input 
                    type={showPassword ? "text" : "password"} 
                    placeholder="••••••••"
                    className="w-full bg-transparent border border-white/10 rounded-lg px-4 py-4 text-sm text-ivory focus:border-[#c5a059] focus:outline-none transition-colors placeholder:text-ivory/20 tracking-widest"
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-ivory/40 hover:text-[#c5a059] tracking-widest uppercase transition-colors"
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex justify-end">
                  <a href="#" className="text-[10px] text-ivory/60 hover:text-[#c5a059] tracking-widest uppercase transition-colors">
                    Forgot Password?
                  </a>
                </div>
              )}

              <button 
                type="submit"
                className="w-full bg-[#c5a059] text-black py-4 rounded-lg text-xs tracking-[0.2em] uppercase font-bold hover:bg-[#d4af37] transition-all active:scale-[0.98] mt-4"
              >
                {isLogin ? "Sign In" : "Get Started"}
              </button>
            </form>

            {/* Social Logins */}
            <div className="mt-10">
              <div className="relative flex items-center mb-6">
                <div className="flex-grow border-t border-white/10"></div>
                <span className="flex-shrink-0 mx-4 text-[10px] text-ivory/40 tracking-widest uppercase">
                  or continue with
                </span>
                <div className="flex-grow border-t border-white/10"></div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <button className="flex justify-center items-center py-3 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                  <span className="text-sm font-serif">G</span>
                </button>
              </div>
            </div>

            {/* Toggle State */}
            <p className="text-center mt-10 text-xs text-ivory/60 tracking-wide">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button 
                onClick={() => setIsLogin(!isLogin)}
                className="text-[#c5a059] hover:text-white transition-colors ml-1 font-medium"
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </p>

          </div>
        </div>
      </div> {/* <-- This closing div is crucial! It closes the centering wrapper */}
    </section>
  );
};

export default AuthPage;