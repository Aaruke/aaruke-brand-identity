import { shopifyClient } from "@/lib/shopify";
import { ScrollReveal } from "../ScrollReveal";
import { useState, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import { CartDrawer, CartItemType } from "./CartDrawer"; // Imported the new Type!

import phoenixGold from "@/assets/phoenix-gold.jpg";
import phoenixSilver from "@/assets/phoenix-silver.jpg";

const ProductShowcase = () => {
  // 1. PAGE STATE (What color are we looking at right now?)
  const [selected, setSelected] = useState<"gold" | "silver">("gold");

  // 2. TRUE CART STATE (An array of items, saved to memory)
  const [cartItems, setCartItems] = useState<CartItemType[]>(() => {
    const saved = localStorage.getItem("aaruke_cart");
    return saved ? JSON.parse(saved) : [];
  });

  // UI & DATA STATE
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [liveProduct, setLiveProduct] = useState<any>(null);
  const [isLoadingData, setIsLoadingData] = useState(true);

  // AUTO-SAVE: Saves the entire list to the hard drive anytime it changes
  useEffect(() => {
    localStorage.setItem("aaruke_cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // SHOPIFY FETCH
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
  }, []);

  // ADD TO CART LOGIC (The Magic Part)
  const handleAddToCart = () => {
    if (!liveProduct) return;

    // Find the exact variant data from Shopify
    const selectedVariant = liveProduct.variants.find(
      (variant: any) => variant.title.toLowerCase() === selected
    ) || liveProduct.variants[0];

    // Create a new item object
    const newItem: CartItemType = {
      id: selectedVariant.id,
      title: liveProduct.title,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price.amount,
      image: selected === "gold" ? phoenixGold : phoenixSilver,
      quantity: 1
    };

    setCartItems(prevCart => {
      // Check if this exact variant is already in the cart
      const existingItem = prevCart.find(item => item.id === newItem.id);
      
      if (existingItem) {
        // If it's there, just bump the quantity up by 1
        return prevCart.map(item => 
          item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // If it's brand new, add it to the end of the list
      return [...prevCart, newItem];
    });

    setIsCartOpen(true);
  };

  // CART MANAGEMENT LOGIC
  const handleUpdateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(prev => prev.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  // SHOPIFY CHECKOUT LOGIC
  const handleFinalCheckout = async () => {
    setIsProcessing(true);
    try {
      const checkout = await shopifyClient.checkout.create();
      
      // Convert our React cart array into the exact format Shopify wants
      const lineItemsToAdd = cartItems.map(item => ({
        variantId: item.id,
        quantity: item.quantity
      }));

      const updatedCheckout = await shopifyClient.checkout.addLineItems(checkout.id, lineItemsToAdd);
      window.location.href = updatedCheckout.webUrl;
    } catch (error) {
      console.error("Shopify Checkout Error:", error);
      alert("Checkout is currently unavailable. Please try again later.");
      setIsProcessing(false);
    }
  };

  // Calculate the grand total
  const rawSubtotal = cartItems.reduce((sum, item) => sum + (Number(item.price) * item.quantity), 0);
  const formattedSubtotal = `₹${rawSubtotal.toLocaleString('en-IN')}`;

  return (
    <>
      <section id="product" className="py-24 md:py-36 px-6 bg-charcoal">
        <div className="max-w-5xl mx-auto">
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
                <button onClick={() => setSelected("gold")} className={`flex-1 py-3 text-xs tracking-luxury uppercase font-sans border transition-all duration-300 active:scale-[0.97] ${selected === "gold" ? "border-gold text-gold bg-gold/5" : "border-foreground/10 text-muted-foreground hover:border-foreground/30"}`}>Gold</button>
                <button onClick={() => setSelected("silver")} className={`flex-1 py-3 text-xs tracking-luxury uppercase font-sans border transition-all duration-300 active:scale-[0.97] ${selected === "silver" ? "border-silver text-silver bg-silver/5" : "border-foreground/10 text-muted-foreground hover:border-foreground/30"}`}>Silver</button>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.15}>
              <div className="space-y-6">
                <p className="font-sans text-muted-foreground font-light leading-relaxed">
                  A symbolic phoenix pendant necklace crafted with premium finish. Skin-friendly, lightweight, and designed as a statement minimalist piece.
                </p>

                <div className="pt-4 border-t border-foreground/8">
                  <div className="flex items-baseline gap-4 mb-1">
                    {isLoadingData ? (
                      <span className="font-serif text-2xl text-gold animate-pulse">Syncing price...</span>
                    ) : (
                      <span className="font-serif text-3xl text-gold">
                        ₹{liveProduct?.variants?.[0]?.price?.amount || "3,499"}
                      </span>
                    )}
                  </div>
                  
                  <p className="text-xs font-sans text-muted-foreground mb-6">First 50 customers · Founder pricing</p>

                  <button 
                    onClick={handleAddToCart}
                    disabled={isLoadingData}
                    className="group inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 font-sans text-sm tracking-luxury uppercase font-medium transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--gold)/0.3)] active:scale-[0.97] w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Add to Cart
                    <ShoppingBag className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleFinalCheckout}
        isProcessing={isProcessing}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        subtotal={formattedSubtotal}
      />
    </>
  );
};

export default ProductShowcase;