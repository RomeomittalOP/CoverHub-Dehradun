"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { collections, products } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import { useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";

function CollectionsContent() {
  const searchParams = useSearchParams();
  const filterParam = searchParams.get("filter");
  const [activeFilter, setActiveFilter] = useState(filterParam || "all");

  const filtered = activeFilter === "all" ? products : products.filter((p) => p.collection === activeFilter);

  return (
    <div className="pt-28 pb-24 px-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <p className="text-[#007AFF] text-sm font-semibold tracking-[0.2em] uppercase mb-4">Browse By Category</p>
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent mb-4">Collections</h1>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {collections.map((c, i) => (
          <motion.div key={c.id} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <button
              onClick={() => setActiveFilter(c.id === activeFilter ? "all" : c.id)}
              className={`w-full group relative rounded-3xl overflow-hidden block text-left cursor-pointer transition-all duration-400 ${
                activeFilter === c.id ? "ring-2 ring-[#007AFF]" : ""
              }`}
              style={{ aspectRatio: "4/3" }}
            >
              <Image src={c.image} alt={c.name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" sizes="(max-width:640px) 100vw, 25vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <span className="text-2xl mb-2 block">{c.icon}</span>
                <h3 className="text-lg font-bold">{c.name}</h3>
                <p className="text-xs text-white/50">{c.productCount} products</p>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-bold">
          {activeFilter === "all" ? "All Products" : collections.find((c) => c.id === activeFilter)?.name}
        </h2>
        <p className="text-sm text-white/40">{filtered.length} products</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {filtered.map((p, i) => (
          <ProductCard key={p.id} product={p} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={<div className="pt-32 text-center text-white/40">Loading...</div>}>
      <CollectionsContent />
    </Suspense>
  );
}
