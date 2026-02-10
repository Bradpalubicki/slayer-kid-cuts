import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Little Roots Studio",
  description:
    "Sensory-friendly kids haircuts in Henderson, NV. Text or call (702) 917-2350 to book.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
