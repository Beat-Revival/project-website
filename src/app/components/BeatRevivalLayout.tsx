"use client";

import React, { ReactNode } from "react";
import { isDesktop } from "./GetInfo";

interface BeatRevivalLayoutProps {
  children: ReactNode;
}

const BeatRevivalLayout: React.FC<BeatRevivalLayoutProps> = ({ children }) => {
  if (isDesktop()) {
    return (
      <div className="fixed z-30 h-screen flex bottom-0 top-80 bottom-0.5 right-0 left-0">
        <div className="relative bg-white/90 w-full inset-y-5 top-15 font-medium">
          <br />
          <div className="fixed inset-x-5">{children}</div>
          <div className="fixed inset-y-2.5"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex-col min-h-screen bg-white/90">
        <div className="flex-grow p-5 md:p-10 overflow-y-auto">{children}</div>
      </div>
    );
  }
};

export default BeatRevivalLayout;
