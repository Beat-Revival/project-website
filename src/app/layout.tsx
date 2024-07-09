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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative z-20">
          <SiteHeader />
        </div>
        <div className="fixed top-0 left-0 h-screen w-screen z-10">
          <div className="w-full h-full blur-lg">
            <video autoPlay loop muted className="w-full h-full object-cover">
              <source src="/bg.webm" />
            </video>
          </div>
        </div>
        <div className="relative z-30">
          {children}
        </div>
      </body>
    </html>
  );
}
