import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Prepare Your Child for a Sensory-Friendly Haircut",
  description:
    "Prepare your anxious or autistic child for their haircut at Little Roots Studio. Social stories, what to bring, day-of tips, and how our private suite works.",
  alternates: {
    canonical: "/prepare",
  },
  openGraph: {
    title: "How to Prepare Your Child for a Sensory-Friendly Haircut",
    description:
      "Prepare your anxious or autistic child for their haircut at Little Roots Studio. Social stories, what to bring, and day-of tips.",
    url: "https://littleroots.studio/prepare",
  },
};

export default function PrepareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
