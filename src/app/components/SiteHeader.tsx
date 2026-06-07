"use client";

import React from "react"; // Import React if not already implicitly imported
import MainNav from "./MainNav"; // Assuming these exist
import MobileNav from "./MobileNav"; // Assuming these exist
import { useIsDesktop } from "./GetClientInfo"; // Adjust path as needed
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function SiteHeader() {
  const isDesktop = useIsDesktop(); // Use the custom hook
  const bgColor = "bg-white";
  const borderColor = "border-gray-200";

  return (
    <header className={`w-full border-b ${borderColor}`}>
      <div className={`flex h-16 items-center px-6 ${bgColor}`}>
        {/* Use the state from the hook for conditional rendering */}
        <div className="flex w-full items-center gap-4">
          {isDesktop ? <MainNav /> : <MobileNav />}
          <div className="ml-auto">
            <Button asChild size="lg" className="bg-gray-200 border border-gray-500 text-gray-600 hover:bg-gray-400 hover:text-white rounded-bl-none rounded-tr-none">
              <Link href="/download">Download</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}