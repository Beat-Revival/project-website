import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SiteHeader from "./components/SiteHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Beat Revival",
  description: "A MEC server emulator project.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  const bgColor = "bg-white";
  const textColor = "text-gray-900";

  return (
    <html lang="en">
      <body className={`${inter.className} ${bgColor} ${textColor} min-h-screen flex flex-col`}>
        <SiteHeader />
        <main className="flex-grow max-w-7xl mx-auto py-10 px-5 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}