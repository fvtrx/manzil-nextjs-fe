import "./globals.css";
import type { Metadata } from "next";
import { Inter, Amiri } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-amiri",
});

export const metadata: Metadata = {
  title: "منزل - Manzil",
  description:
    "Himpunan ayat-ayat Al-Quran untuk tujuan pelindungan diri dan kesembuhan.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  robots: "follow, index",
  icons: {
    icon: "/public/favicon.ico",
    shortcut: "/public/favicon.ico",
    apple: "/public/apple-touch-icon.png",
  },
  openGraph: {
    title: "Manzil",
    description:
      "Beautiful Quran reader with Arabic text, Malay translations, and audio recitation.",
    type: "website",
    siteName: "Manzil",
    url: "https://quran-manzil.com",
    images: [
      {
        url: "/public/manzil-logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manzil",
    description:
      "Beautiful Quran reader with Arabic text, Malay translations, and audio recitation.",
    images: ["/public/manzil-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${amiri.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
