import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/css/style.css";
import HomeNavbar from "@/ui/home/navbar";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DAL",
  description: "dal kultur house",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={inter.className}>
        <HomeNavbar />
        <main className="d-block mt-2">{children}</main>
      </body>
    </html>
  );
}
