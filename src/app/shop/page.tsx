"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ShoppingBag,
  Star,
  Heart,
  Search,
  ChevronRight,
  Package,
  Truck,
  Shield,
  Brain,
  Sparkles,
  Gift,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const categories = [
  { id: "all", name: "All Products", icon: ShoppingBag },
  { id: "hair-care", name: "Kids Hair Care", icon: Sparkles },
  { id: "sensory", name: "Sensory Tools", icon: Brain },
  { id: "accessories", name: "Fun Accessories", icon: Star },
  { id: "gifts", name: "Gift Sets", icon: Gift },
];

const products = [
  // Kids Hair Care
  {
    id: "1",
    name: "Tear-Free Kids Shampoo",
    description:
      "Gentle, sulfate-free formula that won't sting eyes. Smells like strawberries!",
    price: 12.99,
    category: "hair-care",
    image:
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 124,
    badge: "Best Seller",
    inStock: true,
  },
  {
    id: "2",
    name: "Detangling Spray",
    description:
      "Makes brushing pain-free! Works on all hair types, even the thickest curls.",
    price: 9.99,
    category: "hair-care",
    image:
      "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 89,
    badge: "Popular",
    inStock: true,
  },
  {
    id: "3",
    name: "Kids Styling Gel",
    description:
      "Light hold gel perfect for mohawks, spikes, and fun styles. Washes out easily!",
    price: 8.99,
    category: "hair-care",
    image:
      "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 56,
    inStock: true,
  },
  // Sensory Tools
  {
    id: "4",
    name: "Noise-Canceling Kids Headphones",
    description:
      "Professional-grade noise cancellation sized for children. Perfect for haircuts!",
    price: 34.99,
    category: "sensory",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    rating: 5.0,
    reviews: 203,
    badge: "Top Rated",
    inStock: true,
  },
  {
    id: "5",
    name: "Weighted Lap Pad",
    description:
      "Calming 3lb weighted pad provides deep pressure therapy during haircuts.",
    price: 29.99,
    category: "sensory",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 87,
    badge: "For Autism",
    inStock: true,
  },
  {
    id: "6",
    name: "Fidget Toy Set (12 Pack)",
    description:
      "Variety pack of quiet fidget toys to keep hands busy during haircuts.",
    price: 19.99,
    category: "sensory",
    image:
      "https://images.unsplash.com/photo-1611174743420-3d7df880ce32?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 145,
    inStock: true,
  },
  {
    id: "7",
    name: "Visual Timer",
    description:
      "Helps kids understand how long the haircut will take. Reduces anxiety!",
    price: 14.99,
    category: "sensory",
    image:
      "https://images.unsplash.com/photo-1495364141860-b0d03eccd065?w=400&h=400&fit=crop",
    rating: 4.7,
    reviews: 62,
    inStock: true,
  },
  // Fun Accessories
  {
    id: "8",
    name: "Hair Tinsel Kit (100 strands)",
    description:
      "Rainbow fairy hair tinsel with application tool. Lasts 4-8 weeks!",
    price: 16.99,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 312,
    badge: "Fan Favorite",
    inStock: true,
  },
  {
    id: "9",
    name: "Sparkle Hair Gems (24 Pack)",
    description:
      "Press-on hair gems in multiple colors. Easy to apply, easy to remove!",
    price: 12.99,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=400&fit=crop",
    rating: 4.6,
    reviews: 78,
    inStock: true,
  },
  {
    id: "10",
    name: "Temporary Hair Color Chalk",
    description:
      "6 vibrant colors that wash out easily. Perfect for special occasions!",
    price: 11.99,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=400&h=400&fit=crop",
    rating: 4.5,
    reviews: 94,
    inStock: true,
  },
  {
    id: "11",
    name: "Unicorn Hair Clips Set",
    description:
      "Adorable unicorn and rainbow clips. Set of 20 in various styles.",
    price: 14.99,
    category: "accessories",
    image:
      "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=400&fit=crop",
    rating: 4.8,
    reviews: 156,
    inStock: true,
  },
  // Gift Sets
  {
    id: "12",
    name: "First Haircut Keepsake Box",
    description:
      "Beautiful box to store a lock of hair from baby's first haircut. Includes certificate.",
    price: 24.99,
    category: "gifts",
    image:
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=400&h=400&fit=crop",
    rating: 5.0,
    reviews: 89,
    badge: "Perfect Gift",
    inStock: true,
  },
  {
    id: "13",
    name: "Kids Spa Day Bundle",
    description:
      "Shampoo, conditioner, brush, and fun accessories in a gift bag!",
    price: 39.99,
    category: "gifts",
    image:
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400&h=400&fit=crop",
    rating: 4.9,
    reviews: 45,
    inStock: true,
  },
  {
    id: "14",
    name: "Sensory-Friendly Hair Kit",
    description:
      "Everything needed for stress-free home haircuts: headphones, fidgets, visual timer & more.",
    price: 79.99,
    category: "gifts",
    image:
      "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?w=400&h=400&fit=crop",
    rating: 5.0,
    reviews: 34,
    badge: "For Autism",
    inStock: true,
  },
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<string[]>([]);

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (productId: string) => {
    setCart([...cart, productId]);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-b from-[#FF6B9D]/10 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <Badge className="bg-[#FF6B9D]/10 text-[#FF6B9D] border-[#FF6B9D]/20 mb-4">
              <ShoppingBag className="w-4 h-4 mr-2" />
              Slayer Shop
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Take the Fun <span className="gradient-text">Home!</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Kid-friendly hair products, sensory tools for children with
              autism, and fun accessories - all hand-picked by Slayer!
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#00F5D4]" />
                <span>Free shipping over $50</span>
              </div>
              <div className="flex items-center gap-2">
                <Package className="w-5 h-5 text-[#9B5DE5]" />
                <span>Fast fulfillment</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#FF6B9D]" />
                <span>30-day returns</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters & Products */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Category Filters */}
          <div className="flex flex-col lg:flex-row gap-6 mb-10">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 rounded-full border-2 border-gray-200 focus:border-[#9B5DE5]"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={
                    selectedCategory === category.id ? "default" : "outline"
                  }
                  className={`rounded-full px-5 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-[#FF6B9D] via-[#9B5DE5] to-[#00BBF9] text-white border-0"
                      : "border-2 border-gray-200 hover:border-[#9B5DE5]"
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {product.badge && (
                      <Badge
                        className={`absolute top-4 left-4 ${
                          product.badge === "For Autism"
                            ? "bg-[#00F5D4] text-white"
                            : "bg-white/90 text-[#9B5DE5]"
                        } font-medium`}
                      >
                        {product.badge}
                      </Badge>
                    )}
                    <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#FF6B9D] hover:text-white">
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                  <CardContent className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex -space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating)
                                ? "text-yellow-400 fill-yellow-400"
                                : "text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 flex-1">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-2xl font-bold text-[#9B5DE5]">
                        ${product.price.toFixed(2)}
                      </span>
                      <Button
                        size="sm"
                        className="rounded-full bg-gradient-to-r from-[#FF6B9D] to-[#9B5DE5] text-white"
                        onClick={() => addToCart(product.id)}
                      >
                        <ShoppingBag className="w-4 h-4 mr-1" />
                        Add
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-600 mb-2">
                No products found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search or filters
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Sensory Products Highlight */}
      <section className="py-16 bg-gradient-to-r from-[#9B5DE5]/10 to-[#00F5D4]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Badge className="bg-[#00F5D4]/20 text-[#00F5D4] border-[#00F5D4]/30">
                <Brain className="w-4 h-4 mr-2" />
                Autism & Sensory Support
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold">
                Products That Make{" "}
                <span className="gradient-text">Haircuts Easier</span>
              </h2>
              <p className="text-lg text-gray-600">
                Our sensory-friendly products are hand-selected by Slayer based
                on what actually works in the salon. Every item has been tested
                with real kids who have autism, ADHD, and sensory processing
                differences.
              </p>
              <ul className="space-y-3">
                {[
                  "Noise-canceling headphones sized for kids",
                  "Weighted items for calming pressure",
                  "Visual timers to reduce uncertainty",
                  "Quiet fidget toys that don't distract",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00F5D4] flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#9B5DE5] to-[#00F5D4] text-white rounded-full px-8"
                onClick={() => setSelectedCategory("sensory")}
              >
                <Brain className="w-5 h-5 mr-2" />
                Shop Sensory Products
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=500&fit=crop"
                alt="Calm child representing sensory-friendly care"
                width={600}
                height={500}
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coming Soon - API Integration */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge className="bg-[#FEE440]/20 text-yellow-700 border-[#FEE440]/30 mb-4">
              Coming Soon
            </Badge>
            <h2 className="text-3xl font-bold mb-4">
              Full E-Commerce{" "}
              <span className="gradient-text">Launching Soon!</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We&apos;re partnering with top fulfillment providers to bring you
              seamless checkout, fast shipping, and amazing customer service.
              Sign up to be notified when we launch!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="rounded-full py-6"
              />
              <Button className="bg-gradient-to-r from-[#FF6B9D] via-[#9B5DE5] to-[#00BBF9] text-white rounded-full px-8 whitespace-nowrap">
                Notify Me
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Can&apos;t Find What You Need?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Visit our salon to see and try products in person, or ask Slayer
              for personalized recommendations!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button
                  size="lg"
                  className="bg-white text-[#9B5DE5] hover:bg-white/90 rounded-full px-8"
                >
                  Book Appointment
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#9B5DE5] rounded-full px-8"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cart Indicator */}
      {cart.length > 0 && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#FF6B9D] via-[#9B5DE5] to-[#00BBF9] text-white rounded-full px-6 shadow-2xl"
          >
            <ShoppingBag className="w-5 h-5 mr-2" />
            Cart ({cart.length})
          </Button>
        </motion.div>
      )}
    </div>
  );
}
