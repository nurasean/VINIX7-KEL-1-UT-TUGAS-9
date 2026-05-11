export default function DashboardLoading() {
  return (
    <main className="min-h-screen bg-[#F0F2F8] px-[42px] py-[42px] text-[#08497A]">
      <section className="mx-auto max-w-[1200px]">
        <div className="mb-[32px] h-[46px] w-[360px] animate-pulse rounded-[12px] bg-[#D9EAF6]" />

        <div className="grid grid-cols-3 gap-[24px]">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-[160px] animate-pulse rounded-[20px] bg-white p-[24px]"
            >
              <div className="mb-[20px] h-[24px] w-[140px] rounded-[8px] bg-[#D9EAF6]" />
              <div className="h-[36px] w-[90px] rounded-[8px] bg-[#D9EAF6]" />
            </div>
          ))}
        </div>

        <div className="mt-[32px] rounded-[20px] bg-white p-[24px]">
          <div className="mb-[20px] h-[28px] w-[220px] animate-pulse rounded-[8px] bg-[#D9EAF6]" />

          <div className="space-y-[16px]">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-[56px] animate-pulse rounded-[12px] bg-[#D9EAF6]"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}