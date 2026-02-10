import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Happy Kids Haircuts",
  description:
    "See happy kids after their sensory-friendly haircuts at Little Roots Studio. Photos of our happy clients!",
  alternates: {
    canonical: "/gallery",
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
