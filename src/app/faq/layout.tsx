import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ: Autism-Friendly Haircuts & Sensory-Processing",
  description:
    "Common questions about sensory-friendly haircuts at Little Roots Studio. Learn about our autism accommodations, booking, pricing, and what makes us different.",
  alternates: {
    canonical: "/faq",
  },
  openGraph: {
    title: "FAQ: Autism-Friendly Haircuts & Sensory-Processing",
    description:
      "Common questions about sensory-friendly haircuts at Little Roots Studio. Learn about our autism accommodations, booking, and pricing.",
    url: "https://littleroots.studio/faq",
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
