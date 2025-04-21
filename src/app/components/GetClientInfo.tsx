"use client";

import { useState, useEffect } from "react";

// Function to check if window is defined (for SSR)
const isClient = typeof window === 'object';

function getIsDesktop(): boolean {
  return isClient ? window.innerWidth >= 1205 : true; // Default to true for SSR or if window is undefined
}

export function useIsDesktop(): boolean {
  const [isDesktop, setIsDesktop] = useState<boolean>(getIsDesktop());

  useEffect(() => {
    // Skip effect runs during SSR or if window is not defined
    if (!isClient) {
      return;
    }

    function handleResize() {
      setIsDesktop(getIsDesktop());
    }

    // Set initial state correctly after hydration
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array ensures this runs only once on mount and cleans up on unmount

  return isDesktop;
}