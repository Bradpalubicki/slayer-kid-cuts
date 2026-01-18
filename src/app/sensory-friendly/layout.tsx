import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sensory-Friendly Haircuts | Autism-Friendly",
  description:
    "Specialized sensory-friendly haircuts for autistic and neurodivergent children. Trained stylist, calming environment, endless patience.",
  alternates: {
    canonical: "/sensory-friendly",
  },
};

export default function SensoryFriendlyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
