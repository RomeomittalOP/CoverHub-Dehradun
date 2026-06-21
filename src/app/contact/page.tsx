"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 px-6 max-w-5xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <p className="text-white/60 text-sm font-semibold tracking-[0.2em] uppercase mb-4">Get In Touch</p>
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent mb-4">Contact Us</h1>
        <p className="text-white/40 font-light max-w-lg mx-auto">Have a question? We&apos;d love to hear from you.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="space-y-6">
          {[
            { icon: MapPin, label: "Visit Us", value: "Saharanpur Chowk, Dehradun, Uttarakhand" },
            { icon: Phone, label: "Call Us", value: "7906220413", href: "tel:7906220413" },
            { icon: Mail, label: "Email Us", value: "av1021854@gmail.com", href: "mailto:av1021854@gmail.com" },
            { icon: Clock, label: "Working Hours", value: "Mon - Sat: 10AM - 8PM" },
          ].map((item) => (
            <div key={item.label} className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                <item.icon size={20} className="text-white/60" />
              </div>
              <div>
                <p className="text-sm text-white/40 mb-1">{item.label}</p>
                {item.href ? (
                  <a href={item.href} className="font-semibold hover:text-white/60 transition-colors">{item.value}</a>
                ) : (
                  <p className="font-semibold">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
          className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8">
          <h2 className="text-xl font-bold mb-6">Send a Message</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
              window.open(`https://wa.me/917906220413?text=${encodeURIComponent(`Hi, I'm ${name}. ${message}`)}`, "_blank");
            }}
            className="space-y-4"
          >
            <input name="name" type="text" placeholder="Your Name" required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ffffff]/50 placeholder:text-white/30" />
            <input name="phone" type="tel" placeholder="Phone Number" required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ffffff]/50 placeholder:text-white/30" />
            <input name="email" type="email" placeholder="Email Address"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ffffff]/50 placeholder:text-white/30" />
            <textarea name="message" placeholder="Your Message" rows={4} required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#ffffff]/50 placeholder:text-white/30 resize-none" />
            <button type="submit"
              className="w-full bg-gradient-to-r from-white to-white/70 py-4 rounded-2xl font-semibold text-sm flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(255,255,255,0.15)] transition-all duration-300 cursor-pointer">
              <MessageCircle size={18} /> Send via WhatsApp
            </button>
          </form>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="rounded-3xl overflow-hidden h-80 bg-white/5 border border-white/[0.06]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.7!2d78.0322!3d30.3165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDehradun!5e0!3m2!1sen!2sin!4v1600000000000"
          width="100%"
          height="100%"
          style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="CoverHub Dehradun Location"
        />
      </motion.div>
    </div>
  );
}
