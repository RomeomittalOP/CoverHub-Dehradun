"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star, Zap } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { ParticleField, MagneticButton } from "./3d-effects";

function HeroPhone() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 150, damping: 20 });
  const glareX = useSpring(useTransform(mouseX, [-0.5, 0.5], [20, 80]), { stiffness: 150, damping: 20 });
  const glareY = useSpring(useTransform(mouseY, [-0.5, 0.5], [20, 80]), { stiffness: 150, damping: 20 });

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      initial={{ opacity: 0, scale: 0.7, rotateY: 30 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{ delay: 0.4, duration: 1.4, ease: [0.25, 0.1, 0, 1] }}
      className="relative flex items-center justify-center lg:ml-10 cursor-grab active:cursor-grabbing"
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
      {/* 3D orbiting rings */}
      <div className="absolute w-[380px] h-[380px] sm:w-[480px] sm:h-[480px]" style={{ transformStyle: "preserve-3d", transform: "rotateX(75deg)", left: "50%", top: "50%", marginLeft: "-190px", marginTop: "-190px" }}>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-white/[0.08]"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8 rounded-full border border-dashed border-white/[0.06]"
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.6)]" />
        </motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-8"
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 rounded-full bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
        </motion.div>
      </div>

      {/* Main 3D phone */}
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 h-8 bg-white/5 rounded-full blur-2xl" />

        <div
          className="w-60 h-80 sm:w-[300px] sm:h-[420px] rounded-[2.5rem] overflow-hidden relative"
          style={{
            transformStyle: "preserve-3d",
            boxShadow: "0 50px 100px rgba(0,0,0,0.8), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.1)",
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
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] via-transparent to-white/[0.03]" />

          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: useTransform(
                [glareX, glareY],
                ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.15) 0%, transparent 50%)`
              ),
            }}
          />

          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 45%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.08) 55%, transparent 60%)" }}
          />

          <div className="absolute bottom-0 left-0 right-0 p-6" style={{ transform: "translateZ(30px)" }}>
            <div className="glass-premium rounded-2xl p-4 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <p className="text-[10px] text-white/70 font-bold tracking-[0.2em] uppercase">Featured</p>
              </div>
              <p className="text-lg font-bold">MagSafe Pro Shield</p>
              <div className="flex items-center justify-between mt-1">
                <p className="text-white/60 font-semibold">₹1,499</p>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-white/70 font-semibold">25% OFF</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating 3D badge — right side */}
        <motion.div
          animate={{ y: [-8, 8, -8], rotateZ: [-2, 2, -2] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -right-8 top-10 sm:-right-14 glass-premium rounded-2xl px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          style={{ transform: "translateZ(60px)", transformStyle: "preserve-3d" }}
        >
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <Star size={14} className="fill-black text-black" />
            </div>
            <div>
              <p className="text-[9px] text-white/30 uppercase tracking-wider">Rated</p>
              <p className="text-sm font-black">4.9/5</p>
            </div>
          </div>
        </motion.div>

        {/* Floating 3D badge — left side */}
        <motion.div
          animate={{ y: [8, -8, 8], rotateZ: [2, -2, 2] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute -left-8 bottom-28 sm:-left-16 glass-premium rounded-2xl px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          style={{ transform: "translateZ(50px)" }}
        >
          <div className="flex items-center gap-2.5">
            <span className="text-xl">🧲</span>
            <div>
              <p className="text-[9px] text-white/30 uppercase tracking-wider">MagSafe</p>
              <p className="text-xs font-bold text-white">Compatible</p>
            </div>
          </div>
        </motion.div>

        {/* Floating 3D badge — top */}
        <motion.div
          animate={{ y: [-5, 10, -5], x: [5, -5, 5] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute -right-4 -top-8 sm:-right-8 sm:-top-10 glass-premium rounded-xl px-3 py-2 shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
          style={{ transform: "translateZ(70px)" }}
        >
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <p className="text-[10px] font-semibold text-white/70">In Stock</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-overlay">
      <ParticleField count={50} />

      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[700px]" style={{ background: "radial-gradient(ellipse, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 40%, transparent 70%)" }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/[0.015] rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-white/[0.01] rounded-full blur-[100px]" />
      </div>

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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white/60 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
            </span>
            Now available for iPhone 16 Series
            <Zap size={12} className="text-white/50 group-hover:text-white transition-colors" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl sm:text-6xl lg:text-[5.5rem] font-black leading-[0.95] tracking-[-0.03em] mb-8"
            style={{ transformStyle: "preserve-3d" }}
          >
            <span className="text-white block" style={{ textShadow: "0 0 80px rgba(255,255,255,0.1)" }}>Premium</span>
            <span className="text-white block">iPhone Cases</span>
            <span className="block mt-2 text-white/60">Designed To</span>
            <motion.span
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="block text-6xl sm:text-7xl lg:text-[6rem]"
              style={{
                background: "linear-gradient(90deg, #ffffff, #666666, #ffffff, #666666, #ffffff)",
                backgroundSize: "300% 300%",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 30px rgba(255,255,255,0.15))",
              }}
            >
              Stand Out
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl sm:text-2xl text-white/30 mb-12 max-w-lg font-extralight tracking-[0.15em] uppercase"
          >
            Luxury&ensp;·&ensp;Protection&ensp;·&ensp;Style
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-5"
          >
            <MagneticButton>
              <Link
                href="/shop"
                className="btn-premium px-10 py-5 rounded-2xl font-semibold text-[13px] tracking-wider uppercase inline-flex items-center gap-3"
              >
                Shop Now <ArrowRight size={16} />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="/collections"
                className="relative px-10 py-5 rounded-2xl font-semibold text-[13px] tracking-wider uppercase text-white/70 hover:text-white transition-all duration-500 group overflow-hidden block"
              >
                <span className="absolute inset-0 rounded-2xl border border-white/15 group-hover:border-white/30 transition-colors duration-500" />
                <span className="absolute inset-0 rounded-2xl bg-white/0 group-hover:bg-white/[0.04] transition-colors duration-500" />
                <span className="relative">Explore Collections</span>
              </Link>
            </MagneticButton>
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
                  initial={{ opacity: 0, scale: 0, rotateZ: -30 }}
                  animate={{ opacity: 1, scale: 1, rotateZ: 0 }}
                  transition={{ delay: 1.4 + i * 0.1, type: "spring" }}
                  className="w-10 h-10 rounded-full border-2 border-[#050505] flex items-center justify-center text-[10px] font-bold text-white/80 shadow-lg"
                  style={{ background: `linear-gradient(135deg, hsl(${i * 15}, 0%, ${30 + i * 8}%), hsl(${i * 15}, 0%, ${18 + i * 5}%))` }}
                >
                  {a}
                </motion.div>
              ))}
            </div>
            <div>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="fill-white text-white drop-shadow-[0_0_3px_rgba(255,255,255,0.3)]" />
                ))}
              </div>
              <p className="text-xs text-white/30 mt-1.5 tracking-wide">
                <span className="text-white/60 font-semibold">2,500+</span> happy customers
              </p>
            </div>
          </motion.div>
        </motion.div>

        <HeroPhone />
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent"
        />
        <p className="text-[10px] text-white/20 tracking-[0.3em] uppercase">Scroll</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 section-divider" />
    </section>
  );
}
