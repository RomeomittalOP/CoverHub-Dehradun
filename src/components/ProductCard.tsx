"use client";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/lib/data";
import { useCart } from "@/lib/cart-context";

export default function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.08, duration: 0.6 }}
      className="group bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)] transition-all duration-400 cursor-pointer"
    >
      <Link href={`/product/${product.id}`}>
        <div className="relative overflow-hidden aspect-square">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-[1.08] transition-transform duration-700"
            sizes="(max-width:640px) 50vw, 25vw"
          />
          {product.tag && (
            <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-gradient-to-r from-[#007AFF] to-[#5856D6] text-white">
              {product.tag}
            </span>
          )}
          {product.originalPrice && (
            <span className="absolute top-3 right-3 px-2 py-1 rounded-full text-[10px] font-bold bg-red-500/90 text-white">
              {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
            </span>
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <button
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 cursor-pointer shadow-xl"
            >
              <ShoppingBag size={20} className="text-[#0A0A0A]" />
            </button>
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-sm sm:text-base mb-1 text-white/90 hover:text-white transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star
              key={s}
              size={12}
              className={s <= product.rating ? "fill-yellow-400 text-yellow-400" : "text-white/20"}
            />
          ))}
          <span className="text-xs text-white/30 ml-1">({product.reviews})</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="text-lg font-bold text-white">₹{product.price.toLocaleString()}</p>
            {product.originalPrice && (
              <p className="text-sm text-white/30 line-through">₹{product.originalPrice.toLocaleString()}</p>
            )}
          </div>
          <button
            onClick={() => addToCart(product)}
            className="text-xs text-[#007AFF] font-semibold hover:underline hidden sm:block cursor-pointer"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}
