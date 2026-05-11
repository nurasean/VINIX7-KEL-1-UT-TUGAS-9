import Link from "next/link";
import MarketplaceShell from "./components/MarketplaceShell";
import ProductCard from "./components/ProductCard";
import SearchBar from "./components/SearchBar";
import { categories, products } from "./data";

export default async function MarketplacePage({ searchParams }) {
  const params = await Promise.resolve(searchParams);
  const loginSuccess = params?.login === "success";
  const searchKeyword = params?.search?.toString().toLowerCase().trim() || "";

  const filteredProducts = products.filter((product) => {
    if (!searchKeyword) return true;

    const title = product.title?.toLowerCase() || "";
    const seller = product.seller?.toLowerCase() || "";
    const condition = product.condition?.toLowerCase() || "";
    const category = product.category?.toLowerCase() || "";

    return (
      title.includes(searchKeyword) ||
      seller.includes(searchKeyword) ||
      condition.includes(searchKeyword) ||
      category.includes(searchKeyword)
    );
  });

  const firstRowProducts = filteredProducts.slice(0, 5);
  const secondRowProducts = filteredProducts.slice(5, 10);

  return (
    <MarketplaceShell>
      {loginSuccess && (
        <div className="bg-[#FE7F2D] px-[42px] py-3 text-center text-[16px] font-semibold text-white">
          Berhasil login! Selamat datang di marketplace 2ndTime.
        </div>
      )}

      {/* HERO */}
      <section
        className="h-[350px] w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/marketplace/hero-banner.jpg')" }}
        aria-label="Temukan Barang Preloved Berkualitas"
      />

      {/* CATEGORY */}
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 42px",
          gap: "40px",
          width: "100%",
          minWidth: "1440px",
          height: "172px",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "40px",
            width: "1356px",
            height: "124px",
            margin: "0 auto",
          }}
        >
          {categories.map((category) => {
            const isBaju = category.name.toLowerCase() === "baju";

            const href = isBaju
              ? "/marketplace/category/baju"
              : "/marketplace/not-found";

            return (
              <Link
                key={category.name}
                href={href}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: 0,
                  gap: "8px",
                  width: "92px",
                  height: "124px",
                  margin: "0 auto",
                  flex: "none",
                  textDecoration: "none",
                  cursor: "pointer",
                }}
                className="group transition hover:-translate-y-1"
              >
                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "16px",
                    gap: "10px",
                    width: "92px",
                    height: "92px",
                    background: "#F0F2F8",
                    borderRadius: "20px",
                    flex: "none",
                  }}
                  className="transition group-hover:bg-[#E4E8F2] group-hover:shadow-md"
                >
                  {category.name === "Kategori" ? (
                    <span
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(2, 1fr)",
                        gap: "8px",
                        width: "60px",
                        height: "60px",
                      }}
                    >
                      <span className="rounded-[8px] bg-[#FE7F2D]" />
                      <span className="rounded-full bg-[#FE7F2D]" />
                      <span className="rounded-full bg-[#FE7F2D]" />
                      <span className="rounded-[8px] bg-[#FE7F2D]" />
                    </span>
                  ) : (
                    <span
                      style={{
                        width: "60px",
                        height: "60px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "60px",
                        lineHeight: "60px",
                      }}
                    >
                      {category.icon}
                    </span>
                  )}
                </span>

                <span
                  style={{
                    width: "92px",
                    height: "24px",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    textAlign: "center",
                    color: "#2176B5",
                  }}
                  className="transition group-hover:font-semibold group-hover:text-[#FE7F2D]"
                >
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* PRODUK TERKINI */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "42px",
          gap: "32px",
          width: "100%",
          minWidth: "1440px",
          minHeight: "1074px",
          background: "#F0F2F8",
          overflowX: "auto",
        }}
      >
        <h1
          style={{
            margin: 0,
            width: "1356px",
            height: "47px",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "31px",
            lineHeight: "46px",
            textAlign: "center",
            color: "#2176B5",
          }}
        >
          Produk Terkini
        </h1>

        <SearchBar placeholder="Cari produk second..." />

        {filteredProducts.length === 0 ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "1356px",
              height: "404px",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "18px",
              lineHeight: "28px",
              color: "#2176B5",
            }}
          >
            Produk tidak ditemukan.
          </div>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 0,
                gap: "24px",
                width: "1356px",
                height: "404px",
                flex: "none",
              }}
            >
              {firstRowProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 0,
                gap: "24px",
                width: "1356px",
                height: "404px",
                flex: "none",
              }}
            >
              {secondRowProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )}

        <Link
          href="/marketplace"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px 24px",
            gap: "10px",
            width: "135px",
            height: "39px",
            background: "#FE7F2D",
            borderRadius: "20px",
            fontFamily: "Inter, var(--font-poppins), sans-serif",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "15px",
            color: "#FFFFFF",
            textDecoration: "none",
            whiteSpace: "nowrap",
          }}
        >
          Lebih Banyak
        </Link>
      </section>
    </MarketplaceShell>
  );
}