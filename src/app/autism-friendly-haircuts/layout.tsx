import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autism-Friendly Haircuts for Kids | Henderson NV | Little Roots",
  description:
    "Henderson's only autism-trained kids hair stylist. Carla offers sensory-friendly, trauma-informed haircuts in a private suite. 13+ years experience with neurodivergent children.",
  alternates: {
    canonical: "/autism-friendly-haircuts",
  },
  keywords: [
    "autism-friendly haircuts Henderson NV",
    "autism haircuts kids Las Vegas",
    "sensory-friendly haircuts autistic children",
    "neurodivergent kids haircuts",
    "haircuts for autistic children near me",
    "autism-trained hair stylist Henderson",
    "sensory processing disorder haircuts",
    "calm haircuts for autistic kids",
  ].join(", "),
  openGraph: {
    title: "Autism-Friendly Haircuts for Kids | Henderson NV | Little Roots",
    description:
      "Henderson's only autism-trained kids hair stylist. Sensory-friendly, trauma-informed haircuts in a private suite. 13+ years experience.",
    url: "https://littleroots.studio/autism-friendly-haircuts",
    type: "website",
    images: [
      {
        url: "/images/little-roots-og.png",
        width: 1200,
        height: 630,
        alt: "Little Roots Studio - Autism-Friendly Kids Haircuts Henderson NV",
      },
    ],
  },
};

export default function AutismFriendlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
