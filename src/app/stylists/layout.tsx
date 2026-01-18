import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Stylists",
  description:
    "Meet the autism-trained stylists at Little Roots Studio Henderson. Specialized in sensory-friendly kids haircuts.",
  alternates: {
    canonical: "/stylists",
  },
};

export default function StylistsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
