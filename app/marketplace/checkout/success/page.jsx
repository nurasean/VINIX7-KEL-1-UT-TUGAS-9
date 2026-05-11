import MarketplaceShell from "../../components/MarketplaceShell";
import SimilarProducts from "../../components/SimilarProducts";

export default function CheckoutSuccessPage() {
  return (
    <MarketplaceShell>
      {/* CHECKOUT SUCCESS */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "42px",
          gap: "24px",
          width: "100%",
          minWidth: "1440px",
          height: "302px",
          background: "#FFFFFF",
        }}
      >
        {/* ICON SUCCESS */}
        <div
          style={{
            position: "relative",
            width: "100px",
            height: "100px",
            flex: "none",
          }}
        >
          {/* CIRCLE */}
          <div
            style={{
              position: "absolute",
              left: "8.33%",
              right: "8.33%",
              top: "8.33%",
              bottom: "8.33%",
              border: "6px solid #FE7F2D",
              borderRadius: "9999px",
              opacity: 0.5,
              boxSizing: "border-box",
            }}
          />

          {/* CHECK */}
          <div
            style={{
              position: "absolute",
              left: "35%",
              top: "39%",
              width: "32px",
              height: "18px",
              borderLeft: "6px solid #FE7F2D",
              borderBottom: "6px solid #FE7F2D",
              transform: "rotate(-45deg)",
              boxSizing: "border-box",
            }}
          />
        </div>

        {/* TEXT */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 0,
            gap: "8px",
            width: "519px",
            height: "94px",
            flex: "none",
          }}
        >
          <h1
            style={{
              margin: 0,
              width: "232px",
              height: "38px",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 600,
              fontSize: "25px",
              lineHeight: "38px",
              color: "#FE7F2D",
              textAlign: "center",
            }}
          >
            Checkout Berhasil
          </h1>

          <p
            style={{
              margin: 0,
              width: "519px",
              height: "48px",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              textAlign: "center",
              color: "#08497A",
            }}
          >
            Orderan telah masuk ke tab &lsquo;Pesanan Kamu&rsquo;
            <br />
            Cek orderan secara berkala untuk mendapatkan update terbaru
          </p>
        </div>
      </section>

      {/* JANGAN DIHILANGKAN */}
      <SimilarProducts />
    </MarketplaceShell>
  );
}