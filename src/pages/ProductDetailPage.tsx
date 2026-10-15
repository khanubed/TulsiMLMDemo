import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ShoppingBag,
  ArrowRight,
  Plus,
  Minus,
  CheckCircle2,
  ShieldCheck,
  Truck,
  RotateCcw,
  MapPin,
  ChevronRight,
  Info,
} from "lucide-react";
import { FLAGSHIP_PRODUCT } from "../data/productData";
import { useCartStore } from "../store/useCartStore";

export const ProductDetailPage: React.FC = () => {
  const navigate = useNavigate();
  const { addItem } = useCartStore();

  const [selectedImage, setSelectedImage] = useState(
    FLAGSHIP_PRODUCT.images[0].url,
  );
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<
    "overview" | "ingredients" | "usage" | "specs" | "shipping"
  >("overview");
  const [pincode, setPincode] = useState("");
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    addItem(FLAGSHIP_PRODUCT, quantity);
  };

  const handleBuyNow = () => {
    addItem(FLAGSHIP_PRODUCT, quantity);
    navigate("/checkout");
  };

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pincode || pincode.length !== 6 || isNaN(Number(pincode))) {
      setPincodeStatus("Please enter a valid 6-digit Indian PIN code");
      return;
    }
    setPincodeStatus(
      `PIN ${pincode} is serviceable! Estimated delivery within 3–5 business days.`,
    );
  };

  return (
    <div className="min-h-screen bg-[#F8F5ED] pb-32 lg:pb-20">
      {/* Breadcrumbs */}
      <div className="border-b border-[#E5DFD3] bg-[#EFE9DB]/40">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav className="flex items-center gap-2 text-xs text-[#77796F]">
            <Link to="/" className="hover:text-[#183F32] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span>Products</span>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-[#183F32] font-semibold">
              {FLAGSHIP_PRODUCT.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="py-12 border-b border-[#E5DFD3]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Product Imagery Gallery */}
            <div className="lg:col-span-7 space-y-4">
              {/* Main large display image */}
              <div className="aspect-square rounded-xl overflow-hidden border border-[#E5DFD3] shadow-lg bg-white relative">
                <img
                  src={selectedImage}
                  alt={FLAGSHIP_PRODUCT.name}
                  className="w-full h-full object-cover transition-all duration-300"
                />
                <div className="absolute top-4 left-4 bg-[#183F32] text-[#F8F5ED] text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                  ₹{FLAGSHIP_PRODUCT.price} • Verified Price
                </div>
              </div>

              {/* Thumbnail selector */}
              <div className="grid grid-cols-4 gap-3">
                {FLAGSHIP_PRODUCT.images.map((img) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(img.url)}
                    className={`aspect-square rounded-md overflow-hidden border-2 transition-all p-1 bg-white cursor-pointer ${
                      selectedImage === img.url
                        ? "border-[#183F32] ring-2 ring-[#183F32]/20"
                        : "border-[#E5DFD3] hover:border-[#A9B7A0]"
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.alt}
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Purchase Panel */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B49A63]">
                  {FLAGSHIP_PRODUCT.badge}
                </span>
                <h1 className="text-3xl sm:text-4xl font-serif text-[#183F32] mt-1 font-bold">
                  {FLAGSHIP_PRODUCT.name}
                </h1>
                <p className="text-sm text-[#77796F] mt-1 italic">
                  {FLAGSHIP_PRODUCT.subtitle}
                </p>
              </div>

              {/* Price block */}
              <div className="p-4 rounded-lg bg-[#EFE9DB]/70 border border-[#E5DFD3] space-y-1">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-serif font-bold text-[#183F32]">
                    ₹{FLAGSHIP_PRODUCT.price}
                  </span>
                  <span className="text-xs font-medium text-[#285642] bg-[#A9B7A0]/30 px-2 py-0.5 rounded">
                    Introductory Flagship Rate
                  </span>
                </div>
                <p className="text-xs text-[#77796F]">
                  MRP inclusive of all domestic taxes. No hidden processing
                  charges.
                </p>
              </div>

              <p className="text-sm text-[#252923] leading-relaxed">
                {FLAGSHIP_PRODUCT.description}
              </p>

              {/* Quantity selector */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-[#183F32] uppercase tracking-wider block">
                  Select Quantity
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-[#A9B7A0] rounded-xl bg-white overflow-hidden shadow-xs">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#252923] hover:bg-[#EFE9DB] transition-colors cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-2.5 text-sm font-semibold tabular-nums text-[#183F32]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      className="min-w-[44px] min-h-[44px] flex items-center justify-center text-[#252923] hover:bg-[#EFE9DB] transition-colors cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <span className="text-xs text-[#77796F]">
                    Total: <strong className="text-[#183F32]">₹{FLAGSHIP_PRODUCT.price * quantity}</strong>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-3.5 px-6 min-h-[46px] rounded-xl border border-[#183F32] text-[#183F32] font-semibold text-sm hover:bg-[#EFE9DB] transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    Add to Cart
                  </button>

                  <button
                    onClick={handleBuyNow}
                    className="flex-1 py-3.5 px-6 min-h-[46px] rounded-xl bg-[#183F32] text-[#F8F5ED] font-semibold text-sm hover:bg-[#285642] transition-colors flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    Buy Now • ₹{FLAGSHIP_PRODUCT.price * quantity}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Pincode Serviceability Checker */}
              <div className="p-4 rounded-xl bg-white border border-[#E5DFD3] space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#183F32]">
                  <MapPin className="w-4 h-4 text-[#285642]" />
                  <span>Check Postal Delivery Availability</span>
                </div>
                <form onSubmit={handlePincodeCheck} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    maxLength={6}
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter 6-digit PIN code"
                    className="flex-1 px-3 py-2.5 text-xs rounded-lg border border-[#A9B7A0] focus:outline-none focus:ring-1 focus:ring-[#183F32]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 min-h-[42px] bg-[#285642] text-[#F8F5ED] text-xs font-semibold rounded-lg hover:bg-[#183F32] transition-colors cursor-pointer"
                  >
                    Check
                  </button>
                </form>
                {pincodeStatus && (
                  <p className={`text-xs ${pincodeStatus.includes('serviceable') ? 'text-[#285642] font-medium' : 'text-red-700'}`}>
                    {pincodeStatus}
                  </p>
                )}
                <p className="text-[10px] text-[#77796F] italic">
                  *Simulated demo delivery estimation. All major Indian PIN codes are currently configured.
                </p>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-3 gap-2 pt-2 text-center text-[10px] sm:text-[11px] text-[#77796F]">
                <div className="p-2.5 rounded-xl bg-[#EFE9DB]/50 border border-[#E5DFD3]">
                  <Truck className="w-4 h-4 mx-auto mb-1 text-[#183F32]" />
                  <span>Pan-India Dispatch</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#EFE9DB]/50 border border-[#E5DFD3]">
                  <RotateCcw className="w-4 h-4 mx-auto mb-1 text-[#183F32]" />
                  <span>7-Day Returns</span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#EFE9DB]/50 border border-[#E5DFD3]">
                  <ShieldCheck className="w-4 h-4 mx-auto mb-1 text-[#183F32]" />
                  <span>Pure Herbal Base</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Below the Fold: Structured Information Tabs */}
      <section className="py-16">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex border-b border-[#E5DFD3] overflow-x-auto no-scrollbar gap-5 sm:gap-8 -mx-4 px-4 sm:mx-0 sm:px-0">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'ingredients', label: 'Ingredients & Purity' },
              { id: 'usage', label: 'Directions for Use' },
              { id: 'specs', label: 'Specifications' },
              { id: 'shipping', label: 'Shipping & Returns' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-3.5 text-xs sm:text-sm font-semibold whitespace-nowrap cursor-pointer transition-colors relative shrink-0 ${
                  activeTab === tab.id
                    ? 'text-[#183F32] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#183F32]'
                    : 'text-[#77796F] hover:text-[#183F32]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Contents */}
          <div className="py-8">
            {activeTab === "overview" && (
              <div className="max-w-3xl space-y-4 text-sm text-[#252923] leading-relaxed">
                <h3 className="text-2xl font-serif text-[#183F32]">
                  The Spirit of Tulsi Meta Ved Herbal Mix
                </h3>
                <p>
                  Tulsi Meta Ved Herbal Mix is rooted in the rich ethos of
                  classical Indian botanical knowledge. The formulation is
                  centered upon hand-gathered Holy Basil leaves (Krishna and
                  Rama Tulsi), blended to offer a soothing, grounding daily cup.
                </p>
                <p>
                  Unlike mass-market beverages burdened with synthetic
                  preservatives or artificial flavor enhancers, our formulation
                  maintains the authentic aroma and natural earthy depth of pure
                  Indian botanicals.
                </p>
                <div className="p-4 rounded-md bg-[#EFE9DB]/50 border border-[#A9B7A0] mt-6">
                  <h4 className="font-serif text-sm font-semibold text-[#183F32]">
                    Everyday Mindfulness
                  </h4>
                  <p className="text-xs text-[#77796F] mt-1">
                    Best incorporated during early morning contemplation,
                    post-yoga cooldowns, or restful evening transitions.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "ingredients" && (
              <div className="max-w-3xl space-y-6">
                <h3 className="text-2xl font-serif text-[#183F32]">
                  Herbal Transparency
                </h3>
                <p className="text-sm text-[#77796F]">
                  We believe complete transparency builds lasting trust. Below
                  are the verified primary herbal elements in our blend:
                </p>
                <div className="space-y-3">
                  {FLAGSHIP_PRODUCT.verifiedIngredients.map((ing, i) => (
                    <div
                      key={i}
                      className="p-4 bg-white rounded-md border border-[#E5DFD3] flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#285642]" />
                        <span className="font-medium text-sm text-[#252923]">
                          {ing}
                        </span>
                      </div>
                      <span className="text-xs text-[#77796F] bg-[#EFE9DB] px-2.5 py-1 rounded">
                        Natural Botanical
                      </span>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-md bg-[#F8F5ED] border border-[#B49A63]/60 text-xs text-[#77796F] space-y-1">
                  <div className="flex items-center gap-2 font-semibold text-[#183F32]">
                    <Info className="w-4 h-4 text-[#B49A63]" />
                    <span>Certificate of Analysis & Batch Ratios</span>
                  </div>
                  <p>
                    Final certified laboratory ratios and AYUSH quality
                    certificates are finalized during commercial batch bottling.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "usage" && (
              <div className="max-w-3xl space-y-6">
                <h3 className="text-2xl font-serif text-[#183F32]">
                  Preparation & Usage Rituals
                </h3>
                <div className="space-y-4">
                  {FLAGSHIP_PRODUCT.usageInstructions.map((step) => (
                    <div
                      key={step.step}
                      className="p-4 bg-white rounded-md border border-[#E5DFD3] flex gap-4"
                    >
                      <div className="w-8 h-8 rounded-full bg-[#183F32] text-[#F8F5ED] flex items-center justify-center font-bold text-sm shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-[#183F32]">
                          {step.title}
                        </h4>
                        <p className="text-xs text-[#77796F] mt-1">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-[#77796F] italic">
                  Note: Natural herbal mixes are best taken on an empty stomach
                  in the morning or 30 minutes before sleep.
                </p>
              </div>
            )}

            {activeTab === "specs" && (
              <div className="max-w-3xl space-y-4">
                <h3 className="text-2xl font-serif text-[#183F32]">
                  Product Specifications
                </h3>
                <div className="bg-white rounded-lg border border-[#E5DFD3] overflow-hidden divide-y divide-[#E5DFD3]">
                  {FLAGSHIP_PRODUCT.specifications.map((spec, i) => (
                    <div
                      key={i}
                      className="p-4 flex flex-col sm:flex-row justify-between text-sm"
                    >
                      <span className="font-semibold text-[#183F32] sm:w-1/3">
                        {spec.label}
                      </span>
                      <span className="text-[#77796F] sm:w-2/3 mt-1 sm:mt-0 flex items-center gap-2">
                        {spec.value}
                        {spec.isPlaceholder && (
                          <span className="text-[10px] bg-[#EFE9DB] text-[#B49A63] px-2 py-0.5 rounded">
                            Pending batch stamp
                          </span>
                        )}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "shipping" && (
              <div className="max-w-3xl space-y-4 text-sm text-[#252923] leading-relaxed">
                <h3 className="text-2xl font-serif text-[#183F32]">
                  Shipping, Delivery & Returns
                </h3>
                <p>
                  All orders of Tulsi Meta Ved Herbal Mix (₹500) are shipped
                  through priority surface couriers.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  <div className="p-4 bg-white rounded-md border border-[#E5DFD3] space-y-1">
                    <h4 className="font-semibold text-xs text-[#183F32] uppercase">
                      Domestic Delivery
                    </h4>
                    <p className="text-xs text-[#77796F]">
                      Delivered within 3–7 business days depending on location.
                      Tracking SMS/Email provided upon courier handover.
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-md border border-[#E5DFD3] space-y-1">
                    <h4 className="font-semibold text-xs text-[#183F32] uppercase">
                      Return Policy
                    </h4>
                    <p className="text-xs text-[#77796F]">
                      7-day return window for unopened jars with intact hygiene
                      tamper seals.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile Sticky Purchase Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#F8F5ED]/95 backdrop-blur-md border-t border-[#E5DFD3] p-3 shadow-2xl">
        <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
          <div>
            <span className="text-[10px] text-[#77796F] uppercase tracking-wider block">Total Price</span>
            <span className="text-lg font-serif font-bold text-[#183F32]">
              ₹{FLAGSHIP_PRODUCT.price * quantity}
            </span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleAddToCart}
              className="px-4 py-2.5 min-h-[44px] rounded-xl border border-[#183F32] text-[#183F32] text-xs font-semibold hover:bg-[#EFE9DB] transition-colors cursor-pointer"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="px-5 py-2.5 min-h-[44px] rounded-xl bg-[#183F32] text-[#F8F5ED] text-xs font-semibold hover:bg-[#285642] transition-colors cursor-pointer shadow-sm"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
