"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteChrome({ children }) {
  const pathname = usePathname();

  const isMarketplacePage = pathname.startsWith("/marketplace");

  if (isMarketplacePage) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="min-h-screen pt-[108px]">
        {children}
      </main>

      <Footer />
    </div>
  );
}