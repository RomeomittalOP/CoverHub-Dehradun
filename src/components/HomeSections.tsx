"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, MessageCircle } from "lucide-react";
import { collections, devices, products, reviews, features } from "@/lib/data";
import ProductCard from "./ProductCard";

function SectionHeader({ label, title, subtitle }: { label?: string; title: string; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      {label && <p className="text-[#007AFF] text-sm font-semibold tracking-[0.2em] uppercase mb-4">{label}</p>}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent mb-4">{title}</h2>
      {subtitle && <p className="text-white/40 max-w-lg mx-auto font-light">{subtitle}</p>}
    </motion.div>
  );
}

export function Collections() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader label="Curated For You" title="Featured Collections" subtitle="Discover our handcrafted range of premium iPhone cases" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {collections.map((c, i) => (
          <motion.div
            key={c.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <Link
              href={`/collections?filter=${c.id}`}
              className="group relative rounded-3xl overflow-hidden block hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-400"
              style={{ aspectRatio: "3/4" }}
            >
              <Image src={c.image} alt={c.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width:640px) 100vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-3xl mb-3 block">{c.icon}</span>
                <h3 className="text-xl font-bold mb-1">{c.name}</h3>
                <p className="text-sm text-white/50 mb-4">{c.description.split(".")[0]}</p>
                <span className="inline-flex items-center gap-2 text-[#007AFF] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore →
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export function DeviceSelector() {
  const [selected, setSelected] = useState(4);
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#007AFF]/[0.03] to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader label="Find Your Perfect Fit" title="Choose Your iPhone" subtitle="Select your model and discover cases made specifically for it" />
        <div className="flex flex-wrap justify-center gap-4">
          {devices.map((d, i) => (
            <motion.button
              key={d}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelected(i)}
              className={`px-8 py-6 rounded-2xl transition-all duration-300 cursor-pointer text-center ${
                selected === i
                  ? "bg-gradient-to-r from-[#007AFF] to-[#5856D6] shadow-lg shadow-[#007AFF]/20"
                  : "bg-white/5 backdrop-blur border border-white/[0.08] hover:bg-white/10"
              }`}
            >
              <div className="text-3xl mb-2">📱</div>
              <p className={`font-semibold text-sm ${selected === i ? "text-white" : "text-white/60"}`}>{d}</p>
              {selected === i && <p className="text-xs text-white/70 mt-1">{products.filter((p) => p.device.includes(d)).length} cases available</p>}
            </motion.button>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href={`/shop?device=${encodeURIComponent(devices[selected])}`} className="text-[#007AFF] text-sm font-semibold hover:underline">
            View all {devices[selected]} cases →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function TrendingProducts() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader label="Most Popular" title="Trending Cases" subtitle="Our bestselling cases, loved by thousands" />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {products.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/shop" className="bg-gradient-to-r from-[#007AFF] to-[#5856D6] px-8 py-4 rounded-2xl font-semibold text-sm text-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(0,122,255,0.3)] transition-all duration-300 inline-block">
          View All Products
        </Link>
      </div>
    </section>
  );
}

export function WhyCoverHub() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeader label="The CoverHub Difference" title="Why CoverHub?" subtitle="We obsess over every detail so you don't have to" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="bg-white/[0.03] backdrop-blur border border-white/[0.06] rounded-3xl p-8 text-center hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-400 group"
          >
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
            <h3 className="text-lg font-bold mb-2">{f.title}</h3>
            <p className="text-sm text-white/40 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
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
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#007AFF]/[0.03] to-transparent" />
      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader label="Testimonials" title="What Our Customers Say" />
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-gradient-to-br from-white/[0.05] to-white/[0.02] rounded-3xl p-8 sm:p-12 text-center border border-white/5"
        >
          <div className="flex justify-center gap-1 mb-6">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={16} className={s <= reviews[current].rating ? "fill-yellow-400 text-yellow-400" : "text-white/20"} />
            ))}
          </div>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed mb-8 font-light italic">
            &ldquo;{reviews[current].text}&rdquo;
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#007AFF] to-[#5856D6] flex items-center justify-center font-bold text-sm">
              {reviews[current].avatar}
            </div>
            <div className="text-left">
              <p className="font-semibold">{reviews[current].name}</p>
              <p className="text-xs text-white/40">{reviews[current].location} · Verified Buyer</p>
            </div>
          </div>
        </motion.div>
        <div className="flex justify-center items-center gap-4 mt-8">
          <button onClick={() => setCurrent((c) => (c - 1 + reviews.length) % reviews.length)} className="w-10 h-10 rounded-full bg-white/5 border border-white/[0.08] flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${i === current ? "w-8 bg-[#007AFF]" : "w-2 bg-white/20"}`} />
            ))}
          </div>
          <button onClick={() => setCurrent((c) => (c + 1) % reviews.length)} className="w-10 h-10 rounded-full bg-white/5 border border-white/[0.08] flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}

export function WhatsAppBanner() {
  return (
    <section className="py-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #075E54 0%, #128C7E 50%, #25D366 100%)" }}
      >
        <div className="relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
            <MessageCircle size={32} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Need Help Choosing The Perfect Case?</h2>
          <p className="text-white/70 mb-8 max-w-md mx-auto">Our experts are just a message away. Get personalized recommendations instantly.</p>
          <a
            href="https://wa.me/917906220413"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-[#075E54] px-8 py-4 rounded-2xl font-bold hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <MessageCircle size={20} />
            Chat On WhatsApp
          </a>
        </div>
      </motion.div>
    </section>
  );
}
