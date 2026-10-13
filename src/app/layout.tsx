
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Kirk IT | Managed IT & Cybersecurity",
    template: "%s | Kirk IT",
  },
  description:
    "Managed IT services, cybersecurity, cloud solutions, and business technology support for organizations in the Cayman Islands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
