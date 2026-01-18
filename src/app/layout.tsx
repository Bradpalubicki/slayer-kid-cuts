import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ChatWidget } from "@/components/chat-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Slayer Kid Cuts | Coming Soon | Henderson's Kid-Friendly Hair Salon",
  description: "Henderson's first salon designed for every kid — from wiggly to sensory-sensitive. Private suite with separate entrance. Coming soon!",
  keywords: "kids haircuts Henderson NV, children haircuts, sensory-friendly haircuts, first haircut, autism friendly haircuts, kids salon",
  openGraph: {
    title: "Slayer Kid Cuts | Coming Soon | Henderson's Kid-Friendly Hair Salon",
    description: "Henderson's first salon designed for every kid — from wiggly to sensory-sensitive. Private suite with separate entrance. Coming soon!",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HairSalon",
              name: "Slayer Kid Cuts",
              description: "Henderson's sensory-friendly kids hair salon, purpose-built for children with autism, sensory processing differences, and anxiety. Featuring private sensory suite with separate entrance.",
              url: "https://slayerkidcuts.com",
              telephone: "+1-702-555-1234",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Coming Soon",
                addressLocality: "Henderson",
                addressRegion: "NV",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.0397,
                longitude: -114.9819,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "247",
              },
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Private Sensory Suite",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Private Entrance",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Wait-in-Car Service",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Adjustable Lighting",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Noise-Canceling Headphones Available",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Weighted Blankets Available",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Sensory-Friendly Environment",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Visual Timers",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Quiet Clippers",
                  value: true,
                },
              ],
              specialties: [
                "Kids Haircuts",
                "Autism-Friendly Haircuts",
                "Sensory-Friendly Services",
                "First Haircuts",
                "Special Needs Hair Services",
                "Private Suite Appointments",
                "Anxiety-Friendly Haircuts",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Kids Hair Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Kids Haircut",
                      description: "Fun haircut experience with entertainment",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Sensory-Friendly Haircut",
                      description: "Specialized haircut for children with autism and sensory differences",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "First Haircut Package",
                      description: "Special first haircut with certificate and keepsake",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Private Suite Appointment",
                      description: "Complete privacy in dedicated sensory suite with private entrance",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
