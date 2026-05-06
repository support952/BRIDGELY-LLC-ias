import type { Metadata } from "next";
import { Playfair_Display, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://immigrationadviceservice.com"),
  title: "Immigration Advice Service | Premium U.S. Visa Consulting — Bridgely LLC",
  description:
    "Expert E-2, EB-2, and EB-2 NIW visa consulting. We guide entrepreneurs and professionals through every step of the U.S. immigration process with precision and care.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Immigration Advice Service | Premium U.S. Visa Consulting",
    description:
      "Expert E-2, EB-2, and EB-2 NIW visa consulting. We guide entrepreneurs and professionals through every step of the U.S. immigration process with precision and care.",
    type: "website",
    url: "/",
    siteName: "Immigration Advice Service",
  },
  twitter: {
    card: "summary_large_image",
    title: "Immigration Advice Service | Premium U.S. Visa Consulting",
    description:
      "Expert E-2, EB-2, and EB-2 NIW visa consulting by Bridgely LLC.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(playfair.variable, "font-sans", geist.variable)}>
      <body>{children}</body>
    </html>
  );
}
