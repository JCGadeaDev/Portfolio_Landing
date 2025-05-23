import type { Metadata } from "next";

import { Urbanist } from "next/font/google";

import "./globals.css";
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

import Navbar from "../Components/navbar";
import Header from "@/Components/header";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JCGadea Portfolio 💻",
  description: "Portfolio page made by JCGadea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <Header />
        {children}
      </body>
    </html>
  );
}
