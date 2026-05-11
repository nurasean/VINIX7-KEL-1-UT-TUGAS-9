import Link from "next/link";
import ProductCard from "./ProductCard";
import { similarProducts } from "../data";

export default function SimilarProducts() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "42px",
        gap: "24px",
        width: "100%",
        minWidth: "1440px",
        height: "622px",
        background: "#F0F2F8",
      }}
    >
      <h2
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
        Produk Serupa
      </h2>

      <div
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
        {similarProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* TOMBOL LEBIH BANYAK - SESUAI FIGMA */}
      <Link
        href="/marketplace/category/baju"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "12px 24px",
          gap: "10px",
          width: "125px",
          height: "39px",
          background: "#FE7F2D",
          borderRadius: "20px",
          flex: "none",
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        <span
          style={{
            width: "77px",
            height: "15px",
            fontFamily: "Inter, var(--font-poppins), sans-serif",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "15px",
            color: "#FFFFFF",
            whiteSpace: "nowrap",
          }}
        >
          Lebih Banyak
        </span>
      </Link>
    </section>
  );
}