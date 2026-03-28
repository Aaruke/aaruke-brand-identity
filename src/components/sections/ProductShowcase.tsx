import { shopifyClient } from "@/lib/shopify";
import { ScrollReveal } from "../ScrollReveal";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

import phoenixGold from "@/assets/phoenix-gold.jpg";
import phoenixSilver from "@/assets/phoenix-silver.jpg";

const ProductShowcase = () => {
  const [selected, setSelected] = useState<"gold" | "silver">("gold");
  const [isProcessing, setIsProcessing] = useState(false);

  // NEW: State to hold our live Shopify data
  const [liveProduct, setLiveProduct] = useState<any>(null);
  const [isLoadingData, setIsLoadingData] = useState(true);

  // NEW: Fetch the data exactly once when the component mounts
  useEffect(() => {
    const fetchShopifyData = async () => {
      try {
        const product = await shopifyClient.product.fetchByHandle('phoenix-necklace');
        setLiveProduct(product);
      } catch (error) {
        console.error("Failed to fetch live product data:", error);
      } finally {
        setIsLoadingData(false);
      }
    };

    fetchShopifyData();
  }, []); // The empty array [] means "only run this once when the page loads"

  // UPDATED: Checkout now uses the liveProduct data instead of fetching it again
  const handleCheckout = async () => {
    if (!liveProduct) {
      alert("Still loading product data, please wait a second!");
      return;
    }

    setIsProcessing(true);
    try {
      // Find the specific variant (Gold or Silver) the user selected
      const selectedVariant = liveProduct.variants.find(
        (variant: any) => variant.title.toLowerCase() === selected
      ) || liveProduct.variants[0]; 

      // Create cart and redirect
      const checkout = await shopifyClient.checkout.create();
      const updatedCheckout = await shopifyClient.checkout.addLineItems(checkout.id, [
        { variantId: selectedVariant.id, quantity: 1 }
      ]);
      
      window.location.href = updatedCheckout.webUrl;
    } catch (error) {
      console.error("Shopify Checkout Error:", error);
      alert("Checkout is currently unavailable. Please try again later.");
      setIsProcessing(false);
    }
  };
  return (
    <section id="product" className="py-24 md:py-36 px-6 bg-charcoal">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <ScrollReveal>
            <p className="tracking-luxury uppercase text-xs font-sans text-gold mb-6">The Piece</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            {/* DYNAMIC TITLE */}
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-4 leading-[1.1] text-ivory">
              {liveProduct ? liveProduct.title : "Phoenix Necklace"}
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-xs tracking-luxury uppercase font-sans text-ember">
              Founder Edition — Limited Pieces
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left">
            <div className="relative glow-ember">
              <img
                src={selected === "gold" ? phoenixGold : phoenixSilver}
                alt={`${selected === "gold" ? "Gold" : "Silver"} Phoenix Necklace`}
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
                A symbolic phoenix pendant necklace crafted with premium finish. Skin-friendly, lightweight, and designed as a statement minimalist piece.
              </p>

              <div className="pt-4 border-t border-foreground/8">
                
                {/* DYNAMIC PRICING DISPLAY */}
                <div className="flex items-baseline gap-4 mb-1">
                  {isLoadingData ? (
                    <span className="font-serif text-2xl text-gold animate-pulse">Syncing price...</span>
                  ) : (
                    <>
                      <span className="font-serif text-3xl text-gold">
                        ₹{liveProduct?.variants[0]?.price?.amount}
                      </span>
                      {liveProduct?.variants[0]?.compareAtPrice && (
                        <span className="font-sans text-sm text-muted-foreground line-through">
                          ₹{liveProduct.variants[0].compareAtPrice.amount}
                        </span>
                      )}
                    </>
                  )}
                </div>
                
                <p className="text-xs font-sans text-muted-foreground mb-6">First 50 customers · Founder pricing</p>

                <button 
                  onClick={handleCheckout}
                  disabled={isProcessing || isLoadingData}
                  className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 font-sans text-sm tracking-luxury uppercase font-medium transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.3)] active:scale-[0.97] w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? "Connecting to Secure Checkout..." : "Get Your Phoenix Necklace"}
                  {!isProcessing && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
                </button>

              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;