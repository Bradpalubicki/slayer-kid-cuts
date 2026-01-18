import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Little Roots Studio | Coming Soon | Las Vegas Sensory-Friendly Kids Hair Studio",
  description: "Las Vegas's first sensory-friendly, judgment-free hair studio designed for children who need a little more patience, privacy, and care. Coming soon!",
  keywords: "kids haircuts Las Vegas, sensory-friendly haircuts, autism friendly haircuts, children haircuts, first haircut, neurodivergent kids salon, anxiety friendly haircuts",
  openGraph: {
    title: "Little Roots Studio | Coming Soon | Sensory-Friendly Kids Hair Studio",
    description: "A sensory-friendly, judgment-free hair studio designed specifically for children, including autistic and neurodivergent kids. The first of its kind in Las Vegas!",
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
              name: "Little Roots Studio",
              description: "Las Vegas's first sensory-friendly, judgment-free hair studio designed specifically for children, including autistic and neurodivergent kids, as well as children who need more patience, privacy, and care.",
              url: "https://littlerootsstudio.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Coming Soon",
                addressLocality: "Las Vegas",
                addressRegion: "NV",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 36.1699,
                longitude: -115.1398,
              },
              priceRange: "$$",
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Private Suite - One Family at a Time",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Sensory-Friendly Environment",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Earth-Toned Calming Decor",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "TV and Video Games",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Sensory Box and Tools",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Never Rushed Appointments",
                  value: true,
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Judgment-Free Zone",
                  value: true,
                },
              ],
              specialties: [
                "Kids Haircuts",
                "Autism-Friendly Haircuts",
                "Sensory-Friendly Services",
                "Neurodivergent Children",
                "Anxiety-Friendly Haircuts",
                "First Haircuts",
                "Trauma-Informed Care",
              ],
              founder: {
                "@type": "Person",
                name: "Carla",
                description: "13 years of experience working with children of all kinds, with specialized training in autism-friendly haircutting.",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Kids Hair Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Sensory-Friendly Haircut",
                      description: "A calm, patient haircut experience in a private, judgment-free environment",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "First Haircut Experience",
                      description: "A gentle, supportive first haircut for little ones",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
