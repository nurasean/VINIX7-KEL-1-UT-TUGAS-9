import Link from "next/link";

export default function MarketplaceNotFoundPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F0F2F8] px-[42px] py-[42px]">
      <div className="flex max-w-[600px] flex-col items-center gap-[24px] text-center">
        <h1 className="text-[39px] font-semibold leading-[58px] text-[#2176B5]">
          Halaman Belum Tersedia
        </h1>

        <p className="text-[16px] leading-[24px] text-[#2F6586]">
          Kategori ini belum dibuat. Untuk sementara, hanya kategori Baju yang
          sudah memiliki halaman sendiri.
        </p>

        <Link
          href="/marketplace"
          className="flex h-[39px] items-center justify-center rounded-[20px] bg-[#FE7F2D] px-[24px] py-[12px] text-[12px] font-medium text-white no-underline"
        >
          Kembali ke Marketplace
        </Link>
      </div>
    </section>
  );
}