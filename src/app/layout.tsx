import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import "./globals.css";

const inter = Merriweather({
  subsets: ["latin"],
  weight: ["300","400","700","900"]
});

export const metadata: Metadata = {
  title: "Swishh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
