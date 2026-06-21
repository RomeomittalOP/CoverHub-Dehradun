export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  tag?: string;
  collection: string;
  device: string[];
  description: string;
  features: string[];
  inStock: boolean;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  icon: string;
  productCount: number;
}

export const collections: Collection[] = [
  { id: "magsafe", name: "MagSafe Collection", description: "Precision-engineered magnetic alignment for seamless wireless charging", image: "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=600&q=80", icon: "🧲", productCount: 8 },
  { id: "transparent", name: "Transparent Collection", description: "Crystal clear protection that showcases your iPhone's design", image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80", icon: "💎", productCount: 6 },
  { id: "rugged", name: "Rugged Collection", description: "Military-grade drop protection without the bulk", image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80", icon: "🛡️", productCount: 7 },
  { id: "leather", name: "Leather Collection", description: "Handcrafted genuine leather that ages beautifully", image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80", icon: "✨", productCount: 5 },
];

export const devices = ["iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15", "iPhone 16"];

export const products: Product[] = [
  {
    id: "magsafe-pro-shield",
    name: "MagSafe Pro Shield",
    price: 1499,
    originalPrice: 1999,
    rating: 5,
    reviews: 342,
    image: "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=600&q=80",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80",
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80",
    ],
    tag: "Bestseller",
    collection: "magsafe",
    device: ["iPhone 14", "iPhone 15", "iPhone 16"],
    description: "The MagSafe Pro Shield features precision-engineered N52 magnets for perfect alignment with MagSafe chargers and accessories. Built with aerospace-grade polycarbonate and a microfiber interior lining.",
    features: ["N52 Neodymium Magnets", "Aerospace Polycarbonate", "Microfiber Lining", "1.5mm Raised Bezels", "Wireless Charging Compatible"],
    inStock: true,
  },
  {
    id: "crystal-clear-ultra",
    name: "Crystal Clear Ultra",
    price: 999,
    originalPrice: 1299,
    rating: 4,
    reviews: 218,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80",
      "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=600&q=80",
    ],
    tag: "New",
    collection: "transparent",
    device: ["iPhone 13", "iPhone 14", "iPhone 15", "iPhone 16"],
    description: "Ultra-clear case with anti-yellowing technology. Maintains crystal clarity for the lifetime of your case with our proprietary UV-resistant coating.",
    features: ["Anti-Yellow Technology", "UV-Resistant Coating", "Shock-Absorbing Corners", "Slim 1.2mm Profile", "Scratch-Resistant Surface"],
    inStock: true,
  },
  {
    id: "titanium-armor-case",
    name: "Titanium Armor Case",
    price: 1999,
    originalPrice: 2499,
    rating: 5,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80",
    ],
    tag: "Premium",
    collection: "rugged",
    device: ["iPhone 14", "iPhone 15", "iPhone 16"],
    description: "Inspired by the iPhone 15 Pro's titanium design. Features a real brushed titanium frame with military-grade MIL-STD-810G drop protection.",
    features: ["Brushed Titanium Frame", "MIL-STD-810G Certified", "10ft Drop Protection", "Raised Camera Guard", "Built-in Kickstand"],
    inStock: true,
  },
  {
    id: "leather-executive",
    name: "Leather Executive",
    price: 2499,
    originalPrice: 2999,
    rating: 5,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=600&q=80",
      "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=600&q=80",
    ],
    tag: "Luxury",
    collection: "leather",
    device: ["iPhone 15", "iPhone 16"],
    description: "Handcrafted from full-grain European leather that develops a unique patina over time. Each case is individually numbered for exclusivity.",
    features: ["Full-Grain European Leather", "Hand-Stitched Edges", "Individually Numbered", "MagSafe Compatible", "Develops Natural Patina"],
    inStock: true,
  },
  {
    id: "frosted-matte-black",
    name: "Frosted Matte Black",
    price: 1299,
    rating: 4,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&q=80",
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&q=80",
    ],
    collection: "transparent",
    device: ["iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15", "iPhone 16"],
    description: "Sleek frosted matte finish that resists fingerprints and feels premium in hand. The translucent back subtly reveals your iPhone's color.",
    features: ["Frosted Matte Finish", "Anti-Fingerprint Coating", "Translucent Design", "TPU Bumper Frame", "Precise Button Cutouts"],
    inStock: true,
  },
  {
    id: "carbon-fiber-elite",
    name: "Carbon Fiber Elite",
    price: 1799,
    originalPrice: 2199,
    rating: 5,
    reviews: 134,
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&q=80",
      "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?w=600&q=80",
    ],
    tag: "Trending",
    collection: "rugged",
    device: ["iPhone 14", "iPhone 15", "iPhone 16"],
    description: "Real aramid fiber construction — the same material used in body armor. Incredibly strong yet weighs only 12 grams.",
    features: ["Real Aramid Fiber", "12g Ultra-Light", "0.65mm Thin Profile", "Magnetic Charging Compatible", "Non-Slip Texture"],
    inStock: true,
  },
  {
    id: "silicone-soft-touch",
    name: "Silicone Soft Touch",
    price: 799,
    originalPrice: 999,
    rating: 4,
    reviews: 456,
    image: "https://images.unsplash.com/photo-1586953208270-767889db5a40?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1586953208270-767889db5a40?w=600&q=80",
      "https://images.unsplash.com/photo-1603891128711-11b4b03bb138?w=600&q=80",
    ],
    collection: "magsafe",
    device: ["iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15", "iPhone 16"],
    description: "Luxuriously soft liquid silicone that feels like velvet. The interior microfiber lining protects your iPhone from micro-scratches.",
    features: ["Liquid Silicone Exterior", "Microfiber Interior", "Silky Soft Touch", "6 Premium Colors", "Dust-Resistant Coating"],
    inStock: true,
  },
  {
    id: "gradient-aurora-case",
    name: "Gradient Aurora Case",
    price: 1599,
    originalPrice: 1899,
    rating: 5,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600&q=80",
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&q=80",
    ],
    tag: "Limited",
    collection: "transparent",
    device: ["iPhone 14", "iPhone 15", "iPhone 16"],
    description: "Mesmerizing color-shifting gradient that changes hue as the light moves. Limited edition design — only 500 units produced.",
    features: ["Color-Shifting Gradient", "Limited to 500 Units", "Tempered Glass Back", "Aluminum Bumper", "Certificate of Authenticity"],
    inStock: true,
  },
];

