import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from "../../public/next.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "your next app",
  description: "messing with some metadatas",
  keywords: ["HTML", "CSS", "Javascript", "Programação"],
  openGraph: {
    images: logo,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
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
