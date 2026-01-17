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
  title: "Slayer Kid Cuts | Kids Haircuts Henderson NV | Mobile & Salon",
  description: "Award-winning kids haircuts in Henderson, NV! Fun, stress-free salon experience or mobile home visits. Special needs friendly. Book online 24/7.",
  keywords: "kids haircuts Henderson NV, children haircuts, mobile haircuts, first haircut, special needs haircuts, kids salon",
  openGraph: {
    title: "Slayer Kid Cuts | Where Haircuts Are Fun!",
    description: "Making haircuts an adventure for kids in Henderson, NV. Fun salon or mobile home visits. Book online 24/7!",
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
              description: "Kids haircuts in Henderson, NV. Fun salon experience and mobile home visits.",
              url: "https://slayerkidcuts.com",
              telephone: "+1-702-555-1234",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1234 Fun Street, Suite 100",
                addressLocality: "Henderson",
                addressRegion: "NV",
                postalCode: "89014",
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
