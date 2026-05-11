import MarketplaceShell from "./components/MarketplaceShell";

export default function MarketplaceLoading() {
  return (
    <MarketplaceShell>
      <main className="min-h-screen bg-[#F0F2F8]">
        <section className="h-[350px] w-full animate-pulse bg-[#D9EAF6]" />

        <section className="bg-white px-[42px] py-[24px]">
          <div className="mx-auto flex h-[124px] w-[1356px] items-center justify-between">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="flex flex-col items-center gap-[8px]">
                <div className="h-[92px] w-[92px] animate-pulse rounded-[20px] bg-[#D9EAF6]" />
                <div className="h-[20px] w-[70px] animate-pulse rounded-[8px] bg-[#D9EAF6]" />
              </div>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center gap-[32px] px-[42px] py-[42px]">
          <div className="h-[47px] w-[320px] animate-pulse rounded-[12px] bg-[#D9EAF6]" />
          <div className="h-[48px] w-[520px] animate-pulse rounded-[50px] bg-white" />

          <div className="grid w-[1356px] grid-cols-5 gap-[24px]">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="h-[404px] animate-pulse rounded-[20px] bg-white" />
            ))}
          </div>

          <div className="grid w-[1356px] grid-cols-5 gap-[24px]">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="h-[404px] animate-pulse rounded-[20px] bg-white" />
            ))}
          </div>
        </section>
      </main>
    </MarketplaceShell>
  );
}