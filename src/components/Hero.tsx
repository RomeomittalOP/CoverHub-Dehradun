"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_50%_0%,rgba(0,122,255,0.15)_0%,transparent_60%)]">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#007AFF]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div initial={{ opacity: 0, x: -60 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/[0.08] text-xs text-white/60 mb-8"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Now available for iPhone 16 Series
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
          >
            <span className="bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
              Premium iPhone Cases
            </span>
            <br />
            <span className="text-white">Designed To</span>
            <br />
            <span className="text-[#007AFF]">Stand Out</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-lg sm:text-xl text-white/50 mb-10 max-w-lg font-light tracking-wide"
          >
            Luxury. Protection. Style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/shop"
              className="bg-gradient-to-r from-[#007AFF] to-[#5856D6] px-8 py-4 rounded-2xl font-semibold text-sm tracking-wide inline-flex items-center gap-2 text-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,122,255,0.3)] transition-all duration-300"
            >
              Shop Now <ArrowRight size={16} />
            </Link>
            <Link
              href="/collections"
              className="border border-white/20 px-8 py-4 rounded-2xl font-semibold text-sm tracking-wide text-white/80 hover:bg-white/10 hover:border-white/40 transition-all duration-300"
            >
              Explore Collections
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex items-center gap-6 mt-12"
          >
            <div className="flex -space-x-3">
              {["AK", "RS", "PM", "NJ"].map((a) => (
                <div
                  key={a}
                  className="w-10 h-10 rounded-full bg-[#3A3A3A] border-2 border-[#0A0A0A] flex items-center justify-center text-xs font-bold text-white/60"
                >
                  {a}
                </div>
              ))}
            </div>
            <div>
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-white/40 mt-1">2,500+ happy customers</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-white/5 animate-[spin_30s_linear_infinite]" />
          <div className="absolute w-56 h-56 sm:w-80 sm:h-80 rounded-full border border-white/5 animate-[spin_20s_linear_infinite_reverse]" />
          <div className="relative animate-[float_6s_ease-in-out_infinite]" style={{ perspective: "1000px" }}>
            <div
              className="w-56 h-72 sm:w-72 sm:h-96 rounded-[2.5rem] overflow-hidden relative animate-[glow_4s_ease-in-out_infinite]"
              style={{
                transform: "rotateY(-15deg) rotateX(5deg)",
                boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=600&q=80"
                alt="Premium iPhone Case"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs text-[#007AFF] font-semibold tracking-widest">FEATURED</p>
                <p className="text-lg font-bold mt-1">MagSafe Pro Shield</p>
                <p className="text-sm text-white/50">₹1,499</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-white/40 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
