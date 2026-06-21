import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Cover</span>
              <span className="text-[#007AFF]">Hub</span>{" "}
              <span className="text-sm font-light text-white/40">Dehradun</span>
            </h3>
            <p className="text-sm text-white/40 leading-relaxed mb-4">
              Premium iPhone cases crafted for those who demand the extraordinary.
            </p>
            <div className="flex gap-3">
              {["IG", "FB", "TW"].map((s) => (
                <a key={s} href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/8 flex items-center justify-center text-white/40 hover:text-[#007AFF] hover:border-[#007AFF]/30 transition-all text-xs font-bold">
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-white/60">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {[
                { name: "Shop All", href: "/shop" },
                { name: "New Arrivals", href: "/shop" },
                { name: "Bestsellers", href: "/shop" },
                { name: "MagSafe Cases", href: "/collections" },
              ].map((l) => (
                <Link key={l.name} href={l.href} className="text-sm text-white/40 hover:text-[#007AFF] transition-colors">
                  {l.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-white/60">Support</h4>
            <div className="flex flex-col gap-3">
              {["Shipping Policy", "Returns", "FAQs", "Track Order"].map((l) => (
                <a key={l} href="#" className="text-sm text-white/40 hover:text-[#007AFF] transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-sm tracking-wider uppercase text-white/60">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-white/40">
              <p>📍 Saharanpur Chowk, Dehradun</p>
              <a href="tel:7906220413" className="hover:text-[#007AFF] transition-colors">📞 7906220413</a>
              <a href="mailto:av1021854@gmail.com" className="hover:text-[#007AFF] transition-colors">✉️ av1021854@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">© 2026 CoverHub Dehradun. All rights reserved.</p>
          <p className="text-xs text-white/20">Crafted with precision ✦ Made in India</p>
        </div>
      </div>
    </footer>
  );
}
