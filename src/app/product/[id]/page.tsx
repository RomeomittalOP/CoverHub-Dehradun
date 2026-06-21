"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ShoppingBag, Truck, Shield, ArrowLeft, Check, Minus, Plus } from "lucide-react";
import { products } from "@/lib/data";
import { useCart } from "@/lib/cart-context";
import ProductCard from "@/components/ProductCard";

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Product not found</h1>
        <Link href="/shop" className="text-white/60 hover:underline">← Back to shop</Link>
      </div>
    );
  }

  const related = products.filter((p) => p.collection === product.collection && p.id !== product.id).slice(0, 4);

  const handleAdd = () => {
    for (let i = 0; i < quantity; i++) addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="pt-28 pb-24 px-6 max-w-7xl mx-auto">
      <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8">
        <ArrowLeft size={16} /> Back to shop
      </Link>

      <div className="grid lg:grid-cols-2 gap-12 mb-24">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}>
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white/5 mb-4">
            <Image
              src={product.images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            {product.tag && (
              <span className="absolute top-4 left-4 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-white to-white/70 text-white">
                {product.tag}
              </span>
            )}
          </div>
          <div className="flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={`relative w-20 h-20 rounded-xl overflow-hidden cursor-pointer transition-all ${
                  selectedImage === i ? "ring-2 ring-[#ffffff]" : "opacity-50 hover:opacity-80"
                }`}
              >
                <Image src={img} alt="" fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
          <p className="text-white/60 text-sm font-semibold tracking-wider uppercase mb-2">
            {product.collection.charAt(0).toUpperCase() + product.collection.slice(1)} Collection
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">{product.name}</h1>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={16} className={s <= product.rating ? "fill-yellow-400 text-yellow-400" : "text-white/20"} />
              ))}
            </div>
            <span className="text-sm text-white/40">{product.reviews} reviews</span>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <span className="text-3xl font-bold">₹{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <>
                <span className="text-lg text-white/30 line-through">₹{product.originalPrice.toLocaleString()}</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-green-500/20 text-green-400">
                  Save ₹{(product.originalPrice - product.price).toLocaleString()}
                </span>
              </>
            )}
          </div>

          <p className="text-white/50 leading-relaxed mb-8">{product.description}</p>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-white/70">
                  <Check size={14} className="text-white/60 shrink-0" /> {f}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-3">Compatible With</h3>
            <div className="flex flex-wrap gap-2">
              {product.device.map((d) => (
                <span key={d} className="px-3 py-1.5 rounded-full text-xs bg-white/5 border border-white/10 text-white/60">
                  {d}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex items-center bg-white/5 border border-white/10 rounded-xl">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-white/5 transition-colors cursor-pointer rounded-l-xl">
                <Minus size={16} />
              </button>
              <span className="px-4 text-sm font-semibold">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-white/5 transition-colors cursor-pointer rounded-r-xl">
                <Plus size={16} />
              </button>
            </div>
            <button
              onClick={handleAdd}
              className={`flex-1 py-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                added
                  ? "bg-green-500 text-white"
                  : "bg-gradient-to-r from-white to-white/70 text-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
              }`}
            >
              {added ? <><Check size={18} /> Added to Cart</> : <><ShoppingBag size={18} /> Add to Cart — ₹{(product.price * quantity).toLocaleString()}</>}
            </button>
          </div>

          <div className="flex gap-6 text-sm text-white/40">
            <div className="flex items-center gap-2"><Truck size={16} className="text-white/60" /> Free delivery in Dehradun</div>
            <div className="flex items-center gap-2"><Shield size={16} className="text-white/60" /> 30-day warranty</div>
          </div>
        </motion.div>
      </div>

      {related.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
