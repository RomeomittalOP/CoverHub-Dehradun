import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.04] pt-20 pb-10 px-6">
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.15)]/20 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-14 mb-16">
          <div>
            <h3 className="text-2xl font-black mb-5">
              <span className="text-white">Cover</span>
              <span className="text-white/60">Hub</span>
            </h3>
            <p className="text-sm text-white/25 leading-relaxed mb-6">
              Premium iPhone cases crafted for those who demand the extraordinary. Every case tells a story of precision.
            </p>
            <div className="flex gap-3">
              {[
                { label: "IG", href: "#" },
                { label: "FB", href: "#" },
                { label: "TW", href: "#" },
              ].map((s) => (
                <a key={s.label} href={s.href} className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-white/30 hover:text-white/50 transition-all text-[10px] font-bold tracking-wider hover:!transform-none">
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-5 text-[11px] tracking-[0.2em] uppercase text-white/40">Shop</h4>
            <div className="flex flex-col gap-3.5">
              {[
                { name: "Shop All", href: "/shop" },
                { name: "New Arrivals", href: "/shop" },
                { name: "Bestsellers", href: "/shop" },
                { name: "MagSafe Cases", href: "/collections" },
              ].map((l) => (
                <Link key={l.name} href={l.href} className="text-sm text-white/25 hover:text-white/50 transition-colors duration-300">
                  {l.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-5 text-[11px] tracking-[0.2em] uppercase text-white/40">Support</h4>
            <div className="flex flex-col gap-3.5">
              {["Shipping Policy", "Returns & Exchange", "FAQs", "Track Order"].map((l) => (
                <a key={l} href="#" className="text-sm text-white/25 hover:text-white/50 transition-colors duration-300">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-5 text-[11px] tracking-[0.2em] uppercase text-white/40">Contact</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin size={14} className="text-white/50 mt-0.5 shrink-0" />
                <p className="text-sm text-white/25">Saharanpur Chowk, Dehradun</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-white/50 shrink-0" />
                <a href="tel:7906220413" className="text-sm text-white/25 hover:text-white/50 transition-colors">7906220413</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={14} className="text-white/50 shrink-0" />
                <a href="mailto:av1021854@gmail.com" className="text-sm text-white/25 hover:text-white/50 transition-colors">av1021854@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.04] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-white/15 tracking-wide">© 2026 CoverHub Dehradun. All rights reserved.</p>
          <p className="text-[11px] text-white/10 tracking-wide">Crafted with precision ✦ Made in India</p>
        </div>
      </div>
    </footer>
  );
}
