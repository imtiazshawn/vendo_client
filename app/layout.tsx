import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import "./styles.css";

const roboto = Roboto({ 
  weight: ["400", "500", "700"],
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "VENDO - eCommerce Platform",
  description: "A modern, full-featured eCommerce platform built with Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
