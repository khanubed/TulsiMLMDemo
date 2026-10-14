import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ShoppingBag, User, Menu, X, Leaf, ArrowRight } from "lucide-react";
import { useCartStore } from "../../store/useCartStore";
import { useAuthStore } from "../../store/useAuthStore";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openDrawer, getTotalItems } = useCartStore();
  const { isAuthenticated, user } = useAuthStore();
  const navigate = useNavigate();

  const totalItems = getTotalItems();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/about" },
    { name: "Product", path: "/products/tulsi-meta-ved-herbal-mix" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#F8F5ED]/95 backdrop-blur-md border-b border-[#E5DFD3] transition-all">
        {/* Top subtle notification bar */}
        <div className="bg-[#183F32] text-[#F8F5ED] text-xs py-1.5 px-4 text-center tracking-wide font-medium flex items-center justify-center gap-2">
          <Leaf className="w-3.5 h-3.5 text-[#A9B7A0]" />
          <span>
            Flagship Release: Tulsi Meta Ved Herbal Mix • Introductory ₹500 •
            All-India Delivery
          </span>
        </div>

        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-full bg-[#183F32] flex items-center justify-center text-[#F8F5ED] shadow-sm group-hover:bg-[#285642] transition-colors">
                <Leaf className="w-5 h-5 text-[#A9B7A0]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight text-[#183F32] leading-none">
                  Tulsi Swaraj
                </span>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#77796F] font-semibold mt-1">
                  Ayurvedic Botanical Living
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-[#183F32] relative py-1 ${
                      isActive
                        ? "text-[#183F32] font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-[#183F32]"
                        : "text-[#77796F]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              {/* Account icon */}
              <Link
                to={isAuthenticated ? "/dashboard" : "/login"}
                className="flex items-center gap-2 p-2 text-[#252923] hover:text-[#183F32] hover:bg-[#EFE9DB] rounded-lg transition-colors text-sm"
                title={
                  isAuthenticated
                    ? `Logged in as ${user?.fullName}`
                    : "Login / Account"
                }
              >
                <User className="w-5 h-5" />
                <span className="hidden lg:inline text-xs font-medium">
                  {isAuthenticated ? user?.fullName?.split(" ")[0] : "Account"}
                </span>
              </Link>

              {/* Cart trigger button */}
              <button
                onClick={openDrawer}
                className="relative p-2 text-[#252923] hover:text-[#183F32] hover:bg-[#EFE9DB] rounded-lg transition-colors"
                aria-label={`Open shopping cart with ${totalItems} items`}
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#183F32] text-[#F8F5ED] text-[10px] font-bold rounded-full flex items-center justify-center animate-scaleIn">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Shop Now Primary CTA */}
              <button
                onClick={() => navigate("/products/tulsi-meta-ved-herbal-mix")}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#183F32] text-[#F8F5ED] text-xs font-semibold uppercase tracking-wider rounded-lg hover:bg-[#285642] transition-colors shadow-xs"
              >
                Shop Now
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile menu hamburger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 text-[#252923] hover:bg-[#EFE9DB] rounded-lg"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#E5DFD3] bg-[#F8F5ED] px-4 pt-3 pb-6 space-y-3">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2.5 rounded-lg text-base font-medium ${
                      isActive
                        ? "bg-[#EFE9DB] text-[#183F32] font-semibold"
                        : "text-[#252923] hover:bg-[#EFE9DB]"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E5DFD3] space-y-2">
              <Link
                to={isAuthenticated ? "/dashboard" : "/login"}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base text-[#252923] hover:bg-[#EFE9DB]"
              >
                <User className="w-5 h-5 text-[#183F32]" />
                <span>
                  {isAuthenticated
                    ? `Dashboard (${user?.fullName})`
                    : "Account Login / Register"}
                </span>
              </Link>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  navigate("/products/tulsi-meta-ved-herbal-mix");
                }}
                className="w-full py-3 bg-[#183F32] text-[#F8F5ED] text-sm font-semibold rounded-lg flex items-center justify-center gap-2"
              >
                Shop Tulsi Meta Ved (₹500)
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
