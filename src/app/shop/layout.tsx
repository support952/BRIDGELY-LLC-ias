import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Immigration Advice Service — Bridgely LLC",
  description:
    "Browse premium U.S. immigration consulting services — E-2, EB-2, and EB-2 NIW visa packages tailored to your needs.",
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    title: "Services | Immigration Advice Service",
    description:
      "Browse premium U.S. immigration consulting services — E-2, EB-2, and EB-2 NIW visa packages tailored to your needs.",
    url: "/shop",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Immigration Advice Service",
    description:
      "Browse premium U.S. immigration consulting services — E-2, EB-2, and EB-2 NIW visa packages tailored to your needs.",
  },
};

export default function ShopLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
