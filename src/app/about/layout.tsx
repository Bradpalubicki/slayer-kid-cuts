import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Carla | Autism-Trained Kids Hair Stylist Henderson NV",
  description:
    "Meet Carla, Henderson's autism-trained kids hair stylist with 13+ years experience. Specializing in trauma-informed, sensory-friendly haircuts for anxious children.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "Meet Carla | Autism-Trained Kids Hair Stylist Henderson NV",
    description:
      "Meet Carla, Henderson's autism-trained kids hair stylist with 13+ years experience. Specializing in trauma-informed, sensory-friendly haircuts.",
    url: "https://littleroots.studio/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
