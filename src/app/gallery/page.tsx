"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Camera, X, ChevronLeft, ChevronRight, Calendar, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&h=600&fit=crop",
    alt: "Happy boy with fresh haircut",
    category: "boys",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1519699047748-de8e44e9dee9?w=800&h=600&fit=crop",
    alt: "First haircut celebration",
    category: "first",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?w=800&h=600&fit=crop",
    alt: "Girl with styled hair",
    category: "girls",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop",
    alt: "Cool boy haircut",
    category: "boys",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop",
    alt: "Fun hair tinsel",
    category: "fun",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=600&fit=crop",
    alt: "Toddler haircut",
    category: "first",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=800&h=600&fit=crop",
    alt: "Mobile haircut service",
    category: "mobile",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
    alt: "Birthday party styling",
    category: "fun",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop",
    alt: "Stylist at work",
    category: "salon",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=800&h=600&fit=crop",
    alt: "Girl with braids",
    category: "girls",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&fit=crop",
    alt: "Trendy boy cut",
    category: "boys",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=600&fit=crop",
    alt: "Happy client",
    category: "girls",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("all");

  const filteredImages = activeTab === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeTab);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const nextImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
      const nextIndex = (currentIndex + 1) % filteredImages.length;
      setSelectedImage(filteredImages[nextIndex].id);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage);
      const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
      setSelectedImage(filteredImages[prevIndex].id);
    }
  };

  const selectedImageData = galleryImages.find((img) => img.id === selectedImage);

  return (
    <div className="min-h-screen pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge className="bg-[#FF6B9D]/10 text-[#FF6B9D] border-[#FF6B9D]/20 mb-4">
            <Camera className="w-4 h-4 mr-2" />
            Our Work
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Happy Kids, <span className="gradient-text">Happy Styles</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Check out some of our favorite transformations! Every smile tells a story.
          </p>
        </div>

        {/* Filter Tabs */}
        <Tabs defaultValue="all" className="mb-12" onValueChange={setActiveTab}>
          <TabsList className="flex flex-wrap justify-center gap-2 bg-transparent">
            {[
              { value: "all", label: "All" },
              { value: "boys", label: "Boys" },
              { value: "girls", label: "Girls" },
              { value: "first", label: "First Haircuts" },
              { value: "fun", label: "Fun Styles" },
              { value: "mobile", label: "Mobile Visits" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="rounded-full px-6 data-[state=active]:bg-[#9B5DE5] data-[state=active]:text-white"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all"
              onClick={() => openLightbox(image.id)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500">No images found in this category.</p>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage !== null && selectedImageData && (
          <div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6 text-white" />
            </button>

            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>

            <div
              className="relative max-w-4xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImageData.src}
                alt={selectedImageData.alt}
                width={1200}
                height={800}
                className="rounded-2xl object-contain w-full h-auto max-h-[80vh]"
              />
              <p className="text-white text-center mt-4">{selectedImageData.alt}</p>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="gradient-hero rounded-3xl p-12 text-white">
            <Sparkles className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Want Your Child Featured?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book an appointment and share your child&apos;s transformation with our community!
            </p>
            <Link href="/book">
              <Button size="lg" className="bg-white text-[#9B5DE5] hover:bg-white/90 rounded-full px-8">
                <Calendar className="w-5 h-5 mr-2" />
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
