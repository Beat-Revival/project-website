"use client";

import React from "react"; // Import React if not already implicitly imported
import MainNav from "./MainNav"; // Assuming these exist
import MobileNav from "./MobileNav"; // Assuming these exist
import { useIsDesktop } from "./GetClientInfo"; // Adjust path as needed

export default function SiteHeader() {
  const isDesktop = useIsDesktop(); // Use the custom hook
  const bgColor = "bg-white";
  const borderColor = "border-gray-200";

  return (
    <header className={`w-full border-b ${borderColor}`}>
      <div className={`flex h-16 items-center px-6 ${bgColor}`}>
        {/* Use the state from the hook for conditional rendering */}
        {isDesktop ? <MainNav /> : <MobileNav />}
      </div>
    </header>
  );
}