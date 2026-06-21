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
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[#050505]/70 backdrop-blur-3xl border-b border-white/[0.06] shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
            : ""
        }`}
        style={{ padding: scrolled ? "14px 0" : "22px 0" }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-xl font-black tracking-tight group">
            <span className="text-white group-hover:text-white/90 transition-colors">Cover</span>
            <span className="text-gradient-blue">Hub</span>
            <span className="text-[10px] font-light text-white/25 ml-1.5 hidden sm:inline tracking-[0.15em] uppercase">
              Dehradun
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {links.map((l) => (
              <Link
                key={l.name}
                href={l.href}
                className="text-[13px] text-white/50 hover:text-white transition-all duration-300 relative group tracking-wide"
              >
                {l.name}
                <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#007AFF] to-[#5856D6] group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <Link href="/shop" className="text-white/40 hover:text-white transition-colors duration-300">
              <Search size={18} strokeWidth={1.5} />
            </Link>
            <Link
              href="/cart"
              className="text-white/40 hover:text-white transition-colors duration-300 relative"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2.5 -right-2.5 w-5 h-5 bg-gradient-to-r from-[#007AFF] to-[#5856D6] rounded-full text-[9px] flex items-center justify-center font-bold shadow-[0_0_10px_rgba(0,122,255,0.4)]"
                >
                  {totalItems}
                </motion.span>
              )}
            </Link>
            <button
              className="md:hidden text-white/40 hover:text-white transition-colors"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-[#050505]/98 backdrop-blur-3xl flex flex-col items-center justify-center"
          >
            <button
              className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              <X size={24} />
            </button>

            <div className="flex flex-col items-center gap-10">
              {links.map((l, i) => (
                <motion.div
                  key={l.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-3xl font-bold text-white/60 hover:text-white transition-colors tracking-tight"
                  >
                    {l.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <div className="section-divider w-20 my-4" />
                <Link
                  href="/cart"
                  onClick={() => setMobileOpen(false)}
                  className="text-white/30 flex items-center gap-3 text-sm tracking-wider"
                >
                  <ShoppingBag size={16} /> Cart ({totalItems})
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
