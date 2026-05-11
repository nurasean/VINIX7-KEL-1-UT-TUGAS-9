import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import MarketplaceShell from "../../components/MarketplaceShell";
import { bajuProducts, categories, formatRupiah } from "../../data";

function chunkItems(items, size) {
  const rows = [];

  for (let index = 0; index < items.length; index += size) {
    rows.push(items.slice(index, index + size));
  }

  return rows;
}

function getCategoryHref(categoryName) {
  return categoryName.toLowerCase() === "baju"
    ? "/marketplace/category/baju"
    : "/marketplace/not-found";
}

export default function BajuCategoryPage() {
  const productRows = chunkItems(bajuProducts, 5);

  return (
    <MarketplaceShell>
      {/* CATEGORY NAV */}
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
            const active = category.name.toLowerCase() === "baju";

            return (
              <Link
                key={category.name}
                href={getCategoryHref(category.name)}
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
                    background: active ? "#C7E0F1" : "#F0F2F8",
                    borderRadius: "20px",
                    flex: "none",
                  }}
                  className="transition group-hover:bg-[#C7E0F1] group-hover:shadow-md"
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
                    fontWeight: active ? 600 : 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    textAlign: "center",
                    color: "#2176B5",
                  }}
                  className="transition group-hover:text-[#FE7F2D]"
                >
                  {category.name}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* BAJU CONTENT */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "42px",
          gap: "42px",
          width: "100%",
          minWidth: "1440px",
          height: "1553px",
          background: "#F0F2F8",
          overflowX: "auto",
        }}
      >
        {/* TITLE + FILTER */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 0,
            gap: "24px",
            width: "1356px",
            height: "59px",
          }}
        >
          <h1
            style={{
              margin: 0,
              width: "89px",
              height: "59px",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "39px",
              lineHeight: "58px",
              color: "#2176B5",
            }}
          >
            Baju
          </h1>

          <button
            type="button"
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: 0,
              gap: "8px",
              width: "73px",
              height: "25px",
              border: "none",
              background: "transparent",
              color: "#2176B5",
              cursor: "pointer",
            }}
          >
            <Filter size={25} strokeWidth={2} />

            <span
              style={{
                width: "40px",
                height: "24px",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "24px",
                color: "#2176B5",
              }}
            >
              Filter
            </span>
          </button>
        </div>

        {/* PRODUCT ROWS */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 0,
            gap: "32px",
            width: "1356px",
            height: "1276px",
          }}
        >
          {productRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 0,
                gap: "24px",
                width: "1356px",
                height: "404px",
              }}
            >
              {row.map((product) => (
                <BajuProductCard key={product.id} product={product} />
              ))}
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: 0,
            gap: "16px",
            width: "360px",
            height: "50px",
          }}
        >
          <button
            type="button"
            className="flex h-[40px] w-[40px] items-center justify-center border-0 bg-transparent text-[#4B95C3]"
            aria-label="Halaman sebelumnya"
          >
            <ChevronLeft size={40} strokeWidth={2} />
          </button>

          <button
            type="button"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-0 bg-[#2176B5] text-[24px] font-medium leading-[36px] text-white"
          >
            1
          </button>

          <button
            type="button"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-0 bg-transparent text-[24px] font-medium leading-[36px] text-[#4B95C3]"
          >
            2
          </button>

          <button
            type="button"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-0 bg-transparent text-[24px] font-medium leading-[36px] text-[#4B95C3]"
          >
            3
          </button>

          <button
            type="button"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-0 bg-transparent text-[24px] font-medium leading-[36px] text-[#4B95C3]"
          >
            . . .
          </button>

          <button
            type="button"
            className="flex h-[40px] w-[40px] items-center justify-center border-0 bg-transparent text-[#2176B5]"
            aria-label="Halaman berikutnya"
          >
            <ChevronRight size={40} strokeWidth={2} />
          </button>
        </div>
      </section>
    </MarketplaceShell>
  );
}

function BajuProductCard({ product }) {
  return (
    <Link
      href={`/marketplace/products/${product.slug}`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "24px",
        gap: "24px",
        width: "252px",
        height: "404px",
        background: "#FFFFFF",
        borderRadius: "20px",
        flex: "none",
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
      }}
      className="transition hover:-translate-y-1 hover:shadow-xl"
      aria-label={`Lihat detail produk ${product.title}`}
    >
      {/* SELLER */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          padding: 0,
          gap: "15px",
          width: "204px",
          height: "42px",
          flex: "none",
        }}
      >
        <Image
          src={product.avatar}
          alt={product.seller}
          width={40}
          height={40}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50px",
            objectFit: "cover",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: 0,
            width: "153px",
            height: "42px",
          }}
        >
          <span
            style={{
              width: "153px",
              height: "24px",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#2176B5",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {product.seller}
          </span>

          <span
            style={{
              width: "153px",
              height: "18px",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "18px",
              color: "#2176B5",
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
            }}
          >
            {product.city}
          </span>
        </div>
      </div>

      {/* PRODUCT IMAGE */}
      <div
        style={{
          position: "relative",
          width: "204px",
          height: "204px",
          borderRadius: "20px",
          overflow: "hidden",
          background: "#F0F2F8",
          flex: "none",
        }}
      >
        <Image
          src={product.image}
          alt={product.title}
          width={204}
          height={204}
          style={{
            width: "204px",
            height: "204px",
            objectFit: "cover",
          }}
        />

        <span
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px 16px",
            width: product.condition === "Baik" ? "59px" : "129px",
            height: "36px",
            background: "#FE7F2D",
            borderRadius: "0px 20px 0px 0px",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 400,
            fontSize: "13px",
            lineHeight: "20px",
            color: "#FFFFFF",
            whiteSpace: "nowrap",
          }}
        >
          {product.condition}
        </span>
      </div>

      {/* PRODUCT DETAIL */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: 0,
          gap: "8px",
          width: "196px",
          height: "62px",
          flex: "none",
        }}
      >
        <span
          style={{
            width: "196px",
            height: "24px",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#2F6586",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
          }}
        >
          {product.title}
        </span>

        <span
          style={{
            height: "30px",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "30px",
            color: "#2176B5",
            whiteSpace: "nowrap",
          }}
        >
          {formatRupiah(product.price)}
        </span>
      </div>
    </Link>
  );
}