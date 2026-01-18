import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop | Sensory Tools & Products",
  description:
    "Shop sensory-friendly hair care products, weighted lap pads, fidget toys, and calming tools for kids at Little Roots Studio.",
  alternates: {
    canonical: "/shop",
  },
};

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
