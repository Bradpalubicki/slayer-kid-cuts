import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sensory-Friendly Haircuts for Autism, ADHD & Anxiety",
  description:
    "Carla's specialized sensory-friendly haircuts for autistic, ADHD, anxious, and neurodivergent children in Henderson NV. 13+ years experience. Trauma-informed care.",
  alternates: {
    canonical: "/sensory-friendly",
  },
  openGraph: {
    title: "Sensory-Friendly Haircuts for Autism, ADHD & Anxiety",
    description:
      "Carla's specialized sensory-friendly haircuts for autistic, ADHD, anxious, and neurodivergent children in Henderson NV. 13+ years experience.",
    url: "https://littleroots.studio/sensory-friendly",
  },
};

export default function SensoryFriendlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
