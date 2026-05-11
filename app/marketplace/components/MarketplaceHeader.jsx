"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Bell,
  Bookmark,
  MessageCircle,
  Search,
  ShoppingCart,
} from "lucide-react";

const iconClass =
  "h-[30px] w-[30px] text-[#F0F2F8] transition hover:scale-110";

export default function MarketplaceHeader() {
  const router = useRouter();

  function handleSearch(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const keyword = formData.get("search")?.toString().trim();

    if (!keyword) {
      router.push("/marketplace");
      return;
    }

    router.push(`/marketplace?search=${encodeURIComponent(keyword)}`);
  }

  return (
    <header className="fixed left-0 top-0 z-50 flex h-[108px] w-full items-center justify-between gap-[191px] bg-[#2176B5] px-[42px] py-[24px] text-[#F0F2F8]">
      {/* LEFT AREA: LOGO + SEARCH + CATEGORY */}
      <div className="mx-auto flex h-[60px] w-[698px] items-center gap-[32px]">
        {/* LOGO */}
        <Link
          href="/marketplace"
          className="logo-font flex h-[60px] w-[64px] shrink-0 items-center justify-center text-center text-[25px] font-normal leading-[30px] tracking-[0.12em] text-[#F0F2F8] no-underline"
        >
          2nd
          <br />
          Time
        </Link>

        {/* SEARCH BOX */}
<form
  onSubmit={handleSearch}
  className="flex h-[57px] w-[408px] shrink-0 items-center gap-[16px] rounded-[20px] bg-[#F7F8F0]/25 px-[16px]"
>
  <Search className="h-[25px] w-[25px] shrink-0 text-[#F0F2F8]" />

  <input
    type="text"
    name="search"
    placeholder="Temukan Baju, Celana, dan lainnya. . ."
    className="h-[24px] w-[301px] border-0 bg-transparent p-0 text-[16px] font-normal leading-[24px] text-[#F0F2F8] shadow-none outline-none ring-0 placeholder:text-[#F0F2F8] focus:border-0 focus:outline-none focus:ring-0 focus-visible:outline-none"
  />
</form>

        {/* CATEGORY */}
        <Link
          href="/marketplace"
          className="flex h-[25px] w-[162px] shrink-0 items-center gap-[8px] text-[#F0F2F8] no-underline transition hover:opacity-80"
        >
          <span
            className="grid h-[25px] w-[25px] shrink-0 grid-cols-2 gap-[4px]"
            aria-hidden="true"
          >
            <span className="rounded-[4px] bg-[#F0F2F8]" />
            <span className="rounded-[4px] bg-[#F0F2F8]" />
            <span className="rounded-[4px] bg-[#F0F2F8]" />
            <span className="rounded-[4px] bg-[#F0F2F8]" />
          </span>

          <span className="h-[24px] w-[129px] text-[16px] font-normal leading-[24px] text-[#F0F2F8]">
            Semua Kategori
          </span>
        </Link>
      </div>

      {/* RIGHT AREA: ICONS + PROFILE */}
      <div className="mx-auto flex h-[60px] w-[282.35px] items-center gap-[24px]">
        <nav
          className="flex h-[35px] w-[198.35px] items-center gap-[24px]"
          aria-label="Menu marketplace"
        >
          <Link
  href="/marketplace/saved"
  aria-label="Favorit"
  className="flex h-[30px] w-[30px] items-center justify-center"
>
  <Bookmark className={iconClass} />
</Link>

          <Link
  href="/marketplace/cart"
  aria-label="Keranjang"
  className="flex h-[30px] w-[30px] items-center justify-center"
>
  <ShoppingCart className={iconClass} />
</Link>

          <Link
            href="/marketplace/chat"
            className="relative flex h-[31.35px] w-[31.35px] items-center justify-center"
            aria-label="Chat Seller"
          >
            <MessageCircle className="h-[31.35px] w-[31.35px] text-[#F0F2F8] transition hover:scale-110" />

            {/* BADGE CHAT DI UJUNG KANAN ATAS */}
            <span className="absolute -right-[2px] -top-[2px] h-[8px] w-[8px] rounded-full bg-[#DB0606]" />
          </Link>

          <Link
  href="/marketplace/notifications"
  className="relative flex h-[35px] w-[35px] items-center justify-center"
  aria-label="Notifikasi"
>
  <Bell className="h-[35px] w-[35px] fill-[#F0F2F8] text-[#F0F2F8] transition hover:scale-110" />

  {/* BADGE NOTIFIKASI */}
  <span className="absolute right-[4px] top-[2px] h-[8px] w-[8px] rounded-full bg-[#DB0606]" />
</Link>
        </nav>

        {/* PROFILE */}
        <Link
          href="/marketplace/profile"
          aria-label="Profil"
          className="flex h-[60px] w-[60px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/20"
        >
          <Image
            src="/images/avatar-4.png"
            alt="Profil pengguna"
            width={60}
            height={60}
            className="h-full w-full object-cover"
          />
        </Link>
      </div>
    </header>
  );
}