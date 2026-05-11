import Link from "next/link";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#F0F2F8] px-[42px] py-[42px] text-[#08497A]">
      <section className="mx-auto flex w-[1356px] flex-col gap-[24px] rounded-[20px] bg-white p-[32px]">
        <div className="flex items-center justify-between gap-[24px]">
          <div>
            <p className="m-0 text-[16px] font-normal leading-[24px] text-[#4B95C3]">
              Admin Area
            </p>
            <h1 className="m-0 text-[39px] font-semibold leading-[58px] text-[#2176B5]">
              Dashboard 2ndTime
            </h1>
          </div>

          <Link
            href="/marketplace"
            className="flex h-[56px] items-center justify-center rounded-[50px] bg-[#FE7F2D] px-[32px] text-[16px] font-semibold leading-[24px] text-[#F0F2F8] no-underline"
          >
            Kembali ke Marketplace
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-[24px]">
          <DashboardCard title="Produk Aktif" value="10" />
          <DashboardCard title="Pesanan Demo" value="3" />
          <DashboardCard title="Chat Seller" value="9" />
        </div>

        <p className="m-0 text-[16px] font-normal leading-[24px] text-[#4B95C3]">
          Halaman ini dipakai untuk membuktikan middleware. Jika belum login,
          URL /dashboard akan otomatis diarahkan ke halaman login.
        </p>
      </section>
    </main>
  );
}

function DashboardCard({ title, value }) {
  return (
    <article className="rounded-[20px] bg-[#F0F2F8] p-[24px]">
      <p className="m-0 text-[16px] font-semibold leading-[24px] text-[#4B95C3]">
        {title}
      </p>
      <p className="m-0 mt-[8px] text-[39px] font-semibold leading-[58px] text-[#2176B5]">
        {value}
      </p>
    </article>
  );
}
