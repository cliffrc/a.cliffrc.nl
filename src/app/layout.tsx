import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | cliff",
    default: "Cliff", // a default is required when creating a template
  },
  description:
    "A founder + software engineer intern at 10strata who loves learning the marketing ropes",
  keywords: ["Next.js", "React", "Tailwindcss", "web development"],
  generator: "Next.js",
  applicationName: "cliffrc.nl",
  referrer: "origin-when-cross-origin",
  authors: [{ name: "Cliff", url: "https://cliffrc.nl" }],
  creator: "Cliff Cunnington",
  publisher: "Cliff Cunnington Enterprise",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "min-h-[5000px] font-sans antialiased",
          inter.className
        )}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
