import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Carla | 13+ Years Experience",
  description:
    "Meet Carla, your autism-trained kids hair stylist with 13+ years experience. Sensory-aware, trauma-informed, endlessly patient.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
