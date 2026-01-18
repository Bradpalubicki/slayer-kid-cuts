import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book a sensory-friendly kids haircut at Little Roots Studio Henderson. Online booking available when we open Spring 2026.",
  alternates: {
    canonical: "/book",
  },
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
