import Image from "next/image";
import Link from "next/link";
import { Bookmark, ChevronRight, Star } from "lucide-react";
import SimilarProducts from "./SimilarProducts";
import { formatRupiah } from "../data";

const descriptionText =
  "Lorem ipsum dolor sit amet consectetur. Eget orci velit arcu nulla sit penatibus eget cras ornare. Tortor felis diam parturient nunc fusce. Facilisis vulputate lectus ut accumsan mattis nisl at. Eu lorem mi diam tincidunt nullam morbi diam malesuada. Massa in arcu congue nibh faucibus imperdiet posuere pretium amet. Gravida porttitor vestibulum ante nullam. Odio purus vitae rutrum at arcu aenean quis est gravida. Orci leo id lectus vestibulum. Adipiscing nibh elit dolor praesent massa aliquet vitae. Arcu nec vulputate sapien nunc fusce elementum netus tempor vitae. Nunc lorem volutpat eu elementum nullam nec eros ut.";

const NOT_FOUND_IMAGE = "/marketplace/not-found.jpg";

export default function ProductDetail({ product }) {
  const cartHref = "/marketplace/cart";
  const checkoutHref = `/marketplace/checkout?product=${product.slug}`;

  const productCondition =
    product.condition === "Baik" ? "Baik, tanpa kerusakan" : product.condition;

  const thumbnails = [
    product.image,
    NOT_FOUND_IMAGE,
    NOT_FOUND_IMAGE,
    NOT_FOUND_IMAGE,
  ];

  return (
    <div className="bg-white">
      {/* DETAIL UTAMA */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0px 42px",
          gap: "24px",
          width: "100%",
          minWidth: "1440px",
          height: "617px",
          background: "#FFFFFF",
        }}
      >
        {/* BREADCRUMB */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            gap: "10px",
            width: "228px",
            height: "32px",
          }}
        >
          <Link
            href="/marketplace"
            style={{
              width: "47px",
              height: "32px",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "32px",
              letterSpacing: "-0.019em",
              color: "#4B95C3",
              textDecoration: "none",
            }}
          >
            Home
          </Link>

          <ChevronRight size={20} color="#4B95C3" strokeWidth={1.25} />

          <Link
            href="/marketplace/category/baju"
            style={{
              width: "65px",
              height: "32px",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "32px",
              letterSpacing: "-0.019em",
              color: "#4B95C3",
              textDecoration: "none",
            }}
          >
            Kategori
          </Link>

          <ChevronRight size={20} color="#4B95C3" strokeWidth={1.25} />

          <span
            style={{
              width: "36px",
              height: "32px",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "32px",
              letterSpacing: "-0.019em",
              color: "#2176B5",
            }}
          >
            {product.category || "Baju"}
          </span>
        </div>

        {/* PRODUCT MAIN CONTENT */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 0,
            gap: "49px",
            width: "1356px",
            height: "561px",
          }}
        >
          {/* LEFT IMAGE AREA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: 0,
              gap: "23px",
              width: "462px",
              height: "561px",
              flex: "none",
            }}
          >
            <div
              style={{
                width: "462px",
                height: "450px",
                background: "#D9D9D9",
                borderRadius: "20px",
                overflow: "hidden",
                flex: "none",
              }}
            >
              <Image
                src={product.image}
                alt={product.title}
                width={462}
                height={450}
                priority
                style={{
                  width: "462px",
                  height: "450px",
                  objectFit: "cover",
                }}
              />
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 0,
                gap: "24px",
                width: "462px",
                height: "88px",
                flex: "1",
              }}
            >
              {thumbnails.map((thumb, index) => (
                <div
                  key={`${thumb}-${index}`}
                  style={{
                    boxSizing: "border-box",
                    width: "97.5px",
                    height: "88px",
                    background: "#D9D9D9",
                    border: "1px solid #4B95C3",
                    borderRadius: "20px",
                    overflow: "hidden",
                    flex: "1",
                  }}
                >
                  <Image
                    src={thumb}
                    alt={`${product.title} thumbnail ${index + 1}`}
                    width={98}
                    height={88}
                    style={{
                      width: "98px",
                      height: "88px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT DETAIL AREA */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "flex-start",
              padding: 0,
              gap: "23px",
              width: "845px",
              height: "561px",
              flex: "none",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: 0,
                gap: "32px",
                width: "845px",
                height: "450px",
                flex: "none",
              }}
            >
              {/* TITLE PRICE + INTEREST */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 0,
                  gap: "32px",
                  width: "845px",
                  height: "80px",
                  alignSelf: "stretch",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    padding: 0,
                    gap: "16px",
                    margin: "0 auto",
                    width: "300px",
                    height: "80px",
                    flex: "none",
                  }}
                >
                  <h1
                    style={{
                      margin: 0,
                      width: "300px",
                      height: "32px",
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "24px",
                      lineHeight: "32px",
                      letterSpacing: "-0.019em",
                      color: "#2176B5",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {product.title}
                  </h1>

                  <p
                    style={{
                      margin: 0,
                      width: "300px",
                      height: "32px",
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "32px",
                      lineHeight: "32px",
                      letterSpacing: "-0.019em",
                      color: "#08497A",
                    }}
                  >
                    {formatRupiah(product.price)}
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 0,
                    gap: "16px",
                    margin: "0 auto",
                    width: "199px",
                    height: "30px",
                    flex: "none",
                  }}
                >
                  <Bookmark
                    size={30}
                    fill="#FE7F2D"
                    color="#FE7F2D"
                    opacity={0.75}
                  />

                  <span
                    style={{
                      width: "153px",
                      height: "24px",
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#FE7F2D",
                      whiteSpace: "nowrap",
                    }}
                  >
                    200 Orang Tertarik!
                  </span>
                </div>
              </div>

              {/* STATUS */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  padding: 0,
                  gap: "24px",
                  width: "285px",
                  height: "40px",
                  flex: "none",
                }}
              >
                <span
                  style={{
                    width: "53px",
                    height: "24px",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#2176B5",
                  }}
                >
                  Status
                </span>

                <span
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "8px 16px",
                    gap: "10px",
                    minWidth: "208px",
                    height: "40px",
                    background: "#FE7F2D",
                    borderRadius: "20px",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#FFFFFF",
                    whiteSpace: "nowrap",
                  }}
                >
                  {productCondition}
                </span>
              </div>

              {/* DESCRIPTION */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: 0,
                  gap: "16px",
                  width: "845px",
                  height: "266px",
                  flex: "1",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    width: "845px",
                    height: "24px",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#2F6586",
                  }}
                >
                  Deskripsi
                </h2>

                <p
                  style={{
                    margin: 0,
                    width: "845px",
                    height: "226px",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "24px",
                    color: "#4B95C3",
                    overflow: "hidden",
                  }}
                >
                  {descriptionText}
                </p>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 0,
                gap: "32px",
                width: "845px",
                height: "88px",
                alignSelf: "stretch",
                flex: "none",
              }}
            >
              <Link
                href={cartHref}
                style={{
                  boxSizing: "border-box",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "16px 32px",
                  gap: "16px",
                  width: "405px",
                  height: "88px",
                  background: "#FFFFFF",
                  border: "2px solid #FE7F2D",
                  borderRadius: "50px",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "25px",
                  lineHeight: "38px",
                  color: "#FE7F2D",
                  textDecoration: "none",
                  flex: "none",
                }}
              >
                Keranjang
              </Link>

              <Link
                href={checkoutHref}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "16px 32px",
                  gap: "16px",
                  width: "405px",
                  height: "88px",
                  background: "#FE7F2D",
                  borderRadius: "50px",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "25px",
                  lineHeight: "38px",
                  color: "#F0F2F8",
                  textDecoration: "none",
                  flex: "none",
                }}
              >
                Beli Sekarang
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SPESIFIKASI */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0px 42px",
          gap: "10px",
          width: "100%",
          minWidth: "1440px",
          height: "134px",
          background: "#FFFFFF",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "16px 24px",
            gap: "24px",
            width: "1356px",
            height: "134px",
            background: "#FFFFFF",
            borderRadius: "20px",
            alignSelf: "stretch",
          }}
        >
          <h2
            style={{
              margin: 0,
              width: "109px",
              height: "30px",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "20px",
              lineHeight: "30px",
              color: "#2176B5",
            }}
          >
            Spesifikasi
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 0,
              gap: "80px",
              width: "1308px",
              height: "48px",
              alignSelf: "stretch",
            }}
          >
            <Spec label="Stok" value={product.stock || 1} />
            <Spec label="Kategori" value={product.category || "Baju"} />
            <Spec label="Garansi" value="7 hari" />
            <Spec label="Transaksi" value="COD dan Transfer" />
          </div>
        </div>
      </section>

      {/* PROFIL SELLER */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "0px 42px",
          gap: "24px",
          width: "100%",
          minWidth: "1440px",
          height: "130px",
          background: "#FFFFFF",
        }}
      >
        <h2
          style={{
            margin: 0,
            width: "1356px",
            height: "30px",
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 600,
            fontSize: "20px",
            lineHeight: "30px",
            color: "#08497A",
            alignSelf: "stretch",
          }}
        >
          Profil Seller
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 0,
            gap: "0px",
            width: "1356px",
            height: "76px",
            alignSelf: "stretch",
          }}
        >
          {/* LEFT SELLER AREA */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              padding: 0,
              gap: "42px",
              width: "569px",
              height: "76px",
              flex: "none",
            }}
          >
            {/* SELLER PROFILE */}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: 0,
                gap: "24px",
                width: "319px",
                height: "76px",
                flex: "none",
              }}
            >
              <div
                style={{
                  width: "63px",
                  height: "60px",
                  flex: "none",
                  overflow: "hidden",
                  borderRadius: "100px",
                  background: "#7C7C7C",
                }}
              >
                <Image
                  src={product.avatar}
                  alt={product.seller}
                  width={63}
                  height={60}
                  style={{
                    width: "63px",
                    height: "60px",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  padding: 0,
                  gap: "8px",
                  width: "232px",
                  height: "76px",
                  flex: "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 0,
                    gap: "8px",
                    width: "232px",
                    height: "24px",
                    alignSelf: "stretch",
                  }}
                >
                  <span
                    style={{
                      width: "146px",
                      height: "24px",
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "16px",
                      lineHeight: "24px",
                      color: "#08497A",
                      overflow: "hidden",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {product.seller}
                  </span>

                  <Star
                    size={24}
                    fill="#FE7F2D"
                    color="#FE7F2D"
                    strokeWidth={1.5}
                  />

                  <span
                    style={{
                      width: "46px",
                      height: "18px",
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "18px",
                      color: "#4B95C3",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {product.rating || "4,7 (89)"}
                  </span>
                </div>

                <span
                  style={{
                    width: "46px",
                    height: "18px",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "#4B95C3",
                  }}
                >
                  {product.city}
                </span>

                <span
                  style={{
                    width: "149px",
                    height: "18px",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 400,
                    fontSize: "12px",
                    lineHeight: "18px",
                    color: "#4B95C3",
                    whiteSpace: "nowrap",
                  }}
                >
                  Terakhir online 2 hari lalu
                </span>
              </div>
            </div>

            {/* SELLER STATS */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                padding: 0,
                gap: "16px",
                width: "208px",
                height: "64px",
                flex: "none",
              }}
            >
              <SellerInfo
                label="Bergabung"
                value={product.joined || "11 bulan lalu"}
              />

              <SellerInfo
                label="Produk"
                value={product.products || "8 Produk"}
              />
            </div>
          </div>

          {/* CHAT SELLER BUTTON */}
          <Link
            href="/marketplace/chat"
            style={{
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              padding: "16px 32px",
              gap: "16px",
              width: "175px",
              height: "62px",
              background: "#FFFFFF",
              border: "2px solid #FE7F2D",
              borderRadius: "50px",
              flex: "none",
              textDecoration: "none",
            }}
          >
            <span
              style={{
                width: "111px",
                height: "30px",
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "30px",
                color: "#FE7F2D",
                whiteSpace: "nowrap",
                textAlign: "center",
              }}
            >
              Chat Seller
            </span>
          </Link>
        </div>
      </section>

      <SimilarProducts />
    </div>
  );
}

function Spec({ label, value }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 0,
        gap: "24px",
        margin: "0 auto",
        width: "200px",
        minHeight: label === "Transaksi" ? "48px" : "24px",
        flex: "none",
      }}
    >
      <span
        style={{
          width:
            label === "Kategori"
              ? "70px"
              : label === "Garansi"
              ? "65px"
              : label === "Transaksi"
              ? "80px"
              : "36px",
          minHeight: "24px",
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "24px",
          color: "#2176B5",
        }}
      >
        {label}
      </span>

      <span
        style={{
          width: label === "Transaksi" ? "73px" : "90px",
          minHeight: label === "Transaksi" ? "48px" : "24px",
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 400,
          fontSize: "16px",
          lineHeight: "24px",
          color: "#2176B5",
        }}
      >
        {value}
      </span>
    </div>
  );
}

function SellerInfo({ label, value }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        padding: 0,
        gap: "24px",
        width: "208px",
        height: "24px",
      }}
    >
      <span
        style={{
          width: "92px",
          height: "24px",
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 600,
          fontSize: "16px",
          lineHeight: "24px",
          color: "#08497A",
        }}
      >
        {label}
      </span>

      <span
        style={{
          width: "92px",
          height: "24px",
          fontFamily: "var(--font-poppins), Poppins, sans-serif",
          fontWeight: 300,
          fontSize: "16px",
          lineHeight: "24px",
          color: "#4B95C3",
          whiteSpace: "nowrap",
        }}
      >
        {value}
      </span>
    </div>
  );
}