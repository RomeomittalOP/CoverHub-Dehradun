"use client";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Star, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import { TiltCard } from "./3d-effects";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotateX: 15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.7, ease: [0.25, 0.1, 0, 1] }}
      style={{ perspective: "1200px" }}
    >
      <TiltCard
        className="product-card-premium group glass-card gradient-border rounded-[1.5rem] overflow-hidden cursor-pointer relative"
        intensity={12}
        scale={1.03}
      >
        <Link href={`/product/${product.id}`}>
          <div className="relative overflow-hidden aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-[1.08] transition-transform duration-[1.2s] ease-out"
              sizes="(max-width:640px) 50vw, 25vw"
            />
            {/* 3D depth layers */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Reflection sweep */}
            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ x: ["-100%", "200%"] }}
              transition={{ duration: 3, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
              style={{ background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.06) 45%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.06) 55%, transparent 60%)" }}
            />

            {product.tag && (
              <span className="absolute top-3 left-3 px-3 py-1.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white text-black shadow-[0_4px_15px_rgba(255,255,255,0.2)]">
                {product.tag}
              </span>
            )}
            {product.originalPrice && (
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold bg-red-500/90 text-white backdrop-blur-sm">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
              </span>
            )}

            <div className="absolute bottom-4 left-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
              <button
                onClick={(e) => { e.preventDefault(); addToCart(product); }}
                className="flex-1 h-11 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center gap-2 hover:bg-white transition-colors cursor-pointer text-[#0A0A0A] text-xs font-semibold"
              >
                <ShoppingBag size={14} /> Add to Cart
              </button>
              <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                <Eye size={14} />
              </div>
            </div>
          </div>
        </Link>
        <div className="p-4 sm:p-5">
          <Link href={`/product/${product.id}`}>
            <h3 className="font-semibold text-sm sm:text-[15px] mb-2 text-white/90 hover:text-white transition-colors tracking-tight">{product.name}</h3>
          </Link>
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={11} className={s <= product.rating ? "fill-yellow-400 text-yellow-400" : "text-white/10"} />
              ))}
            </div>
            <span className="text-[10px] text-white/25">({product.reviews})</span>
          </div>
          <div className="flex items-baseline gap-2">
            <p className="text-lg sm:text-xl font-bold text-white">₹{product.price.toLocaleString()}</p>
            {product.originalPrice && (
              <p className="text-xs text-white/20 line-through">₹{product.originalPrice.toLocaleString()}</p>
            )}
          </div>
        </div>
      </TiltCard>
    </motion.div>
  );
}
