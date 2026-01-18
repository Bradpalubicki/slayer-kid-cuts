import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon | Opening Spring 2026",
  description:
    "Little Roots Studio opening Spring 2026 in Henderson NV. Join waitlist for first access to sensory-friendly kids haircuts.",
  alternates: {
    canonical: "/coming-soon",
  },
};

export default function ComingSoonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
