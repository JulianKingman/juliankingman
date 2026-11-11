import type { Metadata } from "next";
import { Geist, Geist_Mono, VT323 } from "next/font/google";
import "@fontsource-variable/elms-sans/wght.css";
import Navigation from "@/components/navigation";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pixelFont = VT323({
  variable: "--font-pixel",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julian Kingman - Ascended Software",
  description: "Personal portfolio of Julian Kingman.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pixelFont.variable} antialiased bg-black text-white`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
