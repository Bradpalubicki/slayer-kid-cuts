import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kids Haircuts Henderson NV | Sensory-Friendly",
  description:
    "Best kids haircuts in Henderson NV. Sensory-friendly, autism-trained stylist. Private suite, one family at a time. Opening Spring 2026.",
  alternates: {
    canonical: "/kids-haircuts-henderson-nv",
  },
};

export default function KidsHaircutsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
