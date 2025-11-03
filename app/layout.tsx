import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lê Nguyên Group | Dự Án Bất Động Sản Cao Cấp",
  description:
    "Công ty bất động sản hàng đầu Việt Nam - Chuyên phát triển các dự án nhà ở, căn hộ cao cấp và khu đô thị hiện đại",
  generator: "Duong2306",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
