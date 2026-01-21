import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const garamond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Philomath",
  description: "A space dedicated to rigorous thinking and accessible education",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "The Philomath",
    description: "A space dedicated to rigorous thinking and accessible education",
    type: "website",
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
      </body>
    </html>
  );
}
