import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kids Haircut Services | Autism & Sensory-Friendly",
  description:
    "Sensory-friendly haircut services for kids ages 0-17 in Henderson NV. First haircuts $45, autism-adapted cuts, trauma-informed care. No rushing, breaks allowed.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Kids Haircut Services | Autism & Sensory-Friendly",
    description:
      "Sensory-friendly haircut services for kids ages 0-17 in Henderson NV. First haircuts, autism-adapted cuts, trauma-informed care by Carla.",
    url: "https://littleroots.studio/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
