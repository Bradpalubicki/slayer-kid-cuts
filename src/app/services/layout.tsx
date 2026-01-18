import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing & Services",
  description:
    "Kids haircut pricing: First Haircut $45, Kids Cut $35, Sensory-Adapted $50. Fun add-ons available. Sensory-friendly salon Henderson.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
