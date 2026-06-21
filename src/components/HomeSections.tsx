"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, MessageCircle, ArrowRight, Shield, Truck, Ruler, Magnet, Quote } from "lucide-react";
import { collections, devices, products, reviews, features } from "@/lib/data";
import ProductCard from "./ProductCard";
import { TiltCard, ParallaxSection, MagneticButton, ParticleField } from "./3d-effects";

function SectionHeader({ label, title, subtitle }: { label?: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
      className="text-center mb-20"
    >
      {label && (
        <p className="text-[#007AFF] text-[11px] font-semibold tracking-[0.3em] uppercase mb-5">— {label} —</p>
      )}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] text-gradient-premium mb-5">{title}</h2>
      {subtitle && <p className="text-white/30 max-w-md mx-auto font-light text-lg leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
}

export function Collections() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative">
      <SectionHeader label="Curated For You" title="Featured Collections" subtitle="Discover our handcrafted range of premium cases" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {collections.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 60, rotateY: -15 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
            style={{ perspective: "1200px" }}
          >
            <TiltCard className="relative" intensity={10} scale={1.04}>
              <Link
                href={`/collections?filter=${c.id}`}
                className="group relative rounded-[2rem] overflow-hidden block transition-all duration-700 hover:shadow-[0_40px_100px_rgba(0,0,0,0.7)]"
                style={{ aspectRatio: "3/4" }}
              >
                <Image src={c.image} alt={c.name} fill className="object-cover group-hover:scale-110 transition-transform duration-[1.2s] ease-out" sizes="(max-width:640px) 100vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10 group-hover:via-black/40 transition-all duration-700" />

                {/* 3D floating badge */}
                <div className="absolute top-5 left-5" style={{ transform: "translateZ(40px)" }}>
                  <span className="glass-premium rounded-full px-3 py-1.5 text-[10px] font-bold tracking-wider uppercase text-white/70">
                    {c.productCount} Products
                  </span>
                </div>

                {/* Reflection sweep */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, repeatDelay: 8, ease: "easeInOut" }}
                  style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.05) 45%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.05) 55%, transparent 60%)" }}
                />

                <div className="absolute bottom-0 left-0 right-0 p-6" style={{ transform: "translateZ(30px)" }}>
                  <span className="text-4xl mb-3 block transform group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-500">{c.icon}</span>
                  <h3 className="text-xl font-bold mb-1.5 tracking-tight">{c.name}</h3>
                  <p className="text-sm text-white/40 mb-4 line-clamp-2">{c.description.split(".")[0]}</p>
                  <div className="flex items-center gap-2 text-[#007AFF] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                    Explore Collection <ArrowRight size={14} />
                  </div>
                </div>

                <div className="absolute inset-0 rounded-[2rem] border border-transparent group-hover:border-[#007AFF]/20 transition-colors duration-700 pointer-events-none" />
              </Link>
            </TiltCard>
          </motion.div>
        ))}
      </div>
      <div className="section-divider mt-32" />
    </section>
  );
}

