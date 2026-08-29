import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Playfair_Display, Noto_Naskh_Arabic } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const naskh = Noto_Naskh_Arabic({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-naskh",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Rayan Vet Clinic | کلینیکی دکتۆر ڕایان",
  description:
    "Dr. Rayan Vet Clinic — پسپۆڕی لە خزمەتکردن ، دڵسۆزی لە چارەسەر کردن. TikTok, Instagram, Facebook, WhatsApp, Viber, Phone & Location.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1d5b5c",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${naskh.variable} bg-teal-base text-cream antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
