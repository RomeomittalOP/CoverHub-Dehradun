"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      {/* Ambient background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#007AFF]/[0.07] rounded-full blur-[150px] animate-gradient" style={{ background: "radial-gradient(ellipse, rgba(0,122,255,0.12) 0%, rgba(88,86,214,0.05) 50%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-[#007AFF]/[0.03] rounded-full blur-[100px]" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-premium text-xs text-white/70 mb-8 group cursor-default"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            Now available for iPhone 16 Series
            <Zap size={12} className="text-[#007AFF] group-hover:text-yellow-400 transition-colors" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black leading-[0.95] tracking-[-0.03em] mb-8"
          >
            <span className="text-gradient-premium block">Premium</span>
            <span className="text-gradient-premium block">iPhone Cases</span>
            <span className="block mt-2 text-white/90">Designed To</span>
            <span className="text-gradient-blue block text-6xl sm:text-7xl lg:text-[6rem]">Stand Out</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl sm:text-2xl text-white/40 mb-12 max-w-lg font-extralight tracking-[0.15em] uppercase"
          >
            Luxury&ensp;·&ensp;Protection&ensp;·&ensp;Style
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-5"
          >
            <Link
              href="/shop"
              className="btn-premium px-10 py-5 rounded-2xl font-semibold text-[13px] tracking-wider uppercase inline-flex items-center gap-3 text-white"
            >
              Shop Now <ArrowRight size={16} />
            </Link>
            <Link
              href="/collections"
              className="relative px-10 py-5 rounded-2xl font-semibold text-[13px] tracking-wider uppercase text-white/70 hover:text-white transition-all duration-500 group overflow-hidden"
            >
              <span className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/25 transition-colors duration-500" />
              <span className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/[0.04] transition-colors duration-500" />
              <span className="relative">Explore Collections</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex items-center gap-8 mt-14 pt-8 border-t border-white/[0.06]"
          >
            <div className="flex -space-x-3">
              {["AK", "RS", "PM", "NJ", "VS"].map((a, i) => (
                <motion.div
                  key={a}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4 + i * 0.1 }}
                  className="w-10 h-10 rounded-full border-2 border-[#050505] flex items-center justify-center text-[10px] font-bold text-white/80"
                  style={{ background: `linear-gradient(135deg, hsl(${220 + i * 30}, 70%, 40%), hsl(${220 + i * 30}, 70%, 25%))` }}
                >
                  {a}
                </motion.div>
              ))}
            </div>
            <div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400 drop-shadow-[0_0_3px_rgba(250,204,21,0.4)]" />
                ))}
              </div>
              <p className="text-xs text-white/30 mt-1.5 tracking-wide">
                <span className="text-white/60 font-semibold">2,500+</span> happy customers
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ delay: 0.4, duration: 1.2, ease: [0.25, 0.1, 0, 1] }}
          className="relative flex items-center justify-center lg:ml-10"
        >
          {/* Orbiting dots */}
          <div className="absolute w-[360px] h-[360px] sm:w-[450px] sm:h-[450px]" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
            <div className="absolute w-3 h-3 rounded-full bg-[#007AFF]/40 blur-[2px]" style={{ animation: "orbit 15s linear infinite" }} />
            <div className="absolute w-2 h-2 rounded-full bg-purple-400/30 blur-[1px]" style={{ animation: "orbit-reverse 20s linear infinite" }} />
            <div className="absolute w-2 h-2 rounded-full bg-[#007AFF]/20" style={{ animation: "orbit 25s linear infinite reverse" }} />
          </div>

          {/* Decorative rings */}
          <div className="absolute w-72 h-72 sm:w-[380px] sm:h-[380px] rounded-full border border-white/[0.03]" style={{ animation: "rotate-bg 40s linear infinite" }} />
          <div className="absolute w-56 h-56 sm:w-[300px] sm:h-[300px] rounded-full border border-dashed border-white/[0.04]" style={{ animation: "rotate-bg 30s linear infinite reverse" }} />

          {/* Main floating case */}
          <div className="relative" style={{ animation: "float 6s ease-in-out infinite", perspective: "1200px" }}>
            <div
              className="w-60 h-80 sm:w-[300px] sm:h-[420px] rounded-[2.5rem] overflow-hidden relative"
              style={{
                transform: "rotateY(-12deg) rotateX(5deg)",
                animation: "glow 4s ease-in-out infinite",
                boxShadow: "0 50px 100px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.05)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=600&q=80"
                alt="Premium iPhone Case"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#007AFF]/10 via-transparent to-purple-600/10" />

              {/* Price tag overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <div className="glass-premium rounded-2xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#007AFF]" />
                    <p className="text-[10px] text-[#007AFF] font-bold tracking-[0.2em] uppercase">Featured</p>
                  </div>
                  <p className="text-lg font-bold">MagSafe Pro Shield</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-white/60 font-semibold">₹1,499</p>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 font-semibold">25% OFF</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -right-6 top-12 sm:-right-10 glass-premium rounded-2xl px-4 py-3 shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#007AFF] to-[#5856D6] flex items-center justify-center">
                  <Star size={14} className="fill-white text-white" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40">Rated</p>
                  <p className="text-sm font-bold">4.9/5</p>
                </div>
              </div>
            </motion.div>

            {/* Floating badge left */}
            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -left-6 bottom-32 sm:-left-12 glass-premium rounded-2xl px-4 py-3 shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">🧲</span>
                <div>
                  <p className="text-[10px] text-white/40">MagSafe</p>
                  <p className="text-xs font-bold text-[#007AFF]">Ready</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent"
        />
        <p className="text-[10px] text-white/20 tracking-[0.3em] uppercase">Scroll</p>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
