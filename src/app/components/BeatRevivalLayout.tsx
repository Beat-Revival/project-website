import React, { ReactNode } from 'react';
import Footer from '../components/Footer';

interface BeatRevivalLayoutProps {
  children: ReactNode;
}

const BeatRevivalLayout: React.FC<BeatRevivalLayoutProps> = ({ children }) => {
  return (
    <div className="fixed z-30 h-screen flex bottom-0 top-80 bottom-0.5 right-0 left-0">
      <div className="relative bg-white/90 w-full inset-y-5 top-15 font-medium">
        <br />
        <div className="fixed inset-x-5">{children}</div>
        <div className="fixed inset-y-2.5"></div>
        <br/><br/><br/>
        <Footer/>
      </div>
    </div>
  );
};

export default BeatRevivalLayout;