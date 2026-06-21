"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, MessageCircle } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export default function CartPage() {
  const { items, updateQuantity, removeFromCart, clearCart, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="pt-32 pb-24 text-center px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <ShoppingBag size={64} className="mx-auto text-white/20 mb-6" />
          <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-white/40 mb-8">Looks like you haven&apos;t added any cases yet</p>
          <Link
            href="/shop"
            className="bg-gradient-to-r from-white to-white/70 px-8 py-4 rounded-2xl font-semibold text-sm text-white hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-300 inline-block"
          >
            Start Shopping
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24 px-6 max-w-5xl mx-auto">
      <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors mb-8">
        <ArrowLeft size={16} /> Continue Shopping
      </Link>

      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl sm:text-4xl font-bold mb-2">
        Shopping Cart
      </motion.h1>
      <p className="text-white/40 mb-10">{totalItems} item{totalItems !== 1 ? "s" : ""}</p>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item, i) => (
            <motion.div
              key={item.product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-4 sm:p-6 flex gap-4 sm:gap-6"
            >
              <Link href={`/product/${item.product.id}`} className="shrink-0">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-xl overflow-hidden">
                  <Image src={item.product.image} alt={item.product.name} fill className="object-cover" sizes="128px" />
                </div>
              </Link>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <Link href={`/product/${item.product.id}`} className="font-semibold hover:text-white/60 transition-colors">
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-white/40 mt-1 capitalize">{item.product.collection} Collection</p>
                  </div>
                  <button onClick={() => removeFromCart(item.product.id)} className="text-white/30 hover:text-red-400 transition-colors cursor-pointer p-1">
                    <Trash2 size={16} />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-lg">
                    <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-2 hover:bg-white/5 transition-colors cursor-pointer rounded-l-lg">
                      <Minus size={14} />
                    </button>
                    <span className="px-3 text-sm font-semibold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-2 hover:bg-white/5 transition-colors cursor-pointer rounded-r-lg">
                      <Plus size={14} />
                    </button>
                  </div>
                  <p className="font-bold text-lg">₹{(item.product.price * item.quantity).toLocaleString()}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <button onClick={clearCart} className="text-sm text-white/30 hover:text-red-400 transition-colors cursor-pointer">
            Clear Cart
          </button>
        </div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 sticky top-28">
            <h2 className="text-lg font-bold mb-6">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm text-white/60">
                <span>Subtotal</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm text-white/60">
                <span>Shipping</span>
                <span className="text-green-400">Free</span>
              </div>
              <div className="border-t border-white/10 pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <a
              href={`https://wa.me/917906220413?text=${encodeURIComponent(
                `Hi CoverHub! I'd like to order:\n\n${items.map((i) => `• ${i.product.name} x${i.quantity} — ₹${(i.product.price * i.quantity).toLocaleString()}`).join("\n")}\n\nTotal: ₹${totalPrice.toLocaleString()}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 text-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl mb-3"
              style={{ background: "linear-gradient(135deg, #075E54, #25D366)" }}
            >
              <MessageCircle size={18} /> Order via WhatsApp
            </a>
            <p className="text-xs text-white/30 text-center">Complete your order on WhatsApp for fastest processing</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
