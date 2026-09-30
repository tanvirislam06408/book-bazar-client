import type { Metadata } from "next";
import { Outfit, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ["bengali", "latin"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BoiBazar - Student Used Book Marketplace in Bangladesh | বইবাজার",
  description:
    "Buy and sell used textbooks, admission guides, BCS preparation books, and novels directly with fellow students across Bangladesh. 100% Free, zero commission.",
  keywords: [
    "Used books Bangladesh",
    "Buy sell textbooks Dhaka",
    "HSC books",
    "Medical admission guide",
    "BUET admission books",
    "BCS preparation books",
    "BoiBazar",
    "বইবাজার",
  ],
  openGraph: {
    title: "BoiBazar - Student Used Book Marketplace in Bangladesh",
    description:
      "Buy and sell used textbooks, admission guides, BCS preparation books, and novels directly with fellow students across Bangladesh.",
    type: "website",
    locale: "bn_BD",
    siteName: "BoiBazar",
  },
  twitter: {
    card: "summary_large_image",
    title: "BoiBazar - Student Used Book Marketplace in Bangladesh",
    description:
      "Buy & sell used textbooks, admission guides, and novels directly with fellow students. No commission.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      className={`${outfit.variable} ${notoSansBengali.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#FAFBFD] text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 font-sans">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
