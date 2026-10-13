
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Kirk IT to discuss managed IT services, cybersecurity, cloud solutions, and technology support for your business in the Cayman Islands.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