export const reviews = [
  { name: "Arjun Sharma", text: "Absolutely stunning quality. The MagSafe alignment is perfect. Feels like an Apple original product.", rating: 5, avatar: "AS", location: "Dehradun" },
  { name: "Priya Negi", text: "The leather case ages beautifully. Best phone case I've ever owned. Worth every rupee.", rating: 5, avatar: "PN", location: "Mussoorie" },
  { name: "Rohit Kapoor", text: "Dropped my phone twice already — zero damage. The rugged case is incredibly protective yet slim.", rating: 5, avatar: "RK", location: "Haridwar" },
  { name: "Sneha Rawat", text: "The transparent case still looks brand new after 6 months. No yellowing at all. Premium quality!", rating: 4, avatar: "SR", location: "Rishikesh" },
  { name: "Vikram Singh", text: "Ordered the carbon fiber case — it's impossibly thin yet feels indestructible. Amazing craftsmanship.", rating: 5, avatar: "VS", location: "Dehradun" },
];

export const features = [
  { icon: "💎", title: "Premium Materials", desc: "Aircraft-grade aluminum, genuine leather, and aerospace polymers" },
  { icon: "🚀", title: "Fast Delivery", desc: "Same-day delivery in Dehradun. Pan-India in 2-3 days" },
  { icon: "📐", title: "Perfect Fit", desc: "Precision-engineered to 0.1mm tolerance for every iPhone model" },
  { icon: "🧲", title: "MagSafe Compatible", desc: "Built-in N52 magnets for seamless MagSafe charging" },
];
