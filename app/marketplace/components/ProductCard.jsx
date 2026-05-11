import Image from "next/image";
import Link from "next/link";
import { formatRupiah } from "../data";

function getBadgeWidth(condition) {
  return condition === "Baik" ? 59 : 129;
}

export default function ProductCard({ product }) {
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
      }}
    >
      {/* SELLER INFO */}
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
            flex: "none",
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
            flex: "none",
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
              display: "flex",
              alignItems: "center",
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: 0,
          gap: "10px",
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
            position: "absolute",
            inset: 0,
            width: "204px",
            height: "204px",
            objectFit: "cover",
          }}
        />

        <span
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: "8px 16px",
            gap: "10px",
            width: `${getBadgeWidth(product.condition)}px`,
            height: "36px",
            background: "#FE7F2D",
            borderRadius: "0px 20px 0px 0px",
            flex: "none",
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