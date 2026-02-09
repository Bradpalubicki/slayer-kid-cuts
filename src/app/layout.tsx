import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://littleroots.studio"),
  // Title template allows pages to have unique titles - 59 chars
  title: {
    default:
      "Little Roots Studio | Autism-Friendly Kids Haircuts Henderson NV",
    template: "%s | Little Roots Studio",
  },
  // Description: 158 chars (under 160 limit) - includes power words
  description:
    "Carla's private, autism-trained, sensory-friendly kids haircuts in Henderson. Trauma-informed care. No rushing. One family at a time. Opening Spring 2026.",
  // Homepage canonical - pages will override with their own
  alternates: {
    canonical: "/",
  },
  keywords: [
    "autism-friendly haircuts Henderson NV",
    "sensory-friendly kids haircuts Henderson",
    "trauma-informed kids haircuts",
    "neurodivergent-friendly hair salon",
    "anxious child haircut Henderson",
    "first haircut specialist Henderson NV",
    "sensory processing disorder haircuts Las Vegas",
    "ADHD-friendly haircuts kids",
    "private kids haircuts Henderson Nevada",
    "calm kids salon Henderson",
    "Little Roots Studio",
    "Carla autism-trained stylist Henderson",
    "haircuts for autistic children Las Vegas",
    "sensory-safe haircuts kids",
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
    // OG Title: 59 chars
    title:
      "Little Roots Studio | Autism-Friendly Kids Haircuts Henderson NV",
    // OG Description: 155 chars
    description:
      "Henderson's first autism-trained, sensory-friendly kids hair salon. Trauma-informed care by Carla. Private suite, one family at a time. Opening Spring 2026.",
    images: [
      {
        url: "/images/little-roots-og.png",
        width: 1200,
        height: 630,
        alt: "Little Roots Studio - Autism-Friendly Sensory-Safe Kids Hair Salon Henderson NV",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // Twitter Title: 59 chars
    title:
      "Little Roots Studio | Autism-Friendly Kids Haircuts Henderson",
    // Twitter Description: 130 chars
    description:
      "Henderson's first autism-trained, sensory-friendly kids hair salon. Trauma-informed. One family at a time. Opening Spring 2026.",
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
  alternateName: "Little Roots Studio by Carla",
  description:
    "Henderson's first and only autism-trained, trauma-informed, sensory-friendly haircut sanctuary. Designed specifically for autistic, neurodivergent, anxious, and sensitive children. With over 13 years of specialized experience, Carla creates a judgment-free environment where children feel safe and parents feel understood. One family at a time.",
  url: "https://littleroots.studio",
  telephone: "+1-702-917-2350",
  email: "littlerootscuts333@gmail.com",
  founder: {
    "@type": "Person",
    name: "Carla",
    jobTitle: "Autism-Trained Specialist & Owner",
    description:
      "13+ years experience working with children, specialized training in autism-friendly haircutting and trauma-informed care.",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "2895 N Green Valley Pkwy #G",
    addressLocality: "Henderson",
    addressRegion: "NV",
    postalCode: "89014",
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
    "North Las Vegas",
    "Enterprise",
    "Spring Valley",
  ],
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "13:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "14:00",
      closes: "18:00",
    },
  ],
  image: "https://littleroots.studio/images/little-roots-logo.webp",
  sameAs: [],
  knowsAbout: [
    "Autism-friendly haircuts",
    "Sensory-adapted haircuts",
    "Trauma-informed care",
    "Neurodivergent children",
    "Sensory processing disorder",
    "ADHD-friendly services",
    "Anxiety management during haircuts",
    "First haircut experiences",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Sensory-Friendly Children's Haircut Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sensory-Friendly Haircut",
          description:
            "60-minute sensory-friendly haircut with full accommodations. Intake questionnaire, calm environment, and patience at every step.",
        },
        price: "45",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kids Haircut",
          description:
            "30-minute kids haircut in a private, calm suite. One family at a time.",
        },
        price: "30",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Buzz Cut / Ends Trimmed",
          description:
            "Quick buzz cut or ends trim in a sensory-friendly environment.",
        },
        price: "20",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Bang Trim",
          description:
            "Quick bang trim in a calm, private environment.",
        },
        price: "15",
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
      name: "What makes Little Roots different from other kids salons?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Little Roots Studio is Henderson's first and only autism-trained, trauma-informed, sensory-friendly haircut sanctuary. Unlike fun-themed salons, we focus on creating a calm, private, judgment-free environment. Carla has 13+ years of specialized experience with neurodivergent children, and we see only one family at a time in our private sensory suite.",
      },
    },
    {
      "@type": "Question",
      name: "Is my child too anxious for a haircut?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No child is too anxious. We specialize in helping children who have had traumatic haircut experiences rebuild trust. Carla uses trauma-informed techniques and never rushes. Your child sets the pace, and breaks happen anytime they're needed. Many families come to us after difficult experiences elsewhere.",
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
      name: "What sensory tools do you have available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer noise-canceling headphones, weighted lap pads, fidget toys, visual timers, dimmable lighting, TV/tablet with favorite shows, and a calm corner for breaks. We also have a treasure chest of rewards! Our tools are carefully selected to help reduce anxiety and sensory overload.",
      },
    },
    {
      "@type": "Question",
      name: "Where is Little Roots Studio located?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Little Roots Studio is located in Henderson, Nevada, serving families throughout the Las Vegas valley including Paradise, Boulder City, Green Valley, Summerlin, and surrounding areas. We're opening Spring 2026. Join our waitlist to be the first to book.",
      },
    },
    {
      "@type": "Question",
      name: "How do I prepare my autistic child for a haircut?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend visiting our Prepare page for tips including: showing your child photos of the salon beforehand, discussing what will happen using simple language, bringing comfort items, and arriving early to acclimate. We also provide social stories to help prepare your child for their visit.",
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
