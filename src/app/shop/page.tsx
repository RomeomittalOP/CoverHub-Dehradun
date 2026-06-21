"use client";
import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { SlidersHorizontal } from "lucide-react";
import { products, collections, devices } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  const [selectedCollection, setSelectedCollection] = useState("all");
  const [selectedDevice, setSelectedDevice] = useState("all");
  const [sortBy, setSortBy] = useState("featured");

  const filtered = useMemo(() => {
    let result = [...products];
    if (selectedCollection !== "all") result = result.filter((p) => p.collection === selectedCollection);
    if (selectedDevice !== "all") result = result.filter((p) => p.device.includes(selectedDevice));
    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [selectedCollection, selectedDevice, sortBy]);

  return (
    <div className="pt-28 pb-24 px-6 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
        <p className="text-white/60 text-sm font-semibold tracking-[0.2em] uppercase mb-4">Our Collection</p>
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent mb-4">Shop All Cases</h1>
        <p className="text-white/40 font-light">{filtered.length} products</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div className="flex flex-wrap gap-3">
          <div className="flex items-center gap-2 text-sm text-white/40">
            <SlidersHorizontal size={16} /> Filters:
          </div>
          <select
            value={selectedCollection}
            onChange={(e) => setSelectedCollection(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white/80 cursor-pointer focus:outline-none focus:border-[#ffffff]/50"
          >
            <option value="all">All Collections</option>
            {collections.map((c) => (
              <option key={c.id} value={c.id}>{c.name}</option>
            ))}
          </select>
          <select
            value={selectedDevice}
            onChange={(e) => setSelectedDevice(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white/80 cursor-pointer focus:outline-none focus:border-[#ffffff]/50"
          >
            <option value="all">All Devices</option>
            {devices.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm text-white/80 cursor-pointer focus:outline-none focus:border-[#ffffff]/50"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
        </select>
      </motion.div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-white/40">
          <p className="text-lg mb-2">No products found</p>
          <p className="text-sm">Try adjusting your filters</p>
        </div>
      )}
    </div>
  );
}
