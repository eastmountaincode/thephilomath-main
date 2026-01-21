import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Philomath",
  description: "A space dedicated to rigorous thinking and accessible education in data analytics, statistics, and probability.",
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "The Philomath",
    description: "A space dedicated to rigorous thinking and accessible education in data analytics, statistics, and probability.",
    type: "website",
    siteName: "The Philomath",
    images: [
      {
        url: "/data-analytics.png",
        width: 512,
        height: 512,
        alt: "The Philomath",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "The Philomath",
    description: "A space dedicated to rigorous thinking and accessible education in data analytics, statistics, and probability.",
    images: ["/data-analytics.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${garamond.variable} font-serif antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
