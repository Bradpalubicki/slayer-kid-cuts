import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Sensory-Friendly Salon Suite | Calm Kids Haircuts",
  description:
    "Tour Little Roots Studio's private sensory suite in Henderson NV. Private entrance, wait-in-car option, calm corner for breaks. One family at a time, always.",
  alternates: {
    canonical: "/our-space",
  },
  openGraph: {
    title: "Private Sensory-Friendly Salon Suite | Calm Kids Haircuts",
    description:
      "Tour Little Roots Studio's private sensory suite in Henderson NV. Private entrance, wait-in-car option, calm corner for breaks.",
    url: "https://littleroots.studio/our-space",
  },
};

export default function OurSpaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
