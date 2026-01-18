import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://littleroots.studio"),
  title:
    "Little Roots Studio | Coming Soon | Sensory-Friendly Kids Hair Salon Henderson NV",
  description:
    "Henderson's first sensory-friendly, judgment-free hair studio designed for children. Specialized in autism-friendly haircuts, neurodivergent care, and kids who need extra patience. One family at a time. Coming Spring 2025.",
  keywords: [
    "sensory-friendly haircuts Henderson NV",
    "autism-friendly hair salon Las Vegas",
    "kids haircuts Henderson",
    "neurodivergent haircuts",
    "sensory processing disorder haircuts",
    "childrens hair salon Henderson Nevada",
    "first haircut Henderson",
    "anxious child haircut",
    "calm kids salon",
    "private kids haircuts",
    "Little Roots Studio",
    "Carla hair stylist Henderson",
  ].join(", "),
  authors: [{ name: "Carla", url: "https://littleroots.studio" }],
  creator: "Little Roots Studio",
  publisher: "Little Roots Studio",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://littleroots.studio",
    siteName: "Little Roots Studio",
    title:
      "Little Roots Studio | Sensory-Friendly Kids Hair Salon | Henderson NV",
    description:
      "The first sensory-friendly, judgment-free kids hair studio in Las Vegas. Autism-trained, trauma-informed, endlessly patient. One family at a time.",
    images: [
      {
        url: "/images/little-roots-og.png",
        width: 1200,
        height: 630,
        alt: "Little Roots Studio - Sensory-Friendly Kids Hair Salon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Little Roots Studio | Coming Soon to Henderson NV",
    description:
      "The first sensory-friendly kids hair studio in Las Vegas. Where every child is met exactly where they are. 🌱",
    images: ["/images/little-roots-og.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#5B8A8A",
};

// JSON-LD Schema for LocalBusiness
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Little Roots Studio",
  description:
    "Henderson's first sensory-friendly, judgment-free hair studio designed for children with autism, ADHD, sensory processing differences, and anxiety. One family at a time.",
  url: "https://littleroots.studio",
  telephone: "",
  email: "hello@littlerootsstudio.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Henderson",
    addressRegion: "NV",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.0395,
    longitude: -114.9817,
  },
  areaServed: [
    "Henderson, NV",
    "Las Vegas, NV",
    "Paradise, NV",
    "Boulder City, NV",
    "Green Valley",
    "Summerlin",
  ],
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    description: "By appointment only. Opening Spring 2025.",
  },
  image: "https://littleroots.studio/images/little-roots-logo.png",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sensory-Friendly Haircut Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "First Haircut Experience",
          description: "Certificate and photo included",
        },
        price: "45",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kids Haircut",
          description: "Ages 0-12",
        },
        price: "35",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sensory-Adapted Cut",
          description: "Extended time, extra patience",
        },
        price: "50",
        priceCurrency: "USD",
      },
    ],
  },
};

// JSON-LD Schema for FAQPage
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a sensory-friendly haircut?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A sensory-friendly haircut is designed for children who may be sensitive to sounds, lights, textures, or touch. We offer dimmed lighting, noise-canceling headphones, weighted lap pads, fidget toys, and a calm environment. We never rush and allow breaks as needed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you specialize in haircuts for autistic children?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Our stylist Carla has 13+ years of experience working with children and specialized training in autism-friendly haircutting. We understand sensory sensitivities and adapt our approach to each child's needs.",
      },
    },
    {
      "@type": "Question",
      name: "What ages do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve children from infants (first haircuts) through teens (ages 0-17). We specialize in making haircuts a positive experience for children of all ages and abilities.",
      },
    },
    {
      "@type": "Question",
      name: "Is it really one family at a time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! Your family will have the entire private suite to yourselves. No other families, no waiting room overwhelm. We also offer a wait-in-car option where we text you when we're ready.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Little Roots Studio located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Little Roots Studio is located in Henderson, Nevada, serving families throughout the Las Vegas valley including Paradise, Boulder City, and surrounding areas. We're opening Spring 2025.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="canonical" href="https://littleroots.studio" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
