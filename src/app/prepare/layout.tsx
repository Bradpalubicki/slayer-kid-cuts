import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prepare for Your Visit",
  description:
    "Tips to prepare your child for a sensory-friendly haircut. Social stories, what to expect, and how we make haircuts stress-free.",
  alternates: {
    canonical: "/prepare",
  },
};

export default function PrepareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
