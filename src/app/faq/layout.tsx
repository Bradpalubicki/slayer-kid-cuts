import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Common Questions",
  description:
    "Frequently asked questions about sensory-friendly haircuts, pricing, what to expect, and how we help anxious children.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
