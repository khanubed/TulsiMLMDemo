import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowRight,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  Leaf,
  Heart,
  CheckCircle2,
  Info,
} from "lucide-react";
import { FLAGSHIP_PRODUCT } from "../data/productData";
import { FAQS } from "../data/faqData";
import { useCartStore } from "../store/useCartStore";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const { addItem } = useCartStore();
  const [openFaq, setOpenFaq] = useState<string | null>("faq-1");

  const handleAddToCart = () => {
    addItem(FLAGSHIP_PRODUCT, 1);
  };

  const handleBuyNow = () => {
    addItem(FLAGSHIP_PRODUCT, 1);
    navigate("/checkout");
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#F8F5ED]">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#E5DFD3]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Typography & CTAs */}
            <div className="lg:col-span-6 space-y-6 z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EFE9DB] border border-[#A9B7A0]/60 text-xs font-semibold text-[#183F32]">
                <Leaf className="w-3.5 h-3.5 text-[#285642]" />
                <span>Ayurvedic Botanical Living</span>
                <span className="text-[#B49A63]">•</span>
                <span className="text-[#285642] font-bold">₹500</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#183F32] leading-[1.12] tracking-tight">
                Rooted in Nature.
                <br />
                <span className="italic font-normal text-[#285642]">
                  Made for Everyday Rituals.
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#77796F] max-w-xl mx-auto lg:mx-0 leading-relaxed font-sans">
                Discover Tulsi Swaraj and our mindful approach to bringing pure,
                thoughtfully prepared Indian herbal blends into your daily
                morning and evening wellness routines.
              </p>

              {/* Price & Action Cluster */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() =>
                    navigate("/products/tulsi-meta-ved-herbal-mix")
                  }
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#183F32] text-[#F8F5ED] rounded-xl text-sm font-semibold tracking-wide hover:bg-[#285642] transition-all shadow-md flex items-center justify-center gap-2 group cursor-pointer"
                >
                  Explore the Product
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <Link
                  to="/about"
                  className="w-full sm:w-auto px-7 py-3.5 bg-transparent border border-[#285642] text-[#183F32] rounded-xl text-sm font-semibold hover:bg-[#EFE9DB] transition-colors text-center"
                >
                  Our Story
                </Link>
              </div>

              {/* Trust markers */}
              <div className="pt-6 grid grid-cols-3 gap-3 border-t border-[#E5DFD3] text-left">
                <div>
                  <p className="font-serif text-lg font-bold text-[#183F32]">
                    100%
                  </p>
                  <p className="text-xs text-[#77796F]">Botanical Heritage</p>
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-[#183F32]">
                    ₹500
                  </p>
                  <p className="text-xs text-[#77796F]">Transparent Pricing</p>
                </div>
                <div>
                  <p className="font-serif text-lg font-bold text-[#183F32]">
                    Pan-India
                  </p>
                  <p className="text-xs text-[#77796F]">Direct Dispatch</p>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Art Composition */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Decorative border frame */}
                <div className="absolute -inset-3 rounded-3xl bg-[#EFE9DB]/70 -rotate-1 -z-10" />

                <div className="overflow-hidden rounded-2xl shadow-xl border border-[#E5DFD3] bg-[#EFE9DB] aspect-16/10">
                  <img
                    src="/images/hero_botanical.jpg"
                    alt="Tulsi Swaraj Herbal Preparation on stone pedestal"
                    className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  />
                </div>

                {/* Floating pill badge */}
                <div className="absolute -bottom-4 -left-3 sm:bottom-4 sm:-left-4 bg-[#F8F5ED]/95 backdrop-blur-md px-4 py-3 rounded-xl border border-[#A9B7A0]/70 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#183F32] flex items-center justify-center text-[#F8F5ED]">
                    <Sparkles className="w-5 h-5 text-[#B49A63]" />
                  </div>
                  <div>
                    <p className="text-xs font-serif font-bold text-[#183F32]">
                      Tulsi Meta Ved Mix
                    </p>
                    <p className="text-[11px] text-[#77796F]">
                      Flagship Indian Formulation • ₹500
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BRAND INTRODUCTION */}
      <section className="py-16 sm:py-20 bg-[#EFE9DB]/50 border-b border-[#E5DFD3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#B49A63]">
            Our Guiding Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#183F32] leading-snug">
            "In Indian tradition, the sacred Tulsi leaf represents living
            balance, spiritual clarity, and gentle vitality."
          </h2>
          <p className="text-base text-[#77796F] leading-relaxed max-w-2xl mx-auto">
            Tulsi Swaraj was founded to honor this timeless botanical wisdom
            without the noise, exaggerated claims, or convoluted promises of
            modern commerce. We focus on one flagship formulation, meticulously
            prepared and offered directly to your home.
          </p>
          <div className="pt-2">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#183F32] hover:text-[#285642] underline underline-offset-4"
            >
              Read our full brand story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. FEATURED PRODUCT SECTION */}
      <section className="py-20 border-b border-[#E5DFD3] bg-[#F8F5ED]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#285642]">
              Flagship Presentation
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#183F32]">
              Tulsi Meta Ved Herbal Mix
            </h2>
            <p className="text-sm text-[#77796F]">
              Handcrafted botanical harmony for daily infusions, morning
              decoctions, or mindful evening warm tea.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#EFE9DB]/40 rounded-3xl p-6 sm:p-10 border border-[#E5DFD3]">
            {/* Product Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border border-[#E5DFD3] shadow-lg bg-white">
                <img
                  src={FLAGSHIP_PRODUCT.images[0].url}
                  alt={FLAGSHIP_PRODUCT.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#183F32] text-[#F8F5ED] text-xs font-medium px-3 py-1 rounded-full">
                  Verified Price: ₹500
                </div>
              </div>
            </div>

            {/* Product Details & Actions */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-[#B49A63]">
                  {FLAGSHIP_PRODUCT.badge}
                </span>
                <h3 className="text-3xl font-serif font-bold text-[#183F32] mt-1">
                  {FLAGSHIP_PRODUCT.name}
                </h3>
                <p className="text-sm text-[#77796F] mt-1 italic">
                  {FLAGSHIP_PRODUCT.subtitle}
                </p>
              </div>

              {/* Pricing Box */}
              <div className="flex items-baseline gap-3 py-3 border-y border-[#E5DFD3]">
                <span className="text-3xl font-bold font-serif text-[#183F32]">
                  ₹{FLAGSHIP_PRODUCT.price}
                </span>
                <span className="text-xs text-[#77796F]">
                  MRP inclusive of all taxes • Complimentary delivery across
                  India
                </span>
              </div>

              <p className="text-sm text-[#252923] leading-relaxed">
                {FLAGSHIP_PRODUCT.description}
              </p>

              {/* Key Specs Pills */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-white/70 border border-[#E5DFD3]">
                  <span className="text-[#77796F] block">Packaging</span>
                  <span className="font-semibold text-[#183F32]">
                    Ceramic Sealed Jar (100g)*
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-white/70 border border-[#E5DFD3]">
                  <span className="text-[#77796F] block">Key Herbs</span>
                  <span className="font-semibold text-[#183F32]">
                    Krishna Tulsi, Rama Tulsi
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 py-3.5 px-6 rounded-xl border border-[#183F32] text-[#183F32] font-semibold text-sm hover:bg-[#EFE9DB] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>

                <button
                  onClick={handleBuyNow}
                  className="flex-1 py-3.5 px-6 rounded-xl bg-[#183F32] text-[#F8F5ED] font-semibold text-sm hover:bg-[#285642] transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                >
                  Buy Now (₹500)
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2 text-xs text-[#77796F]">
                <Info className="w-3.5 h-3.5 text-[#B49A63] shrink-0" />
                <span>
                  *Preliminary prototype batch specifications. Detailed lab
                  report supplied upon production dispatch.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT DETAILS & INGREDIENT STORY */}
      <section className="py-20 bg-[#EFE9DB]/30 border-b border-[#E5DFD3]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual Left */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-[#E5DFD3] shadow-md aspect-4/3">
                <img
                  src="/images/botanical_ingredients.jpg"
                  alt="Raw botanical ingredients and fresh tulsi on limestone"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[11px] text-[#77796F] text-center mt-2 italic">
                Fresh tulsi and complementary traditional spices arranged on
                natural limestone
              </p>
            </div>

            {/* Details Right */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B49A63]">
                  Ingredient Transparency
                </span>
                <h2 className="text-3xl font-serif text-[#183F32] mt-1">
                  Reverence for the Leaf
                </h2>
                <p className="text-sm text-[#77796F] mt-2 leading-relaxed">
                  In keeping with our strict brand commitment, we do not invent
                  clinical claims or hide behind proprietary shields. Here is
                  our confirmed preliminary botanical formulation:
                </p>
              </div>

              <div className="space-y-3">
                {FLAGSHIP_PRODUCT.verifiedIngredients.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-white rounded-xl border border-[#E5DFD3] flex items-center gap-3 text-sm text-[#252923]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#285642] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-[#F8F5ED] border border-[#A9B7A0] text-xs text-[#285642] space-y-1">
                <div className="font-semibold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#183F32]" />
                  Verified Brand Standard
                </div>
                <p className="text-[#77796F]">
                  Final certified percentages, AYUSH license details, and batch
                  certification codes will be permanently embossed on production
                  packaging.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BRAND VALUES */}
      <section className="py-20 bg-[#F8F5ED] border-b border-[#E5DFD3]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#285642]">
              Integrity in Commerce
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#183F32]">
              Our Guiding Commitments
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#EFE9DB]/50 rounded-2xl border border-[#E5DFD3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#183F32] text-[#F8F5ED] flex items-center justify-center">
                <Leaf className="w-5 h-5 text-[#A9B7A0]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#183F32]">
                Herbal Integrity
              </h3>
              <p className="text-xs text-[#77796F] leading-relaxed">
                Respecting centuries-old Indian herbal tradition with mindful
                sourcing, preserving botanical vitality.
              </p>
            </div>

            <div className="p-6 bg-[#EFE9DB]/50 rounded-2xl border border-[#E5DFD3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#183F32] text-[#F8F5ED] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#A9B7A0]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#183F32]">
                No Fabricated Claims
              </h3>
              <p className="text-xs text-[#77796F] leading-relaxed">
                We refuse to advertise miraculous cure-alls. We present honest,
                grounding wellness for thoughtful daily rituals.
              </p>
            </div>

            <div className="p-6 bg-[#EFE9DB]/50 rounded-2xl border border-[#E5DFD3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#183F32] text-[#F8F5ED] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-[#A9B7A0]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#183F32]">
                Fair & Clear Pricing
              </h3>
              <p className="text-xs text-[#77796F] leading-relaxed">
                A single transparent price of ₹500 without hidden fees,
                fabricated countdown timers, or artificially inflated discounts.
              </p>
            </div>

            <div className="p-6 bg-[#EFE9DB]/50 rounded-2xl border border-[#E5DFD3] space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#183F32] text-[#F8F5ED] flex items-center justify-center">
                <Heart className="w-5 h-5 text-[#A9B7A0]" />
              </div>
              <h3 className="font-serif text-lg font-bold text-[#183F32]">
                Thoughtful Support
              </h3>
              <p className="text-xs text-[#77796F] leading-relaxed">
                Direct customer assistance from our Bengaluru support desk for
                order inquiries, delivery updates, and returns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PRODUCT IMAGERY & DAILY USAGE RITUAL */}
      <section className="py-20 bg-[#EFE9DB]/40 border-b border-[#E5DFD3]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Steps Column */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#B49A63]">
                  Rituals of Mindful Living
                </span>
                <h2 className="text-3xl sm:text-4xl font-serif text-[#183F32] mt-1">
                  How to Enjoy Tulsi Meta Ved
                </h2>
                <p className="text-sm text-[#77796F] mt-2">
                  Take three quiet minutes each morning or evening to pause and
                  reconnect.
                </p>
              </div>

              <div className="space-y-6">
                {FLAGSHIP_PRODUCT.usageInstructions.map((instruction) => (
                  <div
                    key={instruction.step}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#183F32] text-[#F8F5ED] flex items-center justify-center font-serif text-sm font-bold shrink-0">
                      {instruction.step}
                    </div>
                    <div>
                      <h3 className="font-serif text-base font-semibold text-[#183F32]">
                        {instruction.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#77796F] mt-1 leading-relaxed">
                        {instruction.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={handleAddToCart}
                  className="px-6 py-3 bg-[#183F32] text-[#F8F5ED] rounded-xl text-sm font-semibold hover:bg-[#285642] transition-colors inline-flex items-center gap-2 cursor-pointer"
                >
                  Add to Cart • ₹500
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Lifestyle Image */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-[#E5DFD3] bg-white aspect-square">
                <img
                  src="/images/product_lifestyle.jpg"
                  alt="Herbal morning tea infusion ritual with Tulsi Meta Ved jar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CUSTOMER FEEDBACK SECTION (Compliant & Honest) */}
      <section className="py-16 bg-[#F8F5ED] border-b border-[#E5DFD3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#77796F]">
            Customer Community
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#183F32]">
            Verified Feedback Protocol
          </h2>
          <div className="p-6 rounded-2xl bg-[#EFE9DB]/60 border border-[#A9B7A0] max-w-xl mx-auto space-y-2">
            <ShieldCheck className="w-8 h-8 text-[#183F32] mx-auto" />
            <h3 className="font-serif text-base font-semibold text-[#183F32]">
              Real Reviews from Genuine Orders Only
            </h3>
            <p className="text-xs text-[#77796F] leading-relaxed">
              In accordance with our strict brand ethics, we do not fabricate
              testimonial quotes, customer ratings, or fictitious review counts.
              Once early-access customers receive their production jars,
              verified impressions will appear here.
            </p>
          </div>
        </div>
      </section>

      {/* 8. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-20 bg-[#EFE9DB]/30 border-b border-[#E5DFD3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#B49A63]">
              Clarity & Transparency
            </span>
            <h2 className="text-3xl font-serif text-[#183F32]">
              Frequently Asked Questions
            </h2>
            <p className="text-xs text-[#77796F]">
              Direct answers regarding Tulsi Meta Ved, orders, formulation, and
              delivery.
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq) => {
              const isOpen = openFaq === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-[#E5DFD3] overflow-hidden transition-all"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between gap-4 hover:bg-[#F8F5ED] transition-colors"
                  >
                    <span className="font-serif text-base font-semibold text-[#183F32]">
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#285642] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#77796F] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-[#77796F] leading-relaxed border-t border-[#E5DFD3]/60 bg-[#F8F5ED]/40">
                      <p>{faq.answer}</p>
                      {faq.isPendingVerification && (
                        <span className="inline-block mt-2 text-[11px] text-[#B49A63] bg-[#EFE9DB] px-2.5 py-1 rounded">
                          Batch lab sheet pending publication
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. CLOSING CTA SECTION */}
      <section className="py-20 bg-[#183F32] text-[#F8F5ED] relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-semibold tracking-widest uppercase text-[#B49A63]">
            Begin Your Wellness Ritual
          </span>

          <h2 className="text-3xl sm:text-5xl font-serif leading-tight">
            Tulsi Meta Ved Herbal Mix
            <br />
            <span className="text-[#A9B7A0] font-normal italic">
              Pure Ayurvedic Heritage for ₹500
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#A9B7A0] max-w-xl mx-auto leading-relaxed">
            Experience the soothing harmony of botanical living. Delivered
            straight to your doorstep across India in a protective sealed
            container.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={handleBuyNow}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#B49A63] text-[#183F32] font-serif font-bold text-base rounded-xl hover:bg-[#d0b47b] transition-colors shadow-lg cursor-pointer flex items-center justify-center gap-2"
            >
              Order Now • ₹500
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => navigate("/products/tulsi-meta-ved-herbal-mix")}
              className="w-full sm:w-auto px-7 py-3.5 border border-[#A9B7A0] text-[#F8F5ED] rounded-xl text-sm font-semibold hover:bg-[#285642] transition-colors cursor-pointer"
            >
              View Full Product Specs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
