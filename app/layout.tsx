import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sri Sai Balajee Modern Rice Mill | 7STARS RICE",
  description:
    "Sri Sai Balajee Modern Rice Mill is a trusted manufacturer of premium quality rice in Andhra Pradesh. We supply RGL, BPT and HMT rice under the 7STARS RICE brand with modern processing and traditional purity.",
  keywords: [
    "7STARS RICE",
    "Sri Sai Balajee Modern Rice Mill",
    "Rice Mill",
    "Rice Manufacturer",
    "Rice Supplier",
    "Premium Rice",
    "RGL Rice",
    "BPT Rice",
    "HMT Rice",
    "Andhra Pradesh Rice",
    "Rice Export",
    "Rice Wholesale",
  ],
  authors: [{ name: "Sri Sai Balajee Modern Rice Mill" }],
  creator: "Sri Sai Balajee Modern Rice Mill",
  publisher: "Sri Sai Balajee Modern Rice Mill",

  openGraph: {
    title: "Sri Sai Balajee Modern Rice Mill | 7STARS RICE",
    description:
      "Premium quality RGL, BPT and HMT rice manufactured with modern technology and trusted quality.",
    url: "https://7star-rice.vercel.app/",
    siteName: "7STARS RICE",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/images/rice-mill.png",
        width: 1200,
        height: 630,
        alt: "Sri Sai Balajee Modern Rice Mill",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sri Sai Balajee Modern Rice Mill | 7STARS RICE",
    description:
      "Premium Quality Rice from Andhra Pradesh.",
    images: ["/images/rice-mill.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}