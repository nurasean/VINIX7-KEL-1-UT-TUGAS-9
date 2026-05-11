"use client";

import { Search } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function SearchBar({ placeholder = "Cari produk..." }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(value) {
    const params = new URLSearchParams(searchParams);
    const keyword = value.trim();

    if (keyword) {
      params.set("search", keyword);
    } else {
      params.delete("search");
    }

    const queryString = params.toString();

    replace(queryString ? `${pathname}?${queryString}` : pathname);
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        width: "520px",
        height: "48px",
        padding: "0 18px",
        borderRadius: "50px",
        background: "#FFFFFF",
        border: "1px solid #B8DDF2",
      }}
    >
      <Search size={20} color="#4B95C3" />

      <input
        type="text"
        placeholder={placeholder}
        defaultValue={searchParams.get("search")?.toString() || ""}
        onChange={(event) => handleSearch(event.target.value)}
        style={{
          width: "100%",
          height: "24px",
          border: "none",
          outline: "none",
          background: "transparent",
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
          color: "#08497A",
        }}
        className="placeholder:text-[#4B95C3]/60"
      />
    </div>
  );
}