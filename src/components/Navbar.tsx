"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Collections", href: "/collections" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/60 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl"
            : ""
        }`}
        style={{ padding: scrolled ? "12px 0" : "20px 0" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-white">Cover</span>
            <span className="text-[#007AFF]">Hub</span>
            <span className="text-xs font-light text-white/40 ml-1 hidden sm:inline">
              Dehradun
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="text-sm text-white/70 hover:text-white transition-colors duration-300 relative group"
              >
                {l.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#007AFF] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/shop" className="text-white/70 hover:text-white transition-colors">
              <Search size={20} />
            </Link>
            <Link
              href="/cart"
              className="text-white/70 hover:text-white transition-colors relative"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-5 h-5 bg-[#007AFF] rounded-full text-[10px] flex items-center justify-center font-bold"
                >
                  {totalItems}
                </motion.span>
              )}
            </Link>
            <button
              className="md:hidden text-white/70 hover:text-white"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-0 z-[60] bg-[#0A0A0A]/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-white"
              onClick={() => setMobileOpen(false)}
            >
              <X size={24} />
            </button>
            {links.map((l, i) => (
              <motion.div
                key={l.name}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-white/80 hover:text-[#007AFF] transition-colors"
                >
                  {l.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/cart"
                onClick={() => setMobileOpen(false)}
                className="text-lg text-white/60 flex items-center gap-2"
              >
                <ShoppingBag size={20} /> Cart ({totalItems})
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
