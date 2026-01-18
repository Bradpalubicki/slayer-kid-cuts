import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Space | Private Sensory Suite",
  description:
    "Private sensory-friendly suite with separate entrance. Calm environment, weighted blankets, noise-canceling headphones. One family at a time.",
  alternates: {
    canonical: "/our-space",
  },
};

export default function OurSpaceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
