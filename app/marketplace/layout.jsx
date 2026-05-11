import MarketplaceHeader from "./components/MarketplaceHeader";
import MarketplaceFooter from "./components/MarketplaceFooter";

export default function MarketplaceLayout({ children }) {
  return (
    <div className="min-h-screen bg-white">
      <MarketplaceHeader />

      <main className="min-h-screen pt-[108px]">{children}</main>

      <MarketplaceFooter />
    </div>
  );
}