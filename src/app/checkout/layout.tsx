import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checkout | Immigration Advice Service — Bridgely LLC",
  description:
    "Secure checkout for Immigration Advice Service consulting packages, including E-2, EB-2, and EB-2 NIW visa advisory engagements.",
  alternates: {
    canonical: "/checkout",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