export function DeviceSelector() {
  const [selected, setSelected] = useState(4);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#007AFF]/[0.03] rounded-full blur-[150px]" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader label="Find Your Perfect Fit" title="Choose Your iPhone" subtitle="Precision-engineered for every model" />
        <div className="flex flex-wrap justify-center gap-4 sm:gap-5" style={{ perspective: "1000px" }}>
          {devices.map((d, i) => (
            <motion.button
              key={d}
              initial={{ opacity: 0, scale: 0.7, rotateY: 30 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 150 }}
              onClick={() => setSelected(i)}
              whileHover={{ scale: 1.08, rotateY: 5, z: 30 }}
              whileTap={{ scale: 0.95 }}
              className={`relative px-8 sm:px-10 py-7 rounded-2xl transition-all duration-500 cursor-pointer text-center min-w-[130px] ${
                selected === i
                  ? "bg-gradient-to-r from-[#007AFF] to-[#5856D6] shadow-[0_20px_50px_rgba(0,122,255,0.3)]"
                  : "glass-card hover:!transform-none"
              }`}
            >
              <div className="text-3xl mb-3">{["📱", "📱", "📱", "📱", "✨"][i]}</div>
              <p className={`font-bold text-sm tracking-tight ${selected === i ? "text-white" : "text-white/50"}`}>{d}</p>
              {selected === i && (
                <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="mt-2">
                  <p className="text-[10px] text-white/80 font-medium">{products.filter((p) => p.device.includes(d)).length} cases</p>
                </motion.div>
              )}
              {selected === i && (
                <motion.div layoutId="device-indicator" className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-white/60" />
              )}
            </motion.button>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center mt-10">
          <Link href={`/shop?device=${encodeURIComponent(devices[selected])}`} className="text-[#007AFF] text-sm font-semibold hover:underline underline-offset-4 inline-flex items-center gap-2 group">
            View all {devices[selected]} cases <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
      <div className="section-divider mt-32 max-w-7xl mx-auto" />
    </section>
  );
}

export function TrendingProducts() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative">
      <SectionHeader label="Most Popular" title="Trending Cases" subtitle="Loved by thousands across India" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-14"
      >
        <MagneticButton>
          <Link href="/shop" className="btn-premium px-10 py-5 rounded-2xl font-semibold text-[13px] tracking-wider uppercase text-white inline-flex items-center gap-3">
            View All Products <ArrowRight size={16} />
          </Link>
        </MagneticButton>
      </motion.div>
      <div className="section-divider mt-32" />
    </section>
  );
}

export function WhyCoverHub() {
  const iconMap = [Shield, Truck, Ruler, Magnet];
  const colors = ["from-blue-500/20 to-blue-600/10", "from-green-500/20 to-green-600/10", "from-purple-500/20 to-purple-600/10", "from-orange-500/20 to-orange-600/10"];
  const glowColors = ["rgba(59,130,246,0.3)", "rgba(34,197,94,0.3)", "rgba(168,85,247,0.3)", "rgba(249,115,22,0.3)"];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative">
      <SectionHeader label="The CoverHub Difference" title="Why Choose Us?" subtitle="We obsess over every detail so you don't have to" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" style={{ perspective: "1200px" }}>
        {features.map((f, i) => {
          const Icon = iconMap[i];
          return (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 50, rotateX: 20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
            >
              <TiltCard className="glass-card gradient-border rounded-3xl p-8 text-center group cursor-default relative overflow-hidden h-full" intensity={15} scale={1.05}>
                {/* Ambient glow behind icon */}
                <div
                  className="absolute top-8 left-1/2 -translate-x-1/2 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 blur-[40px] transition-opacity duration-700"
                  style={{ background: glowColors[i] }}
                />

                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${colors[i]} flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_30px_${glowColors[i]}] transition-all duration-500 relative z-10`}
                  style={{ transformStyle: "preserve-3d", transform: "translateZ(20px)" }}
                >
                  <Icon size={28} className="text-[#007AFF]" />
                </div>
                <h3 className="text-lg font-bold mb-3 tracking-tight relative z-10">{f.title}</h3>
                <p className="text-sm text-white/30 leading-relaxed relative z-10">{f.desc}</p>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
      <div className="section-divider mt-32" />
    </section>
  );
}

export function Reviews() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent((c) => (c + 1) % reviews.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <ParticleField count={20} />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#007AFF]/[0.02] rounded-full blur-[120px]" />
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader label="Testimonials" title="Customer Love" />
        <div style={{ perspective: "1200px" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, rotateX: 15, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
              exit={{ opacity: 0, rotateX: -10, y: -30, scale: 0.95 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
            >
              <TiltCard className="glass-card rounded-[2rem] p-10 sm:p-14 text-center relative overflow-hidden" intensity={5} scale={1.01}>
                <Quote size={80} className="absolute top-6 left-8 text-white/[0.03] rotate-180" />
                <div className="relative z-10">
                  <div className="flex justify-center gap-1.5 mb-8">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <motion.div
                        key={s}
                        initial={{ opacity: 0, scale: 0, rotateZ: -30 }}
                        animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                        transition={{ delay: s * 0.08, type: "spring" }}
                      >
                        <Star size={18} className={`${s <= reviews[current].rating ? "fill-yellow-400 text-yellow-400" : "text-white/10"} drop-shadow-[0_0_3px_rgba(250,204,21,0.3)]`} />
                      </motion.div>
                    ))}
                  </div>
                  <p className="text-xl sm:text-2xl text-white/70 leading-relaxed mb-10 font-light max-w-2xl mx-auto">
                    &ldquo;{reviews[current].text}&rdquo;
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <motion.div
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="w-14 h-14 rounded-full flex items-center justify-center font-bold text-sm relative"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#007AFF] to-[#5856D6] shadow-[0_0_20px_rgba(0,122,255,0.3)]" />
                      <span className="relative z-10">{reviews[current].avatar}</span>
                    </motion.div>
                    <div className="text-left">
                      <p className="font-semibold text-lg">{reviews[current].name}</p>
                      <p className="text-xs text-white/30 tracking-wide">{reviews[current].location} · Verified Buyer ✓</p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-center items-center gap-5 mt-10">
          <MagneticButton>
            <button onClick={() => setCurrent((c) => (c - 1 + reviews.length) % reviews.length)} className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group hover:!transform-none">
              <ChevronLeft size={20} className="group-hover:text-[#007AFF] transition-colors" />
            </button>
          </MagneticButton>
          <div className="flex gap-2.5">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-500 cursor-pointer ${
                  i === current ? "w-10 h-2.5 bg-gradient-to-r from-[#007AFF] to-[#5856D6] shadow-[0_0_10px_rgba(0,122,255,0.3)]" : "w-2.5 h-2.5 bg-white/10 hover:bg-white/20"
                }`}
              />
            ))}
          </div>
          <MagneticButton>
            <button onClick={() => setCurrent((c) => (c + 1) % reviews.length)} className="w-12 h-12 rounded-full glass-card flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer group hover:!transform-none">
              <ChevronRight size={20} className="group-hover:text-[#007AFF] transition-colors" />
            </button>
          </MagneticButton>
        </div>
      </div>
      <div className="section-divider mt-32 max-w-7xl mx-auto" />
    </section>
  );
}

