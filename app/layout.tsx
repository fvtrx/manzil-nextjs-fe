import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
        url: "/manzil-logo.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manzil",
    description:
      "Beautiful Quran reader with Arabic text, Malay translations, and audio recitation.",
    images: ["/manzil-logo.png"],
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
      <body className={`${inter.className} antialiased`}>
        {children}
        <Script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="fvtrx"
          data-description="Support me on Buy me a coffee!"
          data-message="Assalamualaikum w.b.t. Terima kasih kerana sudi singgah ke Quran-Manzil.com! Jika anda ingin menyalurkan sumbangan demi tujuan penambahbaikan laman Quran-Manzil ini, boleh terus salurkan sumbangan anda melalui widget Buy Me A Coffee saya ini 😊"
          data-color="#40DCA5"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
