import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Little Roots Studio admin dashboard.",
  robots: "noindex, nofollow",
  alternates: {
    canonical: "/admin",
  },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