export function WhatsAppBanner() {
  return (
    <section className="py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{ perspective: "1200px" }}
      >
        <TiltCard
          className="max-w-4xl mx-auto rounded-[2rem] p-10 sm:p-14 text-center relative overflow-hidden"
          intensity={6}
          scale={1.01}
          glare={false}
        >
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #064E3B 0%, #065F46 30%, #059669 70%, #10B981 100%)" }} />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.05] rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/20 rounded-full blur-[60px]" />
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "24px 24px" }} />

          {/* 3D floating shapes */}
          <motion.div
            animate={{ y: [-10, 10, -10], rotateZ: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-16 h-16 rounded-xl bg-white/[0.05] backdrop-blur-sm border border-white/10"
            style={{ transform: "rotateX(40deg) rotateZ(15deg)" }}
          />
          <motion.div
            animate={{ y: [10, -10, 10], rotateZ: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="absolute bottom-10 left-10 w-12 h-12 rounded-full bg-white/[0.04] backdrop-blur-sm border border-white/[0.08]"
          />

          <div className="relative z-10">
            <motion.div
              animate={{ scale: [1, 1.08, 1], rotateY: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur mb-8 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
              style={{ transformStyle: "preserve-3d" }}
            >
              <MessageCircle size={36} />
            </motion.div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">Need Help Choosing?</h2>
            <p className="text-white/70 mb-10 max-w-md mx-auto text-lg font-light">Our experts will help you find the perfect case for your iPhone</p>
            <MagneticButton>
              <a
                href="https://wa.me/917906220413"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-white text-emerald-800 px-10 py-5 rounded-2xl font-bold text-[15px] hover:shadow-[0_15px_40px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all duration-400"
              >
                <MessageCircle size={22} />
                Chat On WhatsApp
              </a>
            </MagneticButton>
          </div>
        </TiltCard>
      </motion.div>
    </section>
  );
}
